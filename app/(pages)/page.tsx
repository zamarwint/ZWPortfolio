"use client";

import { CornerDownRight, Type } from 'lucide-react';
import { useScroll, useTransform, motion } from "motion/react";
import { media, accoladeImages } from "@/lib/data";
import { Button } from '@/components/ui/button';
import TypewriterEffect from '../_components/typewriter';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { underlineDrawAmber } from '../_components/UnderlineDraw';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [currentAccolade, setCurrentAccolade] = useState<string>("");

  // Flip from 0 to 360 degrees as user scrolls from top to bottom
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <motion.main
      id="home"
      className="bg-background flex flex-col items-center justify-center gap-20 py-30 lg:py-10"
    >
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full flex flex-col md:flex-row items-center justify-center md:justify-around px-10 py-5"
      >
        <div className="flex flex-col items-center gap-10 md:w-2/4 lg:w-auto">
          <div className="text-6xl md:text-8xl text-center min-w-sm md:min-w-xl max-w-xl">
            Welcome. <br /> I am <span className='text-amber-900 dark:text-amber-200'><TypewriterEffect words={['Zamar Wint', 'a Computer Engineer', 'a Software Engineer', 'a AI Engineer', 'an upcoming Data Scientist', 'a Problem Solver', 'an Entrepreneur', 'a Leader', 'a Researcher', 'a Communicator']} /></span>
          </div>
          <div className="text-2xl border border-black rounded-full px-10 py-4 text-center dark:border-white">
            Zamar Wint / Computer Engineer
          </div>
          <div className="flex items-center gap-2 text-2xl">
            <CornerDownRight className="w-10 h-10" />
            <a
              href="../../Zamar-Wint-Resume1.zip"
              target="_blank"
              rel="noopener noreferrer"
              download
              className={`${underlineDrawAmber()}`}
            >
              Work with me today
            </a>
          </div>
        </div>
        <div>
          <img
            src={media.pictures[0].image}
            alt={media.pictures[0].alt}
            className="w-150 h-200 md:w-110 object-cover aspect-square rounded-full py-10 md:py-0"
          />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
        }}
        className="flex flex-col md:flex-row items-center justify-center md:justify-around gap-20 m-10 md:m-30"
      >
        <div>
          <img
            src={media.pictures[1].image}
            alt={media.pictures[1].alt}
            className="w-150 h-200 md:w-110 md:h-210 object-cover aspect-square rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start md:justify-start gap-10 w-full md:w-1/2 text-center md:text-left">
          <div className="text-6xl md:text-8xl font-semibold">About Me</div>
          <div className="text-2xl">
            Zamar Wint is known as a reliable engineer in his field, someone you
            can depend on to get tasks done no matter the difficulty.
          </div>
          <div className="text-2xl">
            Growing up in the beautiful island of Jamaica in the Caribbean, I
            developed a passion for computers at a young age. As a result, I
            expanded my knowledge ever since learning to use computers and the
            technology behind them, as I had to use devices every day to do my
            school and college assignments.
          </div>
          <div className="text-2xl">
            I treat every project as a learning experience. When I see
            something, a design, or a good piece of software, I say to myself, I
            want to know how to build that too. Every piece of software built
            can be rebuilt and refined, regardless of complexity.
          </div>
          <svg height="50" width="250" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="0"
              y1="10"
              x2="250"
              y2="10"
              className="stroke-1 stroke-white"
            />
          </svg>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
        }}
        className="flex flex-col justify-center items-center m-10 md:m-40"
      >
        <div className="flex flex-col gap-50">
          <div className="flex flex-col gap-10">
            <div className="text-6xl md:text-8xl text-center md:text-left font-semibold">
              Educational Background
            </div>
            <div className="flex flex-col text-2xl text-center md:text-left gap-10">
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
                I innovate to elevate, the lives of others, as I believe that technology should be used to improve the lives of others.
              </p>
              <p>
                I have volunteered as a camera operator, and a vision mixer and I have worked as a Data Entry clerk.
                When I was volunteering as a vision mixer, I also assisted in broadcasting and live streaming and setting up stream schedules.
              </p>
            </div>
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
        id="projects-1"
        className="flex flex-col justify-center items-center p-30 m-5 gap-20"
      >
        <div className="text-6xl md:text-8xl text-center md:text-left font-semibold">
          My Projects
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          {media.projects.map((app, index) => (
            <div
              key={index}
              className="w-full h-full flex flex-col gap-10 items-center justify-center"
            >
              <div><img src={app.image} alt="App image" /></div>
              <div className="text-2xl text-center">
                {app.description}
              </div>
              <a
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-full px-10 py-5 text-xl" variant="secondary" size="lg"><CornerDownRight className="w-10 h-10" /> View Project</Button>
              </a>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
        }}
        className="flex flex-col md:flex-row justify-center items-center m-5 md:m-20 gap-20"
      >
        <div className="flex flex-col gap-10 w-full md:w-1/2 text-left">
          <div className="text-6xl md:text-8xl text-center md:text-left p-2 font-semibold">
            Hard work and passion will make anyone succeed.
          </div>
        </div>
        <div>
          <img
            src={media.pictures[2].image}
            alt={media.pictures[2].alt}
            className="w-150 h-200 md:w-110 object-cover aspect-square rounded-full"
          />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
        }}
        id="projects-2"
        className="flex flex-col justify-around items-center p-30 m-5 gap-20"
      >
        <div className="text-6xl w-sm md:w-fit md:text-8xl text-center md:text-left font-semibold">
          More of my Work
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          {media.comingSoon.map((app, index) => (
            <div
              key={index}
              className="w-full h-full flex flex-col gap-10 items-center justify-center"
            >
              <div><img src={app.image} alt="App image" className='w-50 h-50 md:w-fit md:h-fit' /></div>
              <div className="text-2xl text-center w-sm md:w-fit">
                {app.description}
              </div>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-full px-10 py-5 text-xl" variant="secondary" size="lg"><CornerDownRight className="w-10 h-10" /> Coming soon</Button>
              </a>
            </div>
          ))}
        </div>
        <div className="text-lg md:text-xl text-center w-sm md:w-xl">
          And so much more... in the works. I plan to make AI models and other tremendous solutions that will elevate and improve the lives of others.
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
        }}
        className="flex flex-col justify-center items-center p-30 m-5 gap-20 mb-50"
      >
        <div className="text-6xl md:text-8xl text-center md:text-left font-semibold">
          Accolades
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          {media.accolades.map((accolade, index) => (
            <div
              key={index}
              onClick={() => {
                setCurrentAccolade(accolade.description)
                setIsOpen(true)
              }}
              className="w-full h-full p-10 md:p-0 md:w-105 md:h-105 flex flex-col gap-10 items-center justify-center cursor-pointer rounded-4xl border-4 border-neutral-200 dark:border-neutral-800 shadow-2xl/20 shadow-neutral-600 bg-black text-white transition-transform duration-100 hover:scale-105 hover:shadow-neutral-400"
            >
              <div><img src={accolade.image} alt="Accolade image" /></div>
              <div className="text-2xl text-center w-75">
                {accolade.description}
              </div>
            </div>
          ))}
        </div>
      </motion.section>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="z-999">
          <DialogHeader>
            <DialogTitle>{currentAccolade}</DialogTitle>
          </DialogHeader>
          <div>
            {currentAccolade.includes("Emmanuel") && (
              <img src={accoladeImages.eacPortmore} draggable="false" alt={currentAccolade} className="rounded-lg pointer-events-none select-none" />
            )}
            {currentAccolade.includes("Kingston") && (
              <img src={accoladeImages.kingstonCollege} draggable="false" alt={currentAccolade} className="rounded-lg pointer-events-none select-none" />
            )}
            {currentAccolade.includes("University") && (
              <img src={accoladeImages.ucc} draggable="false" alt={currentAccolade} className="rounded-lg pointer-events-none select-none" />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </motion.main>
  );
};

export default Home;
