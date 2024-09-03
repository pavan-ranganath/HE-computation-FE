import type { Buffer } from 'node:buffer';

import { saveAs } from 'file-saver';
import JSZip from 'jszip';

import OpenFHEModule from '@/lib/openfhe/openfhe';

export function padArray(inputVal: number[], slots: number): number[] {
  const paddingLength = slots - inputVal.length;
  const paddedVal = Array.from<number>({ length: Math.max(paddingLength, 0) })
    .fill(0)
    .concat(inputVal);
  return paddedVal;
}

// Converts a string to an array of UTF-16 code units
export function stringToInt(inputString: string): number[] {
  // Split the input string into an array of characters
  // Map each character directly to its corresponding code unit
  return inputString.split('').map(char => char.charCodeAt(0));
}

// Converts an array of UTF-16 code units to a string
export function intToString(intList: number[]) {
  // Map each code unit to its corresponding character using String.fromCharCode()
  // and store the characters in an array
  const charArray = intList.map(num => String.fromCharCode(num));

  // Join the characters in the array into a single string and return it
  return charArray.join('');
}
enum ScalingTechnique {
  FIXEDAUTO = 'FIXEDAUTO',
  FLEXIBLEAUTOEXT = 'FLEXIBLEAUTOEXT',
}

enum SecurityLevel {
  HEStd_NotSet = 'HEStd_NotSet',
  // Add other security levels as needed
}

enum BINFHEParamSet {
  TOY = 'TOY',
  // Add other parameter sets as needed
}

enum SERTYPE {
  BINARY = 'BINARY',
  JSON = 'JSON',
}
function customLocateFile(path: string, scriptDirectory: any) {
  if (!scriptDirectory.startsWith('http')) {
    return `public/${path}`;
  }
  return `/${path}`;
  // Your custom logic to locate the file
}
export class CKKSContext {
  // Protected properties to allow access in derived classes
  protected scTech: ScalingTechnique = ScalingTechnique.FIXEDAUTO; // Default scaling technique
  protected multDepth = 17; // Default multiplicative depth
  protected scaleModSize = 50; // Default scaling modulus size
  protected firstModSize = 57; // Default first modulus size
  protected ringDim = 4096; // Default ring dimension
  protected sl: SecurityLevel = SecurityLevel.HEStd_NotSet; // Default security level
  protected slBin: BINFHEParamSet = BINFHEParamSet.TOY; // Default BINFHE parameter set
  protected logQ_ccLWE = 25; // Default log Q for FHEW
  protected slots = 16; // Default number of slots
  protected batchSize = this.slots; // Default batch size
  protected sertype: SERTYPE = SERTYPE.BINARY;
  private openFHEModule: any;
  private cc: any;
  private keys: any;

  constructor(
    scTech?: ScalingTechnique,
    multDepth?: number,
    scaleModSize?: number,
    firstModSize?: number,
    ringDim?: number,
    sl?: SecurityLevel,
    slBin?: BINFHEParamSet,
    logQ_ccLWE?: number,
    slots?: number,
    batchSize?: number,
    sertype?: SERTYPE,
  ) {
    // Override default values if provided
    if (scTech) {
      this.scTech = scTech;
    }
    if (multDepth) {
      this.multDepth = multDepth;
    }
    if (scaleModSize) {
      this.scaleModSize = scaleModSize;
    }
    if (firstModSize) {
      this.firstModSize = firstModSize;
    }
    if (ringDim) {
      this.ringDim = ringDim;
    }
    if (sl) {
      this.sl = sl;
    }
    if (slBin) {
      this.slBin = slBin;
    }
    if (logQ_ccLWE) {
      this.logQ_ccLWE = logQ_ccLWE;
    }
    if (slots) {
      this.slots = slots;
    }
    if (batchSize) {
      this.batchSize = batchSize;
    }
    if (sertype) {
      this.sertype = sertype;
    }

    this.openFHEModule = null;
    this.cc = null;
    this.keys = null;
  }

  async initializeOpenFHE() {
    this.openFHEModule = await OpenFHEModule({ locateFile: customLocateFile });
  }

  private getScalingTechniques() {
    return {
      [ScalingTechnique.FIXEDAUTO]:
        this.openFHEModule.ScalingTechnique.FIXEDAUTO,
      [ScalingTechnique.FLEXIBLEAUTOEXT]:
        this.openFHEModule.ScalingTechnique.FLEXIBLEAUTOEXT,
    };
  }

  private getSecurityLevels() {
    return {
      [SecurityLevel.HEStd_NotSet]:
        this.openFHEModule.SecurityLevel.HEStd_NotSet,
      // Add other security levels as needed
    };
  }

  private getSerializeType() {
    return {
      [SERTYPE.BINARY]:
        this.openFHEModule.SerType.BINARY,
      [SERTYPE.JSON]:
        this.openFHEModule.SerType.JSON,
    };
  }

  private getBINFHEParams() {
    return {
      [BINFHEParamSet.TOY]: this.openFHEModule.BINFHE_PARAMSET.TOY,
      // Add other BINFHE parameters as needed
    };
  }

  get CryptoContext() {
    return this.cc;
  }

  get Keys() {
    return this.keys;
  }

  get OpenFHEModule() {
    return this.openFHEModule;
  }

