"use client";

import { useState } from "react";
import { Send } from "lucide-react";

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
          className="w-full py-2 px-3 border border-border bg-accent/20 focus:outline-none focus:ring-2 focus:ring-ring transition-all placeholder-muted-foreground"
          placeholder="Type a message..."
          autoComplete="off"
        />
      </div>
      <button
        type="submit"
        disabled={!text.trim()}
        className="shrink-0 p-2 flex items-center justify-center bg-primary text-background hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100"
      >
        <Send className="size-6" />
      </button>
    </form>
  );
}
