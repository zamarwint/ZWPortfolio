"use client";

import { motion } from "motion/react";
import { useState, useEffect, useRef, useCallback } from "react";
import ChatMessages from "../../_components/chat/ChatMessages";
import ChatInput from "../../_components/chat/ChatInput";
import { ErrorContent } from "../../_components/modal-content";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "../../../components/ui/dialog";

export interface ChatMessage {
	senderId: string;
	text: string;
	timestamp: string;
}

const INITIAL_GREETING: ChatMessage = {
	senderId: "bot",
	text: "Hi there! I'm Zamar's automated assistant. You can ask me about his skills, projects, experience, or how to contact him!",
	timestamp: "",
};

const Chat = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState<ChatMessage[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const messagesContainerRef = useRef<HTMLDivElement>(null);
	const hasGreeted = useRef(false);

	// Show initial greeting on mount
	useEffect(() => {
		if (hasGreeted.current) return;
		hasGreeted.current = true;

		const timer = setTimeout(() => {
			setMessages([
				{
					...INITIAL_GREETING,
					timestamp: new Date().toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					}),
				},
			]);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	const scrollToLatestMessage = useCallback(() => {
		const container = messagesContainerRef.current;
		if (!container) return;
		const lastMessage = container.querySelector(".flex.flex-col > :last-child");
		lastMessage?.scrollIntoView({ behavior: "smooth", block: "start" });
	}, []);

	useEffect(() => {
		scrollToLatestMessage();
	}, [messages, scrollToLatestMessage]);

	const sendMessage = async (text: string) => {
		const userMessage: ChatMessage = {
			senderId: "user",
			text,
			timestamp: new Date().toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			}),
		};

		// Optimistically add user message and an empty bot placeholder
		const botPlaceholder: ChatMessage = {
			senderId: "bot",
			text: "",
			timestamp: new Date().toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			}),
		};

		setMessages((prev) => [...prev, userMessage, botPlaceholder]);
		setIsLoading(true);

		try {
			const res = await fetch("/api/chat", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ text }),
			});

			if (!res.ok) {
				throw new Error(`Server error: ${res.status}`);
			}

			const reader = res.body?.getReader();
			if (!reader) {
				throw new Error("No response body");
			}

			const decoder = new TextDecoder();
			let accumulated = "";

			while (true) {
				const { done, value } = await reader.read();
				if (done) break;

				accumulated += decoder.decode(value, { stream: true });

				// Update the last message (bot placeholder) with accumulated text
				setMessages((prev) => {
					const updated = [...prev];
					updated[updated.length - 1] = {
						...updated[updated.length - 1],
						text: accumulated,
					};
					return updated;
				});
			}
		} catch (error) {
			console.error("Failed to send message:", error);
			// Remove the empty bot placeholder on error
			setMessages((prev) => {
				const last = prev[prev.length - 1];
				if (last?.senderId === "bot" && last.text === "") {
					return prev.slice(0, -1);
				}
				return prev;
			});
			setIsOpen(true);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<motion.div
			id="chat"
			className="w-full h-full min-h-screen py-30 flex flex-col items-center justify-center"
		>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="text-center mb-10"
			>
				<h1 className="text-5xl md:text-7xl font-bold tracking-tight">
					Ask me anything
				</h1>
				<p className="py-4 text-neutral-500 dark:text-neutral-400 font-normal">
					Drop a message and let&apos;s talk.
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
				className="w-full max-w-3xl h-[60vh] md:h-[70vh] flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800"
			>
				<header className="p-5 bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between z-10">
					<div className="flex items-center gap-3">
						<div
							className={
								isLoading
									? "w-3 h-3 rounded-full bg-yellow-500 animate-pulse"
									: "w-3 h-3 rounded-full bg-green-500"
							}
						></div>
						<span className="font-semibold">Zamar&apos;s Assistant</span>
					</div>
					<div className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
						{isLoading ? "Thinking..." : "Ready"}
					</div>
				</header>

				<div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 scroll-smooth bg-neutral-50/50 dark:bg-neutral-900/50">
					<ChatMessages messages={messages} currentUserId={"user"} />
				</div>

				<footer className="p-4 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
					<ChatInput onSend={sendMessage} />
				</footer>
			</motion.div>

			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent>
					<DialogHeader className="text-center">
						<DialogTitle className="text-2xl font-bold">Error</DialogTitle>
					</DialogHeader>
					<DialogDescription className="flex flex-col items-center text-center gap-4">
						<ErrorContent />
						Something went wrong while sending your message. Please try again.
					</DialogDescription>
				</DialogContent>
			</Dialog>
		</motion.div>
	);
};

export default Chat;
