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
};

const FileDropzone: FC<FileDropzoneProps> = ({
  onDrop,
  fileType,
  acceptedFileTypes,
  selectedFile,
  errorMessage,
  placeholderText,
}) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const { openConfirmDialog } = useSharedUtilContext();

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: acceptedFileTypes,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
    onDropAccepted: () => setIsDragActive(false),
    onDropRejected: () => {
      setIsDragActive(false);
      // Set error message if file type is incorrect
      openConfirmDialog({ title: 'Error', content: 'Unsupported file format', hideCancelButton: true });
    },
  });

  return (
    <Paper
      {...getRootProps()}
      sx={{
        border: '2px dashed #ccc',
        padding: 2,
        textAlign: 'center',
        backgroundColor: isDragActive ? '#e0f7fa' : '#fafafa',
        marginBottom: 2,
      }}
    >
      <input {...getInputProps()} />
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
