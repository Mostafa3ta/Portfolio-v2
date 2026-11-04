import { FaGithub, FaLinkedin } from "react-icons/fa"
import { ImMail4 } from "react-icons/im"
import { IoLogoWhatsapp } from "react-icons/io"
import { MdAccessibilityNew, MdAutoAwesome, MdDevices, MdSpeed, MdSyncAlt, MdTranslate } from "react-icons/md"
import { SiCloudflare, SiGit, SiGraphql, SiNextdotjs, SiReact, SiRedux, SiShadcnui, SiTailwindcss, SiTypescript } from "react-icons/si"
import type { ExperienceProps, SkillGroupProps, WorkProps } from "@/types"
import { CONTACT } from "./site"

export { SITE, CONTACT } from "./site"

export const NavItems = [
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'work', label: 'Work' },
    { id: 'how-i-work', label: 'How I work' },
    { id: 'contact', label: 'Contact' },
]

export const Hero = {
    headline: 'Frontend Engineer',
    location: 'Alexandria, Egypt · Open to relocation and remote work',
    pitch: 'I build fast, accessible web products and take them all the way from first commit to production.',
    proofs: [
        'Sole developer of a live production platform',
        '3 years with React, Next.js and TypeScript',
        'AI-assisted workflow, every line reviewed',
    ],
}

export const Work: WorkProps[] = [
    {
        name: 'Elevent',
        featured: true,
        tagline: 'Live event-operations platform · Sole developer',
        description: 'One platform for the whole vendor lifecycle at UAE and GCC events: onboarding and document checks, contracts, on-site operations, POS sales, reconciliation and payouts.',
        caseStudy: '/work/elevent',
        link: 'https://elevent.ae/',
        img: { src: '/ELEVENT-LOGO.png', width: 180, height: 27, contain: true },
        techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'FastAPI', 'PostgreSQL', 'Cloudflare'],
    },
    {
        name: 'MedicaProf',
        tagline: 'Production healthcare platform · Frontend developer',
        description: 'Appointment scheduling and analytics dashboards for patients and doctors.',
        link: 'https://medicaprof.com/en',
        img: { src: '/MedicaProf.png', width: 353, height: 199 },
        techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'HeroUI', 'FullCalendar', 'ECharts'],
    },
]

export const HowIWork = {
    intro: 'I use AI to write code faster, not to think less. Every change goes through the same five steps, and nothing ships that I can’t explain.',
    steps: [
        { title: 'Spec', body: 'Write down what the feature does, who is allowed to do it and how it fails, before any code is generated. A living project-state document and a decisions log keep every session on track.' },
        { title: 'Generate', body: 'Generate in small slices with Claude Code, plus Copilot for inline work: one feature or fix at a time, scoped to the spec.' },
        { title: 'Review every line', body: 'Read the whole diff and check every “it’s done” against the source. If I can’t explain a line, it doesn’t ship.' },
        { title: 'Test', body: 'Type-check and build gates and the test suite in CI, manual testing across devices at five screen widths, then acceptance testing with stakeholders before release.' },
        { title: 'Ship and watch', body: 'Every push runs CI and deploys automatically, every release can be rolled back in one step, and monitoring alerts me when something breaks.' },
    ],
    catches: [
        'A CSRF check that accepted any token. Rebuilt it before launch as an origin check plus a real double-submit token.',
        'An email client with no network timeout that could hang the daily reminder job and silently skip every later run. Replaced it with one that times out.',
        '“Today” calculated in UTC, which let an expired licence pass eligibility checks for the first four hours of every UAE morning. All business dates now use UAE time.',
        'An N+1 query in the vendor-approval queue. Batching it cut the p95 response time from 1.36 s to 0.17 s.',
    ],
}

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
        title: 'Frontend Engineer (Sole Developer)',
        from: 'Jan 2026', to: 'Present',
        location: 'Remote · UAE',
        link: 'https://elevent.ae/',
        description: [
            'Took a multi-role event-operations platform for UAE food, retail and catering events from first build to a production launch in October 2026, as its only developer.',
            'Own the frontend end to end: 120+ pages with role-based portals for 7 user types (13 roles, 45 permissions), a typed API client layer across 40+ domains, and a responsive system checked automatically at five screen widths.',
            'Built the auth layer so tokens never reach JavaScript: a Next.js proxy with httpOnly cookies, CSRF protection and silent token refresh.',
            'Shipped and operate the full product using AI-assisted development with my own review and testing: FastAPI and PostgreSQL backend, Cloudflare and DigitalOcean hosting, CI on every push, daily backups and one-step rollback.',
            'Ran structured testing rounds with the product owner and turned the feedback into tracked changes.',
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
            'Frontend developer in a small cross-functional team (web, backend and mobile) building a production healthcare platform for patients and doctors with Next.js, TypeScript and HeroUI.',
            'Built the appointment calendar with FullCalendar and the analytics dashboard with Apache ECharts, the platform’s most complex features.',
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
            { name: 'AI-assisted development (Claude Code, Copilot)', icon: MdAutoAwesome },
        ],
    },
    {
        label: 'Languages',
        skills: [
            { name: 'Arabic (native)', icon: MdTranslate },
            { name: 'English (professional working proficiency)', icon: MdTranslate },
        ],
    },
]
