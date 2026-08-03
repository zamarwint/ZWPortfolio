"use client";

import { motion } from "motion/react";
import { media } from "@/lib/data";
import Image from 'next/image';
import { Hero } from './_components/Hero';
import { ProjectsSet1, ProjectsSet2 } from './_components/Projects';
import Accolades from "./_components/Accolades";

const Home = () => {
  // // Flip from 0 to 360 degrees as user scrolls from top to bottom
  // const { scrollYProgress } = useScroll();
  // const rotate = useTransform(scrollYProgress, [0, 1], [0, 400]);
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <motion.main
      id="home"
      className="w-[90%] lg:w-[80%] bg-background flex flex-col items-center justify-center gap-150 pb-150 border-x border-foreground/10"
    >
      <Hero />

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
          <div className='w-fit mx-10 lg:mx-0'>
            <Image
              src={media.pictures[1].image}
              alt={media.pictures[1].title}
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
            <div className='text-2xl flex flex-col items-start justify-start gap-10 text-wrap max-w-xl'>
              <p>
                Zamar Wint is known as a reliable engineer in his field, someone you
                can depend on to get tasks done no matter the difficulty.
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
                something, a design, or a good piece of software, I say to myself, I
                want to know how to build that too. Every piece of software built
                can be rebuilt and refined, regardless of complexity.
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

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
        }}
        className="size-full flex flex-col items-center justify-around"
      >
        <div className="w-[90%] flex flex-col items-center justify-center">
          <div className="w-full lg:w-fit flex flex-col items-center justify-center lg:items-start lg:justify-start gap-15">
            <div className="text-center lg:text-left">
              <h1 className="text-6xl lg:text-8xl font-semibold">
                Educational Background
              </h1>
            </div>
            <div className="max-w-6xl flex flex-col text-2xl text-center gap-10 lg:items-start lg:justify-start lg:text-left">
              <p>
                My educational journey has equipped me with a deep understanding
                of software engineering, from the ground up. From writing my
                first line of code in Python back in 2021 to building production
                projects in React in 2026, my dedication to learning software is
                evident in my accomplishments.
              </p>
              <p>
                I have done exceptionally well throughout my school years and now I am in university pursuing a STEM degree.
                I am a visionary, a problem solver, an innovator, an entrepreneur, and a leader.
                I innovate to elevate the lives of others, because I believe that technology should be used to improve lives.
              </p>
              <p>
                I have volunteered as a camera operator, and a vision mixer and I have worked as a Data Entry clerk.
                When I was volunteering as a vision mixer, I also assisted in live streaming and setting up stream schedules.
                Lastly, I have helped out children who were in primary school to pass their Math PEP exams.
              </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="700" height="50"><path d="M0 10h700" className="hidden lg:block stroke-1 stroke-foreground" /></svg>
          </div>
        </div>
      </motion.section>

      <ProjectsSet1 />

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
            src={media.pictures[2].image}
            alt={media.pictures[2].title}
            className="w-auto h-auto object-cover aspect-auto rounded-full lg:mx-auto"
            width={400}
            height={400}
            loading="eager"
          />
        </div>
      </motion.section>

      <ProjectsSet2 />

      <Accolades />
    </motion.main>
  );
};

export default Home;
