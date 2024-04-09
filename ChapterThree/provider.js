const { ethers } = require("ethers");
const hre = require("hardhat");

async function main() {
  const localNodeUrl = "http://localhost:8545/";
  const provider = new ethers.JsonRpcProvider(localNodeUrl);

  const accountAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

  const blockNumber = await provider.getBlockNumber();
  console.log("Block Number", blockNumber);
  const accountBalance = await provider.getBalance(accountAddress);
  console.log("Account Balance", ethers.formatEther(accountBalance));
  const hardhatSigner = (await hre.ethers.getSigners())[0];
  console.log("HardhatSignerAddress", hardhatSigner.address);
  //   process.exit();
  const txn = await hardhatSigner.sendTransaction({
    to: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    value: ethers.parseEther("0.1"),
  });
  console.log("Processing");
  txn.wait();
  console.log("TXN Completed", txn.hash);
}

main();
