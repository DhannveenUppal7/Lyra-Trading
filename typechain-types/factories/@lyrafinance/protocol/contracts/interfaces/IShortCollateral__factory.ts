/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IShortCollateral,
  IShortCollateralInterface,
} from "../../../../../@lyrafinance/protocol/contracts/interfaces/IShortCollateral";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BaseTransferFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "positionId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strikeId",
            type: "uint256",
          },
          {
            internalType: "enum IOptionMarket.OptionType",
            name: "optionType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateral",
            type: "uint256",
          },
          {
            internalType: "enum IOptionToken.PositionState",
            name: "state",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct IOptionToken.PositionWithOwner",
        name: "position",
        type: "tuple",
      },
    ],
    name: "BoardMustBeSettled",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "address",
        name: "optionMarket",
        type: "address",
      },
    ],
    name: "OnlyOptionMarket",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "OutOfBaseCollateralForExchangeAndTransfer",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "OutOfBaseCollateralForTransfer",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "OutOfQuoteCollateralForTransfer",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "QuoteTransferFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountBase",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quoteReceived",
        type: "uint256",
      },
    ],
    name: "BaseExchangedAndQuoteSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BaseSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amountBaseSent",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountQuoteSent",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpBaseInsolvency",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpQuoteInsolvency",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "LPBaseExcess",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "LPQuoteExcess",
        type: "uint256",
      },
    ],
    name: "BoardSettlementCollateralSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "settler",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "optionOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "strikePrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "priceAtExpiry",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum IOptionMarket.OptionType",
        name: "optionType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "settlementAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "insolventAmount",
        type: "uint256",
      },
    ],
    name: "PositionSettled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "QuoteSent",
    type: "event",
  },
  {
    inputs: [],
    name: "LPBaseExcess",
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
    inputs: [],
    name: "LPQuoteExcess",
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
        internalType: "uint256[]",
        name: "positionIds",
        type: "uint256[]",
      },
    ],
    name: "settleOptions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IShortCollateral__factory {
  static readonly abi = _abi;
  static createInterface(): IShortCollateralInterface {
    return new utils.Interface(_abi) as IShortCollateralInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IShortCollateral {
    return new Contract(address, _abi, signerOrProvider) as IShortCollateral;
  }
}
