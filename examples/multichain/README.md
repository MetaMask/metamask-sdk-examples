# MetaMask Multichain SDK Example

A React application demonstrating how to integrate and use the MetaMask Multichain SDK to interact with multiple blockchain networks.

## Features

- Connect to MetaMask across multiple networks
- Switch between Ethereum and Linea networks
- Sign messages using the connected wallet
- Fetch blockchain data (latest block numbers)

## Prerequisites

- Node.js
- pnpm
- MetaMask extension installed in your browser
- Local copy of the MetaMask Multichain SDK

## Setup

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```
3. Create a `local_modules` directory and add the MetaMask Multichain SDK

## Development

```bash
pnpm dev
```

## Implementation Details

### Provider Setup

```typescript
// src/multichain/provider.tsx
import { createContext, type ReactNode, useMemo } from 'react';
import { MetamaskMultichain } from '@metamask/sdk-multichain';

export const MultichainContext = createContext<MetamaskMultichain | null>(null);

export const MultichainProvider = ({ children }: { children: ReactNode }) => {
  const client = useMemo(() => new MetamaskMultichain(), []);
  return (
    <MultichainContext.Provider value={client}>
      {children}
    </MultichainContext.Provider>
  );
};
```

### Usage Example

```typescript
// Connect to MetaMask
const connected = await client.connect({ extensionId: EXTENSION_ID });

// Create a session
const session = await client.createSession({
  requiredScopes: {
    "eip155:1": {
      methods: [],
      notifications: [],
    },
    "eip155:59144": {
      methods: [],
      notifications: [],
    },
  },
});

// Sign a message
await client.invokeMethod({
  scope: "eip155:1",
  request: {
    method: "personal_sign",
    params: [message, address],
  },
});

// Fetch block number
await client.invokeMethod({
  scope: network,
  request: {
    method: "eth_blockNumber",
    params: [],
  },
});
```

## Available Networks

- Ethereum (eip155:1)
- Linea (eip155:59144)

## Project Structure (relevant files)

```
src/
  multichain/           # SDK integration
    hooks.ts           # React hooks for SDK access
    provider.tsx       # SDK context provider
  constants.tsx        # Network configurations
```