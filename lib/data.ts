// MEDIA FILES
const media = {
    accolades: [
        {
            title: "Accolade 1",
            image: "/assets/accolade1.png",
            description: "Emmanuel Apostolic Church.",
        },
        {
            title: "Accolade 2",
            image: "/assets/accolade2.png",
            description: "Kingston College.",
        },
        {
            title: "Accolade 3",
            image: "/assets/accolade3.png",
            description:
                "University of the Commonwealth Caribbean.",
        },
    ],
    pictures: [
        {
            id: 1,
            type: "Image",
            image: "/assets/grad-picture.jpg",
            alt: "Zamar Hero Picture",
        },
        {
            id: 2,
            type: "Image",
            image: "/assets/school-picture-1.jpg",
            alt: "Zamar School Picture",
        },
        {
            id: 3,
            type: "Image",
            image: "/assets/quote-picture.jpeg",
            alt: "Zamar Quote Picture",
        },
        {
            id: 4,
            type: "Image",
            image: "/assets/school-picture-2.png",
            alt: "Zamar School Picture 2",
        },
        {
            id: 5,
            type: "Image",
            image: "/assets/school-picture-3.png",
            alt: "Zamar School Picture 3",
        },
        {
            id: 6,
            type: "Image",
            image: "/assets/school-picture-4.jpg",
            alt: "Zamar School Picture 4",
        },
        {
            id: 7,
            type: "Image",
            image: "/assets/eac-cam-picture.png",
            alt: "Voluntary Service at EAC Portmore",
        },
    ],
    projects: [
        {
            title: "WardPass Project",
            image: "/assets/wardpass-project-picture.png",
            description: "A secure password management system.",
            link: "https://wardpass.netlify.app/",
        },
        {
            title: "Reckon Project",
            image: "/assets/reckon-project-picture.png",
            description: "An application with mathematical and investment calculators.",
            link: "https://reckon-p.netlify.app/",
        },
        {
            title: "Portfolio Project",
            image: "/assets/portfolio-project-picture.png",
            description: "This wonderful portfolio website project.",
            link: "/",
        },
    ],
    comingSoon: [
        {
            title: "Coming Soon",
            image: "/assets/coming-soon.png",
            description: "A productivity suite for writers, planners, bloggers, content creators, journalists, etc.",
        },
        {
            title: "Coming Soon",
            image: "/assets/coming-soon.png",
            description: "Customer relationship management software for small to medium size businesses.",
        },
        {
            title: "Coming Soon",
            image: "/assets/coming-soon.png",
            description: "A social media platform for everyone, with an AI algorithm, designed to boost content creators.",
        },
        {
            title: "Coming Soon",
            image: "/assets/coming-soon.png",
            description: "Realtime code mapping, analysis and optimization tool for developers and startup founders.",
        },
    ],
    videos: [
        {
            title: "EAC Accolade 1 Video",
            link: `${process.env.NEXT_PUBLIC_STORE_ID}/eac-accolade-short.mp4`,
            videoPage: "/videos/eac-accolade-short"
        },
        {
            title: "EAC Accolade 2 Video",
            link: `${process.env.NEXT_PUBLIC_STORE_ID}/eac-accolade-short2.mp4`,
            videoPage: "/videos/eac-accolade-short2"
        },
        {
            title: "UCC Awards Video",
            link: `${process.env.NEXT_PUBLIC_STORE_ID}/ucc-awards-vid.mp4`,
            videoPage: "/videos/ucc-awards-vid"
        },
        {
            title: "Math Revision Outreach Video",
            link: `${process.env.NEXT_PUBLIC_STORE_ID}/math-revision-outreach.mp4`,
            videoPage: "/videos/math-revision-outreach"
        },
    ]
}

// HOME PAGE DATA
const accoladeImages = {
    eacPortmore: "/eac-accolade.jpg",
    kingstonCollege: "/kc-accolade.jpg",
    ucc: "/ucc-accolade.jpg",
}

// TYPE SAFETY FOR CONTENT
type ContentType = {
    id: number,
    type: "Image" | "Video",
    src: string,
    imgPrwSrcForVideo?: string,
    videoPage?: string,
    alt: string,
}

// GALLERY PAGE DATA
const gallery: ContentType[] = [
    { id: 1, type: "Image", src: media.pictures[0].image, alt: media.pictures[0].alt },
    { id: 2, type: "Image", src: media.pictures[1].image, alt: media.pictures[1].alt },
    { id: 3, type: "Image", src: media.pictures[2].image, alt: media.pictures[2].alt },
    { id: 4, type: "Image", src: media.pictures[3].image, alt: media.pictures[3].alt },
    { id: 5, type: "Image", src: media.pictures[4].image, alt: media.pictures[4].alt },
    { id: 6, type: "Image", src: media.pictures[5].image, alt: media.pictures[5].alt },
    { id: 7, type: "Image", src: media.pictures[6].image, alt: media.pictures[6].alt },
    { id: 8, type: "Image", src: media.accolades[0].image, alt: media.accolades[0].title },
    { id: 9, type: "Image", src: media.accolades[1].image, alt: media.accolades[1].title },
    { id: 10, type: "Image", src: media.accolades[2].image, alt: media.accolades[2].title },
    { id: 11, type: "Image", src: media.projects[0].image, alt: media.projects[0].title },
    { id: 12, type: "Image", src: media.projects[1].image, alt: media.projects[1].title },
    { id: 13, type: "Image", src: media.projects[2].image, alt: media.projects[2].title },
    { id: 14, type: "Image", src: accoladeImages.eacPortmore, alt: "Long Service Award at EAC Portmore" },
    { id: 15, type: "Image", src: accoladeImages.kingstonCollege, alt: "Diploma in General Studies at Kingston College" },
    { id: 16, type: "Image", src: accoladeImages.ucc, alt: "Highest Academic Award at University of the Commonwealth Caribbean" },
    { id: 17, type: "Video", src: media.videos[0].link, imgPrwSrcForVideo: "https://picsum.photos/501/500", videoPage: media.videos[0].videoPage, alt: media.videos[0].title },
    { id: 18, type: "Video", src: media.videos[1].link, imgPrwSrcForVideo: "https://picsum.photos/502/501", videoPage: media.videos[1].videoPage, alt: media.videos[1].title },
    { id: 19, type: "Video", src: media.videos[2].link, imgPrwSrcForVideo: "https://picsum.photos/503/503", videoPage: media.videos[2].videoPage, alt: media.videos[2].title },
    { id: 20, type: "Video", src: media.videos[3].link, imgPrwSrcForVideo: "https://picsum.photos/504/504", videoPage: media.videos[3].videoPage, alt: media.videos[3].title },

    // ... more content
];

export { media, accoladeImages, gallery };