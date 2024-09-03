/*
  The code provides a registration page
 */

'use client';

import 'yup-phone-lite';

import { yupResolver } from '@hookform/resolvers/yup'; // Resolver for Yup validation with React Hook Form
// MUI library imports
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from '@mui/material';
import { startRegistration } from '@simplewebauthn/browser'; // WebAuthn registration function
import moment from 'moment';
import { matchIsValidTel, MuiTelInput } from 'mui-tel-input';
import { RedirectType } from 'next/dist/client/components/redirect'; // Next.js redirect type
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Link from 'next/link'; // Link component from Next.js for navigation
import { redirect, useRouter } from 'next/navigation'; // Next.js functions for navigation
import { useSession } from 'next-auth/react'; // NextAuth session hook
import { useEffect, useState } from 'react'; // React hook for side effects
import { Controller, useForm } from 'react-hook-form'; // Form management library
import * as yup from 'yup'; // Yup library for form validation

import LoadingSpinner from '@/components/shared/Loading';
import { SITE_CONFIG } from '@/constants';
import type { AlertBarProps } from '@/hooks/useAlertBar';
import type { ConfirmationDialogProps } from '@/hooks/useConfirmDialog';
import { useSharedUtilContext } from '@/hooks/useSharedUtilContext';
import { handleRegistrationError } from '@/lib/webauthn';

/**
 * The Register component handles the user registration process.
 * It displays a registration form where users can enter their first name, last name, and email.
 * The form is validated using the yup library and React Hook Form.
 * Once the form is submitted, the registerWebauthn function is called to initiate the WebAuthn registration process.
 * If the user is already authenticated, they will be redirected to the dashboard page.
 * While the registration process is in progress, a loading spinner is displayed.
 * If an error occurs during registration, an error toast is shown.
 *
 * @returns {JSX.Element} The JSX element representing the Register component.
 */
