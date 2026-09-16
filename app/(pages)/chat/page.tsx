"use client";

import { motion } from "motion/react";
import { useState, useEffect, useRef, useCallback } from "react";
import ChatMessages from "@/components/chat/ChatMessages";
import ChatInput from "@/components/chat/ChatInput";
import { ErrorContent } from "../../_components/modal-content";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import { cn } from "@/lib/utils";
import { useKeyboardShortcuts } from "@/lib/functions";

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

  useKeyboardShortcuts();

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
      className="min-h-screen min-w-full pt-[10vh] pb-[5vh] flex flex-col items-center justify-center font-funnel-display"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <h1 className="text-5xl md:text-7xl font-editorial-new italic tracking-tight">
          Ask me anything...
        </h1>
        <p className="py-4 text-muted-foreground font-normal">
          Drop a message and let&apos;s talk.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-[80%] h-[60vh] flex flex-col overflow-hidden border border-border"
      >
        <header className="p-4 border-b border-border flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "w-3 h-3 rounded-full",
                isLoading ? "bg-yellow-500 animate-pulse" : "bg-green-500",
              )}
            ></div>
            <span
              className={cn(
                "font-semibold",
                isLoading ? "text-muted-foreground" : "",
              )}
            >
              Zamar&apos;s Assistant
            </span>
          </div>
          <div
            className={cn(
              "text-sm font-normal",
              isLoading
                ? "shimmer shimmer-duration-1000 text-muted-foreground"
                : "",
            )}
          >
            {isLoading ? "Thinking..." : "Ready"}
          </div>
        </header>

        <div
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 scroll-smooth"
        >
          <ChatMessages messages={messages} currentUserId={"user"} />
        </div>

        <footer className="p-4 border-t border-border">
          <ChatInput onSend={sendMessage} />
        </footer>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="font-funnel-display">
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold font-funnel-display">
              Error
            </DialogTitle>
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
