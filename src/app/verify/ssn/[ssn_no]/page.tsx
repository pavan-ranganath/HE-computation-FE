/* eslint-disable unicorn/prefer-node-protocol */
'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import { Buffer } from 'buffer';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import FileDropzone from '@/components/FileDropzone';
import { useCryptoContext } from '@/components/shared/CryptoContextProvder';
import LoadingSpinner from '@/components/shared/Loading';
import { SITE_CONFIG } from '@/constants';
import { useSharedUtilContext } from '@/hooks/useSharedUtilContext';
import { SchemeSwitchingDataDeserializer } from '@/lib/openfhe/crypto-ctxt-ser-des.service';

export default function SignInComponent() {
  const [loadingMessage, setLoadingMessage] = useState('');
  const [selectedSecretKey, setSelectedSecretKey] = useState<File | null>(null);
  const [selectedSSNFile, setSelectedSSNFile] = useState<File | null>(null);
  const [secretKeyError, setSecretKeyError] = useState<string | null>(null);
  const [ssnFileError, setSSNFileError] = useState<string | null>(null);
  const { setAlertBarProps } = useSharedUtilContext();
  const { cryptoContext } = useCryptoContext();
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
  const ccInstance = useMemo(() => {
    if (cryptoContext?.OpenFHEModule) {
      const instance = new SchemeSwitchingDataDeserializer(cryptoContext.OpenFHEModule);

      instance.SERTYPE = instance.module?.SerType.BINARY;
      return instance;
    }
    return null;
  }, [cryptoContext]);
  const validateSecretKeyAndAssociatedFiles = async (file: File) => {
    if (!ccInstance || !cryptoContext) {
      console.error('ccInstance is not initialized');
      setAlertBarProps({ message: 'Initialization Error', severity: 'error' });
      return;
    }
    setLoadingMessage('Validating Secret Key And Associated Files');
    await new Promise(resolve => setTimeout(resolve, 1000)); // Ensure the text update is rendered
    ccInstance.deserialize(file).then(async () => {
      setLoadingMessage('');
      cryptoContext.cc = ccInstance.cryptoContext;
      cryptoContext.keys = { publicKey: ccInstance.publicKey, secretKey: ccInstance.secretKey };
      await new Promise(resolve => setTimeout(resolve, 1000)); // Ensure the text update is rendered
      setAlertBarProps({ message: 'Secret Key And Associated Files are valid', severity: 'success' });
    }).catch(async (error) => {
      console.error(error);
      setLoadingMessage('');
      await new Promise(resolve => setTimeout(resolve, 1000)); // Ensure the text update is rendered
      setSelectedSecretKey(null);
      setAlertBarProps({ message: 'Secret Key And Associated Files are invalid', severity: 'error' });
    }).finally(async () => {
      setLoadingMessage('');
    });
  };
  async function validateEncryptedSSN(selectedSSNFile: File) {
    setLoadingMessage('Validating Encrypted SSN');
    await new Promise(resolve => setTimeout(resolve, 1000)); // Ensure the text update is rendered
    try {
      const arrayBuffer = await selectedSSNFile.arrayBuffer();
      const cipherTextBuffer = Buffer.from(arrayBuffer);
      const encryptedSSN = cryptoContext?.deserializeCipherTextBuffer(cipherTextBuffer);
      setAlertBarProps({ message: 'Encrypted SSN is valid', severity: 'success' });
      return encryptedSSN;
    } catch (error) {
      console.error(error);
      setLoadingMessage('');
      await new Promise(resolve => setTimeout(resolve, 1000)); // Ensure the text update is rendered
      setSelectedSSNFile(null);
      setAlertBarProps({ message: 'Encrypted SSN in invalid', severity: 'error' });
    }
  }

  // useEffect(() => {
  //   if (selectedSecretKey) {
  //     validateSecretKeyAndAssociatedFiles(selectedSecretKey);
  //   }
  // }, [selectedSecretKey, validateSecretKeyAndAssociatedFiles]);

  useForm({
    resolver: yupResolver(yup.object().shape(signInForm)),
  });
  const onSecretKeyDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setSelectedSecretKey(file);
      setSecretKeyError(null); // Clear error message on successful drop
    }
  };

  const onSSNFileDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setSelectedSSNFile(file);
      setSSNFileError(null); // Clear error message on successful drop
    }
  };

  const onSubmit = async () => {
    if (!selectedSecretKey || !selectedSSNFile) {
      setAlertBarProps({
        message: 'Both secret key and SSN file are required!',
        severity: 'error',
      });
      return;
    }

    try {
      const encryptedSSN = await validateEncryptedSSN(selectedSSNFile);
      await validateSecretKeyAndAssociatedFiles(selectedSecretKey);
      console.log(encryptedSSN);
      // Perform file upload logic here
    } catch (err) {
      console.error(err);
      setAlertBarProps({
        message: 'File upload failed!',
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
        />
      </Box>

      {/* Submit Button */}
      <Button variant="contained" color="primary" onClick={onSubmit} disabled={!selectedSecretKey || !selectedSSNFile}>
        Verify
      </Button>
      {loadingMessage && <LoadingSpinner message={loadingMessage} />}
    </>
  );
}
