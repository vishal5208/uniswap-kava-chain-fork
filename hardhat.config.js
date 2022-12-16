require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("hardhat-contract-sizer");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",

  networks: {
    hardhat: {
      chainId: 31337,
      blockConfirmations: 1,
    },

    kavaTestNet: {
      chainId: 2221,
      url: "https://evm.testnet.kava.io",
      accounts: [PRIVATE_KEY],
    },
    kavaLocal: {
      chainId: 8888,
      url: "http://localhost:8545",
    },
  },

  solidity: {
    compilers: [
      {
        version: "0.5.16",
      },
      {
        version: "0.6.6",
      },
      {
        version: "0.8.8",
      },
    ],
  },

  namedAccounts: {
    deployer: {
      default: 0,
      2221: 0,
    },
  },
  // etherscan: {
  //   apiKey: {
  //     goerli: ETHERSCAN_API_KEY,
  //   },
  // },
  gasReporter: {
    enabled: false,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    // coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
  mocha: {
    timeout: 300000, // 300 seconds max
  },
};