  initializeCryptoContext() {
    if (!this.openFHEModule) {
      throw new Error('openFHEModule is not initialized');
    }

    try {
      const scTech = this.getScalingTechniques()[this.scTech];
      let multDepth = this.multDepth;

      if (
        scTech === this.getScalingTechniques()[ScalingTechnique.FLEXIBLEAUTOEXT]
      ) {
        multDepth += 1;
      }

      const parameters = new this.openFHEModule.CCParamsCryptoContextCKKSRNS();
      parameters.SetMultiplicativeDepth(multDepth);
      parameters.SetScalingModSize(this.scaleModSize);
      parameters.SetFirstModSize(this.firstModSize);
      parameters.SetScalingTechnique(scTech);
      parameters.SetSecurityLevel(this.getSecurityLevels()[this.sl]);
      parameters.SetRingDim(this.ringDim);
      parameters.SetBatchSize(this.batchSize);
      parameters.SetSecretKeyDist(
        this.openFHEModule.SecretKeyDist.UNIFORM_TERNARY,
      );
      parameters.SetKeySwitchTechnique(
        this.openFHEModule.KeySwitchTechnique.HYBRID,
      );
      parameters.SetNumLargeDigits(3);

      this.cc = new this.openFHEModule.GenCryptoContextCKKS(parameters);

      // Enable features
      this.cc.Enable(this.openFHEModule.PKESchemeFeature.PKE);
      this.cc.Enable(this.openFHEModule.PKESchemeFeature.KEYSWITCH);
      this.cc.Enable(this.openFHEModule.PKESchemeFeature.LEVELEDSHE);
      this.cc.Enable(this.openFHEModule.PKESchemeFeature.ADVANCEDSHE);
      this.cc.Enable(this.openFHEModule.PKESchemeFeature.SCHEMESWITCH);

      console.log(
        `CKKS scheme is using ring dimension ${this.cc.GetRingDimension()},\n and number of slots ${
          this.slots
        }\n and supports a multiplicative depth of ${multDepth}\n`,
      );
    } catch (error) {
      const msg
        = typeof error === 'number'
          ? this.openFHEModule.getExceptionMessage(error)
          : error;
      throw new Error(msg);
    }
  }

  generateKey() {
    if (!this.cc) {
      throw new Error('CKKSContext is not initialized');
    }
    this.keys = this.cc.KeyGen();
    console.log('Completed keygen');
  }

  addschemeSwitchingCC() {
    if (!this.cc || !this.keys) {
      throw new Error('CKKSContext and keys is not initialized');
    }
    try {
      // Prepare the FHEW cryptocontext and keys for FHEW and scheme switching
      const params = new this.openFHEModule.SchSwchParams();
      params.SetSecurityLevelCKKS(this.getSecurityLevels()[this.sl]);
      params.SetSecurityLevelFHEW(this.getBINFHEParams()[this.slBin]);
      params.SetCtxtModSizeFHEWLargePrec(this.logQ_ccLWE);
      params.SetNumSlotsCKKS(this.slots);
      params.SetNumValues(this.slots);

      const privateKeyFHEW = this.cc.EvalSchemeSwitchingSetup(params);
      // const ccLWE = this.cc.GetBinCCForSchemeSwitch();
      this.cc.EvalSchemeSwitchingKeyGen(this.keys, privateKeyFHEW);
    } catch (error) {
      const msg
        = typeof error === 'number'
          ? this.openFHEModule.getExceptionMessage(error)
          : error;
      throw new Error(msg);
    } finally {
      console.log('Completed schemeSwitchingCC');
    }
  }

  packAndEncrypt(vector: number[]): any {
    if (!this.cc || !this.keys) {
      throw new Error('CKKSContext is not initialized');
    }
    const packedPlaintext = this.encodedVector(vector);
    const ciphertext = this.cc.Encrypt(this.keys.publicKey, packedPlaintext);
    return ciphertext;
  }

  encodedVector(vector: number[]): any {
    const vectorOutput = new this.openFHEModule.VectorDouble(
      padArray(vector, this.slots),
    );
    return this.cc.MakeCKKSPackedPlaintext(vectorOutput);
  }

  encryptString(str: string): any {
    if (!this.cc || !this.keys) {
      throw new Error('CKKSContext is not initialized');
    }
    const strToIntVector = stringToInt(str);
    const encodedVector = this.encodedVector(strToIntVector);
    const ciphertext = this.cc.Encrypt(this.keys.publicKey, encodedVector);
    return ciphertext;
  }

  createCipherTextBuffer(cipherText: any) {
    return this.openFHEModule.SerializeCiphertextToBuffer(cipherText, this.getSerializeType()[this.sertype]);
  }

  async downloadKeys(): Promise<void> {
    const zip = new JSZip();

    const addBufferToZip = (buffer: Buffer | null, fileName: string) => {
      if (buffer && fileName) {
        zip.file(fileName, buffer);
      }
    };

    const buffers: {
      privateKeyBuffer: Buffer | null;
      publicKeyBuffer: Buffer | null;
    } = {
      privateKeyBuffer: null,
      publicKeyBuffer: null,
    };
    buffers.publicKeyBuffer = this.openFHEModule.SerializePublicKeyToBuffer(
      this.keys.publicKey,
      this.getSerializeType()[this.sertype],
    );
    buffers.privateKeyBuffer = this.openFHEModule.SerializePrivateKeyToBuffer(
      this.keys.secretKey,
      this.getSerializeType()[this.sertype],
    );
    addBufferToZip(buffers.privateKeyBuffer, 'privateKey.txt');
    addBufferToZip(buffers.publicKeyBuffer, 'publicKey.txt');
    const blob = await zip.generateAsync({ type: 'blob' });
    saveAs(blob, 'SPEED_keys.zip');
  }
}
