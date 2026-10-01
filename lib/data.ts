// MEDIA FILES
export const media = {
  gradPictures: [
    {
      id: 0,
      title: "Graduation Picture 1",
      image: "/pictures/grad-pic-1.jpg",
    },
    {
      id: 1,
      title: "Graduation Picture 2",
      image: "/pictures/grad-pic-2.jpg",
    },
    {
      id: 2,
      title: "Graduation Picture 3",
      image: "/pictures/grad-pic-3.jpg",
    },
    {
      id: 3,
      title: "Graduation Picture 4",
      image: "/pictures/grad-pic-4.jpg",
    },
  ],
  pictures: [
    {
      id: 0,
      title: "Me",
      image: "/pictures/no-bg-picture.png",
    },
    {
      id: 1,
      title: "Quote",
      image: "/pictures/quote-picture.jpeg",
    },
    {
      id: 2,
      title: "Voluntary Service",
      image: "/pictures/eac-cam-picture.png",
    },
    {
      id: 3,
      title: "Awards",
      image: "/pictures/awards.jpg",
    },
  ],
  worksPictures: [
    {
      id: 0,
      title: "WardPass Hero Image",
      image: "/works/wardpass-hero.png",
    },
    {
      id: 1,
      title: "WardPass Security Image",
      image: "/works/wardpass-security.png",
    },
    {
      id: 2,
      title: "Reckon Hero Image",
      image: "/works/reckon-hero.png",
    },
    {
      id: 3,
      title: "Reckon About Image",
      image: "/works/reckon-about.png",
    },
    {
      id: 4,
      title: "Portfolio Hero Image",
      image: "/works/portfolio-hero.png",
    },
    {
      id: 5,
      title: "WardPass Code Snapshot 1",
      image: "/works/wardpass-code1.png",
    },
    {
      id: 6,
      title: "Reckon Code Snapshot 1",
      image: "/works/reckon-code1.png",
    },
    {
      id: 7,
      title: "Portfolio Code Snapshot 1",
      image: "/works/portfolio-code1.png",
    },
  ],
  projects: [
    {
      tag: "Live",
      title: "WardPass",
      description:
        "A secure password management system built for everyone, not just security professionals — straightforward enough for anyone to keep their credentials safe.",
      alt: "WardPass app screenshot",
      href: "https://wardpass.netlify.app/",
    },
    {
      tag: "Live",
      title: "Reckon",
      description:
        "An all-in-one calculator with financial functions built in, so everyday money math doesn't need five different apps.",
      alt: "Reckon app screenshot",
      href: "https://reckon-p.netlify.app/",
    },
    {
      tag: "Live",
      title: "Portfolio",
      description:
        "This site — designed and built from scratch as a place for people to learn about me and see what I've made.",
      alt: "Portfolio site screenshot",
      href: "https://zamarwint.xyz/",
    },
  ],
  inProgessProjects: [
    "Note-taking software for planners, journalists and students with tools to increase focus, reduce distractions and minimize procrastination.",
    "Media platform for content creators, users and businesses only in the Caribbean. This platform aims to connect Caribbean people.",
    "Micro-learning platform to build entrepreneurial skills, taught through lessons from founders who've done it.",
  ],
  videos: [
    {
      title: "Math Revision Outreach",
      description:
        "This is a video of my math revision outreach activity. I helped to prepare Grade 4 students for their PEP Math examination. This experience taught me the importance of proper communication, and enhanced my teaching skills. I thank God for this experience and for the opportunity to serve my community.",
      video: `${process.env.NEXT_PUBLIC_STORE_ID}/math-revision-outreach.mp4`,
      videoPage: "/videos/math-revision-outreach",
      videoAspectRatio: "9/16",
    },
    {
      title: "WardPass Introduction",
      description:
        "In this video I introduced my password manager application, WardPass. I shared a brief walk through of the app and what it does. I plan to continue updating this app as time goes on, and create more videos to showcase every improvement. I believe this app can make a big difference in the lives of many people.",
      video: `${process.env.NEXT_PUBLIC_STORE_ID}/wardpass-intro.mp4`,
      videoPage: "/videos/wardpass-intro",
      videoAspectRatio: "16/9",
    },
  ],
  documents: [
    {
      id: 0,
      title: "WardPass Main Plan",
      description: "Main plan for the WardPass application.",
      src: "/docs/wardpass-main-plan.pdf",
    },
    {
      id: 1,
      title: "WardPass Design Plan",
      description: "Design system plan for WardPass.",
      src: "/docs/wardpass-design-plan.pdf",
    },
    {
      id: 2,
      title: "WardPass Design System Guide",
      description: "WardPass design system guide for new developers.",
      src: "/docs/wardpass-design-system-guide.pdf",
    },
    {
      id: 3,
      title: "Portfolio Main Plan",
      description: "Main plan for this portfolio website.",
      src: "/docs/portfolio-main-plan.pdf",
    },
    {
      id: 4,
      title: "Reckon Main Plan",
      description: "Main plan for the Reckon application.",
      src: "/docs/reckon-main-plan.pdf",
    },
  ],
};

