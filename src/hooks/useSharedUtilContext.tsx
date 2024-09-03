'use client';

import type { ReactNode } from 'react';
import React, { createContext, useContext, useMemo } from 'react';

import { OUTSIDE_SHARED_UTIL_PROVIDER_ERROR } from '@/constants/errors';
import type { AlertBarProps } from '@/hooks/useAlertBar';
import { useAlertBar } from '@/hooks/useAlertBar';
import type { ConfirmationDialogProps } from '@/hooks/useConfirmDialog';
import useConfirmationDialog from '@/hooks/useConfirmDialog';

export type SharedUtilContextType = {
  setAlertBarProps: (props: AlertBarProps) => void;
  openConfirmDialog: (props: ConfirmationDialogProps) => void;
};

export const SharedUtilContext = createContext<
  SharedUtilContextType | undefined
>(undefined);

export const useSharedUtilContext = (): SharedUtilContextType => {
  const context = useContext(SharedUtilContext);
  if (context === undefined) {
    throw new Error(OUTSIDE_SHARED_UTIL_PROVIDER_ERROR);
  }

  return context as SharedUtilContextType;
};

/**
 * Provides a shared utility context for components.
 *
 * Add the frequently used utility here to avoid rendering them in every component.
 * They only need to be rendered once in the root component and can be used anywhere.
 */
export const SharedUtilProvider = ({ children }: { children: ReactNode }) => {
  const { renderAlertBar, setAlertBarProps } = useAlertBar();
  const { renderConfirmationDialog, openConfirmDialog }
    = useConfirmationDialog();

  const contextValue = useMemo(
    () => ({
      setAlertBarProps,
      openConfirmDialog,
    }),
    [setAlertBarProps, openConfirmDialog],
  );

  return (
    <SharedUtilContext.Provider value={contextValue}>
      {children}
      {renderAlertBar()}
      {renderConfirmationDialog()}
    </SharedUtilContext.Provider>
  );
};
