'use client';

import type { ReactNode } from 'react';
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { OUTSIDE_CLIENT_PROVIDER_ERROR } from '@/constants/errors';

/**
 * This is a generic custom hook for updating the client context
 * It can be used in multiple places from any client-side component
 * Please change the per-defined type & default value in constants/context.ts
 */

export type UpdateClientCtxType<T> = {
  updateClientCtx: (props: Partial<T>) => void;
};

export const ClientContext = createContext<unknown | undefined>(undefined);

export const useClientContext = <T,>(): T & UpdateClientCtxType<T> => {
  const context = useContext(ClientContext);
  if (context === undefined) {
    throw new Error(OUTSIDE_CLIENT_PROVIDER_ERROR);
  }

  return context as T & UpdateClientCtxType<T>;
};

/**
 * You should pass the default value to the ClientProvider first
 * e.g. <ClientProvider defaultValue={FETCH_API_CTX_VALUE} value={dynamicValue}>
 * Client-side component usage example:
 * const clientContext = useClientContext<FetchApiContext>();
 * clientContext.updateClientCtx({ topError: 'Error message' });
 * clientContext.updateClientCtx({ fetchCount: 10 });
 * The total fetch count is: clientContext.fetchCount
 */
export const ClientProvider = <T,>({
  children,
  value,
  defaultValue,
}: {
  children: ReactNode;
  value?: Partial<T>;
  defaultValue: T;
}) => {
  const [contextValue, setContextValue] = useState({
    ...defaultValue,
    ...value,
    updateClientCtx: (_: Partial<T>): void => {
      throw new Error(OUTSIDE_CLIENT_PROVIDER_ERROR);
    },
  });

  const updateContext = useCallback(
    (newCtxValue: Partial<T>) => {
      setContextValue(prevContextValue => ({
        ...prevContextValue,
        ...newCtxValue,
      }));
    },
    [setContextValue],
  );
  const contextValueTemp = useMemo(
    () => ({
      ...contextValue,
      updateClientCtx: updateContext,
    }),
    [contextValue, updateContext],
  );

  return (
    <ClientContext.Provider value={contextValueTemp}>
      {children}
    </ClientContext.Provider>
  );
};
