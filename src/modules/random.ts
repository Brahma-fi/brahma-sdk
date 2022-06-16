import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";
import {BigNumber, Wallet} from "ethers";
import {hEthers} from "../utils";
import {getSigner} from "./signer";

export async function randomWallet(): Promise<Wallet> {
  const privKey = hEthers.utils.randomBytes(32);
  const wallet = new hEthers.Wallet(privKey);

  return wallet;
}
