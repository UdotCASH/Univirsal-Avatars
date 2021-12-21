// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers, upgrades } = require("hardhat");
require("@nomiclabs/hardhat-etherscan");

require('@openzeppelin/hardhat-upgrades');


async function main() {
  console.log(upgrades)
  const Univirsal = await ethers.getContractFactory("Univirsal");
   const univirsal = await upgrades.deployProxy(Univirsal,{initializer:"initialize"});

   await univirsal.deployed();
   console.log("Univirsal deployed to:", univirsal.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
