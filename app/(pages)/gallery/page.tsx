"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { contents } from "@/lib/data";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState("");
    const [contentTitle, setContentTitle] = useState("");
    const [contentType, setContentType] = useState("");
    const [contentVideoPage, setContentVideoPage] = useState("");

    const showContent = (content: string, contentType: string, contentAltText: string, contentVideoPage?: string | null) => {
        setIsOpen(true);
        setContent(content);
        setContentType(contentType);
        setContentTitle(contentAltText);
        setContentVideoPage(contentVideoPage || "");
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 2,
            }}
            id="gallery"
            className="flex flex-col items-center justify-center py-30 w-screen"
        >
            <h1 className="text-6xl md:text-8xl font-bold">Gallery</h1>
            <p className="text-neutral-500 dark:text-neutral-400 font-hoves-regular py-4">
                The library of my work.
            </p>
            <div className="container w-full mx-auto p-4 md:p-10">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5">
                    {/* PREVIEW IMAGE OF VIDEO IS SHOWN IF THE CONTENT IS A VIDEO */}
                    {contents.map((content) => (
                        <div
                            key={content.id}
                            className="overflow-hidden rounded-lg shadow-md bg-black"
                        >
                            {content.type === "Image" ? (
                                <img
                                    src={content.src}
                                    alt={content.alt}
                                    className="w-full h-64 object-cover hover:scale-105 transition-transform cursor-pointer"
                                    onClick={() => showContent(content.src, content.type, content.alt)}
                                />
                            ) : (
                                <img
                                    src={content.imgPrwSrcForVideo}
                                    alt={content.alt}
                                    className="w-full h-64 object-cover hover:scale-105 transition-transform cursor-pointer"
                                    onClick={() => showContent(content.src, content.type, content.alt, content.videoPage)}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="z-999">
                    <DialogHeader>
                        <DialogTitle>{contentTitle}</DialogTitle>
                    </DialogHeader>
                    <div>
                        {contentType === "Image" ? (
                            <img src={content} draggable="false" alt={contentTitle} className="rounded-lg pointer-events-none select-none" />
                        ) : (
                            <div className="flex flex-col gap-4">
                                <video src={`${content}#t=0,5`} draggable="false" autoPlay className="rounded-lg select-none" />
                                <Link href={contentVideoPage}>
                                    <Button variant="default" size="lg" className="cursor-pointer rounded-full w-full font-semibold">
                                        Watch full video
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </motion.div>
    );
};

export default Gallery;
