const { deepCopy, getContractAddress } = require("ethers/lib/utils");
const { network, ethers } = require("hardhat");
// const { localChains } = require("../helper-hardhat-config");
// const { verify } = require("../utils/verify");

let factoryAddress;

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  // get weth and factory deployed contracts
  const factory = await ethers.getContract("UniswapV2Factory");
  const weth = await ethers.getContract("WETH");

  await deploy("UniswapV2Router02", {
    from: deployer,
    args: [factory.address, weth.address],
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  log("UniswapV2Router02 deployed succesfully on Kava!!");
  console.log("*********************");
  console.log();
};

module.exports.tags = ["weth"];
