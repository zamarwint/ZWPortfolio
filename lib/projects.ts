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
      "WardPass is a password management system designed to make credential safety feel approachable in everyday use. It brings a security-minded product idea into a clear, practical experience for people who are not security specialists.",
      "The project is documented through an application plan, design plan, and design system guide. Product imagery and a code snapshot show parts of the interface and its development process.",
    ],
    skills: ["Security", "Product engineering"],
    tools: [],
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
        title: "WardPass Design Plan",
        description: "Design system plan for WardPass.",
        src: "/docs/wardpass-design-plan.pdf",
      },
      {
        title: "WardPass Design System Guide",
        description: "A guide to the WardPass design system for developers.",
        src: "/docs/wardpass-design-system-guide.pdf",
      },
    ],
    externalUrl: "https://wardpass.netlify.app/",
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
    skills: ["Fintech", "Web application"],
    tools: [],
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
    category: "AI · Telegram bot",
    status: "Live",
    summary:
      "A Telegram bot that acts as a personal assistant, sending messages on my behalf when I’m unreachable.",
    overview: [
      "Tele-Agent is a personal assistant built around Telegram. It can send messages on my behalf when I’m unavailable, helping keep communication moving.",
      "The project gallery includes examples of the bot in action and a code snapshot from its development.",
    ],
    skills: ["AI", "Telegram bot"],
    tools: [],
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
    documents: [],
    externalUrl: "https://zai-y33j.onrender.com/",
    featured: true,
  },
  {
    id: "focus-notes",
    title: "Focus-first Note-taking Tool",
    category: "Product concept · In progress",
    status: "In progress",
    summary:
      "Note-taking software for planners, journalists, and students, with tools to increase focus, reduce distractions, and minimize procrastination.",
    overview: [
      "This in-progress concept explores a focused note-taking experience for planners, journalists, and students. Its goal is to help people stay with their work by reducing distractions and supporting better focus.",
    ],
    skills: [],
    tools: [],
    images: [],
    videos: [],
    documents: [],
    featured: false,
  },
  {
    id: "entrepreneur-microlearning",
    title: "Micro-learning for Entrepreneurs",
    category: "Learning platform · In progress",
    status: "In progress",
    summary:
      "A micro-learning platform for building entrepreneurial skills through lessons from founders who have done it.",
    overview: [
      "This in-progress learning platform is designed to help people build entrepreneurial skills through short lessons from founders with first-hand experience.",
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
