import styled from '@emotion/styled';
import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import type { ButtonProps } from '@mui/material/Button';
import Button from '@mui/material/Button';
import type { DialogProps } from '@mui/material/Dialog';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import type { ReactNode } from 'react';
import React, { useState } from 'react';

export type ConfirmationDialogProps = {
  title: string;
  content: ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  cancelText?: ReactNode;
  confirmText?: ReactNode;
  cancelButtonProps?: ButtonProps;
  confirmButtonProps?: ButtonProps;
  dialogPaperProps?: DialogProps['PaperProps'];
  autoClose?: boolean; // auto close dialog after confirm
  hideCancelButton?: boolean;
  hideCloseButton?: boolean;
};

const StyledContentDiv = styled.div`
  min-width: 19rem; // 19x16 = 304px
  .MuiDialogTitle-root {
    padding: 1rem;
  }
  .MuiDialogContent-root {
    padding: 0 1rem 1rem 1rem;
  }
  .close-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.2rem;
    color: gray;
    :hover {
      color: black;
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

const useConfirmationDialog = () => {
  const defaultDialogProps: ConfirmationDialogProps = {
    title: '',
    content: '',
    autoClose: true,
    hideCancelButton: false,
    hideCloseButton: false,
  };
  const [open, setOpen] = useState(false);
  const [dialogProps, setDialogProps]
    = useState<ConfirmationDialogProps>(defaultDialogProps);

  const handleOpen = (config: ConfirmationDialogProps) => {
    setDialogProps({
      ...defaultDialogProps,
      ...config,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDialogProps(defaultDialogProps);
  };

  const handleConfirm = () => {
    dialogProps.onConfirm?.();
    handleClose();
  };

  const handleCancel = () => {
    dialogProps.onCancel?.();
    handleClose();
  };

  const renderConfirmationDialog = () => (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={dialogProps.dialogPaperProps}
    >
      {dialogProps.title && (
        <StyledContentDiv>
          <DialogTitle>{dialogProps.title}</DialogTitle>
          {!dialogProps.hideCloseButton && (
            <IconButton
              className="close-button"
              color="inherit"
              onClick={handleCancel}
              aria-label="close"
            >
              <Close />
            </IconButton>
          )}
          <DialogContent>{dialogProps.content}</DialogContent>
          <DialogActions>
            {!dialogProps.hideCancelButton && (
              <Button
                color="primary"
                onClick={handleCancel}
                {...dialogProps.cancelButtonProps}
              >
                {dialogProps.cancelText || 'Cancel'}
              </Button>
            )}
            <Button
              color="primary"
              variant="contained"
              onClick={handleConfirm}
              {...dialogProps.confirmButtonProps}
            >
              {dialogProps.confirmText || 'OK'}
            </Button>
          </DialogActions>
        </StyledContentDiv>
      )}
    </Dialog>
  );

  return {
    renderConfirmationDialog,
    openConfirmDialog: handleOpen,
    closeConfirmDialog: handleClose,
  };
};

export default useConfirmationDialog;
