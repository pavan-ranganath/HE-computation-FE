'use client';
import Button from '@mui/material/Button';

import { generateCKKSCryptoContext } from '@/lib/openfhe/openfheCommon.service';

async function generateCC(): Promise<void> {
  const { openFHEModule, cc } = await generateCKKSCryptoContext();
  console.log(openFHEModule);
  console.log(cc);
}
const GenerateCryptoContext = () => {
  return (
    <Button variant="contained" color="success" onClick={() => generateCC()}>
      Generate CC
    </Button>
  );
};

export default GenerateCryptoContext;
