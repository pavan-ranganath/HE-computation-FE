/* eslint-disable style/operator-linebreak */
/* eslint-disable new-cap */
/* eslint-disable no-alert */
/* eslint-disable unicorn/prefer-number-properties */
/* eslint-disable no-useless-catch */
/* eslint-disable regexp/no-dupe-disjunctions */
/* eslint-disable regexp/no-empty-alternative */
/* eslint-disable node/prefer-global/buffer */
/* eslint-disable node/handle-callback-err */
/* eslint-disable no-unreachable-loop */
/* eslint-disable no-sequences */

/* eslint-disable regexp/no-super-linear-backtracking */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
/* eslint-disable unicorn/no-new-array */

/* eslint-disable no-redeclare */
/* eslint-disable block-scoped-var */
/* eslint-disable no-self-assign */
/* eslint-disable no-prototype-builtins */
// @ts-nocheck
/* eslint-disable no-restricted-globals */
/* eslint-disable style/brace-style */
/* eslint-disable no-empty */
// /* eslint-disable */
/* eslint-disable node/no-path-concat */
/* eslint-disable no-var */
/* eslint-disable no-throw-literal */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */

/* eslint-disable vars-on-top */
/* eslint no-use-before-define: 0 */ // --> OFF
const Module = (() => {
  // @ts-ignore
  let _scriptName =
    typeof document != 'undefined' ? document.currentScript?.src : undefined;
  if (typeof __filename != 'undefined') {
    _scriptName ||= __filename;
  }
  return function (moduleArg = {}) {
    let moduleRtn;

    // include: shell.js
    // The Module object: Our interface to the outside world. We import
    // and export values on it. There are various ways Module can be used:
    // 1. Not defined. We create it here
    // 2. A function parameter, function(moduleArg) => Promise<Module>
    // 3. pre-run appended it, var Module = {}; ..generated code..
    // 4. External script tag defines var Module.
    // We need to check if Module already exists (e.g. case 3 above).
    // Substitution will be replaced with actual code on later stage of the build,
    // this way Closure Compiler will not mangle it (e.g. case 4. above).
    // Note that if you want to run closure, and also to use Module
    // after the generated code, you will need to define   var Module = {};
    // before the code. Then that object will be used in the code, and you
    // can continue to use Module afterwards as well.
    const Module = moduleArg;

    // Set up the promise that indicates the Module is initialized
    // @ts-ignore
    let readyPromiseResolve, readyPromiseReject;

    const readyPromise = new Promise((resolve, reject) => {
      readyPromiseResolve = resolve;
      readyPromiseReject = reject;
    });

    [
      'getExceptionMessage',
      'incrementExceptionRefcount',
      'decrementExceptionRefcount',
      '_memory',
      '___indirect_function_table',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto15LWECryptoParamsEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto15LWECryptoParamsEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto15LWECryptoParamsEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto15LWECryptoParamsEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto17LWECiphertextImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto17LWECiphertextImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto17LWECiphertextImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto17LWECiphertextImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto17LWEPrivateKeyImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto17LWEPrivateKeyImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto17LWEPrivateKeyImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto17LWEPrivateKeyImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto16LWEPublicKeyImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto16LWEPublicKeyImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto16LWEPublicKeyImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto16LWEPublicKeyImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto19LWESwitchingKeyImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto19LWESwitchingKeyImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto19LWESwitchingKeyImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto19LWESwitchingKeyImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto18RLWECiphertextImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto18RLWECiphertextImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto18RLWECiphertextImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto18RLWECiphertextImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto19RingGSWCryptoParamsEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto19RingGSWCryptoParamsEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto19RingGSWCryptoParamsEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto19RingGSWCryptoParamsEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto18RingGSWEvalKeyImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto18RingGSWEvalKeyImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto18RingGSWEvalKeyImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto18RingGSWEvalKeyImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto17RingGSWACCKeyImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto17RingGSWACCKeyImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto17RingGSWACCKeyImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto17RingGSWACCKeyImplEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto18BinFHECryptoParamsEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto18BinFHECryptoParamsEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto18BinFHECryptoParamsEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto18BinFHECryptoParamsEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto13BinFHEContextEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto13BinFHEContextEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto13BinFHEContextEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto13BinFHEContextEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto23CryptoParametersCKKSRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto23CryptoParametersCKKSRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto23CryptoParametersCKKSRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto23CryptoParametersCKKSRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto13SchemeCKKSRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto13SchemeCKKSRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto13SchemeCKKSRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto13SchemeCKKSRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto19CKKSBootstrapPrecomEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto19CKKSBootstrapPrecomEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto19CKKSBootstrapPrecomEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto19CKKSBootstrapPrecomEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto10FHECKKSRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto10FHECKKSRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto10FHECKKSRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto10FHECKKSRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto13SWITCHCKKSRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto13SWITCHCKKSRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto13SWITCHCKKSRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto13SWITCHCKKSRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto22CryptoParametersBGVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto22CryptoParametersBGVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto22CryptoParametersBGVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto22CryptoParametersBGVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto12SchemeBGVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto12SchemeBGVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto12SchemeBGVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto12SchemeBGVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto9FHEBGVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto9FHEBGVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto9FHEBGVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto9FHEBGVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto22CryptoParametersBFVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto22CryptoParametersBFVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto22CryptoParametersBFVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto22CryptoParametersBFVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto12SchemeBFVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto12SchemeBFVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto12SchemeBFVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto12SchemeBFVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto9FHEBFVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto9FHEBFVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto9FHEBFVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto9FHEBFVRNSEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto11EvalKeyImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto11EvalKeyImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto11EvalKeyImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto11EvalKeyImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto16EvalKeyRelinImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto16EvalKeyRelinImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto16EvalKeyRelinImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv',
      '__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto16EvalKeyRelinImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv',
      'onRuntimeInitialized',
    ].forEach((prop) => {
      if (!Object.getOwnPropertyDescriptor(readyPromise, prop)) {
        Object.defineProperty(readyPromise, prop, {
          get: () =>
            abort(
              `You are getting ${prop} on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js`,
            ),
          set: () =>
            abort(
              `You are setting ${prop} on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js`,
            ),
        });
      }
    });

    // Determine the runtime environment we are in. You can customize this by
    // setting the ENVIRONMENT setting at compile time (see settings.js).
    // Attempt to auto-detect the environment
    const ENVIRONMENT_IS_WEB = typeof window == 'object';

    // @ts-ignore
    const ENVIRONMENT_IS_WORKER = typeof importScripts == 'function';

    // N.b. Electron.js environment is simultaneously a NODE-environment, but
    // also a web environment.
    const ENVIRONMENT_IS_NODE =
      typeof process == 'object' &&
      typeof process.versions == 'object' &&
      typeof process.versions.node == 'string';

    const ENVIRONMENT_IS_SHELL =
      !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

    // @ts-ignore
    if (Module.ENVIRONMENT) {
      throw new Error(
        'Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)',
      );
    }

    if (ENVIRONMENT_IS_NODE) {
    }

    // --pre-jses are emitted after the Module integration code, so that they can
    // refer to Module (if they choose; they can also define Module)
    // Sometimes an existing Module object exists with properties
    // meant to overwrite the default module functionality. Here
    // we collect those properties and reapply _after_ we configure
    // the current environment's defaults to avoid having to be so
    // defensive during initialization.
    let moduleOverrides = Object.assign({}, Module);

    // @ts-ignore
    let arguments_ = [];

    let thisProgram = './this.program';

    // @ts-ignore
    let quit_ = (status, toThrow) => {
      throw toThrow;
    };

    // `/` should be present at the end if `scriptDirectory` is not empty
    let scriptDirectory = '';

    // @ts-ignore
    function locateFile(path) {
      dbg('locateFile:', path, 'scriptDirectory:', scriptDirectory);
      // @ts-ignore
      if (Module.locateFile) {
        // @ts-ignore
        return Module.locateFile(path, scriptDirectory);
      }
      return scriptDirectory + path;
    }

    // Hooks that are implemented differently in different runtime environments.
    // @ts-ignore
    let readAsync, readBinary;

    if (ENVIRONMENT_IS_NODE) {
      if (
        typeof process == 'undefined' ||
        !process.release ||
        process.release.name !== 'node'
      ) {
        throw new Error(
          'not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)',
        );
      }
      const nodeVersion = process.versions.node;
      let numericVersion = nodeVersion.split('.').slice(0, 3);
      // @ts-ignore
      numericVersion =
        numericVersion[0] * 1e4 +
        numericVersion[1] * 100 +
        numericVersion[2].split('-')[0] * 1;
      // @ts-ignore
      const minVersion = 16e4;
      // @ts-ignore
      if (numericVersion < 16e4) {
        throw new Error(
          `This emscripten-generated code requires node v16.0.0 (detected v${nodeVersion})`,
        );
      }
      // These modules will usually be used on Node.js. Load them eagerly to avoid
      // the complexity of lazy-loading.
      var fs = require('node:fs');
      const nodePath = require('node:path');
      scriptDirectory = `${__dirname}/`;
      // include: node_shell_read.js
      // @ts-ignore
      readBinary = (filename) => {
        // We need to re-wrap `file://` strings to URLs. Normalizing isn't
        // necessary in that case, the path should already be absolute.
        filename = isFileURI(filename)
          ? new URL(filename)
          : nodePath.normalize(filename);
        const ret = fs.readFileSync(filename);
        assert(ret.buffer);
        return ret;
      };
      // @ts-ignore
      readAsync = (filename, binary = true) => {
        // See the comment in the `readBinary` function.
        filename = isFileURI(filename)
          ? new URL(filename)
          : nodePath.normalize(filename);
        return new Promise((resolve, reject) => {
          fs.readFile(filename, binary ? undefined : 'utf8', (err, data) => {
            if (err) {
              reject(err);
            } else {
              // @ts-ignore
              resolve(binary ? data.buffer : data);
            }
          });
        });
      };
      // end include: node_shell_read.js
      // @ts-ignore
      if (!Module.thisProgram && process.argv.length > 1) {
        // @ts-ignore
        thisProgram = process.argv[1].replace(/\\/g, '/');
      }
      arguments_ = process.argv.slice(2);
      // MODULARIZE will export the module in the proper place outside, we don't need to export here
      quit_ = (status, toThrow) => {
        process.exitCode = status;
        throw toThrow;
      };
    } else if (ENVIRONMENT_IS_SHELL) {
      // @ts-ignore
      if (
        (typeof process == 'object' && typeof require === 'function') ||
        typeof window == 'object' ||
        typeof importScripts == 'function'
      ) {
        throw new TypeError(
          'not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)',
        );
      }
    } // Note that this includes Node.js workers when relevant (pthreads is enabled).
    // Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
    // ENVIRONMENT_IS_NODE.
    else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        // Check worker, not web, since window could be polyfilled
        scriptDirectory = self.location.href;
      } else if (typeof document != 'undefined' && document.currentScript) {
        // web
        // @ts-ignore
        scriptDirectory = document.currentScript.src;
      }
      // When MODULARIZE, this JS may be executed later, after document.currentScript
      // is gone, so we saved it, and we use it here instead of any other info.
      if (_scriptName) {
        scriptDirectory = _scriptName;
      }
      // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
      // otherwise, slice off the final part of the url to find the script directory.
      // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
      // and scriptDirectory will correctly be replaced with an empty string.
      // If scriptDirectory contains a query (starting with ?) or a fragment (starting with #),
      // they are removed because they could contain a slash.
      if (scriptDirectory.startsWith('blob:')) {
        scriptDirectory = '';
      } else {
        scriptDirectory = scriptDirectory.substr(
          0,
          scriptDirectory.replace(/[?#].*/, '').lastIndexOf('/') + 1,
        );
      }
      // @ts-ignore
      if (!(typeof window == 'object' || typeof importScripts == 'function')) {
        throw new TypeError(
          'not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)',
        );
      }
      {
        // include: web_or_worker_shell_read.js
        if (ENVIRONMENT_IS_WORKER) {
          // @ts-ignore
          readBinary = (url) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            xhr.responseType = 'arraybuffer';
            xhr.send(null);
            return new Uint8Array(/** @type{!ArrayBuffer} */ (xhr.response));
          };
        }
        // @ts-ignore
        readAsync = (url) => {
          // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
          // See https://github.com/github/fetch/pull/92#issuecomment-140665932
          // Cordova or Electron apps are typically loaded from a file:// url.
          // So use XHR on webview if URL is a file URL.
          if (isFileURI(url)) {
            return new Promise((reject, resolve) => {
              const xhr = new XMLHttpRequest();
              xhr.open('GET', url, true);
              xhr.responseType = 'arraybuffer';
              xhr.onload = () => {
                if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
                  // file URLs can return 0
                  resolve(xhr.response);
                }
                reject(xhr.status);
              };
              xhr.onerror = reject;
              xhr.send(null);
            });
          }
          return fetch(url, {
            credentials: 'same-origin',
          }).then((response) => {
            if (response.ok) {
              return response.arrayBuffer();
            }
            return Promise.reject(
              new Error(`${response.status} : ${response.url}`),
            );
          });
        };
      }
    } // end include: web_or_worker_shell_read.js
    else {
      throw new Error('environment detection error');
    }

    // @ts-ignore
    let out = Module.print || console.log.bind(console);

    // @ts-ignore
    let err = Module.printErr || console.error.bind(console);

    // Merge back in the overrides
    Object.assign(Module, moduleOverrides);

    // Free the object hierarchy contained in the overrides, this lets the GC
    // reclaim data used.
    // @ts-ignore
    moduleOverrides = null;

    checkIncomingModuleAPI();

    // Emit code to handle expected values on the Module object. This applies Module.x
    // to the proper local x. This has two benefits: first, we only emit it if it is
    // expected to arrive, and second, by using a local everywhere else that can be
    // minified.
    // @ts-ignore
    if (Module.arguments) {
      // @ts-ignore
      arguments_ = Module.arguments;
    }

    legacyModuleProp('arguments', 'arguments_');

    // @ts-ignore
    if (Module.thisProgram) {
      // @ts-ignore
      thisProgram = Module.thisProgram;
    }

    legacyModuleProp('thisProgram', 'thisProgram');

    // @ts-ignore
    if (Module.quit) {
      // @ts-ignore
      quit_ = Module.quit;
    }

    legacyModuleProp('quit', 'quit_');

    // perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
    // Assertions on removed incoming Module JS APIs.
    // @ts-ignore
    assert(
      typeof Module.memoryInitializerPrefixURL == 'undefined',
      'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead',
    );

    // @ts-ignore
    assert(
      typeof Module.pthreadMainPrefixURL == 'undefined',
      'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead',
    );

    // @ts-ignore
    assert(
      typeof Module.cdInitializerPrefixURL == 'undefined',
      'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead',
    );

    // @ts-ignore
    assert(
      typeof Module.filePackagePrefixURL == 'undefined',
      'Module.filePackagePrefixURL option was removed, use Module.locateFile instead',
    );

    // @ts-ignore
    assert(typeof Module.read == 'undefined', 'Module.read option was removed');

    // @ts-ignore
    assert(
      typeof Module.readAsync == 'undefined',
      'Module.readAsync option was removed (modify readAsync in JS)',
    );

    // @ts-ignore
    assert(
      typeof Module.readBinary == 'undefined',
      'Module.readBinary option was removed (modify readBinary in JS)',
    );

    // @ts-ignore
    assert(
      typeof Module.setWindowTitle == 'undefined',
      'Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)',
    );

    // @ts-ignore
    assert(
      typeof Module.TOTAL_MEMORY == 'undefined',
      'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY',
    );

    legacyModuleProp('asm', 'wasmExports');

    legacyModuleProp('readAsync', 'readAsync');

    legacyModuleProp('readBinary', 'readBinary');

    legacyModuleProp('setWindowTitle', 'setWindowTitle');

    // @ts-ignore
    const IDBFS =
      'IDBFS is no longer included by default; build with -lidbfs.js';

    // @ts-ignore
    const PROXYFS =
      'PROXYFS is no longer included by default; build with -lproxyfs.js';

    // @ts-ignore
    const WORKERFS =
      'WORKERFS is no longer included by default; build with -lworkerfs.js';

    // @ts-ignore
    const FETCHFS =
      'FETCHFS is no longer included by default; build with -lfetchfs.js';

    // @ts-ignore
    const ICASEFS =
      'ICASEFS is no longer included by default; build with -licasefs.js';

    // @ts-ignore
    const JSFILEFS =
      'JSFILEFS is no longer included by default; build with -ljsfilefs.js';

    // @ts-ignore
    const OPFS = 'OPFS is no longer included by default; build with -lopfs.js';

    // @ts-ignore
    const NODEFS =
      'NODEFS is no longer included by default; build with -lnodefs.js';

    assert(
      !ENVIRONMENT_IS_SHELL,
      'shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.',
    );

    // end include: shell.js
    // include: preamble.js
    // === Preamble library stuff ===
    // Documentation for the public APIs defined in this file must be updated in:
    //    site/source/docs/api_reference/preamble.js.rst
    // A prebuilt local version of the documentation is available at:
    //    site/build/text/docs/api_reference/preamble.js.txt
    // You can also build docs locally as HTML or other formats in site/
    // An online HTML version (which may be of a different version of Emscripten)
    //    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html
    // @ts-ignore
    let wasmBinary;

    // @ts-ignore
    if (Module.wasmBinary) {
      // @ts-ignore
      wasmBinary = Module.wasmBinary;
    }

    legacyModuleProp('wasmBinary', 'wasmBinary');

    if (typeof WebAssembly != 'object') {
      err('no native wasm support detected');
    }

    // Wasm globals
    // @ts-ignore
    let wasmMemory;

    // ========================================
    // Runtime essentials
    // ========================================
    // whether we are quitting the application. no code should run after this.
    // set in exit() and abort()
    let ABORT = false;

    // set by exit() and abort().  Passed to 'onExit' handler.
    // NOTE: This is also used as the process return code code in shell environments
    // but only when noExitRuntime is false.
    // @ts-ignore
    let EXITSTATUS;

    // In STRICT mode, we only define assert() when ASSERTIONS is set.  i.e. we
    // don't define it at all in release modes.  This matches the behaviour of
    // MINIMAL_RUNTIME.
    // TODO(sbc): Make this the default even without STRICT enabled.
    /** @type {function(*, string=)} */ function assert(condition, text) {
      if (!condition) {
        abort(`Assertion failed${text ? `: ${text}` : ''}`);
      }
    }

    // We used to include malloc/free by default in the past. Show a helpful error in
    // builds with assertions.
    // Memory management
    // @ts-ignore
    let HEAP,
      /** @type {!Int8Array} */ HEAP8,
      /** @type {!Uint8Array} */ HEAPU8,
      /** @type {!Int16Array} */ HEAP16,
      /** @type {!Uint16Array} */ HEAPU16,
      /** @type {!Int32Array} */ HEAP32,
      /** @type {!Uint32Array} */ HEAPU32,
      /** @type {!Float32Array} */ HEAPF32 /* BigInt64Array type is not correctly defined in closure/** not-@type {!BigInt64Array} */,
      // @ts-ignore
      HEAP64 /* BigUInt64Array type is not correctly defined in closure/** not-t@type {!BigUint64Array} */,
      // @ts-ignore
      HEAPU64,
      /** @type {!Float64Array} */ HEAPF64;

    // include: runtime_shared.js
    function updateMemoryViews() {
      // @ts-ignore
      const b = wasmMemory.buffer;
      // @ts-ignore
      Module.HEAP8 = HEAP8 = new Int8Array(b);
      // @ts-ignore
      Module.HEAP16 = HEAP16 = new Int16Array(b);
      // @ts-ignore
      Module.HEAPU8 = HEAPU8 = new Uint8Array(b);
      // @ts-ignore
      Module.HEAPU16 = HEAPU16 = new Uint16Array(b);
      // @ts-ignore
      Module.HEAP32 = HEAP32 = new Int32Array(b);
      // @ts-ignore
      Module.HEAPU32 = HEAPU32 = new Uint32Array(b);
      // @ts-ignore
      Module.HEAPF32 = HEAPF32 = new Float32Array(b);
      // @ts-ignore
      Module.HEAPF64 = HEAPF64 = new Float64Array(b);
      // @ts-ignore
      Module.HEAP64 = HEAP64 = new BigInt64Array(b);
      // @ts-ignore
      Module.HEAPU64 = HEAPU64 = new BigUint64Array(b);
    }

    // end include: runtime_shared.js
    // @ts-ignore
    assert(
      !Module.STACK_SIZE,
      'STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time',
    );

    assert(
      typeof Int32Array != 'undefined' &&
      typeof Float64Array !== 'undefined' &&
      Int32Array.prototype.subarray != undefined &&
      Int32Array.prototype.set != undefined,
      'JS engine does not provide full typed array support',
    );

    // If memory is defined in wasm, the user can't provide it, or set INITIAL_MEMORY
    // @ts-ignore
    assert(
      !Module.wasmMemory,
      'Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally',
    );

    // @ts-ignore
    assert(
      !Module.INITIAL_MEMORY,
      'Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically',
    );

    // include: runtime_stack_check.js
    // Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
    function writeStackCookie() {
      let max = _emscripten_stack_get_end();
      dbg(`writeStackCookie: ${ptrToString(max)}`);
      assert((max & 3) == 0);
      // If the stack ends at address zero we write our cookies 4 bytes into the
      // stack.  This prevents interference with SAFE_HEAP and ASAN which also
      // monitor writes to address zero.
      if (max == 0) {
        max += 4;
      }
      // The stack grow downwards towards _emscripten_stack_get_end.
      // We write cookies to the final two words in the stack and detect if they are
      // ever overwritten.
      HEAPU32[(max >>> 2) >>> 0] = 34821223;
      HEAPU32[((max + 4) >>> 2) >>> 0] = 2310721022;
      // Also test the global address 0 for integrity.
      HEAPU32[(0 >>> 2) >>> 0] = 1668509029;
    }

    function checkStackCookie() {
      if (ABORT) {
        return;
      }
      let max = _emscripten_stack_get_end();
      dbg(`checkStackCookie: ${ptrToString(max)}`);
      // See writeStackCookie().
      if (max == 0) {
        max += 4;
      }
      const cookie1 = HEAPU32[(max >>> 2) >>> 0];
      const cookie2 = HEAPU32[((max + 4) >>> 2) >>> 0];
      if (cookie1 != 34821223 || cookie2 != 2310721022) {
        abort(
          `Stack overflow! Stack cookie has been overwritten at ${ptrToString(max)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${ptrToString(cookie2)} ${ptrToString(cookie1)}`,
        );
      }
      // Also test the global address 0 for integrity.
      if (HEAPU32[(0 >>> 2) >>> 0] != 1668509029) {
        /* 'emsc' */ abort(
          'Runtime error: The application has corrupted its heap memory area (address zero)!',
        );
      }
    }

    // end include: runtime_stack_check.js
    // include: runtime_assertions.js
    // Endianness check
    (function () {
      const h16 = new Int16Array(1);
      const h8 = new Int8Array(h16.buffer);
      h16[0] = 25459;
      if (h8[0] !== 115 || h8[1] !== 99) {
        throw 'Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)';
      }
    })();

    // end include: runtime_assertions.js
    // @ts-ignore
    const __ATPRERUN__ = [];

    // functions called before the runtime is initialized
    // @ts-ignore
    const __ATINIT__ = [];

    // functions called during startup
    // @ts-ignore
    const __ATEXIT__ = [];

    // functions called during shutdown
    // @ts-ignore
    const __ATPOSTRUN__ = [];

    // functions called after the main() is called
    let runtimeInitialized = false;

    function preRun() {
      // @ts-ignore
      if (Module.preRun) {
        // @ts-ignore
        if (typeof Module.preRun == 'function') {
          // @ts-ignore
          Module.preRun = [Module.preRun];
        }
        // @ts-ignore
        while (Module.preRun.length) {
          // @ts-ignore
          addOnPreRun(Module.preRun.shift());
        }
      }
      // @ts-ignore
      callRuntimeCallbacks(__ATPRERUN__);
    }

    function initRuntime() {
      dbg('initRuntime');
      assert(!runtimeInitialized);
      runtimeInitialized = true;
      checkStackCookie();
      // @ts-ignore
      if (!Module.noFSInit && !FS.init.initialized) {
        FS.init();
      }
      FS.ignorePermissions = false;
      TTY.init();
      // @ts-ignore
      callRuntimeCallbacks(__ATINIT__);
    }

    function postRun() {
      checkStackCookie();
      // @ts-ignore
      if (Module.postRun) {
        // @ts-ignore
        if (typeof Module.postRun == 'function') {
          // @ts-ignore
          Module.postRun = [Module.postRun];
        }
        // @ts-ignore
        while (Module.postRun.length) {
          // @ts-ignore
          addOnPostRun(Module.postRun.shift());
        }
      }
      // @ts-ignore
      callRuntimeCallbacks(__ATPOSTRUN__);
    }

    // @ts-ignore
    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }

    // @ts-ignore
    function addOnInit(cb) {
      __ATINIT__.unshift(cb);
    }

    // @ts-ignore
    function addOnExit(cb) {}

    // @ts-ignore
    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    }

    // include: runtime_math.js
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
    assert(
      Math.imul,
      'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill',
    );

    assert(
      Math.fround,
      'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill',
    );

    assert(
      Math.clz32,
      'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill',
    );

    assert(
      Math.trunc,
      'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill',
    );

    // end include: runtime_math.js
    // A counter of dependencies for calling run(). If we need to
    // do asynchronous work before running, increment this and
    // decrement it. Incrementing must happen in a place like
    // Module.preRun (used by emcc to add file preloading).
    // Note that you can add dependencies in preRun, even though
    // it happens right before run - run will be postponed until
    // the dependencies are met.
    let runDependencies = 0;

    // @ts-ignore
    let runDependencyWatcher = null;

    // @ts-ignore
    let dependenciesFulfilled = null;

    // overridden to take different actions when all run dependencies are fulfilled
    const runDependencyTracking = {};

    // @ts-ignore
    function getUniqueRunDependency(id) {
      const orig = id;
      while (1) {
        // @ts-ignore
        if (!runDependencyTracking[id]) {
          return id;
        }
        id = orig + Math.random();
      }
    }

    // @ts-ignore
    function addRunDependency(id) {
      runDependencies++;
      // @ts-ignore
      Module.monitorRunDependencies?.(runDependencies);
      if (id) {
        // @ts-ignore
        assert(!runDependencyTracking[id]);
        // @ts-ignore
        runDependencyTracking[id] = 1;
        // @ts-ignore
        if (
          runDependencyWatcher === null &&
          typeof setInterval != 'undefined'
        ) {
          // Check for missing dependencies every few seconds
          runDependencyWatcher = setInterval(() => {
            if (ABORT) {
              // @ts-ignore
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
              return;
            }
            let shown = false;
            for (const dep in runDependencyTracking) {
              if (!shown) {
                shown = true;
                err('still waiting on run dependencies:');
              }
              err(`dependency: ${dep}`);
            }
            if (shown) {
              err('(end of list)');
            }
          }, 1e4);
        }
      } else {
        err('warning: run dependency added without ID');
      }
    }

    // @ts-ignore
    function removeRunDependency(id) {
      runDependencies--;
      // @ts-ignore
      Module.monitorRunDependencies?.(runDependencies);
      if (id) {
        // @ts-ignore
        assert(runDependencyTracking[id]);
        // @ts-ignore
        delete runDependencyTracking[id];
      } else {
        err('warning: run dependency removed without ID');
      }
      if (runDependencies == 0) {
        // @ts-ignore
        if (runDependencyWatcher !== null) {
          // @ts-ignore
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
        }
        // @ts-ignore
        if (dependenciesFulfilled) {
          const callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback();
        }
      }
    }

    /** @param {string|number=} what */ function abort(what) {
      // @ts-ignore
      Module.onAbort?.(what);
      what = `Aborted(${what})`;
      // TODO(sbc): Should we remove printing and leave it up to whoever
      // catches the exception?
      err(what);
      ABORT = true;
      EXITSTATUS = 1;
      // Use a wasm runtime error, because a JS error might be seen as a foreign
      // exception, which means we'd run destructors on it. We need the error to
      // simply make the program stop.
      // FIXME This approach does not work in Wasm EH because it currently does not assume
      // all RuntimeErrors are from traps; it decides whether a RuntimeError is from
      // a trap or not based on a hidden field within the object. So at the moment
      // we don't have a way of throwing a wasm trap from JS. TODO Make a JS API that
      // allows this in the wasm spec.
      // Suppress closure compiler warning here. Closure compiler's builtin extern
      // definition for WebAssembly.RuntimeError claims it takes no arguments even
      // though it can.
      // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure gets fixed.
      /** @suppress {checkTypes} */ const e = new WebAssembly.RuntimeError(
        what,
      );
      // @ts-ignore
      readyPromiseReject(e);
      // Throw the error whether or not MODULARIZE is set because abort is used
      // in code paths apart from instantiation where an exception is expected
      // to be thrown when abort is called.
      throw e;
    }

    // include: memoryprofiler.js
    // end include: memoryprofiler.js
    // include: URIUtils.js
    // Prefix of data URIs emitted by SINGLE_FILE and related options.
    const dataURIPrefix = 'data:application/octet-stream;base64,';

    /**
     * Indicates whether filename is a base64 data URI.
     * @noinline
     */ const isDataURI =
      // @ts-ignore
      filename => filename.startsWith(dataURIPrefix);

    /**
     * Indicates whether filename is delivered via file protocol (as opposed to http/https)
     * @noinline
     */ var isFileURI =
      // @ts-ignore
      filename => filename.startsWith('file://');

    // end include: URIUtils.js
    // @ts-ignore
    function createExportWrapper(name, nargs) {
      // @ts-ignore
      return (...args) => {
        assert(
          runtimeInitialized,
          `native function \`${name}\` called before runtime initialization`,
        );
        const f = wasmExports[name];
        assert(f, `exported native function \`${name}\` not found`);
        // Only assert for too many arguments. Too few can be valid since the missing arguments will be zero filled.
        assert(
          args.length <= nargs,
          `native function \`${name}\` called with ${args.length} args but expects ${nargs}`,
        );
        return f(...args);
      };
    }

    // include: runtime_exceptions.js
    // Base Emscripten EH error class
    class EmscriptenEH extends Error {}

    // @ts-ignore
    class EmscriptenSjLj extends EmscriptenEH {}

    // @ts-ignore
    class CppException extends EmscriptenEH {
      // @ts-ignore
      constructor(excPtr) {
        super(excPtr);
        this.excPtr = excPtr;
        const excInfo = getExceptionMessage(excPtr);
        this.name = excInfo[0];
        this.message = excInfo[1];
      }
    }

    // end include: runtime_exceptions.js
    function findWasmBinary() {
      const f = 'openfhe.wasm';
      if (!isDataURI(f)) {
        return locateFile(f);
      }
      return f;
    }

    // @ts-ignore
    let wasmBinaryFile;

    // @ts-ignore
    function getBinarySync(file) {
      // @ts-ignore
      if (file == wasmBinaryFile && wasmBinary) {
        return new Uint8Array(wasmBinary);
      }
      // @ts-ignore
      if (readBinary) {
        return readBinary(file);
      }
      throw 'both async and sync fetching of the wasm failed';
    }

    // @ts-ignore
    function getBinaryPromise(binaryFile) {
      // If we don't have the binary yet, load it asynchronously using readAsync.
      // @ts-ignore
      if (!wasmBinary) {
        // Fetch the binary using readAsync
        // @ts-ignore
        return readAsync(binaryFile).then(
          response => new Uint8Array(/** @type{!ArrayBuffer} */ (response)), // Fall back to getBinarySync if readAsync fails
          () => getBinarySync(binaryFile),
        );
      }
      // Otherwise, getBinarySync should be able to get it synchronously
      return Promise.resolve().then(() => getBinarySync(binaryFile));
    }

    // @ts-ignore
    function instantiateArrayBuffer(binaryFile, imports, receiver) {
      // @ts-ignore
      return getBinaryPromise(binaryFile)
        .then(binary => WebAssembly.instantiate(binary, imports))
        .then(receiver, (reason) => {
          err(`failed to asynchronously prepare wasm: ${reason}`);
          // Warn on some common problems.
          // @ts-ignore
          if (isFileURI(wasmBinaryFile)) {
            // @ts-ignore
            err(
              `warning: Loading from a file URI (${wasmBinaryFile}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`,
            );
          }
          abort(reason);
        });
    }

    // @ts-ignore
    function instantiateAsync(binary, binaryFile, imports, callback) {
      if (
        !binary &&
        typeof WebAssembly.instantiateStreaming == 'function' &&
        !isDataURI(binaryFile) && // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
        !isFileURI(binaryFile) && // Avoid instantiateStreaming() on Node.js environment for now, as while
        // Node.js v18.1.0 implements it, it does not have a full fetch()
        // implementation yet.
        // Reference:
        //   https://github.com/emscripten-core/emscripten/pull/16917
        !ENVIRONMENT_IS_NODE &&
        typeof fetch == 'function'
      ) {
        return fetch(binaryFile, {
          credentials: 'same-origin',
        }).then((response) => {
          // Suppress closure warning here since the upstream definition for
          // instantiateStreaming only allows Promise<Repsponse> rather than
          // an actual Response.
          // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure is fixed.
          /** @suppress {checkTypes} */ const result =
            WebAssembly.instantiateStreaming(response, imports);
          return result.then(callback, (reason) => {
            // We expect the most common failure cause to be a bad MIME type for the binary,
            // in which case falling back to ArrayBuffer instantiation should work.
            err(`wasm streaming compile failed: ${reason}`);
            err('falling back to ArrayBuffer instantiation');
            return instantiateArrayBuffer(binaryFile, imports, callback);
          });
        });
      }
      return instantiateArrayBuffer(binaryFile, imports, callback);
    }

    function getWasmImports() {
      // prepare imports
      return {
        env: wasmImports,
        wasi_snapshot_preview1: wasmImports,
      };
    }

    // Create the wasm instance.
    // Receives the wasm imports, returns the exports.
    function createWasm() {
      const info = getWasmImports();
      // Load the wasm module and create an instance of using native support in the JS engine.
      // handle a generated wasm instance, receiving its exports and
      // performing other necessary setup
      // @ts-ignore
      /** @param {WebAssembly.Module=} module */ function receiveInstance(
        instance,
        module,
      ) {
        wasmExports = instance.exports;
        wasmExports = applySignatureConversions(wasmExports);
        wasmMemory = wasmExports.memory;
        assert(wasmMemory, 'memory not found in wasm exports');
        updateMemoryViews();
        wasmTable = wasmExports.__indirect_function_table;
        assert(wasmTable, 'table not found in wasm exports');
        addOnInit(wasmExports.__wasm_call_ctors);
        removeRunDependency('wasm-instantiate');
        return wasmExports;
      }
      // wait for the pthread pool (if any)
      addRunDependency('wasm-instantiate');
      // Prefer streaming instantiation if available.
      // Async compilation can be confusing when an error on the page overwrites Module
      // (for example, if the order of elements is wrong, and the one defining Module is
      // later), so we save Module and check it later.
      let trueModule = Module;
      // @ts-ignore
      function receiveInstantiationResult(result) {
        // 'result' is a ResultObject object which has both the module and instance.
        // receiveInstance() will swap in the exports (to Module.asm) so they can be called
        assert(
          Module === trueModule,
          'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?',
        );
        // @ts-ignore
        trueModule = null;
        // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
        // When the regression is fixed, can restore the above PTHREADS-enabled path.
        receiveInstance(result.instance);
      }
      // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
      // to manually instantiate the Wasm module themselves. This allows pages to
      // run the instantiation parallel to any other async startup actions they are
      // performing.
      // Also pthreads and wasm workers initialize the wasm instance through this
      // path.
      // @ts-ignore
      if (Module.instantiateWasm) {
        try {
          // @ts-ignore
          return Module.instantiateWasm(info, receiveInstance);
        } catch (e) {
          err(`Module.instantiateWasm callback failed with error: ${e}`);
          // If instantiation fails, reject the module ready promise.
          // @ts-ignore
          readyPromiseReject(e);
        }
      }
      // @ts-ignore
      if (!wasmBinaryFile) {
        wasmBinaryFile = findWasmBinary();
      }
      dbg('asynchronously preparing wasm');
      // If instantiation fails, reject the module ready promise.
      // @ts-ignore
      instantiateAsync(
        wasmBinary,
        wasmBinaryFile,
        info,
        receiveInstantiationResult,
      ).catch(readyPromiseReject);
      return {};
    }

    // include: runtime_debug.js
    // @ts-ignore
    function legacyModuleProp(prop, newName, incoming = true) {
      if (!Object.getOwnPropertyDescriptor(Module, prop)) {
        Object.defineProperty(Module, prop, {
          configurable: true,
          get() {
            const extra = incoming
              ? ' (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)'
              : '';
            abort(
              `\`Module.${prop}\` has been replaced by \`${newName}\`${extra}`,
            );
          },
        });
      }
    }

    // @ts-ignore
    function ignoredModuleProp(prop) {
      if (Object.getOwnPropertyDescriptor(Module, prop)) {
        abort(
          `\`Module.${prop}\` was supplied but \`${prop}\` not included in INCOMING_MODULE_JS_API`,
        );
      }
    }

    // forcing the filesystem exports a few things by default
    // @ts-ignore
    function isExportedByForceFilesystem(name) {
      return (
        name === 'FS_createPath' ||
        name === 'FS_createDataFile' ||
        name === 'FS_createPreloadedFile' ||
        name === 'FS_unlink' ||
        name === 'addRunDependency' || // The old FS has some functionality that WasmFS lacks.
        name === 'FS_createLazyFile' ||
        name === 'FS_createDevice' ||
        name === 'removeRunDependency'
      );
    }

    // @ts-ignore
    function missingGlobal(sym, msg) {
      if (typeof globalThis != 'undefined') {
        Object.defineProperty(globalThis, sym, {
          configurable: true,
          get() {
            warnOnce(`\`${sym}\` is not longer defined by emscripten. ${msg}`);
            return undefined;
          },
        });
      }
    }

    missingGlobal('buffer', 'Please use HEAP8.buffer or wasmMemory.buffer');

    missingGlobal('asm', 'Please use wasmExports instead');

    // @ts-ignore
    function missingLibrarySymbol(sym) {
      if (
        typeof globalThis != 'undefined' &&
        !Object.getOwnPropertyDescriptor(globalThis, sym)
      ) {
        Object.defineProperty(globalThis, sym, {
          configurable: true,
          get() {
            // Can't `abort()` here because it would break code that does runtime
            // checks.  e.g. `if (typeof SDL === 'undefined')`.
            let msg = `\`${sym}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`;
            // DEFAULT_LIBRARY_FUNCS_TO_INCLUDE requires the name as it appears in
            // library.js, which means $name for a JS name with no prefix, or name
            // for a JS name like _name.
            let librarySymbol = sym;
            if (!librarySymbol.startsWith('_')) {
              librarySymbol = `$${sym}`;
            }
            msg += ` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${librarySymbol}')`;
            if (isExportedByForceFilesystem(sym)) {
              msg +=
                '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you';
            }
            warnOnce(msg);
            return undefined;
          },
        });
      }
      // Any symbol that is not included from the JS library is also (by definition)
      // not exported on the Module object.
      unexportedRuntimeSymbol(sym);
    }

    // @ts-ignore
    function unexportedRuntimeSymbol(sym) {
      if (!Object.getOwnPropertyDescriptor(Module, sym)) {
        Object.defineProperty(Module, sym, {
          configurable: true,
          get() {
            let msg = `'${sym}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
            if (isExportedByForceFilesystem(sym)) {
              msg +=
                '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you';
            }
            abort(msg);
          },
        });
      }
    }

    // @ts-ignore
    const runtimeDebug = true;

    // Switch to false at runtime to disable logging at the right times
    // @ts-ignore
    const printObjectList = [];

    // @ts-ignore
    function prettyPrint(arg) {
      if (typeof arg == 'undefined') {
        return '!UNDEFINED!';
      }
      if (typeof arg == 'boolean') {
        // @ts-ignore
        arg = arg + 0;
      }
      if (!arg) {
        return arg;
      }
      // @ts-ignore
      const index = printObjectList.indexOf(arg);
      if (index >= 0) {
        return `<${arg}|${index}>`;
      }
      if (arg.toString() == '[object HTMLImageElement]') {
        return `${arg}\n\n`;
      }
      if (arg.byteLength) {
        return `{${Array.prototype.slice.call(arg, 0, Math.min(arg.length, 400))}}`;
      }
      if (typeof arg == 'function') {
        return '<function>';
      } else if (typeof arg == 'object') {
        printObjectList.push(arg);
        return `<${arg}|${printObjectList.length - 1}>`;
      } else if (typeof arg == 'number') {
        if (arg > 0) {
          return `${ptrToString(arg)} (${arg})`;
        }
      }
      return arg;
    }

    // Used by XXXXX_DEBUG settings to output debug messages.
    // @ts-ignore
    function dbg(...args) {
      // TODO(sbc): Make this configurable somehow.  Its not always convenient for
      // logging to show up as warnings.
      console.warn(...args);
    }

    // end include: runtime_debug.js
    // === Body ===
    // end include: preamble.js
    // @ts-ignore
    /** @constructor */ function ExitStatus(status) {
      this.name = 'ExitStatus';
      this.message = `Program terminated with exit(${status})`;
      this.status = status;
    }

    // @ts-ignore
    var callRuntimeCallbacks = (callbacks) => {
      while (callbacks.length > 0) {
        // Pass the module as the first argument.
        callbacks.shift()(Module);
      }
    };

    /**
     * @param {number} ptr
     * @param {string} type
     */ function // @ts-ignore
    getValue(ptr, type = 'i8') {
      if (type.endsWith('*')) {
        type = '*';
      }
      switch (type) {
        case 'i1':
          return HEAP8[ptr >>> 0];

        case 'i8':
          return HEAP8[ptr >>> 0];

        case 'i16':
          return HEAP16[(ptr >>> 1) >>> 0];

        case 'i32':
          return HEAP32[(ptr >>> 2) >>> 0];

        case 'i64':
          // @ts-ignore
          return HEAP64[ptr >>> 3];

        case 'float':
          return HEAPF32[(ptr >>> 2) >>> 0];

        case 'double':
          return HEAPF64[(ptr >>> 3) >>> 0];

        case '*':
          return HEAPU32[(ptr >>> 2) >>> 0];

        default:
          abort(`invalid type for getValue: ${type}`);
      }
    }

    // @ts-ignore
    const noExitRuntime = Module.noExitRuntime || true;

    // @ts-ignore
    var ptrToString = (ptr) => {
      assert(typeof ptr === 'number');
      return `0x${ptr.toString(16).padStart(8, '0')}`;
    };

    /**
     * @param {number} ptr
     * @param {number} value
     * @param {string} type
     */ function // @ts-ignore
    setValue(ptr, value, type = 'i8') {
      if (type.endsWith('*')) {
        type = '*';
      }
      switch (type) {
        case 'i1':
          HEAP8[ptr >>> 0] = value;
          break;

        case 'i8':
          HEAP8[ptr >>> 0] = value;
          break;

        case 'i16':
          HEAP16[(ptr >>> 1) >>> 0] = value;
          break;

        case 'i32':
          HEAP32[(ptr >>> 2) >>> 0] = value;
          break;

        case 'i64':
          HEAP64[ptr >>> 3] = BigInt(value);
          break;

        case 'float':
          HEAPF32[(ptr >>> 2) >>> 0] = value;
          break;

        case 'double':
          HEAPF64[(ptr >>> 3) >>> 0] = value;
          break;

        case '*':
          HEAPU32[(ptr >>> 2) >>> 0] = value;
          break;

        default:
          abort(`invalid type for setValue: ${type}`);
      }
    }

    // @ts-ignore
    const stackRestore = val => __emscripten_stack_restore(val);

    const stackSave = () => _emscripten_stack_get_current();

    // @ts-ignore
    var warnOnce = (text) => {
      // @ts-ignore
      warnOnce.shown ||= {};
      // @ts-ignore
      if (!warnOnce.shown[text]) {
        // @ts-ignore
        warnOnce.shown[text] = 1;
        if (ENVIRONMENT_IS_NODE) {
          text = `warning: ${text}`;
        }
        err(text);
      }
    };

    const INT53_MAX = 9007199254740992;

    const INT53_MIN = -9007199254740992;

    // @ts-ignore
    const bigintToI53Checked = num =>
      num < INT53_MIN || num > INT53_MAX ? Number.NaN : Number(num);

    const UTF8Decoder =
      typeof TextDecoder != 'undefined' ? new TextDecoder() : undefined;

    /**
     * Given a pointer 'idx' to a null-terminated UTF8-encoded string in the given
     * array that contains uint8 values, returns a copy of that string as a
     * Javascript String object.
     * heapOrArray is either a regular array, or a JavaScript typed array view.
     * @param {number} idx
     * @param {number=} maxBytesToRead
     * @return {string}
     */ const UTF8ArrayToString = (
      // @ts-ignore
      heapOrArray,
      idx,
      maxBytesToRead,
    ) => {
      idx >>>= 0;
      // @ts-ignore
      const endIdx = idx + maxBytesToRead;
      let endPtr = idx;
      // TextDecoder needs to know the byte length in advance, it doesn't stop on
      // null terminator by itself.  Also, use the length info to avoid running tiny
      // strings through TextDecoder, since .subarray() allocates garbage.
      // (As a tiny code save trick, compare endPtr against endIdx using a negation,
      // so that undefined means Infinity)
      while (heapOrArray[endPtr] && !(endPtr >= endIdx)) {
        ++endPtr;
      }
      if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
      }
      let str = '';
      // If building with TextDecoder, we have already computed the string length
      // above, so test loop end condition against that
      while (idx < endPtr) {
        // For UTF8 byte structure, see:
        // http://en.wikipedia.org/wiki/UTF-8#Description
        // https://www.ietf.org/rfc/rfc2279.txt
        // https://tools.ietf.org/html/rfc3629
        let u0 = heapOrArray[idx++];
        if (!(u0 & 128)) {
          str += String.fromCharCode(u0);
          continue;
        }
        const u1 = heapOrArray[idx++] & 63;
        if ((u0 & 224) == 192) {
          str += String.fromCharCode(((u0 & 31) << 6) | u1);
          continue;
        }
        const u2 = heapOrArray[idx++] & 63;
        if ((u0 & 240) == 224) {
          u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
        } else {
          if ((u0 & 248) != 240) {
            warnOnce(
              `Invalid UTF-8 leading byte ${ptrToString(u0)} encountered when deserializing a UTF-8 string in wasm memory to a JS string!`,
            );
          }
          u0 =
            ((u0 & 7) << 18) |
            (u1 << 12) |
            (u2 << 6) |
            (heapOrArray[idx++] & 63);
        }
        if (u0 < 65536) {
          str += String.fromCharCode(u0);
        } else {
          const ch = u0 - 65536;
          str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
        }
      }
      return str;
    };

    /**
     * Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the
     * emscripten HEAP, returns a copy of that string as a Javascript String object.
     *
     * @param {number} ptr
     * @param {number=} maxBytesToRead - An optional length that specifies the
     *   maximum number of bytes to read. You can omit this parameter to scan the
     *   string until the first 0 byte. If maxBytesToRead is passed, and the string
     *   at [ptr, ptr+maxBytesToReadr[ contains a null byte in the middle, then the
     *   string will cut short at that byte index (i.e. maxBytesToRead will not
     *   produce a string of exact length [ptr, ptr+maxBytesToRead[) N.B. mixing
     *   frequent uses of UTF8ToString() with and without maxBytesToRead may throw
     *   JS JIT optimizations off, so it is worth to consider consistently using one
     * @return {string}
     */ const UTF8ToString = (ptr, maxBytesToRead) => {
      assert(
        typeof ptr == 'number',
        `UTF8ToString expects a number (got ${typeof ptr})`,
      );
      ptr >>>= 0;
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
    };

    // @ts-ignore
    function ___assert_fail(condition, filename, line, func) {
      condition >>>= 0;
      filename >>>= 0;
      func >>>= 0;
      abort(
        `Assertion failed: ${UTF8ToString(condition)}, at: ${[filename ? UTF8ToString(filename) : 'unknown filename', line, func ? UTF8ToString(func) : 'unknown function']}`,
      );
    }

    // @ts-ignore
    const exceptionCaught = [];

    let uncaughtExceptionCount = 0;

    // @ts-ignore
    function ___cxa_begin_catch(ptr) {
      ptr >>>= 0;
      const info = new ExceptionInfo(ptr);
      if (!info.get_caught()) {
        info.set_caught(true);
        uncaughtExceptionCount--;
      }
      info.set_rethrown(false);
      exceptionCaught.push(info);
      // @ts-ignore
      dbg(`__cxa_begin_catch ${[ptrToString(ptr), 'stack', exceptionCaught]}`);
      ___cxa_increment_exception_refcount(info.excPtr);
      return info.get_exception_ptr();
    }

    let exceptionLast = 0;

    const ___cxa_end_catch = () => {
      // Clear state flag.
      _setThrew(0, 0);
      assert(exceptionCaught.length > 0);
      // Call destructor if one is registered then clear it.
      // @ts-ignore
      const info = exceptionCaught.pop();
      // @ts-ignore
      dbg(
        `__cxa_end_catch popped ${[info, exceptionLast, 'stack', exceptionCaught]}`,
      );
      ___cxa_decrement_exception_refcount(info.excPtr);
      exceptionLast = 0;
    };

    // XXX in decRef?
    class ExceptionInfo {
      // excPtr - Thrown object pointer to wrap. Metadata pointer is calculated from it.
      // @ts-ignore
      constructor(excPtr) {
        this.excPtr = excPtr;
        this.ptr = excPtr - 24;
      }

      // @ts-ignore
      set_type(type) {
        HEAPU32[((this.ptr + 4) >>> 2) >>> 0] = type;
      }

      get_type() {
        return HEAPU32[((this.ptr + 4) >>> 2) >>> 0];
      }

      // @ts-ignore
      set_destructor(destructor) {
        HEAPU32[((this.ptr + 8) >>> 2) >>> 0] = destructor;
      }

      get_destructor() {
        return HEAPU32[((this.ptr + 8) >>> 2) >>> 0];
      }

      // @ts-ignore
      set_caught(caught) {
        caught = caught ? 1 : 0;
        HEAP8[(this.ptr + 12) >>> 0] = caught;
      }

      get_caught() {
        return HEAP8[(this.ptr + 12) >>> 0] != 0;
      }

      // @ts-ignore
      set_rethrown(rethrown) {
        rethrown = rethrown ? 1 : 0;
        HEAP8[(this.ptr + 13) >>> 0] = rethrown;
      }

      get_rethrown() {
        return HEAP8[(this.ptr + 13) >>> 0] != 0;
      }

      // Initialize native structure fields. Should be called once after allocated.
      // @ts-ignore
      init(type, destructor) {
        dbg(`ExceptionInfo init: ${[type, destructor]}`);
        this.set_adjusted_ptr(0);
        this.set_type(type);
        this.set_destructor(destructor);
      }

      // @ts-ignore
      set_adjusted_ptr(adjustedPtr) {
        HEAPU32[((this.ptr + 16) >>> 2) >>> 0] = adjustedPtr;
      }

      get_adjusted_ptr() {
        return HEAPU32[((this.ptr + 16) >>> 2) >>> 0];
      }

      // Get pointer which is expected to be received by catch clause in C++ code. It may be adjusted
      // when the pointer is casted to some of the exception object base classes (e.g. when virtual
      // inheritance is used). When a pointer is thrown this method should return the thrown pointer
      // itself.
      get_exception_ptr() {
        // Work around a fastcomp bug, this code is still included for some reason in a build without
        // exceptions support.
        const isPointer = ___cxa_is_pointer_type(this.get_type());
        if (isPointer) {
          return HEAPU32[(this.excPtr >>> 2) >>> 0];
        }
        const adjusted = this.get_adjusted_ptr();
        if (adjusted !== 0) {
          return adjusted;
        }
        return this.excPtr;
      }
    }

    // @ts-ignore
    function ___resumeException(ptr) {
      ptr >>>= 0;
      dbg(`__resumeException ${[ptrToString(ptr), exceptionLast]}`);
      if (!exceptionLast) {
        // @ts-ignore
        exceptionLast = new CppException(ptr);
      }
      throw exceptionLast;
    }

    // @ts-ignore
    const setTempRet0 = val => __emscripten_tempret_set(val);

    // @ts-ignore
    const findMatchingCatch = (args) => {
      // @ts-ignore
      const thrown = exceptionLast?.excPtr;
      if (!thrown) {
        // just pass through the null ptr
        setTempRet0(0);
        return 0;
      }
      const info = new ExceptionInfo(thrown);
      info.set_adjusted_ptr(thrown);
      const thrownType = info.get_type();
      if (!thrownType) {
        // just pass through the thrown ptr
        setTempRet0(0);
        return thrown;
      }
      // can_catch receives a **, add indirection
      dbg(`findMatchingCatch on ${ptrToString(thrown)}`);
      // The different catch blocks are denoted by different types.
      // Due to inheritance, those types may not precisely match the
      // type of the thrown object. Find one which matches, and
      // return the type of the catch block which should be called.
      for (const caughtType of args) {
        if (caughtType === 0 || caughtType === thrownType) {
          // Catch all clause matched or exactly the same type is caught
          break;
        }
        const adjusted_ptr_addr = info.ptr + 16;
        if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
          dbg(
            `  findMatchingCatch found ${[ptrToString(info.get_adjusted_ptr()), caughtType]}`,
          );
          setTempRet0(caughtType);
          return thrown;
        }
      }
      setTempRet0(thrownType);
      return thrown;
    };

    function ___cxa_find_matching_catch_2() {
      return findMatchingCatch([]);
    }

    // @ts-ignore
    function ___cxa_find_matching_catch_3(arg0) {
      arg0 >>>= 0;
      return findMatchingCatch([arg0]);
    }

    const ___cxa_rethrow = () => {
      // @ts-ignore
      const info = exceptionCaught.pop();
      if (!info) {
        abort('no exception to throw');
      }
      const ptr = info.excPtr;
      if (!info.get_rethrown()) {
        // Only pop if the corresponding push was through rethrow_primary_exception
        exceptionCaught.push(info);
        info.set_rethrown(true);
        info.set_caught(false);
        uncaughtExceptionCount++;
      }
      // @ts-ignore
      dbg(
        `__cxa_rethrow, popped ${[ptrToString(ptr), exceptionLast, 'stack', exceptionCaught]}`,
      );
      // @ts-ignore
      exceptionLast = new CppException(ptr);
      throw exceptionLast;
    };

    // @ts-ignore
    function ___cxa_throw(ptr, type, destructor) {
      ptr >>>= 0;
      type >>>= 0;
      destructor >>>= 0;
      dbg(`__cxa_throw: ${[ptrToString(ptr), type, ptrToString(destructor)]}`);
      const info = new ExceptionInfo(ptr);
      // Initialize ExceptionInfo content after it was allocated in __cxa_allocate_exception.
      info.init(type, destructor);
      // @ts-ignore
      exceptionLast = new CppException(ptr);
      uncaughtExceptionCount++;
      throw exceptionLast;
    }

    const ___cxa_uncaught_exceptions = () => uncaughtExceptionCount;

    const __abort_js = () => {
      abort('native code called abort()');
    };

    // @ts-ignore
    const embindRepr = (v) => {
      if (v === null) {
        return 'null';
      }
      const t = typeof v;
      // @ts-ignore
      if (t === 'object' || t === 'array' || t === 'function') {
        return v.toString();
      } else {
        return `${v}`;
      }
    };

    const embind_init_charCodes = () => {
      const codes = Array.from({ length: 256 });
      for (let i = 0; i < 256; ++i) {
        codes[i] = String.fromCharCode(i);
      }
      embind_charCodes = codes;
    };

    // @ts-ignore
    let embind_charCodes;

    // @ts-ignore
    const readLatin1String = (ptr) => {
      let ret = '';
      let c = ptr;
      while (HEAPU8[c >>> 0]) {
        // @ts-ignore
        ret += embind_charCodes[HEAPU8[c++ >>> 0]];
      }
      return ret;
    };

    const awaitingDependencies = {};

    const registeredTypes = {};

    const typeDependencies = {};

    // @ts-ignore
    let BindingError;

    // @ts-ignore
    const throwBindingError = (message) => {
      // @ts-ignore
      throw new BindingError(message);
    };

    // @ts-ignore
    let InternalError;

    // @ts-ignore
    const throwInternalError = (message) => {
      // @ts-ignore
      throw new InternalError(message);
    };

    // @ts-ignore
    const whenDependentTypesAreResolved = (
      myTypes,
      dependentTypes,
      getTypeConverters,
    ) => {
      // @ts-ignore
      myTypes.forEach((type) => {
        // @ts-ignore
        typeDependencies[type] = dependentTypes;
      });
      // @ts-ignore
      function onComplete(typeConverters) {
        const myTypeConverters = getTypeConverters(typeConverters);
        if (myTypeConverters.length !== myTypes.length) {
          throwInternalError('Mismatched type converter count');
        }
        for (let i = 0; i < myTypes.length; ++i) {
          registerType(myTypes[i], myTypeConverters[i]);
        }
      }
      const typeConverters = Array.from({ length: dependentTypes.length });
      const unregisteredTypes = [];
      let registered = 0;
      // @ts-ignore
      dependentTypes.forEach((dt, i) => {
        if (registeredTypes.hasOwnProperty(dt)) {
          // @ts-ignore
          typeConverters[i] = registeredTypes[dt];
        } else {
          unregisteredTypes.push(dt);
          if (!awaitingDependencies.hasOwnProperty(dt)) {
            // @ts-ignore
            awaitingDependencies[dt] = [];
          }
          // @ts-ignore
          awaitingDependencies[dt].push(() => {
            // @ts-ignore
            typeConverters[i] = registeredTypes[dt];
            ++registered;
            if (registered === unregisteredTypes.length) {
              onComplete(typeConverters);
            }
          });
        }
      });
      if (unregisteredTypes.length === 0) {
        onComplete(typeConverters);
      }
    };

    // @ts-ignore
    /** @param {object=} options */ function sharedRegisterType(
      rawType,
      registeredInstance,
      options = {},
    ) {
      const name = registeredInstance.name;
      if (!rawType) {
        throwBindingError(
          `type "${name}" must have a positive integer typeid pointer`,
        );
      }
      if (registeredTypes.hasOwnProperty(rawType)) {
        // @ts-ignore
        if (options.ignoreDuplicateRegistrations) {
          return;
        } else {
          throwBindingError(`Cannot register type '${name}' twice`);
        }
      }
      // @ts-ignore
      registeredTypes[rawType] = registeredInstance;
      // @ts-ignore
      delete typeDependencies[rawType];
      if (awaitingDependencies.hasOwnProperty(rawType)) {
        // @ts-ignore
        const callbacks = awaitingDependencies[rawType];
        // @ts-ignore
        delete awaitingDependencies[rawType];
        // @ts-ignore
        callbacks.forEach(cb => cb());
      }
    }

    // @ts-ignore
    /** @param {object=} options */ function registerType(
      rawType,
      registeredInstance,
      options = {},
    ) {
      if (!('argPackAdvance' in registeredInstance)) {
        throw new TypeError(
          'registerType registeredInstance requires argPackAdvance',
        );
      }
      return sharedRegisterType(rawType, registeredInstance, options);
    }

    // @ts-ignore
    const integerReadValueFromPointer = (name, width, signed) => {
      // integers are quite common, so generate very specialized functions
      switch (width) {
        case 1:
          // @ts-ignore
          return signed
            ? pointer => HEAP8[pointer >>> 0]
            : pointer => HEAPU8[pointer >>> 0];

        case 2:
          // @ts-ignore
          return signed
            ? pointer => HEAP16[(pointer >>> 1) >>> 0]
            : pointer => HEAPU16[(pointer >>> 1) >>> 0];

        case 4:
          // @ts-ignore
          return signed
            ? pointer => HEAP32[(pointer >>> 2) >>> 0]
            : pointer => HEAPU32[(pointer >>> 2) >>> 0];

        case 8:
          // @ts-ignore
          return signed
            ? pointer => HEAP64[pointer >>> 3]
            : pointer => HEAPU64[pointer >>> 3];

        default:
          throw new TypeError(`invalid integer width (${width}): ${name}`);
      }
    };

    // @ts-ignore
    /** @suppress {globalThis} */ function __embind_register_bigint(
      primitiveType,
      name,
      size,
      minRange,
      maxRange,
    ) {
      primitiveType >>>= 0;
      name >>>= 0;
      size >>>= 0;
      name = readLatin1String(name);
      const isUnsignedType = name.includes('u');
      // maxRange comes through as -1 for uint64_t (see issue 13902). Work around that temporarily
      if (isUnsignedType) {
        // @ts-ignore
        maxRange = (1n << 64n) - 1n;
      }
      registerType(primitiveType, {
        name,
        // @ts-ignore
        fromWireType: value => value,
        // @ts-ignore
        toWireType(destructors, value) {
          if (typeof value != 'bigint' && typeof value != 'number') {
            throw new TypeError(
              `Cannot convert "${embindRepr(value)}" to ${this.name}`,
            );
          }
          if (typeof value == 'number') {
            value = BigInt(value);
          }
          if (value < minRange || value > maxRange) {
            throw new TypeError(
              `Passing a number "${embindRepr(value)}" from JS side to C/C++ side to an argument of type "${name}", which is outside the valid range [${minRange}, ${maxRange}]!`,
            );
          }
          return value;
        },
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: integerReadValueFromPointer(
          name,
          size,
          !isUnsignedType,
        ),
        destructorFunction: null,
      });
    }

    var GenericWireTypeSize = 8;

    // @ts-ignore
    /** @suppress {globalThis} */ function __embind_register_bool(
      rawType,
      name,
      trueValue,
      falseValue,
    ) {
      rawType >>>= 0;
      name >>>= 0;
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        // @ts-ignore
        fromWireType(wt) {
          // ambiguous emscripten ABI: sometimes return values are
          // true or false, and sometimes integers (0 or 1)
          return !!wt;
        },
        // @ts-ignore
        toWireType(destructors, o) {
          return o ? trueValue : falseValue;
        },
        argPackAdvance: GenericWireTypeSize,
        // @ts-ignore
        readValueFromPointer(pointer) {
          return this.fromWireType(HEAPU8[pointer >>> 0]);
        },
        destructorFunction: null,
      });
    }

    // @ts-ignore
    const shallowCopyInternalPointer = o => ({
      count: o.count,
      deleteScheduled: o.deleteScheduled,
      preservePointerOnDelete: o.preservePointerOnDelete,
      ptr: o.ptr,
      ptrType: o.ptrType,
      smartPtr: o.smartPtr,
      smartPtrType: o.smartPtrType,
    });

    // @ts-ignore
    const throwInstanceAlreadyDeleted = (obj) => {
      // @ts-ignore
      function getInstanceTypeName(handle) {
        return handle.$$.ptrType.registeredClass.name;
      }
      throwBindingError(`${getInstanceTypeName(obj)} instance already deleted`);
    };

    let finalizationRegistry = false;

    // @ts-ignore
    let detachFinalizer = (handle) => {};

    // @ts-ignore
    const runDestructor = ($$) => {
      if ($$.smartPtr) {
        $$.smartPtrType.rawDestructor($$.smartPtr);
      } else {
        $$.ptrType.registeredClass.rawDestructor($$.ptr);
      }
    };

    // @ts-ignore
    const releaseClassHandle = ($$) => {
      $$.count.value -= 1;
      const toDelete = $$.count.value === 0;
      if (toDelete) {
        runDestructor($$);
      }
    };

    // @ts-ignore
    const downcastPointer = (ptr, ptrClass, desiredClass) => {
      if (ptrClass === desiredClass) {
        return ptr;
      }
      if (undefined === desiredClass.baseClass) {
        return null;
      }
      // no conversion
      // @ts-ignore
      const rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
      if (rv === null) {
        return null;
      }
      return desiredClass.downcast(rv);
    };

    const registeredPointers = {};

    const getInheritedInstanceCount = () =>
      Object.keys(registeredInstances).length;

    const getLiveInheritedInstances = () => {
      const rv = [];
      for (const k in registeredInstances) {
        if (registeredInstances.hasOwnProperty(k)) {
          // @ts-ignore
          rv.push(registeredInstances[k]);
        }
      }
      return rv;
    };

    // @ts-ignore
    const deletionQueue = [];

    const flushPendingDeletes = () => {
      while (deletionQueue.length) {
        // @ts-ignore
        const obj = deletionQueue.pop();
        obj.$$.deleteScheduled = false;
        obj.delete();
      }
    };

    // @ts-ignore
    let delayFunction;

    // @ts-ignore
    const setDelayFunction = (fn) => {
      delayFunction = fn;
      if (deletionQueue.length && delayFunction) {
        delayFunction(flushPendingDeletes);
      }
    };

    const init_embind = () => {
      // @ts-ignore
      Module.getInheritedInstanceCount = getInheritedInstanceCount;
      // @ts-ignore
      Module.getLiveInheritedInstances = getLiveInheritedInstances;
      // @ts-ignore
      Module.flushPendingDeletes = flushPendingDeletes;
      // @ts-ignore
      Module.setDelayFunction = setDelayFunction;
    };

    var registeredInstances = {};

    // @ts-ignore
    const getBasestPointer = (class_, ptr) => {
      if (ptr === undefined) {
        throwBindingError('ptr should not be undefined');
      }
      while (class_.baseClass) {
        ptr = class_.upcast(ptr);
        class_ = class_.baseClass;
      }
      return ptr;
    };

    // @ts-ignore
    const getInheritedInstance = (class_, ptr) => {
      ptr = getBasestPointer(class_, ptr);
      // @ts-ignore
      return registeredInstances[ptr];
    };

    // @ts-ignore
    const makeClassHandle = (prototype, record) => {
      if (!record.ptrType || !record.ptr) {
        throwInternalError('makeClassHandle requires ptr and ptrType');
      }
      const hasSmartPtrType = !!record.smartPtrType;
      const hasSmartPtr = !!record.smartPtr;
      if (hasSmartPtrType !== hasSmartPtr) {
        throwInternalError('Both smartPtrType and smartPtr must be specified');
      }
      record.count = {
        value: 1,
      };
      return attachFinalizer(
        Object.create(prototype, {
          $$: {
            value: record,
            writable: true,
          },
        }),
      );
    };

    // @ts-ignore
    /** @suppress {globalThis} */ function RegisteredPointer_fromWireType(ptr) {
      // ptr is a raw pointer (or a raw smartpointer)
      // rawPointer is a maybe-null raw pointer
      // @ts-ignore
      const rawPointer = this.getPointee(ptr);
      if (!rawPointer) {
        // @ts-ignore
        this.destructor(ptr);
        return null;
      }
      // @ts-ignore
      const registeredInstance = getInheritedInstance(
        this.registeredClass,
        rawPointer,
      );
      if (undefined !== registeredInstance) {
        // JS object has been neutered, time to repopulate it
        if (registeredInstance.$$.count.value === 0) {
          registeredInstance.$$.ptr = rawPointer;
          registeredInstance.$$.smartPtr = ptr;
          return registeredInstance.clone();
        } else {
          // else, just increment reference count on existing object
          // it already has a reference to the smart pointer
          const rv = registeredInstance.clone();
          // @ts-ignore
          this.destructor(ptr);
          return rv;
        }
      }
      function makeDefaultHandle() {
        // @ts-ignore
        if (this.isSmartPointer) {
          // @ts-ignore
          return makeClassHandle(this.registeredClass.instancePrototype, {
            // @ts-ignore
            ptrType: this.pointeeType,
            ptr: rawPointer,
            // @ts-ignore
            smartPtrType: this,
            smartPtr: ptr,
          });
        } else {
          // @ts-ignore
          return makeClassHandle(this.registeredClass.instancePrototype, {
            // @ts-ignore
            ptrType: this,
            ptr,
          });
        }
      }
      // @ts-ignore
      const actualType = this.registeredClass.getActualType(rawPointer);
      // @ts-ignore
      const registeredPointerRecord = registeredPointers[actualType];
      if (!registeredPointerRecord) {
        // @ts-ignore
        return makeDefaultHandle.call(this);
      }
      let toType;
      // @ts-ignore
      if (this.isConst) {
        toType = registeredPointerRecord.constPointerType;
      } else {
        toType = registeredPointerRecord.pointerType;
      }
      // @ts-ignore
      const dp = downcastPointer(
        rawPointer,
        this.registeredClass,
        toType.registeredClass,
      );
      if (dp === null) {
        // @ts-ignore
        return makeDefaultHandle.call(this);
      }
      // @ts-ignore
      if (this.isSmartPointer) {
        return makeClassHandle(toType.registeredClass.instancePrototype, {
          ptrType: toType,
          ptr: dp,
          // @ts-ignore
          smartPtrType: this,
          smartPtr: ptr,
        });
      } else {
        return makeClassHandle(toType.registeredClass.instancePrototype, {
          ptrType: toType,
          ptr: dp,
        });
      }
    }

    // @ts-ignore
    var attachFinalizer = (handle) => {
      if (typeof FinalizationRegistry === 'undefined') {
        attachFinalizer = handle => handle;
        return handle;
      }
      // If the running environment has a FinalizationRegistry (see
      // https://github.com/tc39/proposal-weakrefs), then attach finalizers
      // for class handles.  We check for the presence of FinalizationRegistry
      // at run-time, not build-time.
      // @ts-ignore
      finalizationRegistry = new FinalizationRegistry((info) => {
        console.warn(info.leakWarning.stack.replace(/^Error: /, ''));
        releaseClassHandle(info.$$);
      });
      attachFinalizer = (handle) => {
        const $$ = handle.$$;
        const hasSmartPtr = !!$$.smartPtr;
        if (hasSmartPtr) {
          // We should not call the destructor on raw pointers in case other code expects the pointee to live
          const info = {
            $$,
          };
          // Create a warning as an Error instance in advance so that we can store
          // the current stacktrace and point to it when / if a leak is detected.
          // This is more useful than the empty stacktrace of `FinalizationRegistry`
          // callback.
          const cls = $$.ptrType.registeredClass;
          // @ts-ignore
          info.leakWarning = new Error(
            `Embind found a leaked C++ instance ${cls.name} <${ptrToString($$.ptr)}>.\n` +
            'We\'ll free it automatically in this case, but this functionality is not reliable across various environments.\n' +
            'Make sure to invoke .delete() manually once you\'re done with the instance instead.\n' +
            'Originally allocated',
          );
          // `.stack` will add "at ..." after this sentence
          if ('captureStackTrace' in Error) {
            // @ts-ignore
            Error.captureStackTrace(
              info.leakWarning,
              RegisteredPointer_fromWireType,
            );
          }
          // @ts-ignore
          finalizationRegistry.register(handle, info, handle);
        }
        return handle;
      };
      // @ts-ignore
      detachFinalizer = handle => finalizationRegistry.unregister(handle);
      return attachFinalizer(handle);
    };

    const init_ClassHandle = () => {
      Object.assign(ClassHandle.prototype, {
        // @ts-ignore
        isAliasOf(other) {
          if (!(this instanceof ClassHandle)) {
            return false;
          }
          if (!(other instanceof ClassHandle)) {
            return false;
          }
          // @ts-ignore
          let leftClass = this.$$.ptrType.registeredClass;
          // @ts-ignore
          let left = this.$$.ptr;
          // @ts-ignore
          other.$$ = /** @type {object} */ (other.$$);
          // @ts-ignore
          let rightClass = other.$$.ptrType.registeredClass;
          // @ts-ignore
          let right = other.$$.ptr;
          while (leftClass.baseClass) {
            left = leftClass.upcast(left);
            leftClass = leftClass.baseClass;
          }
          while (rightClass.baseClass) {
            right = rightClass.upcast(right);
            rightClass = rightClass.baseClass;
          }
          return leftClass === rightClass && left === right;
        },
        clone() {
          // @ts-ignore
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          // @ts-ignore
          if (this.$$.preservePointerOnDelete) {
            // @ts-ignore
            this.$$.count.value += 1;
            return this;
          } else {
            const clone = attachFinalizer(
              Object.create(Object.getPrototypeOf(this), {
                $$: {
                  // @ts-ignore
                  value: shallowCopyInternalPointer(this.$$),
                },
              }),
            );
            clone.$$.count.value += 1;
            clone.$$.deleteScheduled = false;
            return clone;
          }
        },
        delete() {
          // @ts-ignore
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          // @ts-ignore
          if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
            throwBindingError('Object already scheduled for deletion');
          }
          detachFinalizer(this);
          // @ts-ignore
          releaseClassHandle(this.$$);
          // @ts-ignore
          if (!this.$$.preservePointerOnDelete) {
            // @ts-ignore
            this.$$.smartPtr = undefined;
            // @ts-ignore
            this.$$.ptr = undefined;
          }
        },
        // @ts-ignore
        isDeleted() {
          // @ts-ignore
          return !this.$$.ptr;
        },
        deleteLater() {
          // @ts-ignore
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          // @ts-ignore
          if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
            throwBindingError('Object already scheduled for deletion');
          }
          deletionQueue.push(this);
          // @ts-ignore
          if (deletionQueue.length === 1 && delayFunction) {
            delayFunction(flushPendingDeletes);
          }
          // @ts-ignore
          this.$$.deleteScheduled = true;
          return this;
        },
      });
    };

    /** @constructor */ function ClassHandle() {}

    // @ts-ignore
    const createNamedFunction = (name, body) =>
      Object.defineProperty(body, 'name', {
        value: name,
      });

    // @ts-ignore
    const ensureOverloadTable = (proto, methodName, humanName) => {
      if (undefined === proto[methodName].overloadTable) {
        const prevFunc = proto[methodName];
        // Inject an overload resolver function that routes to the appropriate overload based on the number of arguments.
        // @ts-ignore
        proto[methodName] = function (...args) {
          // TODO This check can be removed in -O3 level "unsafe" optimizations.
          if (!proto[methodName].overloadTable.hasOwnProperty(args.length)) {
            throwBindingError(
              `Function '${humanName}' called with an invalid number of arguments (${args.length}) - expects one of (${proto[methodName].overloadTable})!`,
            );
          }
          return proto[methodName].overloadTable[args.length].apply(this, args);
        };
        // Move the previous function into the overload table.
        proto[methodName].overloadTable = [];
        proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
      }
    };

    // @ts-ignore
    /** @param {number=} numArguments */ const exposePublicSymbol = (
      name,
      value,
      numArguments,
    ) => {
      if (Module.hasOwnProperty(name)) {
        // @ts-ignore
        if (
          undefined === numArguments ||
          (undefined !== Module[name].overloadTable &&
            undefined !== Module[name].overloadTable[numArguments])
        ) {
          throwBindingError(`Cannot register public name '${name}' twice`);
        }
        // We are exposing a function with the same name as an existing function. Create an overload table and a function selector
        // that routes between the two.
        ensureOverloadTable(Module, name, name);
        // @ts-ignore
        if (Module.hasOwnProperty(numArguments)) {
          throwBindingError(
            `Cannot register multiple overloads of a function with the same number of arguments (${numArguments})!`,
          );
        }
        // Add the new function into the overload table.
        // @ts-ignore
        Module[name].overloadTable[numArguments] = value;
      } else {
        // @ts-ignore
        Module[name] = value;
        if (undefined !== numArguments) {
          // @ts-ignore
          Module[name].numArguments = numArguments;
        }
      }
    };

    const char_0 = 48;

    const char_9 = 57;

    // @ts-ignore
    const makeLegalFunctionName = (name) => {
      if (undefined === name) {
        return '_unknown';
      }
      name = name.replace(/\W/g, '$');
      const f = name.charCodeAt(0);
      if (f >= char_0 && f <= char_9) {
        return `_${name}`;
      }
      return name;
    };

    // @ts-ignore
    /** @constructor */ function RegisteredClass(
      name,
      constructor,
      instancePrototype,
      rawDestructor,
      baseClass,
      getActualType,
      upcast,
      downcast,
    ) {
      this.name = name;
      this.constructor = constructor;
      this.instancePrototype = instancePrototype;
      this.rawDestructor = rawDestructor;
      this.baseClass = baseClass;
      this.getActualType = getActualType;
      this.upcast = upcast;
      this.downcast = downcast;
      this.pureVirtualFunctions = [];
    }

    // @ts-ignore
    const upcastPointer = (ptr, ptrClass, desiredClass) => {
      while (ptrClass !== desiredClass) {
        if (!ptrClass.upcast) {
          throwBindingError(
            `Expected null or instance of ${desiredClass.name}, got an instance of ${ptrClass.name}`,
          );
        }
        ptr = ptrClass.upcast(ptr);
        ptrClass = ptrClass.baseClass;
      }
      return ptr;
    };

    // @ts-ignore
    /** @suppress {globalThis} */ function constNoSmartPtrRawPointerToWireType(
      destructors,
      handle,
    ) {
      if (handle === null) {
        // @ts-ignore
        if (this.isReference) {
          // @ts-ignore
          throwBindingError(`null is not a valid ${this.name}`);
        }
        return 0;
      }
      if (!handle.$$) {
        // @ts-ignore
        throwBindingError(
          `Cannot pass "${embindRepr(handle)}" as a ${this.name}`,
        );
      }
      if (!handle.$$.ptr) {
        // @ts-ignore
        throwBindingError(
          `Cannot pass deleted object as a pointer of type ${this.name}`,
        );
      }
      const handleClass = handle.$$.ptrType.registeredClass;
      // @ts-ignore
      const ptr = upcastPointer(
        handle.$$.ptr,
        handleClass,
        this.registeredClass,
      );
      return ptr;
    }

    // @ts-ignore
    /** @suppress {globalThis} */ function genericPointerToWireType(
      destructors,
      handle,
    ) {
      let ptr;
      if (handle === null) {
        // @ts-ignore
        if (this.isReference) {
          // @ts-ignore
          throwBindingError(`null is not a valid ${this.name}`);
        }
        // @ts-ignore
        if (this.isSmartPointer) {
          // @ts-ignore
          ptr = this.rawConstructor();
          if (destructors !== null) {
            // @ts-ignore
            destructors.push(this.rawDestructor, ptr);
          }
          return ptr;
        } else {
          return 0;
        }
      }
      if (!handle || !handle.$$) {
        // @ts-ignore
        throwBindingError(
          `Cannot pass "${embindRepr(handle)}" as a ${this.name}`,
        );
      }
      if (!handle.$$.ptr) {
        // @ts-ignore
        throwBindingError(
          `Cannot pass deleted object as a pointer of type ${this.name}`,
        );
      }
      // @ts-ignore
      if (!this.isConst && handle.$$.ptrType.isConst) {
        // @ts-ignore
        throwBindingError(
          `Cannot convert argument of type ${handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name} to parameter type ${this.name}`,
        );
      }
      const handleClass = handle.$$.ptrType.registeredClass;
      // @ts-ignore
      ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      // @ts-ignore
      if (this.isSmartPointer) {
        // TODO: this is not strictly true
        // We could support BY_EMVAL conversions from raw pointers to smart pointers
        // because the smart pointer can hold a reference to the handle
        if (undefined === handle.$$.smartPtr) {
          throwBindingError('Passing raw pointer to smart pointer is illegal');
        }
        // @ts-ignore
        switch (this.sharingPolicy) {
          case 0:
            // NONE
            // no upcasting
            // @ts-ignore
            if (handle.$$.smartPtrType === this) {
              ptr = handle.$$.smartPtr;
            } else {
              // @ts-ignore
              throwBindingError(
                `Cannot convert argument of type ${handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name} to parameter type ${this.name}`,
              );
            }
            break;

          case 1:
            // INTRUSIVE
            ptr = handle.$$.smartPtr;
            break;

          case 2:
            // BY_EMVAL
            // @ts-ignore
            if (handle.$$.smartPtrType === this) {
              ptr = handle.$$.smartPtr;
            } else {
              const clonedHandle = handle.clone();
              // @ts-ignore
              ptr = this.rawShare(
                ptr,
                Emval.toHandle(() => clonedHandle.delete()),
              );
              if (destructors !== null) {
                // @ts-ignore
                destructors.push(this.rawDestructor, ptr);
              }
            }
            break;

          default:
            throwBindingError('Unsupporting sharing policy');
        }
      }
      return ptr;
    }

    // @ts-ignore
    /** @suppress {globalThis} */ function nonConstNoSmartPtrRawPointerToWireType(
      destructors,
      handle,
    ) {
      if (handle === null) {
        // @ts-ignore
        if (this.isReference) {
          // @ts-ignore
          throwBindingError(`null is not a valid ${this.name}`);
        }
        return 0;
      }
      if (!handle.$$) {
        // @ts-ignore
        throwBindingError(
          `Cannot pass "${embindRepr(handle)}" as a ${this.name}`,
        );
      }
      if (!handle.$$.ptr) {
        // @ts-ignore
        throwBindingError(
          `Cannot pass deleted object as a pointer of type ${this.name}`,
        );
      }
      if (handle.$$.ptrType.isConst) {
        // @ts-ignore
        throwBindingError(
          `Cannot convert argument of type ${handle.$$.ptrType.name} to parameter type ${this.name}`,
        );
      }
      const handleClass = handle.$$.ptrType.registeredClass;
      // @ts-ignore
      const ptr = upcastPointer(
        handle.$$.ptr,
        handleClass,
        this.registeredClass,
      );
      return ptr;
    }

    // @ts-ignore
    /** @suppress {globalThis} */ function readPointer(pointer) {
      // @ts-ignore
      return this.fromWireType(HEAPU32[(pointer >>> 2) >>> 0]);
    }

    const init_RegisteredPointer = () => {
      Object.assign(RegisteredPointer.prototype, {
        // @ts-ignore
        getPointee(ptr) {
          // @ts-ignore
          if (this.rawGetPointee) {
            // @ts-ignore
            ptr = this.rawGetPointee(ptr);
          }
          return ptr;
        },
        // @ts-ignore
        destructor(ptr) {
          // @ts-ignore
          this.rawDestructor?.(ptr);
        },
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: readPointer,
        fromWireType: RegisteredPointer_fromWireType,
      });
    };

    /**
       @constructor
      @param {*=} pointeeType,
      @param {*=} sharingPolicy,
      @param {*=} rawGetPointee,
      @param {*=} rawConstructor,
      @param {*=} rawShare,
      @param {*=} rawDestructor,
     */ function RegisteredPointer(
      // @ts-ignore
      name,
      registeredClass,
      isReference,
      isConst, // smart pointer properties
      // @ts-ignore
      isSmartPointer,
      pointeeType,
      sharingPolicy,
      rawGetPointee,
      rawConstructor,
      rawShare,
      rawDestructor,
    ) {
      this.name = name;
      this.registeredClass = registeredClass;
      this.isReference = isReference;
      this.isConst = isConst;
      // smart pointer properties
      this.isSmartPointer = isSmartPointer;
      this.pointeeType = pointeeType;
      this.sharingPolicy = sharingPolicy;
      this.rawGetPointee = rawGetPointee;
      this.rawConstructor = rawConstructor;
      this.rawShare = rawShare;
      this.rawDestructor = rawDestructor;
      if (!isSmartPointer && registeredClass.baseClass === undefined) {
        if (isConst) {
          this.toWireType = constNoSmartPtrRawPointerToWireType;
          this.destructorFunction = null;
        } else {
          this.toWireType = nonConstNoSmartPtrRawPointerToWireType;
          this.destructorFunction = null;
        }
      } else {
        this.toWireType = genericPointerToWireType;
      }
    }

    // @ts-ignore
    /** @param {number=} numArguments */ const replacePublicSymbol = (
      name,
      value,
      numArguments,
    ) => {
      if (!Module.hasOwnProperty(name)) {
        throwInternalError('Replacing nonexistent public symbol');
      }
      // If there's an overload table for this symbol, replace the symbol in the overload table instead.
      // @ts-ignore
      if (
        undefined !== Module[name].overloadTable &&
        undefined !== numArguments
      ) {
        // @ts-ignore
        Module[name].overloadTable[numArguments] = value;
      } else {
        // @ts-ignore
        Module[name] = value;
        // @ts-ignore
        Module[name].argCount = numArguments;
      }
    };

    // @ts-ignore
    const wasmTableMirror = [];

    /** @type {WebAssembly.Table} */ let wasmTable;

    // @ts-ignore
    const getWasmTableEntry = (funcPtr) => {
      // @ts-ignore
      let func = wasmTableMirror[funcPtr];
      if (!func) {
        if (funcPtr >= wasmTableMirror.length) {
          wasmTableMirror.length = funcPtr + 1;
        }
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
      }
      assert(
        wasmTable.get(funcPtr) == func,
        'JavaScript-side Wasm function table mirror is out of date!',
      );
      return func;
    };

    // @ts-ignore
    const dynCall = (sig, ptr, args = []) => {
      assert(getWasmTableEntry(ptr), `missing table entry in dynCall: ${ptr}`);
      const rtn = getWasmTableEntry(ptr)(...args);
      return sig[0] == 'p' ? rtn >>> 0 : rtn;
    };

    // @ts-ignore
    const getDynCaller = (sig, ptr) => {
      assert(
        sig.includes('j') || sig.includes('p'),
        'getDynCaller should only be called with i64 sigs',
      );
      // @ts-ignore
      return (...args) => dynCall(sig, ptr, args);
    };

    // @ts-ignore
    const embind__requireFunction = (signature, rawFunction) => {
      signature = readLatin1String(signature);
      function makeDynCaller() {
        if (signature.includes('p')) {
          return getDynCaller(signature, rawFunction);
        }
        return getWasmTableEntry(rawFunction);
      }
      const fp = makeDynCaller();
      if (typeof fp != 'function') {
        throwBindingError(
          `unknown function pointer with signature ${signature}: ${rawFunction}`,
        );
      }
      return fp;
    };

    // @ts-ignore
    const extendError = (baseErrorType, errorName) => {
      // @ts-ignore
      const errorClass = createNamedFunction(errorName, function (message) {
        this.name = errorName;
        this.message = message;
        const stack = new Error(message).stack;
        if (stack !== undefined) {
          this.stack = `${this.toString()}\n${stack.replace(/^Error(:[^\n]*)?\n/, '')}`;
        }
      });
      errorClass.prototype = Object.create(baseErrorType.prototype);
      errorClass.prototype.constructor = errorClass;
      errorClass.prototype.toString = function () {
        if (this.message === undefined) {
          return this.name;
        } else {
          return `${this.name}: ${this.message}`;
        }
      };
      return errorClass;
    };

    // @ts-ignore
    let UnboundTypeError;

    // @ts-ignore
    const getTypeName = (type) => {
      const ptr = ___getTypeName(type);
      const rv = readLatin1String(ptr);
      _free(ptr);
      return rv;
    };

    // @ts-ignore
    const throwUnboundTypeError = (message, types) => {
      // @ts-ignore
      const unboundTypes = [];
      const seen = {};
      // @ts-ignore
      function visit(type) {
        // @ts-ignore
        if (seen[type]) {
          return;
        }
        // @ts-ignore
        if (registeredTypes[type]) {
          return;
        }
        // @ts-ignore
        if (typeDependencies[type]) {
          // @ts-ignore
          typeDependencies[type].forEach(visit);
          return;
        }
        unboundTypes.push(type);
        // @ts-ignore
        seen[type] = true;
      }
      types.forEach(visit);
      // @ts-ignore
      throw new UnboundTypeError(
        `${message}: ${unboundTypes.map(getTypeName).join([', '])}`,
      );
    };

    // @ts-ignore
    function __embind_register_class(
      rawType,
      rawPointerType,
      rawConstPointerType,
      baseClassRawType,
      getActualTypeSignature,
      getActualType,
      upcastSignature,
      upcast,
      downcastSignature,
      downcast,
      name,
      destructorSignature,
      rawDestructor,
    ) {
      rawType >>>= 0;
      rawPointerType >>>= 0;
      rawConstPointerType >>>= 0;
      baseClassRawType >>>= 0;
      getActualTypeSignature >>>= 0;
      getActualType >>>= 0;
      upcastSignature >>>= 0;
      upcast >>>= 0;
      downcastSignature >>>= 0;
      downcast >>>= 0;
      name >>>= 0;
      destructorSignature >>>= 0;
      rawDestructor >>>= 0;
      name = readLatin1String(name);
      getActualType = embind__requireFunction(
        getActualTypeSignature,
        getActualType,
      );
      upcast &&= embind__requireFunction(upcastSignature, upcast);
      downcast &&= embind__requireFunction(downcastSignature, downcast);
      rawDestructor = embind__requireFunction(
        destructorSignature,
        rawDestructor,
      );
      const legalFunctionName = makeLegalFunctionName(name);
      exposePublicSymbol(legalFunctionName, () => {
        // this code cannot run if baseClassRawType is zero
        throwUnboundTypeError(`Cannot construct ${name} due to unbound types`, [
          baseClassRawType,
        ]);
      });
      // @ts-ignore
      whenDependentTypesAreResolved(
        [rawType, rawPointerType, rawConstPointerType],
        baseClassRawType ? [baseClassRawType] : [],
        (base) => {
          base = base[0];
          let baseClass;
          let basePrototype;
          if (baseClassRawType) {
            baseClass = base.registeredClass;
            basePrototype = baseClass.instancePrototype;
          } else {
            basePrototype = ClassHandle.prototype;
          }
          // @ts-ignore
          const constructor = createNamedFunction(name, function (...args) {
            // @ts-ignore
            if (Object.getPrototypeOf(this) !== instancePrototype) {
              // @ts-ignore
              throw new BindingError(`Use 'new' to construct ${name}`);
            }
            // @ts-ignore
            if (undefined === registeredClass.constructor_body) {
              // @ts-ignore
              throw new BindingError(`${name} has no accessible constructor`);
            }
            // @ts-ignore
            const body = registeredClass.constructor_body[args.length];
            if (undefined === body) {
              // @ts-ignore
              throw new BindingError(
                `Tried to invoke ctor of ${name} with invalid number of parameters (${args.length}) - expected (${Object.keys(registeredClass.constructor_body).toString()}) parameters instead!`,
              );
            }
            // @ts-ignore
            return body.apply(this, args);
          });
          var instancePrototype = Object.create(basePrototype, {
            constructor: {
              value: constructor,
            },
          });
          constructor.prototype = instancePrototype;
          var registeredClass = new RegisteredClass(
            name,
            constructor,
            instancePrototype,
            rawDestructor,
            baseClass,
            getActualType,
            upcast,
            downcast,
          );
          if (registeredClass.baseClass) {
            // Keep track of class hierarchy. Used to allow sub-classes to inherit class functions.
            registeredClass.baseClass.__derivedClasses ??= [];
            registeredClass.baseClass.__derivedClasses.push(registeredClass);
          }
          const referenceConverter = new RegisteredPointer(
            name,
            registeredClass,
            true,
            false,
            false,
          );
          const pointerConverter = new RegisteredPointer(
            `${name}*`,
            registeredClass,
            false,
            false,
            false,
          );
          const constPointerConverter = new RegisteredPointer(
            `${name} const*`,
            registeredClass,
            false,
            true,
            false,
          );
          // @ts-ignore
          registeredPointers[rawType] = {
            pointerType: pointerConverter,
            constPointerType: constPointerConverter,
          };
          replacePublicSymbol(legalFunctionName, constructor);
          return [referenceConverter, pointerConverter, constPointerConverter];
        },
      );
    }

    // @ts-ignore
    const runDestructors = (destructors) => {
      while (destructors.length) {
        const ptr = destructors.pop();
        const del = destructors.pop();
        del(ptr);
      }
    };

    // @ts-ignore
    function usesDestructorStack(argTypes) {
      // Skip return value at index 0 - it's not deleted here.
      for (let i = 1; i < argTypes.length; ++i) {
        // The type does not define a destructor function - must use dynamic stack
        if (
          argTypes[i] !== null &&
          argTypes[i].destructorFunction === undefined
        ) {
          return true;
        }
      }
      return false;
    }

    // @ts-ignore
    function newFunc(constructor, argumentList) {
      if (!(constructor instanceof Function)) {
        throw new TypeError(
          `new_ called with constructor type ${typeof constructor} which is not a function`,
        );
      }
      /*
       * Previously, the following line was just:
       *   function dummy() {};
       * Unfortunately, Chrome was preserving 'dummy' as the object's name, even
       * though at creation, the 'dummy' has the correct constructor name.  Thus,
       * objects created with IMVU.new would show up in the debugger as 'dummy',
       * which isn't very helpful.  Using IMVU.createNamedFunction addresses the
       * issue.  Doubly-unfortunately, there's no way to write a test for this
       * behavior.  -NRD 2013.02.22
       */ const dummy = createNamedFunction(
        constructor.name || 'unknownFunctionName',
        () => {},
      );
      dummy.prototype = constructor.prototype;
      const obj = new dummy();
      const r = constructor.apply(obj, argumentList);
      return r instanceof Object ? r : obj;
    }

    // @ts-ignore
    function createJsInvoker(argTypes, isClassMethodFunc, returns, isAsync) {
      const needsDestructorStack = usesDestructorStack(argTypes);
      const argCount = argTypes.length;
      let argsList = '';
      let argsListWired = '';
      for (var i = 0; i < argCount - 2; ++i) {
        argsList += `${i !== 0 ? ', ' : ''}arg${i}`;
        argsListWired += `${i !== 0 ? ', ' : ''}arg${i}Wired`;
      }
      let invokerFnBody = `\n        return function (${argsList}) {\n        if (arguments.length !== ${argCount - 2}) {\n          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${argCount - 2}');\n        }`;
      if (needsDestructorStack) {
        invokerFnBody += 'var destructors = [];\n';
      }
      const dtorStack = needsDestructorStack ? 'destructors' : 'null';
      const args1 = [
        'humanName',
        'throwBindingError',
        'invoker',
        'fn',
        'runDestructors',
        'retType',
        'classParam',
      ];
      if (isClassMethodFunc) {
        invokerFnBody += `var thisWired = classParam['toWireType'](${dtorStack}, this);\n`;
      }
      for (var i = 0; i < argCount - 2; ++i) {
        invokerFnBody += `var arg${i}Wired = argType${i}['toWireType'](${dtorStack}, arg${i});\n`;
        args1.push(`argType${i}`);
      }
      if (isClassMethodFunc) {
        argsListWired = `thisWired${argsListWired.length > 0 ? ', ' : ''}${argsListWired}`;
      }
      invokerFnBody += `${returns || isAsync ? 'var rv = ' : ''}invoker(fn${argsListWired.length > 0 ? ', ' : ''}${argsListWired});\n`;
      // @ts-ignore
      const returnVal = returns ? 'rv' : '';
      if (needsDestructorStack) {
        invokerFnBody += 'runDestructors(destructors);\n';
      } else {
        for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
          // Skip return value at index 0 - it's not deleted here. Also skip class type if not a method.
          const paramName = i === 1 ? 'thisWired' : `arg${i - 2}Wired`;
          if (argTypes[i].destructorFunction !== null) {
            invokerFnBody += `${paramName}_dtor(${paramName});\n`;
            args1.push(`${paramName}_dtor`);
          }
        }
      }
      if (returns) {
        invokerFnBody +=
          'var ret = retType[\'fromWireType\'](rv);\n' + 'return ret;\n';
      } else {
      }
      invokerFnBody += '}\n';
      invokerFnBody = `if (arguments.length !== ${args1.length}){ throw new Error(humanName + "Expected ${args1.length} closure arguments " + arguments.length + " given."); }\n${invokerFnBody}`;
      return [args1, invokerFnBody];
    }

    // @ts-ignore
    function craftInvokerFunction(
      humanName,
      argTypes,
      classType,
      cppInvokerFunc,
      cppTargetFunc,
      /** boolean= */ isAsync,
    ) {
      // humanName: a human-readable string name for the function to be generated.
      // argTypes: An array that contains the embind type objects for all types in the function signature.
      //    argTypes[0] is the type object for the function return value.
      //    argTypes[1] is the type object for function this object/class type, or null if not crafting an invoker for a class method.
      //    argTypes[2...] are the actual function parameters.
      // classType: The embind type object for the class to be bound, or null if this is not a method of a class.
      // cppInvokerFunc: JS Function object to the C++-side function that interops into C++ code.
      // cppTargetFunc: Function pointer (an integer to FUNCTION_TABLE) to the target C++ function the cppInvokerFunc will end up calling.
      // isAsync: Optional. If true, returns an async function. Async bindings are only supported with JSPI.
      const argCount = argTypes.length;
      if (argCount < 2) {
        throwBindingError(
          'argTypes array size mismatch! Must at least get return value and \'this\' types!',
        );
      }
      assert(!isAsync, 'Async bindings are only supported with JSPI.');
      const isClassMethodFunc = argTypes[1] !== null && classType !== null;
      // Free functions with signature "void function()" do not need an invoker that marshalls between wire types.
      // TODO: This omits argument count check - enable only at -O3 or similar.
      //    if (ENABLE_UNSAFE_OPTS && argCount == 2 && argTypes[0].name == "void" && !isClassMethodFunc) {
      //       return FUNCTION_TABLE[fn];
      //    }
      // Determine if we need to use a dynamic stack to store the destructors for the function parameters.
      // TODO: Remove this completely once all function invokers are being dynamically generated.
      const needsDestructorStack = usesDestructorStack(argTypes);
      const returns = argTypes[0].name !== 'void';
      // Builld the arguments that will be passed into the closure around the invoker
      // function.
      const closureArgs = [
        humanName,
        throwBindingError,
        cppInvokerFunc,
        cppTargetFunc,
        runDestructors,
        argTypes[0],
        argTypes[1],
      ];
      for (var i = 0; i < argCount - 2; ++i) {
        closureArgs.push(argTypes[i + 2]);
      }
      if (!needsDestructorStack) {
        for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
          // Skip return value at index 0 - it's not deleted here. Also skip class type if not a method.
          if (argTypes[i].destructorFunction !== null) {
            closureArgs.push(argTypes[i].destructorFunction);
          }
        }
      }
      const [args, invokerFnBody] = createJsInvoker(
        argTypes,
        isClassMethodFunc,
        returns,
        isAsync,
      );
      // @ts-ignore
      args.push(invokerFnBody);
      const invokerFn = newFunc(Function, args)(...closureArgs);
      return createNamedFunction(humanName, invokerFn);
    }

    // @ts-ignore
    const heap32VectorToArray = (count, firstElement) => {
      const array = [];
      for (let i = 0; i < count; i++) {
        // TODO(https://github.com/emscripten-core/emscripten/issues/17310):
        // Find a way to hoist the `>> 2` or `>> 3` out of this loop.
        array.push(HEAPU32[((firstElement + i * 4) >>> 2) >>> 0]);
      }
      return array;
    };

    // @ts-ignore
    const getFunctionName = (signature) => {
      signature = signature.trim();
      const argsIndex = signature.indexOf('(');
      if (argsIndex !== -1) {
        assert(
          signature[signature.length - 1] == ')',
          'Parentheses for argument names should match.',
        );
        return signature.substr(0, argsIndex);
      } else {
        return signature;
      }
    };

    // @ts-ignore
    const __embind_register_class_class_function = function (
      rawClassType,
      methodName,
      argCount,
      rawArgTypesAddr,
      invokerSignature,
      rawInvoker,
      fn,
      isAsync,
    ) {
      rawClassType >>>= 0;
      methodName >>>= 0;
      rawArgTypesAddr >>>= 0;
      invokerSignature >>>= 0;
      rawInvoker >>>= 0;
      fn >>>= 0;
      const rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      methodName = readLatin1String(methodName);
      methodName = getFunctionName(methodName);
      rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
      // @ts-ignore
      whenDependentTypesAreResolved([], [rawClassType], (classType) => {
        classType = classType[0];
        const humanName = `${classType.name}.${methodName}`;
        function unboundTypesHandler() {
          throwUnboundTypeError(
            `Cannot call ${humanName} due to unbound types`,
            rawArgTypes,
          );
        }
        if (methodName.startsWith('@@')) {
          // @ts-ignore
          methodName = Symbol[methodName.substring(2)];
        }
        const proto = classType.registeredClass.constructor;
        if (undefined === proto[methodName]) {
          // This is the first function to be registered with this name.
          unboundTypesHandler.argCount = argCount - 1;
          proto[methodName] = unboundTypesHandler;
        } else {
          // There was an existing function with the same name registered. Set up
          // a function overload routing table.
          ensureOverloadTable(proto, methodName, humanName);
          proto[methodName].overloadTable[argCount - 1] = unboundTypesHandler;
        }
        // @ts-ignore
        whenDependentTypesAreResolved([], rawArgTypes, (argTypes) => {
          // Replace the initial unbound-types-handler stub with the proper
          // function. If multiple overloads are registered, the function handlers
          // go into an overload table.
          const invokerArgsArray = [
            argTypes[0],
            /* return value */ null,
          ].concat(/* no class 'this' */ argTypes.slice(1));
          /* actual params */ const func = craftInvokerFunction(
            humanName,
            invokerArgsArray,
            null,
            /* no class 'this' */ rawInvoker,
            fn,
            isAsync,
          );
          if (undefined === proto[methodName].overloadTable) {
            func.argCount = argCount - 1;
            proto[methodName] = func;
          } else {
            proto[methodName].overloadTable[argCount - 1] = func;
          }
          if (classType.registeredClass.__derivedClasses) {
            for (const derivedClass of classType.registeredClass
              .__derivedClasses) {
              if (!derivedClass.constructor.hasOwnProperty(methodName)) {
                // TODO: Add support for overloads
                derivedClass.constructor[methodName] = func;
              }
            }
          }
          return [];
        });
        return [];
      });
    };

    // @ts-ignore
    const __embind_register_class_constructor = function (
      rawClassType,
      argCount,
      rawArgTypesAddr,
      invokerSignature,
      invoker,
      rawConstructor,
    ) {
      rawClassType >>>= 0;
      rawArgTypesAddr >>>= 0;
      invokerSignature >>>= 0;
      invoker >>>= 0;
      rawConstructor >>>= 0;
      assert(argCount > 0);
      const rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      invoker = embind__requireFunction(invokerSignature, invoker);
      // @ts-ignore
      const args = [rawConstructor];
      // @ts-ignore
      const destructors = [];
      // @ts-ignore
      whenDependentTypesAreResolved([], [rawClassType], (classType) => {
        classType = classType[0];
        const humanName = `constructor ${classType.name}`;
        if (undefined === classType.registeredClass.constructor_body) {
          classType.registeredClass.constructor_body = [];
        }
        if (
          undefined !== classType.registeredClass.constructor_body[argCount - 1]
        ) {
          // @ts-ignore
          throw new BindingError(
            `Cannot register multiple constructors with identical number of parameters (${argCount - 1}) for class '${classType.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`,
          );
        }
        classType.registeredClass.constructor_body[argCount - 1] = () => {
          throwUnboundTypeError(
            `Cannot construct ${classType.name} due to unbound types`,
            rawArgTypes,
          );
        };
        // @ts-ignore
        whenDependentTypesAreResolved([], rawArgTypes, (argTypes) => {
          // Insert empty slot for context type (argTypes[1]).
          argTypes.splice(1, 0, null);
          classType.registeredClass.constructor_body[argCount - 1] =
            craftInvokerFunction(
              humanName,
              argTypes,
              null,
              invoker,
              rawConstructor,
            );
          return [];
        });
        return [];
      });
    };

    // @ts-ignore
    const __embind_register_class_function = function (
      rawClassType,
      methodName,
      argCount,
      rawArgTypesAddr, // [ReturnType, ThisType, Args...]
      // @ts-ignore
      invokerSignature,
      rawInvoker,
      context,
      isPureVirtual,
      isAsync,
    ) {
      rawClassType >>>= 0;
      methodName >>>= 0;
      rawArgTypesAddr >>>= 0;
      invokerSignature >>>= 0;
      rawInvoker >>>= 0;
      context >>>= 0;
      const rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      methodName = readLatin1String(methodName);
      methodName = getFunctionName(methodName);
      rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
      // @ts-ignore
      whenDependentTypesAreResolved([], [rawClassType], (classType) => {
        classType = classType[0];
        const humanName = `${classType.name}.${methodName}`;
        if (methodName.startsWith('@@')) {
          // @ts-ignore
          methodName = Symbol[methodName.substring(2)];
        }
        if (isPureVirtual) {
          classType.registeredClass.pureVirtualFunctions.push(methodName);
        }
        function unboundTypesHandler() {
          throwUnboundTypeError(
            `Cannot call ${humanName} due to unbound types`,
            rawArgTypes,
          );
        }
        const proto = classType.registeredClass.instancePrototype;
        const method = proto[methodName];
        if (
          undefined === method ||
          (undefined === method.overloadTable &&
            method.className !== classType.name &&
            method.argCount === argCount - 2)
        ) {
          // This is the first overload to be registered, OR we are replacing a
          // function in the base class with a function in the derived class.
          unboundTypesHandler.argCount = argCount - 2;
          unboundTypesHandler.className = classType.name;
          proto[methodName] = unboundTypesHandler;
        } else {
          // There was an existing function with the same name registered. Set up
          // a function overload routing table.
          ensureOverloadTable(proto, methodName, humanName);
          proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
        }
        // @ts-ignore
        whenDependentTypesAreResolved([], rawArgTypes, (argTypes) => {
          const memberFunction = craftInvokerFunction(
            humanName,
            argTypes,
            classType,
            rawInvoker,
            context,
            isAsync,
          );
          // Replace the initial unbound-handler-stub function with the
          // appropriate member function, now that all types are resolved. If
          // multiple overloads are registered for this function, the function
          // goes into an overload table.
          if (undefined === proto[methodName].overloadTable) {
            // Set argCount in case an overload is registered later
            memberFunction.argCount = argCount - 2;
            proto[methodName] = memberFunction;
          } else {
            proto[methodName].overloadTable[argCount - 2] = memberFunction;
          }
          return [];
        });
        return [];
      });
    };

    // @ts-ignore
    const validateThis = (this_, classType, humanName) => {
      if (!(this_ instanceof Object)) {
        throwBindingError(`${humanName} with invalid "this": ${this_}`);
      }
      if (!(this_ instanceof classType.registeredClass.constructor)) {
        throwBindingError(
          `${humanName} incompatible with "this" of type ${this_.constructor.name}`,
        );
      }
      if (!this_.$$.ptr) {
        throwBindingError(
          `cannot call emscripten binding method ${humanName} on deleted object`,
        );
      }
      // todo: kill this
      return upcastPointer(
        this_.$$.ptr,
        this_.$$.ptrType.registeredClass,
        classType.registeredClass,
      );
    };

    // @ts-ignore
    const __embind_register_class_property = function (
      classType,
      fieldName,
      getterReturnType,
      getterSignature,
      getter,
      getterContext,
      setterArgumentType,
      setterSignature,
      setter,
      setterContext,
    ) {
      classType >>>= 0;
      fieldName >>>= 0;
      getterReturnType >>>= 0;
      getterSignature >>>= 0;
      getter >>>= 0;
      getterContext >>>= 0;
      setterArgumentType >>>= 0;
      setterSignature >>>= 0;
      setter >>>= 0;
      setterContext >>>= 0;
      fieldName = readLatin1String(fieldName);
      getter = embind__requireFunction(getterSignature, getter);
      // @ts-ignore
      whenDependentTypesAreResolved([], [classType], (classType) => {
        classType = classType[0];
        const humanName = `${classType.name}.${fieldName}`;
        const desc = {
          get() {
            throwUnboundTypeError(
              `Cannot access ${humanName} due to unbound types`,
              [getterReturnType, setterArgumentType],
            );
          },
          enumerable: true,
          configurable: true,
        };
        if (setter) {
          // @ts-ignore
          desc.set = () =>
            throwUnboundTypeError(
              `Cannot access ${humanName} due to unbound types`,
              [getterReturnType, setterArgumentType],
            );
        } else {
          // @ts-ignore
          desc.set = v =>
            throwBindingError(`${humanName} is a read-only property`);
        }
        Object.defineProperty(
          classType.registeredClass.instancePrototype,
          fieldName,
          desc,
        );
        // @ts-ignore
        whenDependentTypesAreResolved(
          [],
          setter ? [getterReturnType, setterArgumentType] : [getterReturnType],
          (types) => {
            const getterReturnType = types[0];
            const desc = {
              get() {
                const ptr = validateThis(
                  this,
                  classType,
                  `${humanName} getter`,
                );
                return getterReturnType.fromWireType(
                  getter(getterContext, ptr),
                );
              },
              enumerable: true,
            };
            if (setter) {
              setter = embind__requireFunction(setterSignature, setter);
              const setterArgumentType = types[1];
              // @ts-ignore
              desc.set = function (v) {
                const ptr = validateThis(
                  this,
                  classType,
                  `${humanName} setter`,
                );
                // @ts-ignore
                const destructors = [];
                // @ts-ignore
                setter(
                  setterContext,
                  ptr,
                  setterArgumentType.toWireType(destructors, v),
                );
                // @ts-ignore
                runDestructors(destructors);
              };
            }
            Object.defineProperty(
              classType.registeredClass.instancePrototype,
              fieldName,
              desc,
            );
            return [];
          },
        );
        return [];
      });
    };

    // @ts-ignore
    const emval_freelist = [];

    // @ts-ignore
    const emval_handles = [];

    // @ts-ignore
    function __emval_decref(handle) {
      handle >>>= 0;
      // @ts-ignore
      if (handle > 9 && --emval_handles[handle + 1] === 0) {
        // @ts-ignore
        assert(
          emval_handles[handle] !== undefined,
          `Decref for unallocated handle.`,
        );
        emval_handles[handle] = undefined;
        emval_freelist.push(handle);
      }
    }

    const count_emval_handles = () =>
      emval_handles.length / 2 - 5 - emval_freelist.length;

    const init_emval = () => {
      // reserve 0 and some special values. These never get de-allocated.
      emval_handles.push(0, 1, undefined, 1, null, 1, true, 1, false, 1);
      assert(emval_handles.length === 5 * 2);
      // @ts-ignore
      Module.count_emval_handles = count_emval_handles;
    };

    var Emval = {
      // @ts-ignore
      toValue: (handle) => {
        if (!handle) {
          throwBindingError(`Cannot use deleted val. handle = ${handle}`);
        }
        // handle 2 is supposed to be `undefined`.
        // @ts-ignore
        assert(
          handle === 2 ||
          (emval_handles[handle] !== undefined && handle % 2 === 0),
          `invalid handle: ${handle}`,
        );
        // @ts-ignore
        return emval_handles[handle];
      },
      // @ts-ignore
      toHandle: (value) => {
        switch (value) {
          case undefined:
            return 2;

          case null:
            return 4;

          case true:
            return 6;

          case false:
            return 8;

          default: {
            // @ts-ignore
            const handle = emval_freelist.pop() || emval_handles.length;
            emval_handles[handle] = value;
            emval_handles[handle + 1] = 1;
            return handle;
          }
        }
      },
    };

    const EmValType = {
      name: 'emscripten::val',
      // @ts-ignore
      fromWireType: (handle) => {
        const rv = Emval.toValue(handle);
        __emval_decref(handle);
        return rv;
      },
      // @ts-ignore
      toWireType: (destructors, value) => Emval.toHandle(value),
      argPackAdvance: GenericWireTypeSize,
      readValueFromPointer: readPointer,
      destructorFunction: null,
    };

    // This type does not need a destructor
    // TODO: do we need a deleteObject here?  write a test where
    // emval is passed into JS via an interface
    // @ts-ignore
    function __embind_register_emval(rawType) {
      rawType >>>= 0;
      return registerType(rawType, EmValType);
    }

    // @ts-ignore
    const enumReadValueFromPointer = (name, width, signed) => {
      switch (width) {
        case 1:
          return signed
            ? // @ts-ignore
            function (pointer) {
              // @ts-ignore
              return this.fromWireType(HEAP8[pointer >>> 0]);
            }
            : // @ts-ignore
            function (pointer) {
              // @ts-ignore
              return this.fromWireType(HEAPU8[pointer >>> 0]);
            };

        case 2:
          return signed
            ? // @ts-ignore
            function (pointer) {
              // @ts-ignore
              return this.fromWireType(HEAP16[(pointer >>> 1) >>> 0]);
            }
            : // @ts-ignore
            function (pointer) {
              // @ts-ignore
              return this.fromWireType(HEAPU16[(pointer >>> 1) >>> 0]);
            };

        case 4:
          return signed
            ? // @ts-ignore
            function (pointer) {
              // @ts-ignore
              return this.fromWireType(HEAP32[(pointer >>> 2) >>> 0]);
            }
            : // @ts-ignore
            function (pointer) {
              // @ts-ignore
              return this.fromWireType(HEAPU32[(pointer >>> 2) >>> 0]);
            };

        default:
          throw new TypeError(`invalid integer width (${width}): ${name}`);
      }
    };

    // @ts-ignore
    /** @suppress {globalThis} */ function __embind_register_enum(
      rawType,
      name,
      size,
      isSigned,
    ) {
      rawType >>>= 0;
      name >>>= 0;
      size >>>= 0;
      name = readLatin1String(name);
      function ctor() {}
      ctor.values = {};
      registerType(rawType, {
        name,
        constructor: ctor,
        // @ts-ignore
        fromWireType(c) {
          return this.constructor.values[c];
        },
        // @ts-ignore
        toWireType: (destructors, c) => c.value,
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: enumReadValueFromPointer(name, size, isSigned),
        destructorFunction: null,
      });
      exposePublicSymbol(name, ctor);
    }

    // @ts-ignore
    const requireRegisteredType = (rawType, humanName) => {
      // @ts-ignore
      const impl = registeredTypes[rawType];
      if (undefined === impl) {
        throwBindingError(
          `${humanName} has unknown type ${getTypeName(rawType)}`,
        );
      }
      return impl;
    };

    // @ts-ignore
    function __embind_register_enum_value(rawEnumType, name, enumValue) {
      rawEnumType >>>= 0;
      name >>>= 0;
      const enumType = requireRegisteredType(rawEnumType, 'enum');
      name = readLatin1String(name);
      const Enum = enumType.constructor;
      const Value = Object.create(enumType.constructor.prototype, {
        value: {
          value: enumValue,
        },
        constructor: {
          value: createNamedFunction(`${enumType.name}_${name}`, () => {}),
        },
      });
      Enum.values[enumValue] = Value;
      Enum[name] = Value;
    }

    // @ts-ignore
    const floatReadValueFromPointer = (name, width) => {
      switch (width) {
        case 4:
          // @ts-ignore
          return function (pointer) {
            // @ts-ignore
            return this.fromWireType(HEAPF32[(pointer >>> 2) >>> 0]);
          };

        case 8:
          // @ts-ignore
          return function (pointer) {
            // @ts-ignore
            return this.fromWireType(HEAPF64[(pointer >>> 3) >>> 0]);
          };

        default:
          throw new TypeError(`invalid float width (${width}): ${name}`);
      }
    };

    // @ts-ignore
    const __embind_register_float = function (rawType, name, size) {
      rawType >>>= 0;
      name >>>= 0;
      size >>>= 0;
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        // @ts-ignore
        fromWireType: value => value,
        // @ts-ignore
        toWireType: (destructors, value) => {
          if (typeof value != 'number' && typeof value != 'boolean') {
            // @ts-ignore
            throw new TypeError(
              `Cannot convert ${embindRepr(value)} to ${this.name}`,
            );
          }
          // The VM will perform JS to Wasm value conversion, according to the spec:
          // https://www.w3.org/TR/wasm-js-api-1/#towebassemblyvalue
          return value;
        },
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: floatReadValueFromPointer(name, size),
        destructorFunction: null,
      });
    };

    // @ts-ignore
    function __embind_register_function(
      name,
      argCount,
      rawArgTypesAddr,
      signature,
      rawInvoker,
      fn,
      isAsync,
    ) {
      name >>>= 0;
      rawArgTypesAddr >>>= 0;
      signature >>>= 0;
      rawInvoker >>>= 0;
      fn >>>= 0;
      const argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      name = readLatin1String(name);
      name = getFunctionName(name);
      rawInvoker = embind__requireFunction(signature, rawInvoker);
      exposePublicSymbol(
        name,
        () => {
          throwUnboundTypeError(
            `Cannot call ${name} due to unbound types`,
            argTypes,
          );
        },
        argCount - 1,
      );
      // @ts-ignore
      whenDependentTypesAreResolved([], argTypes, (argTypes) => {
        const invokerArgsArray = [argTypes[0], /* return value */ null].concat(
          /* no class 'this' */ argTypes.slice(1),
        );
        /* actual params */ replacePublicSymbol(
          name,
          craftInvokerFunction(
            name,
            invokerArgsArray,
            null,
            /* no class 'this' */ rawInvoker,
            fn,
            isAsync,
          ),
          argCount - 1,
        );
        return [];
      });
    }

    // @ts-ignore
    /** @suppress {globalThis} */ function __embind_register_integer(
      primitiveType,
      name,
      size,
      minRange,
      maxRange,
    ) {
      primitiveType >>>= 0;
      name >>>= 0;
      size >>>= 0;
      name = readLatin1String(name);
      // LLVM doesn't have signed and unsigned 32-bit types, so u32 literals come
      // out as 'i32 -1'. Always treat those as max u32.
      if (maxRange === -1) {
        maxRange = 4294967295;
      }
      // @ts-ignore
      let fromWireType = value => value;
      if (minRange === 0) {
        const bitshift = 32 - 8 * size;
        fromWireType = value => (value << bitshift) >>> bitshift;
      }
      const isUnsignedType = name.includes('unsigned');
      // @ts-ignore
      const checkAssertions = (value, toTypeName) => {
        if (typeof value != 'number' && typeof value != 'boolean') {
          throw new TypeError(
            `Cannot convert "${embindRepr(value)}" to ${toTypeName}`,
          );
        }
        if (value < minRange || value > maxRange) {
          throw new TypeError(
            `Passing a number "${embindRepr(value)}" from JS side to C/C++ side to an argument of type "${name}", which is outside the valid range [${minRange}, ${maxRange}]!`,
          );
        }
      };
      let toWireType;
      if (isUnsignedType) {
        // @ts-ignore
        toWireType = function (destructors, value) {
          // @ts-ignore
          checkAssertions(value, this.name);
          return value >>> 0;
        };
      } else {
        // @ts-ignore
        toWireType = function (destructors, value) {
          // @ts-ignore
          checkAssertions(value, this.name);
          // The VM will perform JS to Wasm value conversion, according to the spec:
          // https://www.w3.org/TR/wasm-js-api-1/#towebassemblyvalue
          return value;
        };
      }
      registerType(primitiveType, {
        name,
        fromWireType,
        toWireType,
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: integerReadValueFromPointer(
          name,
          size,
          minRange !== 0,
        ),
        destructorFunction: null,
      });
    }

    // @ts-ignore
    function __embind_register_memory_view(rawType, dataTypeIndex, name) {
      rawType >>>= 0;
      name >>>= 0;
      const typeMapping = [
        Int8Array,
        Uint8Array,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array,
        BigInt64Array,
        BigUint64Array,
      ];
      const TA = typeMapping[dataTypeIndex];
      // @ts-ignore
      function decodeMemoryView(handle) {
        const size = HEAPU32[(handle >>> 2) >>> 0];
        const data = HEAPU32[((handle + 4) >>> 2) >>> 0];
        // @ts-ignore
        return new TA(HEAP8.buffer, data, size);
      }
      name = readLatin1String(name);
      registerType(
        rawType,
        {
          name,
          fromWireType: decodeMemoryView,
          argPackAdvance: GenericWireTypeSize,
          readValueFromPointer: decodeMemoryView,
        },
        {
          ignoreDuplicateRegistrations: true,
        },
      );
    }

    // @ts-ignore
    function __embind_register_optional(rawOptionalType, rawType) {
      rawOptionalType >>>= 0;
      rawType >>>= 0;
      __embind_register_emval(rawOptionalType);
    }

    // @ts-ignore
    const __embind_register_smart_ptr = function (
      rawType,
      rawPointeeType,
      name,
      sharingPolicy,
      getPointeeSignature,
      rawGetPointee,
      constructorSignature,
      rawConstructor,
      shareSignature,
      rawShare,
      destructorSignature,
      rawDestructor,
    ) {
      rawType >>>= 0;
      rawPointeeType >>>= 0;
      name >>>= 0;
      getPointeeSignature >>>= 0;
      rawGetPointee >>>= 0;
      constructorSignature >>>= 0;
      rawConstructor >>>= 0;
      shareSignature >>>= 0;
      rawShare >>>= 0;
      destructorSignature >>>= 0;
      rawDestructor >>>= 0;
      name = readLatin1String(name);
      rawGetPointee = embind__requireFunction(
        getPointeeSignature,
        rawGetPointee,
      );
      rawConstructor = embind__requireFunction(
        constructorSignature,
        rawConstructor,
      );
      rawShare = embind__requireFunction(shareSignature, rawShare);
      rawDestructor = embind__requireFunction(
        destructorSignature,
        rawDestructor,
      );
      // @ts-ignore
      whenDependentTypesAreResolved(
        [rawType],
        [rawPointeeType],
        (pointeeType) => {
          pointeeType = pointeeType[0];
          const registeredPointer = new RegisteredPointer(
            name,
            pointeeType.registeredClass,
            false,
            false, // smart pointer properties
            true,
            pointeeType,
            sharingPolicy,
            rawGetPointee,
            rawConstructor,
            rawShare,
            rawDestructor,
          );
          return [registeredPointer];
        },
      );
    };

    // @ts-ignore
    const stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
      outIdx >>>= 0;
      assert(
        typeof str === 'string',
        `stringToUTF8Array expects a string (got ${typeof str})`,
      );
      // Parameter maxBytesToWrite is not optional. Negative values, 0, null,
      // undefined and false each don't write out any bytes.
      if (!(maxBytesToWrite > 0)) {
        return 0;
      }
      const startIdx = outIdx;
      const endIdx = outIdx + maxBytesToWrite - 1;
      // -1 for string null terminator.
      for (let i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
        // unit, not a Unicode code point of the character! So decode
        // UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description
        // and https://www.ietf.org/rfc/rfc2279.txt
        // and https://tools.ietf.org/html/rfc3629
        let u = str.charCodeAt(i);
        // possibly a lead surrogate
        if (u >= 55296 && u <= 57343) {
          const u1 = str.charCodeAt(++i);
          u = (65536 + ((u & 1023) << 10)) | (u1 & 1023);
        }
        if (u <= 127) {
          if (outIdx >= endIdx) {
            break;
          }
          heap[outIdx++ >>> 0] = u;
        } else if (u <= 2047) {
          if (outIdx + 1 >= endIdx) {
            break;
          }
          heap[outIdx++ >>> 0] = 192 | (u >> 6);
          heap[outIdx++ >>> 0] = 128 | (u & 63);
        } else if (u <= 65535) {
          if (outIdx + 2 >= endIdx) {
            break;
          }
          heap[outIdx++ >>> 0] = 224 | (u >> 12);
          heap[outIdx++ >>> 0] = 128 | ((u >> 6) & 63);
          heap[outIdx++ >>> 0] = 128 | (u & 63);
        } else {
          if (outIdx + 3 >= endIdx) {
            break;
          }
          if (u > 1114111) {
            warnOnce(
              `Invalid Unicode code point ${ptrToString(u)} encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).`,
            );
          }
          heap[outIdx++ >>> 0] = 240 | (u >> 18);
          heap[outIdx++ >>> 0] = 128 | ((u >> 12) & 63);
          heap[outIdx++ >>> 0] = 128 | ((u >> 6) & 63);
          heap[outIdx++ >>> 0] = 128 | (u & 63);
        }
      }
      // Null-terminate the pointer to the buffer.
      heap[outIdx >>> 0] = 0;
      return outIdx - startIdx;
    };

    // @ts-ignore
    const stringToUTF8 = (str, outPtr, maxBytesToWrite) => {
      assert(
        typeof maxBytesToWrite == 'number',
        'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!',
      );
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    };

    // @ts-ignore
    const lengthBytesUTF8 = (str) => {
      let len = 0;
      for (let i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
        // unit, not a Unicode code point of the character! So decode
        // UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        const c = str.charCodeAt(i);
        // possibly a lead surrogate
        if (c <= 127) {
          len++;
        } else if (c <= 2047) {
          len += 2;
        } else if (c >= 55296 && c <= 57343) {
          len += 4;
          ++i;
        } else {
          len += 3;
        }
      }
      return len;
    };

    // @ts-ignore
    function __embind_register_std_string(rawType, name) {
      rawType >>>= 0;
      name >>>= 0;
      name = readLatin1String(name);
      const stdStringIsUTF8 = name === 'std::string'; // process only std::string bindings with UTF8 support, in contrast to e.g. std::basic_string<unsigned char>
      registerType(rawType, {
        name,
        // For some method names we use string keys here since they are part of
        // the public/external API and/or used by the runtime-generated code.
        // @ts-ignore
        fromWireType(value) {
          const length = HEAPU32[(value >>> 2) >>> 0];
          const payload = value + 4;
          let str;
          if (stdStringIsUTF8) {
            let decodeStartPtr = payload;
            // Looping here to support possible embedded '0' bytes
            // @ts-ignore
            for (var i = 0; i <= length; ++i) {
              const currentBytePtr = payload + i;
              if (i == length || HEAPU8[currentBytePtr >>> 0] == 0) {
                const maxRead = currentBytePtr - decodeStartPtr;
                const stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                if (str === undefined) {
                  str = stringSegment;
                } else {
                  str += String.fromCharCode(0);
                  str += stringSegment;
                }
                decodeStartPtr = currentBytePtr + 1;
              }
            }
          } else {
            const a = new Array(length);
            // @ts-ignore
            for (var i = 0; i < length; ++i) {
              // @ts-ignore
              a[i] = String.fromCharCode(HEAPU8[(payload + i) >>> 0]);
            }
            str = a.join('');
          }
          _free(value);
          return str;
        },
        // @ts-ignore
        toWireType(destructors, value) {
          if (value instanceof ArrayBuffer) {
            value = new Uint8Array(value);
          }
          let length;
          const valueIsOfTypeString = typeof value == 'string';
          if (
            !(
              valueIsOfTypeString ||
              value instanceof Uint8Array ||
              value instanceof Uint8ClampedArray ||
              value instanceof Int8Array
            )
          ) {
            throwBindingError('Cannot pass non-string to std::string');
          }
          if (stdStringIsUTF8 && valueIsOfTypeString) {
            length = lengthBytesUTF8(value);
          } else {
            length = value.length;
          }
          // assumes POINTER_SIZE alignment
          const base = _malloc(4 + length + 1);
          const ptr = base + 4;
          HEAPU32[(base >>> 2) >>> 0] = length;
          if (stdStringIsUTF8 && valueIsOfTypeString) {
            stringToUTF8(value, ptr, length + 1);
          } else {
            if (valueIsOfTypeString) {
              for (var i = 0; i < length; ++i) {
                const charCode = value.charCodeAt(i);
                if (charCode > 255) {
                  _free(ptr);
                  throwBindingError(
                    'String has UTF-16 code units that do not fit in 8 bits',
                  );
                }
                HEAPU8[(ptr + i) >>> 0] = charCode;
              }
            } else {
              for (var i = 0; i < length; ++i) {
                HEAPU8[(ptr + i) >>> 0] = value[i];
              }
            }
          }
          if (destructors !== null) {
            destructors.push(_free, base);
          }
          return base;
        },
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: readPointer,
        // @ts-ignore
        destructorFunction(ptr) {
          _free(ptr);
        },
      });
    }

    const UTF16Decoder =
      typeof TextDecoder != 'undefined'
        ? new TextDecoder('utf-16le')
        : undefined;

    // @ts-ignore
    const UTF16ToString = (ptr, maxBytesToRead) => {
      assert(
        ptr % 2 == 0,
        'Pointer passed to UTF16ToString must be aligned to two bytes!',
      );
      let endPtr = ptr;
      // TextDecoder needs to know the byte length in advance, it doesn't stop on
      // null terminator by itself.
      // Also, use the length info to avoid running tiny strings through
      // TextDecoder, since .subarray() allocates garbage.
      let idx = endPtr >> 1;
      const maxIdx = idx + maxBytesToRead / 2;
      // If maxBytesToRead is not passed explicitly, it will be undefined, and this
      // will always evaluate to true. This saves on code size.
      while (!(idx >= maxIdx) && HEAPU16[idx >>> 0]) {
        ++idx;
      }
      endPtr = idx << 1;
      if (endPtr - ptr > 32 && UTF16Decoder) {
        return UTF16Decoder.decode(HEAPU8.subarray(ptr >>> 0, endPtr >>> 0));
      }
      // Fallback: decode without UTF16Decoder
      let str = '';
      // If maxBytesToRead is not passed explicitly, it will be undefined, and the
      // for-loop's condition will always evaluate to true. The loop is then
      // terminated on the first null char.
      for (let i = 0; !(i >= maxBytesToRead / 2); ++i) {
        const codeUnit = HEAP16[((ptr + i * 2) >>> 1) >>> 0];
        if (codeUnit == 0) {
          break;
        }
        // fromCharCode constructs a character from a UTF-16 code unit, so we can
        // pass the UTF16 string right through.
        // @ts-ignore
        str += String.fromCharCode(codeUnit);
      }
      return str;
    };

    // @ts-ignore
    const stringToUTF16 = (str, outPtr, maxBytesToWrite) => {
      assert(
        outPtr % 2 == 0,
        'Pointer passed to stringToUTF16 must be aligned to two bytes!',
      );
      assert(
        typeof maxBytesToWrite == 'number',
        'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!',
      );
      // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
      maxBytesToWrite ??= 2147483647;
      if (maxBytesToWrite < 2) {
        return 0;
      }
      maxBytesToWrite -= 2;
      // Null terminator.
      const startPtr = outPtr;
      const numCharsToWrite =
        maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
      for (let i = 0; i < numCharsToWrite; ++i) {
        // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
        const codeUnit = str.charCodeAt(i);
        // possibly a lead surrogate
        HEAP16[(outPtr >>> 1) >>> 0] = codeUnit;
        outPtr += 2;
      }
      // Null-terminate the pointer to the HEAP.
      HEAP16[(outPtr >>> 1) >>> 0] = 0;
      return outPtr - startPtr;
    };

    // @ts-ignore
    const lengthBytesUTF16 = str => str.length * 2;

    // @ts-ignore
    const UTF32ToString = (ptr, maxBytesToRead) => {
      assert(
        ptr % 4 == 0,
        'Pointer passed to UTF32ToString must be aligned to four bytes!',
      );
      let i = 0;
      let str = '';
      // If maxBytesToRead is not passed explicitly, it will be undefined, and this
      // will always evaluate to true. This saves on code size.
      while (!(i >= maxBytesToRead / 4)) {
        const utf32 = HEAP32[((ptr + i * 4) >>> 2) >>> 0];
        if (utf32 == 0) {
          break;
        }
        ++i;
        // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        // @ts-ignore
        if (utf32 >= 65536) {
          // @ts-ignore
          const ch = utf32 - 65536;
          str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
        } else {
          // @ts-ignore
          str += String.fromCharCode(utf32);
        }
      }
      return str;
    };

    // @ts-ignore
    const stringToUTF32 = (str, outPtr, maxBytesToWrite) => {
      outPtr >>>= 0;
      assert(
        outPtr % 4 == 0,
        'Pointer passed to stringToUTF32 must be aligned to four bytes!',
      );
      assert(
        typeof maxBytesToWrite == 'number',
        'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!',
      );
      // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
      maxBytesToWrite ??= 2147483647;
      if (maxBytesToWrite < 4) {
        return 0;
      }
      const startPtr = outPtr;
      const endPtr = startPtr + maxBytesToWrite - 4;
      for (let i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        let codeUnit = str.charCodeAt(i);
        // possibly a lead surrogate
        if (codeUnit >= 55296 && codeUnit <= 57343) {
          const trailSurrogate = str.charCodeAt(++i);
          codeUnit =
            (65536 + ((codeUnit & 1023) << 10)) | (trailSurrogate & 1023);
        }
        HEAP32[(outPtr >>> 2) >>> 0] = codeUnit;
        outPtr += 4;
        if (outPtr + 4 > endPtr) {
          break;
        }
      }
      // Null-terminate the pointer to the HEAP.
      HEAP32[(outPtr >>> 2) >>> 0] = 0;
      return outPtr - startPtr;
    };

    // @ts-ignore
    const lengthBytesUTF32 = (str) => {
      let len = 0;
      for (let i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        const codeUnit = str.charCodeAt(i);
        if (codeUnit >= 55296 && codeUnit <= 57343) {
          ++i;
        }
        // possibly a lead surrogate, so skip over the tail surrogate.
        len += 4;
      }
      return len;
    };

    // @ts-ignore
    const __embind_register_std_wstring = function (rawType, charSize, name) {
      rawType >>>= 0;
      charSize >>>= 0;
      name >>>= 0;
      name = readLatin1String(name);
      // @ts-ignore
      let decodeString, encodeString, readCharAt, lengthBytesUTF;
      if (charSize === 2) {
        decodeString = UTF16ToString;
        encodeString = stringToUTF16;
        lengthBytesUTF = lengthBytesUTF16;
        // @ts-ignore
        readCharAt = pointer => HEAPU16[(pointer >>> 1) >>> 0];
      } else if (charSize === 4) {
        decodeString = UTF32ToString;
        encodeString = stringToUTF32;
        lengthBytesUTF = lengthBytesUTF32;
        // @ts-ignore
        readCharAt = pointer => HEAPU32[(pointer >>> 2) >>> 0];
      }
      registerType(rawType, {
        name,
        // @ts-ignore
        fromWireType: (value) => {
          // Code mostly taken from _embind_register_std_string fromWireType
          const length = HEAPU32[(value >>> 2) >>> 0];
          let str;
          let decodeStartPtr = value + 4;
          // Looping here to support possible embedded '0' bytes
          // @ts-ignore
          for (let i = 0; i <= length; ++i) {
            const currentBytePtr = value + 4 + i * charSize;
            // @ts-ignore
            if (i == length || readCharAt(currentBytePtr) == 0) {
              const maxReadBytes = currentBytePtr - decodeStartPtr;
              // @ts-ignore
              const stringSegment = decodeString(decodeStartPtr, maxReadBytes);
              if (str === undefined) {
                str = stringSegment;
              } else {
                str += String.fromCharCode(0);
                str += stringSegment;
              }
              decodeStartPtr = currentBytePtr + charSize;
            }
          }
          _free(value);
          return str;
        },
        // @ts-ignore
        toWireType: (destructors, value) => {
          if (!(typeof value == 'string')) {
            throwBindingError(
              `Cannot pass non-string to C++ string type ${name}`,
            );
          }
          // assumes POINTER_SIZE alignment
          // @ts-ignore
          const length = lengthBytesUTF(value);
          const ptr = _malloc(4 + length + charSize);
          HEAPU32[(ptr >>> 2) >>> 0] = length / charSize;
          // @ts-ignore
          encodeString(value, ptr + 4, length + charSize);
          if (destructors !== null) {
            destructors.push(_free, ptr);
          }
          return ptr;
        },
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: readPointer,
        // @ts-ignore
        destructorFunction(ptr) {
          _free(ptr);
        },
      });
    };

    // @ts-ignore
    const __embind_register_void = function (rawType, name) {
      rawType >>>= 0;
      name >>>= 0;
      name = readLatin1String(name);
      registerType(rawType, {
        isVoid: true,
        // void return values can be optimized out sometimes
        name,
        argPackAdvance: 0,
        fromWireType: () => undefined,
        // TODO: assert if anything else is given?
        // @ts-ignore
        toWireType: (destructors, o) => undefined,
      });
    };

    const nowIsMonotonic = 1;

    const __emscripten_get_now_is_monotonic = () => nowIsMonotonic;

    // @ts-ignore
    const emval_returnValue = (returnType, destructorsRef, handle) => {
      // @ts-ignore
      const destructors = [];
      // @ts-ignore
      const result = returnType.toWireType(destructors, handle);
      if (destructors.length) {
        // void, primitives and any other types w/o destructors don't need to allocate a handle
        // @ts-ignore
        HEAPU32[(destructorsRef >>> 2) >>> 0] = Emval.toHandle(destructors);
      }
      return result;
    };

    // @ts-ignore
    function __emval_as(handle, returnType, destructorsRef) {
      handle >>>= 0;
      returnType >>>= 0;
      destructorsRef >>>= 0;
      handle = Emval.toValue(handle);
      returnType = requireRegisteredType(returnType, 'emval::as');
      return emval_returnValue(returnType, destructorsRef, handle);
    }

    // @ts-ignore
    const emval_methodCallers = [];

    // @ts-ignore
    function __emval_call(caller, handle, destructorsRef, args) {
      caller >>>= 0;
      handle >>>= 0;
      destructorsRef >>>= 0;
      args >>>= 0;
      // @ts-ignore
      caller = emval_methodCallers[caller];
      handle = Emval.toValue(handle);
      return caller(null, handle, destructorsRef, args);
    }

    const emval_symbols = {};

    // @ts-ignore
    const getStringOrSymbol = (address) => {
      // @ts-ignore
      const symbol = emval_symbols[address];
      if (symbol === undefined) {
        return readLatin1String(address);
      }
      return symbol;
    };

    // @ts-ignore
    function __emval_call_method(
      caller,
      objHandle,
      methodName,
      destructorsRef,
      args,
    ) {
      caller >>>= 0;
      objHandle >>>= 0;
      methodName >>>= 0;
      destructorsRef >>>= 0;
      args >>>= 0;
      // @ts-ignore
      caller = emval_methodCallers[caller];
      objHandle = Emval.toValue(objHandle);
      methodName = getStringOrSymbol(methodName);
      return caller(objHandle, objHandle[methodName], destructorsRef, args);
    }

    const emval_get_global = () => {
      if (typeof globalThis == 'object') {
        return globalThis;
      }
      return (function () {
        return Function;
      })()('return this')();
    };

    // @ts-ignore
    function __emval_get_global(name) {
      name >>>= 0;
      if (name === 0) {
        return Emval.toHandle(emval_get_global());
      } else {
        name = getStringOrSymbol(name);
        return Emval.toHandle(emval_get_global()[name]);
      }
    }

    // @ts-ignore
    const emval_addMethodCaller = (caller) => {
      const id = emval_methodCallers.length;
      emval_methodCallers.push(caller);
      return id;
    };

    // @ts-ignore
    const emval_lookupTypes = (argCount, argTypes) => {
      const a = new Array(argCount);
      for (let i = 0; i < argCount; ++i) {
        a[i] = requireRegisteredType(
          HEAPU32[((argTypes + i * 4) >>> 2) >>> 0],
          `parameter ${i}`,
        );
      }
      return a;
    };

    // @ts-ignore
    const reflectConstruct = Reflect.construct;

    // @ts-ignore
    function __emval_get_method_caller(argCount, argTypes, kind) {
      argTypes >>>= 0;
      const types = emval_lookupTypes(argCount, argTypes);
      const retType = types.shift();
      argCount--;
      // remove the shifted off return type
      let functionBody = `return function (obj, func, destructorsRef, args) {\n`;
      let offset = 0;
      const argsList = [];
      // 'obj?, arg0, arg1, arg2, ... , argN'
      if (kind === /* FUNCTION */ 0) {
        argsList.push('obj');
      }
      const params = ['retType'];
      const args = [retType];
      for (let i = 0; i < argCount; ++i) {
        argsList.push(`arg${i}`);
        params.push(`argType${i}`);
        args.push(types[i]);
        functionBody += `  var arg${i} = argType${i}.readValueFromPointer(args${offset ? `+${offset}` : ''});\n`;
        offset += types[i].argPackAdvance;
      }
      const invoker = kind === /* CONSTRUCTOR */ 1 ? 'new func' : 'func.call';
      functionBody += `  var rv = ${invoker}(${argsList.join(', ')});\n`;
      if (!retType.isVoid) {
        params.push('emval_returnValue');
        args.push(emval_returnValue);
        functionBody +=
          '  return emval_returnValue(retType, destructorsRef, rv);\n';
      }
      functionBody += '};\n';
      params.push(functionBody);
      const invokerFunction = newFunc(Function, params)(...args);
      const functionName = `methodCaller<(${types.map(t => t.name).join(', ')}) => ${retType.name}>`;
      return emval_addMethodCaller(
        createNamedFunction(functionName, invokerFunction),
      );
    }

    // @ts-ignore
    function __emval_get_property(handle, key) {
      handle >>>= 0;
      key >>>= 0;
      handle = Emval.toValue(handle);
      key = Emval.toValue(key);
      return Emval.toHandle(handle[key]);
    }

    // @ts-ignore
    function __emval_incref(handle) {
      handle >>>= 0;
      if (handle > 9) {
        // @ts-ignore
        emval_handles[handle + 1] += 1;
      }
    }

    // @ts-ignore
    function __emval_new_cstring(v) {
      v >>>= 0;
      return Emval.toHandle(getStringOrSymbol(v));
    }

    // @ts-ignore
    function __emval_run_destructors(handle) {
      handle >>>= 0;
      const destructors = Emval.toValue(handle);
      runDestructors(destructors);
      __emval_decref(handle);
    }

    // @ts-ignore
    function __emval_take_value(type, arg) {
      type >>>= 0;
      arg >>>= 0;
      type = requireRegisteredType(type, '_emval_take_value');
      const v = type.readValueFromPointer(arg);
      return Emval.toHandle(v);
    }

    // @ts-ignore
    const __tzset_js = function (timezone, daylight, std_name, dst_name) {
      timezone >>>= 0;
      daylight >>>= 0;
      std_name >>>= 0;
      dst_name >>>= 0;
      // TODO: Use (malleable) environment variables instead of system settings.
      const currentYear = new Date().getFullYear();
      const winter = new Date(currentYear, 0, 1);
      const summer = new Date(currentYear, 6, 1);
      const winterOffset = winter.getTimezoneOffset();
      const summerOffset = summer.getTimezoneOffset();
      // Local standard timezone offset. Local standard time is not adjusted for
      // daylight savings.  This code uses the fact that getTimezoneOffset returns
      // a greater value during Standard Time versus Daylight Saving Time (DST).
      // Thus it determines the expected output during Standard Time, and it
      // compares whether the output of the given date the same (Standard) or less
      // (DST).
      const stdTimezoneOffset = Math.max(winterOffset, summerOffset);
      // timezone is specified as seconds west of UTC ("The external variable
      // `timezone` shall be set to the difference, in seconds, between
      // Coordinated Universal Time (UTC) and local standard time."), the same
      // as returned by stdTimezoneOffset.
      // See http://pubs.opengroup.org/onlinepubs/009695399/functions/tzset.html
      HEAPU32[(timezone >>> 2) >>> 0] = stdTimezoneOffset * 60;
      HEAP32[(daylight >>> 2) >>> 0] = Number(winterOffset != summerOffset);
      // @ts-ignore
      const extractZone = (timezoneOffset) => {
        // Why inverse sign?
        // Read here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
        const sign = timezoneOffset >= 0 ? '-' : '+';
        const absOffset = Math.abs(timezoneOffset);
        const hours = String(Math.floor(absOffset / 60)).padStart(2, '0');
        const minutes = String(absOffset % 60).padStart(2, '0');
        return `UTC${sign}${hours}${minutes}`;
      };
      const winterName = extractZone(winterOffset);
      const summerName = extractZone(summerOffset);
      assert(winterName);
      assert(summerName);
      assert(
        lengthBytesUTF8(winterName) <= 16,
        `timezone name truncated to fit in TZNAME_MAX (${winterName})`,
      );
      assert(
        lengthBytesUTF8(summerName) <= 16,
        `timezone name truncated to fit in TZNAME_MAX (${summerName})`,
      );
      if (summerOffset < winterOffset) {
        // Northern hemisphere
        stringToUTF8(winterName, std_name, 17);
        stringToUTF8(summerName, dst_name, 17);
      } else {
        stringToUTF8(winterName, dst_name, 17);
        stringToUTF8(summerName, std_name, 17);
      }
    };

    const _emscripten_date_now = () => Date.now();

    let _emscripten_get_now;

    // Modern environment where performance.now() is supported:
    // N.B. a shorter form "_emscripten_get_now = performance.now;" is
    // unfortunately not allowed even in current browsers (e.g. FF Nightly 75).
    _emscripten_get_now = () => performance.now();

    const getHeapMax = () =>
      // Stay one Wasm page short of 4GB: while e.g. Chrome is able to allocate
      // full 4GB Wasm memories, the size will wrap back to 0 bytes in Wasm side
      // for any code that deals with heap sizes, which would require special
      // casing all heap size related code to treat 0 specially.
      4294901760;

    // @ts-ignore
    const growMemory = (size) => {
      // @ts-ignore
      const b = wasmMemory.buffer;
      const pages = (size - b.byteLength + 65535) / 65536;
      dbg(
        `growMemory: ${size} (+${size - b.byteLength} bytes / ${pages} pages)`,
      );
      try {
        // round size grow request up to wasm page size (fixed 64KB per spec)
        // @ts-ignore
        wasmMemory.grow(pages);
        // .grow() takes a delta compared to the previous size
        updateMemoryViews();
        return 1;
      } /* success */ catch (e) {
        err(
          `growMemory: Attempted to grow heap from ${b.byteLength} bytes to ${size} bytes, but got error: ${e}`,
        );
      }
    };

    // implicit 0 return to save code size (caller will cast "undefined" into 0
    // anyhow)
    // @ts-ignore
    function _emscripten_resize_heap(requestedSize) {
      requestedSize >>>= 0;
      const oldSize = HEAPU8.length;
      // With multithreaded builds, races can happen (another thread might increase the size
      // in between), so return a failure, and let the caller retry.
      assert(requestedSize > oldSize);
      // Memory resize rules:
      // 1.  Always increase heap size to at least the requested size, rounded up
      //     to next page multiple.
      // 2a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap
      //     geometrically: increase the heap size according to
      //     MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%), At most
      //     overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
      // 2b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap
      //     linearly: increase the heap size by at least
      //     MEMORY_GROWTH_LINEAR_STEP bytes.
      // 3.  Max size for the heap is capped at 2048MB-WASM_PAGE_SIZE, or by
      //     MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
      // 4.  If we were unable to allocate as much memory, it may be due to
      //     over-eager decision to excessively reserve due to (3) above.
      //     Hence if an allocation fails, cut down on the amount of excess
      //     growth, in an attempt to succeed to perform a smaller allocation.
      // A limit is set for how much we can grow. We should not exceed that
      // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
      const maxHeapSize = getHeapMax();
      if (requestedSize > maxHeapSize) {
        err(
          `Cannot enlarge memory, requested ${requestedSize} bytes, but the limit is ${maxHeapSize} bytes!`,
        );
        return false;
      }
      // @ts-ignore
      const alignUp = (x, multiple) =>
        x + ((multiple - (x % multiple)) % multiple);
      // Loop through potential heap size increases. If we attempt a too eager
      // reservation that fails, cut down on the attempted size and reserve a
      // smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
      for (let cutDown = 1; cutDown <= 4; cutDown *= 2) {
        let overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
        // ensure geometric growth
        // but limit overreserving (default to capping at +96MB overgrowth at most)
        overGrownHeapSize = Math.min(
          overGrownHeapSize,
          requestedSize + 100663296,
        );
        var newSize = Math.min(
          maxHeapSize,
          alignUp(Math.max(requestedSize, overGrownHeapSize), 65536),
        );
        const replacement = growMemory(newSize);
        if (replacement) {
          return true;
        }
      }
      // @ts-ignore
      err(
        `Failed to grow the heap from ${oldSize} bytes to ${newSize} bytes, not enough memory!`,
      );
      return false;
    }

    const ENV = {};

    const getExecutableName = () => thisProgram || './this.program';

    // @ts-ignore
    const getEnvStrings = () => {
      // @ts-ignore
      if (!getEnvStrings.strings) {
        // Default values.
        // Browser language detection #8751
        const lang = `${((typeof navigator == 'object' && navigator.languages && navigator.languages[0]) || 'C').replace('-', '_')}.UTF-8`;
        const env = {
          USER: 'web_user',
          LOGNAME: 'web_user',
          PATH: '/',
          PWD: '/',
          HOME: '/home/web_user',
          LANG: lang,
          _: getExecutableName(),
        };
        // Apply the user-provided values, if any.
        for (var x in ENV) {
          // x is a key in ENV; if ENV[x] is undefined, that means it was
          // explicitly set to be so. We allow user code to do that to
          // force variables with default values to remain unset.
          // @ts-ignore
          if (ENV[x] === undefined) {
            // @ts-ignore
            delete env[x];
          } else {
            // @ts-ignore
            env[x] = ENV[x];
          }
        }
        const strings = [];
        for (var x in env) {
          // @ts-ignore
          strings.push(`${x}=${env[x]}`);
        }
        // @ts-ignore
        getEnvStrings.strings = strings;
      }
      // @ts-ignore
      return getEnvStrings.strings;
    };

    // @ts-ignore
    const stringToAscii = (str, buffer) => {
      for (let i = 0; i < str.length; ++i) {
        assert(str.charCodeAt(i) === (str.charCodeAt(i) & 255));
        HEAP8[buffer++ >>> 0] = str.charCodeAt(i);
      }
      // Null-terminate the string
      HEAP8[buffer >>> 0] = 0;
    };

    // @ts-ignore
    const _environ_get = function (__environ, environ_buf) {
      __environ >>>= 0;
      environ_buf >>>= 0;
      let bufSize = 0;
      // @ts-ignore
      getEnvStrings().forEach((string, i) => {
        const ptr = environ_buf + bufSize;
        HEAPU32[((__environ + i * 4) >>> 2) >>> 0] = ptr;
        stringToAscii(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    };

    // @ts-ignore
    const _environ_sizes_get = function (penviron_count, penviron_buf_size) {
      penviron_count >>>= 0;
      penviron_buf_size >>>= 0;
      const strings = getEnvStrings();
      HEAPU32[(penviron_count >>> 2) >>> 0] = strings.length;
      let bufSize = 0;
      // @ts-ignore
      strings.forEach(string => (bufSize += string.length + 1));
      HEAPU32[(penviron_buf_size >>> 2) >>> 0] = bufSize;
      return 0;
    };

    var PATH = {
      // @ts-ignore
      isAbs: path => path.charAt(0) === '/',
      // @ts-ignore
      splitPath: (filename) => {
        const splitPathRe =
          /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?)?(\.[^./]*|))\/*$/;
        // @ts-ignore
        return splitPathRe.exec(filename).slice(1);
      },
      // @ts-ignore
      normalizeArray: (parts, allowAboveRoot) => {
        // if the path tries to go above the root, `up` ends up > 0
        let up = 0;
        for (let i = parts.length - 1; i >= 0; i--) {
          const last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },
      // @ts-ignore
      normalize: (path) => {
        const isAbsolute = PATH.isAbs(path);
        const trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        // @ts-ignore
        path = PATH.normalizeArray(
          path.split('/').filter(p => !!p),
          !isAbsolute,
        ).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },
      // @ts-ignore
      dirname: (path) => {
        const result = PATH.splitPath(path);
        const root = result[0];
        let dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        // @ts-ignore
        return root + dir;
      },
      // @ts-ignore
      basename: (path) => {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') {
          return '/';
        }
        path = PATH.normalize(path);
        path = path.replace(/\/$/, '');
        const lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) {
          return path;
        }
        return path.substr(lastSlash + 1);
      },
      // @ts-ignore
      join: (...paths) => PATH.normalize(paths.join('/')),
      // @ts-ignore
      join2: (l, r) => PATH.normalize(`${l}/${r}`),
    };

    // @ts-ignore
    const initRandomFill = () => {
      if (
        typeof crypto == 'object' &&
        typeof crypto.getRandomValues == 'function'
      ) {
        // for modern web browsers
        // @ts-ignore
        return view => crypto.getRandomValues(view);
      } else if (ENVIRONMENT_IS_NODE) {
        // for nodejs with or without crypto support included
        try {
          const crypto_module = require('node:crypto');
          const randomFillSync = crypto_module.randomFillSync;
          // @ts-ignore
          if (randomFillSync) {
            // nodejs with LTS crypto support
            // @ts-ignore
            return view => crypto_module.randomFillSync(view);
          }
          // very old nodejs with the original crypto API
          const randomBytes = crypto_module.randomBytes;
          // @ts-ignore
          return view => (
            view.set(randomBytes(view.byteLength)), // Return the original view to match modern native implementations.
            view
          );
        } catch (e) {}
      }
      // we couldn't find a proper implementation, as Math.random() is not suitable for /dev/random, see emscripten-core/emscripten/pull/7096
      abort(
        'no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };',
      );
    };

    // @ts-ignore
    let randomFill = view => (randomFill = initRandomFill())(view);

    var PATH_FS = {
      // @ts-ignore
      resolve: (...args) => {
        let resolvedPath = '';
        let resolvedAbsolute = false;
        for (let i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          const path = i >= 0 ? args[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path != 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return '';
          }
          // an invalid portion invalidates the whole thing
          resolvedPath = `${path}/${resolvedPath}`;
          resolvedAbsolute = PATH.isAbs(path);
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(
          resolvedPath.split('/').filter(p => !!p),
          !resolvedAbsolute,
        ).join('/');
        return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
      },
      // @ts-ignore
      relative: (from, to) => {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        // @ts-ignore
        function trim(arr) {
          let start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') {
              break;
            }
          }
          let end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') {
              break;
            }
          }
          if (start > end) {
            return [];
          }
          return arr.slice(start, end - start + 1);
        }
        const fromParts = trim(from.split('/'));
        const toParts = trim(to.split('/'));
        const length = Math.min(fromParts.length, toParts.length);
        let samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        let outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      },
    };

    // @ts-ignore
    let FS_stdin_getChar_buffer = [];

    /** @type {function(string, boolean=, number=)} */ function intArrayFromString(
      stringy,
      dontAddNull,
      length,
    ) {
      // @ts-ignore
      const len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
      const u8array = new Array(len);
      const numBytesWritten = stringToUTF8Array(
        stringy,
        u8array,
        0,
        u8array.length,
      );
      if (dontAddNull) {
        u8array.length = numBytesWritten;
      }
      return u8array;
    }

    const FS_stdin_getChar = () => {
      if (!FS_stdin_getChar_buffer.length) {
        let result = null;
        if (ENVIRONMENT_IS_NODE) {
          // we will read data by chunks of BUFSIZE
          const BUFSIZE = 256;
          const buf = Buffer.alloc(BUFSIZE);
          let bytesRead = 0;
          // For some reason we must suppress a closure warning here, even though
          // fd definitely exists on process.stdin, and is even the proper way to
          // get the fd of stdin,
          // https://github.com/nodejs/help/issues/2136#issuecomment-523649904
          // This started to happen after moving this logic out of library_tty.js,
          // so it is related to the surrounding code in some unclear manner.
          /** @suppress {missingProperties} */ const fd = process.stdin.fd;
          try {
            // @ts-ignore
            bytesRead = fs.readSync(fd, buf, 0, BUFSIZE);
          } catch (e) {
            // Cross-platform differences: on Windows, reading EOF throws an
            // exception, but on other OSes, reading EOF returns 0. Uniformize
            // behavior by treating the EOF exception to return 0.
            // @ts-ignore
            if (e.toString().includes('EOF')) {
              bytesRead = 0;
            } else {
              throw e;
            }
          }
          if (bytesRead > 0) {
            result = buf.slice(0, bytesRead).toString('utf-8');
          }
        } else if (
          typeof window != 'undefined' &&
          typeof window.prompt == 'function'
        ) {
          // Browser.
          result = window.prompt('Input: ');
          // returns null on cancel
          if (result !== null) {
            result += '\n';
          }
        } else {
        }
        if (!result) {
          return null;
        }
        FS_stdin_getChar_buffer = intArrayFromString(result, true);
      }
      // @ts-ignore
      return FS_stdin_getChar_buffer.shift();
    };

    var TTY = {
      ttys: [],
      init() {},
      // https://github.com/emscripten-core/emscripten/pull/1555
      // if (ENVIRONMENT_IS_NODE) {
      //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
      //   // device, it always assumes it's a TTY device. because of this, we're forcing
      //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
      //   // with text files until FS.init can be refactored.
      //   process.stdin.setEncoding('utf8');
      // }
      shutdown() {},
      // https://github.com/emscripten-core/emscripten/pull/1555
      // if (ENVIRONMENT_IS_NODE) {
      //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
      //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
      //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
      //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
      //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
      //   process.stdin.pause();
      // }
      // @ts-ignore
      register(dev, ops) {
        // @ts-ignore
        TTY.ttys[dev] = {
          input: [],
          output: [],
          ops,
        };
        FS.registerDevice(dev, TTY.stream_ops);
      },
      stream_ops: {
        // @ts-ignore
        open(stream) {
          const tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },
        // @ts-ignore
        close(stream) {
          // flush any pending line data
          stream.tty.ops.fsync(stream.tty);
        },
        // @ts-ignore
        fsync(stream) {
          stream.tty.ops.fsync(stream.tty);
        },
        // @ts-ignore
        read(stream, buffer, offset, length, pos) {
          /* ignored */ if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          let bytesRead = 0;
          for (let i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === undefined) {
              break;
            }
            bytesRead++;
            buffer[offset + i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },
        // @ts-ignore
        write(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        },
      },
      default_tty_ops: {
        // @ts-ignore
        get_char(tty) {
          return FS_stdin_getChar();
        },
        // @ts-ignore
        put_char(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) {
              tty.output.push(val);
            }
          }
        },
        // val == 0 would cut text output off in the middle.
        // @ts-ignore
        fsync(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        },
        // @ts-ignore
        ioctl_tcgets(tty) {
          // typical setting
          return {
            c_iflag: 25856,
            c_oflag: 5,
            c_cflag: 191,
            c_lflag: 35387,
            c_cc: [
              3,
              28,
              127,
              21,
              4,
              0,
              1,
              0,
              17,
              19,
              26,
              0,
              18,
              15,
              23,
              22,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
            ],
          };
        },
        // @ts-ignore
        ioctl_tcsets(tty, optional_actions, data) {
          // currently just ignore
          return 0;
        },
        // @ts-ignore
        ioctl_tiocgwinsz(tty) {
          return [24, 80];
        },
      },
      default_tty1_ops: {
        // @ts-ignore
        put_char(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) {
              tty.output.push(val);
            }
          }
        },
        // @ts-ignore
        fsync(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        },
      },
    };

    // @ts-ignore
    const zeroMemory = (address, size) => {
      HEAPU8.fill(0, address, address + size);
      return address;
    };

    // @ts-ignore
    const alignMemory = (size, alignment) => {
      assert(alignment, 'alignment argument is required');
      return Math.ceil(size / alignment) * alignment;
    };

    // @ts-ignore
    const mmapAlloc = (size) => {
      abort(
        'internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported',
      );
    };

    var MEMFS = {
      ops_table: null,
      // @ts-ignore
      mount(mount) {
        return MEMFS.createNode(null, '/', 16384 | 511, /* 0777 */ 0);
      },
      // @ts-ignore
      createNode(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(63);
        }
        // @ts-ignore
        MEMFS.ops_table ||= {
          dir: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr,
              lookup: MEMFS.node_ops.lookup,
              mknod: MEMFS.node_ops.mknod,
              rename: MEMFS.node_ops.rename,
              unlink: MEMFS.node_ops.unlink,
              rmdir: MEMFS.node_ops.rmdir,
              readdir: MEMFS.node_ops.readdir,
              symlink: MEMFS.node_ops.symlink,
            },
            stream: {
              llseek: MEMFS.stream_ops.llseek,
            },
          },
          file: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr,
            },
            stream: {
              llseek: MEMFS.stream_ops.llseek,
              read: MEMFS.stream_ops.read,
              write: MEMFS.stream_ops.write,
              allocate: MEMFS.stream_ops.allocate,
              mmap: MEMFS.stream_ops.mmap,
              msync: MEMFS.stream_ops.msync,
            },
          },
          link: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr,
              readlink: MEMFS.node_ops.readlink,
            },
            stream: {},
          },
          chrdev: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr,
            },
            stream: FS.chrdev_stream_ops,
          },
        };
        const node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          // @ts-ignore
          node.node_ops = MEMFS.ops_table.dir.node;
          // @ts-ignore
          node.stream_ops = MEMFS.ops_table.dir.stream;
          // @ts-ignore
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          // @ts-ignore
          node.node_ops = MEMFS.ops_table.file.node;
          // @ts-ignore
          node.stream_ops = MEMFS.ops_table.file.stream;
          // @ts-ignore
          node.usedBytes = 0;
          // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          // @ts-ignore
          node.contents = null;
        } else if (FS.isLink(node.mode)) {
          // @ts-ignore
          node.node_ops = MEMFS.ops_table.link.node;
          // @ts-ignore
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          // @ts-ignore
          node.node_ops = MEMFS.ops_table.chrdev.node;
          // @ts-ignore
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        // @ts-ignore
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
          // @ts-ignore
          parent.timestamp = node.timestamp;
        }
        return node;
      },
      // @ts-ignore
      getFileDataAsTypedArray(node) {
        if (!node.contents) {
          return new Uint8Array(0);
        }
        if (node.contents.subarray) {
          return node.contents.subarray(0, node.usedBytes);
        }
        // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },
      // @ts-ignore
      expandFileStorage(node, newCapacity) {
        const prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) {
          return;
        }
        // No need to expand, the storage was already large enough.
        // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
        // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
        // avoid overshooting the allocation cap by a very large margin.
        const CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(
          newCapacity,
          (prevCapacity *
          (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125)) >>>
          0,
        );
        if (prevCapacity != 0) {
          newCapacity = Math.max(newCapacity, 256);
        }
        // At minimum allocate 256b for each file when expanding.
        const oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity);
        // Allocate new storage.
        if (node.usedBytes > 0) {
          node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
        }
      },
      // Copy old data over to the new storage.
      // @ts-ignore
      resizeFileStorage(node, newSize) {
        if (node.usedBytes == newSize) {
          return;
        }
        if (newSize == 0) {
          node.contents = null;
          // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
        } else {
          const oldContents = node.contents;
          node.contents = new Uint8Array(newSize);
          // Allocate new storage.
          if (oldContents) {
            node.contents.set(
              oldContents.subarray(0, Math.min(newSize, node.usedBytes)),
            );
          }
          // Copy old data over to the new storage.
          node.usedBytes = newSize;
        }
      },
      node_ops: {
        // @ts-ignore
        getattr(node) {
          const attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },
        // @ts-ignore
        setattr(node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },
        // @ts-ignore
        lookup(parent, name) {
          // @ts-ignore
          throw FS.genericErrors[44];
        },
        // @ts-ignore
        mknod(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },
        // @ts-ignore
        rename(old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            let new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {}
            if (new_node) {
              // @ts-ignore
              for (const i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.parent.timestamp = Date.now();
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          new_dir.timestamp = old_node.parent.timestamp;
        },
        // @ts-ignore
        unlink(parent, name) {
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },
        // @ts-ignore
        rmdir(parent, name) {
          const node = FS.lookupNode(parent, name);
          // @ts-ignore
          for (const i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },
        // @ts-ignore
        readdir(node) {
          const entries = ['.', '..'];
          for (const key of Object.keys(node.contents)) {
            entries.push(key);
          }
          return entries;
        },
        // @ts-ignore
        symlink(parent, newname, oldpath) {
          const node = MEMFS.createNode(
            parent,
            newname,
            511 | /* 0777 */ 40960,
            0,
          );
          // @ts-ignore
          node.link = oldpath;
          return node;
        },
        // @ts-ignore
        readlink(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        },
      },
      stream_ops: {
        // @ts-ignore
        read(stream, buffer, offset, length, position) {
          const contents = stream.node.contents;
          if (position >= stream.node.usedBytes) {
            return 0;
          }
          const size = Math.min(stream.node.usedBytes - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) {
            // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (let i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          }
          return size;
        },
        // @ts-ignore
        write(stream, buffer, offset, length, position, canOwn) {
          // The data buffer should be a typed array view
          assert(!(buffer instanceof ArrayBuffer));
          // If the buffer is located in main memory (HEAP), and if
          // memory can grow, we can't hold on to references of the
          // memory buffer, as they may get invalidated. That means we
          // need to do copy its contents.
          if (buffer.buffer === HEAP8.buffer) {
            canOwn = false;
          }
          if (!length) {
            return 0;
          }
          const node = stream.node;
          node.timestamp = Date.now();
          if (buffer.subarray && (!node.contents || node.contents.subarray)) {
            // This write is from a typed array to a typed array?
            if (canOwn) {
              assert(
                position === 0,
                'canOwn must imply no weird position inside the file',
              );
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) {
              // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) {
              // Writing to an already allocated and used subrange of the file?
              node.contents.set(
                buffer.subarray(offset, offset + length),
                position,
              );
              return length;
            }
          }
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position + length);
          if (node.contents.subarray && buffer.subarray) {
            // Use typed array write which is available.
            node.contents.set(
              buffer.subarray(offset, offset + length),
              position,
            );
          } else {
            for (let i = 0; i < length; i++) {
              node.contents[position + i] = buffer[offset + i];
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },
        // @ts-ignore
        llseek(stream, offset, whence) {
          let position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },
        // @ts-ignore
        allocate(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(
            stream.node.usedBytes,
            offset + length,
          );
        },
        // @ts-ignore
        mmap(stream, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          let ptr;
          let allocated;
          let contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if (!(flags & 2) && contents.buffer === HEAP8.buffer) {
            // We can't emulate MAP_SHARED when the file is not backed by the
            // buffer we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(
                  contents,
                  position,
                  position + length,
                );
              }
            }
            allocated = true;
            ptr = mmapAlloc(length);
            // @ts-ignore
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            HEAP8.set(contents, ptr >>> 0);
          }
          return {
            ptr,
            allocated,
          };
        },
        // @ts-ignore
        msync(stream, buffer, offset, length, mmapFlags) {
          MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        },
      },
    };

    // @ts-ignore
    /** @param {boolean=} noRunDep */ const asyncLoad = (
      url,
      onload,
      onerror,
      noRunDep,
    ) => {
      const dep = !noRunDep ? getUniqueRunDependency(`al ${url}`) : '';
      // @ts-ignore
      readAsync(url).then(
        (arrayBuffer) => {
          assert(
            arrayBuffer,
            `Loading data file "${url}" failed (no arrayBuffer).`,
          );
          onload(new Uint8Array(arrayBuffer));
          if (dep) {
            removeRunDependency(dep);
          }
          // @ts-ignore
        },
        (err) => {
          if (onerror) {
            onerror();
          } else {
            throw `Loading data file "${url}" failed.`;
          }
        },
      );
      if (dep) {
        addRunDependency(dep);
      }
    };

    // @ts-ignore
    const FS_createDataFile = (
      parent,
      name,
      fileData,
      canRead,
      canWrite,
      canOwn,
    ) => {
      FS.createDataFile(parent, name, fileData, canRead, canWrite, canOwn);
    };

    // @ts-ignore
    const preloadPlugins = Module.preloadPlugins || [];

    // @ts-ignore
    const FS_handledByPreloadPlugin = (
      byteArray,
      fullname,
      finish,
      onerror,
    ) => {
      // Ensure plugins are ready.
      // @ts-ignore
      if (typeof Browser != 'undefined') {
        // @ts-ignore
        Browser.init();
      }
      let handled = false;
      // @ts-ignore
      preloadPlugins.forEach((plugin) => {
        if (handled) {
          return;
        }
        if (plugin.canHandle(fullname)) {
          plugin.handle(byteArray, fullname, finish, onerror);
          handled = true;
        }
      });
      return handled;
    };

    // @ts-ignore
    const FS_createPreloadedFile = (
      parent,
      name,
      url,
      canRead,
      canWrite,
      onload,
      onerror,
      dontCreateFile,
      canOwn,
      preFinish,
    ) => {
      // TODO we should allow people to just pass in a complete filename instead
      // of parent and name being that we just join them anyways
      const fullname = name
        ? PATH_FS.resolve(PATH.join2(parent, name))
        : parent;
      const dep = getUniqueRunDependency(`cp ${fullname}`);
      // might have several active requests for the same fullname
      // @ts-ignore
      function processData(byteArray) {
        // @ts-ignore
        function finish(byteArray) {
          preFinish?.();
          if (!dontCreateFile) {
            FS_createDataFile(
              parent,
              name,
              byteArray,
              canRead,
              canWrite,
              canOwn,
            );
          }
          onload?.();
          removeRunDependency(dep);
        }
        if (
          FS_handledByPreloadPlugin(byteArray, fullname, finish, () => {
            onerror?.();
            removeRunDependency(dep);
          })
        ) {
          return;
        }
        finish(byteArray);
      }
      addRunDependency(dep);
      if (typeof url == 'string') {
        asyncLoad(url, processData, onerror);
      } else {
        processData(url);
      }
    };

    // @ts-ignore
    const FS_modeStringToFlags = (str) => {
      const flagModes = {
        'r': 0,
        'r+': 2,
        'w': 512 | 64 | 1,
        'w+': 512 | 64 | 2,
        'a': 1024 | 64 | 1,
        'a+': 1024 | 64 | 2,
      };
      // @ts-ignore
      const flags = flagModes[str];
      if (typeof flags == 'undefined') {
        throw new TypeError(`Unknown file open mode: ${str}`);
      }
      return flags;
    };

    // @ts-ignore
    const FS_getMode = (canRead, canWrite) => {
      let mode = 0;
      if (canRead) {
        mode |= 292 | 73;
      }
      if (canWrite) {
        mode |= 146;
      }
      return mode;
    };

    // @ts-ignore
    const strError = errno => UTF8ToString(_strerror(errno));

    const ERRNO_CODES = {
      EPERM: 63,
      ENOENT: 44,
      ESRCH: 71,
      EINTR: 27,
      EIO: 29,
      ENXIO: 60,
      E2BIG: 1,
      ENOEXEC: 45,
      EBADF: 8,
      ECHILD: 12,
      EAGAIN: 6,
      EWOULDBLOCK: 6,
      ENOMEM: 48,
      EACCES: 2,
      EFAULT: 21,
      ENOTBLK: 105,
      EBUSY: 10,
      EEXIST: 20,
      EXDEV: 75,
      ENODEV: 43,
      ENOTDIR: 54,
      EISDIR: 31,
      EINVAL: 28,
      ENFILE: 41,
      EMFILE: 33,
      ENOTTY: 59,
      ETXTBSY: 74,
      EFBIG: 22,
      ENOSPC: 51,
      ESPIPE: 70,
      EROFS: 69,
      EMLINK: 34,
      EPIPE: 64,
      EDOM: 18,
      ERANGE: 68,
      ENOMSG: 49,
      EIDRM: 24,
      ECHRNG: 106,
      EL2NSYNC: 156,
      EL3HLT: 107,
      EL3RST: 108,
      ELNRNG: 109,
      EUNATCH: 110,
      ENOCSI: 111,
      EL2HLT: 112,
      EDEADLK: 16,
      ENOLCK: 46,
      EBADE: 113,
      EBADR: 114,
      EXFULL: 115,
      ENOANO: 104,
      EBADRQC: 103,
      EBADSLT: 102,
      EDEADLOCK: 16,
      EBFONT: 101,
      ENOSTR: 100,
      ENODATA: 116,
      ETIME: 117,
      ENOSR: 118,
      ENONET: 119,
      ENOPKG: 120,
      EREMOTE: 121,
      ENOLINK: 47,
      EADV: 122,
      ESRMNT: 123,
      ECOMM: 124,
      EPROTO: 65,
      EMULTIHOP: 36,
      EDOTDOT: 125,
      EBADMSG: 9,
      ENOTUNIQ: 126,
      EBADFD: 127,
      EREMCHG: 128,
      ELIBACC: 129,
      ELIBBAD: 130,
      ELIBSCN: 131,
      ELIBMAX: 132,
      ELIBEXEC: 133,
      ENOSYS: 52,
      ENOTEMPTY: 55,
      ENAMETOOLONG: 37,
      ELOOP: 32,
      EOPNOTSUPP: 138,
      EPFNOSUPPORT: 139,
      ECONNRESET: 15,
      ENOBUFS: 42,
      EAFNOSUPPORT: 5,
      EPROTOTYPE: 67,
      ENOTSOCK: 57,
      ENOPROTOOPT: 50,
      ESHUTDOWN: 140,
      ECONNREFUSED: 14,
      EADDRINUSE: 3,
      ECONNABORTED: 13,
      ENETUNREACH: 40,
      ENETDOWN: 38,
      ETIMEDOUT: 73,
      EHOSTDOWN: 142,
      EHOSTUNREACH: 23,
      EINPROGRESS: 26,
      EALREADY: 7,
      EDESTADDRREQ: 17,
      EMSGSIZE: 35,
      EPROTONOSUPPORT: 66,
      ESOCKTNOSUPPORT: 137,
      EADDRNOTAVAIL: 4,
      ENETRESET: 39,
      EISCONN: 30,
      ENOTCONN: 53,
      ETOOMANYREFS: 141,
      EUSERS: 136,
      EDQUOT: 19,
      ESTALE: 72,
      ENOTSUP: 138,
      ENOMEDIUM: 148,
      EILSEQ: 25,
      EOVERFLOW: 61,
      ECANCELED: 11,
      ENOTRECOVERABLE: 56,
      EOWNERDEAD: 62,
      ESTRPIPE: 135,
    };

    var FS = {
      root: null,
      mounts: [],
      devices: {},
      streams: [],
      nextInode: 1,
      nameTable: null,
      currentPath: '/',
      initialized: false,
      ignorePermissions: true,
      ErrnoError: class extends Error {
        // We set the `name` property to be able to identify `FS.ErrnoError`
        // - the `name` is a standard ECMA-262 property of error objects. Kind of good to have it anyway.
        // - when using PROXYFS, an error can come from an underlying FS
        // as different FS objects have their own FS.ErrnoError each,
        // the test `err instanceof FS.ErrnoError` won't detect an error coming from another filesystem, causing bugs.
        // we'll use the reliable test `err.name == "ErrnoError"` instead
        // @ts-ignore
        constructor(errno) {
          super(runtimeInitialized ? strError(errno) : '');
          // TODO(sbc): Use the inline member declaration syntax once we
          // support it in acorn and closure.
          this.name = 'ErrnoError';
          this.errno = errno;
          for (const key in ERRNO_CODES) {
            // @ts-ignore
            if (ERRNO_CODES[key] === errno) {
              this.code = key;
              break;
            }
          }
        }
      },
      genericErrors: {},
      filesystems: null,
      syncFSRequests: 0,
      FSStream: class {
        constructor() {
          // TODO(https://github.com/emscripten-core/emscripten/issues/21414):
          // Use inline field declarations.
          this.shared = {};
        }

        // @ts-ignore
        get object() {
          return this.node;
        }

        set object(val) {
          // @ts-ignore
          this.node = val;
        }

        get isRead() {
          return (this.flags & 2097155) !== 1;
        }

        get isWrite() {
          return (this.flags & 2097155) !== 0;
        }

        get isAppend() {
          return this.flags & 1024;
        }

        get flags() {
          // @ts-ignore
          return this.shared.flags;
        }

        set flags(val) {
          // @ts-ignore
          this.shared.flags = val;
        }

        get position() {
          // @ts-ignore
          return this.shared.position;
        }

        set position(val) {
          // @ts-ignore
          this.shared.position = val;
        }
      },
      FSNode: class {
        // @ts-ignore
        constructor(parent, name, mode, rdev) {
          if (!parent) {
            parent = this;
          }
          // root node sets parent to itself
          this.parent = parent;
          this.mount = parent.mount;
          this.mounted = null;
          this.id = FS.nextInode++;
          this.name = name;
          this.mode = mode;
          this.node_ops = {};
          this.stream_ops = {};
          this.rdev = rdev;
          this.readMode = 292 | /* 292 */ 73;
          /* 73 */ this.writeMode = 146;
        }

        /* 146 */ get read() {
          return (this.mode & this.readMode) === this.readMode;
        }

        set read(val) {
          val ? (this.mode |= this.readMode) : (this.mode &= ~this.readMode);
        }

        get write() {
          return (this.mode & this.writeMode) === this.writeMode;
        }

        set write(val) {
          val ? (this.mode |= this.writeMode) : (this.mode &= ~this.writeMode);
        }

        get isFolder() {
          return FS.isDir(this.mode);
        }

        get isDevice() {
          return FS.isChrdev(this.mode);
        }
      },
      // @ts-ignore
      lookupPath(path, opts = {}) {
        path = PATH_FS.resolve(path);
        if (!path) {
          return {
            path: '',
            node: null,
          };
        }
        const defaults = {
          follow_mount: true,
          recurse_count: 0,
        };
        opts = Object.assign(defaults, opts);
        // @ts-ignore
        if (opts.recurse_count > 8) {
          // max recursive lookup of 8
          throw new FS.ErrnoError(32);
        }
        // split the absolute path
        // @ts-ignore
        const parts = path.split('/').filter(p => !!p);
        // start at the root
        let current = FS.root;
        let current_path = '/';
        for (let i = 0; i < parts.length; i++) {
          const islast = i === parts.length - 1;
          // @ts-ignore
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            // @ts-ignore
            if (!islast || (islast && opts.follow_mount)) {
              // @ts-ignore
              current = current.mounted.root;
            }
          }
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          // @ts-ignore
          if (!islast || opts.follow) {
            let count = 0;
            // @ts-ignore
            while (FS.isLink(current.mode)) {
              const link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
              const lookup = FS.lookupPath(current_path, {
                // @ts-ignore
                recurse_count: opts.recurse_count + 1,
              });
              current = lookup.node;
              if (count++ > 40) {
                // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
        return {
          path: current_path,
          node: current,
        };
      },
      // @ts-ignore
      getPath(node) {
        let path;
        while (true) {
          if (FS.isRoot(node)) {
            const mount = node.mount.mountpoint;
            if (!path) {
              return mount;
            }
            return mount[mount.length - 1] !== '/'
              ? `${mount}/${path}`
              : mount + path;
          }
          path = path ? `${node.name}/${path}` : node.name;
          node = node.parent;
        }
      },
      // @ts-ignore
      hashName(parentid, name) {
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        // @ts-ignore
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },
      // @ts-ignore
      hashAddNode(node) {
        const hash = FS.hashName(node.parent.id, node.name);
        // @ts-ignore
        node.name_next = FS.nameTable[hash];
        // @ts-ignore
        FS.nameTable[hash] = node;
      },
      // @ts-ignore
      hashRemoveNode(node) {
        const hash = FS.hashName(node.parent.id, node.name);
        // @ts-ignore
        if (FS.nameTable[hash] === node) {
          // @ts-ignore
          FS.nameTable[hash] = node.name_next;
        } else {
          // @ts-ignore
          let current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },
      // @ts-ignore
      lookupNode(parent, name) {
        const errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        const hash = FS.hashName(parent.id, name);
        // @ts-ignore
        for (let node = FS.nameTable[hash]; node; node = node.name_next) {
          const nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },
      // @ts-ignore
      createNode(parent, name, mode, rdev) {
        assert(typeof parent == 'object');
        const node = new FS.FSNode(parent, name, mode, rdev);
        FS.hashAddNode(node);
        return node;
      },
      // @ts-ignore
      destroyNode(node) {
        FS.hashRemoveNode(node);
      },
      // @ts-ignore
      isRoot(node) {
        return node === node.parent;
      },
      // @ts-ignore
      isMountpoint(node) {
        return !!node.mounted;
      },
      // @ts-ignore
      isFile(mode) {
        return (mode & 61440) === 32768;
      },
      // @ts-ignore
      isDir(mode) {
        return (mode & 61440) === 16384;
      },
      // @ts-ignore
      isLink(mode) {
        return (mode & 61440) === 40960;
      },
      // @ts-ignore
      isChrdev(mode) {
        return (mode & 61440) === 8192;
      },
      // @ts-ignore
      isBlkdev(mode) {
        return (mode & 61440) === 24576;
      },
      // @ts-ignore
      isFIFO(mode) {
        return (mode & 61440) === 4096;
      },
      // @ts-ignore
      isSocket(mode) {
        return (mode & 49152) === 49152;
      },
      // @ts-ignore
      flagsToPermissionString(flag) {
        let perms = ['r', 'w', 'rw'][flag & 3];
        if (flag & 512) {
          perms += 'w';
        }
        return perms;
      },
      // @ts-ignore
      nodePermissions(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.includes('r') && !(node.mode & 292)) {
          return 2;
        } else if (perms.includes('w') && !(node.mode & 146)) {
          return 2;
        } else if (perms.includes('x') && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },
      // @ts-ignore
      mayLookup(dir) {
        if (!FS.isDir(dir.mode)) {
          return 54;
        }
        const errCode = FS.nodePermissions(dir, 'x');
        if (errCode) {
          return errCode;
        }
        if (!dir.node_ops.lookup) {
          return 2;
        }
        return 0;
      },
      // @ts-ignore
      mayCreate(dir, name) {
        try {
          // @ts-ignore
          const node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {}
        return FS.nodePermissions(dir, 'wx');
      },
      // @ts-ignore
      mayDelete(dir, name, isdir) {
        let node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          // @ts-ignore
          return e.errno;
        }
        const errCode = FS.nodePermissions(dir, 'wx');
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },
      // @ts-ignore
      mayOpen(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (
            FS.flagsToPermissionString(flags) !== 'r' || // opening for write
            flags & 512
          ) {
            // TODO: check for O_SEARCH? (== search for dir only)
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },
      MAX_OPEN_FDS: 4096,
      nextfd() {
        for (let fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },
      // @ts-ignore
      getStreamChecked(fd) {
        const stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        return stream;
      },
      // @ts-ignore
      getStream: fd => FS.streams[fd],
      // @ts-ignore
      createStream(stream, fd = -1) {
        assert(fd >= -1);
        // clone it, so we can return an instance of FSStream
        stream = Object.assign(new FS.FSStream(), stream);
        if (fd == -1) {
          fd = FS.nextfd();
        }
        stream.fd = fd;
        // @ts-ignore
        FS.streams[fd] = stream;
        return stream;
      },
      // @ts-ignore
      closeStream(fd) {
        // @ts-ignore
        FS.streams[fd] = null;
      },
      // @ts-ignore
      dupStream(origStream, fd = -1) {
        const stream = FS.createStream(origStream, fd);
        stream.stream_ops?.dup?.(stream);
        return stream;
      },
      chrdev_stream_ops: {
        // @ts-ignore
        open(stream) {
          const device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          stream.stream_ops.open?.(stream);
        },
        llseek() {
          throw new FS.ErrnoError(70);
        },
      },
      // @ts-ignore
      major: dev => dev >> 8,
      // @ts-ignore
      minor: dev => dev & 255,
      // @ts-ignore
      makedev: (ma, mi) => (ma << 8) | mi,
      // @ts-ignore
      registerDevice(dev, ops) {
        // @ts-ignore
        FS.devices[dev] = {
          stream_ops: ops,
        };
      },
      // @ts-ignore
      getDevice: dev => FS.devices[dev],
      // @ts-ignore
      getMounts(mount) {
        const mounts = [];
        const check = [mount];
        while (check.length) {
          const m = check.pop();
          mounts.push(m);
          check.push(...m.mounts);
        }
        return mounts;
      },
      // @ts-ignore
      syncfs(populate, callback) {
        if (typeof populate == 'function') {
          callback = populate;
          populate = false;
        }
        FS.syncFSRequests++;
        if (FS.syncFSRequests > 1) {
          err(
            `warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`,
          );
        }
        // @ts-ignore
        const mounts = FS.getMounts(FS.root.mount);
        let completed = 0;
        // @ts-ignore
        function doCallback(errCode) {
          assert(FS.syncFSRequests > 0);
          FS.syncFSRequests--;
          return callback(errCode);
        }
        // @ts-ignore
        function done(errCode) {
          if (errCode) {
            // @ts-ignore
            if (!done.errored) {
              // @ts-ignore
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        }
        // sync all mounts
        mounts.forEach((mount) => {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },
      // @ts-ignore
      mount(type, opts, mountpoint) {
        if (typeof type == 'string') {
          // The filesystem was not included, and instead we have an error
          // message stored in the variable.
          throw type;
        }
        const root = mountpoint === '/';
        const pseudo = !mountpoint;
        let node;
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          const lookup = FS.lookupPath(mountpoint, {
            follow_mount: false,
          });
          mountpoint = lookup.path;
          // use the absolute path
          node = lookup.node;
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
          // @ts-ignore
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
        const mount = {
          type,
          opts,
          mountpoint,
          mounts: [],
        };
        // create a root node for the fs
        const mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        // @ts-ignore
        mount.root = mountRoot;
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          // @ts-ignore
          node.mounted = mount;
          // add the new mount to the current mount's children
          // @ts-ignore
          if (node.mount) {
            // @ts-ignore
            node.mount.mounts.push(mount);
          }
        }
        return mountRoot;
      },
      // @ts-ignore
      unmount(mountpoint) {
        const lookup = FS.lookupPath(mountpoint, {
          follow_mount: false,
        });
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
        // destroy the nodes for this mount, and all its child mounts
        const node = lookup.node;
        // @ts-ignore
        const mount = node.mounted;
        const mounts = FS.getMounts(mount);
        // @ts-ignore
        Object.keys(FS.nameTable).forEach((hash) => {
          // @ts-ignore
          let current = FS.nameTable[hash];
          while (current) {
            const next = current.name_next;
            if (mounts.includes(current.mount)) {
              FS.destroyNode(current);
            }
            current = next;
          }
        });
        // no longer a mountpoint
        // @ts-ignore
        node.mounted = null;
        // remove this mount from the child mounts
        // @ts-ignore
        const idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        // @ts-ignore
        node.mount.mounts.splice(idx, 1);
      },
      // @ts-ignore
      lookup(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },
      // @ts-ignore
      mknod(path, mode, dev) {
        const lookup = FS.lookupPath(path, {
          parent: true,
        });
        const parent = lookup.node;
        const name = PATH.basename(path);
        if (!name || name === '.' || name === '..') {
          throw new FS.ErrnoError(28);
        }
        const errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // @ts-ignore
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        // @ts-ignore
        return parent.node_ops.mknod(parent, name, mode, dev);
      },
      // @ts-ignore
      create(path, mode) {
        mode = mode !== undefined ? mode : 438;
        /* 0666 */ mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },
      // @ts-ignore
      mkdir(path, mode) {
        mode = mode !== undefined ? mode : 511;
        /* 0777 */ mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },
      // @ts-ignore
      mkdirTree(path, mode) {
        const dirs = path.split('/');
        let d = '';
        for (let i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) {
            continue;
          }
          d += `/${dirs[i]}`;
          try {
            FS.mkdir(d, mode);
          } catch (e) {
            // @ts-ignore
            if (e.errno != 20) {
              throw e;
            }
          }
        }
      },
      // @ts-ignore
      mkdev(path, mode, dev) {
        if (typeof dev == 'undefined') {
          dev = mode;
          mode = 438;
        }
        /* 0666 */ mode |= 8192;
        return FS.mknod(path, mode, dev);
      },
      // @ts-ignore
      symlink(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        const lookup = FS.lookupPath(newpath, {
          parent: true,
        });
        const parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        const newname = PATH.basename(newpath);
        const errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // @ts-ignore
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        // @ts-ignore
        return parent.node_ops.symlink(parent, newname, oldpath);
      },
      // @ts-ignore
      rename(old_path, new_path) {
        const old_dirname = PATH.dirname(old_path);
        const new_dirname = PATH.dirname(new_path);
        const old_name = PATH.basename(old_path);
        const new_name = PATH.basename(new_path);
        // parents must exist
        let lookup, old_dir, new_dir;
        // let the errors from non existent directories percolate up
        lookup = FS.lookupPath(old_path, {
          parent: true,
        });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, {
          parent: true,
        });
        new_dir = lookup.node;
        if (!old_dir || !new_dir) {
          throw new FS.ErrnoError(44);
        }
        // need to be part of the same mount
        // @ts-ignore
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        // source must exist
        const old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        let relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        // new path should not be an ancestor of the old path
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        // see if the new path already exists
        let new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {}
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        const isdir = FS.isDir(old_node.mode);
        let errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        errCode = new_node
          ? FS.mayDelete(new_dir, new_name, isdir)
          : FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // @ts-ignore
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (
          FS.isMountpoint(old_node) ||
          (new_node && FS.isMountpoint(new_node))
        ) {
          throw new FS.ErrnoError(10);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          // @ts-ignore
          old_dir.node_ops.rename(old_node, new_dir, new_name);
          // update old node (we do this here to avoid each backend
          // needing to)
          old_node.parent = new_dir;
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
      },
      // @ts-ignore
      rmdir(path) {
        const lookup = FS.lookupPath(path, {
          parent: true,
        });
        const parent = lookup.node;
        const name = PATH.basename(path);
        const node = FS.lookupNode(parent, name);
        const errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // @ts-ignore
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        // @ts-ignore
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
      },
      // @ts-ignore
      readdir(path) {
        const lookup = FS.lookupPath(path, {
          follow: true,
        });
        const node = lookup.node;
        // @ts-ignore
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        // @ts-ignore
        return node.node_ops.readdir(node);
      },
      // @ts-ignore
      unlink(path) {
        const lookup = FS.lookupPath(path, {
          parent: true,
        });
        const parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        const name = PATH.basename(path);
        const node = FS.lookupNode(parent, name);
        const errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(errCode);
        }
        // @ts-ignore
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        // @ts-ignore
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
      },
      // @ts-ignore
      readlink(path) {
        const lookup = FS.lookupPath(path);
        const link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        // @ts-ignore
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        // @ts-ignore
        return PATH_FS.resolve(
          FS.getPath(link.parent),
          link.node_ops.readlink(link),
        );
      },
      // @ts-ignore
      stat(path, dontFollow) {
        const lookup = FS.lookupPath(path, {
          follow: !dontFollow,
        });
        const node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // @ts-ignore
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        // @ts-ignore
        return node.node_ops.getattr(node);
      },
      // @ts-ignore
      lstat(path) {
        return FS.stat(path, true);
      },
      // @ts-ignore
      chmod(path, mode, dontFollow) {
        let node;
        if (typeof path == 'string') {
          const lookup = FS.lookupPath(path, {
            follow: !dontFollow,
          });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now(),
        });
      },
      // @ts-ignore
      lchmod(path, mode) {
        FS.chmod(path, mode, true);
      },
      // @ts-ignore
      fchmod(fd, mode) {
        const stream = FS.getStreamChecked(fd);
        // @ts-ignore
        FS.chmod(stream.node, mode);
      },
      // @ts-ignore
      chown(path, uid, gid, dontFollow) {
        let node;
        if (typeof path == 'string') {
          const lookup = FS.lookupPath(path, {
            follow: !dontFollow,
          });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now(),
        });
      },
      // we ignore the uid / gid for now
      // @ts-ignore
      lchown(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },
      // @ts-ignore
      fchown(fd, uid, gid) {
        const stream = FS.getStreamChecked(fd);
        // @ts-ignore
        FS.chown(stream.node, uid, gid);
      },
      // @ts-ignore
      truncate(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        let node;
        if (typeof path == 'string') {
          const lookup = FS.lookupPath(path, {
            follow: true,
          });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        const errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now(),
        });
      },
      // @ts-ignore
      ftruncate(fd, len) {
        const stream = FS.getStreamChecked(fd);
        // @ts-ignore
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        // @ts-ignore
        FS.truncate(stream.node, len);
      },
      // @ts-ignore
      utime(path, atime, mtime) {
        const lookup = FS.lookupPath(path, {
          follow: true,
        });
        const node = lookup.node;
        // @ts-ignore
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime),
        });
      },
      // @ts-ignore
      open(path, flags, mode) {
        if (path === '') {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags == 'string' ? FS_modeStringToFlags(flags) : flags;
        if (flags & 64) {
          mode = typeof mode == 'undefined' ? 438 : /* 0666 */ mode;
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        let node;
        if (typeof path == 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            const lookup = FS.lookupPath(path, {
              follow: !(flags & 131072),
            });
            node = lookup.node;
          } catch (e) {}
        }
        // perhaps we need to create the node
        let created = false;
        if (flags & 64) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if (flags & 128) {
              throw new FS.ErrnoError(20);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if (flags & 65536 && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          const errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // do truncation if necessary
        if (flags & 512 && !created) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512 | 131072);
        // register the stream with the filesystem
        const stream = FS.createStream({
          node,
          path: FS.getPath(node),
          // we want the absolute path to the node
          flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false,
        });
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        // @ts-ignore
        if (Module.logReadFiles && !(flags & 1)) {
          // @ts-ignore
          if (!FS.readFiles) {
            // @ts-ignore
            FS.readFiles = {};
          }
          // @ts-ignore
          if (!(path in FS.readFiles)) {
            // @ts-ignore
            FS.readFiles[path] = 1;
          }
        }
        return stream;
      },
      // @ts-ignore
      close(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) {
          stream.getdents = null;
        }
        // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },
      // @ts-ignore
      isClosed(stream) {
        return stream.fd === null;
      },
      // @ts-ignore
      llseek(stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },
      // @ts-ignore
      read(stream, buffer, offset, length, position) {
        assert(offset >= 0);
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        const seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        const bytesRead = stream.stream_ops.read(
          stream,
          buffer,
          offset,
          length,
          position,
        );
        if (!seeking) {
          stream.position += bytesRead;
        }
        return bytesRead;
      },
      // @ts-ignore
      write(stream, buffer, offset, length, position, canOwn) {
        assert(offset >= 0);
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        const seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        const bytesWritten = stream.stream_ops.write(
          stream,
          buffer,
          offset,
          length,
          position,
          canOwn,
        );
        if (!seeking) {
          stream.position += bytesWritten;
        }
        return bytesWritten;
      },
      // @ts-ignore
      allocate(stream, offset, length) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },
      // @ts-ignore
      mmap(stream, length, position, prot, flags) {
        // User requests writing to file (prot & PROT_WRITE != 0).
        // Checking if we have permissions to write to the file unless
        // MAP_PRIVATE flag is set. According to POSIX spec it is possible
        // to write to file opened in read-only mode with MAP_PRIVATE flag,
        // as all modifications will be visible only in the memory of
        // the current process.
        if (
          (prot & 2) !== 0 &&
          (flags & 2) === 0 &&
          (stream.flags & 2097155) !== 2
        ) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, length, position, prot, flags);
      },
      // @ts-ignore
      msync(stream, buffer, offset, length, mmapFlags) {
        assert(offset >= 0);
        if (!stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(
          stream,
          buffer,
          offset,
          length,
          mmapFlags,
        );
      },
      // @ts-ignore
      ioctl(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },
      // @ts-ignore
      readFile(path, opts = {}) {
        // @ts-ignore
        opts.flags = opts.flags || 0;
        // @ts-ignore
        opts.encoding = opts.encoding || 'binary';
        // @ts-ignore
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          // @ts-ignore
          throw new Error(`Invalid encoding type "${opts.encoding}"`);
        }
        let ret;
        // @ts-ignore
        const stream = FS.open(path, opts.flags);
        const stat = FS.stat(path);
        const length = stat.size;
        const buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        // @ts-ignore
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf, 0);
          // @ts-ignore
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },
      // @ts-ignore
      writeFile(path, data, opts = {}) {
        // @ts-ignore
        opts.flags = opts.flags || 577;
        // @ts-ignore
        const stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data == 'string') {
          const buf = new Uint8Array(lengthBytesUTF8(data) + 1);
          const actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          // @ts-ignore
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          // @ts-ignore
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new TypeError('Unsupported data type');
        }
        FS.close(stream);
      },
      cwd: () => FS.currentPath,
      // @ts-ignore
      chdir(path) {
        const lookup = FS.lookupPath(path, {
          follow: true,
        });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        // @ts-ignore
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        const errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },
      createDefaultDirectories() {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },
      createDefaultDevices() {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: () => 0,
          // @ts-ignore
          write: (stream, buffer, offset, length, pos) => length,
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using err() rather than out()
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        // use a buffer to avoid overhead of individual crypto calls per byte
        const randomBuffer = new Uint8Array(1024);
        let randomLeft = 0;
        const randomByte = () => {
          if (randomLeft === 0) {
            randomLeft = randomFill(randomBuffer).byteLength;
          }
          return randomBuffer[--randomLeft];
        };
        FS.createDevice('/dev', 'random', randomByte);
        FS.createDevice('/dev', 'urandom', randomByte);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },
      createSpecialDirectories() {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the
        // name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        const proc_self = FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount(
          {
            mount() {
              const node = FS.createNode(
                proc_self,
                'fd',
                16384 | 511,
                /* 0777 */ 73,
              );
              node.node_ops = {
                // @ts-ignore
                lookup(parent, name) {
                  const fd = +name;
                  const stream = FS.getStreamChecked(fd);
                  const ret = {
                    parent: null,
                    mount: {
                      mountpoint: 'fake',
                    },
                    node_ops: {
                      // @ts-ignore
                      readlink: () => stream.path,
                    },
                  };
                  // @ts-ignore
                  ret.parent = ret;
                  // make it look like a simple root node
                  return ret;
                },
              };
              return node;
            },
          },
          {},
          '/proc/self/fd',
        );
      },
      createStandardStreams() {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        // @ts-ignore
        if (Module.stdin) {
          // @ts-ignore
          FS.createDevice('/dev', 'stdin', Module.stdin);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        // @ts-ignore
        if (Module.stdout) {
          // @ts-ignore
          FS.createDevice('/dev', 'stdout', null, Module.stdout);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        // @ts-ignore
        if (Module.stderr) {
          // @ts-ignore
          FS.createDevice('/dev', 'stderr', null, Module.stderr);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
        // open default streams for the stdin, stdout and stderr devices
        const stdin = FS.open('/dev/stdin', 0);
        const stdout = FS.open('/dev/stdout', 1);
        const stderr = FS.open('/dev/stderr', 1);
        assert(stdin.fd === 0, `invalid handle for stdin (${stdin.fd})`);
        assert(stdout.fd === 1, `invalid handle for stdout (${stdout.fd})`);
        assert(stderr.fd === 2, `invalid handle for stderr (${stderr.fd})`);
      },
      staticInit() {
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [44].forEach((code) => {
          // @ts-ignore
          FS.genericErrors[code] = new FS.ErrnoError(code);
          // @ts-ignore
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
        // @ts-ignore
        FS.nameTable = Array.from({ length: 4096 });
        FS.mount(MEMFS, {}, '/');
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
        // @ts-ignore
        FS.filesystems = {
          MEMFS,
        };
      },
      // @ts-ignore
      init(input, output, error) {
        // @ts-ignore
        assert(
          !FS.init.initialized,
          'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)',
        );
        // @ts-ignore
        FS.init.initialized = true;
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        // @ts-ignore
        Module.stdin = input || Module.stdin;
        // @ts-ignore
        Module.stdout = output || Module.stdout;
        // @ts-ignore
        Module.stderr = error || Module.stderr;
        FS.createStandardStreams();
      },
      quit() {
        // @ts-ignore
        FS.init.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        _fflush(0);
        // close all of our streams
        for (let i = 0; i < FS.streams.length; i++) {
          const stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },
      // @ts-ignore
      findObject(path, dontResolveLastLink) {
        const ret = FS.analyzePath(path, dontResolveLastLink);
        if (!ret.exists) {
          return null;
        }
        return ret.object;
      },
      // @ts-ignore
      analyzePath(path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, {
            follow: !dontResolveLastLink,
          });
          path = lookup.path;
        } catch (e) {}
        const ret = {
          isRoot: false,
          exists: false,
          error: 0,
          name: null,
          path: null,
          object: null,
          parentExists: false,
          parentPath: null,
          parentObject: null,
        };
        try {
          var lookup = FS.lookupPath(path, {
            parent: true,
          });
          ret.parentExists = true;
          // @ts-ignore
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, {
            follow: !dontResolveLastLink,
          });
          ret.exists = true;
          // @ts-ignore
          ret.path = lookup.path;
          ret.object = lookup.node;
          // @ts-ignore
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          // @ts-ignore
          ret.error = e.errno;
        }
        return ret;
      },
      // @ts-ignore
      createPath(parent, path, canRead, canWrite) {
        parent = typeof parent == 'string' ? parent : FS.getPath(parent);
        const parts = path.split('/').reverse();
        while (parts.length) {
          const part = parts.pop();
          if (!part) {
            continue;
          }
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {}
          // ignore EEXIST
          parent = current;
        }
        // @ts-ignore
        return current;
      },
      // @ts-ignore
      createFile(parent, name, properties, canRead, canWrite) {
        const path = PATH.join2(
          typeof parent == 'string' ? parent : FS.getPath(parent),
          name,
        );
        const mode = FS_getMode(canRead, canWrite);
        return FS.create(path, mode);
      },
      // @ts-ignore
      createDataFile(parent, name, data, canRead, canWrite, canOwn) {
        let path = name;
        if (parent) {
          parent = typeof parent == 'string' ? parent : FS.getPath(parent);
          path = name ? PATH.join2(parent, name) : parent;
        }
        const mode = FS_getMode(canRead, canWrite);
        const node = FS.create(path, mode);
        if (data) {
          if (typeof data == 'string') {
            const arr = Array.from({ length: data.length });
            for (let i = 0, len = data.length; i < len; ++i) {
              arr[i] = data.charCodeAt(i);
            }
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          const stream = FS.open(node, 577);
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
      },
      // @ts-ignore
      createDevice(parent, name, input, output) {
        const path = PATH.join2(
          typeof parent == 'string' ? parent : FS.getPath(parent),
          name,
        );
        const mode = FS_getMode(!!input, !!output);
        // @ts-ignore
        if (!FS.createDevice.major) {
          // @ts-ignore
          FS.createDevice.major = 64;
        }
        // @ts-ignore
        const dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          // @ts-ignore
          open(stream) {
            stream.seekable = false;
          },
          // @ts-ignore
          close(stream) {
            // flush any pending line data
            if (output?.buffer?.length) {
              output(10);
            }
          },
          // @ts-ignore
          read(stream, buffer, offset, length, pos) {
            /* ignored */ let bytesRead = 0;
            for (let i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) {
                break;
              }
              bytesRead++;
              buffer[offset + i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          // @ts-ignore
          write(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset + i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          },
        });
        return FS.mkdev(path, mode, dev);
      },
      // @ts-ignore
      forceLoadFile(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) {
          return true;
        }
        if (typeof XMLHttpRequest != 'undefined') {
          throw new TypeError(
            'Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.',
          );
        } else {
          // Command-line.
          try {
            // @ts-ignore
            obj.contents = readBinary(obj.url);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        }
      },
      // @ts-ignore
      createLazyFile(parent, name, url, canRead, canWrite) {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array).
        // Actual getting is abstracted away for eventual reuse.
        class LazyUint8Array {
          constructor() {
            this.lengthKnown = false;
            // @ts-ignore
            this.chunks = [];
          }

          // Loaded chunks. Index is the chunk number
          // @ts-ignore
          get(idx) {
            // @ts-ignore
            if (idx > this.length - 1 || idx < 0) {
              return undefined;
            }
            // @ts-ignore
            const chunkOffset = idx % this.chunkSize;
            // @ts-ignore
            const chunkNum = (idx / this.chunkSize) | 0;
            return this.getter(chunkNum)[chunkOffset];
          }

          // @ts-ignore
          setDataGetter(getter) {
            this.getter = getter;
          }

          cacheLength() {
            // Find length
            const xhr = new XMLHttpRequest();
            xhr.open('HEAD', url, false);
            xhr.send(null);
            if (
              !((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304)
            ) {
              throw new Error(`Couldn't load ${url}. Status: ${xhr.status}`);
            }
            let datalength = Number(xhr.getResponseHeader('Content-length'));
            let header;
            const hasByteServing =
              (header = xhr.getResponseHeader('Accept-Ranges')) &&
              header === 'bytes';
            const usesGzip =
              (header = xhr.getResponseHeader('Content-Encoding')) &&
              header === 'gzip';
            let chunkSize = 1024 * 1024;
            // Chunk size in bytes
            if (!hasByteServing) {
              chunkSize = datalength;
            }
            // Function to get a range from the remote URL.
            // @ts-ignore
            const doXHR = (from, to) => {
              if (from > to) {
                throw new Error(
                  `invalid range (${from}, ${to}) or no bytes requested!`,
                );
              }
              if (to > datalength - 1) {
                throw new Error(
                  `only ${datalength} bytes available! programmer error!`,
                );
              }
              // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
              const xhr = new XMLHttpRequest();
              xhr.open('GET', url, false);
              if (datalength !== chunkSize) {
                xhr.setRequestHeader('Range', `bytes=${from}-${to}`);
              }
              // Some hints to the browser that we want binary data.
              xhr.responseType = 'arraybuffer';
              if (xhr.overrideMimeType) {
                xhr.overrideMimeType('text/plain; charset=x-user-defined');
              }
              xhr.send(null);
              if (
                !((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304)
              ) {
                throw new Error(`Couldn't load ${url}. Status: ${xhr.status}`);
              }
              if (xhr.response !== undefined) {
                return new Uint8Array(
                  /** @type{Array<number>} */ (xhr.response || []),
                );
              }
              return intArrayFromString(xhr.responseText || '', true);
            };
            const lazyArray = this;
            // @ts-ignore
            lazyArray.setDataGetter((chunkNum) => {
              const start = chunkNum * chunkSize;
              let end = (chunkNum + 1) * chunkSize - 1;
              // including this byte
              end = Math.min(end, datalength - 1);
              // if datalength-1 is selected, this is the last block
              if (typeof lazyArray.chunks[chunkNum] == 'undefined') {
                lazyArray.chunks[chunkNum] = doXHR(start, end);
              }
              if (typeof lazyArray.chunks[chunkNum] == 'undefined') {
                throw new TypeError('doXHR failed!');
              }
              return lazyArray.chunks[chunkNum];
            });
            if (usesGzip || !datalength) {
              // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
              chunkSize = datalength = 1;
              // this will force getter(0)/doXHR do download the whole file
              datalength = this.getter(0).length;
              chunkSize = datalength;
              out(
                'LazyFiles on gzip forces download of the whole file when length is accessed',
              );
            }
            this._length = datalength;
            this._chunkSize = chunkSize;
            this.lengthKnown = true;
          }

          get length() {
            if (!this.lengthKnown) {
              this.cacheLength();
            }
            return this._length;
          }

          get chunkSize() {
            if (!this.lengthKnown) {
              this.cacheLength();
            }
            return this._chunkSize;
          }
        }
        if (typeof XMLHttpRequest != 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) {
            throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          }
          const lazyArray = new LazyUint8Array();
          var properties = {
            isDevice: false,
            contents: lazyArray,
          };
        } else {
          // @ts-ignore
          var properties = {
            isDevice: false,
            url,
          };
        }
        const node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
          // @ts-ignore
        } else if (properties.url) {
          node.contents = null;
          // @ts-ignore
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get() {
              return this.contents.length;
            },
          },
        });
        // override each stream op with one that tries to force load the lazy file first
        const stream_ops = {};
        const keys = Object.keys(node.stream_ops);
        keys.forEach((key) => {
          const fn = node.stream_ops[key];
          // @ts-ignore
          stream_ops[key] = (...args) => {
            FS.forceLoadFile(node);
            return fn(...args);
          };
        });
        // @ts-ignore
        function writeChunks(stream, buffer, offset, length, position) {
          const contents = stream.node.contents;
          if (position >= contents.length) {
            return 0;
          }
          const size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) {
            // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) {
              // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        }
        // use a custom read function
        // @ts-ignore
        stream_ops.read = (stream, buffer, offset, length, position) => {
          FS.forceLoadFile(node);
          return writeChunks(stream, buffer, offset, length, position);
        };
        // use a custom mmap function
        // @ts-ignore
        stream_ops.mmap = (stream, length, position, prot, flags) => {
          FS.forceLoadFile(node);
          const ptr = mmapAlloc(length);
          // @ts-ignore
          if (!ptr) {
            throw new FS.ErrnoError(48);
          }
          writeChunks(stream, HEAP8, ptr, length, position);
          return {
            ptr,
            allocated: true,
          };
        };
        node.stream_ops = stream_ops;
        return node;
      },
      absolutePath() {
        abort('FS.absolutePath has been removed; use PATH_FS.resolve instead');
      },
      createFolder() {
        abort('FS.createFolder has been removed; use FS.mkdir instead');
      },
      createLink() {
        abort('FS.createLink has been removed; use FS.symlink instead');
      },
      joinPath() {
        abort('FS.joinPath has been removed; use PATH.join instead');
      },
      mmapAlloc() {
        abort(
          'FS.mmapAlloc has been replaced by the top level function mmapAlloc',
        );
      },
      standardizePath() {
        abort(
          'FS.standardizePath has been removed; use PATH.normalize instead',
        );
      },
    };

    var SYSCALLS = {
      DEFAULT_POLLMASK: 5,
      // @ts-ignore
      calculateAt(dirfd, path, allowEmpty) {
        if (PATH.isAbs(path)) {
          return path;
        }
        // relative path
        let dir;
        if (dirfd === -100) {
          dir = FS.cwd();
        } else {
          const dirstream = SYSCALLS.getStreamFromFD(dirfd);
          // @ts-ignore
          dir = dirstream.path;
        }
        if (path.length == 0) {
          if (!allowEmpty) {
            throw new FS.ErrnoError(44);
          }
          return dir;
        }
        return PATH.join2(dir, path);
      },
      // @ts-ignore
      doStat(func, path, buf) {
        const stat = func(path);
        HEAP32[(buf >>> 2) >>> 0] = stat.dev;
        HEAP32[((buf + 4) >>> 2) >>> 0] = stat.mode;
        HEAPU32[((buf + 8) >>> 2) >>> 0] = stat.nlink;
        HEAP32[((buf + 12) >>> 2) >>> 0] = stat.uid;
        HEAP32[((buf + 16) >>> 2) >>> 0] = stat.gid;
        HEAP32[((buf + 20) >>> 2) >>> 0] = stat.rdev;
        HEAP64[(buf + 24) >>> 3] = BigInt(stat.size);
        HEAP32[((buf + 32) >>> 2) >>> 0] = 4096;
        HEAP32[((buf + 36) >>> 2) >>> 0] = stat.blocks;
        const atime = stat.atime.getTime();
        const mtime = stat.mtime.getTime();
        const ctime = stat.ctime.getTime();
        HEAP64[(buf + 40) >>> 3] = BigInt(Math.floor(atime / 1e3));
        HEAPU32[((buf + 48) >>> 2) >>> 0] = (atime % 1e3) * 1e3;
        HEAP64[(buf + 56) >>> 3] = BigInt(Math.floor(mtime / 1e3));
        HEAPU32[((buf + 64) >>> 2) >>> 0] = (mtime % 1e3) * 1e3;
        HEAP64[(buf + 72) >>> 3] = BigInt(Math.floor(ctime / 1e3));
        HEAPU32[((buf + 80) >>> 2) >>> 0] = (ctime % 1e3) * 1e3;
        HEAP64[(buf + 88) >>> 3] = BigInt(stat.ino);
        return 0;
      },
      // @ts-ignore
      doMsync(addr, stream, len, flags, offset) {
        if (!FS.isFile(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (flags & 2) {
          // MAP_PRIVATE calls need not to be synced back to underlying fs
          return 0;
        }
        const buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },
      // @ts-ignore
      getStreamFromFD(fd) {
        const stream = FS.getStreamChecked(fd);
        return stream;
      },
      varargs: undefined,
      // @ts-ignore
      getStr(ptr) {
        const ret = UTF8ToString(ptr);
        return ret;
      },
    };

    // @ts-ignore
    function _fd_close(fd) {
      try {
        const stream = SYSCALLS.getStreamFromFD(fd);
        FS.close(stream);
        return 0;
      } catch (e) {
        // @ts-ignore
        if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) {
          throw e;
        }
        // @ts-ignore
        return e.errno;
      }
    }

    // @ts-ignore
    /** @param {number=} offset */ const doReadv = (
      stream,
      iov,
      iovcnt,
      offset,
    ) => {
      let ret = 0;
      for (let i = 0; i < iovcnt; i++) {
        const ptr = HEAPU32[(iov >>> 2) >>> 0];
        const len = HEAPU32[((iov + 4) >>> 2) >>> 0];
        iov += 8;
        const curr = FS.read(stream, HEAP8, ptr, len, offset);
        if (curr < 0) {
          return -1;
        }
        ret += curr;
        // @ts-ignore
        if (curr < len) {
          break;
        }
        // nothing more to read
        if (typeof offset != 'undefined') {
          offset += curr;
        }
      }
      return ret;
    };

    // @ts-ignore
    function _fd_read(fd, iov, iovcnt, pnum) {
      iov >>>= 0;
      iovcnt >>>= 0;
      pnum >>>= 0;
      try {
        const stream = SYSCALLS.getStreamFromFD(fd);
        const num = doReadv(stream, iov, iovcnt);
        HEAPU32[(pnum >>> 2) >>> 0] = num;
        return 0;
      } catch (e) {
        // @ts-ignore
        if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) {
          throw e;
        }
        // @ts-ignore
        return e.errno;
      }
    }

    // @ts-ignore
    function _fd_seek(fd, offset, whence, newOffset) {
      offset = bigintToI53Checked(offset);
      newOffset >>>= 0;
      try {
        if (isNaN(offset)) {
          return 61;
        }
        const stream = SYSCALLS.getStreamFromFD(fd);
        FS.llseek(stream, offset, whence);
        // @ts-ignore
        HEAP64[newOffset >>> 3] = BigInt(stream.position);
        // @ts-ignore
        if (stream.getdents && offset === 0 && whence === 0) {
          // @ts-ignore
          stream.getdents = null;
        }
        // reset readdir state
        return 0;
      } catch (e) {
        // @ts-ignore
        if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) {
          throw e;
        }
        // @ts-ignore
        return e.errno;
      }
    }

    // @ts-ignore
    /** @param {number=} offset */ const doWritev = (
      stream,
      iov,
      iovcnt,
      offset,
    ) => {
      let ret = 0;
      for (let i = 0; i < iovcnt; i++) {
        const ptr = HEAPU32[(iov >>> 2) >>> 0];
        const len = HEAPU32[((iov + 4) >>> 2) >>> 0];
        iov += 8;
        const curr = FS.write(stream, HEAP8, ptr, len, offset);
        if (curr < 0) {
          return -1;
        }
        ret += curr;
        if (typeof offset != 'undefined') {
          offset += curr;
        }
      }
      return ret;
    };

    // @ts-ignore
    function _fd_write(fd, iov, iovcnt, pnum) {
      iov >>>= 0;
      iovcnt >>>= 0;
      pnum >>>= 0;
      try {
        const stream = SYSCALLS.getStreamFromFD(fd);
        const num = doWritev(stream, iov, iovcnt);
        HEAPU32[(pnum >>> 2) >>> 0] = num;
        return 0;
      } catch (e) {
        // @ts-ignore
        if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) {
          throw e;
        }
        // @ts-ignore
        return e.errno;
      }
    }

    // @ts-ignore
    function _getentropy(buffer, size) {
      buffer >>>= 0;
      size >>>= 0;
      randomFill(HEAPU8.subarray(buffer >>> 0, (buffer + size) >>> 0));
      return 0;
    }

    // @ts-ignore
    function _llvm_eh_typeid_for(type) {
      type >>>= 0;
      return type;
    }

    // @ts-ignore
    const incrementExceptionRefcount = ptr =>
      ___cxa_increment_exception_refcount(ptr);

    // @ts-ignore
    Module.incrementExceptionRefcount = incrementExceptionRefcount;

    // @ts-ignore
    const decrementExceptionRefcount = ptr =>
      ___cxa_decrement_exception_refcount(ptr);

    // @ts-ignore
    Module.decrementExceptionRefcount = decrementExceptionRefcount;

    // @ts-ignore
    const stackAlloc = sz => __emscripten_stack_alloc(sz);

    // @ts-ignore
    const getExceptionMessageCommon = (ptr) => {
      const sp = stackSave();
      const type_addr_addr = stackAlloc(4);
      const message_addr_addr = stackAlloc(4);
      ___get_exception_message(ptr, type_addr_addr, message_addr_addr);
      const type_addr = HEAPU32[(type_addr_addr >>> 2) >>> 0];
      const message_addr = HEAPU32[(message_addr_addr >>> 2) >>> 0];
      // @ts-ignore
      const type = UTF8ToString(type_addr);
      _free(type_addr);
      let message;
      if (message_addr) {
        message = UTF8ToString(message_addr);
        _free(message_addr);
      }
      stackRestore(sp);
      return [type, message];
    };

    // @ts-ignore
    var getExceptionMessage = ptr => getExceptionMessageCommon(ptr);

    // @ts-ignore
    Module.getExceptionMessage = getExceptionMessage;

    embind_init_charCodes();

    // @ts-ignore
    BindingError = Module.BindingError = class BindingError extends Error {
      // @ts-ignore
      constructor(message) {
        super(message);
        this.name = 'BindingError';
      }
    };

    // @ts-ignore
    InternalError = Module.InternalError = class InternalError extends Error {
      // @ts-ignore
      constructor(message) {
        super(message);
        this.name = 'InternalError';
      }
    };

    init_ClassHandle();

    init_embind();

    init_RegisteredPointer();

    // @ts-ignore
    UnboundTypeError = Module.UnboundTypeError = extendError(
      Error,
      'UnboundTypeError',
    );

    init_emval();

    // @ts-ignore
    FS.createPreloadedFile = FS_createPreloadedFile;

    FS.staticInit();

    function checkIncomingModuleAPI() {
      ignoredModuleProp('fetchSettings');
    }

    var wasmImports = {
      /** @export */ __assert_fail: ___assert_fail,
      /** @export */ __cxa_begin_catch: ___cxa_begin_catch,
      /** @export */ __cxa_end_catch: ___cxa_end_catch,
      /** @export */ __cxa_find_matching_catch_2: ___cxa_find_matching_catch_2,
      /** @export */ __cxa_find_matching_catch_3: ___cxa_find_matching_catch_3,
      /** @export */ __cxa_rethrow: ___cxa_rethrow,
      /** @export */ __cxa_throw: ___cxa_throw,
      /** @export */ __cxa_uncaught_exceptions: ___cxa_uncaught_exceptions,
      /** @export */ __resumeException: ___resumeException,
      /** @export */ _abort_js: __abort_js,
      /** @export */ _embind_register_bigint: __embind_register_bigint,
      /** @export */ _embind_register_bool: __embind_register_bool,
      /** @export */ _embind_register_class: __embind_register_class,
      /** @export */ _embind_register_class_class_function:
        __embind_register_class_class_function,
      /** @export */ _embind_register_class_constructor:
        __embind_register_class_constructor,
      /** @export */ _embind_register_class_function:
        __embind_register_class_function,
      /** @export */ _embind_register_class_property:
        __embind_register_class_property,
      /** @export */ _embind_register_emval: __embind_register_emval,
      /** @export */ _embind_register_enum: __embind_register_enum,
      /** @export */ _embind_register_enum_value: __embind_register_enum_value,
      /** @export */ _embind_register_float: __embind_register_float,
      /** @export */ _embind_register_function: __embind_register_function,
      /** @export */ _embind_register_integer: __embind_register_integer,
      /** @export */ _embind_register_memory_view:
        __embind_register_memory_view,
      /** @export */ _embind_register_optional: __embind_register_optional,
      /** @export */ _embind_register_smart_ptr: __embind_register_smart_ptr,
      /** @export */ _embind_register_std_string: __embind_register_std_string,
      /** @export */ _embind_register_std_wstring:
        __embind_register_std_wstring,
      /** @export */ _embind_register_void: __embind_register_void,
      /** @export */ _emscripten_get_now_is_monotonic:
        __emscripten_get_now_is_monotonic,
      /** @export */ _emval_as: __emval_as,
      /** @export */ _emval_call: __emval_call,
      /** @export */ _emval_call_method: __emval_call_method,
      /** @export */ _emval_decref: __emval_decref,
      /** @export */ _emval_get_global: __emval_get_global,
      /** @export */ _emval_get_method_caller: __emval_get_method_caller,
      /** @export */ _emval_get_property: __emval_get_property,
      /** @export */ _emval_incref: __emval_incref,
      /** @export */ _emval_new_cstring: __emval_new_cstring,
      /** @export */ _emval_run_destructors: __emval_run_destructors,
      /** @export */ _emval_take_value: __emval_take_value,
      /** @export */ _tzset_js: __tzset_js,
      /** @export */ emscripten_date_now: _emscripten_date_now,
      /** @export */ emscripten_get_now: _emscripten_get_now,
      /** @export */ emscripten_resize_heap: _emscripten_resize_heap,
      /** @export */ environ_get: _environ_get,
      /** @export */ environ_sizes_get: _environ_sizes_get,
      /** @export */ fd_close: _fd_close,
      /** @export */ fd_read: _fd_read,
      /** @export */ fd_seek: _fd_seek,
      /** @export */ fd_write: _fd_write,
      /** @export */ getentropy: _getentropy,
      /** @export */ invoke_di,
      /** @export */ invoke_did,
      /** @export */ invoke_dii,
      /** @export */ invoke_diii,
      /** @export */ invoke_fiii,
      /** @export */ invoke_i,
      /** @export */ invoke_ii,
      /** @export */ invoke_iid,
      /** @export */ invoke_iii,
      /** @export */ invoke_iiid,
      /** @export */ invoke_iiidii,
      /** @export */ invoke_iiii,
      /** @export */ invoke_iiiii,
      /** @export */ invoke_iiiiid,
      /** @export */ invoke_iiiiii,
      /** @export */ invoke_iiiiiii,
      /** @export */ invoke_iiiiiiidi,
      /** @export */ invoke_iiiiiiidii,
      /** @export */ invoke_iiiiiiii,
      /** @export */ invoke_iiiiiiiidiii,
      /** @export */ invoke_iiiiiiiiiii,
      /** @export */ invoke_iiiiiiiiiiii,
      /** @export */ invoke_iiiiiiiiiiiii,
      /** @export */ invoke_iiiiiiiiiiiiiii,
      /** @export */ invoke_iiiiij,
      /** @export */ invoke_j,
      /** @export */ invoke_jdd,
      /** @export */ invoke_ji,
      /** @export */ invoke_jiiii,
      /** @export */ invoke_jj,
      /** @export */ invoke_v,
      /** @export */ invoke_vi,
      /** @export */ invoke_vid,
      /** @export */ invoke_vii,
      /** @export */ invoke_viid,
      /** @export */ invoke_viidddii,
      /** @export */ invoke_viii,
      /** @export */ invoke_viiid,
      /** @export */ invoke_viiii,
      /** @export */ invoke_viiiidd,
      /** @export */ invoke_viiiidi,
      /** @export */ invoke_viiiii,
      /** @export */ invoke_viiiiii,
      /** @export */ invoke_viiiiiid,
      /** @export */ invoke_viiiiiiddi,
      /** @export */ invoke_viiiiiidi,
      /** @export */ invoke_viiiiiii,
      /** @export */ invoke_viiiiiiid,
      /** @export */ invoke_viiiiiiii,
      /** @export */ invoke_viiiiiiiii,
      /** @export */ invoke_viiiiiiiiii,
      /** @export */ invoke_viiiiiiiiiii,
      /** @export */ invoke_viiiiiiiiiiiii,
      /** @export */ invoke_viiiiiiiiiiiiii,
      /** @export */ invoke_viiiiiiiiiiiiiii,
      /** @export */ invoke_viiiij,
      /** @export */ invoke_viij,
      /** @export */ invoke_vij,
      /** @export */ llvm_eh_typeid_for: _llvm_eh_typeid_for,
    };

    var wasmExports = createWasm();

    // @ts-ignore
    const ___wasm_call_ctors = createExportWrapper('__wasm_call_ctors', 0);

    var ___getTypeName = createExportWrapper('__getTypeName', 1);

    var _malloc = createExportWrapper('malloc', 1);

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto15LWECryptoParamsEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto15LWECryptoParamsEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto15LWECryptoParamsEE11instantiateEv',
          0,
        ));

    var _free = createExportWrapper('free', 1);

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto15LWECryptoParamsEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto15LWECryptoParamsEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto15LWECryptoParamsEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto15LWECryptoParamsEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto15LWECryptoParamsEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto15LWECryptoParamsEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto15LWECryptoParamsEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto15LWECryptoParamsEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto15LWECryptoParamsEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto17LWECiphertextImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto17LWECiphertextImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto17LWECiphertextImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto17LWECiphertextImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto17LWECiphertextImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto17LWECiphertextImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto17LWECiphertextImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto17LWECiphertextImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto17LWECiphertextImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto17LWECiphertextImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto17LWECiphertextImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto17LWECiphertextImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto17LWEPrivateKeyImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto17LWEPrivateKeyImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto17LWEPrivateKeyImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto17LWEPrivateKeyImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto17LWEPrivateKeyImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto17LWEPrivateKeyImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto17LWEPrivateKeyImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto17LWEPrivateKeyImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto17LWEPrivateKeyImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto17LWEPrivateKeyImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto17LWEPrivateKeyImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto17LWEPrivateKeyImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto16LWEPublicKeyImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto16LWEPublicKeyImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto16LWEPublicKeyImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto16LWEPublicKeyImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto16LWEPublicKeyImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto16LWEPublicKeyImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto16LWEPublicKeyImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto16LWEPublicKeyImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto16LWEPublicKeyImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto16LWEPublicKeyImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto16LWEPublicKeyImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto16LWEPublicKeyImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto19LWESwitchingKeyImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto19LWESwitchingKeyImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto19LWESwitchingKeyImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto19LWESwitchingKeyImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto19LWESwitchingKeyImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto19LWESwitchingKeyImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto19LWESwitchingKeyImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto19LWESwitchingKeyImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto19LWESwitchingKeyImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto19LWESwitchingKeyImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto19LWESwitchingKeyImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto19LWESwitchingKeyImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto18RLWECiphertextImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto18RLWECiphertextImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto18RLWECiphertextImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto18RLWECiphertextImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto18RLWECiphertextImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto18RLWECiphertextImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto18RLWECiphertextImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto18RLWECiphertextImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto18RLWECiphertextImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto18RLWECiphertextImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto18RLWECiphertextImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto18RLWECiphertextImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto19RingGSWCryptoParamsEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto19RingGSWCryptoParamsEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto19RingGSWCryptoParamsEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto19RingGSWCryptoParamsEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto19RingGSWCryptoParamsEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto19RingGSWCryptoParamsEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto19RingGSWCryptoParamsEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto19RingGSWCryptoParamsEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto19RingGSWCryptoParamsEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto19RingGSWCryptoParamsEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto19RingGSWCryptoParamsEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto19RingGSWCryptoParamsEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto18RingGSWEvalKeyImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto18RingGSWEvalKeyImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto18RingGSWEvalKeyImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto18RingGSWEvalKeyImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto18RingGSWEvalKeyImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto18RingGSWEvalKeyImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto18RingGSWEvalKeyImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto18RingGSWEvalKeyImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto18RingGSWEvalKeyImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto18RingGSWEvalKeyImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto18RingGSWEvalKeyImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto18RingGSWEvalKeyImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto17RingGSWACCKeyImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto17RingGSWACCKeyImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto17RingGSWACCKeyImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto17RingGSWACCKeyImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto17RingGSWACCKeyImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto17RingGSWACCKeyImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto17RingGSWACCKeyImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto17RingGSWACCKeyImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto17RingGSWACCKeyImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto17RingGSWACCKeyImplEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto17RingGSWACCKeyImplEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto17RingGSWACCKeyImplEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto18BinFHECryptoParamsEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto18BinFHECryptoParamsEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto18BinFHECryptoParamsEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto18BinFHECryptoParamsEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto18BinFHECryptoParamsEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto18BinFHECryptoParamsEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto18BinFHECryptoParamsEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto18BinFHECryptoParamsEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto18BinFHECryptoParamsEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto18BinFHECryptoParamsEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto18BinFHECryptoParamsEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto18BinFHECryptoParamsEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto13BinFHEContextEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto13BinFHEContextEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto13BinFHEContextEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto13BinFHEContextEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto13BinFHEContextEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto13BinFHEContextEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto13BinFHEContextEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto13BinFHEContextEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto13BinFHEContextEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto13BinFHEContextEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto13BinFHEContextEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto13BinFHEContextEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto23CryptoParametersCKKSRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto23CryptoParametersCKKSRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto23CryptoParametersCKKSRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto23CryptoParametersCKKSRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto23CryptoParametersCKKSRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto23CryptoParametersCKKSRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto23CryptoParametersCKKSRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto23CryptoParametersCKKSRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto23CryptoParametersCKKSRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto23CryptoParametersCKKSRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto23CryptoParametersCKKSRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto23CryptoParametersCKKSRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto13SchemeCKKSRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto13SchemeCKKSRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto13SchemeCKKSRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto13SchemeCKKSRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto13SchemeCKKSRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto13SchemeCKKSRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto13SchemeCKKSRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto13SchemeCKKSRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto13SchemeCKKSRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto13SchemeCKKSRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto13SchemeCKKSRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto13SchemeCKKSRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto19CKKSBootstrapPrecomEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto19CKKSBootstrapPrecomEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto19CKKSBootstrapPrecomEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto19CKKSBootstrapPrecomEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto19CKKSBootstrapPrecomEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto19CKKSBootstrapPrecomEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto19CKKSBootstrapPrecomEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto19CKKSBootstrapPrecomEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto19CKKSBootstrapPrecomEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto19CKKSBootstrapPrecomEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto19CKKSBootstrapPrecomEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto19CKKSBootstrapPrecomEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto10FHECKKSRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto10FHECKKSRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto10FHECKKSRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto10FHECKKSRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto10FHECKKSRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto10FHECKKSRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto10FHECKKSRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto10FHECKKSRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto10FHECKKSRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto10FHECKKSRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto10FHECKKSRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto10FHECKKSRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto13SWITCHCKKSRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto13SWITCHCKKSRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto13SWITCHCKKSRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto13SWITCHCKKSRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto13SWITCHCKKSRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto13SWITCHCKKSRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto13SWITCHCKKSRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto13SWITCHCKKSRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto13SWITCHCKKSRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto13SWITCHCKKSRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto13SWITCHCKKSRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto13SWITCHCKKSRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto22CryptoParametersBGVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto22CryptoParametersBGVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto22CryptoParametersBGVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto22CryptoParametersBGVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto22CryptoParametersBGVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto22CryptoParametersBGVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto22CryptoParametersBGVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto22CryptoParametersBGVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto22CryptoParametersBGVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto22CryptoParametersBGVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto22CryptoParametersBGVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto22CryptoParametersBGVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto12SchemeBGVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto12SchemeBGVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto12SchemeBGVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto12SchemeBGVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto12SchemeBGVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto12SchemeBGVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto12SchemeBGVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto12SchemeBGVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto12SchemeBGVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto12SchemeBGVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto12SchemeBGVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto12SchemeBGVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto9FHEBGVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto9FHEBGVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto9FHEBGVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto9FHEBGVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto9FHEBGVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto9FHEBGVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto9FHEBGVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto9FHEBGVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto9FHEBGVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto9FHEBGVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto9FHEBGVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto9FHEBGVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto22CryptoParametersBFVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto22CryptoParametersBFVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto22CryptoParametersBFVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto22CryptoParametersBFVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto22CryptoParametersBFVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto22CryptoParametersBFVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto22CryptoParametersBFVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto22CryptoParametersBFVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto22CryptoParametersBFVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto22CryptoParametersBFVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto22CryptoParametersBFVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto22CryptoParametersBFVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto12SchemeBFVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto12SchemeBFVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto12SchemeBFVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto12SchemeBFVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto12SchemeBFVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto12SchemeBFVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto12SchemeBFVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto12SchemeBFVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto12SchemeBFVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto12SchemeBFVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto12SchemeBFVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto12SchemeBFVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto9FHEBFVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto9FHEBFVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto9FHEBFVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto9FHEBFVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto9FHEBFVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto9FHEBFVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto9FHEBFVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto9FHEBFVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto9FHEBFVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto9FHEBFVRNSEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto9FHEBFVRNSEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto9FHEBFVRNSEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto11EvalKeyImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto11EvalKeyImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto11EvalKeyImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto11EvalKeyImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto11EvalKeyImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto11EvalKeyImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto11EvalKeyImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto11EvalKeyImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto11EvalKeyImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto11EvalKeyImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto11EvalKeyImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto11EvalKeyImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto16EvalKeyRelinImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto16EvalKeyRelinImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_27PortableBinaryOutputArchiveEN8lbcrypto16EvalKeyRelinImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto16EvalKeyRelinImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto16EvalKeyRelinImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_26PortableBinaryInputArchiveEN8lbcrypto16EvalKeyRelinImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto16EvalKeyRelinImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto16EvalKeyRelinImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_16JSONInputArchiveEN8lbcrypto16EvalKeyRelinImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const __ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto16EvalKeyRelinImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv =
      (Module.__ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto16EvalKeyRelinImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv =
        createExportWrapper(
          '_ZN6cereal6detail33polymorphic_serialization_supportINS_17JSONOutputArchiveEN8lbcrypto16EvalKeyRelinImplINS3_12DCRTPolyImplIN9bigintdyn9mubintvecINS6_5ubintIyEEEEEEEEE11instantiateEv',
          0,
        ));

    // @ts-ignore
    const ___cxa_free_exception = createExportWrapper(
      '__cxa_free_exception',
      1,
    );

    var _fflush = createExportWrapper('fflush', 1);

    var _strerror = createExportWrapper('strerror', 1);

    var _setThrew = createExportWrapper('setThrew', 2);

    var __emscripten_tempret_set = createExportWrapper(
      '_emscripten_tempret_set',
      1,
    );

    let _emscripten_stack_init = () =>
      (_emscripten_stack_init = wasmExports.emscripten_stack_init)();

    // @ts-ignore
    let _emscripten_stack_get_free = () =>
      (_emscripten_stack_get_free = wasmExports.emscripten_stack_get_free)();

    // @ts-ignore
    let _emscripten_stack_get_base = () =>
      (_emscripten_stack_get_base = wasmExports.emscripten_stack_get_base)();

    var _emscripten_stack_get_end = () =>
      (_emscripten_stack_get_end = wasmExports.emscripten_stack_get_end)();

    // @ts-ignore
    var __emscripten_stack_restore = a0 =>
      (__emscripten_stack_restore = wasmExports._emscripten_stack_restore)(a0);

    // @ts-ignore
    var __emscripten_stack_alloc = a0 =>
      (__emscripten_stack_alloc = wasmExports._emscripten_stack_alloc)(a0);

    var _emscripten_stack_get_current = () =>
      (_emscripten_stack_get_current =
        wasmExports.emscripten_stack_get_current)();

    var ___cxa_decrement_exception_refcount = createExportWrapper(
      '__cxa_decrement_exception_refcount',
      1,
    );

    var ___cxa_increment_exception_refcount = createExportWrapper(
      '__cxa_increment_exception_refcount',
      1,
    );

    var ___get_exception_message = createExportWrapper(
      '__get_exception_message',
      3,
    );

    var ___cxa_can_catch = createExportWrapper('__cxa_can_catch', 3);

    var ___cxa_is_pointer_type = createExportWrapper(
      '__cxa_is_pointer_type',
      1,
    );

    // @ts-ignore
    function invoke_iiii(index, a1, a2, a3) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_viii(index, a1, a2, a3) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_iii(index, a1, a2) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_iiiiii(index, a1, a2, a3, a4, a5) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_vi(index, a1) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_ii(index, a1) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_vii(index, a1, a2) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_iiiiiii(index, a1, a2, a3, a4, a5, a6) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_v(index) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)();
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_vij(index, a1, a2) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_iiiii(index, a1, a2, a3, a4) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_viiii(index, a1, a2, a3, a4) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_i(index) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)();
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_viiiii(index, a1, a2, a3, a4, a5) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_viiiiii(index, a1, a2, a3, a4, a5, a6) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_viij(index, a1, a2, a3) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_di(index, a1) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_jdd(index, a1, a2) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
        // @ts-ignore
        return 0n;
      }
    }

    // @ts-ignore
    function invoke_iiid(index, a1, a2, a3) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_viiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_vid(index, a1, a2) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_jj(index, a1) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
        // @ts-ignore
        return 0n;
      }
    }

    // @ts-ignore
    function invoke_iiiiiiidi(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_iiidii(index, a1, a2, a3, a4, a5) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_viiid(index, a1, a2, a3, a4) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_viid(index, a1, a2, a3) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_viiiidd(index, a1, a2, a3, a4, a5, a6) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_dii(index, a1, a2) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_viiiiiiddi(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_viiiiiiid(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_iid(index, a1, a2) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_diii(index, a1, a2, a3) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_viiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
    ) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(
          a1,
          a2,
          a3,
          a4,
          a5,
          a6,
          a7,
          a8,
          a9,
          a10,
          a11,
          a12,
          a13,
          a14,
        );
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_did(index, a1, a2) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_viiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
    ) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_iiiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
    ) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(
          a1,
          a2,
          a3,
          a4,
          a5,
          a6,
          a7,
          a8,
          a9,
          a10,
          a11,
          a12,
          a13,
          a14,
        );
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_viiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
    ) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_viiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
    ) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(
          a1,
          a2,
          a3,
          a4,
          a5,
          a6,
          a7,
          a8,
          a9,
          a10,
          a11,
          a12,
          a13,
        );
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_iiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
    ) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(
          a1,
          a2,
          a3,
          a4,
          a5,
          a6,
          a7,
          a8,
          a9,
          a10,
        );
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_viidddii(index, a1, a2, a3, a4, a5, a6, a7) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_viiiidi(index, a1, a2, a3, a4, a5, a6) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_viiiiiidi(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_viiiiiid(index, a1, a2, a3, a4, a5, a6, a7) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_ji(index, a1) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
        // @ts-ignore
        return 0n;
      }
    }

    // @ts-ignore
    function invoke_iiiiiiidii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_iiiiiiiidiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
    ) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(
          a1,
          a2,
          a3,
          a4,
          a5,
          a6,
          a7,
          a8,
          a9,
          a10,
          a11,
        );
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_viiiij(index, a1, a2, a3, a4, a5) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_j(index) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)();
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
        // @ts-ignore
        return 0n;
      }
    }

    // @ts-ignore
    function invoke_iiiiij(index, a1, a2, a3, a4, a5) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_iiiiid(index, a1, a2, a3, a4, a5) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_iiiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_jiiii(index, a1, a2, a3, a4) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
        // @ts-ignore
        return 0n;
      }
    }

    // @ts-ignore
    function invoke_iiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
    ) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(
          a1,
          a2,
          a3,
          a4,
          a5,
          a6,
          a7,
          a8,
          a9,
          a10,
          a11,
          a12,
        );
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_fiii(index, a1, a2, a3) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_iiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
    ) {
      const sp = stackSave();
      try {
        return getWasmTableEntry(index)(
          a1,
          a2,
          a3,
          a4,
          a5,
          a6,
          a7,
          a8,
          a9,
          a10,
          a11,
        );
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // @ts-ignore
    function invoke_viiiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15,
    ) {
      const sp = stackSave();
      try {
        getWasmTableEntry(index)(
          a1,
          a2,
          a3,
          a4,
          a5,
          a6,
          a7,
          a8,
          a9,
          a10,
          a11,
          a12,
          a13,
          a14,
          a15,
        );
      } catch (e) {
        stackRestore(sp);
        if (!(e instanceof EmscriptenEH)) {
          throw e;
        }
        _setThrew(1, 0);
      }
    }

    // Argument name here must shadow the `wasmExports` global so
    // that it is recognised by metadce and minify-import-export-names
    // passes.
    // @ts-ignore
    function applySignatureConversions(wasmExports) {
      // First, make a copy of the incoming exports object
      wasmExports = Object.assign({}, wasmExports);
      // @ts-ignore
      const makeWrapper_pp = f => a0 => f(a0) >>> 0;
      // @ts-ignore
      const makeWrapper_p_ = f => a0 => f(a0) >>> 0;
      // @ts-ignore
      const makeWrapper_p = f => () => f() >>> 0;
      wasmExports.__getTypeName = makeWrapper_pp(wasmExports.__getTypeName);
      wasmExports.malloc = makeWrapper_pp(wasmExports.malloc);
      wasmExports.strerror = makeWrapper_p_(wasmExports.strerror);
      wasmExports.emscripten_stack_get_base = makeWrapper_p(
        wasmExports.emscripten_stack_get_base,
      );
      wasmExports.emscripten_stack_get_end = makeWrapper_p(
        wasmExports.emscripten_stack_get_end,
      );
      wasmExports._emscripten_stack_alloc = makeWrapper_pp(
        wasmExports._emscripten_stack_alloc,
      );
      wasmExports.emscripten_stack_get_current = makeWrapper_p(
        wasmExports.emscripten_stack_get_current,
      );
      return wasmExports;
    }

    // include: postamble.js
    // === Auto-generated postamble setup entry stuff ===
    const missingLibrarySymbols = [
      'writeI53ToI64',
      'writeI53ToI64Clamped',
      'writeI53ToI64Signaling',
      'writeI53ToU64Clamped',
      'writeI53ToU64Signaling',
      'readI53FromI64',
      'readI53FromU64',
      'convertI32PairToI53',
      'convertI32PairToI53Checked',
      'convertU32PairToI53',
      'getTempRet0',
      'exitJS',
      'isLeapYear',
      'ydayFromDate',
      'arraySum',
      'addDays',
      'inetPton4',
      'inetNtop4',
      'inetPton6',
      'inetNtop6',
      'readSockaddr',
      'writeSockaddr',
      'emscriptenLog',
      'readEmAsmArgs',
      'jstoi_q',
      'listenOnce',
      'autoResumeAudioContext',
      'handleException',
      'keepRuntimeAlive',
      'runtimeKeepalivePush',
      'runtimeKeepalivePop',
      'callUserCallback',
      'maybeExit',
      'asmjsMangle',
      'HandleAllocator',
      'getNativeTypeSize',
      'STACK_SIZE',
      'STACK_ALIGN',
      'POINTER_SIZE',
      'ASSERTIONS',
      'getCFunc',
      'ccall',
      'cwrap',
      'uleb128Encode',
      'sigToWasmTypes',
      'generateFuncType',
      'convertJsFunctionToWasm',
      'getEmptyTableSlot',
      'updateTableMap',
      'getFunctionAddress',
      'addFunction',
      'removeFunction',
      'reallyNegative',
      'unSign',
      'strLen',
      'reSign',
      'formatString',
      'intArrayToString',
      'AsciiToString',
      'stringToNewUTF8',
      'stringToUTF8OnStack',
      'writeArrayToMemory',
      'registerKeyEventCallback',
      'maybeCStringToJsString',
      'findEventTarget',
      'getBoundingClientRect',
      'fillMouseEventData',
      'registerMouseEventCallback',
      'registerWheelEventCallback',
      'registerUiEventCallback',
      'registerFocusEventCallback',
      'fillDeviceOrientationEventData',
      'registerDeviceOrientationEventCallback',
      'fillDeviceMotionEventData',
      'registerDeviceMotionEventCallback',
      'screenOrientation',
      'fillOrientationChangeEventData',
      'registerOrientationChangeEventCallback',
      'fillFullscreenChangeEventData',
      'registerFullscreenChangeEventCallback',
      'JSEvents_requestFullscreen',
      'JSEvents_resizeCanvasForFullscreen',
      'registerRestoreOldStyle',
      'hideEverythingExceptGivenElement',
      'restoreHiddenElements',
      'setLetterbox',
      'softFullscreenResizeWebGLRenderTarget',
      'doRequestFullscreen',
      'fillPointerlockChangeEventData',
      'registerPointerlockChangeEventCallback',
      'registerPointerlockErrorEventCallback',
      'requestPointerLock',
      'fillVisibilityChangeEventData',
      'registerVisibilityChangeEventCallback',
      'registerTouchEventCallback',
      'fillGamepadEventData',
      'registerGamepadEventCallback',
      'registerBeforeUnloadEventCallback',
      'fillBatteryEventData',
      'battery',
      'registerBatteryEventCallback',
      'setCanvasElementSize',
      'getCanvasElementSize',
      'jsStackTrace',
      'getCallstack',
      'convertPCtoSourceLocation',
      'checkWasiClock',
      'wasiRightsToMuslOFlags',
      'wasiOFlagsToMuslOFlags',
      'createDyncallWrapper',
      'safeSetTimeout',
      'setImmediateWrapped',
      'clearImmediateWrapped',
      'polyfillSetImmediate',
      'getPromise',
      'makePromise',
      'idsToPromises',
      'makePromiseCallback',
      'Browser_asyncPrepareDataCounter',
      'setMainLoop',
      'getSocketFromFD',
      'getSocketAddress',
      'FS_unlink',
      'FS_mkdirTree',
      '_setNetworkCallback',
      'heapObjectForWebGLType',
      'toTypedArrayIndex',
      'webgl_enable_ANGLE_instanced_arrays',
      'webgl_enable_OES_vertex_array_object',
      'webgl_enable_WEBGL_draw_buffers',
      'webgl_enable_WEBGL_multi_draw',
      'emscriptenWebGLGet',
      'computeUnpackAlignedImageSize',
      'colorChannelsInGlTextureFormat',
      'emscriptenWebGLGetTexPixelData',
      'emscriptenWebGLGetUniform',
      'webglGetUniformLocation',
      'webglPrepareUniformLocationsBeforeFirstUse',
      'webglGetLeftBracePos',
      'emscriptenWebGLGetVertexAttrib',
      '__glGetActiveAttribOrUniform',
      'writeGLArray',
      'registerWebGlEventCallback',
      'runAndAbortIfError',
      'ALLOC_NORMAL',
      'ALLOC_STACK',
      'allocate',
      'writeStringToMemory',
      'writeAsciiToMemory',
      'setErrNo',
      'demangle',
      'stackTrace',
      'getFunctionArgsName',
      'createJsInvokerSignature',
      'registerInheritedInstance',
      'unregisterInheritedInstance',
    ];

    missingLibrarySymbols.forEach(missingLibrarySymbol);

    const unexportedSymbols = [
      'run',
      'addOnPreRun',
      'addOnInit',
      'addOnPreMain',
      'addOnExit',
      'addOnPostRun',
      'addRunDependency',
      'removeRunDependency',
      'out',
      'err',
      'callMain',
      'abort',
      'wasmMemory',
      'wasmExports',
      'writeStackCookie',
      'checkStackCookie',
      'prettyPrint',
      'INT53_MAX',
      'INT53_MIN',
      'bigintToI53Checked',
      'stackSave',
      'stackRestore',
      'stackAlloc',
      'setTempRet0',
      'ptrToString',
      'zeroMemory',
      'getHeapMax',
      'growMemory',
      'ENV',
      'MONTH_DAYS_REGULAR',
      'MONTH_DAYS_LEAP',
      'MONTH_DAYS_REGULAR_CUMULATIVE',
      'MONTH_DAYS_LEAP_CUMULATIVE',
      'ERRNO_CODES',
      'strError',
      'DNS',
      'Protocols',
      'Sockets',
      'initRandomFill',
      'randomFill',
      'timers',
      'warnOnce',
      'readEmAsmArgsArray',
      'jstoi_s',
      'getExecutableName',
      'getDynCaller',
      'dynCall',
      'asyncLoad',
      'alignMemory',
      'mmapAlloc',
      'wasmTable',
      'noExitRuntime',
      'freeTableIndexes',
      'functionsInTableMap',
      'setValue',
      'getValue',
      'PATH',
      'PATH_FS',
      'UTF8Decoder',
      'UTF8ArrayToString',
      'UTF8ToString',
      'stringToUTF8Array',
      'stringToUTF8',
      'lengthBytesUTF8',
      'intArrayFromString',
      'stringToAscii',
      'UTF16Decoder',
      'UTF16ToString',
      'stringToUTF16',
      'lengthBytesUTF16',
      'UTF32ToString',
      'stringToUTF32',
      'lengthBytesUTF32',
      'JSEvents',
      'specialHTMLTargets',
      'findCanvasEventTarget',
      'currentFullscreenStrategy',
      'restoreOldWindowedStyle',
      'UNWIND_CACHE',
      'ExitStatus',
      'getEnvStrings',
      'doReadv',
      'doWritev',
      'promiseMap',
      'uncaughtExceptionCount',
      'exceptionLast',
      'exceptionCaught',
      'ExceptionInfo',
      'findMatchingCatch',
      'getExceptionMessageCommon',
      'incrementExceptionRefcount',
      'decrementExceptionRefcount',
      'getExceptionMessage',
      'Browser',
      'getPreloadedImageData__data',
      'wget',
      'SYSCALLS',
      'preloadPlugins',
      'FS_createPreloadedFile',
      'FS_modeStringToFlags',
      'FS_getMode',
      'FS_stdin_getChar_buffer',
      'FS_stdin_getChar',
      'FS_createPath',
      'FS_createDevice',
      'FS_readFile',
      'FS',
      'FS_createDataFile',
      'FS_createLazyFile',
      'MEMFS',
      'TTY',
      'PIPEFS',
      'SOCKFS',
      'tempFixedLengthArray',
      'miniTempWebGLFloatBuffers',
      'miniTempWebGLIntBuffers',
      'GL',
      'AL',
      'GLUT',
      'EGL',
      'GLEW',
      'IDBStore',
      'SDL',
      'SDL_gfx',
      'allocateUTF8',
      'allocateUTF8OnStack',
      'print',
      'printErr',
      'InternalError',
      'BindingError',
      'throwInternalError',
      'throwBindingError',
      'registeredTypes',
      'awaitingDependencies',
      'typeDependencies',
      'tupleRegistrations',
      'structRegistrations',
      'sharedRegisterType',
      'whenDependentTypesAreResolved',
      'embind_charCodes',
      'embind_init_charCodes',
      'readLatin1String',
      'getTypeName',
      'getFunctionName',
      'heap32VectorToArray',
      'requireRegisteredType',
      'usesDestructorStack',
      'createJsInvoker',
      'UnboundTypeError',
      'PureVirtualError',
      'GenericWireTypeSize',
      'EmValType',
      'init_embind',
      'throwUnboundTypeError',
      'ensureOverloadTable',
      'exposePublicSymbol',
      'replacePublicSymbol',
      'extendError',
      'createNamedFunction',
      'embindRepr',
      'registeredInstances',
      'getBasestPointer',
      'getInheritedInstance',
      'getInheritedInstanceCount',
      'getLiveInheritedInstances',
      'registeredPointers',
      'registerType',
      'integerReadValueFromPointer',
      'enumReadValueFromPointer',
      'floatReadValueFromPointer',
      'readPointer',
      'runDestructors',
      'newFunc',
      'craftInvokerFunction',
      'embind__requireFunction',
      'genericPointerToWireType',
      'constNoSmartPtrRawPointerToWireType',
      'nonConstNoSmartPtrRawPointerToWireType',
      'init_RegisteredPointer',
      'RegisteredPointer',
      'RegisteredPointer_fromWireType',
      'runDestructor',
      'releaseClassHandle',
      'finalizationRegistry',
      'detachFinalizer_deps',
      'detachFinalizer',
      'attachFinalizer',
      'makeClassHandle',
      'init_ClassHandle',
      'ClassHandle',
      'throwInstanceAlreadyDeleted',
      'deletionQueue',
      'flushPendingDeletes',
      'delayFunction',
      'setDelayFunction',
      'RegisteredClass',
      'shallowCopyInternalPointer',
      'downcastPointer',
      'upcastPointer',
      'validateThis',
      'char_0',
      'char_9',
      'makeLegalFunctionName',
      'emval_freelist',
      'emval_handles',
      'emval_symbols',
      'init_emval',
      'count_emval_handles',
      'getStringOrSymbol',
      'Emval',
      'emval_get_global',
      'emval_returnValue',
      'emval_lookupTypes',
      'emval_methodCallers',
      'emval_addMethodCaller',
      'reflectConstruct',
    ];

    unexportedSymbols.forEach(unexportedRuntimeSymbol);

    // @ts-ignore
    let calledRun;

    dependenciesFulfilled = function runCaller() {
      // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
      // @ts-ignore
      if (!calledRun) {
        run();
      }
      // @ts-ignore
      if (!calledRun) {
        dependenciesFulfilled = runCaller;
      }
    };

    // try this again later, after new deps are fulfilled
    function stackCheckInit() {
      // This is normally called automatically during __wasm_call_ctors but need to
      // get these values before even running any of the ctors so we call it redundantly
      // here.
      _emscripten_stack_init();
      // TODO(sbc): Move writeStackCookie to native to to avoid this.
      writeStackCookie();
    }

    function run() {
      if (runDependencies > 0) {
        dbg('run() called, but dependencies remain, so not running');
        return;
      }
      stackCheckInit();
      preRun();
      // a preRun added a dependency, run will be called later
      if (runDependencies > 0) {
        dbg('run() called, but dependencies remain, so not running');
        return;
      }
      function doRun() {
        // run may have just been called through dependencies being fulfilled just in this very frame,
        // or while the async setStatus time below was happening
        // @ts-ignore
        if (calledRun) {
          return;
        }
        calledRun = true;
        // @ts-ignore
        Module.calledRun = true;
        if (ABORT) {
          return;
        }
        initRuntime();
        // @ts-ignore
        readyPromiseResolve(Module);
        // @ts-ignore
        Module.onRuntimeInitialized?.();
        // @ts-ignore
        assert(
          !Module._main,
          'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]',
        );
        postRun();
      }
      // @ts-ignore
      if (Module.setStatus) {
        // @ts-ignore
        Module.setStatus('Running...');
        setTimeout(() => {
          setTimeout(() => {
            // @ts-ignore
            Module.setStatus('');
          }, 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
      checkStackCookie();
    }

    // @ts-ignore
    function checkUnflushedContent() {
      // Compiler settings do not allow exiting the runtime, so flushing
      // the streams is not possible. but in ASSERTIONS mode we check
      // if there was something to flush, and if so tell the user they
      // should request that the runtime be exitable.
      // Normally we would not even include flush() at all, but in ASSERTIONS
      // builds we do so just for this check, and here we see if there is any
      // content to flush, that is, we check if there would have been
      // something a non-ASSERTIONS build would have not seen.
      // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
      // mode (which has its own special function for this; otherwise, all
      // the code is inside libc)
      const oldOut = out;
      const oldErr = err;
      let has = false;
      // @ts-ignore
      out = err = (x) => {
        has = true;
      };
      try {
        // it doesn't matter if it fails
        _fflush(0);
        // also flush in the JS FS layer
        ['stdout', 'stderr'].forEach((name) => {
          const info = FS.analyzePath(`/dev/${name}`);
          if (!info) {
            return;
          }
          const stream = info.object;
          // @ts-ignore
          const rdev = stream.rdev;
          const tty = TTY.ttys[rdev];
          // @ts-ignore
          if (tty?.output?.length) {
            has = true;
          }
        });
      } catch (e) {}
      out = oldOut;
      err = oldErr;
      if (has) {
        warnOnce(
          'stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.',
        );
      }
    }

    // @ts-ignore
    if (Module.preInit) {
      // @ts-ignore
      if (typeof Module.preInit == 'function') {
        // @ts-ignore
        Module.preInit = [Module.preInit];
      }
      // @ts-ignore
      while (Module.preInit.length > 0) {
        // @ts-ignore
        Module.preInit.pop()();
      }
    }

    run();

    // end include: postamble.js
    // include: postamble_modularize.js
    // In MODULARIZE mode we wrap the generated code in a factory function
    // and return either the Module itself, or a promise of the module.
    // We assign to the `moduleRtn` global here and configure closure to see
    // this as and extern so it won't get minified.
    moduleRtn = readyPromise;

    // Assertion for attempting to access module properties on the incoming
    // moduleArg.  In the past we used this object as the prototype of the module
    // and assigned properties to it, but now we return a distinct object.  This
    // keeps the instance private until it is ready (i.e the promise has been
    // resolved).
    for (const prop of Object.keys(Module)) {
      if (!(prop in moduleArg)) {
        Object.defineProperty(moduleArg, prop, {
          configurable: true,
          get() {
            abort(
              `Access to module property ('${prop}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`,
            );
          },
        });
      }
    }

    return moduleRtn;
  };
})();
if (typeof exports === 'object' && typeof module === 'object') {
  module.exports = Module;
  // @ts-ignore
} else if (typeof define === 'function' && define.amd) {
  // @ts-ignore
  define([], () => Module);
}
