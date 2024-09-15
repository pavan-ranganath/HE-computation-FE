import { Paper, Typography } from '@mui/material';
import type { FC } from 'react';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { useSharedUtilContext } from '@/hooks/useSharedUtilContext';

type FileDropzoneProps = {
  onDrop: (acceptedFiles: File[]) => void;
  fileType: string;
  acceptedFileTypes: Record<string, string[]>;
  selectedFile: File | null;
  errorMessage: string | null;
  placeholderText: string;
  disabled?: boolean; // Add the disabled prop
};

const FileDropzone: FC<FileDropzoneProps> = ({
  onDrop,
  fileType,
  acceptedFileTypes,
  selectedFile,
  errorMessage,
  placeholderText,
  disabled = false, // Set default value to false
}) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const { openConfirmDialog } = useSharedUtilContext();

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: acceptedFileTypes,
    onDragEnter: () => !disabled && setIsDragActive(true), // Prevent drag actions when disabled
    onDragLeave: () => !disabled && setIsDragActive(false),
    onDropAccepted: () => !disabled && setIsDragActive(false),
    onDropRejected: () => {
      setIsDragActive(false);
      if (!disabled) {
        openConfirmDialog({ title: 'Error', content: 'Unsupported file format', hideCancelButton: true });
      }
    },
    disabled, // Disable dropzone functionality
  });

  return (
    <Paper
      {...getRootProps()}
      sx={{
        border: '2px dashed #ccc',
        padding: 2,
        textAlign: 'center',
        backgroundColor: disabled ? '#f5f5f5' : isDragActive ? '#e0f7fa' : '#fafafa', // Dim background when disabled
        cursor: disabled ? 'not-allowed' : 'pointer', // Show not-allowed cursor when disabled
        opacity: disabled ? 0.6 : 1, // Reduce opacity when disabled
        marginBottom: 2,
      }}
    >
      <input {...getInputProps()} disabled={disabled} />
      {isDragActive
        ? (
            <Typography>
              {placeholderText}
              {' '}
              ...
            </Typography>
          )
        : <Typography>{placeholderText}</Typography>}
      {selectedFile && (
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Selected
          {' '}
          {fileType}
          :
          {' '}
          {selectedFile.name}
        </Typography>
      )}
      {errorMessage && (
        <Typography variant="body2" color="error">
          {errorMessage}
        </Typography>
      )}
    </Paper>
  );
};

export default FileDropzone;
