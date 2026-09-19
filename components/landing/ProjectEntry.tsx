import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

type ProjectEntryProps = {
  tag: string;
  title: string;
  description: string;
  alt: string;
  href: string;
  reverse?: boolean;
};

export default function ProjectEntry({
  tag,
  title,
  description,
  alt,
  href,
  reverse = false,
}: ProjectEntryProps) {
  return (
    <motion.div
      className="grid grid-cols-1 items-center gap-8 border-b border-border py-12 first:pt-0 md:grid-cols-2 md:gap-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{
        duration: 2,
      }}
    >
      <div
        className={`relative aspect-16/10.5 overflow-hidden border border-border ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <iframe
          src={href}
          title={alt}
          className="size-full grow border-0 pointer-events-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-forms" // Essential for security
        />
      </div>
      <div>
        <span className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-[0.7rem] text-primary">
          {tag}
        </span>
        <h3 className="mb-3 text-2xl font-medium">{title}</h3>
        <p className="mb-5 max-w-md">{description}</p>
        <Link
          href={href}
          target="_blank"
          className="w-fit flex items-center gap-2 border-b border-border pb-0.5 text-sm font-medium transition-colors hover:border-accent hover:text-primary"
        >
          <span>View project</span>
          <ExternalLink className="size-3" />
        </Link>
      </div>
    </motion.div>
  );
}
