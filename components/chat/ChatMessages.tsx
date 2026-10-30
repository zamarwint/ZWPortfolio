import { motion } from "motion/react";
import type { ChatMessage } from "@/app/(main)/chat/page";

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
            className={`flex flex-col max-w-[75%] md:max-w-[60%] ${
              isMe ? "self-end items-end" : "self-start items-start"
            }`}
          >
            <div
              className={`rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm md:px-5 md:py-4 ${
                isMe
                  ? "rounded-tr-sm bg-primary text-primary-foreground"
                  : "rounded-tl-sm border border-primary/10 bg-card"
              }`}
            >
              <p className="whitespace-pre-wrap wrap-break-word">{msg.text}</p>
            </div>
            <span className="text-[11px] mt-1 text-muted-foreground px-1">
              {msg.timestamp}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
