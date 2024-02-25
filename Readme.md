## What is Infura ?

1. Infura is a service that provides access to Ethereum and other blockchain networks.
2. It operates as a remote Ethereum node infrastructure that allows developers to connect to the Ethereum blockchain without having to run a full node themselves.
3. Infura offers a managed infrastructure layer for Ethereum nodes, making it easier for developers to interact with the Ethereum network through APIs without worrying about node management, scalability, or uptime.

### Steps to create account in Infura:

- Get Registered in [Infura Link](https://app.infura.io/register)
- Get Your API Key
- Navigate to ALL ENDPOINT section in Infura and enable networks that you want to access. i.e. Ethereum - (Mainnet, Goerli)
- In Active Endpoint section you will get all active networks URL. eg. https://sepolia.infura.io/v3/[API KEY]

## ethers.js

```
npm i ethers
```

The ethers.js library aims to be a complete and compact library for interacting with the Ethereum Blockchain and its ecosystem.

## First we connect to ethereum node using JSON-RPC Provider by passing the Infura URL

```
const infuraURL = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`;
const provider = new ethers.JsonRpcProvider(infuraURL);
```

JSON-RPC (Remote Procedure Call) is a protocol used by Ethereum nodes to communicate with each other and with clients. It defines a set of rules for making remote procedure calls between systems over a network.

## How to get the current blockNumber from the ethereum node

```
await provider.getBlockNumber();
```

BlockNumber in an Ethereum node is a unique identifier assigned to each block in the blockchain, representing its position and sequence within the chain.

## How to resolve ENS name?

```
await provider.resolveName("myAdd.eth")
```

ENS stands for Ethereum Name Service. It is a decentralized domain name system built on the Ethereum blockchain. ENS provides a way to map human-readable domain names (like "myAdd.eth") to Ethereum addresses, smart contract addresses, content hashes, and other resources on the Ethereum network.

## How to get the ENS from the given address?

```
await provider.lookupAddress("0x34aA3F359A9D614239015126635CE7732c18fDF3")
```

Resolves to the ENS name associated for the given address passed i.e 0x34aA3F359A9D614239015126635CE7732c18fDF3 -> atg.eth

## How to get balance from the given address?

```
const balance = await provider.getBalance("0x36f19dd57975E2F5B431Cf7dF4A02652e4272c68")
console.log(balance) -> 734315368681667777n
console.log(balance.toString()) -> 734315368681667777
```

The above method will return the Balance in BigNumberish format using so convert in readable format we can use .toString()

## To get balance in ETH we can use formatEther from ethers.js

```
ethers.formatEther(balance);
```

formatEther: This function is used to convert a BigNumber object representing an amount in wei into a string representing the same amount of Ether. It is the inverse of parseEther. For example, if you pass a BigNumber object representing 1500000000000000000 wei, it will return the string '1.5'.

## How to get balance again from ETH to WEI?

```
ethers.parseEther(balance)
```

parseEther: This function is used to convert a string or a number representing an amount of Ether into a BigNumber object that represents the same amount in wei, the smallest unit of Ether. For example, if you pass '1.5', it will return a BigNumber object representing 1.5 Ether in wei.

## How to manage and create Wallet and its account?

```
const wallet = ethers.Wallet.createRandom();
```

Creates a new random HDNodeWallet using the available cryptographic random source.

## How to get the created Wallet Public Address and Private Key?

```
wallet.address // '0x..'
wallet.privateKey // '0x...'
```

## How to get the create wallet mnemonic phrase?

```
const walletMnemonicPhrase = wallet.mnemonic.phrase // 12 words list
```

## How to create no of accounts using the above mnemonic phrase?

eg. creating extra accounts in one metamask accounts. -> Acc1, Acc2, Acc3, .... Acc[N]. It basically adds index starting from 0, 1, 2 .... N

```
for (let i = 0; i < 10; i++) {
  myWallet = ethers.Wallet.fromPhrase(walletMnemonicPhrase);
  console.log("address", i, myWallet.address);
  console.log("private key", i, myWallet.privateKey);
}
```

## How to connect to wallet with private key?

```
const WalletAddress = new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY)
```

## How to signMessage and VerifyMessage using the above WalletAddress?

When we talk about signing and verifying messages using a wallet in the context of Ethereum, we are referring to cryptographic operations that allow parties to prove ownership of an Ethereum address without revealing the private key associated with that address. This process is commonly used for various purposes such as authentication, message integrity verification, and secure communication.

```
# Sign Message
const signature = await WALLET.signMessage("Hello Ethers!");
console.log(signature)

# Output
0x2f453ff8c605556951345ac5b53ece75caa4fbd191aa10497171d3d59d1ef5441c0a8642c1ef2c3732b5bda705844dfe65ff0ef47c3d9f83568987fa47f31c731c
```

```
# Verify Message
const signerAddress = ethers.verifyMessage("Hello Ethers!", signature);
console.log(signerAddress)

