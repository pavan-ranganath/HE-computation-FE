import '../../envConfig';

// eslint-disable-next-line unicorn/prefer-node-protocol
import process from 'process';

export const IS_PROD = process.env.NODE_ENV === 'production';
export const IS_DEV = process.env.NODE_ENV === 'development';

export const SHOW_CONSOLE_LOG = () => {
  return IS_DEV ? true : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true';
};
