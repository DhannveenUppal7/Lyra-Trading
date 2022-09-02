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

export declare namespace IOptionGreekCache {
  export type NetGreeksStruct = {
    netDelta: PromiseOrValue<BigNumberish>;
    netStdVega: PromiseOrValue<BigNumberish>;
    netOptionValue: PromiseOrValue<BigNumberish>;
  };

  export type NetGreeksStructOutput = [BigNumber, BigNumber, BigNumber] & {
    netDelta: BigNumber;
    netStdVega: BigNumber;
    netOptionValue: BigNumber;
  };

  export type OptionBoardCacheStruct = {
    id: PromiseOrValue<BigNumberish>;
    strikes: PromiseOrValue<BigNumberish>[];
    expiry: PromiseOrValue<BigNumberish>;
    iv: PromiseOrValue<BigNumberish>;
    netGreeks: IOptionGreekCache.NetGreeksStruct;
    updatedAt: PromiseOrValue<BigNumberish>;
    updatedAtPrice: PromiseOrValue<BigNumberish>;
    maxSkewVariance: PromiseOrValue<BigNumberish>;
    ivVariance: PromiseOrValue<BigNumberish>;
  };

  export type OptionBoardCacheStructOutput = [
    BigNumber,
    BigNumber[],
    BigNumber,
    BigNumber,
    IOptionGreekCache.NetGreeksStructOutput,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    id: BigNumber;
    strikes: BigNumber[];
    expiry: BigNumber;
    iv: BigNumber;
    netGreeks: IOptionGreekCache.NetGreeksStructOutput;
    updatedAt: BigNumber;
    updatedAtPrice: BigNumber;
    maxSkewVariance: BigNumber;
    ivVariance: BigNumber;
  };

  export type ForceCloseParametersStruct = {
    ivGWAVPeriod: PromiseOrValue<BigNumberish>;
    skewGWAVPeriod: PromiseOrValue<BigNumberish>;
    shortVolShock: PromiseOrValue<BigNumberish>;
    shortPostCutoffVolShock: PromiseOrValue<BigNumberish>;
    longVolShock: PromiseOrValue<BigNumberish>;
    longPostCutoffVolShock: PromiseOrValue<BigNumberish>;
    liquidateVolShock: PromiseOrValue<BigNumberish>;
    liquidatePostCutoffVolShock: PromiseOrValue<BigNumberish>;
    shortSpotMin: PromiseOrValue<BigNumberish>;
    liquidateSpotMin: PromiseOrValue<BigNumberish>;
  };

