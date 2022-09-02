/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  SignedDecimalMath,
  SignedDecimalMathInterface,
} from "../../../../../@lyrafinance/protocol/contracts/synthetix/SignedDecimalMath";

const _abi = [
  {
    inputs: [],
    name: "PRECISE_UNIT",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UNIT",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "highPrecisionDecimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "preciseUnit",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "unit",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6102ac61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061007c5760003560e01c80639d8e21771161005a5780639d8e2177146100be578063d5e5e6e6146100c6578063def4419d146100ce57600080fd5b8063313ce56714610081578063864029e7146100a0578063907af6c0146100b6575b600080fd5b610089601281565b60405160ff90911681526020015b60405180910390f35b6100a86100d6565b604051908152602001610097565b6100a86100e5565b6100a86100f8565b6100a8610104565b610089601b81565b6100e2601b600a610263565b81565b60006100f36012600a610263565b905090565b6100e26012600a610263565b60006100f3601b600a610263565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600181815b8085111561019a57817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561018057610180610112565b8085161561018d57918102915b93841c9390800290610146565b509250929050565b6000826101b15750600161025d565b816101be5750600061025d565b81600181146101d457600281146101de576101fa565b600191505061025d565b60ff8411156101ef576101ef610112565b50506001821b61025d565b5060208310610133831016604e8410600b841016171561021d575081810a61025d565b6102278383610141565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561025957610259610112565b0290505b92915050565b600061026f83836101a2565b939250505056fea2646970667358221220c864340f21cfad03d48c80e3fcd402c6c5520bdd076c67827bedf2c1832ed39c64736f6c63430008090033";

type SignedDecimalMathConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SignedDecimalMathConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SignedDecimalMath__factory extends ContractFactory {
  constructor(...args: SignedDecimalMathConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SignedDecimalMath> {
    return super.deploy(overrides || {}) as Promise<SignedDecimalMath>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SignedDecimalMath {
    return super.attach(address) as SignedDecimalMath;
  }
  override connect(signer: Signer): SignedDecimalMath__factory {
    return super.connect(signer) as SignedDecimalMath__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SignedDecimalMathInterface {
    return new utils.Interface(_abi) as SignedDecimalMathInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SignedDecimalMath {
    return new Contract(address, _abi, signerOrProvider) as SignedDecimalMath;
  }
}
