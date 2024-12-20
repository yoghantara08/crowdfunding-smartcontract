require("@matterlabs/hardhat-zksync-solc");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  defaultNetwork: "opt-sepolia",
  networks: {
    sepolia: {
      url: "https://1rpc.io/sepolia",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    "opt-sepolia": {
      url: "https://api.zan.top/opt-sepolia",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    "list-sepolia": {
      url: "https://rpc.sepolia-api.lisk.com",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    zksync_testnet: {
      url: "https://zksync2-testnet.zksync.dev",
      ethNetwork: "goerli",
      chainId: 280,
      zksync: true,
    },
    zksync_mainnet: {
      url: "https://zksync2-mainnet.zksync.io/",
      ethNetwork: "mainnet",
      chainId: 324,
      zksync: true,
    },
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
