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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface KeeperHelperInterface extends utils.Interface {
  functions: {
    "greekCache()": FunctionFragment;
    "init(address,address,address)": FunctionFragment;
    "initialized()": FunctionFragment;
    "liquidate8(uint256)": FunctionFragment;
    "liquidateMany(uint256[])": FunctionFragment;
    "optionMarket()": FunctionFragment;
    "settle16(uint256,uint256)": FunctionFragment;
    "settle24(uint256,uint256,uint256)": FunctionFragment;
    "settle32(uint256,uint256,uint256,uint256)": FunctionFragment;
    "settle40(uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "settle8(uint256)": FunctionFragment;
    "settle80(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "settleMany(uint256[])": FunctionFragment;
    "shortCollateral()": FunctionFragment;
    "updateAllBoardCachedGreeks()": FunctionFragment;
    "updateStaleBoardCachedGreeks()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "greekCache"
      | "init"
      | "initialized"
      | "liquidate8"
      | "liquidateMany"
      | "optionMarket"
      | "settle16"
      | "settle24"
      | "settle32"
      | "settle40"
      | "settle8"
      | "settle80"
      | "settleMany"
      | "shortCollateral"
      | "updateAllBoardCachedGreeks"
      | "updateStaleBoardCachedGreeks"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "greekCache",
    values?: undefined
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
    functionFragment: "liquidate8",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidateMany",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "optionMarket",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "settle16",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "settle24",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "settle32",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "settle40",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "settle8",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "settle80",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "settleMany",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "shortCollateral",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateAllBoardCachedGreeks",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateStaleBoardCachedGreeks",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "greekCache", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidate8", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidateMany",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "optionMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "settle16", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "settle24", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "settle32", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "settle40", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "settle8", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "settle80", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "settleMany", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "shortCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAllBoardCachedGreeks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateStaleBoardCachedGreeks",
    data: BytesLike
  ): Result;

  events: {};
}

