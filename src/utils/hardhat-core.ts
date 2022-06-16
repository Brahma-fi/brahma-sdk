import {network} from "hardhat";
import {BigNumber, BigNumberish} from "ethers";

export const mineBlocks = async (_numberOfBlocks: BigNumberish) => {
  const numberOfBlocks = BigNumber.from(_numberOfBlocks);

  for (let i = 0; numberOfBlocks.gt(i); i++) {
    await network.provider.send("evm_mine", []);
  }
};

export const setBlockTime = async (timestamp: number) => {
  await network.provider.send("evm_setNextBlockTimestamp", [timestamp]);
};

export async function switchToNetwork(
  jsonRpcUrl: string,
  blockNumber?: number,
) {
  await network.provider.request({
    method: "hardhat_reset",
    params: [
      {
        forking: {
          jsonRpcUrl,
          blockNumber,
        },
      },
    ],
  });
}
