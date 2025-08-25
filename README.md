# MetaMask SDK Examples Monorepo

This monorepo contains various example applications demonstrating the integration of MetaMask SDK across different frameworks, platforms and partners.

## 🚀 Getting Started

Clone and install dependencies for all examples:

```sh
git clone https://github.com/MetaMask/metamask-sdk-examples.git
cd metamask-sdk-examples
```

## 📦 Repository Structure

```
metamask-sdk-examples/
├── quickstarts/      # Example applications
│   ├── javascript/    # JavaScript integration
│   ├── react/         # React + Vite integration
│   ├── next/          # Next.js integration
│   ├── react-native/  # React Native integration
│   ├──────────────────────────
│   ├── wagmi/         # Wagmi integration
│   ├── rainbowkit/    # RainbowKit integration
├── partners/          # Example applications with partners
│   ├── dynamic/       # Dynamic integration
│   ├── web3auth/      # Web3Auth integration
```

## 🎯 Available Examples

Each example in the `quickstarts/` directory demonstrates MetaMask SDK integration in different frameworks and scenarios:

- [**React Example**](quickstarts/react): Modern React application showcasing hooks and components
- [**Next.js Example**](quickstarts/next): Server-side rendering and static site generation
- [**JavaScript Example**](quickstarts/javascript): Pure JavaScript implementation without frameworks
- [**React Native Example**](#): React Native integration example
- [**Wagmi Example**](quickstarts/wagmi): Wagmi integration example
- [**RainbowKit Example**](quickstarts/rainbowkit): RainbowKit integration example

And each example in the `partners/` directory demonstrates MetaMask SDK integration with different partners:

- [**Dynamic Example**](partners/dynamic): Dynamic integration example
- [**Web3Auth Example**](partners/web3auth): Web3Auth integration example

## 🛠 Development

### Running Individual Examples

To run a specific example:

```sh
cd <quickstarts or partners>/<example-name>
pnpm install && pnpm dev
```

## Cloning individual examples using [degit](https://www.npmjs.com/package/degit)

- [**React Example**](quickstarts/react):
  ```bash
  npx degit MetaMask/metamask-sdk-examples/quickstarts/react mm-sdk-react-quickstart && cd mm-sdk-react-quickstart && npm install && npm run dev
  ```
- [**Next.js Example**](quickstarts/next):
  ```bash
  npx degit MetaMask/metamask-sdk-examples/quickstarts/next mm-sdk-nextjs-quickstart && cd mm-sdk-nextjs-quickstart && npm install && npm run dev
  ```
- [**JavaScript Example**](quickstarts/javascript):
  ```bash
  npx degit MetaMask/metamask-sdk-examples/quickstarts/javascript mm-sdk-javascript-quickstart && cd mm-sdk-javascript-quickstart && npm install && npm run dev
  ```
- [**Wagmi Example**](quickstarts/wagmi):
  ```bash
  npx degit MetaMask/metamask-sdk-examples/quickstarts/wagmi mm-sdk-wagmi-quickstart && cd mm-sdk-wagmi-quickstart && npm install && npm run dev
  ```
- [**RainbowKit Example**](quickstarts/rainbowkit):

  ```bash
  npx degit MetaMask/metamask-sdk-examples/quickstarts/rainbowkit mm-sdk-rainbowkit-quickstart && cd mm-sdk-rainbowkit-quickstart && npm install && npm run dev
  ```

- [**Dynamic Example**](partners/dynamic):
  ```bash
  npx degit MetaMask/metamask-sdk-examples/partners/dynamic mm-sdk-dynamic-quickstart && cd mm-sdk-dynamic-quickstart && npm install && npm run dev
  ```
- [**Web3Auth Example**](partners/web3auth):
  ```bash
  npx degit MetaMask/metamask-sdk-examples/partners/web3auth mm-sdk-web3auth-quickstart && cd mm-sdk-web3auth-quickstart && npm install && npm run dev
  ```

## 📚 Documentation

Each example includes its own README with:

- Specific setup instructions
- Implementation details
- Best practices
- Common issues and solutions

## 🤝 Contributing

We welcome contributions!

To add a new example:

1. Fork the repository
2. Create a new branch
3. Add your example
4. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Useful Links

- [MetaMask SDK Documentation](https://docs.metamask.io/sdk/)
- [Report Issues](https://github.com/MetaMask/metamask-sdk-examples/issues)
