import { ethers } from "ethers";
import "dotenv/config";
import { getProvider, getSigner } from "./utils.js";

const polygonMumbaiProvider = getProvider();
const polygonMumbaiSigner = getSigner();
const address = polygonMumbaiSigner.address;
console.log("---------------------------------------------");
console.log("Polygon Mumbai Address :", address);
console.log("---------------------------------------------");
const balance = await polygonMumbaiProvider.getBalance(address);
console.log("Polygon Mumbai Balance is :", ethers.formatEther(balance), "ETH");
console.log("---------------------------------------------");
console.log("Sending ETH to: ", "0x8e2df7FA920814e1EfC26940c8DE412f761E6b52");
console.log("---------------------------------------------");
process.exit();
const sendValue = ethers.parseEther("0.000001");
const txn = await polygonMumbaiSigner.sendTransaction({
  to: "0x8e2df7FA920814e1EfC26940c8DE412f761E6b52",
  value: sendValue,
});
console.log("Transaction SENT", txn);
txn.wait();
console.log("Transaction CONFIRMED", txn.hash);
console.log("---------------------------------------------");
