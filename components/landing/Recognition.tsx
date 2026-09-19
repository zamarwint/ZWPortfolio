import { motion } from "motion/react";

const ENTRIES = [
  {
    id: 1,
    name: "University of the Commonwealth Caribbean",
    note: "Current — STEM degree",
  },
  {
    id: 2,
    name: "University of the Commonwealth Caribbean",
    note: "Information Technology Associate",
  },
  { id: 3, name: "Kingston College", note: "Secondary education" },
];

export default function Recognition() {
  return (
    <motion.section
      id="recognition"
      className="max-w-full px-[4vw] pt-24 font-funnel-display"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{
        duration: 2,
      }}
    >
      <p className="mb-4 flex items-center gap-2 text-xs">
        <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
        Recognition
      </p>
      <h2 className="mb-8 text-[clamp(1.6rem,3vw,2.1rem)] font-medium leading-tight font-editorial-new italic">
        Where I&apos;ve studied.
      </h2>
      <div className="border-t border-border">
        {ENTRIES.map((e) => (
          <div
            key={e.id}
            className="flex items-baseline justify-between gap-4 border-b border-border py-6"
          >
            <span className="font-medium">{e.name}</span>
            <small className="whitespace-nowrap text-xs">{e.note}</small>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
