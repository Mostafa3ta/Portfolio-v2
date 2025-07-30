'use client'
import { About, Experience, Footer, Nav, ProjectsPreview, Socials } from "@/components";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";

type SectionId = 'about' | 'experience' | 'projects';


export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  const observerRef = useRef<IntersectionObserver | null>(null);

  // Use useCallback to memoize the handleIntersection function.
  // This prevents it from being re-created on every render, which is good practice
  // though not strictly necessary for an empty dependency array useEffect.
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // We know entry.target.id will be one of our SectionId types
        // as we filter for them, but a type assertion can make it explicit
        setActiveSection(entry.target.id as SectionId);
      }
    });
  }, []); // No dependencies, so this function is created once

  useEffect(() => {
    const sectionIds: SectionId[] = ['about', 'experience', 'projects'];

    // Get elements and filter out any nulls
    const sections: HTMLElement[] = sectionIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null); // Type guard to ensure el is HTMLElement

    // If no sections are found, log a warning and exit
    if (sections.length === 0) {
      console.warn("No observable sections found. Ensure IDs 'about', 'experience', and 'projects' exist in the DOM.");
      return;
    }

    const observerOptions: IntersectionObserverInit = {
      root: null, // Defaults to the viewport
      rootMargin: '0px',
      threshold: 0.2,
    };

    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Store the observer instance in the ref
    observerRef.current = observer;

    // Observe each found section
    sections.forEach(section => {
      observer.observe(section);
    });

    // Cleanup function: disconnect the observer when the component unmounts
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersection]);

  return (<>
    <div className="mx-auto min-h-screen max-w-screen-xl Josefin px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">

        <div className="lg:sticky lg:top-0 lg:flex lg:max-h-fit lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Mostafa Mahmoud</h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Front-End Engineer</h2>
          <p className="mt-4 max-w-xs leading-normal">
            Dedicated developer delivering exceptional projects and innovative solutions. Strong foundation in frontend technologies.
          </p>
          <div className="mt-7">
            <Link href='https://drive.google.com/file/d/1rDiA_ctujMWmFdFENKmjycLDz3DJRMZz/view?usp=drive_link' className="inline-flex items-baseline leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold group/link text-base" target="_blank">
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