# output
0x36f19dd57975E2F5B431Cf7dF4A02652e4272c68 -> Public Address
Return the address of the private key that produced the signature during signing for message
```

### SignMessage with Wallet:

- When you sign a message using your wallet, you are essentially creating a cryptographic signature of that message using your private key. The message can be any arbitrary data, such as a string, a hash, or a transaction payload.

- By signing the message, you prove that you have control over the private key associated with the Ethereum address from which the message is signed.

- The signature is unique to both the message and the private key used to sign it.

### Verification Process:

- To verify the signature, the recipient of the message needs the original message, the signature, and the Ethereum address associated with the signer's public key.

- Using this information, the recipient can verify the authenticity and integrity of the message by verifying the signature against the provided Ethereum address.

- If the signature is valid, it confirms that the message was indeed signed by the owner of the Ethereum address.

## SignMessage and VerifyMessage Example

1.  Alice (Message Signer):

- Alice wants to prove her identity to Bob.
- She has an Ethereum address with a corresponding private key.
- Alice generates a message and signs it with her private key.

2.  Bob (Message Verifier):

- Bob wants to verify Alice's identity based on the signed message.
- He has access to Alice's Ethereum address.
- Bob receives the signed message from Alice and verifies it against Alice's Ethereum address.

```
Code

// Alice's side (Message Signer)
const { ethers } = require('ethers');

// Alice's Ethereum address and private key
const aliceAddress = '0x....'; // Alice's Ethereum address
const alicePrivateKey = '...'; // Alice's private key

// Create a provider (you can use Infura or any Ethereum node provider)
const provider = new ethers.providers.JsonRpcProvider('YOUR_JSON_RPC_URL');

// Connect to wallet with Alice's private key
const wallet = new ethers.Wallet(alicePrivateKey, provider);

// Message to be signed
const message = 'Hello, Bob! This is Alice.';

// Sign the message
const signature = await wallet.signMessage(message);
console.log('Alice\'s signature:', signature);

// Bob's side (Message Verifier)
// Given: Alice's Ethereum address and the signed message
const aliceAddressFromBob = '0x....'; // Alice's Ethereum address
const signedMessageFromAlice = '...'; // Signed message from Alice

// Verify the message
const signer = ethers.utils.verifyMessage(message, signature);
if (signer === aliceAddressFromBob) {
    console.log('Message signature verified. It is from Alice.');
} else {
    console.log('Message signature verification failed. It may be spoofed.');
}
```

## Example - Dapp and User Authentication Flow

1. Authentication Process:

- You log in to the dApp using your Ethereum wallet or other authentication method.
- The dApp generates a unique authentication challenge, which could be a random string, a nonce, or some other data that the dApp expects you to sign.
- The dApp sends this authentication challenge to your wallet for signing.

2. Message Signing:

- Your wallet receives the authentication challenge from the dApp.
- You use your wallet's functionality to sign the authentication challenge with your private key.
- The signed message is returned to the dApp.

3. Verification Process:

- The dApp receives the signed message from your wallet.
- The dApp verifies the signature using your Ethereum address and the original authentication challenge.
- If the verification is successful, the dApp authenticates you and grants you access to its features.

## How to Send Transaction ?

```
import { ethers } from "ethers";
import "dotenv/config";

const infuraURL = `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_KEY}`;
const provider = new ethers.JsonRpcProvider(infuraURL);

const signer = new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY, provider);

const address = signer.address;
console.log("Polygon Mumbai Address :", address);

const balance = await provider.getBalance(address);
console.log("Mainnet Balance is :", ethers.formatEther(balance), "ETH");

console.log("Sending ETH to: ", "0x8e2df7FA920814e1EfC26940c8DE412f761E6b52");

const sendValue = ethers.parseEther("0.000001");
const txn = await signer.sendTransaction({
  to: "0x8e2df7FA920814e1EfC26940c8DE412f761E6b52",
  value: sendValue,
});

console.log("Transaction SENT", txn);

txn.wait();

console.log("Transaction CONFIRMED", txn.hash);
```

The sendTransaction method is used to create and send a transaction to the Ethereum blockchain. This transaction could involve sending Ether (ETH) to another Ethereum address or interacting with a smart contract by calling one of its functions.

### Parameters:

To use sendTransaction, you typically need to provide certain parameters:

- To Address: The Ethereum address of the recipient or the smart contract address.
- Value: The amount of Ether (in wei) to send with the transaction.
- Gas Limit: The maximum amount of gas units that can be consumed by the transaction.
- Gas Price: The price (in wei) per unit of gas that the sender is willing to pay to execute the transaction.
- Data (optional): Additional data associated with the transaction, often used when interacting with smart contracts.

### Signing and Broadcasting:

- Once you provide the necessary parameters, ethers.js internally handles the process of signing the transaction using the private key associated with your Ethereum wallet.
- After signing the transaction, ethers.js broadcasts it to the Ethereum network through an Ethereum node, which is typically provided by an Ethereum node provider like Infura or a local Ethereum node you run.

### Transaction Confirmation:

- After broadcasting the transaction, it is included in a block by Ethereum miners, and the transaction gets confirmed.
- Confirmation time depends on factors like network congestion, gas price, and other parameters specified in the transaction.
- we can use `txn.wait() ` to wait for the confirmation
- method returns the transaction hash.
