# Wallet Agent App

## Overview

The Wallet Agent App is a web application that enables users to interact with their cryptocurrency wallets through a chat interface powered by AI. It supports functionalities such as connecting wallets, sending transactions, and checking account balances.

## Key Functionalities

- **Connect Wallet:** Users can connect their cryptocurrency wallet to the app, allowing them to manage their assets directly from the interface. This functionality is primarily handled in the `Navbar` component (`examples/quickstart/components/navbar.tsx`).

- **AI-Powered Chat:** The app features a chat interface where users can interact with an AI assistant to perform wallet-related actions. This is implemented in the `Chat` component (`examples/wallet-agent/components/Chat.tsx`).

- **Send Transactions:** Users can initiate cryptocurrency transactions through the chat interface. The app provides a button to send transactions, which is facilitated by the `sendTransactionTool` in `examples/wallet-agent/ai/tools.ts`.

- **Check Balance:** Users can request their wallet balance via the chat interface. The balance is fetched using the `balanceTool` defined in `examples/wallet-agent/ai/tools.ts`.

- **API Integration:** The app uses an API route to process chat messages and invoke AI tools. This is managed in `examples/wallet-agent/app/api/chat/route.ts`.

## Getting Started

To run the app locally, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables for blockchain connections.
4. Start the development server using `npm run dev`.

For more detailed instructions, refer to the [installation guide](#).