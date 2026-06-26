// FILE EXTRACTION

const files = {
    accolades: [
        {
            fileName: "Accolade 1",
            devLink: "http://localhost:6001/image/accolade1.png",
            prodLink: ""
        },
        {
            fileName: "Accolade 2",
            devLink: "http://localhost:6001/image/accolade2.png",
            prodLink: ""
        },
        {
            fileName: "Accolade 3",
            devLink: "http://localhost:6001/image/accolade3.png",
            prodLink: ""
        },
    ],
    realImages: [
        {
            fileName: "Hero Picture",
            devLink: "http://localhost:6001/image/hero-picture.jpg",
            prodLink: ""
        },
        {
            fileName: "School Picture",
            devLink: "http://localhost:6001/image/school-picture-1.jpg",
            prodLink: ""
        },
    ],
    projects: [
        {
            fileName: "WardPass Project",
            devLink: "http://localhost:6001/image/wardpass-project-picture.png",
            prodLink: ""
        },
        {
            fileName: "Reckon Project",
            devLink: "http://localhost:6001/image/reckon-project-picture.png",
            prodLink: ""
        },
        {
            fileName: "Portfolio Project",
            devLink: "http://localhost:6001/image/portfolio-project-picture.png",
            prodLink: ""
        },
    ],
    comingSoon: [
        {
            fileName: "Coming Soon",
            devLink: "http://localhost:6001/image/coming-soon.png",
            prodLink: ""
        }
    ],
    videos: [
        {
            fileName: "Template Video",
            devLink: "http://localhost:6001/video/template-video.mp4",
            prodLink: ""
        }
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
        image: files.projects[0].devLink,
        description: "A simple password generator application.",
        link: "https://wardpass.netlify.app/",
    },
    {
        title: null,
        image: files.projects[1].devLink,
        description: "An application with mathematical and investment calculators.",
        link: "https://reckon-p.netlify.app/",
    },
    {
        title: null,
        image: files.projects[2].devLink,
        description: "This Portfolio.",
        link: "/",
    },
];

const appDescriptions2 = [
    {
        title: null,
        image: files.comingSoon[0].devLink,
        description: "A secure password management system.",
    },
    {
        title: null,
        image: files.comingSoon[0].devLink,
        description: "A productivity suite for writers, planners, bloggers, etc.",
    },
    {
        title: null,
        image: files.comingSoon[0].devLink,
        description: "Customer relationship management software.",
    },
    {
        title: null,
        image: files.comingSoon[0].devLink,
        description: "Artificial Intelligence systems.",
    },
];

const accolades = [
    {
        title: null,
        image: files.accolades[0].devLink,
        description: "Emmanuel Apostolic Church, Portmore.",
    },
    {
        title: null,
        image: files.accolades[1].devLink,
        description: "Kingston College.",
    },
    {
        title: null,
        image: files.accolades[2].devLink,
        description:
            "Awarded the certificate of Highest Academic Distinction for Fall 2024, Summer 2025, and Fall 2025 at the University of the Commonwealth Caribbean.",
    },
];

// TYPE SAFETY FOR CONTENT
type ContentType = {
    id: number,
    type: "Image" | "Video",
    src: string,
    imgPrwSrcForVideo?: string
    alt: string,
}

// HOME PAGE IMAGES
const homePageImages: ContentType[] = [
    {
        id: 1,
        type: "Image",
        src: files.realImages[0].devLink,
        alt: "Zamar Hero Picture",
    },
    {
        id: 2,
        type: "Image",
        src: files.realImages[1].devLink,
        alt: "Zamar School Picture",
    },
]

// GALLERY PAGE DATA
const contents: ContentType[] = [
    { id: 1, type: "Image", src: "https://picsum.photos/400/300", alt: "Image 1" },
    { id: 2, type: "Image", src: "https://picsum.photos/401/301", alt: "Image 2" },
    { id: 3, type: "Image", src: files.realImages[0].devLink, alt: "Image 3" },
    { id: 4, type: "Image", src: files.realImages[1].devLink, alt: "Image 4" },
    { id: 5, type: "Image", src: files.accolades[0].devLink, alt: "Image 5" },
    { id: 6, type: "Image", src: files.accolades[1].devLink, alt: "Image 6" },
    { id: 7, type: "Image", src: files.accolades[2].devLink, alt: "Image 7" },
    { id: 8, type: "Image", src: files.projects[0].devLink, alt: "Image 8" },
    { id: 9, type: "Image", src: files.projects[1].devLink, alt: "Image 9" },
    { id: 10, type: "Image", src: files.projects[2].devLink, alt: "Image 10" },
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
    { id: 22, type: "Video", src: files.videos[0].devLink, imgPrwSrcForVideo: files.realImages[0].devLink, alt: "Video 1" }

    // ... more content
];

export { education, workExperience, appDescriptions1, appDescriptions2, accolades, homePageImages, contents };