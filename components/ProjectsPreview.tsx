import { MyProjects } from '@/constant'
import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'
import StickyTitle from './StickyTitle'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export default function ProjectsPreview() {
  return (<>
    <StickyTitle title='Projects' />
    <div>
      <ul className="group/list">
        {MyProjects
          .filter((item, index) => index < 3)
          .map((project, index) =>
            <motion.li 
              key={index} 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 project-card">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg lg:group-hover:border lg:group-hover:border-slate-700/50"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <div className='flex justify-between items-start'>
                      <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base transition-colors duration-200"
                        href={project.link} target="_blank" rel="noreferrer noopener" aria-label={`${project.name} (opens in new tab)`}>
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                        </span>
                        <span className="inline-block">{project.name}
                          <MdOutlineArrowOutward className="icon_style" />
                        </span>
                      </Link>
                    <Link href={project.git} target='_blank' className={clsx('z-20 transition-all duration-200', !project.git && 'pointer-events-none')} aria-label={`${project.name} GitHub repository`}>
                      <FaGithub className={clsx('h-6 w-6 hover:text-teal-300 transition-colors duration-200', !project.git && 'opacity-50')} />
                    </Link>
                  </div>
                  <p className="mt-2 text-sm leading-normal text-slate-400">{project.description}</p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                    {project.techs.map((tech, index) =>
                      <li key={index} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 hover:bg-teal-400/20 transition-colors duration-200">{tech}</div>
                      </li>
                    )}
                  </ul>
                </div>
                <img alt={`${project.name} project preview`} loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded-lg border-2 border-slate-200/10 transition-all duration-300 group-hover:border-slate-200/30 group-hover:scale-105 sm:order-1 sm:col-span-2 bg-transparent sm:translate-y-1 shadow-lg"
                  srcSet={`${project.img}?w=256 256w, ${project.img}?w=640 640w`}
                />
              </div>
            </motion.li>
          )}
      </ul>
    </div>
  </>)
}
