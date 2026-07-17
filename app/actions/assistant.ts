"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildSystemInstruction, getKeywordResponse } from "./handle-bot-data";
/**
 * Chat message shape returned to the client.
 */
export interface ChatResponse {
	senderId: "bot";
	text: string;
	timestamp: string;
}
/**
 * Server action: sends a user message to the Gemini AI assistant
 * and returns the bot's response. Falls back to keyword matching
 * if the API key is missing or the request fails.
 */
export async function sendMessage(userText: string): Promise<ChatResponse> {
	let responseText: string;
	try {
		const apiKey = process.env.GEMINI_API_KEY;
		if (!apiKey) {
			throw new Error("GEMINI_API_KEY is not set");
		}
		const genAI = new GoogleGenerativeAI(apiKey);
		const model = genAI.getGenerativeModel({
			model: "gemini-3.1-flash-lite",
			systemInstruction: await buildSystemInstruction(),
		});
		const result = await model.generateContent(userText);
		responseText = result.response.text();
	} catch (error) {
		console.error(
			"Gemini API error or unavailable, falling back to basic bot logic:",
			error,
		);
		responseText = await getKeywordResponse(userText);
	}
	return {
		senderId: "bot",
		text: responseText,
		timestamp: new Date().toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
		}),
	};
}

/**
 * Streaming variant: yields text chunks from Gemini's generateContentStream.
 * Falls back to yielding the entire keyword response in one shot.
 */
export async function* streamMessage(
	userText: string,
): AsyncGenerator<string> {
	try {
		const apiKey = process.env.GEMINI_API_KEY;
		if (!apiKey) {
			throw new Error("GEMINI_API_KEY is not set");
		}
		const genAI = new GoogleGenerativeAI(apiKey);
		const model = genAI.getGenerativeModel({
			model: "gemini-3.1-flash-lite",
			systemInstruction: await buildSystemInstruction(),
		});
		const result = await model.generateContentStream(userText);
		for await (const chunk of result.stream) {
			const text = chunk.text();
			if (text) {
				yield text;
			}
		}
	} catch (error) {
		console.error(
			"Gemini streaming error, falling back to basic bot logic:",
			error,
		);
		const fallback = await getKeywordResponse(userText);
		yield fallback;
	}
}