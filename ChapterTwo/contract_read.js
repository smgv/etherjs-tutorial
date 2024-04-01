import { ethers } from "ethers";
import { getProvider, INFURA_TYPE } from "./utils.js";
import ABI from "./abi/nftAbi.js";

const nftAddress = "0x5c918cF197495E72161E22b8EB2234B5769aafD8";
const rinkebyProvider = getProvider(INFURA_TYPE.POLYGON_MUMBAI);

const Contract = new ethers.Contract(nftAddress, ABI, rinkebyProvider);

console.log("---------------------------------------------");
const tokenURI = await Contract.defaultTokenUri();
console.log("DefaultTokenUri:-", tokenURI);
console.log("---------------------------------------------");
const name = await Contract.name();
console.log("Token Name:-", name);
console.log("---------------------------------------------");
const Owner = await Contract.owner();
console.log("Token Owner:-", Owner);
console.log("---------------------------------------------");
