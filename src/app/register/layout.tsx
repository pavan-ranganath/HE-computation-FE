'use client';

import { Grid2 } from '@mui/material';
import Grid from '@mui/material/Grid'; // Importing the Grid component from the Material-UI library. Used for grid-based layouts.
import React from 'react'; // Importing React from the "react" package. Required for creating React components.

import AuthProvider from '@/components/shared/AuthProvider';
import ClientSideWrapper from '@/components/shared/ClientSideWrapper';

// RegisterLayout component
// This component represents the layout for the register page
export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClientSideWrapper defaultContextValue="">
        <AuthProvider>
          <Grid2
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh' }}
          >
            <Grid item xs={3} sx={{ margin: '10px' }}>
              {children}
            </Grid>
          </Grid2>
        </AuthProvider>
      </ClientSideWrapper>
    </>
  );
}