export interface KeeperHelper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: KeeperHelperInterface;

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
    greekCache(overrides?: CallOverrides): Promise<[string]>;

    init(
      _optionMarket: PromiseOrValue<string>,
      _shortCollateral: PromiseOrValue<string>,
      _greekCache: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialized(overrides?: CallOverrides): Promise<[boolean]>;

    liquidate8(
      batch1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    liquidateMany(
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    optionMarket(overrides?: CallOverrides): Promise<[string]>;

    settle16(
      batch1: PromiseOrValue<BigNumberish>,
      batch2: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    settle24(
      batch1: PromiseOrValue<BigNumberish>,
      batch2: PromiseOrValue<BigNumberish>,
      batch3: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    settle32(
      batch1: PromiseOrValue<BigNumberish>,
      batch2: PromiseOrValue<BigNumberish>,
      batch3: PromiseOrValue<BigNumberish>,
      batch4: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    settle40(
      batch1: PromiseOrValue<BigNumberish>,
      batch2: PromiseOrValue<BigNumberish>,
      batch3: PromiseOrValue<BigNumberish>,
      batch4: PromiseOrValue<BigNumberish>,
      batch5: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    settle8(
      batch1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    settle80(
      batch1: PromiseOrValue<BigNumberish>,
      batch2: PromiseOrValue<BigNumberish>,
      batch3: PromiseOrValue<BigNumberish>,
      batch4: PromiseOrValue<BigNumberish>,
      batch5: PromiseOrValue<BigNumberish>,
      batch6: PromiseOrValue<BigNumberish>,
      batch7: PromiseOrValue<BigNumberish>,
      batch8: PromiseOrValue<BigNumberish>,
      batch9: PromiseOrValue<BigNumberish>,
      batch10: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    settleMany(
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    shortCollateral(overrides?: CallOverrides): Promise<[string]>;

    updateAllBoardCachedGreeks(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateStaleBoardCachedGreeks(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  greekCache(overrides?: CallOverrides): Promise<string>;

  init(
    _optionMarket: PromiseOrValue<string>,
    _shortCollateral: PromiseOrValue<string>,
    _greekCache: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialized(overrides?: CallOverrides): Promise<boolean>;

  liquidate8(
    batch1: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  liquidateMany(
    positionIds: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  optionMarket(overrides?: CallOverrides): Promise<string>;

  settle16(
    batch1: PromiseOrValue<BigNumberish>,
    batch2: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  settle24(
    batch1: PromiseOrValue<BigNumberish>,
    batch2: PromiseOrValue<BigNumberish>,
    batch3: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  settle32(
    batch1: PromiseOrValue<BigNumberish>,
    batch2: PromiseOrValue<BigNumberish>,
    batch3: PromiseOrValue<BigNumberish>,
    batch4: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  settle40(
    batch1: PromiseOrValue<BigNumberish>,
    batch2: PromiseOrValue<BigNumberish>,
    batch3: PromiseOrValue<BigNumberish>,
    batch4: PromiseOrValue<BigNumberish>,
    batch5: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  settle8(
    batch1: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  settle80(
    batch1: PromiseOrValue<BigNumberish>,
    batch2: PromiseOrValue<BigNumberish>,
    batch3: PromiseOrValue<BigNumberish>,
    batch4: PromiseOrValue<BigNumberish>,
    batch5: PromiseOrValue<BigNumberish>,
    batch6: PromiseOrValue<BigNumberish>,
    batch7: PromiseOrValue<BigNumberish>,
    batch8: PromiseOrValue<BigNumberish>,
    batch9: PromiseOrValue<BigNumberish>,
    batch10: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  settleMany(
    positionIds: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  shortCollateral(overrides?: CallOverrides): Promise<string>;

  updateAllBoardCachedGreeks(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateStaleBoardCachedGreeks(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    greekCache(overrides?: CallOverrides): Promise<string>;

    init(
      _optionMarket: PromiseOrValue<string>,
      _shortCollateral: PromiseOrValue<string>,
      _greekCache: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    initialized(overrides?: CallOverrides): Promise<boolean>;

    liquidate8(
      batch1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidateMany(
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    optionMarket(overrides?: CallOverrides): Promise<string>;

    settle16(
      batch1: PromiseOrValue<BigNumberish>,
      batch2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    settle24(
      batch1: PromiseOrValue<BigNumberish>,
      batch2: PromiseOrValue<BigNumberish>,
      batch3: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    settle32(
      batch1: PromiseOrValue<BigNumberish>,
      batch2: PromiseOrValue<BigNumberish>,
      batch3: PromiseOrValue<BigNumberish>,
      batch4: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    settle40(
      batch1: PromiseOrValue<BigNumberish>,
      batch2: PromiseOrValue<BigNumberish>,
      batch3: PromiseOrValue<BigNumberish>,
      batch4: PromiseOrValue<BigNumberish>,
      batch5: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    settle8(
      batch1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    settle80(
      batch1: PromiseOrValue<BigNumberish>,
      batch2: PromiseOrValue<BigNumberish>,
      batch3: PromiseOrValue<BigNumberish>,
      batch4: PromiseOrValue<BigNumberish>,
      batch5: PromiseOrValue<BigNumberish>,
      batch6: PromiseOrValue<BigNumberish>,
      batch7: PromiseOrValue<BigNumberish>,
      batch8: PromiseOrValue<BigNumberish>,
      batch9: PromiseOrValue<BigNumberish>,
      batch10: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    settleMany(
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    shortCollateral(overrides?: CallOverrides): Promise<string>;

    updateAllBoardCachedGreeks(overrides?: CallOverrides): Promise<void>;

    updateStaleBoardCachedGreeks(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    greekCache(overrides?: CallOverrides): Promise<BigNumber>;

    init(
      _optionMarket: PromiseOrValue<string>,
      _shortCollateral: PromiseOrValue<string>,
      _greekCache: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<BigNumber>;

    liquidate8(
      batch1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    liquidateMany(
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    optionMarket(overrides?: CallOverrides): Promise<BigNumber>;

    settle16(
      batch1: PromiseOrValue<BigNumberish>,
      batch2: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    settle24(
      batch1: PromiseOrValue<BigNumberish>,
      batch2: PromiseOrValue<BigNumberish>,
      batch3: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    settle32(
      batch1: PromiseOrValue<BigNumberish>,
      batch2: PromiseOrValue<BigNumberish>,
      batch3: PromiseOrValue<BigNumberish>,
      batch4: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    settle40(
      batch1: PromiseOrValue<BigNumberish>,
      batch2: PromiseOrValue<BigNumberish>,
      batch3: PromiseOrValue<BigNumberish>,
      batch4: PromiseOrValue<BigNumberish>,
      batch5: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    settle8(
      batch1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    settle80(
      batch1: PromiseOrValue<BigNumberish>,
      batch2: PromiseOrValue<BigNumberish>,
      batch3: PromiseOrValue<BigNumberish>,
      batch4: PromiseOrValue<BigNumberish>,
      batch5: PromiseOrValue<BigNumberish>,
      batch6: PromiseOrValue<BigNumberish>,
      batch7: PromiseOrValue<BigNumberish>,
      batch8: PromiseOrValue<BigNumberish>,
      batch9: PromiseOrValue<BigNumberish>,
      batch10: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    settleMany(
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    shortCollateral(overrides?: CallOverrides): Promise<BigNumber>;

    updateAllBoardCachedGreeks(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateStaleBoardCachedGreeks(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    greekCache(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    init(
      _optionMarket: PromiseOrValue<string>,
      _shortCollateral: PromiseOrValue<string>,
      _greekCache: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidate8(
      batch1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    liquidateMany(
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    optionMarket(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    settle16(
      batch1: PromiseOrValue<BigNumberish>,
      batch2: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    settle24(
      batch1: PromiseOrValue<BigNumberish>,
      batch2: PromiseOrValue<BigNumberish>,
      batch3: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    settle32(
      batch1: PromiseOrValue<BigNumberish>,
      batch2: PromiseOrValue<BigNumberish>,
      batch3: PromiseOrValue<BigNumberish>,
      batch4: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    settle40(
      batch1: PromiseOrValue<BigNumberish>,
      batch2: PromiseOrValue<BigNumberish>,
      batch3: PromiseOrValue<BigNumberish>,
      batch4: PromiseOrValue<BigNumberish>,
      batch5: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    settle8(
      batch1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    settle80(
      batch1: PromiseOrValue<BigNumberish>,
      batch2: PromiseOrValue<BigNumberish>,
      batch3: PromiseOrValue<BigNumberish>,
      batch4: PromiseOrValue<BigNumberish>,
      batch5: PromiseOrValue<BigNumberish>,
      batch6: PromiseOrValue<BigNumberish>,
      batch7: PromiseOrValue<BigNumberish>,
      batch8: PromiseOrValue<BigNumberish>,
      batch9: PromiseOrValue<BigNumberish>,
      batch10: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    settleMany(
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    shortCollateral(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateAllBoardCachedGreeks(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateStaleBoardCachedGreeks(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
