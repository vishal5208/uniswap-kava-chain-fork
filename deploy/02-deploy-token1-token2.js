const { network } = require("hardhat");
// const { localChains } = require("../helper-hardhat-config");
// const { verify } = require("../utils/verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log(deployer);

  const Token1 = await deploy("Token1", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  await deploy("Token2", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  log("Token1 and  Token2 deployed succesfully on Kava!!");
  console.log("************************");
  console.log();
};

module.exports.tags = ["tokens"];
