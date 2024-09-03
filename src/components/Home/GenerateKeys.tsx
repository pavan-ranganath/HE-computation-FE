'use client';
import { Key } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useState } from 'react';

import { generateKeyButtonLabel } from '@/constants/homepage';

import { useCryptoContext } from '../shared/CryptoContextProvder';
import SubmitButton from '../shared/SubmitButton';

const GenerateKeys = () => {
  const [loadingText, setLoadingText] = useState('');
  const [loadingHE, setLoadingHE] = useState(false);
  const { cryptoContext } = useCryptoContext();
  async function generateHECC(): Promise<void> {
    setLoadingText(generateKeyButtonLabel);
    setLoadingHE(true);
    if (cryptoContext) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Ensure the text update is rendered
      cryptoContext.generateKey();
      cryptoContext.addschemeSwitchingCC();
    }
    setLoadingHE(false);
  }

  return (
    <SubmitButton
      isSubmitting={loadingHE}
      submittingText={loadingText}
    >
      <Button variant="contained" type="submit" startIcon={<Key />} onClick={generateHECC}>
        {generateKeyButtonLabel}
      </Button>
    </SubmitButton>

  );
};

export default GenerateKeys;
