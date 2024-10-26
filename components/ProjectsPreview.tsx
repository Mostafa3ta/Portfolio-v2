import { MyProjects } from '@/constant'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { MdOutlineArrowOutward } from 'react-icons/md'
import StickyTitle from './StickyTitle'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function ProjectsPreview() {
  return (<>
    <StickyTitle title='Projects' />
    <div>
      <ul className="group/list">
        {MyProjects
          .filter((item, index) => index < 5)
          .map((project, index) =>
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <div className='flex justify-between'>
                    <h3>
                      <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        href={project.link} target="_blank" rel="noreferrer noopener">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                        </span>
                        <span className="inline-block">{project.name}
                          <MdOutlineArrowOutward className="icon_style" />
                        </span>
                      </Link>
                    </h3>
                    <Link href={project.git} target='_blank' className='z-20'>
                      <FaGithub className='h-6 w-6 hover:text-teal-300' />
                    </Link>
                  </div>
                  <p className="mt-2 text-sm leading-normal">{project.description}</p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                    {project.techs.map((tech, index) =>
                      <li key={index} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{tech}</div>
                      </li>
                    )}
                  </ul>
                </div>
                <img alt={project.name} loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 bg-transparent sm:translate-y-1"
                  srcSet={`${project.img}?w=256 256w, ${project.img}?w=640 640w`}
                />
              </div>
            </li>
          )}
      </ul>
    </div>
  </>)
}
