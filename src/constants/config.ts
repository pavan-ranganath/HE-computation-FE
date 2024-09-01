export const SITE_CONFIG = {
  title: 'Advanced Two Factor Authentication',
  description:
    'This Advanced Two Factor Authentication employs cryptographic techniques like homomorphic encryption to ensure the security of sensitive data. The process is designed to safeguard against unauthorized access, providing a robust solution for identity verification that meets high standards of security and compliance.',
  url: 'http://egstech.org',
};

export const HIDE_DEBUG_ARY = [
  // 'getApiResponse',
  'getMongoDbApiData',
];

export const AUTH_TABLE = process.env.AUTH_TABLE_NAME ?? 'Users';
