"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode, useState } from "react";

import { Web3AuthProvider } from "@web3auth/modal/react";
import { WagmiProvider } from "@web3auth/modal/react/wagmi";
import { WEB3AUTH_NETWORK } from "@web3auth/modal";

type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Web3AuthProvider
      config={{
        web3AuthOptions: {
          clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID!, // Replace with your Client ID
          web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider>
          <div className="container">{children}</div>
        </WagmiProvider>
      </QueryClientProvider>
    </Web3AuthProvider>
  );
}
