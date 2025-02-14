import { useContext } from "react";
import { MultichainContext } from "./provider";

export const useMultichain = () => {
  const client = useContext(MultichainContext);
  if (!client) {
    throw new Error("Multichain client not found");
  }
  return client;
};
