"use client";
import {
  Experience,
  Footer,
  Nav,
  ProjectsPreview,
  Socials,
  Skills,
  ContactCTA,
} from "@/components";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

type SectionId =  "experience" | "projects" | "contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("experience");

  const observerRef = useRef<IntersectionObserver | null>(null);

  // Use useCallback to memoize the handleIntersection function.
  // This prevents it from being re-created on every render, which is good practice
  // though not strictly necessary for an empty dependency array useEffect.
  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // We know entry.target.id will be one of our SectionId types
          // as we filter for them, but a type assertion can make it explicit
          setActiveSection(entry.target.id as SectionId);
        }
      });
    },
    [],
  ); // No dependencies, so this function is created once

  useEffect(() => {
    const sectionIds: SectionId[] = [
      "experience",
      "projects",
      "contact",
    ];

    // Get elements and filter out any nulls
    const sections: HTMLElement[] = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null); // Type guard to ensure el is HTMLElement

    // If no sections are found, log a warning and exit
    if (sections.length === 0) {
      console.warn(
        "No observable sections found. Ensure IDs 'experience', 'projects', and 'contact' exist in the DOM.",
      );
      return;
    }

    const observerOptions: IntersectionObserverInit = {
      root: null, // Defaults to the viewport
      rootMargin: "0px",
      threshold: 0.2,
    };

    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    // Store the observer instance in the ref
    observerRef.current = observer;

    // Observe each found section
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup function: disconnect the observer when the component unmounts
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersection]);

  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-xl Josefin px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-fit lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <motion.h1
                className="text-4xl font-bold tracking-tight sm:text-5xl"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="bg-gradient-to-r from-slate-200 via-teal-200 to-slate-200 bg-clip-text text-transparent">
                  Mostafa Mahmoud
                </span>
              </motion.h1>
              <motion.h2
                className="mt-3 text-lg font-semibold tracking-tight text-slate-200 sm:text-xl"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Front-End Engineer
              </motion.h2>
              <motion.p
                className="mt-4 max-w-xs leading-normal text-slate-300"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Building <span className="text-teal-300 font-semibold">production-ready</span> web applications with modern technologies, focusing on performance and exceptional user experiences.
              </motion.p>
              <motion.div
                className="mt-7"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://drive.google.com/file/d/1rDiA_ctujMWmFdFENKmjycLDz3DJRMZz/view?usp=drive_link"
                    className="inline-flex items-center gap-2 rounded-lg bg-teal-400/10 px-4 py-2.5 leading-tight text-slate-200 hover:bg-teal-400/20 hover:text-teal-300 focus-visible:text-teal-300 font-semibold group/link text-base transition-all duration-300 border border-teal-400/20 hover:border-teal-400/40"
                    target="_blank"
                    aria-label="View Resume (opens in new tab)"
                  >
                    <span>View Résumé</span>
                    <MdOutlineArrowOutward className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            <Nav activeSection={activeSection} />
            <Socials />
          </div>

          <div className="pt-24 lg:w-1/2 lg:py-24">
            <div id="experience" className="sections_style">
              <Experience />
            </div>
            <div id="projects" className="sections_style">
              <Skills />
              <ProjectsPreview />
              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.45, delay: 0.28 }}
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center leading-tight font-semibold text-slate-200 group"
                >
                  <span>
                    <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                      View All Projects{" "}
                    </span>
                    <span className="whitespace-nowrap">
                      <FaArrowRightLong className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
                    </span>
                  </span>
                </Link>
              </motion.div>
            </div>
            <div id="contact">
              <ContactCTA />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, delay: 0.32 }}
            >
              <Footer />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
