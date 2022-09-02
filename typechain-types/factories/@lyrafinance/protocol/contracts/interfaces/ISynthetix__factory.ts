/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISynthetix,
  ISynthetixInterface,
} from "../../../../../@lyrafinance/protocol/contracts/interfaces/ISynthetix";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sourceCurrencyKey",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "sourceAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "destinationCurrencyKey",
        type: "bytes32",
      },
    ],
    name: "exchange",
    outputs: [
      {
        internalType: "uint256",
        name: "amountReceived",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "exchangeForAddress",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "sourceCurrencyKey",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "sourceAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "destinationCurrencyKey",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "rewardAddress",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "trackingCode",
        type: "bytes32",
      },
    ],
    name: "exchangeOnBehalfWithTracking",
    outputs: [
      {
        internalType: "uint256",
        name: "amountReceived",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ISynthetix__factory {
  static readonly abi = _abi;
  static createInterface(): ISynthetixInterface {
    return new utils.Interface(_abi) as ISynthetixInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISynthetix {
    return new Contract(address, _abi, signerOrProvider) as ISynthetix;
  }
}
