import hre from "hardhat";
import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";
import {BigNumber, Wallet} from "ethers";
import {hEthers} from "../utils";

// Get a signer object with given (optionally) address and (optionally) balance
// Gets a random signer in case of no address
export async function getSigner<T = any>(
  balance?: BigNumber,
  address?: string,
): Promise<T> {
  if (!address) {
    const privKey = hEthers.utils.randomBytes(32);
    address = new hEthers.Wallet(privKey).address;
  }

  await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [address],
  });

  const signer = await hEthers.getSigner(address);
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
  return hEthers.utils.hexlify(signature);
}
