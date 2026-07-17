import { NextRequest, NextResponse } from "next/server";
import { streamMessage } from "../../actions/assistant";

/**
 * POST /api/chat
 *
 * Accepts a JSON body with { text: string } and streams the bot's response
 * as plain text chunks using Gemini's generateContentStream.
 */
export async function POST(request: NextRequest) {
	try {
		const body = await request.json();

		if (!body.text || typeof body.text !== "string") {
			return NextResponse.json(
				{ error: "Missing or invalid 'text' field" },
				{ status: 400 },
			);
		}

		const encoder = new TextEncoder();
		const stream = new ReadableStream({
			async start(controller) {
				try {
					for await (const chunk of streamMessage(body.text)) {
						controller.enqueue(encoder.encode(chunk));
					}
				} catch (error) {
					console.error("Stream error:", error);
				} finally {
					controller.close();
				}
			},
		});

		return new Response(stream, {
			headers: {
				"Content-Type": "text/plain; charset=utf-8",
				"Transfer-Encoding": "chunked",
				"Cache-Control": "no-cache",
			},
		});
	} catch (error) {
		console.error("Chat API error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}
