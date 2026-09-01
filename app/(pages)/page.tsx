"use client";

import { motion } from "motion/react";
import { Hero } from "./_components/Hero";
import { ProjectsSet1, ProjectsSet2 } from "./_components/Projects";
import Accolades from "./_components/Accolades";
import About from "./_components/About";
import Education from "./_components/Education";
import Quote from "./_components/Quote";

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

      <About />

      <Education />

      <ProjectsSet1 />

      <Quote />

      <ProjectsSet2 />

      <Accolades />
    </motion.main>
  );
};

export default Home;
