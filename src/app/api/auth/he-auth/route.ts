import type { NextRequest } from 'next/server';

// Handler function for POST requests
export async function POST(req: NextRequest) {
  try {
    console.log(req);
  } catch (err) {
    console.error(err);
  }
}
