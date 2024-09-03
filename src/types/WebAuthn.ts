// WebAuthn registration function
import type { GenerateRegistrationOptionsOpts as OriginalGenerateRegistrationOptionsOpts } from '@simplewebauthn/server';
import { generateRegistrationOptions as originalGenerateRegistrationOptions } from '@simplewebauthn/server';
import type {
  AuthenticationExtensionsClientOutputs as OriginalAuthenticationExtensionsClientOutputs,
  PublicKeyCredentialCreationOptionsJSON as OriginalPublicKeyCredentialCreationOptionsJSON,
  RegistrationResponseJSON as OriginalRegistrationResponseJSON,
} from '@simplewebauthn/types';
// Import the `RegistrationResponseJSON` type from the "@simplewebauthn/typescript-types" module
// Used to define the structure of a WebAuthn registration response in JSON format
export type PrfExtensionInputs = {
  eval?: {
    first: string | ArrayBuffer; // Input for the first PRF
    second?: string | ArrayBuffer; // Optional input for the second PRF
  };
};
// Extend the original interface to add a new property
export type AuthenticationExtensionsClientInputs = {
  prf?: PrfExtensionInputs;
  [key: string]: any; // Index signature to accept any additional extensions
} & OriginalGenerateRegistrationOptionsOpts['extensions'];

// Extend the original options type to include the extended extensions
export type GenerateRegistrationOptionsOpts = {
  extensions?: AuthenticationExtensionsClientInputs;
} & Omit<OriginalGenerateRegistrationOptionsOpts, 'extensions'>;

export type PublicKeyCredentialCreationOptionsJSON = {
  extensions?: AuthenticationExtensionsClientInputs;
} & Omit<OriginalPublicKeyCredentialCreationOptionsJSON, 'extensions'>;

// Create a wrapper function that overrides the original generateRegistrationOptions
export async function generateRegistrationOptions(
  options: GenerateRegistrationOptionsOpts,
): Promise<PublicKeyCredentialCreationOptionsJSON> {
  // Call the original function with the options
  return originalGenerateRegistrationOptions(
    options as OriginalGenerateRegistrationOptionsOpts,
  );
}

export type AuthenticationExtensionsClientOutputs = {
  prf?: {
    enabled: boolean;
    results?: {
      first?: ArrayBuffer | string;
      second?: ArrayBuffer | string;
    };
  };
} & OriginalAuthenticationExtensionsClientOutputs;

export type RegistrationResponseJSON = {
  clientExtensionResults: AuthenticationExtensionsClientInputs;
} & Omit<OriginalRegistrationResponseJSON, 'clientExtensionResults'>;
// export async function startRegistration(optionsJSON: PublicKeyCredentialCreationOptionsJSON): Promise<RegistrationResponseJSON> {
//   return originalStartRegistration(optionsJSON as any);
// }
