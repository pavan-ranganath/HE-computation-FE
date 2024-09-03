import { SERTYPE } from '@/constants/openfhe';
import OpenFHEModule from '@/lib/openfhe/openfhe';

// Explicitly declare epsilon as a number
const epsilon: number = 1e-10;

export type peerConnectionPartialDecryption = {
  data?: Uint8Array | null;
  user: string;
  userId: string;
};

// Function: intToString
// Converts an array of UTF-16 code units to a string
export function intToString(intList: number[]) {
  // Map each code unit to its corresponding character using String.fromCharCode()
  // and store the characters in an array
  const charArray = intList.map(num => String.fromCharCode(num));

  // Join the characters in the array into a single string and return it
  return charArray.join('');
}

export function checkAllCharApproximateToZero(intList: any) {
  const charArray = Array.from({ length: intList.size() }, (_, i) => {
    const element = intList.get(i);
    return isApproxZero(element);
  });

  return charArray.every(value => value);
}
function customLocateFile(path: string, scriptDirectory: any) {
  if (!scriptDirectory.startsWith('http')) {
    return `public/${path}`;
  }
  return `/${path}`;
  // Your custom logic to locate the file
}

export async function generateCKKSCryptoContext() {
  // const factory = import("@/lib/openfhe/openfhe_pke");
  const openFHEModule = await OpenFHEModule({ locateFile: customLocateFile });
  const multDepth = 38;
  const scalingModSize = 50;
  const batchSize = 64;
  const securityLevel = openFHEModule.SecurityLevel.HEStd_NotSet;
  const params = new openFHEModule.CCParamsCryptoContextCKKSRNS();

  params.SetMultiplicativeDepth(multDepth);
  params.SetScalingModSize(scalingModSize);
  params.SetScalingTechnique(openFHEModule.ScalingTechnique.FIXEDAUTO);
  params.SetSecurityLevel(securityLevel);
  params.SetRingDim(8192);
  params.SetBatchSize(batchSize);
  params.SetSecretKeyDist(openFHEModule.SecretKeyDist.UNIFORM_TERNARY);
  params.SetKeySwitchTechnique(openFHEModule.KeySwitchTechnique.HYBRID);

  const cc = new openFHEModule.GenCryptoContextCKKS(params);
  cc.Enable(openFHEModule.PKESchemeFeature.PKE);
  cc.Enable(openFHEModule.PKESchemeFeature.KEYSWITCH);
  cc.Enable(openFHEModule.PKESchemeFeature.LEVELEDSHE);
  cc.Enable(openFHEModule.PKESchemeFeature.ADVANCEDSHE);
  cc.Enable(openFHEModule.PKESchemeFeature.MULTIPARTY);
  cc.Enable(openFHEModule.PKESchemeFeature.PRE);

  console.log(`CKKS scheme is using ring dimension ${cc.GetRingDimension()}\n`);
  return { openFHEModule, cc };
}

export const encryptDataWithPublickey = async (
  publicKey: any,
  plaintText: number,
) => {
  const { openFHEModule, cc } = await generateCKKSCryptoContext();
  const deserializedKey = openFHEModule.DeserializePublicKeyFromBuffer(
    publicKey,
    openFHEModule.SerType[SERTYPE],
  );
  const vectorOfInts = new openFHEModule.VectorDouble([plaintText]);
  const packedPlaintext = cc.MakeCKKSPackedPlaintext(vectorOfInts);
  const ciphertext = cc.Encrypt(deserializedKey, packedPlaintext);
  const cipherTextBuffer = openFHEModule.SerializeCiphertextToBuffer(
    ciphertext,
    openFHEModule.SerType[SERTYPE],
  );

  console.log('The cipher text has been serialized');
  return cipherTextBuffer;
};

export const reEncryptData = async (
  openFHEModule: any,
  cc: any,
  userPublicKey: any,
  serverPrivateKey: any,
  cipherText: any,
) => {
  // const { openFHEModule, cc } = await generateCKKSCryptoContext();
  const deserializedUserPublicKey
    = openFHEModule.DeserializePublicKeyFromBuffer(
      userPublicKey,
      openFHEModule.SerType[SERTYPE],
    );
  const deserializedServerPrivateKey
    = openFHEModule.DeserializePrivateKeyFromBuffer(
      serverPrivateKey,
      openFHEModule.SerType[SERTYPE],
    );
  const reencryptionKey = cc.ReKeyGenPrivPub(
    deserializedServerPrivateKey,
    deserializedUserPublicKey,
  );
  const cipherTextBuffer = openFHEModule.DeserializeCiphertextFromBuffer(
    cipherText,
    openFHEModule.SerType[SERTYPE],
  );
  // Perform re-encryption
  const reencryptedCiphertext = cc.ReEncrypt(reencryptionKey, cipherTextBuffer);
  // Serialize the re-encrypted result back to buffer
  const reencryptedBuffer = openFHEModule.SerializeCiphertextToBuffer(
    reencryptedCiphertext,
    openFHEModule.SerType[SERTYPE],
  );

  return reencryptedBuffer;
};

export const compareCipherTexts = async (
  cipherText1: any,
  cipherText2: any,
  keyFile: any,
) => {
  const { openFHEModule, cc } = await generateCKKSCryptoContext();
  const deserializedCiphertext1 = openFHEModule.DeserializeCiphertextFromBuffer(
    cipherText1,
    openFHEModule.SerType[SERTYPE],
  );
  const deserializedCiphertext2 = openFHEModule.DeserializeCiphertextFromBuffer(
    cipherText2,
    openFHEModule.SerType[SERTYPE],
  );
  const resultInCipherText = cc.EvalSubCipherCipher(
    deserializedCiphertext1,
    deserializedCiphertext2,
  );
  const decryptedResult = cc.Decrypt(keyFile, resultInCipherText);
  const formatDecryptedResult = decryptedResult.GetRealPackedValue();
  const result = checkAllCharApproximateToZero(formatDecryptedResult);
  return result;
};

function isApproxZero(formatDecryptedResult: string | number): boolean {
  // Ensure formatDecryptedResult is a number before using abs() and <
  const numericValue = Number(formatDecryptedResult);
  if (Number.isNaN(numericValue)) {
    throw new TypeError(
      'formatDecryptedResult cannot be converted to a number',
    );
  }

  return Math.abs(numericValue) < epsilon;
}
