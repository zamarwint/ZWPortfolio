"use client";

import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import io, { Socket } from "socket.io-client";
import ChatMessages from "../../../components/chat/ChatMessages";
import ChatInput from "../../../components/chat/ChatInput";
import { errorContent } from "../../../components/modal-content";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../../../components/ui/dialog";

// Define the socket outside the component to prevent multiple connections on re-render
const socket: Socket =
    process.env.NODE_ENV === "development"
        ? io("http://localhost:4000")
        : io("https://zw-agent-backend-production.up.railway.app");

const Chat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<any[]>([]);
    const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // TOGGLE MODAL
    const toggleModal = () => {
        setIsOpen(true);
    };

    // CHECK IF THE SOCKET IS CONNECTED AND AUTOMATICALLY UPDATE THE CONNECTION STATUS
    useEffect(() => {
        // Sync state in case the connection status changed before the effect ran
        setIsConnected(socket.connected);

        const onConnect = () => {
            setIsConnected(true);
            console.log("Connected to server", socket.id);
        };

        const onDisconnect = () => {
            setIsConnected(false);
            console.log("Disconnected from server", socket.id);
        };

        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);

        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
        };
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        // Listen for incoming messages
        socket.on("chat message", (msg) => {
            setMessages((items) => [...items, msg]);
        });

        // Cleanup listener on unmount
        return () => {
            socket.off("chat message");
        };
    }, []);

    const sendMessage = (text: string) => {
        if (!isConnected) toggleModal();

        // Send message to server
        socket.emit("chat message", {
            senderId: socket.id,
            text,
            timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
        });
    };

    return (
        <div className="dark:bg-neutral-950 dark:text-white min-h-screen flex flex-col">
            <main
                id="chat"
                className="flex-1 flex flex-col items-center justify-center pt-32 pb-20 px-4 md:px-8"
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
                    <p className="mt-4 text-neutral-500 dark:text-neutral-400 font-hoves-regular">
                        Drop a message and let's talk.
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
                                    isConnected
                                        ? "w-3 h-3 rounded-full bg-green-500 animate-pulse"
                                        : "w-3 h-3 rounded-full bg-red-500 animate-pulse"
                                }
                            ></div>
                            <span className="font-hoves-demi-bold">Zamar's Assistant</span>
                        </div>
                        <div className="text-sm font-hoves-regular text-neutral-500 dark:text-neutral-400">
                            {isConnected ? "Online" : "Offline"}
                        </div>
                    </header>

                    <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 scroll-smooth bg-neutral-50/50 dark:bg-neutral-900/50">
                        <ChatMessages messages={messages} currentUserId={socket.id} />
                        <div ref={messagesEndRef} />
                    </div>

                    <footer className="p-4 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
                        <ChatInput onSend={sendMessage} />
                    </footer>
                </motion.div>
            </main>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent>
                    <DialogHeader className="text-center">
                        <DialogTitle className="text-2xl font-bold">Error</DialogTitle>
                    </DialogHeader>
                    <DialogDescription className="flex flex-col items-center gap-4 text-center">
                        {errorContent({
                            errorMessage: "The server is currently offline. Please try again when it comes online."
                        })}
                    </DialogDescription>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Chat;
