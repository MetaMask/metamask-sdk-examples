import { createPublicClient } from "viem";
import { createWalletClient } from "viem";
import { createConfig, http, cookieStorage, createStorage } from "wagmi";
import { lineaSepolia, linea, mainnet } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

export const publicClient = createPublicClient({
  chain: lineaSepolia,
  transport: http(),
});

const rpcUrl = `https://linea-sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`;

export const walletClient = createWalletClient({
  chain: lineaSepolia,
  transport: http(rpcUrl),
  account: process.env.PRIVATE_KEY as `0x${string}`,
});

export function getConfig() {
  return createConfig({
    chains: [lineaSepolia, linea, mainnet],
    connectors: [metaMask()],
    ssr: true,
    storage: createStorage({
      storage: cookieStorage,
    }),
    transports: {
      [lineaSepolia.id]: http(),
      [linea.id]: http(),
      [mainnet.id]: http(),
    },
  });
}
