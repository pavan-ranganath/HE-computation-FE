import { Container } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';
import type { Metadata } from 'next';
import * as React from 'react';

import ClientSideWrapper from '@/components/shared/ClientSideWrapper';
import { CryptoProvider } from '@/components/shared/CryptoContextProvder';
import { SITE_CONFIG } from '@/constants';
import { GLOBAL_STYLES } from '@/styles';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.title}`,
  },
  description: SITE_CONFIG.description,
  robots: { index: true, follow: true },
  metadataBase: new URL(SITE_CONFIG.url),
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.title,
    images: [`${SITE_CONFIG.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GlobalStyles styles={GLOBAL_STYLES} />
      <body>
        <ClientSideWrapper defaultContextValue="">
          <CryptoProvider>
            <Container sx={{ pl: 0, pr: 0 }}>{children}</Container>
          </CryptoProvider>
        </ClientSideWrapper>
      </body>
    </html>
  );
}
