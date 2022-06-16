import {ERC20, IWETH9} from "../types";
import {hEthers} from "../utils";
import {Addresses} from "./constants";

import erc20ABI from "../abi/erc20.json";
import wethABI from "../abi/weth.json";
import {Contract} from "ethers";

export const getERC20ContractAt = async (address: string): Promise<ERC20> => {
  return new Contract(address, erc20ABI, hEthers.provider) as ERC20;
};

export const getWETHContract = async (): Promise<IWETH9> => {
  return new Contract(
    Addresses.EthMaxi.wantTokenL1,
    wethABI,
    hEthers.provider,
  ) as IWETH9;
};
