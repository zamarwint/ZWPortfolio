"use client";

import { motion } from "motion/react"
import { use } from 'react'
import { files } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function VideosPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = use(params)
    console.log(slug)
    const videoFileLink = files.videos.find((file) => {
        if (file.videoPage.includes(slug)) {
            return file.link;
        }
    })

    return (
        <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 2,
            }}
            id="gallery"
            className="flex flex-col items-center justify-center py-10 text-center">
            <h1 className="text-5xl font-bold">{slug}</h1>
            <p className="text-neutral-500 dark:text-neutral-400 font-hoves-regular py-2">
                Full video
            </p>
            <div className="container flex flex-col items-center justify-center p-4">
                <video
                    src={videoFileLink?.link}
                    autoPlay
                    controls
                    draggable="false"
                    className="size-11/12 md:size-8/12 rounded-lg"
                ></video>
            </div>
            <Link href="/gallery">
                <Button variant="default" size="lg" className="cursor-pointer rounded-full w-full font-semibold px-30 mt-3">
                    Back to Gallery
                </Button>
            </Link>
        </motion.div>
    )
}