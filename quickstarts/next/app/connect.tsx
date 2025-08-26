"use client";
import { MetaMaskSDK } from "@metamask/sdk";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Connect() {
  const [sdk, setSDK] = useState<MetaMaskSDK | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mmSDK = new MetaMaskSDK({
        dappMetadata: {
          name: "MetaMask SDK Next.js Quickstart",
          url: window.location.href,
        },
        infuraAPIKey: process.env.NEXT_PUBLIC_INFURA_API_KEY,
      });
      setSDK(mmSDK);
    }
  }, []);

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const connect = async () => {
    if (!sdk) return;
    setIsLoading(true);
    setError(null);
    try {
      const accounts = await sdk.connect();
      setAccount(accounts[0]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to connect");
    } finally {
      setIsLoading(false);
    }
  };

  const disconnect = async () => {
    if (!sdk) return;
    setIsLoading(true);
    setError(null);
    try {
      await sdk.terminate();
      setAccount(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to disconnect");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.connectContainer}>
      {error && <div className={styles.error}>{error}</div>}
      {account && (
        <div className={styles.account}>
          <p>
            Connected:{" "}
            <span className={styles.address}>{truncateAddress(account)}</span>
          </p>
        </div>
      )}
      <div className={styles.connect}>
        <button
          className={`${styles.button} ${isLoading ? styles.loading : ""}`}
          onClick={account ? disconnect : connect}
          disabled={isLoading || !sdk}
        >
          {isLoading ? "Loading..." : account ? "Disconnect" : "Connect"}
        </button>
      </div>
    </div>
  );
}
