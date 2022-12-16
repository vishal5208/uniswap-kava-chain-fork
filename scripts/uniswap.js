const { ethers } = require("hardhat");

async function main() {
  const factory = await ethers.getContract("UniswapV2Factory");
  const token1 = await ethers.getContract("Token1");
  const token2 = await ethers.getContract("Token2");

  await factory.createPair(token1.address, token2.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
