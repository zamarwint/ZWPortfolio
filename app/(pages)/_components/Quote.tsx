import { motion } from "motion/react";
import Image from "next/image";
import { media } from "@/lib/data";

export default function Quote() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 2,
      }}
      className="size-full flex flex-col lg:flex-row items-center justify-around"
    >
      <div className="w-fit flex flex-col lg:flex-row items-center justify-center gap-20 text-left">
        <h1 className="text-6xl lg:text-8xl text-center lg:text-left font-semibold w-xs lg:w-xl">
          Hard work and passion will make anyone succeed.
        </h1>
        <Image
          src={media.pictures[1].image}
          alt={media.pictures[1].title}
          className="w-auto h-auto object-cover aspect-auto rounded-full lg:mx-auto"
          width={400}
          height={400}
          loading="eager"
        />
      </div>
    </motion.section>
  );
}
