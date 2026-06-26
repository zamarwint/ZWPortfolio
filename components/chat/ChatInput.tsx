"use client";

import { useState } from "react";
import { Send } from 'lucide-react';

export default function ChatInput({
	onSend,
}: {
	onSend: (text: string) => void;
}) {
	const [text, setText] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (text.trim()) {
			onSend(text);
			setText("");
		}
	};

	return (
		<form onSubmit={handleSubmit} className="flex gap-3 items-center">
			<div className="relative flex-1">
				<input
					type="text"
					value={text}
					onChange={(e) => setText(e.target.value)}
					className="w-full py-3 px-5 rounded-full border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all font-hoves-regular placeholder-neutral-400 dark:placeholder-neutral-500"
					placeholder="Type a message..."
					autoComplete="off"
				/>
			</div>
			<button
				type="submit"
				disabled={!text.trim()}
				className="shrink-0 w-12 h-12 flex items-center justify-center bg-black text-white dark:bg-white dark:text-black rounded-full hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100"
			>
				<Send className="w-6 h-6" />
			</button>
		</form>
	);
}
