import { FaGithub, FaLinkedin } from "react-icons/fa"
import { ImMail4 } from "react-icons/im"
import { IoLogoWhatsapp } from "react-icons/io"
import { MdAccessibilityNew, MdAutoAwesome, MdDevices, MdSpeed, MdSyncAlt, MdTranslate } from "react-icons/md"
import { SiCloudflare, SiGit, SiGraphql, SiNextdotjs, SiReact, SiRedux, SiShadcnui, SiTailwindcss, SiTypescript } from "react-icons/si"
import type { ExperienceProps, SkillGroupProps } from "@/types"
import { CONTACT } from "./site"

export { SITE, CONTACT } from "./site"

export const NavItems = [
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
]

export const Hero = {
    headline: 'Frontend Engineer',
    stack: 'React · Next.js · TypeScript',
    location: 'Alexandria, Egypt',
    pitch: 'I build fast, accessible React and Next.js products and take them all the way to production, most recently Elevent, a live event-operations platform I built and operate as its sole developer.',
    proofs: [
        'Live production platform I operate',
        '3 years with React, Next.js and TypeScript',
        'AI-native workflow with line-by-line review',
    ],
}

export const MyProjects = [
    { name: 'ELEVENT', date: 'Feb 2026', techs: ['Next.js', 'Typescript', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'Cloudflare'], link: 'https://elevent.ae/', git: '', img: '/ELEVENT-LOGO.png', description: "Sole developer of a live event-operations platform for food, retail and catering events in the UAE, delivered end to end: web app, backend API, database and production deployment, with an iOS/Android app in progress. Runs the full vendor workflow, from onboarding and document checks through event applications, contracts, food-safety audits, sales reconciliation, invoicing and payouts, with role-based access for vendors, clients, auditors, finance and admins.", isProduction: true },
    { name: 'MedicaProf', date: 'Apr 2025', techs: ['Next.js', 'Typescript', 'Tailwind CSS', 'Hero UI'], link: 'https://medicaprof.com/en', git: '', img: '/MedicaProf.png', description: "Developed and deployed core features for a live healthcare platform serving thousands of users. Built a fully functional appointment calendar system, interactive analytics dashboard with data visualizations, and reusable component architecture. Technologies: Next.js, TypeScript, Tailwind CSS.", isProduction: true },
    { name: 'Movies & Shows', date: 'Feb 2025', techs: ['Next.js', 'Typescript', 'Tailwind CSS', 'Shadcn UI'], link: 'https://movies-b8e.pages.dev/', git: 'https://github.com/Mostafa3ta/movies', img: '/movies.png', description: 'Full-stack movie discovery app leveraging TMDB API. Features advanced search filtering, responsive image galleries, and optimized data fetching with Next.js server components for enhanced performance.' },
    { name: 'E-commerce', date: 'Jan 2024', techs: ['React.js', 'Redux', 'Bootstrap',], link: 'https://e-commerce-delta-one-33.vercel.app/', git: 'https://github.com/Mostafa3ta/E-commerce_React.js', img: '/e-commerce-4.png', description: 'Full-featured e-commerce platform with Redux state management, JWT authentication, and RESTful API integration. Implements shopping cart, product filtering, and secure user authentication.' },
    { name: 'First Portfolio', date: 'Dec 2023', techs: ['HTML', 'CSS', 'JavaScript', 'Bootstrap',], link: 'https://portfolio-mu-sepia-68.vercel.app/', git: 'https://github.com/Mostafa3ta/Portfolio', img: '/profile-light.png', description: `Responsive personal portfolio showcasing web development fundamentals. Built with vanilla JavaScript, featuring smooth animations, dynamic content rendering, and mobile-first design using Bootstrap.` },
    { name: 'Quiz App', date: 'Nov 2023', techs: ['React.js', 'Redux', 'MUI',], link: 'https://quiz-blond-gamma-63.vercel.app/', git: 'https://github.com/Mostafa3ta/Quiz-App', img: '/Quiz.png', description: 'Interactive quiz application with customizable settings (category, difficulty, question count). Integrated TriviaDB API with Redux for centralized state management and Material-UI for polished interface.' },
    { name: 'To-Do App', date: 'Nov 2023', techs: ['React.js', 'Bootstrap',], link: 'https://todo-list-eta-cyan-49.vercel.app/', git: 'https://github.com/Mostafa3ta/Todo-List-App', img: '/ToDo-List.png', description: 'Task management application with full CRUD operations and local storage persistence. Features real-time updates, task filtering, and responsive design for optimal user experience.' },
    { name: 'Bookmarker', date: 'Oct 2023', techs: ['HTML', 'CSS', 'JavaScript',], link: 'https://bookmarker-teal.vercel.app/', git: 'https://github.com/Mostafa3ta/Bookmarker', img: '/Bookmarker2.png', description: 'Bookmark manager with URL validation, local storage, and clean UI. Demonstrates proficiency in DOM manipulation, form handling, and client-side data persistence.' },
    { name: 'Weather', date: 'Oct 2023', techs: ['HTML', 'CSS', 'JavaScript',], link: 'https://weather-omega-wine.vercel.app/', git: 'https://github.com/Mostafa3ta/Weather', img: '/weather.png', description: 'Real-time weather application using OpenWeather API. Features location-based forecasts, dynamic UI updates, and responsive design showcasing API integration skills.' },
]

