# Content 🎉

### ✏️ Chapter One - Providers, Wallets and Signers

[Ethers.js](https://docs.ethers.org/v6/): javascript library for interacting with the Ethereum Blockchain. It's a very well documented & lightweight library. Another popular library is web3.js

[Providers](https://docs.ethers.org/v6/api/providers/): A Provider is like an interface that enables you to talk to the Ethereum node. You can ask the Provider for information on the network. It only has read access to the blockchain. Any node on the network can be a provider. You can have your own node or use a node provider such as Infura or Alchemy.

[Signers](https://docs.ethers.org/v6/api/providers/#Signer): A Signer in ethers is an abstraction of an Ethereum Account, which can be used to sign messages and transactions and send signed transactions to the Ethereum Network to execute state changing operations.

- What is Infura and JSON_RPC ?
- Get blockNumber, address, balance, privateKey, resolve ENS and lookupAddress.
- ethers methods i.e. formatEthers and parseEthers
- signMessage and verifyMessage
- create Wallet and get mnemonic phrase
- sendTransaction

To learn all above [please click here](./ChapterOne/Readme.md).

### ✏️ Chapter Two - Contracts, AIB

[Contract](https://docs.ethers.org/v6/api/contract/): abstraction of code that has been deployed to the blockchain. If you want to talk to a contract, your making a transaction that interacts with the smart contract

[Application Binary Interface(ABI)](https://docs.ethers.org/v6/api/abi/): is the interface between two program modules. Simply put, ABI is like the API (Application Programming Interface) in the Ethereum world. It defines the methods and structures to interact with the smart contract.
