import { FaGithub, FaLinkedin } from "react-icons/fa"
import { ImMail, ImMail4 } from "react-icons/im"
import { IoLogoWhatsapp } from "react-icons/io"

export const NavItems = [
    { name: 'about', link: '#about' },
    { name: 'experience', link: '#experience' },
    { name: 'projects', link: '#projects' },
]

export const MyProjects = [
    { name: 'Movies & Shows', date: 'Feb 2024', techs: ['Next.js', 'Bootstrap',], link: 'https://movies-next-js-one.vercel.app/', git: 'https://github.com/Mostafa3ta/Movies_Next.js', img: '/movies.png', description: 'Responsive web application to search and display detailed information about movies and TV shows using the TMDB API.' },
    { name: 'Cars Rental', date: 'Jan 2024', techs: ['Next.js', 'Typescript', 'Tailwind CSS', 'Headless UI'], link: 'https://cars-rental-kappa.vercel.app/', git: 'https://github.com/Mostafa3ta/Cars-Rental', img: '/cars.png', description: 'Comprehensive car rental search platform using Tailwind CSS, TypeScript, and Headless UI. Utilized APIs from RapidAPI and API Ninjas to provide detailed car rental information.' },
    { name: 'E-commerce', date: 'Jan 2024', techs: ['React.js', 'Redux', 'Bootstrap',], link: 'https://e-commerce-react-js-gamma.vercel.app/', git: 'https://github.com/Mostafa3ta/E-commerce_React.js', img: '/e-commerce-4.png', description: 'User-friendly e-commerce website using React, Redux Toolkit, and Bootstrap. Utilized dummyJSON API for product data and implemented token-based authentication for secure user access.' },
    { name: 'First Portfolio', date: 'Dec 2023', techs: ['HTML', 'CSS', 'JavaScript', 'Bootstrap',], link: 'https://portfolio-ten-tau-56.vercel.app/', git: 'https://github.com/Mostafa3ta/Portfolio', img: '/profile-light.png', description: `My first Personal portfolio website, built it using HTML, CSS, and JavaScript. Utilized Bootstrap's grid system for efficient layout and responsiveness.` },
    { name: 'Quiz App', date: 'Nov 2023', techs: ['React.js', 'Redux', 'MUI',], link: 'https://quiz-app-blue-nine.vercel.app/', git: 'https://github.com/Mostafa3ta/Quiz-App', img: '/Quiz.png', description: 'Flexible quiz app using React, Redux, and MUI. Integrated the TriviaDB API to fetch questions and allow users to customize quiz settings (category, difficulty, number of questions).' },
    { name: 'To-Do App', date: 'Nov 2023', techs: ['React.js', 'Bootstrap',], link: 'https://todo-list-app-eight-omega.vercel.app/', git: 'https://github.com/Mostafa3ta/Todo-List-App', img: '/ToDo-List.png', description: 'Functional To-do list application utilizing JavaScript and local storage. Implemented CRUD operations (Create, Read, Update, Delete) to manage tasks efficientl.' },
    { name: 'Bookmarker', date: 'Oct 2023', techs: ['HTML', 'CSS', 'JavaScript',], link: 'https://bookmarker-green.vercel.app/', git: 'https://github.com/Mostafa3ta/Bookmarker', img: '/Bookmarker2.png', description: '' },
    { name: 'Weather', date: 'Oct 2023', techs: ['HTML', 'CSS', 'JavaScript',], link: 'https://weather-six-blush.vercel.app/', git: 'https://github.com/Mostafa3ta/Weather', img: '/weather.png', description: '' },
    { name: 'Bakery', date: 'Sep 2023', techs: ['HTML', 'CSS',], link: 'https://bakery-seven-delta.vercel.app/', git: 'https://github.com/Mostafa3ta/Bakery', img: '/bakery.png', description: '' },
]

export const Social = [
    { name: 'GitHub', link: 'https://github.com/Mostafa3ta', icon: <FaGithub className='icon_link' /> },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/mostafa-mahmoud-33a1542b0', icon: <FaLinkedin className='icon_link' /> },
    { name: 'Email', link: 'mailto:m2ostafa2000@gmail.com', icon: <ImMail4 className='icon_link' /> },
    { name: 'WhatsApp', link: 'https://wa.me/+201206856251', icon: <IoLogoWhatsapp className='icon_link' /> },
]

export const Experiences = [
    {
        company: 'Camp Coding',
        title: 'Front-End Engineer',
        from: 'March 2024', to: 'Present',
        description: 'Collaborate with designers and backend developers to ensure seamless integration and project delivery. Building multiple responsive web applications using React.js, Next.js, HTML, CSS, and JavaScript. Maintain and update existing web applications',
        city: 'Tanta, Egypt',
        link: 'https://www.linkedin.com/company/campcoding/',
        techs: ['HTML & CSS', 'Bootstrap', 'JavaScript', 'React', 'Next.js', 'Typescript', 'Redux', 'RESTful APIs']
    },
    {
        company: 'Route Academy',
        title: 'Front-End Engineer (course)',
        from: 'October 2023', to: 'February 2024',
        description: 'Completed a comprehensive front-end development course covering HTML, CSS, and JavaScript fundamentals and developed a strong understanding of web development principles such as responsive design, accessibility, and performance optimization. Gained practical experience in building web applications using React and Next.js.',
        city: 'Cairo, Egypt',
        link: 'https://www.facebook.com/Routelearning/',
        techs: ['HTML & CSS', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'React', 'Next.js', 'Typescript', 'Redux', 'Context API', 'Unit Testing', 'JQuery', 'AJAX', 'RESTful APIs',]
    },
]