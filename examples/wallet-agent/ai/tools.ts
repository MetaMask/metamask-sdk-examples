import { tool as createTool } from "ai";
import { z } from "zod";
import { publicClient } from "@/wagmi.config";
import { formatEther } from "viem";

export const balanceTool = createTool({
  description: "Request the account balance of the user",
  parameters: z.object({
    address: z.string().describe("The address of the user"),
  }),

  execute: async ({ address }) => {
    try {
      const balance = await publicClient.getBalance({
        address: address as `0x${string}`,
      });
      return { balance: formatEther(balance) };
    } catch (error) {
      console.error(error);
      return { balance: "0" };
    }
  },
});

export const sendTransactionTool = createTool({
  description:
    "You're going to provide a button that will initiate a transaction to the wallet address the user provided, you are not going to send the transaction",
  parameters: z.object({
    to: z.string().describe("The wallet address of the user"),
    amount: z.string().describe("The amount of eth the transaction"),
  }),
  execute: async ({ to, amount }) => {
    return { to, amount };
  },
});

export const tools = {
  displayBalance: balanceTool,
  sendTransaction: sendTransactionTool,
};
