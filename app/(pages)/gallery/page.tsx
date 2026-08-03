"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ContentType, gallery } from "@/lib/data";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../../../components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState("");
    const [contentTitle, setContentTitle] = useState("");
    const [contentDesc, setContentDesc] = useState("");
    const [contentType, setContentType] = useState("");
    const [contentVideoPage, setContentVideoPage] = useState("");

    const showContent = (content: ContentType) => {
        setIsOpen(true);
        setContent(content.src);
        setContentType(content.type);
        setContentTitle(content.title);
        setContentVideoPage(content.videoPage || "");
        setContentDesc(content.description || "");
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
            className="w-[90%] lg:w-[80%] flex flex-col items-center justify-center border-x border-foreground/10 pb-150 pt-[20vh]"
        >
            <h1 className="text-6xl md:text-8xl font-bold">Gallery</h1>
            <p className="text-neutral-500 dark:text-neutral-400 font-hoves-regular py-4">
                The library of my work.
            </p>
            <div className="container w-full mx-auto p-4 md:p-10">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5">
                    {/* PREVIEW IMAGE OF VIDEO IS SHOWN IF THE CONTENT IS A VIDEO */}
                    {gallery.map((content) => (
                        <div
                            key={content.id}
                            className="overflow-hidden rounded-xs shadow-md bg-transparent flex items-center justify-center"
                        >
                            {content.type === "Image" ? (
                                <Image
                                    src={content.src}
                                    alt={content.alt}
                                    width={1000}
                                    height={1000}
                                    className={cn("w-auto h-auto aspect-square object-cover hover:scale-105 transition-transform cursor-pointer",
                                        content.title.toLowerCase().includes('college') || content.title.toLowerCase().includes('university') || content.title.toLowerCase().includes('emmanuel') ? 'invert dark:invert-0' : '')}
                                    onClick={() => showContent(content)}
                                    loading="eager"
                                />
                            ) : (
                                <Image
                                    src={content.imgPrwSrcForVideo as string}
                                    alt={content.alt}
                                    width={1000}
                                    height={1000}
                                    className="w-auto h-auto aspect-square object-cover hover:scale-105 transition-transform cursor-pointer"
                                    onClick={() => showContent(content)}
                                    loading="eager"
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
                        {contentDesc && <DialogDescription>{contentDesc}</DialogDescription>}
                    </DialogHeader>
                    <div className="flex items-center justify-center">
                        {contentType === "Image" ? (
                            <Image src={content} draggable="false" alt={contentTitle} width={400} height={400} className={cn("rounded-lg pointer-events-none select-none w-auto h-auto aspect-auto",
                                contentTitle.toLowerCase().includes('college') || contentTitle.toLowerCase().includes('university') || contentTitle.toLowerCase().includes('emmanuel') ? 'invert dark:invert-0' : '')} loading="eager" />
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
