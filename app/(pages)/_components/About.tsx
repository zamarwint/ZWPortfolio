import { motion } from "motion/react";
import { media } from "@/lib/data";
import Image from "next/image";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 2,
      }}
      className="size-full flex flex-col items-center justify-center"
    >
      <div className="w-[90%] flex flex-col lg:flex-row justify-around items-center gap-20">
        <div className="w-fit mx-10 lg:mx-0">
          <Image
            src={media.pictures[0].image}
            alt={media.pictures[0].title}
            className="w-auto h-auto object-cover aspect-auto rounded-full"
            width={400}
            height={400}
            loading="eager"
          />
        </div>
        <div className="w-fit flex flex-col justify-center items-center lg:items-start lg:justify-start lg:text-left gap-15 text-center">
          <div className="w-full">
            <h1 className="text-6xl lg:text-8xl font-semibold">About Me</h1>
          </div>
          <div className="text-2xl flex flex-col items-start justify-start gap-10 text-wrap max-w-xl">
            <p>
              Zamar Wint is known as a reliable engineer in his field, someone
              you can depend on to get tasks done no matter the difficulty.
            </p>
            <p>
              Growing up in the beautiful island of Jamaica in the Caribbean, I
              developed a passion for computers at a young age. As a result, I
              expanded my knowledge ever since learning to use computers and the
              technology behind them, as I had to use devices every day to do my
              school and college assignments.
            </p>
            <p>
              I treat every project as a learning experience. When I see
              something, a design, or a good piece of software, I say to myself,
              I want to know how to build that too. Every piece of software
              built can be rebuilt and refined, regardless of complexity.
            </p>
          </div>
          <svg height="50" width="250" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="0"
              y1="10"
              x2="250"
              y2="10"
              className="stroke-1 stroke-foreground"
            />
          </svg>
        </div>
      </div>
    </motion.section>
  );
}
