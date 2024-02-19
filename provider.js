import "dotenv/config";
import { ethers } from "ethers";

const infuraURL = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`;
// Provider is basically used to communicate with ethereum by using INFURA alternate alchemy
const provider = new ethers.JsonRpcProvider(infuraURL);

console.log("---------------------------------------------");
console.log("Current Block Number =>", await provider.getBlockNumber());
console.log("---------------------------------------------");
console.log("atg.eth is =>", await provider.resolveName("atg.eth"));
console.log("---------------------------------------------");
console.log(
  "0x34aA3F359A9D614239015126635CE7732c18fDF3 is =>",
  await provider.lookupAddress("0x34aA3F359A9D614239015126635CE7732c18fDF3")
);
console.log("---------------------------------------------");
const balance = await provider.getBalance("atg.eth");
const balanceToEthFromGWEI = ethers.formatEther(balance);
console.log("atg.eth Balance has =>", balanceToEthFromGWEI);
console.log("---------------------------------------------");
console.log(
  `${balanceToEthFromGWEI} to wei => ${ethers.parseEther(balanceToEthFromGWEI)}`
);
console.log("---------------------------------------------");
