# MetaMask SDK Next.js Quickstart

This is the quickstart of the [MetaMask SDK](https://docs.metamask.io/sdk) with Next.js.

## Clone the repository

```bash
git clone https://github.com/MetaMask/metamask-sdk-examples.git
cd metamask-sdk-examples/quickstarts/next
```

or using [degit](https://www.npmjs.com/package/degit)

```bash
npx degit MetaMask/metamask-sdk-examples/quickstarts/next mm-sdk-nextjs-quickstart && cd mm-sdk-nextjs-quickstart
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

## Add your Infura API key

```bash
NEXT_PUBLIC_INFURA_API_KEY=your-infura-api-key
```

## Run

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```
