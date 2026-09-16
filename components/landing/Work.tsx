import { motion } from "motion/react";
import ProjectEntry from "./ProjectEntry";
import { media } from "@/lib/data";

export default function Work() {
  return (
    <motion.section
      id="work"
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
        Work
      </p>
      <h2 className="mb-8 text-[clamp(1.6rem,3vw,2.1rem)] font-medium leading-tight font-editorial-new italic">
        Projects I&apos;ve shipped.
      </h2>

      <div>
        {media.projects.map((p, i) => (
          <ProjectEntry key={p.title} {...p} reverse={i % 2 === 1} />
        ))}
      </div>

      <div>
        {media.inProgessProjects.map((line) => (
          <div
            key={line}
            className="grid grid-cols-1 items-baseline gap-2 border-b border-border py-6 md:grid-cols-[1fr_auto] md:gap-6"
          >
            <p className="max-w-136">{line}</p>
            <span className="whitespace-nowrap text-[0.7rem]">
              In development
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
