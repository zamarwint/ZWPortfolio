// MEDIA FILES
export const media = {
  accoladeImages: [
    {
      title: "Emmanuel Apostolic Church",
      badgeImage: "/vectors/accolade1.svg",
      image: "/images/eac-accolade.jpg",
      description: "Long Service Award.",
    },
    {
      title: "Kingston College",
      badgeImage: "/vectors/accolade2.svg",
      image: "/images/kc-accolade.jpg",
      description: "Diploma in General Studies.",
    },
    {
      title: "University of the Commonwealth Caribbean",
      badgeImage: "/vectors/accolade3.svg",
      image: "/images/ucc-accolade.jpg",
      description: "Highest Academic Award.",
    },
  ],
  gradPictures: [
    {
      id: 0,
      title: "Zamar Graduation Picture 1",
      type: "Image",
      image: "/pictures/grad-pic-1.jpg",
    },
    {
      id: 1,
      title: "Zamar Graduation Picture 2",
      type: "Image",
      image: "/pictures/grad-pic-2.jpg",
    },
    {
      id: 2,
      title: "Zamar Graduation Picture 3",
      type: "Image",
      image: "/pictures/grad-pic-3.jpg",
    },
    {
      id: 3,
      title: "Zamar Graduation Picture 4",
      type: "Image",
      image: "/pictures/grad-pic-4.jpg",
    },
  ],
  pictures: [
    {
      id: 0,
      title: "Zamar School Picture",
      type: "Image",
      image: "/pictures/school-picture.png",
    },
    {
      id: 1,
      title: "Zamar Quote Picture",
      type: "Image",
      image: "/pictures/quote-picture.jpeg",
    },
    {
      id: 2,
      title: "Voluntary Service at EAC Portmore",
      type: "Image",
      image: "/pictures/eac-cam-picture.png",
    },
    {
      id: 3,
      title: "Awards Picture 1",
      type: "Image",
      image: "/pictures/award-picture.jpg",
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
    "A productivity suite for writers, planners, journalists and students who need to focus.",
    "A Caribbean-only social platform for content creators, users and businesses.",
    "Real-time code mapping, analysis and optimization for developers and startup founders.",
    "A micro-learning platform to build entrepreneurial skills, taught through lessons from founders who've done it.",
  ],
  videos: [
    {
      title: "UCC Awards Video",
      description: "Video I made for the UCC Awards.",
      video: `${process.env.NEXT_PUBLIC_STORE_ID}/ucc-awards-vid.mp4`,
      videoPage: "/videos/ucc-awards-vid",
      videoAspectRatio: "16/9",
    },
    {
      title: "Math Revision Outreach Video",
      description: "Math revision outreach video.",
      video: `${process.env.NEXT_PUBLIC_STORE_ID}/math-revision-outreach.mp4`,
      videoPage: "/videos/math-revision-outreach",
      videoAspectRatio: "9/16",
    },
    {
      title: "WardPass Introduction Video",
      description:
        "I introduced my password manager application, WardPass, in this video.",
      video: `${process.env.NEXT_PUBLIC_STORE_ID}/wardpass-intro.mp4`,
      videoPage: "/videos/wardpass-intro",
      videoAspectRatio: "16/9",
    },
  ],
};

// TYPE SAFETY FOR GALLERY CONTENT (IMAGES AND VIDEOS)
export enum GalleryContentType {
  IMAGE = "Image",
  IMAGECAROUSEL = "Image Carousel",
  VIDEO = "Video",
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
    title: media.accoladeImages[0].title,
    description: media.accoladeImages[0].description,
    src: media.accoladeImages[0].badgeImage,
  },
  {
    id: 5,
    type: GalleryContentType.IMAGE,
    title: media.accoladeImages[1].title,
    description: media.accoladeImages[1].description,
    src: media.accoladeImages[1].badgeImage,
  },
  {
    id: 6,
    type: GalleryContentType.IMAGE,
    title: media.accoladeImages[2].title,
    description: media.accoladeImages[2].description,
    src: media.accoladeImages[2].badgeImage,
  },
  {
    id: 7,
    type: GalleryContentType.IMAGE,
    title: media.accoladeImages[0].title,
    src: media.accoladeImages[0].image,
  },
  {
    id: 8,
    type: GalleryContentType.IMAGE,
    title: media.accoladeImages[1].title,
    src: media.accoladeImages[1].image,
  },
  {
    id: 9,
    type: GalleryContentType.IMAGE,
    title: media.accoladeImages[2].title,
    src: media.accoladeImages[2].image,
  },
  {
    id: 10,
    type: GalleryContentType.IMAGE,
    title: media.gradPictures[0].title,
    src: media.gradPictures[0].image,
  },
  {
    id: 11,
    type: GalleryContentType.IMAGE,
    title: media.gradPictures[1].title,
    src: media.gradPictures[1].image,
  },
  {
    id: 12,
    type: GalleryContentType.IMAGE,
    title: media.gradPictures[2].title,
    src: media.gradPictures[2].image,
  },
  {
    id: 13,
    type: GalleryContentType.IMAGE,
    title: media.gradPictures[3].title,
    src: media.gradPictures[3].image,
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
  {
    id: 2,
    type: GalleryContentType.VIDEO,
    title: media.videos[2].title,
    description: media.videos[2].description,
    src: media.videos[2].video,
    imgPrwSrcForVideo: "https://picsum.photos/700/703",
    videoPage: media.videos[2].videoPage,
    videoAspectRatio: media.videos[2].videoAspectRatio,
  },
];
