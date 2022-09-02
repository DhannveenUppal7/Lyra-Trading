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

export interface IShortCollateralInterface extends utils.Interface {
  functions: {
    "LPBaseExcess()": FunctionFragment;
    "LPQuoteExcess()": FunctionFragment;
    "settleOptions(uint256[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "LPBaseExcess" | "LPQuoteExcess" | "settleOptions"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "LPBaseExcess",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LPQuoteExcess",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "settleOptions",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "LPBaseExcess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LPQuoteExcess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settleOptions",
    data: BytesLike
  ): Result;

  events: {
    "BaseExchangedAndQuoteSent(address,uint256,uint256)": EventFragment;
    "BaseSent(address,uint256)": EventFragment;
    "BoardSettlementCollateralSent(uint256,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "PositionSettled(uint256,address,address,uint256,uint256,uint8,uint256,uint256,uint256)": EventFragment;
    "QuoteSent(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BaseExchangedAndQuoteSent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BaseSent"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "BoardSettlementCollateralSent"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PositionSettled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QuoteSent"): EventFragment;
}

export interface BaseExchangedAndQuoteSentEventObject {
  recipient: string;
  amountBase: BigNumber;
  quoteReceived: BigNumber;
}
export type BaseExchangedAndQuoteSentEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  BaseExchangedAndQuoteSentEventObject
>;

export type BaseExchangedAndQuoteSentEventFilter =
  TypedEventFilter<BaseExchangedAndQuoteSentEvent>;

export interface BaseSentEventObject {
  receiver: string;
  amount: BigNumber;
}
export type BaseSentEvent = TypedEvent<
  [string, BigNumber],
  BaseSentEventObject
>;

export type BaseSentEventFilter = TypedEventFilter<BaseSentEvent>;

export interface BoardSettlementCollateralSentEventObject {
  amountBaseSent: BigNumber;
  amountQuoteSent: BigNumber;
  lpBaseInsolvency: BigNumber;
  lpQuoteInsolvency: BigNumber;
  LPBaseExcess: BigNumber;
  LPQuoteExcess: BigNumber;
}
export type BoardSettlementCollateralSentEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  BoardSettlementCollateralSentEventObject
>;

export type BoardSettlementCollateralSentEventFilter =
  TypedEventFilter<BoardSettlementCollateralSentEvent>;

export interface PositionSettledEventObject {
  positionId: BigNumber;
  settler: string;
  optionOwner: string;
  strikePrice: BigNumber;
  priceAtExpiry: BigNumber;
  optionType: number;
  amount: BigNumber;
  settlementAmount: BigNumber;
  insolventAmount: BigNumber;
}
export type PositionSettledEvent = TypedEvent<
  [
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    number,
    BigNumber,
    BigNumber,
    BigNumber
  ],
  PositionSettledEventObject
>;

export type PositionSettledEventFilter = TypedEventFilter<PositionSettledEvent>;

export interface QuoteSentEventObject {
  receiver: string;
  amount: BigNumber;
}
export type QuoteSentEvent = TypedEvent<
  [string, BigNumber],
  QuoteSentEventObject
>;

export type QuoteSentEventFilter = TypedEventFilter<QuoteSentEvent>;

export interface IShortCollateral extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IShortCollateralInterface;

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
    LPBaseExcess(overrides?: CallOverrides): Promise<[BigNumber]>;

    LPQuoteExcess(overrides?: CallOverrides): Promise<[BigNumber]>;

    settleOptions(
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  LPBaseExcess(overrides?: CallOverrides): Promise<BigNumber>;

  LPQuoteExcess(overrides?: CallOverrides): Promise<BigNumber>;

  settleOptions(
    positionIds: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    LPBaseExcess(overrides?: CallOverrides): Promise<BigNumber>;

    LPQuoteExcess(overrides?: CallOverrides): Promise<BigNumber>;

    settleOptions(
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BaseExchangedAndQuoteSent(address,uint256,uint256)"(
      recipient?: PromiseOrValue<string> | null,
      amountBase?: null,
      quoteReceived?: null
    ): BaseExchangedAndQuoteSentEventFilter;
    BaseExchangedAndQuoteSent(
      recipient?: PromiseOrValue<string> | null,
      amountBase?: null,
      quoteReceived?: null
    ): BaseExchangedAndQuoteSentEventFilter;

    "BaseSent(address,uint256)"(
      receiver?: PromiseOrValue<string> | null,
      amount?: null
    ): BaseSentEventFilter;
    BaseSent(
      receiver?: PromiseOrValue<string> | null,
      amount?: null
    ): BaseSentEventFilter;

    "BoardSettlementCollateralSent(uint256,uint256,uint256,uint256,uint256,uint256)"(
      amountBaseSent?: null,
      amountQuoteSent?: null,
      lpBaseInsolvency?: null,
      lpQuoteInsolvency?: null,
      LPBaseExcess?: null,
      LPQuoteExcess?: null
    ): BoardSettlementCollateralSentEventFilter;
    BoardSettlementCollateralSent(
      amountBaseSent?: null,
      amountQuoteSent?: null,
      lpBaseInsolvency?: null,
      lpQuoteInsolvency?: null,
      LPBaseExcess?: null,
      LPQuoteExcess?: null
    ): BoardSettlementCollateralSentEventFilter;

    "PositionSettled(uint256,address,address,uint256,uint256,uint8,uint256,uint256,uint256)"(
      positionId?: PromiseOrValue<BigNumberish> | null,
      settler?: PromiseOrValue<string> | null,
      optionOwner?: PromiseOrValue<string> | null,
      strikePrice?: null,
      priceAtExpiry?: null,
      optionType?: null,
      amount?: null,
      settlementAmount?: null,
      insolventAmount?: null
    ): PositionSettledEventFilter;
    PositionSettled(
      positionId?: PromiseOrValue<BigNumberish> | null,
      settler?: PromiseOrValue<string> | null,
      optionOwner?: PromiseOrValue<string> | null,
      strikePrice?: null,
      priceAtExpiry?: null,
      optionType?: null,
      amount?: null,
      settlementAmount?: null,
      insolventAmount?: null
    ): PositionSettledEventFilter;

    "QuoteSent(address,uint256)"(
      receiver?: PromiseOrValue<string> | null,
      amount?: null
    ): QuoteSentEventFilter;
    QuoteSent(
      receiver?: PromiseOrValue<string> | null,
      amount?: null
    ): QuoteSentEventFilter;
  };

  estimateGas: {
    LPBaseExcess(overrides?: CallOverrides): Promise<BigNumber>;

    LPQuoteExcess(overrides?: CallOverrides): Promise<BigNumber>;

    settleOptions(
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    LPBaseExcess(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LPQuoteExcess(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    settleOptions(
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}