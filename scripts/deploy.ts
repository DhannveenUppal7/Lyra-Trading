import { ethers } from "hardhat";
import hre from 'hardhat';
import { LyraTrading } from "../typechain-types";
import { getGlobalDeploys, getMarketDeploys, lyraConstants } from "@lyrafinance/protocol";
import { LyraGlobal, LyraMarket } from "@lyrafinance/protocol/dist/test/utils/package/parseFiles";
import { loadParams } from "./utils";

async function main() {
  const deployer = (await ethers.getSigners())[0];
  const params = loadParams(hre.network.name);

  const lyraGlobal = getGlobalDeploys(hre.network.name) as LyraGlobal;
  const lyraMarket = getMarketDeploys(hre.network.name, params.market) as LyraMarket;

  const LyraTrading = await ethers.getContractFactory('LyraTrading');
  const lyraTrading = (await LyraTrading.connect(deployer).deploy()) as LyraTrading;
  console.log("Deployed LyraTrading.sol to:", lyraTrading.address);

  lyraTrading.connect(deployer).initAdapter(
    lyraGlobal.LyraRegistry.address,
    lyraMarket.OptionMarket.address,
    lyraConstants.ZERO_ADDRESS,
    lyraConstants.ZERO_ADDRESS,
  );
  console.log("Initialized Lyra Adapter");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
