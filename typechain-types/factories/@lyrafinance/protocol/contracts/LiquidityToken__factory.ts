/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  LiquidityToken,
  LiquidityTokenInterface,
} from "../../../../@lyrafinance/protocol/contracts/LiquidityToken";

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
        name: "liquidityPool",
        type: "address",
      },
    ],
    name: "OnlyLiquidityPool",
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
        indexed: false,
        internalType: "contract ILiquidityTracker",
        name: "liquidityTracker",
        type: "address",
      },
    ],
    name: "LiquidityTrackerSet",
    type: "event",
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
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
        name: "tokenAmount",
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
        name: "_liquidityPool",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidityPool",
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
    name: "liquidityTracker",
    outputs: [
      {
        internalType: "contract ILiquidityTracker",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
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
        internalType: "contract ILiquidityTracker",
        name: "_liquidityTracker",
        type: "address",
      },
    ],
    name: "setLiquidityTracker",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x60806040526006805460ff60a01b191690553480156200001e57600080fd5b50604051620019573803806200195783398101604081905262000041916200023e565b8151829082906200005a906003906020850190620000cb565b50805162000070906004906020840190620000cb565b5050600580546001600160a01b03191633908117909155604080516000815260208101929092527fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c92500160405180910390a15050620002e5565b828054620000d990620002a8565b90600052602060002090601f016020900481019282620000fd576000855562000148565b82601f106200011857805160ff191683800117855562000148565b8280016001018555821562000148579182015b82811115620001485782518255916020019190600101906200012b565b50620001569291506200015a565b5090565b5b808211156200015657600081556001016200015b565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200019957600080fd5b81516001600160401b0380821115620001b657620001b662000171565b604051601f8301601f19908116603f01168101908282118183101715620001e157620001e162000171565b81604052838152602092508683858801011115620001fe57600080fd5b600091505b8382101562000222578582018301518183018401529082019062000203565b83821115620002345760008385830101525b9695505050505050565b600080604083850312156200025257600080fd5b82516001600160401b03808211156200026a57600080fd5b620002788683870162000187565b935060208501519150808211156200028f57600080fd5b506200029e8582860162000187565b9150509250929050565b600181811c90821680620002bd57607f821691505b60208210811415620002df57634e487b7160e01b600052602260045260246000fd5b50919050565b61166280620002f56000396000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c806353a47bb7116100d857806395d89b411161008c578063a9059cbb11610066578063a9059cbb14610343578063b62c4a6914610356578063dd62ed3e1461037657600080fd5b806395d89b41146103155780639dc29fac1461031d578063a457c2d71461033057600080fd5b806370a08231116100bd57806370a08231146102b757806379ba5097146102ed5780638da5cb5b146102f557600080fd5b806353a47bb714610252578063665a11ca1461029757600080fd5b806319ab453c1161012f578063313ce56711610114578063313ce5671461021d578063395093511461022c57806340c10f191461023f57600080fd5b806319ab453c146101f757806323b872dd1461020a57600080fd5b8063095ea7b311610160578063095ea7b3146101af5780631627540c146101d257806318160ddd146101e557600080fd5b80630452681e1461017c57806306fdde0314610191575b600080fd5b61018f61018a36600461143d565b6103bc565b005b61019961043e565b6040516101a69190611461565b60405180910390f35b6101c26101bd3660046114d4565b6104d0565b60405190151581526020016101a6565b61018f6101e036600461143d565b6104e6565b6002545b6040519081526020016101a6565b61018f61020536600461143d565b610561565b6101c2610218366004611500565b61064c565b604051601281526020016101a6565b6101c261023a3660046114d4565b610732565b61018f61024d3660046114d4565b61077b565b6006546102729073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101a6565b6007546102729073ffffffffffffffffffffffffffffffffffffffff1681565b6101e96102c536600461143d565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b61018f610802565b6005546102729073ffffffffffffffffffffffffffffffffffffffff1681565b61019961091f565b61018f61032b3660046114d4565b61092e565b6101c261033e3660046114d4565b6109b1565b6101c26103513660046114d4565b610a89565b6008546102729073ffffffffffffffffffffffffffffffffffffffff1681565b6101e9610384366004611541565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6103c4610a96565b600880547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527fd2320cff3a80dac6b5da4ed0a0609d55549ad83a811f7115e9a51b288d6f4133906020015b60405180910390a150565b60606003805461044d9061157a565b80601f01602080910402602001604051908101604052809291908181526020018280546104799061157a565b80156104c65780601f1061049b576101008083540402835291602001916104c6565b820191906000526020600020905b8154815290600101906020018083116104a957829003601f168201915b5050505050905090565b60006104dd338484610b11565b50600192915050565b6104ee610a96565b600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f906a1c6bd7e3091ea86693dd029a831c19049ce77f1dce2ce0bab1cacbabce2290602001610433565b610569610a96565b60065474010000000000000000000000000000000000000000900460ff16156105c5576040517f161b906f0000000000000000000000000000000000000000000000000000000081523060048201526024015b60405180910390fd5b600680547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790556007805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000909216919091179055565b6000610659848484610cc4565b73ffffffffffffffffffffffffffffffffffffffff841660009081526001602090815260408083203384529091529020548281101561071a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084016105bc565b6107278533858403610b11565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490916104dd9185906107769086906115fd565b610b11565b60075473ffffffffffffffffffffffffffffffffffffffff1633146107f4576007546040517f2954176400000000000000000000000000000000000000000000000000000000815230600482015233602482015273ffffffffffffffffffffffffffffffffffffffff90911660448201526064016105bc565b6107fe8282610f83565b5050565b60065473ffffffffffffffffffffffffffffffffffffffff16331461087b576006546040517f96cf9ed800000000000000000000000000000000000000000000000000000000815230600482015233602482015273ffffffffffffffffffffffffffffffffffffffff90911660448201526064016105bc565b6005546006546040805173ffffffffffffffffffffffffffffffffffffffff93841681529290911660208301527fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c910160405180910390a160068054600580547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff841617909155169055565b60606004805461044d9061157a565b60075473ffffffffffffffffffffffffffffffffffffffff1633146109a7576007546040517f2954176400000000000000000000000000000000000000000000000000000000815230600482015233602482015273ffffffffffffffffffffffffffffffffffffffff90911660448201526064016105bc565b6107fe82826110ab565b33600090815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8616845290915281205482811015610a72576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016105bc565b610a7f3385858403610b11565b5060019392505050565b60006104dd338484610cc4565b60055473ffffffffffffffffffffffffffffffffffffffff163314610b0f576005546040517f1abc2f9800000000000000000000000000000000000000000000000000000000815230600482015233602482015273ffffffffffffffffffffffffffffffffffffffff90911660448201526064016105bc565b565b73ffffffffffffffffffffffffffffffffffffffff8316610bb3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016105bc565b73ffffffffffffffffffffffffffffffffffffffff8216610c56576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016105bc565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d67576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016105bc565b73ffffffffffffffffffffffffffffffffffffffff8216610e0a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016105bc565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610ec0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016105bc565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220858503905591851681529081208054849290610f049084906115fd565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f6a91815260200190565b60405180910390a3610f7d8484846112a4565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611000576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016105bc565b806002600082825461101291906115fd565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000908152602081905260408120805483929061104c9084906115fd565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a36107fe600083836112a4565b73ffffffffffffffffffffffffffffffffffffffff821661114e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016105bc565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090205481811015611204576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f636500000000000000000000000000000000000000000000000000000000000060648201526084016105bc565b73ffffffffffffffffffffffffffffffffffffffff83166000908152602081905260408120838303905560028054849290611240908490611615565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a361129f836000846112a4565b505050565b60085473ffffffffffffffffffffffffffffffffffffffff161561129f5773ffffffffffffffffffffffffffffffffffffffff83161561136b576008546040517f1e10eeaf00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301526024820184905290911690631e10eeaf90604401600060405180830381600087803b15801561135257600080fd5b505af1158015611366573d6000803e3d6000fd5b505050505b73ffffffffffffffffffffffffffffffffffffffff82161561129f576008546040517f6039fbdb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301526024820184905290911690636039fbdb90604401600060405180830381600087803b1580156113fb57600080fd5b505af115801561140f573d6000803e3d6000fd5b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461143a57600080fd5b50565b60006020828403121561144f57600080fd5b813561145a81611418565b9392505050565b600060208083528351808285015260005b8181101561148e57858101830151858201604001528201611472565b818111156114a0576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600080604083850312156114e757600080fd5b82356114f281611418565b946020939093013593505050565b60008060006060848603121561151557600080fd5b833561152081611418565b9250602084013561153081611418565b929592945050506040919091013590565b6000806040838503121561155457600080fd5b823561155f81611418565b9150602083013561156f81611418565b809150509250929050565b600181811c9082168061158e57607f821691505b602082108114156115c8577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115611610576116106115ce565b500190565b600082821015611627576116276115ce565b50039056fea2646970667358221220c5d777b46f1280a20311be2b298d6dcc577746f15787e594547d77d3ab3627a464736f6c63430008090033";

type LiquidityTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LiquidityTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LiquidityToken__factory extends ContractFactory {
  constructor(...args: LiquidityTokenConstructorParams) {
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
  ): Promise<LiquidityToken> {
    return super.deploy(
      name_,
      symbol_,
      overrides || {}
    ) as Promise<LiquidityToken>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): LiquidityToken {
    return super.attach(address) as LiquidityToken;
  }
  override connect(signer: Signer): LiquidityToken__factory {
    return super.connect(signer) as LiquidityToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LiquidityTokenInterface {
    return new utils.Interface(_abi) as LiquidityTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LiquidityToken {
    return new Contract(address, _abi, signerOrProvider) as LiquidityToken;
  }
}
