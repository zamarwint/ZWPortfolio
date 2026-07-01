"use client";

import { CornerDownRight, Type } from 'lucide-react';
import { useScroll, useTransform, motion } from "motion/react";
import { accolades, education, workExperience, appDescriptions1, appDescriptions2, homePageImages, accoladeImages } from "@/lib/data";
import { Button } from '@/components/ui/button';
import TypewriterEffect from '../_components/typewriter';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

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
            Welcome. <br /> I am <span className='text-amber-900 dark:text-amber-200'><TypewriterEffect words={['Zamar Wint', 'a Computer Engineer', 'a Software Engineer', 'a AI Engineer', 'an IT Professional']} /></span>
          </div>
          <div className="text-2xl border border-black rounded-full px-10 py-4 text-center dark:border-white">
            Zamar Wint / Software Engineer
          </div>
          <div className="flex items-center gap-2 text-2xl">
            <CornerDownRight className="w-10 h-10" />
            <a
              href="../../Zamar-Wint-Resume1.zip"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="cursor-pointer relative inline-block no-underline after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Work with me today
            </a>
          </div>
        </div>
        <div>
          <img
            src={homePageImages[0].src}
            alt={homePageImages[0].alt}
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
            src={homePageImages[1].src}
            alt={homePageImages[1].alt}
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
            <div className="flex flex-row">
              <div className="text-2xl text-center md:text-left">
                My educational journey has equipped me with a deep understanding
                of software engineering, from the ground up. From writing my
                first line of code in Python back in 2021 to building production
                projects in React in 2026, my dedication to learning software is
                evident in my accomplishments.
              </div>
            </div>
            <div className="grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-5 cursor-pointer">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="rounded-xl border-2 border-neutral-200 shadow-2xl/20 shadow-neutral-600 bg-white transition-transform duration-100 hover:scale-105 hover:shadow-neutral-400 dark:shadow-neutral-800 dark:bg-neutral-900 dark:text-white dark:border-neutral-800"
                >
                  <div className="text-3xl p-5 w-full font-semibold">
                    {edu.certificate}
                  </div>
                  <div className="text-2xl p-5 w-full border-t-2 border-b-2 border-neutral-200 dark:border-neutral-800">
                    {edu.placeOfStudy}
                  </div>
                  <div className="text-1xl p-5 w-full font-hoves-light">
                    {edu.description}
                  </div>
                </div>
              ))}
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
        className="flex flex-col justify-center items-center m-10 md:m-40"
      >
        <div className="flex flex-col gap-5 items-center justify-center">
          <div className="text-6xl md:text-8xl text-left mb-15 font-semibold">
            Work Experience
          </div>
          {workExperience.map((work, index) => (
            <div
              key={index}
              className="cursor-pointer w-80vw sm:w-120 md:w-160 p-5 rounded-xl border-2 border-neutral-200 shadow-2xl/20 shadow-neutral-600 bg-white transition-transform duration-100 hover:scale-105 hover:shadow-neutral-400 dark:shadow-neutral-600 dark:bg-neutral-900 dark:text-white dark:border-neutral-800"
            >
              <div className="text-3xl w-full font-hoves-bold p-1">
                {work.company}
              </div>
              <div className="text-2xl w-full p-1">
                {work.title}
              </div>
              <div className="text-1xl w-full font-hoves-light p-1">
                {work.description}
              </div>
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
        className="flex flex-col justify-center items-center p-30 m-5 gap-20"
      >
        <div className="text-6xl md:text-8xl text-center md:text-left font-semibold">
          My Projects
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          {appDescriptions1.map((app, index) => (
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
            src={homePageImages[2].src}
            alt={homePageImages[2].alt}
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
        className="flex flex-col justify-around items-center p-30 m-5 gap-20"
      >
        <div className="text-6xl md:text-8xl text-center md:text-left font-semibold">
          More of my Work
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          {appDescriptions2.map((app, index) => (
            <div
              key={index}
              className="w-full h-full flex flex-col gap-10 items-center justify-center"
            >
              <div><img src={app.image} alt="App image" /></div>
              <div className="text-2xl text-center">
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
          {accolades.map((accolade, index) => (
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