  export type ForceCloseParametersStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    ivGWAVPeriod: BigNumber;
    skewGWAVPeriod: BigNumber;
    shortVolShock: BigNumber;
    shortPostCutoffVolShock: BigNumber;
    longVolShock: BigNumber;
    longPostCutoffVolShock: BigNumber;
    liquidateVolShock: BigNumber;
    liquidatePostCutoffVolShock: BigNumber;
    shortSpotMin: BigNumber;
    liquidateSpotMin: BigNumber;
  };

  export type GlobalCacheStruct = {
    minUpdatedAt: PromiseOrValue<BigNumberish>;
    minUpdatedAtPrice: PromiseOrValue<BigNumberish>;
    maxUpdatedAtPrice: PromiseOrValue<BigNumberish>;
    maxSkewVariance: PromiseOrValue<BigNumberish>;
    maxIvVariance: PromiseOrValue<BigNumberish>;
    netGreeks: IOptionGreekCache.NetGreeksStruct;
  };

  export type GlobalCacheStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    IOptionGreekCache.NetGreeksStructOutput
  ] & {
    minUpdatedAt: BigNumber;
    minUpdatedAtPrice: BigNumber;
    maxUpdatedAtPrice: BigNumber;
    maxSkewVariance: BigNumber;
    maxIvVariance: BigNumber;
    netGreeks: IOptionGreekCache.NetGreeksStructOutput;
  };

  export type GreekCacheParametersStruct = {
    maxStrikesPerBoard: PromiseOrValue<BigNumberish>;
    acceptableSpotPricePercentMove: PromiseOrValue<BigNumberish>;
    staleUpdateDuration: PromiseOrValue<BigNumberish>;
    varianceIvGWAVPeriod: PromiseOrValue<BigNumberish>;
    varianceSkewGWAVPeriod: PromiseOrValue<BigNumberish>;
    optionValueIvGWAVPeriod: PromiseOrValue<BigNumberish>;
    optionValueSkewGWAVPeriod: PromiseOrValue<BigNumberish>;
    gwavSkewFloor: PromiseOrValue<BigNumberish>;
    gwavSkewCap: PromiseOrValue<BigNumberish>;
    rateAndCarry: PromiseOrValue<BigNumberish>;
  };

  export type GreekCacheParametersStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    maxStrikesPerBoard: BigNumber;
    acceptableSpotPricePercentMove: BigNumber;
    staleUpdateDuration: BigNumber;
    varianceIvGWAVPeriod: BigNumber;
    varianceSkewGWAVPeriod: BigNumber;
    optionValueIvGWAVPeriod: BigNumber;
    optionValueSkewGWAVPeriod: BigNumber;
    gwavSkewFloor: BigNumber;
    gwavSkewCap: BigNumber;
    rateAndCarry: BigNumber;
  };

  export type MinCollateralParametersStruct = {
    minStaticQuoteCollateral: PromiseOrValue<BigNumberish>;
    minStaticBaseCollateral: PromiseOrValue<BigNumberish>;
    shockVolA: PromiseOrValue<BigNumberish>;
    shockVolPointA: PromiseOrValue<BigNumberish>;
    shockVolB: PromiseOrValue<BigNumberish>;
    shockVolPointB: PromiseOrValue<BigNumberish>;
    callSpotPriceShock: PromiseOrValue<BigNumberish>;
    putSpotPriceShock: PromiseOrValue<BigNumberish>;
  };

  export type MinCollateralParametersStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    minStaticQuoteCollateral: BigNumber;
    minStaticBaseCollateral: BigNumber;
    shockVolA: BigNumber;
    shockVolPointA: BigNumber;
    shockVolB: BigNumber;
    shockVolPointB: BigNumber;
    callSpotPriceShock: BigNumber;
    putSpotPriceShock: BigNumber;
  };

  export type StrikeGreeksStruct = {
    callDelta: PromiseOrValue<BigNumberish>;
    putDelta: PromiseOrValue<BigNumberish>;
    stdVega: PromiseOrValue<BigNumberish>;
    callPrice: PromiseOrValue<BigNumberish>;
    putPrice: PromiseOrValue<BigNumberish>;
  };

  export type StrikeGreeksStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    callDelta: BigNumber;
    putDelta: BigNumber;
    stdVega: BigNumber;
    callPrice: BigNumber;
    putPrice: BigNumber;
  };

  export type StrikeCacheStruct = {
    id: PromiseOrValue<BigNumberish>;
    boardId: PromiseOrValue<BigNumberish>;
    strikePrice: PromiseOrValue<BigNumberish>;
    skew: PromiseOrValue<BigNumberish>;
    greeks: IOptionGreekCache.StrikeGreeksStruct;
    callExposure: PromiseOrValue<BigNumberish>;
    putExposure: PromiseOrValue<BigNumberish>;
    skewVariance: PromiseOrValue<BigNumberish>;
  };

  export type StrikeCacheStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    IOptionGreekCache.StrikeGreeksStructOutput,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    id: BigNumber;
    boardId: BigNumber;
    strikePrice: BigNumber;
    skew: BigNumber;
    greeks: IOptionGreekCache.StrikeGreeksStructOutput;
    callExposure: BigNumber;
    putExposure: BigNumber;
    skewVariance: BigNumber;
  };

  export type BoardGreeksViewStruct = {
    boardGreeks: IOptionGreekCache.NetGreeksStruct;
    ivGWAV: PromiseOrValue<BigNumberish>;
    strikeGreeks: IOptionGreekCache.StrikeGreeksStruct[];
    skewGWAVs: PromiseOrValue<BigNumberish>[];
  };

  export type BoardGreeksViewStructOutput = [
    IOptionGreekCache.NetGreeksStructOutput,
    BigNumber,
    IOptionGreekCache.StrikeGreeksStructOutput[],
    BigNumber[]
  ] & {
    boardGreeks: IOptionGreekCache.NetGreeksStructOutput;
    ivGWAV: BigNumber;
    strikeGreeks: IOptionGreekCache.StrikeGreeksStructOutput[];
    skewGWAVs: BigNumber[];
  };
}

