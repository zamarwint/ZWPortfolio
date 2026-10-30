"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ChatInput({
  onSend,
  disabled = false,
}: {
  onSend: (text: string) => void;
  disabled?: boolean;
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
          aria-label="Your message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={disabled}
          className="w-full rounded-xl border border-primary/15 bg-card px-4 py-3 text-sm transition-all placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
          placeholder="Type a message..."
          autoComplete="off"
        />
      </div>
      <button
        type="submit"
        aria-label="Send message"
        disabled={disabled || !text.trim()}
        className="glossy-button grid size-11 shrink-0 place-items-center rounded-xl text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Send className="size-4" />
      </button>
    </form>
  );
}
