// MEDIA FILES
const media = {
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
    pictures: [
        {
            id: 1,
            title: "Zamar Hero Picture",
            type: "Image",
            image: "/assets/grad-picture.jpg"
        },
        {
            id: 2,
            title: "Zamar School Picture",
            type: "Image",
            image: "/assets/school-picture-1.jpg",
        },
        {
            id: 3,
            title: "Zamar Quote Picture",
            type: "Image",
            image: "/assets/quote-picture.jpeg",
        },
        {
            id: 4,
            title: "Zamar School Picture 2",
            type: "Image",
            image: "/assets/school-picture-2.png"
        },
        {
            id: 5,
            title: "Zamar School Picture 3",
            type: "Image",
            image: "/assets/school-picture-3.png"
        },
        {
            id: 6,
            title: "Zamar School Picture 4",
            type: "Image",
            image: "/assets/school-picture-4.jpg"
        },
        {
            id: 7,
            title: "Voluntary Service at EAC Portmore",
            type: "Image",
            image: "/assets/eac-cam-picture.png"
        },
    ],
    projects: [
        {
            title: "WardPass Project",
            image: "/assets/wardpass-project-picture.png",
            description: "Secure password management system for everyone.",
            link: "https://wardpass.netlify.app/",
        },
        {
            title: "Reckon Project",
            image: "/assets/reckon-project-picture.png",
            description: "All-in-one calculator with financial functions for everyone.",
            link: "https://reckon-p.netlify.app/",
        },
        {
            title: "Portfolio Project",
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
            link: `${process.env.NEXT_PUBLIC_STORE_ID}/ucc-awards-vid.mp4`,
            videoPage: "/videos/ucc-awards-vid",
            videoAspectRatio: "16/9",
        },
        {
            title: "Math Revision Outreach Video",
            description: "Math revision outreach video.",
            link: `${process.env.NEXT_PUBLIC_STORE_ID}/math-revision-outreach.mp4`,
            videoPage: "/videos/math-revision-outreach",
            videoAspectRatio: "9/16",
        },
        {
            title: "WardPass Introduction Video",
            description: "I introduced my password manager application, WardPass, in this video.",
            link: `${process.env.NEXT_PUBLIC_STORE_ID}/wardpass-intro.mp4`,
            videoPage: "/videos/wardpass-intro",
            videoAspectRatio: "16/9",
        },
    ]
}

// HOME PAGE DATA
const accoladeImages = {
    eacPortmore: {
        title: "Long Service Award at EAC Portmore",
        image: "/eac-accolade.jpg",
    },
    kingstonCollege: {
        title: "Diploma in General Studies at Kingston College",
        image: "/kc-accolade.jpg",
    },
    ucc: {
        title: "Highest Academic Award at University of the Commonwealth Caribbean",
        image: "/ucc-accolade.jpg",
    },
}

// TYPE SAFETY FOR CONTENT
export type ContentType = {
    id: number,
    title: string,
    description?: string,
    type: "Image" | "Video",
    src: string,
    imgPrwSrcForVideo?: string,
    videoPage?: string,
    videoAspectRatio?: string,
    alt: string,
}

// GALLERY PAGE DATA
const gallery: ContentType[] = [
    { id: 1, type: "Image", title: media.pictures[0].title, src: media.pictures[0].image, alt: media.pictures[0].title },
    { id: 2, type: "Image", title: media.pictures[1].title, src: media.pictures[1].image, alt: media.pictures[1].title },
    { id: 3, type: "Image", title: media.pictures[2].title, src: media.pictures[2].image, alt: media.pictures[2].title },
    { id: 4, type: "Image", title: media.pictures[3].title, src: media.pictures[3].image, alt: media.pictures[3].title },
    { id: 5, type: "Image", title: media.pictures[4].title, src: media.pictures[4].image, alt: media.pictures[4].title },
    { id: 6, type: "Image", title: media.pictures[5].title, src: media.pictures[5].image, alt: media.pictures[5].title },
    { id: 7, type: "Image", title: media.pictures[6].title, src: media.pictures[6].image, alt: media.pictures[6].title },
    { id: 8, type: "Image", title: media.accolades[0].title, description: media.accolades[0].description, src: media.accolades[0].image, alt: media.accolades[0].title },
    { id: 9, type: "Image", title: media.accolades[1].title, description: media.accolades[1].description, src: media.accolades[1].image, alt: media.accolades[1].title },
    { id: 10, type: "Image", title: media.accolades[2].title, description: media.accolades[2].description, src: media.accolades[2].image, alt: media.accolades[2].title },
    { id: 11, type: "Image", title: media.projects[0].title, description: media.projects[0].description, src: media.projects[0].image, alt: media.projects[0].title },
    { id: 12, type: "Image", title: media.projects[1].title, description: media.projects[1].description, src: media.projects[1].image, alt: media.projects[1].title },
    { id: 13, type: "Image", title: media.projects[2].title, description: media.projects[2].description, src: media.projects[2].image, alt: media.projects[2].title },
    { id: 14, type: "Image", title: accoladeImages.eacPortmore.title, src: accoladeImages.eacPortmore.image, alt: accoladeImages.eacPortmore.title },
    { id: 15, type: "Image", title: accoladeImages.kingstonCollege.title, src: accoladeImages.kingstonCollege.image, alt: accoladeImages.kingstonCollege.title },
    { id: 16, type: "Image", title: accoladeImages.ucc.title, src: accoladeImages.ucc.image, alt: accoladeImages.ucc.title },
    { id: 17, type: "Video", title: media.videos[0].title, description: media.videos[0].description, src: media.videos[0].link, imgPrwSrcForVideo: "https://picsum.photos/700/700", videoPage: media.videos[0].videoPage, videoAspectRatio: media.videos[0].videoAspectRatio, alt: media.videos[0].title },
    { id: 18, type: "Video", title: media.videos[1].title, description: media.videos[1].description, src: media.videos[1].link, imgPrwSrcForVideo: "https://picsum.photos/700/701", videoPage: media.videos[1].videoPage, videoAspectRatio: media.videos[1].videoAspectRatio, alt: media.videos[1].title },
    { id: 19, type: "Video", title: media.videos[2].title, description: media.videos[2].description, src: media.videos[2].link, imgPrwSrcForVideo: "https://picsum.photos/700/703", videoPage: media.videos[2].videoPage, videoAspectRatio: media.videos[2].videoAspectRatio, alt: media.videos[2].title },
    // { id: 20, type: "Video", src: media.videos[3].link, imgPrwSrcForVideo: "https://picsum.photos/700/704", videoPage: media.videos[3].videoPage, alt: media.videos[3].title },

    // ... more content
];

export { media, accoladeImages, gallery };