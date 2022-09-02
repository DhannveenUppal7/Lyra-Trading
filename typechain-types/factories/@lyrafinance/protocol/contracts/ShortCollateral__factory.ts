/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ShortCollateral,
  ShortCollateralInterface,
} from "../../../../@lyrafinance/protocol/contracts/ShortCollateral";

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
            internalType: "enum OptionMarket.OptionType",
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
            internalType: "enum OptionToken.PositionState",
            name: "state",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct OptionToken.PositionWithOwner",
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
        internalType: "enum OptionMarket.OptionType",
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
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountBase",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountQuote",
        type: "uint256",
      },
    ],
    name: "boardSettlement",
    outputs: [
      {
        internalType: "uint256",
        name: "lpBaseInsolvency",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lpQuoteInsolvency",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract OptionMarket",
        name: "_optionMarket",
        type: "address",
      },
      {
        internalType: "contract LiquidityPool",
        name: "_liquidityPool",
        type: "address",
      },
      {
        internalType: "contract OptionToken",
        name: "_optionToken",
        type: "address",
      },
      {
        internalType: "contract SynthetixAdapter",
        name: "_synthetixAdapter",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "_quoteAsset",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "_baseAsset",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        internalType: "enum OptionMarket.OptionType",
        name: "optionType",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "returnCollateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lpPremiums",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lpFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidatorFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "smFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "insolventAmount",
            type: "uint256",
          },
        ],
        internalType: "struct OptionToken.LiquidationFees",
        name: "liquidationFees",
        type: "tuple",
      },
    ],
    name: "routeLiquidationFunds",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "sendBaseCollateral",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "sendQuoteCollateral",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [],
    name: "updateDelegateApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526001805460ff60a01b1916905534801561001d57600080fd5b50600080546001600160a01b0319163390811782556040805192835260208301919091527fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c910160405180910390a160016002556124d3806100806000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80636afd0a191161008c5780638da5cb5b116100665780638da5cb5b146101a757806399e133f9146101ba578063bc0d6c57146101cd578063c4536039146101e057600080fd5b80636afd0a191461018357806379ba50971461018c5780638b89a2421461019457600080fd5b806353a47bb7116100bd57806353a47bb7146101285780635d6e344d14610153578063619a84cc1461017b57600080fd5b80631627540c146100e457806328a0d668146100f95780635318b30714610115575b600080fd5b6100f76100f2366004611ba2565b6101f3565b005b61010260095481565b6040519081526020015b60405180910390f35b6100f7610123366004611bc6565b610267565b60015461013b906001600160a01b031681565b6040516001600160a01b03909116815260200161010c565b610166610161366004611bf2565b6102d9565b6040805192835260208301919091520161010c565b6100f761055a565b610102600a5481565b6100f7610661565b6100f76101a2366004611bc6565b61074a565b60005461013b906001600160a01b031681565b6100f76101c8366004611c14565b6107b3565b6100f76101db366004611d84565b6109d3565b6100f76101ee366004611e27565b610ecb565b6101fb611009565b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0383169081179091556040519081527f906a1c6bd7e3091ea86693dd029a831c19049ce77f1dce2ce0bab1cacbabce229060200160405180910390a150565b6003546001600160a01b031633146102cb576003546040517f96a1986a0000000000000000000000000000000000000000000000000000000081523060048201523360248201526001600160a01b0390911660448201526064015b60405180910390fd5b6102d5828261106a565b5050565b60035460009081906001600160a01b0316331461033d576003546040517f96a1986a0000000000000000000000000000000000000000000000000000000081523060048201523360248201526001600160a01b0390911660448201526064016102c2565b6008546040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b15801561039a57600080fd5b505afa1580156103ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d29190611eec565b905080851115610403576103e68186611f34565b925080945082600960008282546103fd9190611f4b565b90915550505b6007546040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b15801561046057600080fd5b505afa158015610474573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104989190611eec565b9050808511156104c9576104ac8186611f34565b925080945082600a60008282546104c39190611f4b565b90915550505b6004546104df906001600160a01b031687611290565b6004546104f5906001600160a01b03168661106a565b600954600a54604080518981526020810189905290810187905260608101869052608081019290925260a08201527fea68904ed96be0b30e231b731598a546cccbe503f156acdfb45e35705ec4bac99060c00160405180910390a150505b9250929050565b610562611009565b600660009054906101000a90046001600160a01b03166001600160a01b0316633535c97b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156105b057600080fd5b505afa1580156105c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e89190611f63565b6006546040517f447fbc630000000000000000000000000000000000000000000000000000000081526001600160a01b03918216600482015291169063447fbc6390602401600060405180830381600087803b15801561064757600080fd5b505af115801561065b573d6000803e3d6000fd5b50505050565b6001546001600160a01b031633146106c0576001546040517f96cf9ed80000000000000000000000000000000000000000000000000000000081523060048201523360248201526001600160a01b0390911660448201526064016102c2565b600054600154604080516001600160a01b0393841681529290911660208301527fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c910160405180910390a160018054600080547fffffffffffffffffffffffff00000000000000000000000000000000000000009081166001600160a01b03841617909155169055565b6003546001600160a01b031633146107a9576003546040517f96a1986a0000000000000000000000000000000000000000000000000000000081523060048201523360248201526001600160a01b0390911660448201526064016102c2565b6102d58282611290565b6107bb611009565b60015474010000000000000000000000000000000000000000900460ff1615610812576040517f161b906f0000000000000000000000000000000000000000000000000000000081523060048201526024016102c2565b600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674010000000000000000000000000000000000000000179055600380546001600160a01b038089167fffffffffffffffffffffffff000000000000000000000000000000000000000092831617909255600480548884169083161781556005805488851690841617905560068054878516908416811790915560078054878616908516179055600880549486169490931693909317909155604080517f3535c97b0000000000000000000000000000000000000000000000000000000081529051633535c97b92828101926020929190829003018186803b15801561091c57600080fd5b505afa158015610930573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109549190611f63565b6006546040517f447fbc630000000000000000000000000000000000000000000000000000000081526001600160a01b03918216600482015291169063447fbc6390602401600060405180830381600087803b1580156109b357600080fd5b505af11580156109c7573d6000803e3d6000fd5b50505050505050505050565b600280541415610a3f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016102c2565b600280556006546003546040517f41627ea70000000000000000000000000000000000000000000000000000000081526001600160a01b0391821660048201529116906341627ea79060240160006040518083038186803b158015610aa357600080fd5b505afa158015610ab7573d6000803e3d6000fd5b50506005546040517fb757fd940000000000000000000000000000000000000000000000000000000081526000935083925082916001600160a01b03169063b757fd9490610b09908790600401611f80565b60006040518083038186803b158015610b2157600080fd5b505afa158015610b35573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610b7b9190810190611fd4565b6005546040517f8e28fc9e0000000000000000000000000000000000000000000000000000000081529192506001600160a01b031690638e28fc9e90610bc5908790600401611f80565b600060405180830381600087803b158015610bdf57600080fd5b505af1158015610bf3573d6000803e3d6000fd5b505082519150600090505b81811015610eb4576000838281518110610c1a57610c1a6120d8565b602002602001015190506000806000806000600360009054906101000a90046001600160a01b03166001600160a01b0316631fdb6cbd87602001516040518263ffffffff1660e01b8152600401610c7391815260200190565b60606040518083038186803b158015610c8b57600080fd5b505afa158015610c9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc39190612107565b9250925092508160001415610d085730866040517f0742a1b10000000000000000000000000000000000000000000000000000000081526004016102c2929190612178565b600086604001516004811115610d2057610d20612135565b1415610d4157610d3a8660c00151876060015185856114a9565b9450610e37565b600186604001516004811115610d5957610d59612135565b1415610d7357610d3a8660c0015187606001518585611558565b600286604001516004811115610d8b57610d8b612135565b1415610dbf57610da98660c001518760800151886060015184611576565b9095509350610db8848c611f4b565b9a50610e37565b600386604001516004811115610dd757610dd7612135565b1415610e0c57610df68660c001518760800151886060015186866115a9565b9095509350610e05848b611f4b565b9950610e37565b610e258660c001518760800151886060015186866115f0565b9095509350610e34848b611f4b565b99505b8560c001516001600160a01b0316336001600160a01b031687600001517f158cb5c9f6726097c3c3a64bcb6e65505043b3948c24c829b8ac0361f136045286868b604001518c606001518c8c604051610e95969594939291906121f6565b60405180910390a450505050505080610ead9061222e565b9050610bfe565b50610ebf8484611611565b50506001600255505050565b6003546001600160a01b03163314610f2a576003546040517f96a1986a0000000000000000000000000000000000000000000000000000000081523060048201523360248201526001600160a01b0390911660448201526064016102c2565b6002826004811115610f3e57610f3e612135565b1415610fa957610f52848260000151611290565b610f60838260600151611290565b6003546080820151610f7b916001600160a01b031690611861565b60045460208201516040830151610fa4926001600160a01b031691610f9f91611f4b565b611861565b61065b565b610fb784826000015161106a565b610fc583826060015161106a565b6003546080820151610fe0916001600160a01b03169061106a565b6004546020820151604083015161065b926001600160a01b03169161100491611f4b565b61106a565b6000546001600160a01b03163314611068576000546040517f1abc2f980000000000000000000000000000000000000000000000000000000081523060048201523360248201526001600160a01b0390911660448201526064016102c2565b565b80611073575050565b6007546040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b1580156110d057600080fd5b505afa1580156110e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111089190611eec565b905080821115611154576040517f96152ec700000000000000000000000000000000000000000000000000000000815230600482015260248101829052604481018390526064016102c2565b6007546040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b038581166004830152602482018590529091169063a9059cbb90604401602060405180830381600087803b1580156111bb57600080fd5b505af11580156111cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f39190612267565b611248576040517f0f7ad8ce000000000000000000000000000000000000000000000000000000008152306004820181905260248201526001600160a01b0384166044820152606481018390526084016102c2565b826001600160a01b03167f5a96aaaf4e37f0bd89cc3cf078bc8ca73ef742c192195de5784325b99cd345828360405161128391815260200190565b60405180910390a2505050565b80611299575050565b6008546040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b1580156112f657600080fd5b505afa15801561130a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061132e9190611eec565b90508082111561137a576040517f60d7924f00000000000000000000000000000000000000000000000000000000815230600482015260248101829052604481018390526064016102c2565b6008546040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b038581166004830152602482018590529091169063a9059cbb90604401602060405180830381600087803b1580156113e157600080fd5b505af11580156113f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114199190612267565b61146e576040517f9794f10b000000000000000000000000000000000000000000000000000000008152306004820181905260248201526001600160a01b0384166044820152606481018390526084016102c2565b826001600160a01b03167ff550f34e62852b05668aa98576dd6146219a078e572e105ac8781d1fb44c535b8360405161128391815260200190565b60008282116114b95760006114cd565b6114cd846114c78585611f34565b90611b31565b600480546040517f2833158f0000000000000000000000000000000000000000000000000000000081526001600160a01b0389811693820193909352602481018490529293501690632833158f90604401600060405180830381600087803b15801561153857600080fd5b505af115801561154c573d6000803e3d6000fd5b50505050949350505050565b60008183116115685760006114cd565b6114cd846114c78486611f34565b600080806115848486611b31565b90506115908682611b5c565b909350915061159f8784611290565b5094509492505050565b60008060008484116115bc5760006115ca565b6115ca866114c78787611f34565b90506115d68782611b5c565b90935091506115e5888461106a565b509550959350505050565b60008060008484106116035760006115ca565b6115ca866114c78688611f34565b6006546003546040517fcfbe7f440000000000000000000000000000000000000000000000000000000081526001600160a01b039182166004820152600092919091169063cfbe7f449060240160a06040518083038186803b15801561167657600080fd5b505afa15801561168a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116ae9190612289565b90508260095411156116d75782600960008282546116cc9190611f34565b9091555061179b9050565b821561179b576009546116ea9084611f34565b600060095560048054604080517f26e778e7000000000000000000000000000000000000000000000000000000008152855193810193909352602085015160248401528401516044830152606084015160648301526080840151608483015260a482018390529194506001600160a01b03909116906326e778e79060c401600060405180830381600087803b15801561178257600080fd5b505af1158015611796573d6000803e3d6000fd5b505050505b81600a5411156117c25781600a60008282546117b79190611f34565b9091555061185c9050565b811561185c57600a546117d59083611f34565b6000600a556004805483516040517fd867e06200000000000000000000000000000000000000000000000000000000815292830152602482018390529193506001600160a01b039091169063d867e06290604401600060405180830381600087803b15801561184357600080fd5b505af1158015611857573d6000803e3d6000fd5b505050505b505050565b8061186a575050565b6008546040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b1580156118c757600080fd5b505afa1580156118db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118ff9190611eec565b90508082111561194b576040517ff0a4ca1700000000000000000000000000000000000000000000000000000000815230600482015260248101829052604481018390526064016102c2565b6006546003546040517f23ebff490000000000000000000000000000000000000000000000000000000081526001600160a01b0391821660048201526024810185905260009291909116906323ebff4990604401602060405180830381600087803b1580156119b957600080fd5b505af11580156119cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119f19190611eec565b6007546040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b0387811660048301526024820184905292935091169063a9059cbb90604401602060405180830381600087803b158015611a5a57600080fd5b505af1158015611a6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a929190612267565b611ae7576040517f0f7ad8ce000000000000000000000000000000000000000000000000000000008152306004820181905260248201526001600160a01b0385166044820152606481018290526084016102c2565b60408051848152602081018390526001600160a01b038616917f296757321b4235e8d88a94fc3a28d3ab0d58d3b3397d9952f5a15a2fb3c75bbe910160405180910390a250505050565b6000611b3f6012600a612419565b611b498385612425565b611b539190612462565b90505b92915050565b600080828410611b7757611b708385611f34565b9150610553565b611b818484611f34565b90509250929050565b6001600160a01b0381168114611b9f57600080fd5b50565b600060208284031215611bb457600080fd5b8135611bbf81611b8a565b9392505050565b60008060408385031215611bd957600080fd5b8235611be481611b8a565b946020939093013593505050565b60008060408385031215611c0557600080fd5b50508035926020909101359150565b60008060008060008060c08789031215611c2d57600080fd5b8635611c3881611b8a565b95506020870135611c4881611b8a565b94506040870135611c5881611b8a565b93506060870135611c6881611b8a565b92506080870135611c7881611b8a565b915060a0870135611c8881611b8a565b809150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160c0810167ffffffffffffffff81118282101715611ce857611ce8611c96565b60405290565b60405160e0810167ffffffffffffffff81118282101715611ce857611ce8611c96565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611d5857611d58611c96565b604052919050565b600067ffffffffffffffff821115611d7a57611d7a611c96565b5060051b60200190565b60006020808385031215611d9757600080fd5b823567ffffffffffffffff811115611dae57600080fd5b8301601f81018513611dbf57600080fd5b8035611dd2611dcd82611d60565b611d11565b81815260059190911b82018301908381019087831115611df157600080fd5b928401925b82841015611e0f57833582529284019290840190611df6565b979650505050505050565b60058110611b9f57600080fd5b600080600080848603610120811215611e3f57600080fd5b8535611e4a81611b8a565b94506020860135611e5a81611b8a565b93506040860135611e6a81611e1a565b925060c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa082011215611e9c57600080fd5b50611ea5611cc5565b606086013581526080860135602082015260a0860135604082015260c0860135606082015260e0860135608082015261010086013560a08201528091505092959194509250565b600060208284031215611efe57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082821015611f4657611f46611f05565b500390565b60008219821115611f5e57611f5e611f05565b500190565b600060208284031215611f7557600080fd5b8151611bbf81611b8a565b6020808252825182820181905260009190848201906040850190845b81811015611fb857835183529284019291840191600101611f9c565b50909695505050505050565b8051611fcf81611b8a565b919050565b60006020808385031215611fe757600080fd5b825167ffffffffffffffff811115611ffe57600080fd5b8301601f8101851361200f57600080fd5b805161201d611dcd82611d60565b81815260e0918202830184019184820191908884111561203c57600080fd5b938501935b838510156120cc5780858a0312156120595760008081fd5b612061611cee565b85518152868601518782015260408087015161207c81611e1a565b90820152606086810151908201526080808701519082015260a080870151600681106120a85760008081fd5b9082015260c06120b9878201611fc4565b9082015283529384019391850191612041565b50979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008060006060848603121561211c57600080fd5b8351925060208401519150604084015190509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6005811061217457612174612135565b9052565b6000610100820190506001600160a01b038085168352835160208401526020840151604084015260408401516121b16060850182612164565b5060608401516080840152608084015160a084015260a0840151600681106121db576121db612135565b8060c0850152508060c08501511660e0840152509392505050565b8681526020810186905260c081016122116040830187612164565b8460608301528360808301528260a0830152979650505050505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561226057612260611f05565b5060010190565b60006020828403121561227957600080fd5b81518015158114611bbf57600080fd5b600060a0828403121561229b57600080fd5b60405160a0810181811067ffffffffffffffff821117156122be576122be611c96565b806040525082518152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b600181815b8085111561235257817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561233857612338611f05565b8085161561234557918102915b93841c93908002906122fe565b509250929050565b60008261236957506001611b56565b8161237657506000611b56565b816001811461238c5760028114612396576123b2565b6001915050611b56565b60ff8411156123a7576123a7611f05565b50506001821b611b56565b5060208310610133831016604e8410600b84101617156123d5575081810a611b56565b6123df83836122f9565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561241157612411611f05565b029392505050565b6000611b53838361235a565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561245d5761245d611f05565b500290565b600082612498577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea26469706673582212204607d05925bd85c29b425dc3bdb772bad6d33454fb292877cee940c643829b3564736f6c63430008090033";

type ShortCollateralConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShortCollateralConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ShortCollateral__factory extends ContractFactory {
  constructor(...args: ShortCollateralConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ShortCollateral> {
    return super.deploy(overrides || {}) as Promise<ShortCollateral>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ShortCollateral {
    return super.attach(address) as ShortCollateral;
  }
  override connect(signer: Signer): ShortCollateral__factory {
    return super.connect(signer) as ShortCollateral__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShortCollateralInterface {
    return new utils.Interface(_abi) as ShortCollateralInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShortCollateral {
    return new Contract(address, _abi, signerOrProvider) as ShortCollateral;
  }
}
