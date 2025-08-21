# MetaMask Wagmi Quickstart Example

This quickstart application demonstrates how to integrate the **MetaMask SDK** with a **Next.js** application using **wagmi**. It showcases connecting to a wallet, switching networks, and interacting with Ethereum-based functionalities.

## Table of Contents

- [Quickstart App](#quickstart-app)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Project Structure](#project-structure)
    - [`app/page.tsx`](#apppagetsx)
    - [`app/layout.tsx`](#applayouttsx)
    - [`wagmi.config.ts`](#wagmiconfigts)
    - [`app/providers.tsx`](#appproviderstsx)
    - [`components/navbar.tsx`](#componentsnavbartsx)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

The **Quickstart App** serves as a foundation for developers to build decentralized applications (dApps) using Next.js and MetaMask. It provides a seamless integration with the Ethereum blockchain, allowing users to connect their wallets, switch networks, and interact with smart contracts.

## Features

- **Wallet Connection**: Connect to MetaMask wallet seamlessly.
- **Network Switching**: Switch between Ethereum networks like Linea Sepolia, Linea, and Mainnet.
- **Interactive UI**: Responsive design with interactive cards guiding users.
- **Modular Components**: Easy-to-understand and customizable components.
- **Smart Contract Interaction**: Templates for interacting with smart contracts.

## Project Structure

The application is organized into several key components and configurations:

### `app/page.tsx`

This is the main landing page of the application. It displays a welcome message and interactive cards that guide users to various resources and functionalities.

- **Welcome Section**: Displays a welcome message and prompts users to connect their wallet.
- **Cards Section**: Contains interactive cards linking to documentation, testnet ETH, guides, and examples.

### `app/layout.tsx`

Defines the root layout of the application, including global styles, fonts, and providers.

- **Fonts**: Uses `Geist` and `Geist_Mono` fonts for styling.
- **Metadata**: Sets the page title and description.
- **Providers**: Wraps the application with necessary providers for state management.
- **Navbar**: Includes the navigation bar across all pages.

### `wagmi.config.ts`

Configures the `wagmi` client for blockchain interactions, specifying supported chains and storage.

- **Chains**: Supports Linea Sepolia, Linea, and Ethereum Mainnet.
- **Storage**: Uses cookies for storage to maintain state between sessions.
- **Transports**: Sets up HTTP transports for chain communication.

### `app/providers.tsx`

Sets up providers for state management and data fetching using `WagmiProvider` and `QueryClientProvider`.

- **WagmiProvider**: Provides Ethereum context and state.
- **QueryClientProvider**: Manages data fetching and caching.
- **Initial State**: Retrieves initial state from cookies for server-side rendering (SSR).

### `components/navbar.tsx`

The navigation bar that handles wallet connections, network switching, and displays user account information.

- **Logo**: Displays the MetaMask logo.
- **Wallet Connection**: Shows a **Connect Wallet** button if not connected.
- **Account Information**: Displays connected wallet address and allows disconnection.
- **Network Switching**: Enables users to switch between supported networks.

## Technologies Used

- **Next.js**: React framework for building server-side rendered and statically generated applications.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript for improved developer experience.
- **wagmi**: React hooks library for Ethereum.
- **MetaMask SDK**: Enables interaction with the MetaMask wallet.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Lucide Icons**: Open-source icon library for consistent iconography.
- **@tanstack/react-query**: Data fetching and caching library.

## Getting Started

To run the application locally, follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/MetaMask/metamask-sdk-examples.git
   cd metamask-sdk-examples/quickstarts/wagmi
   ```

   or using [degit](https://www.npmjs.com/package/degit)

   ```bash
   npx degit MetaMask/metamask-sdk-examples/quickstarts/wagmi mm-sdk-wagmi-quickstart && cd mm-sdk-wagmi-quickstart
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**

   Visit [http://localhost:3000](http://localhost:3000) to see the application running.

## Contributing

Contributions are welcome! If you'd like to improve the app or add new features, please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize and expand upon this README to suit your project's needs.
