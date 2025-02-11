"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useChat } from "ai/react";
import { useAccount, useSendTransaction } from "wagmi";
import { parseEther } from "viem";

export const Chat = () => {
  const { address } = useAccount();
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      initialMessages: [
        {
          role: "system",
          content: `You have connected your wallet successfully. Your wallet address is ${address}`,
          id: "system",
        },
      ],
    });

  const { data: hash, sendTransaction } = useSendTransaction();

  return (
    <div className="h-full w-full space-y-4 max-w-3xl">
      <div className="border h-full max-h-96 rounded-md p-4 space-y-6 justify-end overflow-y-scroll">
        {messages.map((message) => (
          <div key={message.id}>
            {message.role === "user" ? (
              <p className="w-fit max-w-md text-wrap overflow-scroll bg-gray-800 text-gray-50 rounded-md p-2">
                <strong>User:</strong> {message.content}
              </p>
            ) : (
              <div className="flex w-full justify-end">
                <div className="w-fit max-w-md bg-gray-100 text-gray-900 rounded-md p-2">
                  <strong>AI:</strong> {message.content}
                </div>
              </div>
            )}
            {message.toolInvocations?.map((toolInvocation) => {
              const { toolName, toolCallId, state } = toolInvocation;

              if (state === "result") {
                if (toolName === "sendTransaction") {
                  const { result }: { result: { to: string; amount: string } } =
                    toolInvocation;

                  if (isLoading) {
                    return (
                      <div key={toolCallId}>
                        <p>Loading...</p>
                      </div>
                    );
                  }

                  return (
                    <div key={toolCallId}>
                      <Button
                        className="bg-orange-600 text-orange-100 py-2 px-5 rounded-sm w-fit"
                        onClick={() =>
                          sendTransaction({
                            to: result.to as `0x${string}`,
                            value: parseEther(result.amount),
                          })
                        }
                      >
                        Send Transaction
                      </Button>
                      <p>
                        {hash
                          ? `Transaction sent: ${hash}`
                          : "Transaction not sent"}
                      </p>
                    </div>
                  );
                }
              }
            })}
          </div>
        ))}
      </div>

      <form className="flex gap-3" onSubmit={handleSubmit}>
        <Input
          value={input}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};
