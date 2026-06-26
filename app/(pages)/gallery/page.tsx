"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { contents } from "@/lib/data";
// import Modal from "../components/Modal";

const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState("");
    const [contentTitle, setContentTitle] = useState("");
    const [contentType, setContentType] = useState("");

    const showContent = (content: string, contentType: string, contentAltText: string) => {
        setIsOpen(true);
        setContent(content);
        setContentType(contentType);
        setContentTitle(contentAltText);
    };

    return (
        <div
            id="gallery"
            className="text-black bg-white dark:bg-black dark:text-white py-16"
        >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 2,
                }}
                className="flex flex-col items-center justify-center"
            >
                <div className="text-6xl md:text-8xl py-20">Gallery</div>
                <div className="container mx-auto p-4 md:p-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5">
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
                                        onClick={() => showContent(content.src, content.type, content.alt)}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
            {/* <Modal
                title={contentTitle}
                content={contentType === "Image" ? (
                    <img
                        src={content}
                        alt="Image"
                        className="w-full max-h-100 md:max-h-140 rounded-xl object-cover transition-transform"
                    />
                ) : (
                    <video
                        src={content}
                        autoPlay
                        controls
                        className="w-full max-h-100 md:max-h-140 rounded-xl object-cover transition-transform"
                    />
                )}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            /> */}
        </div>
    );
};

export default Gallery;