export default function Register(): JSX.Element {
  // Retrieving session data and status using NextAuth hook
  const { status } = useSession();
  const [loadingMessage, setLoadingMessage] = useState<string>('');
  // Checking authorization status
  const authorized = status === 'authenticated';
  const unAuthorized = status === 'unauthenticated';
  const loading = status === 'loading';
  const { setAlertBarProps, openConfirmDialog } = useSharedUtilContext();
  // Initializing Next.js router
  const router = useRouter();

  // Validation schema for registration form
  const registerForm = {
    fullName: yup.string().required('Full name is required'),
    email: yup
      .string()
      .required('Email is required')
      .email('Invalid email format'),
    dob: yup
      .date()
      .required('Date of birth is required')
      .max(new Date(), 'Date of birth must be in the past'),
    mobile: yup
      .string()
      // .phone("IN", "Please enter a valid mobile number")
      .required('A Mobile number is required'),
    // .matches(/^\+91 [6-9]\d{4} \d{5}$/, "Please enter a valid mobile number"),
  };

  // Initializing React Hook Form with validation resolver
  // Destructuring the useForm hook and its return values:
  // - register: Function to register form inputs with React Hook Form
  // - control: Object that allows you to use uncontrolled components with React Hook Form
  // - handleSubmit: Function to handle form submission with React Hook Form
  // - formState: Object containing the state of the form, including errors and touched fields

  // Configuring the useForm hook with the validation resolver:
  // - resolver: yupResolver from the yup library is used to integrate Yup validation with React Hook Form
  // - yupResolver takes the validation schema (registerForm)
  // - This configuration ensures that the form inputs are validated according to the defined rules in registerForm
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(yup.object().shape(registerForm)),
  });

  // Form submission handler
  async function onSubmit(data: any) {
    setLoadingMessage('Registering...');
    const dobFormatted = moment(data.dob).format('YYYY-MM-DD');
    await registerWebauthn(
      data.email,
      data.fullName,
      dobFormatted,
      data.mobile,
      router,
      openConfirmDialog,
      setAlertBarProps,
    );
    setLoadingMessage('');
  }

  // Effect hook to handle page navigation based on session status
  useEffect(() => {
    // Check if the session is loading or the router is not ready
    if (loading) {
      return;
    }
    // If the user is authorized, redirect to the dashboard page
    if (authorized) {
      redirect('/home', RedirectType.push);
    }
  }, [loading, unAuthorized, authorized]);

  // If the user refreshed the page or somehow navigated to the protected page
  if (loading) {
    return (
      <>
        {/* Display a loading backdrop */}
        <Backdrop
          open={true}
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color='inherit' />
        </Backdrop>
      </>
    );
  }

  return (
    <>
      {/* Display branding */}
      <Box style={{ textAlign: 'center', margin: '0 10% 5% 10%' }}>
        {/* <img
          src="/zkidLogo_v1.svg"
          alt="EGS Logo"
          style={{
            maxWidth: "100%",
            height: "auto",
            marginBottom: "2rem",
            display: "inline-block",
          }}
        /> */}
        {/* <AppLogoSVG theme="light" /> */}
        <Typography variant='h5' component='h2'>
          {SITE_CONFIG.title}
        </Typography>
      </Box>

      {/* Registration form */}
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <Typography component='h1' variant='h5' sx={{ marginBottom: 0 }}>
          Registration
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name field */}
        <TextField
          id='fullName'
          type='text'
          variant='outlined'
          color='primary'
          label='Full Name (Firstname and Lastname)'
          fullWidth
          {...register('fullName')}
          error={touchedFields.fullName && Boolean(errors.fullName)}
          helperText={touchedFields.fullName ? errors.fullName?.message : ''}
          sx={{ mb: 2 }}
        />
        {/* Date of Birth field */}
        <TextField
          type='date'
          variant='outlined'
          color='primary'
          label='Date of Birth (DD/MM/YYYY)'
          InputLabelProps={{ shrink: true }}
          {...register('dob')}
          error={touchedFields.dob && Boolean(errors.dob)}
          helperText={touchedFields.dob ? errors.dob?.message : ''}
          fullWidth
          sx={{ mb: 2 }}
        />
        {/* Email field */}
        <TextField
          type='email'
          variant='outlined'
          color='primary'
          label='Email'
          {...register('email')}
          error={touchedFields.email && Boolean(errors.email)}
          helperText={touchedFields.email ? errors.email?.message : ''}
          fullWidth
          sx={{ mb: 2 }}
        />
        {/* Phone field */}
        <Controller
          name='mobile'
          control={control}
          rules={{
            validate: (value) => {
              console.log('value', value);
              return matchIsValidTel(value) || 'Invalid mobile number';
            },
          }}
          render={({ field: { ref, ...field } }) => (
            <MuiTelInput
              disableDropdown
              inputRef={ref}
              inputProps={{ readOnly: false }}
              {...field}
              color='primary'
              defaultCountry='US'
              variant='outlined'
              // onlyCountries={["US", "IN"]}
              // onlyCountries={["IN"]}
              label='Mobile Number'
              error={!!errors.mobile}
              helperText={errors.mobile?.message}
              fullWidth
              sx={{ mb: 2 }}
            />
          )}
        />
        {/* Submit button */}
        <Button variant='contained' color='primary' type='submit'>
          Register
        </Button>
      </form>

      {/* Sign-in link */}
      <small>
        Already have an account?{' '}
        <Link style={{ textDecoration: 'underline' }} href='/signin'>
          Sign in Here
        </Link>
      </small>
      <br />
      {/* Contact us link */}

      {loadingMessage && <LoadingSpinner message={loadingMessage} />}
    </>
  );
}

