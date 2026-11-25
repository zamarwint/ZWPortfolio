export type ProjectMediaImage = {
  src: string;
  title: string;
  alt: string;
  caption: string;
};

export type ProjectVideo = {
  slug: string;
  title: string;
  description: string;
  aspectRatio: "16/9" | "9/16";
};

export type ProjectDocument = {
  title: string;
  description: string;
  src: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  status: "Live" | "In progress";
  summary: string;
  overview: string[];
  skills: string[];
  tools: string[];
  cover?: ProjectMediaImage;
  images: ProjectMediaImage[];
  videos: ProjectVideo[];
  documents: ProjectDocument[];
  externalUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "wardpass",
    title: "WardPass",
    category: "Security · Product engineering",
    status: "Live",
    summary:
      "A secure password manager built for everyone, not just security professionals — straightforward enough for anyone to keep their credentials safe.",
    overview: [
      "WardPass is a credential management system designed for those who need a safe haven to secure passwords, logins, identities and other critical information. It brings a security-minded product idea into a clear, practical experience for people who are not security specialists.",
      "The project is documented through an application plan, design plan, and design system guide. Product imagery and a code snapshot show parts of the interface and its development process.",
    ],
    skills: ["Security", "Product engineering", "Software Project Management", "Problem solving", "Software Development Life Cycle (SDLC)"],
    tools: ["Next.js", "Tailwind", "Shadcn UI", "Framer Motion", "Neon Database Services", "React Hook Form"],
    cover: {
      src: "/works/wardpass-hero.png",
      title: "WardPass product interface",
      alt: "WardPass password manager interface",
      caption: "A look at the WardPass product experience.",
    },
    images: [
      {
        src: "/works/wardpass-hero.png",
        title: "WardPass interface",
        alt: "WardPass product interface screenshot",
        caption: "The main WardPass product experience.",
      },
      {
        src: "/works/wardpass-security.png",
        title: "Security-focused design",
        alt: "WardPass security-focused product screen",
        caption: "A project screen focused on security and trust.",
      },
      {
        src: "/works/wardpass-code1.png",
        title: "Development snapshot",
        alt: "A code snapshot from the WardPass project",
        caption: "A glimpse into the implementation work.",
      },
    ],
    videos: [
      {
        slug: "wardpass-intro",
        title: "WardPass Introduction",
        description:
          "A walkthrough introducing WardPass, what it does, and the product idea behind it.",
        aspectRatio: "16/9",
      },
    ],
    documents: [
      {
        title: "WardPass Main Plan",
        description: "Main plan for the WardPass application.",
        src: "/docs/wardpass-main-plan.pdf",
      },
      {
        title: "WardPass Design System",
        description: "Design system documentation.",
        src: "/docs/wardpass-design-system.pdf",
      },
      {
        title: "Prisma-to-Drizzle Implementation",
        description: "Prisma-to-drizzle implementation documentation.",
        src: "/docs/wardpass-performance-and-drizzle-implementation.pdf",
      },
    ],
    externalUrl: "https://ward-pass.vercel.app/",
    featured: true,
  },
  {
    id: "reckon",
    title: "Reckon",
    category: "Fintech · Web application",
    status: "Live",
    summary:
      "An all-in-one calculator with financial functions built in, so everyday money math doesn’t need five different apps.",
    overview: [
      "Reckon brings everyday calculations and financial functions together in one web application. The idea is to make routine money math easier by keeping useful calculations in one place.",
      "The project includes a main plan, product imagery, an about screen, and a code snapshot that document the concept and its implementation.",
    ],
    skills: ["Fintech", "Web application", "Software Project Management", "Problem solving", "Software Development Life Cycle (SDLC)"],
    tools: ["Node.js", "TypeScript", "Animate on Scroll", "React Router", "Financial.js (investment functions library)"],
    cover: {
      src: "/works/reckon-hero.png",
      title: "Reckon application",
      alt: "Reckon calculator application interface",
      caption: "The Reckon calculator experience.",
    },
    images: [
      {
        src: "/works/reckon-hero.png",
        title: "Reckon interface",
        alt: "Reckon calculator product screenshot",
        caption: "A view of the Reckon application.",
      },
      {
        src: "/works/reckon-about.png",
        title: "About Reckon",
        alt: "Reckon about screen",
        caption: "The project’s about screen.",
      },
      {
        src: "/works/reckon-code1.png",
        title: "Development snapshot",
        alt: "A code snapshot from the Reckon project",
        caption: "A glimpse into the implementation work.",
      },
    ],
    videos: [],
    documents: [
      {
        title: "Reckon Main Plan",
        description: "Main plan for the Reckon application.",
        src: "/docs/reckon-main-plan.pdf",
      },
    ],
    externalUrl: "https://reckon-p.netlify.app/",
    featured: true,
  },
  {
    id: "tele-agent",
    title: "Tele-Agent",
    category: "AI Assistant · Telegram bot",
    status: "Live",
    summary:
      "A Telegram bot that acts as a personal assistant, sending messages on my behalf when I’m unreachable.",
    overview: [
      "Tele-Agent is a personal assistant built for Telegram. It can send messages on my behalf when I’m unavailable, helping keep communication moving.",
      "The project gallery includes examples of the bot in action and a code snapshot from its development.",
    ],
    skills: ["AI", "Telegram bot", "Software Documentation", "Software Project Management", "Software development", "AI Engineering"],
    tools: ["Node.js", "Typescript", "Node-Telegram-Bot-API", "Gemini API"],
    cover: {
      src: "/works/zai.png",
      title: "Tele-Agent in action",
      alt: "Tele-Agent assistant bot preview",
      caption: "The assistant bot in action.",
    },
    images: [
      {
        src: "/works/zai.png",
        title: "Tele-Agent preview",
        alt: "Tele-Agent application preview",
        caption: "An overview of the Tele-Agent experience.",
      },
      {
        src: "/works/teleagent-action1.png",
        title: "Assistant action",
        alt: "Tele-Agent sending a message",
        caption: "An example of the assistant carrying out an action.",
      },
      {
        src: "/works/teleagent-action2.png",
        title: "Assistant workflow",
        alt: "A second Tele-Agent action example",
        caption: "Another look at the bot’s messaging workflow.",
      },
      {
        src: "/works/teleagent-code1.png",
        title: "Development snapshot",
        alt: "A code snapshot from the Tele-Agent project",
        caption: "A glimpse into the implementation work.",
      },
    ],
    videos: [],
    documents: [
      {
        title: "Tele-Agent Main Plan",
        description: "Main plan for the Tele-Agent AI assistant.",
        src: "/docs/teleagent-main-plan.pdf",
      },
    ],
    externalUrl: "https://zai-y33j.onrender.com/",
    featured: true,
  },
  {
    id: "utilities-agent",
    title: "Utilities Agent",
    category: "Automated software account · In progress",
    status: "In progress",
    summary:
      "A telegram bot that provides various utility functions to assist users with their daily operations.",
    overview: [
      "This in-progress telegram robot is designed to assist telegram users with their day-to-day tasks and activities by providing services such as storage and reminders.",
    ],
    skills: [],
    tools: [],
    images: [],
    videos: [],
    documents: [],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectById(projectId: string) {
  return projects.find((project) => project.id === projectId);
}
