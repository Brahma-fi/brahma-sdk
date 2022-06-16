import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";
import {BigNumber, Wallet} from "ethers";
import {hEthers} from "../utils";
import {getSigner} from "./signer";

export async function randomSigner<T = any>(balance?: BigNumber): Promise<T> {
  const privKey = hEthers.utils.randomBytes(32);
  const walletAddress = new hEthers.Wallet(privKey).address;

  const signer = getSigner(walletAddress, balance);

  return signer as any;
}

export async function randomWallet(): Promise<Wallet> {
  const privKey = hEthers.utils.randomBytes(32);
  const wallet = new hEthers.Wallet(privKey);

  return wallet;
}