// Function for registering WebAuthn credentials:
// - Constructs the registration URL using the provided email, first name, and last name
// - Fetches the registration options from the server using the constructed URL
// - If the options request is successful (status 200), starts the WebAuthn registration process
// - Sends the registration data to the server for verification and storage
// - If the registration request is successful (status 201), displays a success toast and can redirect to the sign-in page
// - If any error occurs during the process, displays an error toast and logs the error message or response
async function registerWebauthn(
  email: string,
  fullName: string,
  dob: string,
  mobile: string,
  router: AppRouterInstance,
  openConfirmDialog: (props: ConfirmationDialogProps) => void,
  setAlertBarProps: (props: AlertBarProps) => void,
) {
  // Construct the registration URL
  const url = new URL('/api/auth/register', window.location.origin);
  url.search = new URLSearchParams({ email, fullName, dob, mobile }).toString();

  // Fetch the registration options from the server
  const optionsResponse = await fetch(url.toString());
  const opt = await optionsResponse.json();

  // Handle error if the options request failed
  if (optionsResponse.status !== 200) {
    console.error(opt);

    openConfirmDialog({
      title: 'Error',
      content: opt.error,
      hideCancelButton: true,
    });
    // toast.error(opt.error);
    return;
  }

  try {
    // Start the WebAuthn registration process
    // - The startRegistration function is responsible for initiating the WebAuthn registration flow
    //   by invoking the browser's built-in WebAuthn API with the received registration options (opt)
    // - The startRegistration function returns a credential object that represents the user's newly
    //   registered WebAuthn credential
    // opt = {
    //   ...opt,
    //   extensions: { prf: { eval: { first: crypto.getRandomValues(new Uint8Array(32)), second: crypto.getRandomValues(new Uint8Array(32)) } } },
    // };

    const credential = await startRegistration(opt);

    // if (
    //   !(credential.clientExtensionResults as AuthenticationExtensionsClientOutputs).prf?.enabled
    //   || !(credential.clientExtensionResults as AuthenticationExtensionsClientOutputs).prf?.results
    // ) {
    //   openConfirmDialog({
    //     title: 'Unsupported Feature',
    //     content: (
    //       <>
    //         <p>Your browser currently doesn't support WebAuthn extensions (PRF).</p>
    //         <p>
    //           To enable this feature on Chrome, please visit the following link:
    //           {' '}
    //           <a href="chrome://flags/#enable-experimental-web-platform-features" target="_blank" rel="noreferrer noopener">
    //             chrome://flags/#enable-experimental-web-platform-features
    //           </a>
    //           .
    //         </p>
    //         <p>
    //           <strong>Note:</strong>
    //           {' '}
    //           This feature is only supported on the following platforms:
    //         </p>
    //         <ul>
    //           <li>iOS 18.0+ Beta</li>
    //           <li>iPadOS 18.0+ Beta</li>
    //           <li>Mac Catalyst 18.0+ Beta</li>
    //           <li>macOS 15.0+ Beta</li>
    //           <li>visionOS 2.0+ Beta</li>
    //         </ul>
    //       </>
    //     ),
    //     hideCancelButton: true,
    //   });

    //   return;
    //   // throw new Error(
    //   //   'This browser does not support the Webauthn extensions (PRF) needed for this demo.',
    //   // );
    // }
    // const prfResults = (credential.clientExtensionResults as AuthenticationExtensionsClientOutputs).prf!.results!;
    // prfResults.first = uint8ArrayToHexString(prfResults.first as Uint8Array);
    // prfResults.second = uint8ArrayToHexString(prfResults.second as Uint8Array);

    console.log('credsUpdated', credential);
    // Send the registration data to the server
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credential),
      credentials: 'include',
    });

    // Handle error if the registration request failed
    if (response.status !== 201) {
      // toast.error("Could not register WebAuthn credentials.");
      openConfirmDialog({
        title: 'Error',
        content: 'Could not register credentials',
        hideCancelButton: true,
      });
      const errorResp = await response.json();
      console.error(errorResp);
    } else {
      openConfirmDialog({
        title: 'Success',
        content: 'Your credentials have been registered.',
        hideCancelButton: true,
      });

      // toast.success("Your WebAuthn credentials have been registered.", { duration: 10000 });
      // Redirect to the sign-in page
      // setTimeout(() => {
      //   router.push('/signin');
      // }, 2000);
    }
  } catch (err) {
    handleRegistrationError(err, setAlertBarProps);
  }
}
