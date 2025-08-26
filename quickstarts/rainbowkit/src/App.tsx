import "./App.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function App() {
  return (
    <>
      <div className="connect-button-wrapper">
        <ConnectButton />
      </div>
      <h1>MetaMask SDK RainbowKit Quickstart</h1>
      <p className="read-the-docs underline">
        <a
          href="https://docs.metamask.io/sdk/connect/rainbowkit/"
          target="_blank"
        >
          SDK Documentation
        </a>
      </p>
    </>
  );
}

export default App;
