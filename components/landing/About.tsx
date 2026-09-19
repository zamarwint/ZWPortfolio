import { motion } from "motion/react";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{
        duration: 2,
      }}
      className="max-w-full px-[4vw] pt-24 font-funnel-display"
    >
      <p className="mb-4 flex items-center gap-2 text-xs">
        <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
        About
      </p>
      <h2 className="mb-8 text-[clamp(1.6rem,3vw,2.1rem)] font-medium leading-tight font-editorial-new italic">
        Dependable. Reliable.
      </h2>
      <div className="max-w-160 space-y-5 font-funnel-display">
        <p>
          I grew up on the island of Jamaica, in the Caribbean, where I got
          hooked on computers early — using one every day for school until I
          wanted to understand how they worked, not just how to use them.
        </p>
        <p>
          I treat every project as a lesson. When I see a piece of software, or
          a design, that I admire, I take it apart to learn how it was built,
          then rebuild it my own way. Every piece of software can be rebuilt and
          refined, no matter how complex it looks from the outside.
        </p>
        <p>
          Outside of engineering, I&apos;ve worked as a camera operator and
          vision mixer for live broadcasts, helped set up livestream schedules,
          worked as a data entry clerk, and tutored primary school students
          through their Math PEP exams.
        </p>
      </div>
    </motion.section>
  );
}
