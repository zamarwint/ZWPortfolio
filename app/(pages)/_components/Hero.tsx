import { CornerDownRight } from "lucide-react";
import { motion } from "motion/react";
import { media } from "@/lib/data";
import TypewriterEffect from '../../_components/typewriter';
import { underlineDrawAmber } from '../../_components/UnderlineDraw';
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full flex flex-col lg:flex-row items-center justify-around pt-[20vh] gap-20 lg:gap-0"
        >
            <div className="flex flex-col items-center gap-10 lg:w-auto">
                <h1 className="text-6xl lg:text-8xl text-center min-w-sm lg:min-w-xl max-w-xl">
                    Welcome. <br /> I am <span className='text-amber-900 dark:text-amber-500'><TypewriterEffect words={['Zamar Wint', 'a Computer Engineer', 'a Software Engineer', 'a AI Engineer', 'an upcoming Data Scientist', 'a Problem Solver', 'an Entrepreneur', 'a Leader', 'a Researcher', 'a Communicator']} /></span>
                </h1>
                <h2 className="w-xs lg:w-fit text-xl lg:text-2xl border rounded-full px-10 py-4 text-center">
                    Zamar Wint / Computer Engineer
                </h2>
                <div>
                    <Link
                        href="../../Zamar-Wint-Resume1.zip"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className={cn(underlineDrawAmber(), "flex items-center gap-3 text-xl text-foreground hover:text-amber-900 dark:hover:text-amber-500")}
                    >
                        <CornerDownRight className="size-4" />
                        <span>Work with me today</span>
                    </Link>
                </div>
            </div>
            <div className="mx-10 lg:mx-0">
                <Image
                    src={media.pictures[0].image}
                    alt={media.pictures[0].title}
                    className="w-auto h-auto object-cover aspect-auto rounded-full"
                    width={400}
                    height={400}
                    loading="eager"
                />
            </div>
        </motion.section>
    )
}