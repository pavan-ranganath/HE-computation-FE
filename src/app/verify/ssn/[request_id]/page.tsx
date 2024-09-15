/* eslint-disable unicorn/prefer-node-protocol */
'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import axios, { AxiosError } from 'axios';
import { Buffer } from 'buffer';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import FileDropzone from '@/components/FileDropzone';
import { useCryptoContext } from '@/components/shared/CryptoContextProvder';
import LoadingSpinner from '@/components/shared/Loading';
import SixDigitHashDialog from '@/components/SixDigitHashDialog';
import { SITE_CONFIG } from '@/constants';
import { COMPUTAION_API_VERIFY, COMPUTAION_SERVER_BASE_URI, COMPUTAION_SERVER_PUBLIC_KEY } from '@/constants/computationAPI';
import { useSharedUtilContext } from '@/hooks/useSharedUtilContext';
import { SchemeSwitchingDataDeserializer } from '@/lib/openfhe/crypto-ctxt-ser-des.service';

function bufferToBlob(buffer: Uint8Array): Blob {
  return new Blob([buffer], { type: 'application/octet-stream' });
}
export default function SignInComponent({ params }: { params: { request_id: string } }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [selectedSecretKey, setSelectedSecretKey] = useState<File | null>(null);
  const [selectedSSNFile, setSelectedSSNFile] = useState<File | null>(null);
  const [secretKeyError, setSecretKeyError] = useState<string | null>(null);
  const [ssnFileError, setSSNFileError] = useState<string | null>(null);
  const { setAlertBarProps, openConfirmDialog } = useSharedUtilContext();
  const [errorMessage, setErrorMessage] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  const { cryptoContext } = useCryptoContext();
  const router = useRouter();

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    openConfirmDialog({
      title: 'Confirm',
      content: 'Are you sure you want to cancel verification?',
      async onConfirm() {
        await sendCancelRequest();
        setDialogOpen(false);
      },
    });
  };

  const onCancelReq = async () => {
    try {
      openConfirmDialog({
        title: 'Confirm',
        content: 'Are you sure you want to cancel verification?',
        async onConfirm() {
          await sendCancelRequest();
        },
      });
    } catch (reqError) {
      // Handle network or server errors
      let errorMsg = 'An error occurred while cancelling verification. Please try again later.';

      if (reqError instanceof AxiosError) {
        // Extract error message from AxiosError
        errorMsg = `${reqError.message}: ${(reqError.response?.data as { message?: string })?.message || 'No additional information available.'}`;
      } else if (reqError instanceof Error) {
        // Extract error message from general Error
        errorMsg = reqError.message;
      }

      openConfirmDialog({
        title: 'Error',
        content: errorMsg,
        hideCancelButton: true,
      });

      console.error('Cancel request failed:', reqError);
    }
  };
  const handleHashGenerated = async (hash: string) => {
    try {
      const secureCodeForm = new FormData();
      secureCodeForm.append('secureCode', hash);
      const response = await axios.put(COMPUTAION_SERVER_BASE_URI + COMPUTAION_API_VERIFY, secureCodeForm, { withCredentials: true });
      if (response.data.success) {
        openConfirmDialog({
          title: 'Success',
          content: 'Your Social Security Number (SSN) verification was successful. The Secure Code entered has been sent to initiate your sign-in request',
          hideCancelButton: true,
          onConfirm() {
            setDialogOpen(false);
            setSelectedSSNFile(null);
            setSelectedSecretKey(null);
            router.push('/');
          },
        });
      }
    } catch (reqError) {
      // Handle network or server errors
      let errorMsg = 'An error occurred while verifying. Please try again later.';
      setLoadingMessage('');
      if (reqError instanceof AxiosError) {
        errorMsg = errorMsg = `${reqError.message}: ${(reqError.response?.data as { message?: string })?.message}`;
      } else if (reqError instanceof Error) {
        errorMsg = reqError.message;
      }
      openConfirmDialog({
        title: 'Error',
        content: errorMsg,
        hideCancelButton: true,
        onConfirm() {
          handleCloseDialog();
          setSelectedSSNFile(null);
          setSelectedSecretKey(null);
        },
      });
      console.error('Verification request failed:', reqError);
    }
  };
  const signInForm = {
    secretKey: yup
      .mixed<File>()
      .required('Secret key file is required')
      .test('fileSize', 'Secret key file is too large', (value) => {
        return value && value.size <= 2000000; // 2MB file size limit for secret key
      }),
    ssnFile: yup
      .mixed<File>()
      .required('Encrypted SSN file is required')
      .test('fileSize', 'SSN file is too large', (value) => {
        return value && value.size <= 5000000; // 5MB file size limit for SSN file
      }),
  };
  useEffect(() => {
    const uri = `${COMPUTAION_SERVER_BASE_URI + COMPUTAION_API_VERIFY}/${params.request_id}`;
    axios.get(uri, { withCredentials: true }).then((response_request_id) => {
      console.log(response_request_id);
      setIsLoading(false); // Success, stop loading and load the page
    }).catch((reqError: AxiosError) => {
      const errorMsg = (reqError.response?.data as { message?: string })?.message || 'The request is invalid or has expired.';
      setErrorMessage(errorMsg);

      setHasError(true); // On error, set error state
      setIsLoading(false); // Stop loading as request has finished

      console.error(reqError);
    });
  }, [params]);

  const ccInstance = useMemo(() => {
    if (cryptoContext?.OpenFHEModule) {
      const instance = new SchemeSwitchingDataDeserializer(cryptoContext.OpenFHEModule);

      instance.SERTYPE = instance.module?.SerType.BINARY;
      return instance;
    }
    return null;
  }, [cryptoContext]);
  const validateSecretKeyAndAssociatedFiles = async (file: File) => {
    try {
      if (!ccInstance || !cryptoContext) {
        console.error('ccInstance is not initialized');
        setAlertBarProps({ message: 'Initialization Error', severity: 'error' });
        throw new Error('Initialization Error');
      }

      setLoadingMessage('Validating Secret Key And Associated Files');
      await new Promise(resolve => setTimeout(resolve, 1000)); // Ensure the text update is rendered

      // Deserialize the file and assign to the cryptoContext
      await ccInstance.deserialize(file);

      // Update the cryptoContext after deserialization
      cryptoContext.cc = ccInstance.cryptoContext;
      cryptoContext.keys = { publicKey: ccInstance.publicKey, secretKey: ccInstance.secretKey };
      await new Promise(resolve => setTimeout(resolve, 1000)); // Ensure the text update is rendered

      setAlertBarProps({ message: 'Secret Key And Associated Files are valid', severity: 'success' });
      return true;
    } catch (error) {
      console.error(error);

      setLoadingMessage('');
      await new Promise(resolve => setTimeout(resolve, 1000)); // Ensure the text update is rendered

      setSelectedSecretKey(null);
      setAlertBarProps({ message: 'Secret Key And Associated Files are invalid', severity: 'error' });

      throw error; // Rethrow the error for further handling if needed
    } finally {
      setLoadingMessage('');
    }
  };
  async function validateEncryptedSSN(selectedSSNFile: File) {
    setLoadingMessage('Validating Encrypted SSN');
    await new Promise(resolve => setTimeout(resolve, 1000)); // Ensure the text update is rendered
    try {
      const arrayBuffer = await selectedSSNFile.arrayBuffer();
      const cipherTextBuffer = Buffer.from(arrayBuffer);
      const encryptedSSN = cryptoContext?.deserializeCipherTextBuffer(cipherTextBuffer);
      setAlertBarProps({ message: 'Encrypted SSN is valid', severity: 'success' });
      return [encryptedSSN, cipherTextBuffer];
    } catch (error) {
      console.error(error);
      setLoadingMessage('');
      await new Promise(resolve => setTimeout(resolve, 1000)); // Ensure the text update is rendered
      setSelectedSSNFile(null);
      setAlertBarProps({ message: 'Encrypted SSN in invalid', severity: 'error' });
      return undefined;
    }
  }

  useForm({
    resolver: yupResolver(yup.object().shape(signInForm)),
  });
  const sendRequestToVerify = async (formDataFromUser: FormData) => {
    try {
      setLoadingMessage('Sending Data...');

      // Send request to the server
      const response = await axios.post(COMPUTAION_SERVER_BASE_URI + COMPUTAION_API_VERIFY, formDataFromUser, { withCredentials: true });

      setLoadingMessage('');

      // Check if the response indicates success
      if (response.data.success) {
        handleOpenDialog();
      } else {
        // If the server responds with a failure
        openConfirmDialog({
          title: 'Error',
          content: 'Verification Failed. Please try again.',
          hideCancelButton: true,
        });
        setSelectedSSNFile(null);
        setSelectedSecretKey(null);
      }
    } catch (reqError) {
      // Handle network or server errors
      let errorMsg = 'An error occurred while verifying. Please try again later.';
      setLoadingMessage('');
      if (reqError instanceof AxiosError) {
        errorMsg = errorMsg = `${reqError.message}: ${(reqError.response?.data as { message?: string })?.message}`;
      } else if (reqError instanceof Error) {
        errorMsg = reqError.message;
      }
      openConfirmDialog({
        title: 'Error',
        content: errorMsg,
        hideCancelButton: true,
      });
      console.error('Verification request failed:', reqError);
    }
  };

  const onSecretKeyDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setSelectedSecretKey(file);
      setSecretKeyError(null); // Clear error message on successful drop
    }
  };
  if (isLoading) {
    return <LoadingSpinner message="Validating the request..." />; // Render a loading state while waiting for the axios request
  }

  const onSSNFileDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setSelectedSSNFile(file);
      setSSNFileError(null); // Clear error message on successful drop
    }
  };

  const onSubmit = async () => {
    if (!cryptoContext) {
      setAlertBarProps({
        message: 'cryptoContext required!',
        severity: 'error',
      });
      return;
    }
    if (!selectedSecretKey || !selectedSSNFile) {
      setAlertBarProps({
        message: 'Both secret key and SSN file are required!',
        severity: 'error',
      });
      return;
    }

    try {
      const result = await validateEncryptedSSN(selectedSSNFile);

      if (!result) {
        return;
      }
      const [_, cipherTextBuffer] = result;

      const validated = await validateSecretKeyAndAssociatedFiles(selectedSecretKey);
      if (!validated) {
        return;
      }
      const pubKeyComputationServerResp = await axios.get(COMPUTAION_SERVER_PUBLIC_KEY, {
        responseType: 'arraybuffer', // Download as buffer
        withCredentials: true,
      });

      const pubKeyComputationServerBuffer = Buffer.from(pubKeyComputationServerResp.data);
      const pubKeyComputationServer = cryptoContext.deserializePublicKeyBuffer(pubKeyComputationServerBuffer);
      // console.log(pubKeyComputationServer);
      const reEncryptionKey = await cryptoContext.genearateProxyEncKey(pubKeyComputationServer);
      const reEncryptedKeyBuffer = await cryptoContext.serializeEvalKeyToBuffer(reEncryptionKey);
      // Create a new FormData object
      const formData = new FormData();
      // Append the new data
      formData.append('key', bufferToBlob(reEncryptedKeyBuffer), 'key.bin');
      formData.append('ssn', bufferToBlob(cipherTextBuffer), 'ssn.bin');

      await sendRequestToVerify(formData);
      // Perform file upload logic here
    } catch (err) {
      console.error(err);
      const msg
        = typeof err === 'number'
          ? cryptoContext.OpenFHEModule.getExceptionMessage(err)
          : err;
      console.log(msg);
      setAlertBarProps({
        message: 'Verification failed!',
        severity: 'error',
      });
    }
  };

  return (
    <>
      {/* Branding */}
      <Box style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Typography variant="h5" component="h2">
          {SITE_CONFIG.title}
        </Typography>
      </Box>

      {/* Error Message */}
      {hasError && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          marginBottom="2rem"
        >
          <Typography variant="h5" color="error">
            {errorMessage}
          </Typography>
        </Box>
      )}

      {/* Secret Key Upload */}
      <Box sx={{ marginBottom: 2 }}>
        <Typography component="h1" variant="h6">
          Load Secret Key And Associated Files
        </Typography>
        <FileDropzone
          onDrop={onSecretKeyDrop}
          fileType="secret key file"
          acceptedFileTypes={{ 'application/octet-stream': ['.zip'] }}
          selectedFile={selectedSecretKey}
          errorMessage={secretKeyError}
          placeholderText="Drag & drop the secret key and associated file, or click to select"
          disabled={hasError}
        />
      </Box>

      {/* SSN File Upload */}
      <Box sx={{ marginBottom: 2 }}>
        <Typography component="h1" variant="h6">
          Load Encrypted SSN File
        </Typography>
        <FileDropzone
          onDrop={onSSNFileDrop}
          fileType="SSN file"
          acceptedFileTypes={{ 'application/octet-stream': ['.bin'] }}
          selectedFile={selectedSSNFile}
          errorMessage={ssnFileError}
          placeholderText="Drag & drop the encrypted SSN file, or click to select"
          disabled={hasError}
        />
      </Box>

      {/* Submit Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={onSubmit}
        disabled={!selectedSecretKey || !selectedSSNFile || hasError}
      >
        Verify
      </Button>
      <Button
        sx={{ marginLeft: 1 }}
        variant="contained"
        color="error"
        disabled={hasError}
        onClick={onCancelReq}
      >
        Cancel
      </Button>

      {/* Loading Spinner */}
      {loadingMessage && <LoadingSpinner message={loadingMessage} />}

      {/* Six Digit Hash Dialog */}
      <SixDigitHashDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        onHashGenerated={handleHashGenerated} // Pass callback to receive hash
      />
    </>
  );

  async function sendCancelRequest() {
    try {
      await axios.delete(COMPUTAION_SERVER_BASE_URI + COMPUTAION_API_VERIFY, { withCredentials: true });
      router.push('/');
    } catch (error) {
      // Handle the error
      let errorMsg = 'An error occurred while performing the delete operation. Please try again later.';

      if (axios.isAxiosError(error)) {
        // Handle Axios-specific errors
        errorMsg = `${error.message}: ${(error.response?.data as { message?: string })?.message || 'For more details, please check the log.'}`;
      } else if (error instanceof Error) {
        // Handle other errors
        errorMsg = error.message;
      }

      // Log the error for debugging purposes
      console.error('Delete request failed:', error);
      openConfirmDialog({
        title: 'Error',
        content: errorMsg,
        hideCancelButton: true,
      });
    }
  }
}
