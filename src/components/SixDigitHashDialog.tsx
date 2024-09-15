import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

import { useSharedUtilContext } from '@/hooks/useSharedUtilContext';
import { sha256 } from '@/utils/shared/og';

type SixDigitHashDialogProps = {
  open: boolean;
  onClose: () => void;
  onHashGenerated: (hash: string) => void; // Callback prop to send hashed value to parent
};

const SixDigitHashDialog: React.FC<SixDigitHashDialogProps> = ({ open, onClose, onHashGenerated }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const { openConfirmDialog } = useSharedUtilContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleHashInput = async () => {
    if (inputValue.length === 6) {
      const hash = await sha256(inputValue);
      onHashGenerated(hash); // Send hashed value to parent
    } else {
      openConfirmDialog({
        title: 'Error',
        content: 'Please enter a 6-digit number',
        hideCancelButton: true,
      });
    }
  };

  return (
    <Dialog open={open} onClose={() => {}} disableEscapeKeyDown>
      <DialogTitle>Enter 6-Digit Number</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TextField
            label="6-Digit Input"
            value={inputValue}
            onChange={handleInputChange}
            slotProps={{ htmlInput: { minLength: 6, maxLength: 6 } }}
            helperText="Please enter a 6-digit number"
            margin="normal"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleHashInput} disabled={inputValue.length !== 6}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SixDigitHashDialog;
