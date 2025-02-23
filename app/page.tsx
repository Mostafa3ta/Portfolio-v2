'use client'
import { About, Experience, Footer, Nav, ProjectsPreview, Socials } from "@/components";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {

    const about = document.getElementById('about')
    const experience = document.getElementById('experience')
    const projects = document.getElementById('projects')

    const sections = [about, projects, experience]

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id == 'about') {
            setActiveSection('about')
          }
          if (entry.target.id == 'experience') {
            setActiveSection('experience')
          }
          if (entry.target.id == 'projects') {
            setActiveSection('projects')
          }
        }
      })
    }, observerOptions)

    sections?.forEach(section => {
      section && observer.observe(section)
    })
  }, [])

  return (<>
    <div className="mx-auto min-h-screen max-w-screen-xl Josefin px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">

        <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Mostafa Mahmoud</h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Front-End Engineer</h2>
          <p className="mt-4 max-w-xs leading-normal">
            Dedicated developer delivering exceptional projects and innovative solutions. Strong foundation in frontend technologies.
          </p>
          <div className="mt-7">
            <Link href='https://drive.google.com/file/d/1rDiA_ctujMWmFdFENKmjycLDz3DJRMZz/view?usp=drive_link'  className="inline-flex items-baseline leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold group/link text-base" target="_blank">
              <span>View Résumé <MdOutlineArrowOutward className="icon_style" /></span>
            </Link>
          </div>
          <Nav activeSection={activeSection} />
          <Socials />
        </div>

        <div className="pt-24 lg:w-1/2 lg:py-24">
          <div id="about" className="sections_style">
            <About />
          </div>
          <div id="experience" className="sections_style">
            <Experience />
          </div>
          <div id="projects" className="sections_style">
            <ProjectsPreview />
            <div className="mt-12">
              <Link href='/projects' className="inline-flex items-center leading-tight font-semibold text-slate-200 group">
                <span>
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">View All Projects </span>
                  <span className="whitespace-nowrap">
                    <FaArrowRightLong className='ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none' />
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <Footer />
        </div>

      </div>
    </div>
  </>);
}
