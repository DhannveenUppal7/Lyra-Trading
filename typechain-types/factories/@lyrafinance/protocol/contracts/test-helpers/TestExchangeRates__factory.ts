/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  TestExchangeRates,
  TestExchangeRatesInterface,
} from "../../../../../@lyrafinance/protocol/contracts/test-helpers/TestExchangeRates";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "nominatedOwner",
        type: "address",
      },
    ],
    name: "OnlyNominatedOwner",
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
        name: "owner",
        type: "address",
      },
    ],
    name: "OnlyOwner",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerNominated",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "isInvalid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "nominateNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nominatedOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "currencyKey",
        type: "bytes32",
      },
    ],
    name: "rateAndInvalid",
    outputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "invalid",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "rates",
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
        internalType: "bytes32",
        name: "currencyKey",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "invalid",
        type: "bool",
      },
    ],
    name: "setRateAndInvalid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163390811782556040805192835260208301919091527fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c910160405180910390a161050a8061006e6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806379ba50971161005b57806379ba5097146101475780638da5cb5b1461014f578063dc7262051461016f578063f95b59ba1461019d57600080fd5b80630c71cd231461008d5780631627540c146100da5780631714e13c146100ef57806353a47bb714610102575b600080fd5b6100c061009b366004610440565b600090815260026020908152604080832054600390925290912054909160ff90911690565b604080519283529015156020830152015b60405180910390f35b6100ed6100e8366004610459565b6101d0565b005b6100ed6100fd366004610496565b610251565b6001546101229073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100d1565b6100ed6102a3565b6000546101229073ffffffffffffffffffffffffffffffffffffffff1681565b61018f61017d366004610440565b60026020526000908152604090205481565b6040519081526020016100d1565b6101c06101ab366004610440565b60036020526000908152604090205460ff1681565b60405190151581526020016100d1565b6101d86103c5565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f906a1c6bd7e3091ea86693dd029a831c19049ce77f1dce2ce0bab1cacbabce229060200160405180910390a150565b6102596103c5565b60009283526002602090815260408085209390935560039052912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b60015473ffffffffffffffffffffffffffffffffffffffff163314610321576001546040517f96cf9ed800000000000000000000000000000000000000000000000000000000815230600482015233602482015273ffffffffffffffffffffffffffffffffffffffff90911660448201526064015b60405180910390fd5b6000546001546040805173ffffffffffffffffffffffffffffffffffffffff93841681529290911660208301527fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c910160405180910390a160018054600080547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff841617909155169055565b60005473ffffffffffffffffffffffffffffffffffffffff16331461043e576000546040517f1abc2f9800000000000000000000000000000000000000000000000000000000815230600482015233602482015273ffffffffffffffffffffffffffffffffffffffff9091166044820152606401610318565b565b60006020828403121561045257600080fd5b5035919050565b60006020828403121561046b57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461048f57600080fd5b9392505050565b6000806000606084860312156104ab57600080fd5b8335925060208401359150604084013580151581146104c957600080fd5b80915050925092509256fea2646970667358221220ab1761cd7a4e04911138139bd6938e6532893b3311098fc3166a940edcdd26e964736f6c63430008090033";

type TestExchangeRatesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestExchangeRatesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestExchangeRates__factory extends ContractFactory {
  constructor(...args: TestExchangeRatesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestExchangeRates> {
    return super.deploy(overrides || {}) as Promise<TestExchangeRates>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestExchangeRates {
    return super.attach(address) as TestExchangeRates;
  }
  override connect(signer: Signer): TestExchangeRates__factory {
    return super.connect(signer) as TestExchangeRates__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestExchangeRatesInterface {
    return new utils.Interface(_abi) as TestExchangeRatesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestExchangeRates {
    return new Contract(address, _abi, signerOrProvider) as TestExchangeRates;
  }
}
