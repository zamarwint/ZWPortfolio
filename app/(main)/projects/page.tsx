import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | Zamar Wint",
  description:
    "Explore projects by Zamar Wint, from security-minded products to learning and productivity concepts.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] px-5 pb-20 pt-14 font-funnel-display sm:px-8 md:px-14 md:pt-20">
      <PageIntro
        eyebrow="Selected and in progress"
        title="Projects."
        description="A growing collection of products, experiments, and ideas shaped by curiosity and care."
        index="01"
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            number={String(index + 1).padStart(2, "0")}
          />
        ))}
      </div>
    </main>
  );
}
