import { media } from "@/lib/data";
import { motion } from "motion/react";
import Image from "next/image";

export default function QuoteBreak() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{
        duration: 2,
      }}
      className="relative mt-28 flex min-h-142.5 items-center overflow-hidden border-y border-border font-editorial-new"
    >
      <Image
        src={media.pictures[1].image}
        alt={media.pictures[1].title}
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover brightness-[0.35]"
      />
      <div className="relative z-10 mx-auto w-full max-w-295 px-[4vw] py-16">
        <p className="max-w-136 italic text-white text-[clamp(1.5rem,3.2vw,2.3rem)] font-medium leading-snug">
          Hard work and passion will make anyone succeed.
        </p>
        <p className="mt-5 text-sm text-white">— Zamar Wint</p>
      </div>
    </motion.div>
  );
}
