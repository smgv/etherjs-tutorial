import { ethers } from "ethers";
import "dotenv/config";

export const PrivateKeyFromEnv = process.env.MY_WALLET_PRIVATE_KEY;
export const InfuraKeyFromEnv = process.env.INFURA_KEY;

export const INFURA_TYPE = {
  POLYGON_MUMBAI: "polygonMumbai",
  MAINNET: "mainnet",
  OPTIMISM_SEPOLIA: "optimismSepolia",
  RINKEBY: "rinkeby",
  GOERLI: "goerli",
  SEPOLIA: "sepolia",
};

export const getProvider = (type = INFURA_TYPE.POLYGON_MUMBAI) => {
  const mainnetInfuraURL = `https://mainnet.infura.io/v3/${InfuraKeyFromEnv}`;
  const polygonMumbaiInfuraURL = `https://polygon-mumbai.infura.io/v3/${InfuraKeyFromEnv}`;
  const optimismSepoliaInfuraURL = `https://optimism-sepolia.infura.io/v3/${InfuraKeyFromEnv}`;
  const rinkebyInfuraURL = `https://rinkeby.infura.io/v3/${InfuraKeyFromEnv}`;
  const goerliInfuraURL = `https://goerli.infura.io/v3/${InfuraKeyFromEnv}`;
  const sepoliaInfuraURL = `https://sepolia.infura.io/v3/${InfuraKeyFromEnv}`;

  let infuraURL = "";
  if (type === INFURA_TYPE.MAINNET) {
    infuraURL = mainnetInfuraURL;
  } else if (type === INFURA_TYPE.OPTIMISM_SEPOLIA) {
    infuraURL = optimismSepoliaInfuraURL;
  } else if (type === INFURA_TYPE.POLYGON_MUMBAI) {
    infuraURL = polygonMumbaiInfuraURL;
  } else if (type === INFURA_TYPE.GOERLI) {
    infuraURL = goerliInfuraURL;
  } else if (type === INFURA_TYPE.SEPOLIA) {
    infuraURL = sepoliaInfuraURL;
  } else {
    infuraURL = rinkebyInfuraURL;
  }
  return new ethers.JsonRpcProvider(infuraURL);
};

export const generateNewWallet = () => {
  const wallet = ethers.Wallet.createRandom();

  console.log("address", wallet.address);
  console.log("private Key", wallet.privateKey);
  console.log("mnemonic phrase", wallet.mnemonic.phrase);
};

export const getSigner = (type = INFURA_TYPE.POLYGON_MUMBAI) => {
  const provider = getProvider(type);
  return new ethers.Wallet(PrivateKeyFromEnv, provider);
};