export declare namespace ILiquidityPool {
  export type LiquidityStruct = {
    freeLiquidity: PromiseOrValue<BigNumberish>;
    burnableLiquidity: PromiseOrValue<BigNumberish>;
    usedCollatLiquidity: PromiseOrValue<BigNumberish>;
    pendingDeltaLiquidity: PromiseOrValue<BigNumberish>;
    usedDeltaLiquidity: PromiseOrValue<BigNumberish>;
    NAV: PromiseOrValue<BigNumberish>;
  };

  export type LiquidityStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    freeLiquidity: BigNumber;
    burnableLiquidity: BigNumber;
    usedCollatLiquidity: BigNumber;
    pendingDeltaLiquidity: BigNumber;
    usedDeltaLiquidity: BigNumber;
    NAV: BigNumber;
  };
}

export declare namespace ISynthetixAdapter {
  export type ExchangeParamsStruct = {
    spotPrice: PromiseOrValue<BigNumberish>;
    quoteKey: PromiseOrValue<BytesLike>;
    baseKey: PromiseOrValue<BytesLike>;
    quoteBaseFeeRate: PromiseOrValue<BigNumberish>;
    baseQuoteFeeRate: PromiseOrValue<BigNumberish>;
  };

  export type ExchangeParamsStructOutput = [
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber
  ] & {
    spotPrice: BigNumber;
    quoteKey: string;
    baseKey: string;
    quoteBaseFeeRate: BigNumber;
    baseQuoteFeeRate: BigNumber;
  };
}

export declare namespace IOptionMarket {
  export type TradeParametersStruct = {
    isBuy: PromiseOrValue<boolean>;
    isForceClose: PromiseOrValue<boolean>;
    tradeDirection: PromiseOrValue<BigNumberish>;
    optionType: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
    expiry: PromiseOrValue<BigNumberish>;
    strikePrice: PromiseOrValue<BigNumberish>;
    liquidity: ILiquidityPool.LiquidityStruct;
    exchangeParams: ISynthetixAdapter.ExchangeParamsStruct;
  };

  export type TradeParametersStructOutput = [
    boolean,
    boolean,
    number,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    ILiquidityPool.LiquidityStructOutput,
    ISynthetixAdapter.ExchangeParamsStructOutput
  ] & {
    isBuy: boolean;
    isForceClose: boolean;
    tradeDirection: number;
    optionType: number;
    amount: BigNumber;
    expiry: BigNumber;
    strikePrice: BigNumber;
    liquidity: ILiquidityPool.LiquidityStructOutput;
    exchangeParams: ISynthetixAdapter.ExchangeParamsStructOutput;
  };

  export type StrikeStruct = {
    id: PromiseOrValue<BigNumberish>;
    strikePrice: PromiseOrValue<BigNumberish>;
    skew: PromiseOrValue<BigNumberish>;
    longCall: PromiseOrValue<BigNumberish>;
    shortCallBase: PromiseOrValue<BigNumberish>;
    shortCallQuote: PromiseOrValue<BigNumberish>;
    longPut: PromiseOrValue<BigNumberish>;
    shortPut: PromiseOrValue<BigNumberish>;
    boardId: PromiseOrValue<BigNumberish>;
  };

