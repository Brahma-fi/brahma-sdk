import hre, {network} from "hardhat";
import {BigNumber, BigNumberish} from "ethers";

export async function mineBlocks(numberOfBlocks: BigNumberish) {
  numberOfBlocks = BigNumber.from(numberOfBlocks);
  for (let i = 0; numberOfBlocks.gt(i); i++) {
    await hre.network.provider.send("evm_mine", []);
  }
}
