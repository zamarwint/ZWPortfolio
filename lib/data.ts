// FILE EXTRACTION

const files = {
    accolades: [
        {
            fileName: "Accolade 1",
            link: "/assets/accolade1.png",
        },
        {
            fileName: "Accolade 2",
            link: "/assets/accolade2.png",
        },
        {
            fileName: "Accolade 3",
            link: "/assets/accolade3.png",
        },
    ],
    realImages: [
        {
            fileName: "Hero Picture",
            link: "/assets/hero-picture.jpg",
        },
        {
            fileName: "School Picture",
            link: "/assets/school-picture-1.jpg",
        },
        {
            fileName: "Quote Picture",
            link: "/assets/quote-picture.jpeg",
        },
        {
            fileName: "School Picture 2",
            link: "/assets/school-picture-2.png",
        },
        {
            fileName: "School Picture 3",
            link: "/assets/school-picture-3.png",
        },
    ],
    projects: [
        {
            fileName: "WardPass Project",
            link: "/assets/wardpass-project-picture.png",
        },
        {
            fileName: "Reckon Project",
            link: "/assets/reckon-project-picture.png",
        },
        {
            fileName: "Portfolio Project",
            link: "/assets/portfolio-project-picture.png",
        },
    ],
    comingSoon: [
        {
            fileName: "Coming Soon",
            link: "/assets/coming-soon.png",
        }
    ],
    videos: [
        {
            fileName: "Template Video",
            link: `${process.env.NEXT_PUBLIC_STORE_ID}/template-video.mp4`,
            videoPage: "/videos/template-video"
        },
        {
            fileName: "Not Found Video",
            link: `${process.env.NEXT_PUBLIC_STORE_ID}/not-found.mp4`,
            videoPage: "null"
        },
        {
            fileName: "EAC Accolade 1 Video",
            link: `${process.env.NEXT_PUBLIC_STORE_ID}/eac-accolade-short.mp4`,
            videoPage: "/videos/eac-accolade-short"
        },
        {
            fileName: "EAC Accolade 2 Video",
            link: `${process.env.NEXT_PUBLIC_STORE_ID}/eac-accolade-short2.mp4`,
            videoPage: "/videos/eac-accolade-short2"
        },
        {
            fileName: "UCC Awards Video",
            link: `${process.env.NEXT_PUBLIC_STORE_ID}/ucc-awards-vid.mp4`,
            videoPage: "/videos/ucc-awards-vid"
        },
    ]
}

// HOME PAGE DATA
const education = [
    {
        certificate: "Bachelor of Science in Computer Engineering",
        placeOfStudy:
            "University of the Commonwealth Caribbean, New Kingston, Jamaica",
        description: "Will study in the future by God’s grace.",
    },
    {
        certificate: "Associate of Science in Information Technology",
        placeOfStudy:
            "University of the Commonwealth Caribbean, New Kingston, Jamaica",
        description:
            "Currently studying Information Technology, furthering studies in networking, programming, and mathematics.",
    },
    {
        certificate: "High School Diploma",
        placeOfStudy: "Kingston College, Kingston, Jamaica",
        description:
            "Exited High school with the Caribbean Secondary Education Certiﬁcate and a strong foundation in Computers.",
    },
];

const workExperience = [
    {
        company: "Emmanuel Apostolic Church, Portmore, Braeton Parkway, Pines Road",
        title: "Camera Operator",
        description: "Currently volunteering as a Camera Operator on Sundays.",
        duration: "AUGUST 2023 – PRESENT",
    },
    {
        company: "GBI Logistics Ltd.",
        title: "Data Entry Clerk",
        description: "Accurately entered shipment data into the database.",
        duration: "JUNE 10, 2024 – JUNE 22, 2024",
    },
    {
        company: "Emmanuel Apostolic Church, Portmore, Braeton Parkway, Pines Road",
        title: "Vision Mixer",
        description:
            "Voluntary Service. \n Assisted in broadcasting and live streaming. \n Assisted in setting up live stream schedules for broadcasting.",
        duration: "SEPTEMBER 2019 – AUGUST 2023",
    },
];

const appDescriptions1 = [
    {
        title: null,
        image: files.projects[0].link,
        description: "A simple password generator application.",
        link: "https://wardpass.netlify.app/",
    },
    {
        title: null,
        image: files.projects[1].link,
        description: "An application with mathematical and investment calculators.",
        link: "https://reckon-p.netlify.app/",
    },
    {
        title: null,
        image: files.projects[2].link,
        description: "This Portfolio.",
        link: "/",
    },
];

