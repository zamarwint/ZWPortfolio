// MEDIA FILES
export const media = {
    accolades: [
        {
            title: "Emmanuel Apostolic Church",
            image: "/assets/accolade1.svg",
            description: "Long Service Award.",
        },
        {
            title: "Kingston College",
            image: "/assets/accolade2.svg",
            description: "Diploma in General Studies.",
        },
        {
            title: "University of the Commonwealth Caribbean",
            image: "/assets/accolade3.svg",
            description: "Highest Academic Award.",
        },
    ],
    gradPictures: [
        {
            id: 1,
            title: "Zamar Graduation Picture 1",
            type: "Image",
            image: "/assets/grad-picture.jpg"
        },
        {
            id: 2,
            title: "Zamar Graduation Picture 2",
            type: "Image",
            image: "/assets/grad-pic-2.jpg"
        },
        {
            id: 3,
            title: "Zamar Graduation Picture 3",
            type: "Image",
            image: "/assets/grad-pic-3.jpg"
        },
        {
            id: 4,
            title: "Zamar Graduation Picture 4",
            type: "Image",
            image: "/assets/grad-pic-4.jpg"
        },
        {
            id: 5,
            title: "Zamar Graduation Picture 5",
            type: "Image",
            image: "/assets/grad-pic-5.jpg"
        },
    ],
    pictures: [
        {
            id: 1,
            title: "Zamar School Picture",
            type: "Image",
            image: "/assets/school-picture-1.jpg",
        },
        {
            id: 2,
            title: "Zamar Quote Picture",
            type: "Image",
            image: "/assets/quote-picture.jpeg",
        },
        {
            id: 3,
            title: "Zamar School Picture 2",
            type: "Image",
            image: "/assets/school-picture-2.png"
        },
        {
            id: 4,
            title: "Voluntary Service at EAC Portmore",
            type: "Image",
            image: "/assets/eac-cam-picture.png"
        },
    ],
    projects: [
        {
            title: "WardPass",
            image: "/assets/wardpass-project-picture.png",
            description: "Secure password management system for everyone.",
            link: "https://wardpass.netlify.app/",
        },
        {
            title: "Reckon",
            image: "/assets/reckon-project-picture.png",
            description: "All-in-one calculator with financial functions for everyone.",
            link: "https://reckon-p.netlify.app/",
        },
        {
            title: "Portfolio",
            image: "/assets/portfolio-project-picture.png",
            description: "This wonderful portfolio website project for you to learn about me.",
            link: "/",
        },
    ],
    comingSoon: [
        {
            title: "Coming Soon",
            image: "/assets/coming-soon.png",
            description: "Productivity suite for writers, planners, journalists, students, etc. who need to focus.",
        },
        {
            title: "Coming Soon",
            image: "/assets/coming-soon.png",
            description: "Caribbean-only social media platform for content creators, users and businesses.",
        },
        {
            title: "Coming Soon",
            image: "/assets/coming-soon.png",
            description: "Realtime code mapping, analysis and optimization tool for developers and startup founders.",
        },
        {
            title: "Coming Soon",
            image: "/assets/coming-soon.png",
            description: "Micro-learning platform to develop entrepreneurial minds with lessons from successful entrepreneurs.",
        },
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
            description: "I introduced my password manager application, WardPass, in this video.",
            video: `${process.env.NEXT_PUBLIC_STORE_ID}/wardpass-intro.mp4`,
            videoPage: "/videos/wardpass-intro",
            videoAspectRatio: "16/9",
        },
    ]
}

// HOME PAGE DATA
export const accoladeImages = {
    eacPortmore: {
        title: "Long Service Award at EAC Portmore",
        image: "/eac-accolade.jpg",
    },
    kingstonCollege: {
        title: "Diploma in General Studies at KC",
        image: "/kc-accolade.jpg",
    },
    ucc: {
        title: "Highest Academic Award at UCC",
        image: "/ucc-accolade.jpg",
    },
}

// TYPE SAFETY FOR GALLERY CONTENT (IMAGES AND VIDEOS)
export enum GalleryContentType {
    IMAGE = "Image",
    VIDEO = "Video"
}

