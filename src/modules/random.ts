import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";
import {BigNumber, Wallet} from "ethers";
import {hEthers} from "../utils";
import {getSigner} from "./signer";

export async function randomWallet(): Promise<Wallet> {
  const privKey = hEthers.utils.randomBytes(32);
  const wallet = new hEthers.Wallet(privKey);

  return wallet;
}

export function randomBN(
  upper: BigNumber,
  lower: BigNumber = BigNumber.from(0),
): BigNumber {
  const out = lower
    .add(BigNumber.from(hEthers.utils.randomBytes(32)))
    .mod(upper);

  if (out.gt(0)) return out;
  return randomBN(upper);
}
