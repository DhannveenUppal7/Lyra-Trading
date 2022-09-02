import "@nomicfoundation/hardhat-toolbox";
import 'hardhat-dependency-compiler'
import 'hardhat-tracer';
import '@nomiclabs/hardhat-etherscan';
import * as dotenv from 'dotenv';
import { HardhatUserConfig } from "hardhat/config";
import { lyraContractPaths } from '@lyrafinance/protocol/dist/test/utils/package/index-paths'
import { loadEnv } from "./scripts/utils";
dotenv.config();

const config: HardhatUserConfig = {
  networks: {
    'goerli-ovm': {
      url: 'https://goerli.optimism.io/	',
      gasPrice: 0,
      gas: 15000000,
      accounts: [
        "PRIVATE_KEY"
      ],
    }
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10000,
      },
    },
  },
  dependencyCompiler: {
    paths: lyraContractPaths,
  },
  etherscan: {
    apiKey: loadEnv().ETHERSCAN_KEY,
    customChains: [
      {
        network: "goerli-ovm",
        chainId: 420,
        urls: {
          apiURL: "https://blockscout.com/optimism/goerli/api",
          browserURL: "https://blockscout.com/optimism/goerli"
        }
      }
    ]
  }
};

export default config;
