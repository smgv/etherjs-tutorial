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
// will get balance in BigNumber
const atgBalance = await provider.getBalance("atg.eth");
console.log("atg.eth Balance in WEI =>", atgBalance);
console.log("atg.eth Balance in WEI =>", atgBalance.toString());
console.log("---------------------------------------------");
// we convert that BigNumber using below method to get that value in wei i.e 1 WEI = 10e-18 ETH we get value in ETH
const balanceToEthFromGWEI = ethers.formatEther(atgBalance);
console.log("atg.eth Balance has =>", balanceToEthFromGWEI, "ETH");
console.log("---------------------------------------------");
// we convert the ETH again to WEI using the below method
console.log(
  `${balanceToEthFromGWEI} to wei => ${ethers.parseEther(balanceToEthFromGWEI)}`
);
console.log("---------------------------------------------");
