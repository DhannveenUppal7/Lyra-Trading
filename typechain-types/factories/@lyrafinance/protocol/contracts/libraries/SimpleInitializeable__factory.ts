/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  SimpleInitializeable,
  SimpleInitializeableInterface,
} from "../../../../../@lyrafinance/protocol/contracts/libraries/SimpleInitializeable";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
    ],
    name: "AlreadyInitialised",
    type: "error",
  },
];

export class SimpleInitializeable__factory {
  static readonly abi = _abi;
  static createInterface(): SimpleInitializeableInterface {
    return new utils.Interface(_abi) as SimpleInitializeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleInitializeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SimpleInitializeable;
  }
}
