const hre = require("hardhat");
const { ethers } = require("ethers");

async function main() {
  const contractAddress = "0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9";
  const lock = await hre.ethers.getContractAt("Lock", contractAddress);
  console.log("Owner", await lock.owner());
  console.log("Get Unlock Time", await lock.unlockTime());
}

main();
