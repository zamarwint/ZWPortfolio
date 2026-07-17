"use server";
import { botData } from "@/lib/bot-data";

/**
 * Builds the Gemini system instruction from the bot intent data.
 */
export async function buildSystemInstruction(): Promise<string> {
	const systemInstructionParts = botData.intents.map(
		(intent) =>
			`- If asked about ${intent.keywords.join(", ")}, answer with information similar to: "${intent.response}"`,
	);

	return `You are Zamar's automated assistant. You help answer questions about his professional background and portfolio.
Here is some information about Zamar based on his pre-programmed intents:
${systemInstructionParts.join("\n")}

Keep your responses conversational, concise, and helpful. If the question is completely unrelated, respond with something similar to: "${botData.defaultResponse}"`;
}

/**
 * Fallback keyword-matching logic from the original bot.
 * Used when the Gemini API is unavailable.
 */
export async function getKeywordResponse(userText: string): Promise<string> {
	const lowercaseText = userText.toLowerCase();

	for (const intent of botData.intents) {
		if (intent.keywords.some((keyword) => lowercaseText.includes(keyword))) {
			return intent.response;
		}
	}

	return botData.defaultResponse;
}
