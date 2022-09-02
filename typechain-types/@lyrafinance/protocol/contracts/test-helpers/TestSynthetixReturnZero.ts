/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface TestSynthetixReturnZeroInterface extends utils.Interface {
  functions: {
    "addBaseAsset(bytes32,address,address)": FunctionFragment;
    "addressResolver()": FunctionFragment;
    "baseAssets(bytes32)": FunctionFragment;
    "exchange(bytes32,uint256,bytes32)": FunctionFragment;
    "exchangeOnBehalf(address,bytes32,uint256,bytes32)": FunctionFragment;
    "exchangeOnBehalfWithTracking(address,bytes32,uint256,bytes32,address,bytes32)": FunctionFragment;
    "init(address,address,address)": FunctionFragment;
    "initialized()": FunctionFragment;
    "markets(bytes32)": FunctionFragment;
    "returnZero()": FunctionFragment;
    "setReturnZero(bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addBaseAsset"
      | "addressResolver"
      | "baseAssets"
      | "exchange"
      | "exchangeOnBehalf"
      | "exchangeOnBehalfWithTracking"
      | "init"
      | "initialized"
      | "markets"
      | "returnZero"
      | "setReturnZero"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addBaseAsset",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addressResolver",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "baseAssets",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "exchange",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeOnBehalf",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeOnBehalfWithTracking",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "init",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "markets",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "returnZero",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setReturnZero",
    values: [PromiseOrValue<boolean>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addBaseAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addressResolver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "baseAssets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exchangeOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeOnBehalfWithTracking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "markets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "returnZero", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setReturnZero",
    data: BytesLike
  ): Result;

  events: {
    "Exchange(address,bytes32,uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Exchange"): EventFragment;
}

export interface ExchangeEventObject {
  exchangeForAddress: string;
  sourceCurrencyKey: string;
  sourceAmount: BigNumber;
  destinationCurrencyKey: string;
}
export type ExchangeEvent = TypedEvent<
  [string, string, BigNumber, string],
  ExchangeEventObject
>;

export type ExchangeEventFilter = TypedEventFilter<ExchangeEvent>;

export interface TestSynthetixReturnZero extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestSynthetixReturnZeroInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addBaseAsset(
      ticker: PromiseOrValue<BytesLike>,
      baseAsset: PromiseOrValue<string>,
      market: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addressResolver(overrides?: CallOverrides): Promise<[string]>;

    baseAssets(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    exchange(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exchangeOnBehalf(
      exchangeForAddress: PromiseOrValue<string>,
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exchangeOnBehalfWithTracking(
      exchangeForAddress: PromiseOrValue<string>,
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<string>,
      arg5: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    init(
      _synthetixAdapter: PromiseOrValue<string>,
      _quoteAsset: PromiseOrValue<string>,
      _addressResolver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialized(overrides?: CallOverrides): Promise<[boolean]>;

    markets(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    returnZero(overrides?: CallOverrides): Promise<[boolean]>;

    setReturnZero(
      _returnZero: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addBaseAsset(
    ticker: PromiseOrValue<BytesLike>,
    baseAsset: PromiseOrValue<string>,
    market: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addressResolver(overrides?: CallOverrides): Promise<string>;

  baseAssets(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  exchange(
    sourceCurrencyKey: PromiseOrValue<BytesLike>,
    sourceAmount: PromiseOrValue<BigNumberish>,
    destinationCurrencyKey: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exchangeOnBehalf(
    exchangeForAddress: PromiseOrValue<string>,
    sourceCurrencyKey: PromiseOrValue<BytesLike>,
    sourceAmount: PromiseOrValue<BigNumberish>,
    destinationCurrencyKey: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exchangeOnBehalfWithTracking(
    exchangeForAddress: PromiseOrValue<string>,
    sourceCurrencyKey: PromiseOrValue<BytesLike>,
    sourceAmount: PromiseOrValue<BigNumberish>,
    destinationCurrencyKey: PromiseOrValue<BytesLike>,
    arg4: PromiseOrValue<string>,
    arg5: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  init(
    _synthetixAdapter: PromiseOrValue<string>,
    _quoteAsset: PromiseOrValue<string>,
    _addressResolver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialized(overrides?: CallOverrides): Promise<boolean>;

  markets(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  returnZero(overrides?: CallOverrides): Promise<boolean>;

  setReturnZero(
    _returnZero: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addBaseAsset(
      ticker: PromiseOrValue<BytesLike>,
      baseAsset: PromiseOrValue<string>,
      market: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    addressResolver(overrides?: CallOverrides): Promise<string>;

    baseAssets(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    exchange(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchangeOnBehalf(
      exchangeForAddress: PromiseOrValue<string>,
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchangeOnBehalfWithTracking(
      exchangeForAddress: PromiseOrValue<string>,
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<string>,
      arg5: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    init(
      _synthetixAdapter: PromiseOrValue<string>,
      _quoteAsset: PromiseOrValue<string>,
      _addressResolver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    initialized(overrides?: CallOverrides): Promise<boolean>;

    markets(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    returnZero(overrides?: CallOverrides): Promise<boolean>;

    setReturnZero(
      _returnZero: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Exchange(address,bytes32,uint256,bytes32)"(
      exchangeForAddress?: null,
      sourceCurrencyKey?: null,
      sourceAmount?: null,
      destinationCurrencyKey?: null
    ): ExchangeEventFilter;
    Exchange(
      exchangeForAddress?: null,
      sourceCurrencyKey?: null,
      sourceAmount?: null,
      destinationCurrencyKey?: null
    ): ExchangeEventFilter;
  };

  estimateGas: {
    addBaseAsset(
      ticker: PromiseOrValue<BytesLike>,
      baseAsset: PromiseOrValue<string>,
      market: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addressResolver(overrides?: CallOverrides): Promise<BigNumber>;

    baseAssets(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchange(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exchangeOnBehalf(
      exchangeForAddress: PromiseOrValue<string>,
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exchangeOnBehalfWithTracking(
      exchangeForAddress: PromiseOrValue<string>,
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<string>,
      arg5: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    init(
      _synthetixAdapter: PromiseOrValue<string>,
      _quoteAsset: PromiseOrValue<string>,
      _addressResolver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<BigNumber>;

    markets(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnZero(overrides?: CallOverrides): Promise<BigNumber>;

    setReturnZero(
      _returnZero: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addBaseAsset(
      ticker: PromiseOrValue<BytesLike>,
      baseAsset: PromiseOrValue<string>,
      market: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addressResolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    baseAssets(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exchange(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exchangeOnBehalf(
      exchangeForAddress: PromiseOrValue<string>,
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exchangeOnBehalfWithTracking(
      exchangeForAddress: PromiseOrValue<string>,
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<string>,
      arg5: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    init(
      _synthetixAdapter: PromiseOrValue<string>,
      _quoteAsset: PromiseOrValue<string>,
      _addressResolver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    markets(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    returnZero(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setReturnZero(
      _returnZero: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
