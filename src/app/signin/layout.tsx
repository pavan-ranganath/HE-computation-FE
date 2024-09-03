'use client';

// Importing the Grid component from the MUI (Material-UI) library
import { Grid, Grid2 } from '@mui/material';
import { SessionProvider } from 'next-auth/react';

import ClientSideWrapper from '@/components/shared/ClientSideWrapper';

// Importing the Providers component from a local file or module

// Defining the SignInLayout component which receives a children prop
export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Wrapping the content with Providers component */}
      <ClientSideWrapper defaultContextValue="">
        <SessionProvider>
          {/* Creating a Grid container */}
          <Grid2
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh' }}
          >
            {/* Adding a Grid item */}
            <Grid item xs={3} sx={{ margin: '10px' }}>
              {/* Rendering the children component */}
              {children}
            </Grid>
          </Grid2>
        </SessionProvider>
      </ClientSideWrapper>
    </>
  );
}
