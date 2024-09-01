import { AutoAwesome } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import ProfileInfo from '@/components/shared/ProfileInfo';
import { SITE_CONFIG } from '@/constants';

export default function Home(): JSX.Element {
  return (
    <main>
      <section>
        <Box sx={{ textAlign: 'center' }}>
          <AutoAwesome
            className='page-title'
            sx={{ width: '3rem', height: '3rem' }}
          />
          <Typography
            variant='h5'
            component='h1'
            gutterBottom
            className='page-title'
          >
            {SITE_CONFIG.title}
          </Typography>
          <Typography
            variant='subtitle2'
            gutterBottom
            className='page-subtitle'
          >
            {SITE_CONFIG.description}
          </Typography>
        </Box>
        <ProfileInfo />
      </section>
    </main>
  );
}
