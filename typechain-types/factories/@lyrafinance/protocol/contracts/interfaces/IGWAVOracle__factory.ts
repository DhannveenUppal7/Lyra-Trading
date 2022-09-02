/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IGWAVOracle,
  IGWAVOracleInterface,
} from "../../../../../@lyrafinance/protocol/contracts/interfaces/IGWAVOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "strikeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "secondsAgo",
        type: "uint256",
      },
    ],
    name: "deltaGWAV",
    outputs: [
      {
        internalType: "int256",
        name: "callDelta",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "boardId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "secondsAgo",
        type: "uint256",
      },
    ],
    name: "ivGWAV",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "strikeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "secondsAgo",
        type: "uint256",
      },
    ],
    name: "optionPriceGWAV",
    outputs: [
      {
        internalType: "uint256",
        name: "callPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "putPrice",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "strikeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "secondsAgo",
        type: "uint256",
      },
    ],
    name: "skewGWAV",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "strikeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "secondsAgo",
        type: "uint256",
      },
    ],
    name: "vegaGWAV",
    outputs: [
      {
        internalType: "uint256",
        name: "vega",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "strikeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "secondsAgo",
        type: "uint256",
      },
    ],
    name: "volGWAV",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IGWAVOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IGWAVOracleInterface {
    return new utils.Interface(_abi) as IGWAVOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGWAVOracle {
    return new Contract(address, _abi, signerOrProvider) as IGWAVOracle;
  }
}
