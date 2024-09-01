import type { VerifiedRegistrationResponse } from '@simplewebauthn/server';

export type passkeyObj = {
  credentialId: string; // The ID of the credential associated with the passkey
  friendlyName: string; // A friendly name or label for the passkey
  credential: RegistrationResponseJSON; // The registration response JSON object representing the passkey credential
  registrationInfo: VerifiedRegistrationResponse; // Information about the verified registration response for the passkey
};

declare module 'next-auth' {
  type Session = {
    id?: string;
    is2FAVerified?: boolean;
    user: {
      /** The user's DB ID. */
      id: string;
      // userInfo?: {
      //   fullName: Field<string>; // The first name of the user
      //   email: Field<string>; // The email address of the user
      //   dob: Field<number>; // The last name of the user
      //   mobile: Field<string>; // The last name of the user
      // };
    } & DefaultSession['user'];
  };
  type User = {
    id?: string;
    is2FAEnabled?: boolean;
    currentChallenge?: string | null;
    userID: string; // The ID of the user associated with the credential
    passkeyInfo: passkeyObj[]; // An array of passkey objects containing information about the user's passkeys
    userInfo?: {
      fullName: Field<string>; // The first name of the user
      email: Field<string>; // The email address of the user
      dob: Field<number>; // The last name of the user
      mobile: Field<string>; // The last name of the user
    };
  };
}
