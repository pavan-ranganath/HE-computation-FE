import type { Buffer } from 'node:buffer';

import { saveAs } from 'file-saver';
import JSZip from 'jszip';

export type CryptoContextBuffers = {
  cryptoContextBuffer: Buffer | null;
  publicKeyBuffer: Buffer | null;
  evalMultKeyBuffer: Buffer | null;
  automorphismKeyBuffer: Buffer | null;
  FHEWtoCKKSSwitchKeyBuffer: Buffer | null;
  binfheCryptoContextBuffer: Buffer | null;
  binFHEBootRefreshKeyBuffer: Buffer | null;
  binFHEBootRotKeyBuffer: Buffer | null;
  keyIndexBuffer: Buffer | null;
  EvalKeyMappings: { [key: number]: { BSkey: Buffer; KSkey: Buffer } }[];
};
class DataAndLocation {
  cryptoContext: any = null;
  publicKey: any = null;
  binFHECryptoContext: any = null;
  FHEWtoCKKSSwitchKey: any = null;
  dataDirectory: string = 'demoData';
  cryptoContextFile: string = 'cryptocontext.txt';
  pubKeyFile: string = 'key_pub.txt';
  multKeyFile: string = 'key_mult.txt';
  rotKeyFile: string = 'key_rot.txt';
  FHEWtoCKKSSwitchKeyFile: string = 'key_switch_fhew_ckks.txt';
  binFHECryptoContextFile: string = 'binfhe_cryptocontext.txt';
  binFHEBootRefreshKeyFile: string = 'key_binfhe_boot_refresh.txt';
  binFHEBootRotKeyFile: string = 'key_binfhe_boot_rot.txt';
  baseRefreshKeyFile: string = 'key_refresh.txt';
  baseSwitchingKeyFile: string = 'key_switching.txt';
  keyIndexFile: string = 'key_indices.txt';
  module: any = null; // Placeholder for the module

  buffers: CryptoContextBuffers = {
    cryptoContextBuffer: null,
    publicKeyBuffer: null,
    evalMultKeyBuffer: null,
    automorphismKeyBuffer: null,
    FHEWtoCKKSSwitchKeyBuffer: null,
    binfheCryptoContextBuffer: null,
    binFHEBootRefreshKeyBuffer: null,
    binFHEBootRotKeyBuffer: null,
    keyIndexBuffer: null,
    EvalKeyMappings: [],
  };

  createMapFileName(index: number, baseFileName: string): string {
    return `${this.dataDirectory}/${index}_${baseFileName}`;
  }

  setDataDirectory(dir: string): void {
    if (!dir) {
      throw new Error('dir is an empty string');
    }

    // Remove slash if it is the last character in "dir"
    if (dir.slice(-1) === '/') {
      this.dataDirectory = dir.slice(0, -1);
    } else {
      this.dataDirectory = dir;
    }
  }
}

export class SchemeSwitchingDataSerializer extends DataAndLocation {
  SERTYPE: any; // Adjust based on the actual serialization type

  constructor(cryptoContext0: any = null, publicKey0: any = null) {
    super();
    this.cryptoContext = cryptoContext0;
    this.publicKey = publicKey0;
    this.binFHECryptoContext = cryptoContext0
      ? cryptoContext0.GetBinCCForSchemeSwitch()
      : null;
    this.FHEWtoCKKSSwitchKey = cryptoContext0
      ? cryptoContext0.GetSwkFC()
      : null;
  }