  export type StrikeStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    id: BigNumber;
    strikePrice: BigNumber;
    skew: BigNumber;
    longCall: BigNumber;
    shortCallBase: BigNumber;
    shortCallQuote: BigNumber;
    longPut: BigNumber;
    shortPut: BigNumber;
    boardId: BigNumber;
  };
}

export interface IOptionGreekCacheInterface extends utils.Interface {
  functions: {
    "getBoardGreeksView(uint256)": FunctionFragment;
    "getForceCloseParams()": FunctionFragment;
    "getGlobalCache()": FunctionFragment;
    "getGlobalNetDelta()": FunctionFragment;
    "getGlobalOptionValue()": FunctionFragment;
    "getGreekCacheParams()": FunctionFragment;
    "getIvGWAV(uint256,uint256)": FunctionFragment;
    "getMinCollatParams()": FunctionFragment;
    "getMinCollateral(uint8,uint256,uint256,uint256,uint256)": FunctionFragment;
    "getOptionBoardCache(uint256)": FunctionFragment;
    "getPriceForForceClose((bool,bool,uint8,uint8,uint256,uint256,uint256,(uint256,uint256,uint256,uint256,uint256,uint256),(uint256,bytes32,bytes32,uint256,uint256)),(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,bool)": FunctionFragment;
    "getShockVol(uint256)": FunctionFragment;
    "getSkewGWAV(uint256,uint256)": FunctionFragment;
    "getStrikeCache(uint256)": FunctionFragment;
    "isBoardCacheStale(uint256)": FunctionFragment;
    "isGlobalCacheStale(uint256)": FunctionFragment;
    "updateBoardCachedGreeks(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getBoardGreeksView"
      | "getForceCloseParams"
      | "getGlobalCache"
      | "getGlobalNetDelta"
      | "getGlobalOptionValue"
      | "getGreekCacheParams"
      | "getIvGWAV"
      | "getMinCollatParams"
      | "getMinCollateral"
      | "getOptionBoardCache"
      | "getPriceForForceClose"
      | "getShockVol"
      | "getSkewGWAV"
      | "getStrikeCache"
      | "isBoardCacheStale"
      | "isGlobalCacheStale"
      | "updateBoardCachedGreeks"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getBoardGreeksView",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getForceCloseParams",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGlobalCache",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGlobalNetDelta",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGlobalOptionValue",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGreekCacheParams",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getIvGWAV",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getMinCollatParams",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMinCollateral",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getOptionBoardCache",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceForForceClose",
    values: [
      IOptionMarket.TradeParametersStruct,
      IOptionMarket.StrikeStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getShockVol",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSkewGWAV",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getStrikeCache",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isBoardCacheStale",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isGlobalCacheStale",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateBoardCachedGreeks",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getBoardGreeksView",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getForceCloseParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGlobalCache",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGlobalNetDelta",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGlobalOptionValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGreekCacheParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getIvGWAV", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMinCollatParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOptionBoardCache",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceForForceClose",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getShockVol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSkewGWAV",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStrikeCache",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isBoardCacheStale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isGlobalCacheStale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateBoardCachedGreeks",
    data: BytesLike
  ): Result;

  events: {
    "BoardCacheRemoved(uint256)": EventFragment;
    "BoardCacheUpdated(tuple)": EventFragment;
    "BoardIvUpdated(uint256,uint256,uint256)": EventFragment;
    "ForceCloseParametersSet(tuple)": EventFragment;
    "GlobalCacheUpdated(tuple)": EventFragment;
    "GreekCacheParametersSet(tuple)": EventFragment;
    "MinCollateralParametersSet(tuple)": EventFragment;
    "StrikeCacheRemoved(uint256)": EventFragment;
    "StrikeCacheUpdated(tuple)": EventFragment;
    "StrikeSkewUpdated(uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BoardCacheRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BoardCacheUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BoardIvUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ForceCloseParametersSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GlobalCacheUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GreekCacheParametersSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MinCollateralParametersSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StrikeCacheRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StrikeCacheUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StrikeSkewUpdated"): EventFragment;
}

export interface BoardCacheRemovedEventObject {
  boardId: BigNumber;
}
export type BoardCacheRemovedEvent = TypedEvent<
  [BigNumber],
  BoardCacheRemovedEventObject
>;

export type BoardCacheRemovedEventFilter =
  TypedEventFilter<BoardCacheRemovedEvent>;

export interface BoardCacheUpdatedEventObject {
  boardCache: IOptionGreekCache.OptionBoardCacheStructOutput;
}
export type BoardCacheUpdatedEvent = TypedEvent<
  [IOptionGreekCache.OptionBoardCacheStructOutput],
  BoardCacheUpdatedEventObject
>;

export type BoardCacheUpdatedEventFilter =
  TypedEventFilter<BoardCacheUpdatedEvent>;

export interface BoardIvUpdatedEventObject {
  boardId: BigNumber;
  newIv: BigNumber;
  globalMaxIvVariance: BigNumber;
}
export type BoardIvUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  BoardIvUpdatedEventObject
>;

export type BoardIvUpdatedEventFilter = TypedEventFilter<BoardIvUpdatedEvent>;

export interface ForceCloseParametersSetEventObject {
  params: IOptionGreekCache.ForceCloseParametersStructOutput;
}
export type ForceCloseParametersSetEvent = TypedEvent<
  [IOptionGreekCache.ForceCloseParametersStructOutput],
  ForceCloseParametersSetEventObject
>;

export type ForceCloseParametersSetEventFilter =
  TypedEventFilter<ForceCloseParametersSetEvent>;

export interface GlobalCacheUpdatedEventObject {
  globalCache: IOptionGreekCache.GlobalCacheStructOutput;
}
export type GlobalCacheUpdatedEvent = TypedEvent<
  [IOptionGreekCache.GlobalCacheStructOutput],
  GlobalCacheUpdatedEventObject
>;

export type GlobalCacheUpdatedEventFilter =
  TypedEventFilter<GlobalCacheUpdatedEvent>;

export interface GreekCacheParametersSetEventObject {
  params: IOptionGreekCache.GreekCacheParametersStructOutput;
}
export type GreekCacheParametersSetEvent = TypedEvent<
  [IOptionGreekCache.GreekCacheParametersStructOutput],
  GreekCacheParametersSetEventObject
>;

export type GreekCacheParametersSetEventFilter =
  TypedEventFilter<GreekCacheParametersSetEvent>;

export interface MinCollateralParametersSetEventObject {
  params: IOptionGreekCache.MinCollateralParametersStructOutput;
}
export type MinCollateralParametersSetEvent = TypedEvent<
  [IOptionGreekCache.MinCollateralParametersStructOutput],
  MinCollateralParametersSetEventObject
>;

export type MinCollateralParametersSetEventFilter =
  TypedEventFilter<MinCollateralParametersSetEvent>;

export interface StrikeCacheRemovedEventObject {
  strikeId: BigNumber;
}
export type StrikeCacheRemovedEvent = TypedEvent<
  [BigNumber],
  StrikeCacheRemovedEventObject
>;

export type StrikeCacheRemovedEventFilter =
  TypedEventFilter<StrikeCacheRemovedEvent>;

export interface StrikeCacheUpdatedEventObject {
  strikeCache: IOptionGreekCache.StrikeCacheStructOutput;
}
export type StrikeCacheUpdatedEvent = TypedEvent<
  [IOptionGreekCache.StrikeCacheStructOutput],
  StrikeCacheUpdatedEventObject
>;

export type StrikeCacheUpdatedEventFilter =
  TypedEventFilter<StrikeCacheUpdatedEvent>;

export interface StrikeSkewUpdatedEventObject {
  strikeId: BigNumber;
  newSkew: BigNumber;
  globalMaxSkewVariance: BigNumber;
}
export type StrikeSkewUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  StrikeSkewUpdatedEventObject
>;

export type StrikeSkewUpdatedEventFilter =
  TypedEventFilter<StrikeSkewUpdatedEvent>;

export interface IOptionGreekCache extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IOptionGreekCacheInterface;

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
    getBoardGreeksView(
      boardId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IOptionGreekCache.BoardGreeksViewStructOutput]>;

