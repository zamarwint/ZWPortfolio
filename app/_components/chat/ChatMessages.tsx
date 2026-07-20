import { motion } from "motion/react";
import type { ChatMessage } from "@/app/(pages)/chat/page";

export default function ChatMessages({
	messages,
	currentUserId,
}: {
	messages: ChatMessage[];
	currentUserId: string | undefined;
}) {
	return (
		<div className="flex flex-col space-y-4">
			{messages.map((msg, index) => {
				const isMe = msg.senderId === currentUserId;

				return (
					<motion.div
						initial={{ opacity: 0, y: 10, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						transition={{ duration: 0.3 }}
						key={index}
						className={`flex flex-col max-w-[75%] md:max-w-[60%] ${isMe ? "self-end items-end" : "self-start items-start"
							}`}
					>
						<div
							className={`p-3 md:p-4 rounded-2xl shadow-sm font-hoves-regular text-[15px] md:text-base ${isMe
									? "bg-black text-white rounded-tr-sm dark:bg-white dark:text-black"
									: "bg-white text-black rounded-tl-sm border border-neutral-200 dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
								}`}
						>
							<p className="whitespace-pre-wrap wrap-break-word">{msg.text}</p>
						</div>
						<span className="text-[11px] mt-1 text-neutral-400 font-hoves-regular px-1">
							{msg.timestamp}
						</span>
					</motion.div>
				);
			})}
		</div>
	);
}
