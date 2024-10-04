
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
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    three,
    gsap,
    vite,
    typescript,
    sushi,
    calculator,
    task,
    adventure,
    favicon,
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
        imageUrl: three,
        name: "Three.js",
        type: "Animation",
    },
    {
        imageUrl: gsap,
        name: "Gsap",
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
        imageUrl: vite,
        name: "vite",
        type: "Frontend",
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
        link: "https://www.linkedin.com/in/rene-jimenez-mayorga/",

    }
];

export const projects = [
    {
        iconUrl: favicon,
        theme: 'btn-back-pink',
        name: 'Portfolio',
        description: `Ce projet a été conçu avec des technologies modernes telles que Three.js, drei, Fiber React, Vite, et GSAP. J’ai créé une expérience interactive mettant en scène une île flottante habitée par des renards et un avion qui parcourt l'île lorsque l'on clique dessus. De plus, un oiseau phénix ajoute une touche dynamique à cette scène immersive. 
        Pour réaliser ce projet, j'ai téléchargé des modèles 3D depuis Sketchfab, que j'ai intégrés dans mon application à l'aide de Three.js, permettant ainsi l'utilisation de WebGL pour des rendus graphiques avancés. Les animations sont fluides grâce à GSAP, ce qui améliore l'expérience utilisateur.`,
        link: 'https://github.com/rexjmn/Myportfoilio',
        lien: 'https://myportfoilionn.onrender.com/'
    },
    {
        iconUrl: sushi,
        theme: 'btn-back-red',
        name: 'Restaurant SushiMan',
        description: "Découvrez mon site web interactif, développé avec Vite, HTML, et CSS, et hébergé sur Vercel. Profitez d'animations fluides et d'une performance optimale.",
        link: 'https://resto-sushi.vercel.app/',
        lien: 'https://github.com/rexjmn/resto-sushi'

    },
    {
        iconUrl: task,
        theme: 'btn-back-green',
        name: 'Javascript To-Do List',
        description: "J'ai créé une to-do list très cool, inspirée du monde du gaming et du cyberpunk. Elle combine une esthétique unique avec des fonctionnalités pratiques, offrant une expérience utilisateur immersive et efficace.",
        link: 'https://rexjmn.github.io/toDo/',
        lien: 'https://github.com/rexjmn/toDo'
    },
    {
        iconUrl: calculator,
        theme: 'btn-back-blue',
        name: 'Calculator',
        description: "J'ai développé une calculatrice en JavaScript avec un design cool, stylisé grâce à Sass. Elle offre des fonctionnalités avancées et une expérience utilisateur agréable, démontrant mes compétences en programmation et en design.",
        link: 'https://rexjmn.github.io/calculatrice/',
        lien: 'https://github.com/rexjmn/calculatrice'
    },
    {
        iconUrl: adventure,
        theme: 'btn-back-pink',
        name: 'Outdoor Adventures',
        description: "Ce projet est mon tout premier sur HTML et CSS, un site avec une interface responsive et un design minimaliste. Il est concu pour offrir une expérience utilisateur responsive.", 
        link: 'https://rexjmn.github.io/projetbootcamp/',
        lien: 'https://github.com/rexjmn/projetbootcamp'
    },

];