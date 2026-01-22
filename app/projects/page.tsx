"use client";

import { MyProjects } from "@/constant";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

export default function Page() {
  useEffect(() => {
    document.title = "Projects | Mostafa Mahmoud";
  }, []);
  return (
    <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <div className="group/spotlight relative">
        <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"></div>
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:py-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                className="group mb-6 inline-flex items-center font-semibold leading-tight text-teal-300 hover:text-teal-200 transition-all duration-200"
                href="/"
                aria-label="Back to home"
              >
                <FaArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-2 duration-200" />
                <span>Mostafa Mahmoud</span>
              </Link>
            </motion.div>
            <motion.h1
              className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              All Projects
            </motion.h1>
            <motion.p
              className="text-slate-400 max-w-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A comprehensive collection of projects I've built, showcasing
              expertise in modern web technologies.
            </motion.p>
            <motion.div
              className="overflow-x-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <table
                id="content"
                className="mt-12 w-full border-collapse text-left"
              >
                <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
                  <tr>
                    <th className="th_style">Date</th>
                    <th className="th_style">Project</th>
                    <th className="hidden th_style lg:table-cell">
                      Built with
                    </th>
                    <th className="hidden th_style sm:table-cell">Link</th>
                    <th className="hidden th_style sm:table-cell">GitHub</th>
                  </tr>
                </thead>
                <tbody>
                  {MyProjects.map((project, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-300/10 last:border-none hover:bg-slate-800/50 transition-colors duration-200"
                    >
                      <td className="td_style text-sm">
                        <div className="translate-y-px whitespace-nowrap">
                          {project.date}
                        </div>
                      </td>
                      <td className="td_style font-semibold leading-snug text-slate-200">
                        <div>
                          <div className="block sm:hidden">
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 sm:hidden group/link text-base transition-colors duration-200"
                              href={project.link}
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label={`${project.name} (opens in new tab)`}
                            >
                              <span className="inline-block">
                                {project.name}
                                <MdOutlineArrowOutward className="icon_style" />
                              </span>
                            </a>
                          </div>
                          <div className="hidden sm:flex items-center">
                            {project.name}
                            {index === 0 && (
                              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-teal-600/20 text-teal-300 border border-teal-400/20">
                                Production
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="hidden td_style lg:table-cell">
                        <ul className="flex -translate-y-1.5 flex-wrap">
                          {project.techs.map((tech, techIndex) => (
                            <li key={techIndex} className="my-1 mr-1.5">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 hover:bg-teal-400/20 transition-colors duration-200">
                                {tech}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="hidden td_style sm:table-cell">
                        <ul className="translate-y-1">
                          <li className="mb-1 flex items-center">
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 group/link text-sm transition-colors duration-200"
                              href={project.link}
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label={`${project.name} website (opens in new tab)`}
                            >
                              <span>
                                <span className="inline-block">
                                  {index === 0
                                    ? project.link.substring(8).slice(0, -3)
                                    : project.link.substring(8).slice(0, -5)}
                                  <MdOutlineArrowOutward className="icon_style" />
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </td>
                      <td className="hidden td_style sm:table-cell">
                        <Link
                          href={project.git}
                          target="_blank"
                          className={clsx(
                            "z-20 transition-colors duration-200",
                            !project.git && "pointer-events-none",
                          )}
                          aria-label={`${project.name} GitHub repository`}
                        >
                          <FaGithub
                            className={clsx(
                              "icon_link",
                              !project.git && "opacity-50",
                            )}
                          />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
