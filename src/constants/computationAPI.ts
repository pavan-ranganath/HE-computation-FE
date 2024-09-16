import '../../envConfig';

// eslint-disable-next-line unicorn/prefer-node-protocol
import process from 'process';

export const COMPUTAION_SERVER_BASE_URI = process.env.NEXT_PUBLIC_COMPUTATION_BACKEND_BASE_URI ? process.env.NEXT_PUBLIC_COMPUTATION_BACKEND_BASE_URI : 'http://localhost:50052';
export const COMPUTAION_SERVER_PUBLIC_KEY = `${COMPUTAION_SERVER_BASE_URI}/public-key`;
export const COMPUTAION_API_VERIFY = '/verify';
