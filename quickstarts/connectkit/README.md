# MetaMask SDK ConnectKit Quickstart

This is the quickstart of the [MetaMask SDK](https://docs.metamask.io/sdk) with ConnectKit.

## Clone the repository

```bash
git clone https://github.com/MetaMask/metamask-sdk-examples.git
cd metamask-sdk-examples/quickstarts/connectkit
```

or using [degit](https://www.npmjs.com/package/degit)

```bash
npx degit MetaMask/metamask-sdk-examples/quickstarts/connectkit mm-sdk-connectkit-quickstart && cd mm-sdk-connectkit-quickstart
```

## Install dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
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
npm run dev
# or
pnpm dev
# or
yarn dev
```