export type GalleryImageType = {
    id: number,
    type: GalleryContentType.IMAGE,
    title: string,
    description?: string,
    src: string
}

export type GalleryVideoType = {
    id: number,
    type: GalleryContentType.VIDEO,
    title: string,
    description?: string,
    src: string,
    imgPrwSrcForVideo: string,
    videoPage: string,
    videoAspectRatio: string
}

// GALLERY PAGE DATA
export const galleryImages: GalleryImageType[] = [
    { id: 1, type: GalleryContentType.IMAGE, title: media.gradPictures[0].title, src: media.gradPictures[0].image },
    { id: 2, type: GalleryContentType.IMAGE, title: media.pictures[0].title, src: media.pictures[0].image },
    { id: 3, type: GalleryContentType.IMAGE, title: media.pictures[1].title, src: media.pictures[1].image },
    { id: 4, type: GalleryContentType.IMAGE, title: media.pictures[2].title, src: media.pictures[2].image },
    { id: 5, type: GalleryContentType.IMAGE, title: media.pictures[3].title, src: media.pictures[3].image },
    { id: 6, type: GalleryContentType.IMAGE, title: media.accolades[0].title, description: media.accolades[0].description, src: media.accolades[0].image },
    { id: 7, type: GalleryContentType.IMAGE, title: media.accolades[1].title, description: media.accolades[1].description, src: media.accolades[1].image },
    { id: 8, type: GalleryContentType.IMAGE, title: media.accolades[2].title, description: media.accolades[2].description, src: media.accolades[2].image },
    { id: 9, type: GalleryContentType.IMAGE, title: media.projects[0].title, description: media.projects[0].description, src: media.projects[0].image },
    { id: 10, type: GalleryContentType.IMAGE, title: media.projects[1].title, description: media.projects[1].description, src: media.projects[1].image },
    { id: 11, type: GalleryContentType.IMAGE, title: media.projects[2].title, description: media.projects[2].description, src: media.projects[2].image },
    { id: 12, type: GalleryContentType.IMAGE, title: accoladeImages.eacPortmore.title, src: accoladeImages.eacPortmore.image },
    { id: 13, type: GalleryContentType.IMAGE, title: accoladeImages.kingstonCollege.title, src: accoladeImages.kingstonCollege.image },
    { id: 14, type: GalleryContentType.IMAGE, title: accoladeImages.ucc.title, src: accoladeImages.ucc.image },
    { id: 15, type: GalleryContentType.IMAGE, title: media.gradPictures[0].title, src: media.gradPictures[0].image },
    { id: 16, type: GalleryContentType.IMAGE, title: media.gradPictures[1].title, src: media.gradPictures[1].image },
    { id: 17, type: GalleryContentType.IMAGE, title: media.gradPictures[2].title, src: media.gradPictures[2].image },
    { id: 18, type: GalleryContentType.IMAGE, title: media.gradPictures[3].title, src: media.gradPictures[3].image },
    { id: 19, type: GalleryContentType.IMAGE, title: media.gradPictures[4].title, src: media.gradPictures[4].image }
];

export const galleryVideos: GalleryVideoType[] = [
    { id: 20, type: GalleryContentType.VIDEO, title: media.videos[0].title, description: media.videos[0].description, src: media.videos[0].video, imgPrwSrcForVideo: "https://picsum.photos/700/700", videoPage: media.videos[0].videoPage, videoAspectRatio: media.videos[0].videoAspectRatio },
    { id: 21, type: GalleryContentType.VIDEO, title: media.videos[1].title, description: media.videos[1].description, src: media.videos[1].video, imgPrwSrcForVideo: "https://picsum.photos/700/701", videoPage: media.videos[1].videoPage, videoAspectRatio: media.videos[1].videoAspectRatio },
    { id: 22, type: GalleryContentType.VIDEO, title: media.videos[2].title, description: media.videos[2].description, src: media.videos[2].video, imgPrwSrcForVideo: "https://picsum.photos/700/703", videoPage: media.videos[2].videoPage, videoAspectRatio: media.videos[2].videoAspectRatio }
]