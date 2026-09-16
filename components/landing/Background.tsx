import { motion } from "motion/react";

const MILESTONES = [
  {
    year: "2021",
    text: (
      <>
        <strong className="font-medium">Wrote my first lines of code</strong>,
        in Python. What started as curiosity about how software actually worked
        turned into a habit of building something new every chance I got.
      </>
    ),
  },
  {
    year: "2026",
    text: (
      <>
        <strong className="font-medium">
          Building production applications in React
        </strong>{" "}
        while completing a STEM degree at the University of the Commonwealth
        Caribbean — shipping real tools like WardPass and Reckon alongside
        coursework.
      </>
    ),
  },
];

export default function Background() {
  return (
    <motion.section
      id="background"
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
        Background
      </p>
      <h2 className="mb-8 text-[clamp(1.6rem,3vw,2.1rem)] font-medium leading-tight font-editorial-new italic">
        From first script to shipped product.
      </h2>
      <div className="border-t border-border">
        {MILESTONES.map((m) => (
          <div
            key={m.year}
            className="grid grid-cols-1 gap-3 border-b border-border py-7 md:grid-cols-[7rem_1fr] md:gap-8"
          >
            <span className="text-sm text-primary">{m.year}</span>
            <p className="max-w-xl">{m.text}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
