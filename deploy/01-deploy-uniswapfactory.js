const { deepCopy } = require("ethers/lib/utils");
const { network } = require("hardhat");
// const { localChains } = require("../helper-hardhat-config");
// const { verify } = require("../utils/verify");

let factoryAddress;

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log(deployer);

  await deploy("UniswapV2Factory", {
    from: deployer,
    args: [deployer],
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  log("UniswapV2Factory deployed succesfully on Kava!!");
  console.log("*********************");
  console.log();
};

module.exports.tags = ["uniswapV2Factory"];