export const Social = [
    { name: 'GitHub', link: CONTACT.github, icon: <FaGithub className='icon_link' /> },
    { name: 'LinkedIn', link: CONTACT.linkedin, icon: <FaLinkedin className='icon_link' /> },
    { name: 'Email', link: `mailto:${CONTACT.email}`, icon: <ImMail4 className='icon_link' /> },
    { name: 'WhatsApp', link: CONTACT.whatsapp, icon: <IoLogoWhatsapp className='icon_link' /> },
]

// Newest first.
export const Experiences: ExperienceProps[] = [
    {
        company: 'Elevent',
        title: 'Frontend Engineer · Sole Developer',
        from: 'Jan 2026', to: 'Present',
        location: 'Remote · UAE',
        link: 'https://elevent.ae/',
        description: [
            'Took a multi-role event-operations platform for UAE food, retail and catering events from first build to a production launch in October 2026, as its only developer.',
            'Own the frontend end to end: 120+ pages with role-based portals for 7 user types driven by 45 permissions, a typed API client layer across 40+ domains, and a responsive system checked automatically at five screen widths.',
            'Built the auth layer so tokens never reach JavaScript: a Next.js proxy with httpOnly cookies, CSRF protection and silent token refresh.',
            'Shipped and operate the full product using AI-assisted development with my own review and testing: FastAPI and PostgreSQL backend, Cloudflare and DigitalOcean hosting, CI on every push, daily backups with 7-day point-in-time restore, and one-step rollback.',
            'Ran structured testing rounds with the product owner: 99 change requests across 4 rounds, each tracked by ID.',
        ],
        techs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'FastAPI', 'PostgreSQL', 'Cloudflare'],
    },
    {
        company: 'MedicaProf',
        title: 'Frontend Developer',
        from: 'Apr 2025', to: 'Dec 2025',
        location: 'Remote · France',
        link: 'https://www.linkedin.com/company/medicaprof/',
        description: [
            'Sole frontend developer on a production healthcare platform for patients and doctors, built with Next.js, TypeScript and HeroUI.',
            'Built the appointment calendar with FullCalendar and the analytics dashboard with Apache ECharts.',
            'Built the reusable component library the platform’s screens are assembled from.',
        ],
        techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'HeroUI', 'FullCalendar', 'ECharts'],
    },
    {
        company: 'Camp Coding',
        title: 'Frontend Developer',
        from: 'Mar 2024', to: 'Apr 2025',
        location: 'Tanta, Egypt',
        link: 'https://www.linkedin.com/company/campcoding/',
        description: [
            'Built and maintained multiple client web apps in React and Next.js in a fast-paced software agency.',
            'Turned designs into responsive, accessible UI components and integrated them with backend REST APIs.',
        ],
        techs: ['React', 'Next.js', 'TypeScript', 'Redux', 'REST APIs'],
    },
    {
        company: 'Route Academy',
        title: 'Frontend Development Bootcamp',
        from: 'Oct 2023', to: 'Mar 2024',
        location: 'Cairo, Egypt',
        link: 'https://www.facebook.com/Routelearning/',
        description: [
            'Six-month intensive bootcamp in JavaScript, React and Next.js; built 7+ projects.',
        ],
        techs: [],
    },
]

export const SkillGroups: SkillGroupProps[] = [
    {
        label: 'Frontend',
        skills: [
            { name: 'React', icon: SiReact },
            { name: 'Next.js (App Router)', icon: SiNextdotjs },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'Tailwind CSS', icon: SiTailwindcss },
            { name: 'shadcn/ui', icon: SiShadcnui },
            { name: 'Redux Toolkit & Context API', icon: SiRedux },
            { name: 'Accessibility', icon: MdAccessibilityNew },
            { name: 'Performance', icon: MdSpeed },
        ],
    },
    {
        label: 'Engineering practice',
        skills: [
            { name: 'Git (GitHub, GitLab)', icon: SiGit },
            { name: 'CI/CD (GitLab CI, Cloudflare)', icon: MdSyncAlt },
            { name: 'Manual & cross-device testing', icon: MdDevices },
            { name: 'REST & GraphQL APIs', icon: SiGraphql },
            { name: 'Deploys on Vercel & Cloudflare', icon: SiCloudflare },
            { name: 'AI-assisted development with review', icon: MdAutoAwesome },
        ],
    },
    {
        label: 'Languages',
        skills: [
            { name: 'Arabic (native)', icon: MdTranslate },
            { name: 'English (professional)', icon: MdTranslate },
        ],
    },
]
