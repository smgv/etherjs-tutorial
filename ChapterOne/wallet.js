import { ethers } from "ethers";
import "dotenv/config";

const wallet = ethers.Wallet.createRandom();

console.log("---------------------------------------------");
console.log("New Address: ", wallet.address);
console.log("---------------------------------------------");
console.log("Private Key: ", wallet.privateKey);
console.log("---------------------------------------------");
console.log("Mnemonic Phrase: ", wallet.mnemonic.phrase);
console.log("---------------------------------------------");
let myWallet;
for (let i = 0; i < 10; i++) {
  myWallet = ethers.Wallet.fromPhrase(wallet.mnemonic.phrase);
  console.log("address", i, myWallet.address);
  console.log("private key", i, myWallet.privateKey);
}
console.log("---------------------------------------------");

const WALLET = new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY);
console.log("My Wallet Public Key (from private key)", WALLET.address);
console.log("---------------------------------------------");
const signature = await WALLET.signMessage("Hello Ethers!");
console.log("Signed Message?", signature);
console.log("---------------------------------------------");
const signerAddress = ethers.verifyMessage("Hello Ethers!", signature);
console.log("signerAddress", signerAddress);
console.log("---------------------------------------------");
