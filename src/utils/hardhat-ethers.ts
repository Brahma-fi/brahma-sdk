// To get hre instance with ethers injected
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

const hre = require("hardhat");

export const hEthers = hre.ethers;
