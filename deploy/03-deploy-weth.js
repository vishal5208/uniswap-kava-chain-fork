const { deepCopy } = require("ethers/lib/utils");
const { network } = require("hardhat");
// const { localChains } = require("../helper-hardhat-config");
// const { verify } = require("../utils/verify");

let factoryAddress;

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("WETH", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  log("WETH deployed succesfully on Kava!!");
  console.log("*********************");
  console.log();
};

module.exports.tags = ["weth"];
