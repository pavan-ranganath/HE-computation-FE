export type PageParams = {
  params?: { id?: string };
  searchParams?: { [key: string]: string | undefined };
};

export type NpmData = {
  version: string;
};

export type AuthenticationExtensionsClientInputs = {
  appid?: string;
  credProps?: boolean;
  hmacCreateSecret?: boolean;
  prf?: PrfExtensionInputs; // New property for PRF support
};

export type PrfExtensionInputs = {
  eval?: {
    first: ArrayBuffer; // Input for the first PRF
    second?: ArrayBuffer; // Optional input for the second PRF
  };
};

export type AuthenticationExtensionsClientOutputs = {
  appid?: boolean;
  credProps?: CredentialPropertiesOutput;
  hmacCreateSecret?: boolean;
  prf?: PrfExtensionOutputs; // New property for PRF support
};

export type PrfExtensionOutputs = {
  eval?: {
    first: ArrayBuffer; // Output of the first PRF
    second?: ArrayBuffer; // Optional output of the second PRF
  };
};
