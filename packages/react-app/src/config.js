import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xc95E4Ef54890d25f46Ed60eD9FC94cF9ad83851d"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/Gdg3A6OS96388xnZ4t7gCMpYgViadqjh",
  },
};