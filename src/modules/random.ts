import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";
import {BigNumber, Wallet} from "ethers";
import {hEthers} from "../utils";
import {getSigner} from "./signer";

export async function randomSigner(
  balance?: BigNumber,
): Promise<SignerWithAddress> {
  const privKey = hEthers.utils.randomBytes(32);
  const walletAddress = new hEthers.Wallet(privKey).address;

  const signer = getSigner(walletAddress, balance);

  return signer;
}

export async function randomWallet(): Promise<Wallet> {
  const privKey = hEthers.utils.randomBytes(32);
  const wallet = new hEthers.Wallet(privKey);

  return wallet;
}
