import { Work as Projects } from '@/constant'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { MdOutlineArrowOutward } from 'react-icons/md'
import Reveal from './Reveal'
import StickyTitle from './StickyTitle'

export default function Work() {
  return (<>
    <StickyTitle title='Work' id='work-heading' />
    <ul className="space-y-10">
      {Projects.map((project, index) =>
        <li key={project.name}>
          <Reveal delay={index * 0.08}>
            <article
              aria-labelledby={`work-${index}`}
              className={clsx(
                "grid gap-4 rounded-xl border p-5 sm:grid-cols-8 sm:gap-6 sm:p-6",
                project.featured ? "border-teal-400/30 bg-slate-800/40" : "border-slate-700/50 bg-slate-800/20",
              )}
            >
              <div className="sm:col-span-2 sm:translate-y-1">
                <img
                  src={project.img.src}
                  width={project.img.width}
                  height={project.img.height}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className={clsx(
                    "h-auto w-full rounded-lg border-2 border-slate-200/10",
                    project.img.contain ? "bg-slate-900 object-contain p-4" : "object-cover",
                  )}
                />
              </div>
              <div className="sm:col-span-6">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 id={`work-${index}`} className="text-lg font-semibold leading-tight text-slate-100">{project.name}</h3>
                  {project.featured && (
                    <span className="rounded border border-teal-400/20 bg-teal-400/10 px-2 py-0.5 text-xs font-medium text-teal-300">Featured</span>
                  )}
                </div>
                <p className="mt-1 text-sm font-medium text-teal-300">{project.tagline}</p>
                <p className="mt-3 text-sm leading-normal text-slate-400">{project.description}</p>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                  {project.techs.map((tech) =>
                    <li key={tech} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{tech}</div>
                    </li>
                  )}
                </ul>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
                  {project.caseStudy && (
                    <Link href={project.caseStudy} className="group/link inline-flex items-center gap-2 text-teal-300 hover:text-teal-200 focus-visible:text-teal-200">
                      Read the case study
                      <FaArrowRightLong aria-hidden className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1 motion-reduce:transition-none" />
                    </Link>
                  )}
                  <a href={project.link} target="_blank" rel="noreferrer noopener" className="group/link inline-flex items-baseline text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                    {new URL(project.link).hostname}
                    <MdOutlineArrowOutward aria-hidden className="icon_style" />
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        </li>
      )}
    </ul>
  </>)
}