const appDescriptions2 = [
    {
        title: null,
        image: files.comingSoon[0].link,
        description: "A secure password management system.",
    },
    {
        title: null,
        image: files.comingSoon[0].link,
        description: "A productivity suite for writers, planners, bloggers, etc.",
    },
    {
        title: null,
        image: files.comingSoon[0].link,
        description: "Customer relationship management software.",
    },
    {
        title: null,
        image: files.comingSoon[0].link,
        description: "Artificial Intelligence systems.",
    },
];

const accolades = [
    {
        title: null,
        image: files.accolades[0].link,
        description: "Emmanuel Apostolic Church, Portmore.",
    },
    {
        title: null,
        image: files.accolades[1].link,
        description: "Kingston College.",
    },
    {
        title: null,
        image: files.accolades[2].link,
        description:
            "Awarded the certificate of Highest Academic Distinction for Fall 2024, Summer 2025, and Fall 2025 at the University of the Commonwealth Caribbean.",
    },
];

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

// HOME PAGE IMAGES
const homePageImages: ContentType[] = [
    {
        id: 1,
        type: "Image",
        src: files.realImages[0].link,
        alt: "Zamar Hero Picture",
    },
    {
        id: 2,
        type: "Image",
        src: files.realImages[1].link,
        alt: "Zamar School Picture",
    },
    {
        id: 3,
        type: "Image",
        src: files.realImages[2].link,
        alt: "Zamar Quote Picture",
    },
]

// NOT FOUND PAGE VIDEO
const notFoundPageContent: ContentType[] = [
    {
        id: 1,
        type: "Video",
        src: files.videos[1].link,
        imgPrwSrcForVideo: files.realImages[1].link,
        alt: "Not Found Page Video"
    }
]

// GALLERY PAGE DATA
const contents: ContentType[] = [
    { id: 1, type: "Image", src: files.realImages[0].link, alt: "Image 1" },
    { id: 2, type: "Image", src: files.realImages[1].link, alt: "Image 2" },
    { id: 3, type: "Image", src: files.accolades[0].link, alt: "Image 3" },
    { id: 4, type: "Image", src: files.accolades[1].link, alt: "Image 4" },
    { id: 5, type: "Image", src: files.accolades[2].link, alt: "Image 5" },
    { id: 6, type: "Image", src: files.projects[0].link, alt: "Image 6" },
    { id: 7, type: "Image", src: files.projects[1].link, alt: "Image 7" },
    { id: 8, type: "Image", src: files.projects[2].link, alt: "Image 8" },
    { id: 9, type: "Image", src: "https://picsum.photos/400/300", alt: "Image 9" },
    { id: 10, type: "Image", src: "https://picsum.photos/401/301", alt: "Image 10" },
    { id: 11, type: "Image", src: "https://picsum.photos/500/500", alt: "Image 11" },
    { id: 12, type: "Image", src: "https://picsum.photos/500/501", alt: "Image 12" },
    { id: 13, type: "Image", src: "https://picsum.photos/500/502", alt: "Image 13" },
    { id: 14, type: "Image", src: "https://picsum.photos/500/503", alt: "Image 14" },
    { id: 15, type: "Image", src: "https://picsum.photos/500/504", alt: "Image 15" },
    { id: 16, type: "Image", src: "https://picsum.photos/500/505", alt: "Image 16" },
    { id: 17, type: "Image", src: "https://picsum.photos/500/506", alt: "Image 17" },
    { id: 18, type: "Image", src: "https://picsum.photos/500/507", alt: "Image 18" },
    { id: 19, type: "Image", src: "https://picsum.photos/500/508", alt: "Image 19" },
    { id: 20, type: "Image", src: "https://picsum.photos/500/509", alt: "Image 20" },
    { id: 21, type: "Image", src: "https://picsum.photos/500/510", alt: "Image 21" },
    { id: 22, type: "Video", src: files.videos[0].link, imgPrwSrcForVideo: files.realImages[3].link, videoPage: files.videos[0].videoPage, alt: "Video 1" },
    { id: 23, type: "Video", src: files.videos[2].link, imgPrwSrcForVideo: files.realImages[3].link, videoPage: files.videos[2].videoPage, alt: "Video 2" },
    { id: 24, type: "Video", src: files.videos[3].link, imgPrwSrcForVideo: files.realImages[4].link, videoPage: files.videos[3].videoPage, alt: "Video 3" },
    { id: 25, type: "Video", src: files.videos[4].link, imgPrwSrcForVideo: files.realImages[4].link, videoPage: files.videos[4].videoPage, alt: "Video 4" },

    // ... more content
];

export { files, education, workExperience, appDescriptions1, appDescriptions2, accolades, accoladeImages, homePageImages, contents, notFoundPageContent };