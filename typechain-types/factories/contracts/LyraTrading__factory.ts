/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  LyraTrading,
  LyraTradingInterface,
} from "../../contracts/LyraTrading";

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
    inputs: [
      {
        internalType: "uint256",
        name: "strikeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "buyCall",
    outputs: [
      {
        internalType: "uint256",
        name: "totalCost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "callPositionId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "buyPuts",
    outputs: [
      {
        internalType: "uint256",
        name: "totalCost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "putPositionId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "initAdapter",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "openPositionIds",
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
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6119fb8061007e6000396000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c80638da5cb5b116100d8578063cdf456e11161008c578063ee9e0e6a11610066578063ee9e0e6a14610385578063f2fde38b146103a5578063fdf262b7146103b857600080fd5b8063cdf456e114610324578063d05ead4d14610344578063d8fca1ac1461036557600080fd5b8063b5ca94a0116100bd578063b5ca94a0146102d1578063bb4a9f88146102e4578063cae1c5821461030457600080fd5b80638da5cb5b14610293578063a65be9ba146102b157600080fd5b80635cf035491161012f578063665a11ca11610114578063665a11ca1461024b578063715018a61461026b578063870dcaeb1461027357600080fd5b80635cf035491461022e578063619a84cc1461024357600080fd5b80632bab754b116101605780632bab754b146101a957806338b74054146101ee578063579498151461020e57600080fd5b80631050a10f1461017c5780631b6152741461017c575b600080fd5b61018f61018a366004611611565b6103d8565b604080519283526020830191909152015b60405180910390f35b6004546101c99073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101a0565b6009546101c99073ffffffffffffffffffffffffffffffffffffffff1681565b600d546101c99073ffffffffffffffffffffffffffffffffffffffff1681565b61024161023c366004611655565b6105de565b005b610241610676565b6005546101c99073ffffffffffffffffffffffffffffffffffffffff1681565b610241610817565b6006546101c99073ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff166101c9565b6007546101c99073ffffffffffffffffffffffffffffffffffffffff1681565b6102416102df366004611655565b6108a4565b6003546101c99073ffffffffffffffffffffffffffffffffffffffff1681565b6008546101c99073ffffffffffffffffffffffffffffffffffffffff1681565b600b546101c99073ffffffffffffffffffffffffffffffffffffffff1681565b6103576103523660046116b1565b610f0d565b6040519081526020016101a0565b600c546101c99073ffffffffffffffffffffffffffffffffffffffff1681565b6001546101c99073ffffffffffffffffffffffffffffffffffffffff1681565b6102416103b33660046116ca565b610f2e565b600a546101c99073ffffffffffffffffffffffffffffffffffffffff1681565b6000806103e5848461105e565b600480546040517f23b872dd00000000000000000000000000000000000000000000000000000000815230928101929092523360248301526044820183905292945090925073ffffffffffffffffffffffffffffffffffffffff909116906323b872dd90606401600060405180830381600087803b15801561046657600080fd5b505af115801561047a573d6000803e3d6000fd5b5050600a546040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000935073ffffffffffffffffffffffffffffffffffffffff90911691506370a082319060240160206040518083038186803b1580156104ea57600080fd5b505afa1580156104fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052291906116ee565b905080156105d657600a546040517fa9059cbb0000000000000000000000000000000000000000000000000000000081523360048201526024810183905273ffffffffffffffffffffffffffffffffffffffff9091169063a9059cbb90604401602060405180830381600087803b15801561059c57600080fd5b505af11580156105b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d49190611707565b505b509250929050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610664576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b610670848484846108a4565b50505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161065b565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633535c97b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561075f57600080fd5b505afa158015610773573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107979190611739565b6002546040517f447fbc6300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015291169063447fbc6390602401600060405180830381600087803b15801561080357600080fd5b505af1158015610670573d6000803e3d6000fd5b60005473ffffffffffffffffffffffffffffffffffffffff163314610898576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161065b565b6108a26000611146565b565b60005473ffffffffffffffffffffffffffffffffffffffff163314610925576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161065b565b600a5473ffffffffffffffffffffffffffffffffffffffff16156109f357600a546003546040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201526000602482015291169063095ea7b390604401602060405180830381600087803b1580156109b957600080fd5b505af11580156109cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f19190611707565b505b600b5473ffffffffffffffffffffffffffffffffffffffff1615610ac157600b546003546040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201526000602482015291169063095ea7b390604401602060405180830381600087803b158015610a8757600080fd5b505af1158015610a9b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610abf9190611707565b505b6003805473ffffffffffffffffffffffffffffffffffffffff8581167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179092556001805492871692909116821790556040517f7f2e06000000000000000000000000000000000000000000000000000000000081527f53594e5448455449585f414441505445520000000000000000000000000000006004820152637f2e06009060240160206040518083038186803b158015610b8157600080fd5b505afa158015610b95573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb99190611739565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055610c066111bb565b600c805473ffffffffffffffffffffffffffffffffffffffff8085167fffffffffffffffffffffffff000000000000000000000000000000000000000092831617909255600d80548484169216919091179055600254604080517f3535c97b00000000000000000000000000000000000000000000000000000000815290519190921691633535c97b916004808301926020929190829003018186803b158015610caf57600080fd5b505afa158015610cc3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce79190611739565b6002546040517f447fbc6300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015291169063447fbc6390602401600060405180830381600087803b158015610d5357600080fd5b505af1158015610d67573d6000803e3d6000fd5b5050600a546003546040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60248201529116925063095ea7b39150604401602060405180830381600087803b158015610e0057600080fd5b505af1158015610e14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e389190611707565b50600b546003546040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602482015291169063095ea7b390604401602060405180830381600087803b158015610ece57600080fd5b505af1158015610ee2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f069190611707565b5050505050565b600e8181548110610f1d57600080fd5b600091825260209091200154905081565b60005473ffffffffffffffffffffffffffffffffffffffff163314610faf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161065b565b73ffffffffffffffffffffffffffffffffffffffff8116611052576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161065b565b61105b81611146565b50565b600080600060405180610120016040528086815260200160008152602001600381526020016000600481111561109657611096611756565b815260200185815260200160008152602001600081526020017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8152602001600073ffffffffffffffffffffffffffffffffffffffff16815250905060006110fd8261133c565b8051600e80546001810182556000919091527fbb7b4a454dc3493923482f07822329ed19e8244eff582cc204f8554c3620c3fd0155602081015190519097909650945050505050565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001546003546040517fc4158a5100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9182166004820152600092919091169063c4158a51906024016101606040518083038186803b15801561122e57600080fd5b505afa158015611242573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061126691906117d6565b8051600580547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff938416179091556040830151600980548316918416919091179055608083015160088054831691841691909117905560a083015160048054831691841691909117905560e0830151600680548316918416919091179055610100830151600780548316918416919091179055610120830151600a8054831691841691909117905561014090920151600b8054909316911617905550565b61136060405180606001604052806000815260200160008152602001600081525090565b60035460009073ffffffffffffffffffffffffffffffffffffffff166237f2bc6113898561151f565b6040518263ffffffff1660e01b81526004016113a591906118b0565b606060405180830381600087803b1580156113bf57600080fd5b505af11580156113d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113f79190611942565b61010084015190915073ffffffffffffffffffffffffffffffffffffffff16156114f957600d5460035461010085015173ffffffffffffffffffffffffffffffffffffffff9283169263a4ed57819216906114518761151f565b60800151602086015160408088015190517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b16815273ffffffffffffffffffffffffffffffffffffffff958616600482015294909316602485015260448401919091526064830152608482015260a401600060405180830381600087803b1580156114e057600080fd5b505af11580156114f4573d6000803e3d6000fd5b505050505b604080516060810182528251815260208084015190820152918101519082015292915050565b6115276115bb565b6040518061010001604052808360000151815260200183602001518152602001836040015181526020018360600151600481111561156757611567611756565b600481111561157857611578611756565b600481111561158957611589611756565b8152602001836080015181526020018360a0015181526020018360c0015181526020018360e001518152509050919050565b604051806101000160405280600081526020016000815260200160008152602001600060048111156115ef576115ef611756565b8152602001600081526020016000815260200160008152602001600081525090565b6000806040838503121561162457600080fd5b50508035926020909101359150565b73ffffffffffffffffffffffffffffffffffffffff8116811461105b57600080fd5b6000806000806080858703121561166b57600080fd5b843561167681611633565b9350602085013561168681611633565b9250604085013561169681611633565b915060608501356116a681611633565b939692955090935050565b6000602082840312156116c357600080fd5b5035919050565b6000602082840312156116dc57600080fd5b81356116e781611633565b9392505050565b60006020828403121561170057600080fd5b5051919050565b60006020828403121561171957600080fd5b815180151581146116e757600080fd5b805161173481611633565b919050565b60006020828403121561174b57600080fd5b81516116e781611633565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b604051610160810167ffffffffffffffff811182821017156117d0577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405290565b600061016082840312156117e957600080fd5b6117f1611785565b6117fa83611729565b815261180860208401611729565b602082015261181960408401611729565b604082015261182a60608401611729565b606082015261183b60808401611729565b608082015261184c60a08401611729565b60a082015261185d60c08401611729565b60c082015261186e60e08401611729565b60e0820152610100611881818501611729565b90820152610120611893848201611729565b908201526101406118a5848201611729565b908201529392505050565b60006101008201905082518252602083015160208301526040830151604083015260608301516005811061190d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b806060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b60006060828403121561195457600080fd5b6040516060810181811067ffffffffffffffff8211171561199e577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b8060405250825181526020830151602082015260408301516040820152809150509291505056fea264697066735822122046d8f5c76247b35068435595da0a30911cd632166ababba1250dc7ae5af4487b64736f6c63430008090033";

type LyraTradingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LyraTradingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LyraTrading__factory extends ContractFactory {
  constructor(...args: LyraTradingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LyraTrading> {
    return super.deploy(overrides || {}) as Promise<LyraTrading>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LyraTrading {
    return super.attach(address) as LyraTrading;
  }
  override connect(signer: Signer): LyraTrading__factory {
    return super.connect(signer) as LyraTrading__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LyraTradingInterface {
    return new utils.Interface(_abi) as LyraTradingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LyraTrading {
    return new Contract(address, _abi, signerOrProvider) as LyraTrading;
  }
}