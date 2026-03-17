import { FaGithub, FaLinkedin } from "react-icons/fa"
import { ImMail, ImMail4 } from "react-icons/im"
// import { IoLogoWhatsapp } from "react-icons/io"

export const NavItems = [
    { name: 'experience', link: '#experience' },
    { name: 'projects', link: '#projects' },
    { name: 'contact', link: '#contact' },
]

export const MyProjects = [
    { name: 'ELEVENT', date: 'Feb 2026', techs: ['Next.js', 'Typescript', 'TypeScript', 'Shadcn UI'], link: '', git: '', img: '/ELEVENT-LOGO.png', description: "Building the entire frontend from scratch as the sole developer for a multi-role platform supporting vendors, organizers, job-seekers, freelancers, and administrators. Owning all architecture decisions, role-based routing, and feature delivery across all user roles through production deployment. Defining API contracts directly with the backend developer using FastAPI.", isProduction: true },
    { name: 'MedicaProf', date: 'Apr 2025', techs: ['Next.js', 'Typescript', 'Tailwind CSS', 'Hero UI'], link: 'https://medicaprof.com/en', git: '', img: '/MedicaProf.png', description: "Developed and deployed core features for a live healthcare platform serving thousands of users. Built a fully functional appointment calendar system, interactive analytics dashboard with data visualizations, and reusable component architecture. Technologies: Next.js, TypeScript, Tailwind CSS.", isProduction: true },
    { name: 'Movies & Shows', date: 'Feb 2025', techs: ['Next.js', 'Typescript', 'Tailwind CSS', 'Shadcn UI'], link: 'https://movies-swart-one.vercel.app/', git: 'https://github.com/Mostafa3ta/movies', img: '/movies.png', description: 'Full-stack movie discovery app leveraging TMDB API. Features advanced search filtering, responsive image galleries, and optimized data fetching with Next.js server components for enhanced performance.' },
    // { name: 'Cars Rental', date: 'Jan 2024', techs: ['Next.js', 'Typescript', 'Tailwind CSS', 'Headless UI'], link: 'https://cars-five-chi.vercel.app/', git: 'https://github.com/Mostafa3ta/Cars-Rental', img: '/cars.png', description: 'Comprehensive car rental search platform using Tailwind CSS, TypeScript, and Headless UI. Utilized APIs from RapidAPI and API Ninjas to provide detailed car rental information.' },
    { name: 'E-commerce', date: 'Jan 2024', techs: ['React.js', 'Redux', 'Bootstrap',], link: 'https://e-commerce-delta-one-33.vercel.app/', git: 'https://github.com/Mostafa3ta/E-commerce_React.js', img: '/e-commerce-4.png', description: 'Full-featured e-commerce platform with Redux state management, JWT authentication, and RESTful API integration. Implements shopping cart, product filtering, and secure user authentication.' },
    { name: 'First Portfolio', date: 'Dec 2023', techs: ['HTML', 'CSS', 'JavaScript', 'Bootstrap',], link: 'https://portfolio-mu-sepia-68.vercel.app/', git: 'https://github.com/Mostafa3ta/Portfolio', img: '/profile-light.png', description: `Responsive personal portfolio showcasing web development fundamentals. Built with vanilla JavaScript, featuring smooth animations, dynamic content rendering, and mobile-first design using Bootstrap.` },
    { name: 'Quiz App', date: 'Nov 2023', techs: ['React.js', 'Redux', 'MUI',], link: 'https://quiz-blond-gamma-63.vercel.app/', git: 'https://github.com/Mostafa3ta/Quiz-App', img: '/Quiz.png', description: 'Interactive quiz application with customizable settings (category, difficulty, question count). Integrated TriviaDB API with Redux for centralized state management and Material-UI for polished interface.' },
    { name: 'To-Do App', date: 'Nov 2023', techs: ['React.js', 'Bootstrap',], link: 'https://todo-list-eta-cyan-49.vercel.app/', git: 'https://github.com/Mostafa3ta/Todo-List-App', img: '/ToDo-List.png', description: 'Task management application with full CRUD operations and local storage persistence. Features real-time updates, task filtering, and responsive design for optimal user experience.' },
    { name: 'Bookmarker', date: 'Oct 2023', techs: ['HTML', 'CSS', 'JavaScript',], link: 'https://bookmarker-teal.vercel.app/', git: 'https://github.com/Mostafa3ta/Bookmarker', img: '/Bookmarker2.png', description: 'Bookmark manager with URL validation, local storage, and clean UI. Demonstrates proficiency in DOM manipulation, form handling, and client-side data persistence.' },
    { name: 'Weather', date: 'Oct 2023', techs: ['HTML', 'CSS', 'JavaScript',], link: 'https://weather-omega-wine.vercel.app/', git: 'https://github.com/Mostafa3ta/Weather', img: '/weather.png', description: 'Real-time weather application using OpenWeather API. Features location-based forecasts, dynamic UI updates, and responsive design showcasing API integration skills.' },
    // { name: 'Bakery', date: 'Sep 2023', techs: ['HTML', 'CSS',], link: ' ', git: 'https://github.com/Mostafa3ta/Bakery', img: '/bakery.png', description: '' },
]

