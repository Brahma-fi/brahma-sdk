import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";
import {BigNumber, Wallet} from "ethers";

// To get hre instance with ethers injected
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

const hre = require("hardhat");

// Get a signer object with given object and (optionally) balance
export async function getSigner(
  address: string,
  balance?: BigNumber,
): Promise<SignerWithAddress> {
  await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [address],
  });

  const signer = await hre.ethers.getSigner(address);
  await hre.network.provider.request({
    method: "hardhat_setBalance",
    params: [
      address,
      balance ? balance.toHexString() : "0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
    ],
  });

  return signer;
}

// Get signature given, address, signer and verifying contract
export async function getSignature(
  addressToAuthorize: string,
  signer: Wallet | SignerWithAddress,
  verifyingContract: string,
): Promise<string> {
  const domain = {
    name: "Batcher",
    version: "1",
    chainId: 1,
    verifyingContract: verifyingContract,
  };
  // The named list of all type definitions
  const types = {
    deposit: [{name: "owner", type: "address"}],
  };

  // The data to sign
  const value = {
    owner: addressToAuthorize,
  };
  // console.log('signer:', signer.address);
  const signature = await signer._signTypedData(domain, types, value);
  // console.log("eip712 signature", signature);
  return hre.ethers.utils.hexlify(signature);
}
