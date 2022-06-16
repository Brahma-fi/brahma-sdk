import {network} from "hardhat";
import {BigNumber, BigNumberish} from "ethers";

// Mine a given of blocks
export const mineBlocks = async (_numberOfBlocks: BigNumberish) => {
  const numberOfBlocks = BigNumber.from(_numberOfBlocks);

  for (let i = 0; numberOfBlocks.gt(i); i++) {
    await network.provider.send("evm_mine", []);
  }
};

// Set block to that of a certain timestamp
export const setBlockTime = async (timestamp: number) => {
  await network.provider.send("evm_setNextBlockTimestamp", [timestamp]);
};

// Switch to any network using a JSON RPC, and optionally, blocknumber
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
