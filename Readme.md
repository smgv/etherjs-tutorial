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

- First we connect to ethereum node using JSON-RPC Provider by passing the Infura URL

```
const infuraURL = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`;
const provider = new ethers.JsonRpcProvider(infuraURL);
```

JSON-RPC (Remote Procedure Call) is a protocol used by Ethereum nodes to communicate with each other and with clients. It defines a set of rules for making remote procedure calls between systems over a network.

- How to get the current blockNumber from the ethereum node

```
await provider.getBlockNumber();
```

BlockNumber in an Ethereum node is a unique identifier assigned to each block in the blockchain, representing its position and sequence within the chain.

- How to resolve ENS name?

```
await provider.resolveName("myAdd.eth")
```

ENS stands for Ethereum Name Service. It is a decentralized domain name system built on the Ethereum blockchain. ENS provides a way to map human-readable domain names (like "myAdd.eth") to Ethereum addresses, smart contract addresses, content hashes, and other resources on the Ethereum network.

- How to get the ENS from the given address?

```
await provider.lookupAddress("0x34aA3F359A9D614239015126635CE7732c18fDF3")
```

Resolves to the ENS name associated for the given address passed i.e 0x34aA3F359A9D614239015126635CE7732c18fDF3 -> atg.eth

- How to get balance from the given address?

```
const balance = await provider.getBalance("0x36f19dd57975E2F5B431Cf7dF4A02652e4272c68")
console.log(balance) -> 734315368681667777n
console.log(balance.toString()) -> 734315368681667777
```

The above method will return the Balance in BigNumberish format using so convert in readable format we can use .toString()

- To get balance in ETH we can use formatEther from ethers.js

```
ethers.formatEther(balance);
```

formatEther: This function is used to convert a BigNumber object representing an amount in wei into a string representing the same amount of Ether. It is the inverse of parseEther. For example, if you pass a BigNumber object representing 1500000000000000000 wei, it will return the string '1.5'.

- How to get balance again from ETH to WEI?

```
ethers.parseEther(balanceToEthFromGWEI)
```

parseEther: This function is used to convert a string or a number representing an amount of Ether into a BigNumber object that represents the same amount in wei, the smallest unit of Ether. For example, if you pass '1.5', it will return a BigNumber object representing 1.5 Ether in wei.
