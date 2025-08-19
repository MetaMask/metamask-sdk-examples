# MetaMask Dynamic Integration

This project demonstrates the integration of MetaMask SDK with Dynamic SDK in a Next.js application. It provides a seamless wallet connection experience for both desktop and mobile users.

## Features

- MetaMask wallet integration
- Dynamic SDK integration for enhanced wallet management
- Mobile-friendly wallet connection experience
- TypeScript support
- Next.js 14 with App Router

## Project Structure

```
├── app/
│   ├── providers.tsx      # Main providers configuration
│   └── layout.tsx         # Root layout with providers
├── components/
│   ├── Navbar.tsx         # Navigation component with wallet connection
│   └── Hero.tsx           # Hero section with wallet status
├── wagmi.config.ts        # Wagmi configuration
├── next.config.ts         # Next.js configuration
└── package.json           # Project dependencies
```

## Key Components

### Providers (`app/providers.tsx`)

The main providers component that sets up:
- Dynamic SDK for wallet management
- Wagmi for Ethereum interactions
- React Query for data fetching
- MetaMask SDK integration

```typescript
<DynamicContextProvider>
  <WagmiProvider>
    <QueryClientProvider>
      <DynamicWagmiConnector>
        {children}
      </DynamicWagmiConnector>
    </QueryClientProvider>
  </WagmiProvider>
</DynamicContextProvider>
```

### Configuration

- `next.config.ts`: Next.js configuration with allowed development origins
- `wagmi.config.ts`: Wagmi configuration for Ethereum interactions

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with your environment variables:
   ```
   NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID=your_dynamic_environment_id
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

- `NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID`: Your Dynamic SDK environment ID

## Dependencies

- `@dynamic-labs/sdk-react-core`: Dynamic SDK for React
- `@dynamic-labs/ethereum`: Ethereum wallet connectors
- `@dynamic-labs/wagmi-connector`: Wagmi connector for Dynamic
- `@metamask/sdk`: MetaMask SDK
- `wagmi`: Ethereum interaction library
- `@tanstack/react-query`: Data fetching and state management
- `next`: React framework
- `react`: React library
- `react-dom`: React DOM

## Development

The project uses:
- TypeScript for type safety
- Next.js 14 with App Router
- Modern React patterns and hooks
- Client-side rendering for wallet components

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
