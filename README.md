# MetaMask SDK Examples Monorepo

This monorepo contains various example applications demonstrating the integration of MetaMask SDK across different frameworks, platforms and partners.

## 🚀 Getting Started

Clone and install dependencies:

```sh
git clone https://github.com/MetaMask/metamask-sdk-examples.git
cd metamask-sdk-examples && pnpm install
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

## 🔧 Technical Stack

- **Build System**: Turborepo
- **Package Manager**: pnpm
- **Language**: TypeScript
- **Linting**: ESLint
- **Formatting**: Prettier

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