export const Social = [
    { name: 'GitHub', link: 'https://github.com/Mostafa3ta', icon: <FaGithub className='icon_link' /> },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/mostafa-mahmoud-33a1542b0', icon: <FaLinkedin className='icon_link' /> },
    { name: 'Email', link: 'mailto:m2ostafa2000@gmail.com', icon: <ImMail4 className='icon_link' /> },
    // { name: 'WhatsApp', link: 'https://wa.me/+20', icon: <IoLogoWhatsapp className='icon_link' /> },
]

export const Experiences = [
    {
        company: 'MedicaProf',
        title: 'Frontend Developer',
        from: 'April 2025', to: 'Present',
        description: 'Leading frontend development for multiple production platforms. For MedicaProf healthcare platform: led frontend development serving dual user roles (Patients and Doctors), architected appointment calendar system and interactive analytics dashboard. For ELEVENT: building the entire frontend from scratch as the sole developer for a multi-role platform supporting vendors, organizers, job-seekers, freelancers, and administrators using Next.js, TypeScript, and ShadcnUI. Owning all architecture decisions, role-based routing, and feature delivery across all user roles through production deployment. Defining API contracts directly with the backend developer using FastAPI.',
        location: 'Remote',
        link: 'https://www.linkedin.com/company/medicaprof/',
        techs: ['Next.js', 'HTML & CSS', 'Tailwind CSS', 'JavaScript', 'Typescript', 'Redux', 'RESTful APIs']
    },
    {
        company: 'Camp Coding',
        title: 'Frontend Developer',
        from: 'March 2024', to: 'April 2025',
        description: 'Developed and maintained multiple production-grade responsive web applications using React.js and Next.js. Collaborated with designers and backend developers to ensure seamless integration and optimal user experience. Implemented modern frontend architecture patterns and best practices, contributing to improved application performance and maintainability.',
        location: 'Tanta, Egypt',
        link: 'https://www.linkedin.com/company/campcoding/',
        techs: ['Next.js', 'React', 'HTML & CSS', 'Bootstrap', 'JavaScript', 'Typescript', 'Redux', 'RESTful APIs']
    },
    {
        company: 'Route Academy',
        title: 'Frontend Developer (internship)',
        from: 'October 2023', to: 'March 2024',
        description: 'Completed an intensive frontend development program covering modern web technologies and best practices. Built multiple real-world projects using React and Next.js, gaining hands-on experience with responsive design, accessibility standards, and performance optimization. Collaborated with peers in an agile environment to deliver high-quality web applications.',
        location: 'Cairo, Egypt',
        link: 'https://www.facebook.com/Routelearning/',
        techs: ['HTML & CSS', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'React', 'Next.js', 'Typescript', 'Redux', 'Context API', 'Unit Testing', 'JQuery', 'AJAX', 'RESTful APIs',]
    },
]