  Serialize(): void {
    if (this.module == null) {
      throw new Error('OPENFHE module is None');
    }
    if (this.cryptoContext === null) {
      throw new Error('cryptoContext is None');
    }
    if (this.publicKey === null) {
      throw new Error('publicKey is None');
    }
    if (this.binFHECryptoContext === null) {
      throw new Error('binFHECryptoContext is None');
    }
    if (this.FHEWtoCKKSSwitchKey === null) {
      throw new Error('FHEWtoCKKSSwitchKey is None');
    }

    const serverCC = this.cryptoContext;

    // Serialize to buffers
    this.buffers.cryptoContextBuffer
      = this.module.SerializeCryptoContextToBuffer(
        this.cryptoContext,
        this.SERTYPE,
      );
    if (!this.buffers.cryptoContextBuffer) {
      throw new Error(`Exception writing cryptocontext to buffer`);
    }

    this.buffers.publicKeyBuffer = this.module.SerializePublicKeyToBuffer(
      this.publicKey,
      this.SERTYPE,
    );
    if (!this.buffers.publicKeyBuffer) {
      throw new Error(`Exception writing publicKey to buffer`);
    }

    this.buffers.evalMultKeyBuffer = serverCC.SerializeEvalMultKeyToBuffer(
      this.SERTYPE,
    );
    if (!this.buffers.evalMultKeyBuffer) {
      throw new Error('Error writing eval mult keys to buffer');
    }

    this.buffers.automorphismKeyBuffer
      = serverCC.SerializeEvalAutomorphismKeyToBuffer(this.SERTYPE);
    if (!this.buffers.automorphismKeyBuffer) {
      throw new Error('Error writing rotation keys to buffer');
    }

    this.buffers.FHEWtoCKKSSwitchKeyBuffer = this.module.SerializeSwkFC(
      this.FHEWtoCKKSSwitchKey,
      this.SERTYPE,
    );
    if (!this.buffers.FHEWtoCKKSSwitchKeyBuffer) {
      throw new Error(`Exception writing FHEWtoCKKSSwitchKey to buffer`);
    }

    this.buffers.binfheCryptoContextBuffer
      = this.module.SerializeBinFHECryptoContextToBuffer(
        this.binFHECryptoContext,
        this.SERTYPE,
      );
    if (!this.buffers.binfheCryptoContextBuffer) {
      throw new Error(`Exception writing binFHECryptoContext to buffer`);
    }

    this.buffers.binFHEBootRefreshKeyBuffer
      = this.module.SerializeBinFHERefreshKeyToBuffer(
        this.binFHECryptoContext.GetRefreshKey(),
        this.SERTYPE,
      );
    if (!this.buffers.binFHEBootRefreshKeyBuffer) {
      throw new Error(`Exception writing binFHEBootRefreshKey to buffer`);
    }

    this.buffers.binFHEBootRotKeyBuffer
      = this.module.SerializeBinFHESwitchingKeyToBuffer(
        this.binFHECryptoContext.GetSwitchKey(),
        this.SERTYPE,
      );
    if (!this.buffers.binFHEBootRotKeyBuffer) {
      throw new Error(`Exception writing binFHEBootRotKey to buffer`);
    }

    const indices = new this.module.VectorUint32();
    const BTKeyMap = this.binFHECryptoContext.GetBTKeyMap();
    const BTKeyMapArr = Array.from({ length: BTKeyMap.keys().size() })
      .fill(0)
      .map((_, idx) => BTKeyMap.keys().get(idx));
    for (const [_, thekey] of Object.entries(BTKeyMapArr)) {
      const binFHEBSkeyKeyBuffer
        = this.module.SerializeBinFHERefreshKeyToBuffer(
          BTKeyMap.get(thekey).BSkey,
          this.SERTYPE,
        );
      if (!binFHEBSkeyKeyBuffer) {
        throw new Error(`Exception writing BSkey to buffer`);
      }

      const binFHEKSkeyBuffer = this.module.SerializeBinFHESwitchingKeyToBuffer(
        BTKeyMap.get(thekey).KSkey,
        this.SERTYPE,
      );
      if (!binFHEKSkeyBuffer) {
        throw new Error(`Exception writing KSkey to buffer`);
      }
      this.buffers.EvalKeyMappings.push({
        [thekey]: {
          BSkey: binFHEBSkeyKeyBuffer,
          KSkey: binFHEKSkeyBuffer,
        },
      });
      indices.push_back(thekey);
    }

    this.buffers.keyIndexBuffer = this.module.SerializeSeedSeqVector(
      indices,
      this.SERTYPE,
    );
    if (!this.buffers.keyIndexBuffer) {
      throw new Error(`Exception writing indices to buffer`);
    }
  }

  // writeBuffersToFile(): void {
  //     const writeToFile = (buffer: Buffer | null, fileName: string) => {
  //         if (buffer && fileName) {
  //             fs.writeFileSync(`${this.dataDirectory}/${fileName}`, buffer);
  //         }
  //     };
  //     const writeKeyMappingToFile = (thekey: { BSkey: Buffer, KSkey: Buffer }, index: number) => {
  //         const bskeyFileName =  this.createMapFileName(index, this.baseRefreshKeyFile);
  //         const kskeyFileName = this.createMapFileName(index, this.baseSwitchingKeyFile);

  //         fs.writeFileSync(bskeyFileName, thekey.BSkey);
  //         fs.writeFileSync(kskeyFileName, thekey.KSkey);
  //     };

