/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IOptionMarket,
  IOptionMarketInterface,
} from "../../../../../@lyrafinance/protocol/contracts/interfaces/IOptionMarket";

const _abi = [
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
        internalType: "uint256",
        name: "boardId",
        type: "uint256",
      },
    ],
    name: "BoardAlreadySettled",
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
        name: "boardId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "boardExpiry",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentTime",
        type: "uint256",
      },
    ],
    name: "BoardExpired",
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
        name: "boardId",
        type: "uint256",
      },
    ],
    name: "BoardIsFrozen",
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
        name: "boardId",
        type: "uint256",
      },
    ],
    name: "BoardNotExpired",
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
        name: "boardId",
        type: "uint256",
      },
    ],
    name: "BoardNotFrozen",
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
        internalType: "enum IOptionMarket.NonZeroValues",
        name: "valueType",
        type: "uint8",
      },
    ],
    name: "ExpectedNonZeroValue",
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
        name: "boardId",
        type: "uint256",
      },
    ],
    name: "InvalidBoardId",
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
        name: "currentTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxBoardExpiry",
        type: "uint256",
      },
    ],
    name: "InvalidExpiryTimestamp",
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
            name: "maxBoardExpiry",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "securityModule",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "feePortionReserved",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "staticBaseSettlementFee",
            type: "uint256",
          },
        ],
        internalType: "struct IOptionMarket.OptionMarketParameters",
        name: "optionMarketParams",
        type: "tuple",
      },
    ],
    name: "InvalidOptionMarketParams",
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
        name: "strikeId",
        type: "uint256",
      },
    ],
    name: "InvalidStrikeId",
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
        name: "securityModule",
        type: "address",
      },
    ],
    name: "OnlySecurityModule",
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
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "strikesLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "skewsLength",
        type: "uint256",
      },
    ],
    name: "StrikeSkewLengthMismatch",
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
        name: "totalCost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minCost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxCost",
        type: "uint256",
      },
    ],
    name: "TotalCostOutsideOfSpecifiedBounds",
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
        name: "iterations",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expectedAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tradeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
    ],
    name: "TradeIterationsHasRemainder",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "boardId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseIv",
        type: "uint256",
      },
    ],
    name: "BoardBaseIvSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "boardId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseIv",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "frozen",
        type: "bool",
      },
    ],
    name: "BoardCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "boardId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "frozen",
        type: "bool",
      },
    ],
    name: "BoardFrozen",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "boardId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "spotPriceAtExpiry",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalUserLongProfitQuote",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalBoardLongCallCollateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalBoardLongPutCollateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalAMMShortCallProfitBase",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalAMMShortCallProfitQuote",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalAMMShortPutProfitQuote",
        type: "uint256",
      },
    ],
    name: "BoardSettled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "maxBoardExpiry",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "securityModule",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "feePortionReserved",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "staticBaseSettlementFee",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct IOptionMarket.OptionMarketParameters",
        name: "optionMarketParams",
        type: "tuple",
      },
    ],
    name: "OptionMarketParamsSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "securityModule",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quoteAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseAmount",
        type: "uint256",
      },
    ],
    name: "SMClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "boardId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "strikeId",
        type: "uint256",
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
        name: "skew",
        type: "uint256",
      },
    ],
    name: "StrikeAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "strikeId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "skew",
        type: "uint256",
      },
    ],
    name: "StrikeSkewSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "strikeId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strikePrice",
            type: "uint256",
          },
          {
            internalType: "enum IOptionMarket.OptionType",
            name: "optionType",
            type: "uint8",
          },
          {
            internalType: "enum IOptionMarket.TradeDirection",
            name: "tradeDirection",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "setCollateralTo",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isForceClose",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "spotPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reservedFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalCost",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct IOptionMarket.TradeEventData",
        name: "trade",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "premium",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "optionPriceFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "spotPriceFee",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "int256",
                name: "preTradeAmmNetStdVega",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "postTradeAmmNetStdVega",
                type: "int256",
              },
              {
                internalType: "uint256",
                name: "vegaUtil",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "volTraded",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "NAV",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "vegaUtilFee",
                type: "uint256",
              },
            ],
            internalType: "struct IOptionMarketPricer.VegaUtilFeeComponents",
            name: "vegaUtilFee",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "varianceFeeCoefficient",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "vega",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "vegaCoefficient",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "skew",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "skewCoefficient",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "ivVariance",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "ivVarianceCoefficient",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "varianceFee",
                type: "uint256",
              },
            ],
            internalType: "struct IOptionMarketPricer.VarianceFeeComponents",
            name: "varianceFee",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "totalFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalCost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "volTraded",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "newBaseIv",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "newSkew",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct IOptionMarketPricer.TradeResult[]",
        name: "tradeResults",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "rewardBeneficiary",
            type: "address",
          },
          {
            internalType: "address",
            name: "caller",
            type: "address",
          },
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
        indexed: false,
        internalType: "struct IOptionMarket.LiquidationEventData",
        name: "liquidation",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Trade",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountCollateral",
        type: "uint256",
      },
    ],
    name: "addCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "strikeId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "positionId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "iterations",
            type: "uint256",
          },
          {
            internalType: "enum IOptionMarket.OptionType",
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
            name: "setCollateralTo",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minTotalCost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxTotalCost",
            type: "uint256",
          },
        ],
        internalType: "struct IOptionMarket.TradeInputParameters",
        name: "params",
        type: "tuple",
      },
    ],
    name: "closePosition",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "positionId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalCost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalFee",
            type: "uint256",
          },
        ],
        internalType: "struct IOptionMarket.Result",
        name: "result",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "strikeId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "positionId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "iterations",
            type: "uint256",
          },
          {
            internalType: "enum IOptionMarket.OptionType",
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
            name: "setCollateralTo",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minTotalCost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxTotalCost",
            type: "uint256",
          },
        ],
        internalType: "struct IOptionMarket.TradeInputParameters",
        name: "params",
        type: "tuple",
      },
    ],
    name: "forceClosePosition",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "positionId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalCost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalFee",
            type: "uint256",
          },
        ],
        internalType: "struct IOptionMarket.Result",
        name: "result",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "boardId",
        type: "uint256",
      },
    ],
    name: "getBoardAndStrikeDetails",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "iv",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "frozen",
            type: "bool",
          },
          {
            internalType: "uint256[]",
            name: "strikeIds",
            type: "uint256[]",
          },
        ],
        internalType: "struct IOptionMarket.OptionBoard",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strikePrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "skew",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "longCall",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortCallBase",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortCallQuote",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "longPut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortPut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "boardId",
            type: "uint256",
          },
        ],
        internalType: "struct IOptionMarket.Strike[]",
        name: "",
        type: "tuple[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
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
        internalType: "uint256",
        name: "boardId",
        type: "uint256",
      },
    ],
    name: "getBoardStrikes",
    outputs: [
      {
        internalType: "uint256[]",
        name: "strikeIds",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLiveBoards",
    outputs: [
      {
        internalType: "uint256[]",
        name: "_liveBoards",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumLiveBoards",
    outputs: [
      {
        internalType: "uint256",
        name: "numLiveBoards",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "boardId",
        type: "uint256",
      },
    ],
    name: "getOptionBoard",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "iv",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "frozen",
            type: "bool",
          },
          {
            internalType: "uint256[]",
            name: "strikeIds",
            type: "uint256[]",
          },
        ],
        internalType: "struct IOptionMarket.OptionBoard",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOptionMarketParams",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "maxBoardExpiry",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "securityModule",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "feePortionReserved",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "staticBaseSettlementFee",
            type: "uint256",
          },
        ],
        internalType: "struct IOptionMarket.OptionMarketParameters",
        name: "",
        type: "tuple",
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
    ],
    name: "getSettlementParameters",
    outputs: [
      {
        internalType: "uint256",
        name: "strikePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceAtExpiry",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "strikeToBaseReturned",
        type: "uint256",
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
    ],
    name: "getStrike",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strikePrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "skew",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "longCall",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortCallBase",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortCallQuote",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "longPut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortPut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "boardId",
            type: "uint256",
          },
        ],
        internalType: "struct IOptionMarket.Strike",
        name: "",
        type: "tuple",
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
    ],
    name: "getStrikeAndBoard",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strikePrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "skew",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "longCall",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortCallBase",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortCallQuote",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "longPut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortPut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "boardId",
            type: "uint256",
          },
        ],
        internalType: "struct IOptionMarket.Strike",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "iv",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "frozen",
            type: "bool",
          },
          {
            internalType: "uint256[]",
            name: "strikeIds",
            type: "uint256[]",
          },
        ],
        internalType: "struct IOptionMarket.OptionBoard",
        name: "",
        type: "tuple",
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
    ],
    name: "getStrikeAndExpiry",
    outputs: [
      {
        internalType: "uint256",
        name: "strikePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "rewardBeneficiary",
        type: "address",
      },
    ],
    name: "liquidatePosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "strikeId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "positionId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "iterations",
            type: "uint256",
          },
          {
            internalType: "enum IOptionMarket.OptionType",
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
            name: "setCollateralTo",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minTotalCost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxTotalCost",
            type: "uint256",
          },
        ],
        internalType: "struct IOptionMarket.TradeInputParameters",
        name: "params",
        type: "tuple",
      },
    ],
    name: "openPosition",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "positionId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalCost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalFee",
            type: "uint256",
          },
        ],
        internalType: "struct IOptionMarket.Result",
        name: "result",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "boardId",
        type: "uint256",
      },
    ],
    name: "settleExpiredBoard",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "smClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IOptionMarket__factory {
  static readonly abi = _abi;
  static createInterface(): IOptionMarketInterface {
    return new utils.Interface(_abi) as IOptionMarketInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOptionMarket {
    return new Contract(address, _abi, signerOrProvider) as IOptionMarket;
  }
}
