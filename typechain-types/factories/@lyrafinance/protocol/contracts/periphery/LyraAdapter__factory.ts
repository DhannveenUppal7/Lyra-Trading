/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  LyraAdapter,
  LyraAdapterInterface,
} from "../../../../../@lyrafinance/protocol/contracts/periphery/LyraAdapter";

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
        internalType: "uint256",
        name: "baseExpected",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "baseReceived",
        type: "uint256",
      },
    ],
    name: "ExchangerBaseReceivedTooLow",
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
        name: "quoteExpected",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "quoteReceived",
        type: "uint256",
      },
    ],
    name: "ExchangerQuoteReceivedTooLow",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "baseAsset",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "curveSwap",
    outputs: [
      {
        internalType: "contract ICurve",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeCounter",
    outputs: [
      {
        internalType: "contract BasicFeeCounter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "greekCache",
    outputs: [
      {
        internalType: "contract IOptionGreekCache",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gwavOracle",
    outputs: [
      {
        internalType: "contract IGWAVOracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidityPool",
    outputs: [
      {
        internalType: "contract ILiquidityPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lyraRegistry",
    outputs: [
      {
        internalType: "contract ILyraRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "optionMarket",
    outputs: [
      {
        internalType: "contract IOptionMarket",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "optionPricer",
    outputs: [
      {
        internalType: "contract IOptionMarketPricer",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "optionToken",
    outputs: [
      {
        internalType: "contract IOptionToken",
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
    inputs: [],
    name: "quoteAsset",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lyraRegistry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_optionMarket",
        type: "address",
      },
      {
        internalType: "address",
        name: "_curveSwap",
        type: "address",
      },
      {
        internalType: "address",
        name: "_feeCounter",
        type: "address",
      },
    ],
    name: "setLyraAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "shortCollateral",
    outputs: [
      {
        internalType: "contract IShortCollateral",
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
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateDelegateApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6111398061007e6000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c8063a65be9ba116100b2578063cdf456e111610081578063ee9e0e6a11610066578063ee9e0e6a146102cc578063f2fde38b146102ec578063fdf262b7146102ff57600080fd5b8063cdf456e11461028c578063d8fca1ac146102ac57600080fd5b8063a65be9ba14610219578063b5ca94a014610239578063bb4a9f881461024c578063cae1c5821461026c57600080fd5b8063665a11ca116100ee578063665a11ca146101b3578063715018a6146101d3578063870dcaeb146101db5780638da5cb5b146101fb57600080fd5b80632bab754b1461012057806338b74054146101695780635794981514610189578063619a84cc146101a9575b600080fd5b6004546101409073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6009546101409073ffffffffffffffffffffffffffffffffffffffff1681565b600d546101409073ffffffffffffffffffffffffffffffffffffffff1681565b6101b161031f565b005b6005546101409073ffffffffffffffffffffffffffffffffffffffff1681565b6101b16104cb565b6006546101409073ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff16610140565b6007546101409073ffffffffffffffffffffffffffffffffffffffff1681565b6101b1610247366004610f09565b610558565b6003546101409073ffffffffffffffffffffffffffffffffffffffff1681565b6008546101409073ffffffffffffffffffffffffffffffffffffffff1681565b600b546101409073ffffffffffffffffffffffffffffffffffffffff1681565b600c546101409073ffffffffffffffffffffffffffffffffffffffff1681565b6001546101409073ffffffffffffffffffffffffffffffffffffffff1681565b6101b16102fa366004610f65565b610bc1565b600a546101409073ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633535c97b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561040d57600080fd5b505afa158015610421573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104459190610f99565b6002546040517f447fbc6300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015291169063447fbc6390602401600060405180830381600087803b1580156104b157600080fd5b505af11580156104c5573d6000803e3d6000fd5b50505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461054c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161039c565b6105566000610cf1565b565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105d9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161039c565b600a5473ffffffffffffffffffffffffffffffffffffffff16156106a757600a546003546040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201526000602482015291169063095ea7b390604401602060405180830381600087803b15801561066d57600080fd5b505af1158015610681573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a59190610fb6565b505b600b5473ffffffffffffffffffffffffffffffffffffffff161561077557600b546003546040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201526000602482015291169063095ea7b390604401602060405180830381600087803b15801561073b57600080fd5b505af115801561074f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107739190610fb6565b505b6003805473ffffffffffffffffffffffffffffffffffffffff8581167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179092556001805492871692909116821790556040517f7f2e06000000000000000000000000000000000000000000000000000000000081527f53594e5448455449585f414441505445520000000000000000000000000000006004820152637f2e06009060240160206040518083038186803b15801561083557600080fd5b505afa158015610849573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086d9190610f99565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790556108ba610d66565b600c805473ffffffffffffffffffffffffffffffffffffffff8085167fffffffffffffffffffffffff000000000000000000000000000000000000000092831617909255600d80548484169216919091179055600254604080517f3535c97b00000000000000000000000000000000000000000000000000000000815290519190921691633535c97b916004808301926020929190829003018186803b15801561096357600080fd5b505afa158015610977573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099b9190610f99565b6002546040517f447fbc6300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015291169063447fbc6390602401600060405180830381600087803b158015610a0757600080fd5b505af1158015610a1b573d6000803e3d6000fd5b5050600a546003546040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60248201529116925063095ea7b39150604401602060405180830381600087803b158015610ab457600080fd5b505af1158015610ac8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aec9190610fb6565b50600b546003546040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602482015291169063095ea7b390604401602060405180830381600087803b158015610b8257600080fd5b505af1158015610b96573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bba9190610fb6565b5050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610c42576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161039c565b73ffffffffffffffffffffffffffffffffffffffff8116610ce5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161039c565b610cee81610cf1565b50565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001546003546040517fc4158a5100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9182166004820152600092919091169063c4158a51906024016101606040518083038186803b158015610dd957600080fd5b505afa158015610ded573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e119190611029565b8051600580547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff938416179091556040830151600980548316918416919091179055608083015160088054831691841691909117905560a083015160048054831691841691909117905560e0830151600680548316918416919091179055610100830151600780548316918416919091179055610120830151600a8054831691841691909117905561014090920151600b8054909316911617905550565b73ffffffffffffffffffffffffffffffffffffffff81168114610cee57600080fd5b60008060008060808587031215610f1f57600080fd5b8435610f2a81610ee7565b93506020850135610f3a81610ee7565b92506040850135610f4a81610ee7565b91506060850135610f5a81610ee7565b939692955090935050565b600060208284031215610f7757600080fd5b8135610f8281610ee7565b9392505050565b8051610f9481610ee7565b919050565b600060208284031215610fab57600080fd5b8151610f8281610ee7565b600060208284031215610fc857600080fd5b81518015158114610f8257600080fd5b604051610160810167ffffffffffffffff81118282101715611023577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405290565b6000610160828403121561103c57600080fd5b611044610fd8565b61104d83610f89565b815261105b60208401610f89565b602082015261106c60408401610f89565b604082015261107d60608401610f89565b606082015261108e60808401610f89565b608082015261109f60a08401610f89565b60a08201526110b060c08401610f89565b60c08201526110c160e08401610f89565b60e08201526101006110d4818501610f89565b908201526101206110e6848201610f89565b908201526101406110f8848201610f89565b90820152939250505056fea26469706673582212206577167f6bff8bb36c97031c52388b3ced095debeec05eca032b80682583d46c64736f6c63430008090033";

type LyraAdapterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LyraAdapterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LyraAdapter__factory extends ContractFactory {
  constructor(...args: LyraAdapterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LyraAdapter> {
    return super.deploy(overrides || {}) as Promise<LyraAdapter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LyraAdapter {
    return super.attach(address) as LyraAdapter;
  }
  override connect(signer: Signer): LyraAdapter__factory {
    return super.connect(signer) as LyraAdapter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LyraAdapterInterface {
    return new utils.Interface(_abi) as LyraAdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LyraAdapter {
    return new Contract(address, _abi, signerOrProvider) as LyraAdapter;
  }
}
