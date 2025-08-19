import "./App.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function App() {
  return (
    <>
      <h1>MetaMask SDK RainbowKit Quickstart</h1>
      <div className="card">
        <ConnectButton />
      </div>
    </>
  );
}

export default App;
