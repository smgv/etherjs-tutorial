import { ethers } from "ethers";
import "dotenv/config";
import BigNumber from "bignumber.js";

const infuraURL = `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_KEY}`;
const provider = new ethers.JsonRpcProvider(infuraURL);

const signer = new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY, provider);
console.log("---------------------------------------------");
const address = signer.address;
console.log("Polygon Mumbai Address :", address);
console.log("---------------------------------------------");
const balance = await provider.getBalance(address);
console.log("Mainnet Balance is :", ethers.formatEther(balance), "ETH");
console.log("---------------------------------------------");
console.log("Sending ETH to: ", "0x8e2df7FA920814e1EfC26940c8DE412f761E6b52");

const sendValue = ethers.parseEther("0.000001");
const txn = await signer.sendTransaction({
  to: "0x8e2df7FA920814e1EfC26940c8DE412f761E6b52",
  value: sendValue,
});
console.log("Transaction SENT", txn);
txn.wait();
console.log("Transaction CONFIRMED", txn.hash);
console.log("---------------------------------------------");
