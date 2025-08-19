"use client";

import Image from "next/image";
import { useAccount } from "wagmi";
import { useState } from "react";

import {
  useWalletUI,
  useWeb3Auth,
  useWeb3AuthConnect,
  useWeb3AuthDisconnect,
} from "@web3auth/modal/react";

export function Navbar() {
  const { provider, isConnected, isInitialized } = useWeb3Auth();
  const { loading: connecting, connect, connectorName } = useWeb3AuthConnect();
  const { disconnect } = useWeb3AuthDisconnect();
  const { showWalletUI, loading: walletLoading } = useWalletUI();
  const { address } = useAccount();
  const [isCopied, setIsCopied] = useState(false);
  const [isSigning, setIsSigning] = useState(false);

  const handleCopy = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const signMessage = async () => {
    if (!provider || !address) return;

    try {
      setIsSigning(true);
      const message = "Hello, MetaMask Devs!";
      // Convert message to hex
      const messageHex = "0x" + Buffer.from(message).toString("hex");
      const signature = await provider.request({
        method: "personal_sign",
        params: [messageHex, address],
      });
      console.log("Signature:", signature);
      alert(`Signature: ${signature}`);
    } catch (error) {
      console.error("Error signing message:", error);
    } finally {
      setIsSigning(false);
    }
  };

  return (
    <nav className="flex w-full px-3 md:px-0 h-fit py-10 justify-between items-center">
      <Image
        src="/metamask-logo.svg"
        alt="Metamask Logo"
        width={180}
        height={180}
      />

      <div className="flex items-center gap-3">
        {!isConnected && isInitialized ? (
          <button
            onClick={() => connect()}
            disabled={connecting}
            className="bg-white text-black px-3 py-1.5 font-light text-sm font-sans rounded-md cursor-pointer hover:bg-gray-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
          >
            {connecting ? "Connecting..." : "Connect or Sign in"}
          </button>
        ) : (
          <>
            <div className="relative group hidden md:block">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-sm px-4 py-2 rounded-full transition-all duration-200 cursor-pointer"
              >
                <span className="text-white font-medium">
                  {address?.slice(0, 6)}...{address?.slice(-4)}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
              {isCopied && (
                <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white/10 text-white px-3 py-1 rounded-md text-sm">
                  Copied!
                </div>
              )}
            </div>
            {connectorName === "metamask" || connectorName === null ? (
              <button
                onClick={signMessage}
                disabled={isSigning}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="font-medium">
                  {isSigning ? "Signing..." : "Sign Message"}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2Z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => showWalletUI()}
                disabled={walletLoading}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="font-medium">Wallet</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </button>
            )}
            <button
              onClick={() => disconnect()}
              className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 text-sm px-4 py-2 rounded-full transition-all duration-200 cursor-pointer hidden md:flex"
            >
              <span className="font-medium">Disconnect</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
