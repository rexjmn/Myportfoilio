
import { meta, CNXC, harrynDavid, tp } from "../assets/images";

import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {

        title: "Tech Support",
        company_name: "Teleperformance",
        icon: tp,
        iconBg: "#accbe1",
        date: "19/10/2018 - 31/12/2018",
        points: [
            "Fournir un support technique de haute qualité en anglais à une clientèle internationale.",
            "Résoudre efficacement les problèmes techniques des clients liés aux services et produits AT&T.",
            "Atteindre et surpasser les objectifs de satisfaction client mensuels.", 
            "Maintenir une communication claire et professionnelle, renforçant la fidélité des clients.", 
            "Collaborer avec les équipes internes pour assurer une résolution rapide et efficace des incidents.", 
            "Améliorer continuellement les compétences en communication et la maîtrise de l'anglais."
        ],
    },
    {
        title: "Télèconseiller commercial et service client",
        company_name: "Hary&David",
        icon: harrynDavid,
        iconBg: "#fbc3bc",
        date: "16/10/2017 - 18/01/2018",
        points: [
            "Analyser les besoins des clients pour proposer des solutions personnalisées et adaptées.",
"Utiliser des outils CRM pour suivre et gérer les interactions avec les clients de manière efficace.",
"Participer à des formations régulières pour rester informé des nouvelles pratiques et des produits.",
"Développer des stratégies pour augmenter la satisfaction et la rétention des clients.",
"Préparer des rapports détaillés sur les performances de service et les retours clients pour les équipes de gestion.",
"Assurer une veille concurrentielle pour identifier les opportunités d'amélioration et d'innovation.",
"Encourager une culture de service client orientée vers l'excellence et la satisfaction maximale."
        ],
    },
    {
        title: "télèconseiller reservation et service client",
        company_name: "Concentrix",
        icon: CNXC,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Fournir un service client exceptionnel en anglais à une clientèle internationale.",
"Gérer efficacement les réservations, modifications et annulations de séjours.",
"Atteindre et dépasser les objectifs de vente mensuels.",
"Renforcer la fidélité des clients grâce à une communication claire et professionnelle.",
"Collaborer avec les équipes internes pour résoudre rapidement les problèmes.",
"Améliorer continuellement les compétences en communication et la maîtrise de l'anglais."
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/rexjmn',

    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'www.linkedin.com/in/rene-jimenez-mayorga',

    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',


        name: 'Restaurant SushiMan',
        description: 'deve.',
        link: '',

    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];