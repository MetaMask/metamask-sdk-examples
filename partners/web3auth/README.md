# MetaMask Web3Auth integration

This project demonstrates the integration of [MetaMask SDK](https://docs.metamask.io/) with [Web3Auth SDK](https://docs.web3auth.io/) in a Next.js application. It provides a seamless wallet connection experience for both desktop and mobile users.

## Features

- _Dual SDK integration_ - Seamlessly combine MetaMask and Web3Auth SDKs.
- _Web3Auth Social login_ - Sign in with email/password or social providers.
- _MetaMask Wallet connection_ - Connect to MetaMask wallet with enhanced features.
- _Ethereum interactions_ - Send transactions, interact with contracts, and more.
- _Mobile-friendly_ - Optimized for both desktop and mobile devices.
- _Next.js integration_ - Built with Next.js 15 and App Router.
- _React 19_ - Latest React version with TypeScript support.
- _Tailwind CSS_ - Beautiful UI components with Tailwind CSS.
- _Wagmi_ - Ethereum interaction library.

## Project Structure

```bash
├── app/
│   ├── providers.tsx      # Main providers configuration
│   └── layout.tsx         # Root layout with providers
│   └── page.tsx           # Main page with wallet connection
├── components/
│   ├── Navbar.tsx         # Navigation component with wallet connection
│   └── Hero.tsx           # Hero section with wallet status
├── next.config.ts         # Next.js configuration
└── package.json           # Project dependencies
```

## Setup

1. Clone the repository
2. Install dependencies

   ```bash
   pnpm install
   ```

3. Create a `.env.local` file with your environment variables:

   ```bash
   NEXT_PUBLIC_WEB3AUTH_CLIENT_ID=your_web3auth_client_id
   ```

4. Start the development server

   ```bash
   pnpm dev
   ```

## Environment Variables

- `NEXT_PUBLIC_WEB3AUTH_CLIENT_ID` - Your Web3Auth client ID.

## Usage

### 1. Connect Wallet or Sign in

```tsx
"use client";

import { useWeb3AuthConnect } from "@web3auth/modal/react";

export const Navbar = () => {
  const { connect } = useWeb3AuthConnect();

  return (
    <nav>
      <button onClick={() => connect()}>Connect or Sign in</button>;
    </nav>
  );
};
```

### 2. Check wallet status

Use the `useAccount` hook from Wagmi:

```tsx
"use client";

import { useAccount } from "wagmi";

export const Hero = () => {
  const { address, isConnected } = useAccount();

  return (
    <div>
      {isConnected ? <p>Connected: {address}</p> : <p>Not connected</p>}
    </div>
  );
};
```

### 3. Send a transaction

Use the `useSendTransaction` hook from Wagmi:

```tsx
"use client";

import { useSendTransaction } from "wagmi";
import { parseEther } from "viem";

export const SendTransaction = () => {
  const { sendTransaction } = useSendTransaction();

  return (
    <button
      onClick={() =>
        sendTransaction({
          to: "0xd2135CfB216b74109775236E36d4b433F1DF507B",
          value: parseEther("0.001"),
        })
      }
    >
      Send transaction
    </button>
  );
};
```

## Dependencies

- `@web3auth/modal`: Web3Auth SDK
- `@metamask/sdk`: MetaMask SDK
- `wagmi`: Ethereum interaction library
- `@tanstack/react-query`: Data fetching and state management
- `next`: React framework
- `react`: React library
- `react-dom`: React DOM

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
