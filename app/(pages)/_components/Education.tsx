import { motion } from "motion/react";

export default function Education() {
  return (
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
              of software engineering, from the ground up. From writing my first
              line of code in Python back in 2021 to building production
              projects in React in 2026, my dedication to learning software is
              evident in my accomplishments.
            </p>
            <p>
              I have done exceptionally well throughout my school years and now
              I am in university pursuing a STEM degree. I am a visionary, a
              problem solver, an innovator, an entrepreneur, and a leader. I
              innovate to elevate the lives of others, because I believe that
              technology should be used to improve lives.
            </p>
            <p>
              I have volunteered as a camera operator, and a vision mixer and I
              have worked as a Data Entry clerk. When I was volunteering as a
              vision mixer, I also assisted in live streaming and setting up
              stream schedules. Lastly, I have helped out children who were in
              primary school to pass their Math PEP exams.
            </p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="700" height="50">
            <path
              d="M0 10h700"
              className="hidden lg:block stroke-1 stroke-foreground"
            />
          </svg>
        </div>
      </div>
    </motion.section>
  );
}
