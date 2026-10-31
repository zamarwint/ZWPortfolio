"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/lib/projects";

const rise = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: "easeOut" as const },
};

export default function Work() {
  return (
    <section
      id="work"
      className="mx-auto max-w-[1440px] scroll-mt-10 px-5 py-24 sm:px-8 md:px-14 md:py-32"
    >
      <motion.div
        {...rise}
        className="mb-12 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end"
      >
        <div>
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            01 / Selected work
          </p>
          <h2 className="font-editorial-new text-5xl leading-none tracking-tight sm:text-6xl">
            Ideas into <span className="italic">impact.</span>
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-muted-foreground">
          A few things I&apos;ve designed, built, and learned from along the
          way.
        </p>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.title}
            {...rise}
            transition={{ ...rise.transition, delay: index * 0.08 }}
            className={`project-card group overflow-hidden rounded-2xl border border-primary/10 bg-card ${index === 0 ? "lg:col-span-2" : ""}`}
          >
            <Link
              href={`/projects/${project.id}`}
              className={`grid h-full ${index === 0 ? "md:grid-cols-[1.15fr_0.85fr]" : "grid-rows-[auto_1fr]"}`}
            >
              <div
                className={`relative overflow-hidden bg-secondary/35 ${index === 0 ? "aspect-[1.28] md:aspect-auto md:min-h-[390px]" : "aspect-[1.48]"}`}
              >
                <Image
                  src={project.cover!.src}
                  alt={project.cover!.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(min-width: 768px) 58vw, 100vw"
                      : "(min-width: 1024px) 42vw, 100vw"
                  }
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full border border-white/35 bg-background/85 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-primary backdrop-blur">
                  {project.category}
                </span>
              </div>
              <div
                className={`flex flex-col justify-between p-6 sm:p-8 ${index === 0 ? "md:p-10" : "min-h-[220px]"}`}
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground">
                      PROJECT {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full bg-primary/7 px-3 py-1 text-[10px] text-primary">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="font-editorial-new text-3xl tracking-tight sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                    {project.summary}
                  </p>
                </div>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Explore project{" "}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      <div className="mt-7 flex flex-col gap-4 border-t border-primary/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-xs leading-5 text-muted-foreground">
          Also in progress: a focused note-taking tool and a micro-learning
          platform for aspiring entrepreneurs.
        </p>
        <Link
          href="/projects"
          className="inline-flex shrink-0 items-center gap-2 text-xs font-medium text-primary hover:underline"
        >
          View all projects <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </section>
  );
}
