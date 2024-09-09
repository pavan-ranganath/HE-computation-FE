'use client';
import type { ReactNode } from 'react';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { CKKSContext } from '@/lib/openfhe/openfheCommon.service';

import Loading from './Loading';

type CryptoContextType = {
  cryptoContext: CKKSContext | null;
  loading: boolean;
};

const CryptoContext = createContext<CryptoContextType | undefined>(undefined);

export const CryptoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cryptoContext] = useState(new CKKSContext());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initializeContext = async () => {
      setLoading(true);
      try {
        await cryptoContext.initializeOpenFHE();
        // cryptoContext.initializeCryptoContext();
      } finally {
        setLoading(false);
      }
    };

    initializeContext();
  }, [cryptoContext]);

  const value = useMemo(() => ({
    cryptoContext,
    loading,
  }), [cryptoContext, loading]);

  if (loading) {
    return <Loading message="Initializing crypto context, please wait..." />;
  }
  return (
    <CryptoContext.Provider value={value}>
      {children}
    </CryptoContext.Provider>
  );
};

export const useCryptoContext = (): CryptoContextType => {
  const context = useContext(CryptoContext);
  if (context === undefined) {
    throw new Error('useCryptoContext must be used within a CryptoProvider');
  }
  return context;
};
