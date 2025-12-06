import "./App.css";
import { ConnectKitButton } from "connectkit";

function App() {
  return (
    <>
      <div className="connect-button-wrapper">
        <ConnectKitButton />
      </div>
      <h1>MetaMask SDK ConnectKit Quickstart</h1>
      <p className="read-the-docs underline">
        <a href="https://docs.metamask.io/sdk/" target="_blank">
          SDK Documentation
        </a>
      </p>
      <footer className="source-code-link">
        <a
          href="https://github.com/MetaMask/metamask-sdk-examples/tree/main/quickstarts/connectkit"
          target="_blank"
        >
          Source code
        </a>
      </footer>
    </>
  );
}

export default App;
