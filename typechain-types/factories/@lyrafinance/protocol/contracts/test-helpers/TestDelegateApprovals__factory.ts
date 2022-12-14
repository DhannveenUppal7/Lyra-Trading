/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  TestDelegateApprovals,
  TestDelegateApprovalsInterface,
} from "../../../../../@lyrafinance/protocol/contracts/test-helpers/TestDelegateApprovals";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "approvee",
        type: "address",
      },
    ],
    name: "approveExchangeOnBehalf",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "exchanger",
        type: "address",
      },
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "canExchangeOnBehalf",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "exchangingApproved",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610230806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063447fbc6314610046578063d3fb5e37146100b0578063e20e050d146100d7575b600080fd5b6100ae6100543660046101a5565b3360009081526020818152604080832073ffffffffffffffffffffffffffffffffffffffff9490941683529290522080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b005b6100c36100be3660046101c7565b610102565b604051901515815260200160405180910390f35b6100c36100e53660046101c7565b600060208181529281526040808220909352908152205460ff1681565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561014057506001610176565b5073ffffffffffffffffffffffffffffffffffffffff8082166000908152602081815260408083209386168352929052205460ff165b92915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146101a057600080fd5b919050565b6000602082840312156101b757600080fd5b6101c08261017c565b9392505050565b600080604083850312156101da57600080fd5b6101e38361017c565b91506101f16020840161017c565b9050925092905056fea26469706673582212201e9a0912c304e845087886ffcbf3b43ab1144f87b6877d62b34df244187a9f5964736f6c63430008090033";

type TestDelegateApprovalsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestDelegateApprovalsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestDelegateApprovals__factory extends ContractFactory {
  constructor(...args: TestDelegateApprovalsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestDelegateApprovals> {
    return super.deploy(overrides || {}) as Promise<TestDelegateApprovals>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestDelegateApprovals {
    return super.attach(address) as TestDelegateApprovals;
  }
  override connect(signer: Signer): TestDelegateApprovals__factory {
    return super.connect(signer) as TestDelegateApprovals__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestDelegateApprovalsInterface {
    return new utils.Interface(_abi) as TestDelegateApprovalsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestDelegateApprovals {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestDelegateApprovals;
  }
}
