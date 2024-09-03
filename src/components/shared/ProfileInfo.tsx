'use client';
import { Button } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

import LogoutButton from '@/components/Home/LogoutButton';

export default function ProfileInfo() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  if (status === 'authenticated') {
    return (
      <>
        <p>
          Signed in as
          {session.user.email}
        </p>
        <LogoutButton />
        {pathname !== '/home' && (
          <Button variant="contained" color="primary" href="/home">
            Home
          </Button>
        )}
      </>
    );
  }

  return (
    <>
      <Button variant="contained" color="primary" href="/signin">
        Sign In
      </Button>
      <Button variant="outlined" color="primary" href="/register">
        Register
      </Button>
    </>
  );
}
