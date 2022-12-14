/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  TestERC20,
  TestERC20Interface,
} from "../../../../../@lyrafinance/protocol/contracts/test-helpers/TestERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "bool",
        name: "permit",
        type: "bool",
      },
    ],
    name: "permitMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "permitted",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200127c3803806200127c8339810160408190526200003491620001fc565b8151829082906200004d90600390602085019062000089565b5080516200006390600490602084019062000089565b5050336000908152600560205260409020805460ff1916600117905550620002a3915050565b828054620000979062000266565b90600052602060002090601f016020900481019282620000bb576000855562000106565b82601f10620000d657805160ff191683800117855562000106565b8280016001018555821562000106579182015b8281111562000106578251825591602001919060010190620000e9565b506200011492915062000118565b5090565b5b8082111562000114576000815560010162000119565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200015757600080fd5b81516001600160401b03808211156200017457620001746200012f565b604051601f8301601f19908116603f011681019082821181831017156200019f576200019f6200012f565b81604052838152602092508683858801011115620001bc57600080fd5b600091505b83821015620001e05785820183015181830184015290820190620001c1565b83821115620001f25760008385830101525b9695505050505050565b600080604083850312156200021057600080fd5b82516001600160401b03808211156200022857600080fd5b620002368683870162000145565b935060208501519150808211156200024d57600080fd5b506200025c8582860162000145565b9150509250929050565b600181811c908216806200027b57607f821691505b602082108114156200029d57634e487b7160e01b600052602260045260246000fd5b50919050565b610fc980620002b36000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80636cc301e311610097578063a457c2d711610066578063a457c2d71461020b578063a9059cbb1461021e578063c465a5d514610231578063dd62ed3e1461024457600080fd5b80636cc301e31461019757806370a08231146101ba57806395d89b41146101f05780639dc29fac146101f857600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063395093511461016f57806340c10f191461018257600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b61010261028a565b60405161010f9190610d4e565b60405180910390f35b61012b610126366004610dea565b61031c565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610e14565b610332565b6040516012815260200161010f565b61012b61017d366004610dea565b610403565b610195610190366004610dea565b61044c565b005b61012b6101a5366004610e50565b60056020526000908152604090205460ff1681565b61013f6101c8366004610e50565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6101026104b9565b610195610206366004610dea565b6104c8565b61012b610219366004610dea565b610531565b61012b61022c366004610dea565b6105ef565b61019561023f366004610e72565b6105fc565b61013f610252366004610eae565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b60606003805461029990610ee1565b80601f01602080910402602001604051908101604052809291908181526020018280546102c590610ee1565b80156103125780601f106102e757610100808354040283529160200191610312565b820191906000526020600020905b8154815290600101906020018083116102f557829003601f168201915b5050505050905090565b60006103293384846106b1565b50600192915050565b600061033f848484610831565b73ffffffffffffffffffffffffffffffffffffffff84166000908152600160209081526040808320338452909152902054828110156103eb5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6103f885338584036106b1565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091610329918590610447908690610f64565b6106b1565b3360009081526005602052604090205460ff166104ab5760405162461bcd60e51b815260206004820152600e60248201527f6f6e6c79207065726d697474656400000000000000000000000000000000000060448201526064016103e2565b6104b58282610a97565b5050565b60606004805461029990610ee1565b3360009081526005602052604090205460ff166105275760405162461bcd60e51b815260206004820152600e60248201527f6f6e6c79207065726d697474656400000000000000000000000000000000000060448201526064016103e2565b6104b58282610b9d565b33600090815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff86168452909152812054828110156105d85760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016103e2565b6105e533858584036106b1565b5060019392505050565b6000610329338484610831565b3360009081526005602052604090205460ff1661065b5760405162461bcd60e51b815260206004820152600e60248201527f6f6e6c79207065726d697474656400000000000000000000000000000000000060448201526064016103e2565b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260056020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b73ffffffffffffffffffffffffffffffffffffffff83166107395760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016103e2565b73ffffffffffffffffffffffffffffffffffffffff82166107c25760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016103e2565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff83166108ba5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016103e2565b73ffffffffffffffffffffffffffffffffffffffff82166109435760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016103e2565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902054818110156109df5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016103e2565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220858503905591851681529081208054849290610a23908490610f64565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a8991815260200190565b60405180910390a350505050565b73ffffffffffffffffffffffffffffffffffffffff8216610afa5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103e2565b8060026000828254610b0c9190610f64565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604081208054839290610b46908490610f64565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff8216610c265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016103e2565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090205481811015610cc25760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f636500000000000000000000000000000000000000000000000000000000000060648201526084016103e2565b73ffffffffffffffffffffffffffffffffffffffff83166000908152602081905260408120838303905560028054849290610cfe908490610f7c565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610824565b600060208083528351808285015260005b81811015610d7b57858101830151858201604001528201610d5f565b81811115610d8d576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610de557600080fd5b919050565b60008060408385031215610dfd57600080fd5b610e0683610dc1565b946020939093013593505050565b600080600060608486031215610e2957600080fd5b610e3284610dc1565b9250610e4060208501610dc1565b9150604084013590509250925092565b600060208284031215610e6257600080fd5b610e6b82610dc1565b9392505050565b60008060408385031215610e8557600080fd5b610e8e83610dc1565b915060208301358015158114610ea357600080fd5b809150509250929050565b60008060408385031215610ec157600080fd5b610eca83610dc1565b9150610ed860208401610dc1565b90509250929050565b600181811c90821680610ef557607f821691505b60208210811415610f2f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115610f7757610f77610f35565b500190565b600082821015610f8e57610f8e610f35565b50039056fea26469706673582212201ffe114d7ac34885bc76e5392239eca202d4ac5e063beb9ed26b061a593e965464736f6c63430008090033";

type TestERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestERC20__factory extends ContractFactory {
  constructor(...args: TestERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestERC20> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<TestERC20>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): TestERC20 {
    return super.attach(address) as TestERC20;
  }
  override connect(signer: Signer): TestERC20__factory {
    return super.connect(signer) as TestERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC20Interface {
    return new utils.Interface(_abi) as TestERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC20 {
    return new Contract(address, _abi, signerOrProvider) as TestERC20;
  }
}
