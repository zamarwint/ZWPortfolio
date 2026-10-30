"use client";

import { motion } from "motion/react";
import { useState, useEffect, useRef, useCallback } from "react";
import ChatMessages from "@/components/chat/ChatMessages";
import ChatInput from "@/components/chat/ChatInput";
import { ErrorImage } from "../../_components/modal-images";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import { cn } from "@/lib/utils";
import PageIntro from "@/components/PageIntro";
import { ArrowUpRight, LockKeyhole, Sparkles } from "lucide-react";

const suggestedPrompts = [
  "Tell me about WardPass",
  "What kind of roles are you looking for?",
  "How did you get into cybersecurity?",
];

function ErrorDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="font-funnel-display">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold font-funnel-display">
            Error
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex flex-col items-center text-center gap-4">
          <ErrorImage />
          Something went wrong while sending your message. Please try again.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

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
    container.scrollTop = container.scrollHeight;
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
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunkText = decoder.decode(value, { stream: true });

        // Append the new stream chunk to the pending assistant message.
        setMessages((prev) => {
          const lastIndex = prev.length - 1;
          return prev.map((message, index) =>
            index === lastIndex
              ? { ...message, text: message.text + chunkText }
              : message,
          );
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
    <main
      id="chat"
      className="mx-auto w-full max-w-[1440px] px-5 pb-20 pt-14 font-funnel-display sm:px-8 md:px-14 md:pt-20"
    >
      <PageIntro
        eyebrow="A quick conversation"
        title="Ask me anything."
        description="Curious about my projects, experience, or what I’m looking for? Start with a question."
        index="04"
      />
      <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-10">
        <aside className="flex flex-col justify-between rounded-2xl border border-primary/10 bg-card p-6 sm:p-8">
          <div>
            <span className="grid size-11 place-items-center rounded-full bg-secondary text-primary">
              <Sparkles className="size-5" />
            </span>
            <h2 className="mt-6 font-editorial-new text-3xl leading-tight">
              A helpful place to start.
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Ask Zamar&apos;s assistant about his work, skills, education, or
              how to get in touch.
            </p>
          </div>
          <div className="mt-8">
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
              Try asking
            </p>
            <div className="flex flex-col gap-2">
              {suggestedPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  disabled={isLoading}
                  onClick={() => void sendMessage(prompt)}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-primary/10 bg-background px-4 py-3 text-left text-xs leading-5 transition-colors hover:border-primary/25 hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span>{prompt}</span>
                  <ArrowUpRight className="size-3.5 shrink-0 opacity-50 transition-opacity group-hover:opacity-100" />
                </button>
              ))}
            </div>
            <p className="mt-5 flex items-center gap-2 text-[10px] leading-4 text-muted-foreground">
              <LockKeyhole className="size-3.5 shrink-0" /> This assistant can
              make mistakes. Reach out directly for important details.
            </p>
          </div>
        </aside>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="flex h-[min(650px,calc(100dvh_-_12rem))] min-h-[420px] min-w-0 flex-col overflow-hidden rounded-2xl border border-primary/15 bg-card shadow-xl shadow-primary/5"
        >
          <header className="flex shrink-0 items-center justify-between gap-4 border-b border-primary/10 bg-background/70 px-5 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-primary font-editorial-new text-sm text-primary-foreground">
                ZW
              </span>
              <div>
                <p className="text-sm font-medium">Zamar&apos;s Assistant</p>
                <p className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                  Portfolio guide
                </p>
              </div>
            </div>
            <span
              role="status"
              className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-background px-3 py-1.5 text-[10px] text-muted-foreground"
            >
              <span
                className={cn(
                  "size-1.5 rounded-full",
                  isLoading
                    ? "animate-pulse bg-secondary-foreground"
                    : "bg-primary",
                )}
              />
              {isLoading ? "Thinking" : "Ready"}
            </span>
          </header>
          <div
            ref={messagesContainerRef}
            aria-live="polite"
            className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain bg-background/35 p-4 sm:p-6"
          >
            <ChatMessages messages={messages} currentUserId="user" />
            {isLoading && messages[messages.length - 1]?.text === "" && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="flex gap-1">
                  <i className="size-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.2s]" />
                  <i className="size-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.1s]" />
                  <i className="size-1.5 animate-bounce rounded-full bg-primary" />
                </span>
                Preparing a response…
              </div>
            )}
          </div>
          <footer className="shrink-0 border-t border-primary/10 bg-background/80 p-4 sm:p-5">
            <ChatInput onSend={sendMessage} disabled={isLoading} />
            <p className="mt-2 text-center text-[9px] text-muted-foreground">
              Responses may take a few seconds while they stream in.
            </p>
          </footer>
        </motion.section>
      </div>
      <ErrorDialog open={isOpen} onOpenChange={setIsOpen} />
    </main>
  );
};

export default Chat;
