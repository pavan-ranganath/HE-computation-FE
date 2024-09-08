'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import FileDropzone from '@/components/FileDropzone';
import LoadingSpinner from '@/components/shared/Loading';
import { SITE_CONFIG } from '@/constants';
import { useSharedUtilContext } from '@/hooks/useSharedUtilContext';

export default function SignInComponent() {
  const [loadingMessage, setLoadingMessage] = useState('');
  const [selectedSecretKey, setSelectedSecretKey] = useState<File | null>(null);
  const [selectedSSNFile, setSelectedSSNFile] = useState<File | null>(null);
  const [secretKeyError, setSecretKeyError] = useState<string | null>(null);
  const [ssnFileError, setSSNFileError] = useState<string | null>(null);
  const { setAlertBarProps } = useSharedUtilContext();

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

  const {
    handleSubmit,
  } = useForm({
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
      setLoadingMessage('Uploading files...');
      console.log('Secret Key:', selectedSecretKey);
      console.log('Encrypted SSN File:', selectedSSNFile);
      // Perform file upload logic here
    } catch (err) {
      console.error(err);
      setAlertBarProps({
        message: 'File upload failed!',
        severity: 'error',
      });
    } finally {
      setLoadingMessage('');
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
          Upload Secret Key File
        </Typography>
        <FileDropzone
          onDrop={onSecretKeyDrop}
          fileType="secret key file"
          acceptedFileTypes={{ 'application/octet-stream': ['.bin'] }}
          selectedFile={selectedSecretKey}
          errorMessage={secretKeyError}
          placeholderText="Drag & drop the secret key file, or click to select"
        />
      </Box>

      {/* SSN File Upload */}
      <Box sx={{ marginBottom: 2 }}>
        <Typography component="h1" variant="h6">
          Upload Encrypted SSN File
        </Typography>
        <FileDropzone
          onDrop={onSSNFileDrop}
          fileType="SSN file"
          acceptedFileTypes={{ 'application/octet-stream': ['.bin'] }}
          selectedFile={selectedSSNFile}
          errorMessage={ssnFileError}
          placeholderText="Drag & drop the SSN file, or click to select"
        />
      </Box>

      {/* Submit Button */}
      <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)} disabled={!selectedSecretKey || !selectedSSNFile}>
        Upload Files
      </Button>

      {/* Link to Register */}
      <small>
        Do not have an account?
        {' '}
        <Link style={{ textDecoration: 'underline' }} href="/register">
          Register Here
        </Link>
      </small>
      <br />
      {loadingMessage && <LoadingSpinner message={loadingMessage} />}
    </>
  );
}