  //     writeToFile(this.buffers.cryptoContextBuffer, this.cryptoContextFile);
  //     writeToFile(this.buffers.publicKeyBuffer, this.pubKeyFile);
  //     writeToFile(this.buffers.evalMultKeyBuffer, this.multKeyFile);
  //     writeToFile(this.buffers.automorphismKeyBuffer, this.rotKeyFile);
  //     writeToFile(this.buffers.FHEWtoCKKSSwitchKeyBuffer, this.FHEWtoCKKSSwitchKeyFile);
  //     writeToFile(this.buffers.binfheCryptoContextBuffer, this.binFHECryptoContextFile);
  //     writeToFile(this.buffers.binFHEBootRefreshKeyBuffer, this.binFHEBootRefreshKeyFile);
  //     writeToFile(this.buffers.binFHEBootRotKeyBuffer, this.binFHEBootRotKeyFile);
  //     writeToFile(this.buffers.keyIndexBuffer, this.keyIndexFile);

  //     this.buffers.EvalKeyMappings.forEach((mapping, index) => {
  //         const key = Object.keys(mapping)[0];
  //         const thekey = mapping[Number(key)];
  //         if (thekey) {
  //             writeKeyMappingToFile(thekey, Number(key));
  //         }
  //     });
  // }

  async createDownloadableFile(fileType: JSZip.OutputType = 'blob'): Promise<any> {
    const zip = new JSZip();

    const addBufferToZip = (buffer: Buffer | null, fileName: string) => {
      if (buffer && fileName) {
        zip.file(fileName, buffer);
      }
    };

    addBufferToZip(this.buffers.cryptoContextBuffer, this.cryptoContextFile);
    addBufferToZip(this.buffers.publicKeyBuffer, this.pubKeyFile);
    addBufferToZip(this.buffers.evalMultKeyBuffer, this.multKeyFile);
    addBufferToZip(this.buffers.automorphismKeyBuffer, this.rotKeyFile);
    addBufferToZip(
      this.buffers.FHEWtoCKKSSwitchKeyBuffer,
      this.FHEWtoCKKSSwitchKeyFile,
    );
    addBufferToZip(
      this.buffers.binfheCryptoContextBuffer,
      this.binFHECryptoContextFile,
    );
    addBufferToZip(
      this.buffers.binFHEBootRefreshKeyBuffer,
      this.binFHEBootRefreshKeyFile,
    );
    addBufferToZip(
      this.buffers.binFHEBootRotKeyBuffer,
      this.binFHEBootRotKeyFile,
    );
    addBufferToZip(this.buffers.keyIndexBuffer, this.keyIndexFile);

    this.buffers.EvalKeyMappings.forEach((mapping, _) => {
      const key = Object.keys(mapping)[0];
      const thekey = mapping[Number(key)];
      if (thekey) {
        zip.file(`${key}_${this.baseRefreshKeyFile}`, thekey.BSkey);
        zip.file(`${key}_${this.baseSwitchingKeyFile}`, thekey.KSkey);
      }
    });

    return zip.generateAsync({ type: fileType });
  }

  async downloadFile(): Promise<void> {
    try {
      const blob: Blob = await this.createDownloadableFile();
      saveAs(blob, 'SPEED_crypto_context.zip');
    } catch (error) {
      console.error('Error creating downloadable file:', error);
    }
  }

  async uploadFile(file: File): Promise<void> {
    const zip = new JSZip();
    const zipContent = await file.arrayBuffer(); // Read file content as ArrayBuffer
    await zip.loadAsync(zipContent);

    const readFileFromZip = async (fileName: string): Promise<Buffer | null> => {
      try {
        const content = await zip.file(fileName)?.async('nodebuffer');
        return content || null;
      } catch {
        return null;
      }
    };

    this.buffers.cryptoContextBuffer = await readFileFromZip(this.cryptoContextFile);
    this.buffers.publicKeyBuffer = await readFileFromZip(this.pubKeyFile);
    this.buffers.evalMultKeyBuffer = await readFileFromZip(this.multKeyFile);
    this.buffers.automorphismKeyBuffer = await readFileFromZip(this.rotKeyFile);
    this.buffers.FHEWtoCKKSSwitchKeyBuffer = await readFileFromZip(this.FHEWtoCKKSSwitchKeyFile);
    this.buffers.binfheCryptoContextBuffer = await readFileFromZip(this.binFHECryptoContextFile);
    this.buffers.binFHEBootRefreshKeyBuffer = await readFileFromZip(this.binFHEBootRefreshKeyFile);
    this.buffers.binFHEBootRotKeyBuffer = await readFileFromZip(this.binFHEBootRotKeyFile);
    this.buffers.keyIndexBuffer = await readFileFromZip(this.keyIndexFile);
  }
}
