import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { tools } from "@/ai/tools";

export async function POST(request: Request) {
  const { messages } = await request.json();

  try {
    const result = streamText({
      model: openai("gpt-4o"),
      system:
        "You are a wallet assistant. You can perform actions on the user's wallet like sending transactions and checking the balance",
      messages,
      maxSteps: 5,
      tools,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error(error);
    return new Response("Internal server error", { status: 500 });
  }
}
