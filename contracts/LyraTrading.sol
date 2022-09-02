// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "hardhat/console.sol";
import { LyraAdapter } from "@lyrafinance/protocol/contracts/periphery/LyraAdapter.sol";

contract LyraTrading is LyraAdapter {
  // Creating a Contract for Options Trading through Lyra.Finance
  constructor() LyraAdapter() {}
  uint[] public openPositionIds;
  // OptionPosition public convertedPositions;

  function initAdapter(address _lyraRegistry, address _optionMarket, address _curveSwap, address _feeCounter) external onlyOwner {
    setLyraAddresses(_lyraRegistry, _optionMarket, _curveSwap, _feeCounter);
  }
  // function getConvertedPositions() public {
  //   convertedPositions = _getPositions(openPositionIds);
  // }

  // Buying Calls
  function buyCall(uint strikeId, uint amount) public returns (uint totalCost, uint callPositionId) {
    (totalCost, callPositionId) = _buyCall(strikeId, amount);
    optionToken.transferFrom(address(this), msg.sender, callPositionId);

    uint quoteBalance = quoteAsset.balanceOf(address(this));
    if (quoteBalance > 0) {
      quoteAsset.transfer(msg.sender, quoteBalance);
    }
  }

  function _buyCall(uint strikeId, uint amount) internal returns (uint totalCost, uint callPositionId) {
    TradeInputParameters memory inputParams = TradeInputParameters({
      strikeId: strikeId,
      positionId: 0,
      iterations: 3,
      optionType: OptionType.LONG_CALL,
      amount: amount,
      setCollateralTo: 0,
      minTotalCost: 0,
      maxTotalCost: type(uint).max,
      rewardRecipient: address(0)
    });
    
    TradeResult memory callTradeResult = _openPosition(inputParams);
    openPositionIds.push(callTradeResult.positionId);
    return (callTradeResult.totalCost,callTradeResult.positionId);
  }
  // Buying Puts
  function buyPuts(uint strikeId, uint amount) public returns (uint totalCost, uint putPositionId) {
    (totalCost, putPositionId) = _buyCall(strikeId, amount);
    optionToken.transferFrom(address(this), msg.sender, putPositionId);

    uint quoteBalance = quoteAsset.balanceOf(address(this));
    if (quoteBalance > 0) {
      quoteAsset.transfer(msg.sender, quoteBalance);
    }
  }
  
  function _buyPuts(uint strikeId, uint amount) internal returns (uint totalCost, uint putPositionId) {
    TradeInputParameters memory inputParams = TradeInputParameters({
      strikeId: strikeId,
      positionId: 0,
      iterations: 3,
      optionType: OptionType.LONG_PUT,
      amount: amount,
      setCollateralTo: 0,
      minTotalCost: 0,
      maxTotalCost: type(uint).max,
      rewardRecipient: address(0)
    });
    
    // open long call
    TradeResult memory putTradeResult = _openPosition(inputParams);
    openPositionIds.push(putTradeResult.positionId);
    return (putTradeResult.totalCost,putTradeResult.positionId);
  }


}
