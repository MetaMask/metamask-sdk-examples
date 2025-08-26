import { EventEmitter } from "events";

type ExtensionLocator =
  | "isMetaMask"
  | "isCoinbaseWallet"
  | "isTrust"
  | "isBraveWallet";

declare global {
  interface Window {
    ethereum: IEthereum;
  }
}

export interface IEthereum extends EventEmitter {
  [key in ExtensionLocator]: boolean;
  providers?: object[];
  request: <T extends string>(
    params:
      | {
          method: T;
        }
      | object
  ) => Promise<T extends "eth_requestAccounts" ? [string] : object>;
  selectedAddress: string | null;
}
