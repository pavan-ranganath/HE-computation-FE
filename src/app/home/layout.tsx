'use client';

// Importing the Grid component from the Material-UI library. Used for grid-based layouts.
import React from 'react'; // Importing React from the "react" package. Required for creating React components.

import AuthProvider from '@/components/shared/AuthProvider';
import ClientSideWrapper from '@/components/shared/ClientSideWrapper';
import { ProtectedLayout } from '@/components/shared/protectedLayout';

// RegisterLayout component
// This component represents the layout for the register page
export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClientSideWrapper defaultContextValue=''>
        <AuthProvider>
          <ProtectedLayout>{children}</ProtectedLayout>
        </AuthProvider>
      </ClientSideWrapper>
    </>
  );
}
