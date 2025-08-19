# MetaMask SDK RainbowKit Quickstart

This is the quickstart of the [MetaMask SDK](https://docs.metamask.io/sdk) with RainbowKit.

## Clone the repository

```bash
git clone https://github.com/MetaMask/metamask-sdk-examples.git
```

## Install dependencies

```bash
cd quickstarts/rainbowkit
pnpm install
```

## Create a `.env` file

```bash
cp .env.example .env.local
```

## Add your WalletConnect Cloud projectId

```bash
VITE_WALLETCONNECT_PROJECT_ID=your-project-id
```

Every dApp must now provide a [WalletConnect Cloud projectId](https://rainbowkit.com/docs/installation#configure) to enable WalletConnect v2 support.

## Run

```bash
pnpm dev
```
