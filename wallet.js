import { ethers } from "ethers";

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
