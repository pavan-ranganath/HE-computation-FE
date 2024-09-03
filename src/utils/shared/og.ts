import { webcrypto } from 'iso-base/crypto';
import { utf8 } from 'iso-base/utf8';
import { concat, u8 } from 'iso-base/utils';

type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
};
// !STARTERCONF This OG is generated from https://github.com/theodorusclarence/og
// Please clone them and self-host if your site is going to be visited by many people.
// Then change the url and the default logo.
export function openGraph({
  siteName,
  templateTitle,
  description,
  // !STARTERCONF Or, you can use my server with your own logo.
  logo = 'https://og.<your-domain>/images/logo.jpg',
}: OpenGraphType): string {
  const ogLogo = encodeURIComponent(logo);
  const ogSiteName = encodeURIComponent(siteName.trim());
  const ogTemplateTitle = templateTitle
    ? encodeURIComponent(templateTitle.trim())
    : undefined;
  const ogDesc = encodeURIComponent(description.trim());

  return `https://og.<your-domain>/api/general?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ''
  }`;
}

// Convert Uint8Array to Base64 string
export function uint8ArrayToBase64(uint8Array: Uint8Array): string {
  // Convert each byte to a string character and join them
  const binaryString = Array.from(uint8Array, (byte: number) =>
    String.fromCharCode(byte),
  ).join('');
  return btoa(binaryString);
}

// Convert Base64 string to Uint8Array
export function base64ToUint8Array(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const uint8Array = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    uint8Array[i] = binaryString.charCodeAt(i);
  }
  return uint8Array;
}

// Convert Hex string to Uint8Array
export function hexStringToUint8Array(hexString: string): Uint8Array {
  // Get rid of all punctuation and spacing.
  hexString = hexString.replace(/[^0-9a-z]+/gi, '');
  const match = hexString.match(/[0-9a-f]{1,2}/gi);
  if (hexString.match(/^[0-9a-f]+$/i) && match && match.length) {
    return Uint8Array.from(match.map((byte) => Number.parseInt(byte, 16)));
  }
  throw new Error('Bad input to decodeHex');
}

// Convert Uint8Array to hex string
export function uint8ArrayToHexString(uint8Array: Uint8Array): string {
  return Array.from(new Uint8Array(uint8Array))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * Create an encryption key from passkey material
 *
 * @param {BufferSource} keyMaterial
 */
export async function createEncryptionKey(keyMaterial: BufferSource) {
  const inputKeyMaterial = u8(keyMaterial);
  // import key material
  const keyDerivationKey = await crypto.subtle.importKey(
    'raw',
    inputKeyMaterial,
    'HKDF',
    false,
    ['deriveKey'],
  );

  const encryptionKey = await crypto.subtle.deriveKey(
    {
      name: 'HKDF',
      info: utf8.decode('adv-passkey'),
      salt: new Uint8Array(),
      hash: 'SHA-256',
    },
    keyDerivationKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt'],
  );

  return encryptionKey;
}

export const ED25519_DID_PREFIX = new Uint8Array([0xed, 0x01]);
/**
 * Encrypt data with AES-GCM
 *
 * @param {Uint8Array} data
 * @param {CryptoKey} encryptionKey
 */
export async function encrypt(data: Uint8Array, encryptionKey: CryptoKey) {
  const iv = webcrypto.getRandomValues(new Uint8Array(12));

  const encrypted = await webcrypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    encryptionKey,
    data,
  );

  return concat([iv, u8(encrypted)]);
}

/**
 * Decrypt data with AES-GCM
 *
 * @param {Uint8Array} data
 * @param {CryptoKey} encryptionKey
 */
export async function decrypt(data: Uint8Array, encryptionKey: CryptoKey) {
  const iv = data.slice(0, 12);
  const encrypted = data.slice(12);
  const decrypted = await webcrypto.subtle.decrypt(
    { name: 'AES-GCM', iv },
    encryptionKey,
    encrypted,
  );
  return u8(decrypted);
}