// TYPE SAFETY FOR GALLERY CONTENT (IMAGES AND VIDEOS)
export enum GalleryContentType {
  IMAGE = "Image",
  IMAGECAROUSEL = "Image Carousel",
  VIDEO = "Video",
  DOCUMENT = "Document",
}

export type GalleryImageType = {
  id: number;
  type: GalleryContentType.IMAGE | GalleryContentType.IMAGECAROUSEL;
  title: string;
  description?: string;
  src: string;
};

export type GalleryVideoType = {
  id: number;
  type: GalleryContentType.VIDEO;
  title: string;
  description?: string;
  src: string;
  imgPrwSrcForVideo: string;
  videoPage: string;
  videoAspectRatio: string;
};

export type GalleryDocumentType = {
  id: number;
  type: GalleryContentType.DOCUMENT;
  title: string;
  description: string;
  src: string;
};

// GALLERY PAGE DATA
export const galleryImages: GalleryImageType[] = [
  {
    id: 0,
    type: GalleryContentType.IMAGE,
    title: media.pictures[0].title,
    src: media.pictures[0].image,
  },
  {
    id: 1,
    type: GalleryContentType.IMAGE,
    title: media.pictures[1].title,
    src: media.pictures[1].image,
  },
  {
    id: 2,
    type: GalleryContentType.IMAGE,
    title: media.pictures[2].title,
    src: media.pictures[2].image,
  },
  {
    id: 3,
    type: GalleryContentType.IMAGE,
    title: media.pictures[3].title,
    src: media.pictures[3].image,
  },
  {
    id: 4,
    type: GalleryContentType.IMAGE,
    title: media.gradPictures[0].title,
    src: media.gradPictures[0].image,
  },
  {
    id: 5,
    type: GalleryContentType.IMAGE,
    title: media.gradPictures[1].title,
    src: media.gradPictures[1].image,
  },
  {
    id: 6,
    type: GalleryContentType.IMAGE,
    title: media.gradPictures[2].title,
    src: media.gradPictures[2].image,
  },
  {
    id: 7,
    type: GalleryContentType.IMAGE,
    title: media.gradPictures[3].title,
    src: media.gradPictures[3].image,
  },
  {
    id: 8,
    type: GalleryContentType.IMAGE,
    title: media.worksPictures[0].title,
    src: media.worksPictures[0].image,
  },
  {
    id: 9,
    type: GalleryContentType.IMAGE,
    title: media.worksPictures[1].title,
    src: media.worksPictures[1].image,
  },
  {
    id: 10,
    type: GalleryContentType.IMAGE,
    title: media.worksPictures[2].title,
    src: media.worksPictures[2].image,
  },
  {
    id: 11,
    type: GalleryContentType.IMAGE,
    title: media.worksPictures[3].title,
    src: media.worksPictures[3].image,
  },
  {
    id: 12,
    type: GalleryContentType.IMAGE,
    title: media.worksPictures[4].title,
    src: media.worksPictures[4].image,
  },
  {
    id: 13,
    type: GalleryContentType.IMAGE,
    title: media.worksPictures[5].title,
    src: media.worksPictures[5].image,
  },
  {
    id: 14,
    type: GalleryContentType.IMAGE,
    title: media.worksPictures[6].title,
    src: media.worksPictures[6].image,
  },
  {
    id: 15,
    type: GalleryContentType.IMAGE,
    title: media.worksPictures[7].title,
    src: media.worksPictures[7].image,
  },
];

export const galleryVideos: GalleryVideoType[] = [
  {
    id: 0,
    type: GalleryContentType.VIDEO,
    title: media.videos[0].title,
    description: media.videos[0].description,
    src: media.videos[0].video,
    imgPrwSrcForVideo: "https://picsum.photos/700/700",
    videoPage: media.videos[0].videoPage,
    videoAspectRatio: media.videos[0].videoAspectRatio,
  },
  {
    id: 1,
    type: GalleryContentType.VIDEO,
    title: media.videos[1].title,
    description: media.videos[1].description,
    src: media.videos[1].video,
    imgPrwSrcForVideo: "https://picsum.photos/700/701",
    videoPage: media.videos[1].videoPage,
    videoAspectRatio: media.videos[1].videoAspectRatio,
  },
];

export const galleryDocuments: GalleryDocumentType[] = [
  {
    id: 0,
    type: GalleryContentType.DOCUMENT,
    title: media.documents[0].title,
    description: media.documents[0].description,
    src: media.documents[0].src,
  },
  {
    id: 1,
    type: GalleryContentType.DOCUMENT,
    title: media.documents[1].title,
    description: media.documents[1].description,
    src: media.documents[1].src,
  },
  {
    id: 2,
    type: GalleryContentType.DOCUMENT,
    title: media.documents[2].title,
    description: media.documents[2].description,
    src: media.documents[2].src,
  },
  {
    id: 3,
    type: GalleryContentType.DOCUMENT,
    title: media.documents[3].title,
    description: media.documents[3].description,
    src: media.documents[3].src,
  },
  {
    id: 4,
    type: GalleryContentType.DOCUMENT,
    title: media.documents[4].title,
    description: media.documents[4].description,
    src: media.documents[4].src,
  },
];