    getForceCloseParams(
      overrides?: CallOverrides
    ): Promise<[IOptionGreekCache.ForceCloseParametersStructOutput]>;

    getGlobalCache(
      overrides?: CallOverrides
    ): Promise<[IOptionGreekCache.GlobalCacheStructOutput]>;

    getGlobalNetDelta(overrides?: CallOverrides): Promise<[BigNumber]>;

    getGlobalOptionValue(overrides?: CallOverrides): Promise<[BigNumber]>;

    getGreekCacheParams(
      overrides?: CallOverrides
    ): Promise<[IOptionGreekCache.GreekCacheParametersStructOutput]>;

    getIvGWAV(
      boardId: PromiseOrValue<BigNumberish>,
      secondsAgo: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { ivGWAV: BigNumber }>;

    getMinCollatParams(
      overrides?: CallOverrides
    ): Promise<[IOptionGreekCache.MinCollateralParametersStructOutput]>;

    getMinCollateral(
      optionType: PromiseOrValue<BigNumberish>,
      strikePrice: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      spotPrice: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { minCollateral: BigNumber }>;

    getOptionBoardCache(
      boardId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IOptionGreekCache.OptionBoardCacheStructOutput]>;

    getPriceForForceClose(
      trade: IOptionMarket.TradeParametersStruct,
      strike: IOptionMarket.StrikeStruct,
      expiry: PromiseOrValue<BigNumberish>,
      newVol: PromiseOrValue<BigNumberish>,
      isPostCutoff: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        optionPrice: BigNumber;
        forceCloseVol: BigNumber;
      }
    >;

    getShockVol(
      timeToMaturity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSkewGWAV(
      strikeId: PromiseOrValue<BigNumberish>,
      secondsAgo: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { skewGWAV: BigNumber }>;

    getStrikeCache(
      strikeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IOptionGreekCache.StrikeCacheStructOutput]>;

    isBoardCacheStale(
      boardId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isGlobalCacheStale(
      spotPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    updateBoardCachedGreeks(
      boardId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getBoardGreeksView(
    boardId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IOptionGreekCache.BoardGreeksViewStructOutput>;

  getForceCloseParams(
    overrides?: CallOverrides
  ): Promise<IOptionGreekCache.ForceCloseParametersStructOutput>;

  getGlobalCache(
    overrides?: CallOverrides
  ): Promise<IOptionGreekCache.GlobalCacheStructOutput>;

  getGlobalNetDelta(overrides?: CallOverrides): Promise<BigNumber>;

  getGlobalOptionValue(overrides?: CallOverrides): Promise<BigNumber>;

  getGreekCacheParams(
    overrides?: CallOverrides
  ): Promise<IOptionGreekCache.GreekCacheParametersStructOutput>;

  getIvGWAV(
    boardId: PromiseOrValue<BigNumberish>,
    secondsAgo: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMinCollatParams(
    overrides?: CallOverrides
  ): Promise<IOptionGreekCache.MinCollateralParametersStructOutput>;

  getMinCollateral(
    optionType: PromiseOrValue<BigNumberish>,
    strikePrice: PromiseOrValue<BigNumberish>,
    expiry: PromiseOrValue<BigNumberish>,
    spotPrice: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getOptionBoardCache(
    boardId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IOptionGreekCache.OptionBoardCacheStructOutput>;

  getPriceForForceClose(
    trade: IOptionMarket.TradeParametersStruct,
    strike: IOptionMarket.StrikeStruct,
    expiry: PromiseOrValue<BigNumberish>,
    newVol: PromiseOrValue<BigNumberish>,
    isPostCutoff: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      optionPrice: BigNumber;
      forceCloseVol: BigNumber;
    }
  >;

  getShockVol(
    timeToMaturity: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSkewGWAV(
    strikeId: PromiseOrValue<BigNumberish>,
    secondsAgo: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getStrikeCache(
    strikeId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IOptionGreekCache.StrikeCacheStructOutput>;

  isBoardCacheStale(
    boardId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isGlobalCacheStale(
    spotPrice: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  updateBoardCachedGreeks(
    boardId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getBoardGreeksView(
      boardId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IOptionGreekCache.BoardGreeksViewStructOutput>;

    getForceCloseParams(
      overrides?: CallOverrides
    ): Promise<IOptionGreekCache.ForceCloseParametersStructOutput>;

    getGlobalCache(
      overrides?: CallOverrides
    ): Promise<IOptionGreekCache.GlobalCacheStructOutput>;

    getGlobalNetDelta(overrides?: CallOverrides): Promise<BigNumber>;

    getGlobalOptionValue(overrides?: CallOverrides): Promise<BigNumber>;

    getGreekCacheParams(
      overrides?: CallOverrides
    ): Promise<IOptionGreekCache.GreekCacheParametersStructOutput>;

    getIvGWAV(
      boardId: PromiseOrValue<BigNumberish>,
      secondsAgo: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMinCollatParams(
      overrides?: CallOverrides
    ): Promise<IOptionGreekCache.MinCollateralParametersStructOutput>;

    getMinCollateral(
      optionType: PromiseOrValue<BigNumberish>,
      strikePrice: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      spotPrice: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOptionBoardCache(
      boardId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IOptionGreekCache.OptionBoardCacheStructOutput>;

    getPriceForForceClose(
      trade: IOptionMarket.TradeParametersStruct,
      strike: IOptionMarket.StrikeStruct,
      expiry: PromiseOrValue<BigNumberish>,
      newVol: PromiseOrValue<BigNumberish>,
      isPostCutoff: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        optionPrice: BigNumber;
        forceCloseVol: BigNumber;
      }
    >;

    getShockVol(
      timeToMaturity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSkewGWAV(
      strikeId: PromiseOrValue<BigNumberish>,
      secondsAgo: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStrikeCache(
      strikeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IOptionGreekCache.StrikeCacheStructOutput>;

    isBoardCacheStale(
      boardId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isGlobalCacheStale(
      spotPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    updateBoardCachedGreeks(
      boardId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BoardCacheRemoved(uint256)"(boardId?: null): BoardCacheRemovedEventFilter;
    BoardCacheRemoved(boardId?: null): BoardCacheRemovedEventFilter;

    "BoardCacheUpdated(tuple)"(boardCache?: null): BoardCacheUpdatedEventFilter;
    BoardCacheUpdated(boardCache?: null): BoardCacheUpdatedEventFilter;

    "BoardIvUpdated(uint256,uint256,uint256)"(
      boardId?: null,
      newIv?: null,
      globalMaxIvVariance?: null
    ): BoardIvUpdatedEventFilter;
    BoardIvUpdated(
      boardId?: null,
      newIv?: null,
      globalMaxIvVariance?: null
    ): BoardIvUpdatedEventFilter;

    "ForceCloseParametersSet(tuple)"(
      params?: null
    ): ForceCloseParametersSetEventFilter;
    ForceCloseParametersSet(params?: null): ForceCloseParametersSetEventFilter;

    "GlobalCacheUpdated(tuple)"(
      globalCache?: null
    ): GlobalCacheUpdatedEventFilter;
    GlobalCacheUpdated(globalCache?: null): GlobalCacheUpdatedEventFilter;

    "GreekCacheParametersSet(tuple)"(
      params?: null
    ): GreekCacheParametersSetEventFilter;
    GreekCacheParametersSet(params?: null): GreekCacheParametersSetEventFilter;

    "MinCollateralParametersSet(tuple)"(
      params?: null
    ): MinCollateralParametersSetEventFilter;
    MinCollateralParametersSet(
      params?: null
    ): MinCollateralParametersSetEventFilter;

    "StrikeCacheRemoved(uint256)"(
      strikeId?: null
    ): StrikeCacheRemovedEventFilter;
    StrikeCacheRemoved(strikeId?: null): StrikeCacheRemovedEventFilter;

    "StrikeCacheUpdated(tuple)"(
      strikeCache?: null
    ): StrikeCacheUpdatedEventFilter;
    StrikeCacheUpdated(strikeCache?: null): StrikeCacheUpdatedEventFilter;

    "StrikeSkewUpdated(uint256,uint256,uint256)"(
      strikeId?: null,
      newSkew?: null,
      globalMaxSkewVariance?: null
    ): StrikeSkewUpdatedEventFilter;
    StrikeSkewUpdated(
      strikeId?: null,
      newSkew?: null,
      globalMaxSkewVariance?: null
    ): StrikeSkewUpdatedEventFilter;
  };

  estimateGas: {
    getBoardGreeksView(
      boardId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getForceCloseParams(overrides?: CallOverrides): Promise<BigNumber>;

    getGlobalCache(overrides?: CallOverrides): Promise<BigNumber>;

    getGlobalNetDelta(overrides?: CallOverrides): Promise<BigNumber>;

    getGlobalOptionValue(overrides?: CallOverrides): Promise<BigNumber>;

    getGreekCacheParams(overrides?: CallOverrides): Promise<BigNumber>;

    getIvGWAV(
      boardId: PromiseOrValue<BigNumberish>,
      secondsAgo: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMinCollatParams(overrides?: CallOverrides): Promise<BigNumber>;

    getMinCollateral(
      optionType: PromiseOrValue<BigNumberish>,
      strikePrice: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      spotPrice: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOptionBoardCache(
      boardId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriceForForceClose(
      trade: IOptionMarket.TradeParametersStruct,
      strike: IOptionMarket.StrikeStruct,
      expiry: PromiseOrValue<BigNumberish>,
      newVol: PromiseOrValue<BigNumberish>,
      isPostCutoff: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getShockVol(
      timeToMaturity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSkewGWAV(
      strikeId: PromiseOrValue<BigNumberish>,
      secondsAgo: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStrikeCache(
      strikeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isBoardCacheStale(
      boardId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isGlobalCacheStale(
      spotPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateBoardCachedGreeks(
      boardId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getBoardGreeksView(
      boardId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getForceCloseParams(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGlobalCache(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getGlobalNetDelta(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getGlobalOptionValue(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGreekCacheParams(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIvGWAV(
      boardId: PromiseOrValue<BigNumberish>,
      secondsAgo: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMinCollatParams(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMinCollateral(
      optionType: PromiseOrValue<BigNumberish>,
      strikePrice: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      spotPrice: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOptionBoardCache(
      boardId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceForForceClose(
      trade: IOptionMarket.TradeParametersStruct,
      strike: IOptionMarket.StrikeStruct,
      expiry: PromiseOrValue<BigNumberish>,
      newVol: PromiseOrValue<BigNumberish>,
      isPostCutoff: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getShockVol(
      timeToMaturity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSkewGWAV(
      strikeId: PromiseOrValue<BigNumberish>,
      secondsAgo: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStrikeCache(
      strikeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isBoardCacheStale(
      boardId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isGlobalCacheStale(
      spotPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateBoardCachedGreeks(
      boardId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}