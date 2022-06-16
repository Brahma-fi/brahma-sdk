# Brahma SDK

This is a contract development SDK to speed up testing, and hardhat related workflows.

Install using --

```
yarn add -D brahma-sdk
```

or

```
npm install --save-dev brahma-sdk
```

## Modules

### 1. Hardhat Core

- Mining blocks

  `const mineBlocks = async (_numberOfBlocks: BigNumberish): void`

- Setting block timestamp

  `const setBlockTime = async (timestamp: number): void`

- Switching hardhat network

  `const switchToNetwork = async (jsonRpcUrl: string, blockNumber?: number): void`

### 2. Signer

- Getting a signer, with (optionally) address and (optionally) balance. If no address is passed, a default signer is returned

`getSigner<T = any>(balance?: BigNumber,address?: string): Promise<T>`

The return type is generic for use with any Signer type.

- Get signature with address, signer and verifying contract

`async function getSignature(addressToAuthorize: string, signer: Wallet | SignerWithAddress,verifyingContract: string): Promise<string>`

### 3. Random

- Getting a random wallet

`const randomWallet = async (): Promise<Wallet`

- Getting a random BigNumber object, with an upper bound and (optionally) lower bound

`const randomBN = (upper: BigNumber,lower: BigNumber = BigNumber.from(0)): BigNumber`

### 4. Contracts

- Getting an instance of an ERC20 contract with given address

`const getERC20ContractAt = async (address: string): Promise<ERC20>`

- Getting an instance of WETH contract

`const getWETHContract = async (address = Addresses.EthMaxi.wantTokenL1): Promise<IWETH9>`

### 5. Constants

- These are the constant addresses of contracts related to the products --

```json
{
  Common,
  EthMaxi,
  PMUSDC
}
```

## License

[MIT](./LICENSE.md)
