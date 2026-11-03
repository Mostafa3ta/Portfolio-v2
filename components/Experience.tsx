import { Experiences } from '@/constant'
import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'
import StickyTitle from './StickyTitle'

export default function Experience() {
  return (<>
    <StickyTitle title='Experience' id='experience-heading' />
    <ol className="group/list">
      {Experiences.map((item) =>
        <li key={item.company} className="mb-12">
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div aria-hidden className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <p className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
              {item.from} — <br className="hidden sm:block" />{item.to}
              <span className="mt-1 block font-normal normal-case tracking-normal">{item.location}</span>
            </p>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">
                <a className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 transition-colors duration-200 hover:text-teal-300 focus-visible:text-teal-300" href={item.link} target="_blank" rel="noreferrer noopener">
                  <span aria-hidden className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>{item.title} · <span className="inline-block">{item.company}
                    <MdOutlineArrowOutward aria-hidden className="icon_style" />
                  </span></span>
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </h3>
              <ul className="mt-2 space-y-1.5">
                {item.description.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm leading-normal text-slate-400">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400/70"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {item.techs.length > 0 && (
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                  {item.techs.map((tech) =>
                    <li key={tech} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{tech}</div>
                    </li>
                  )}
                </ul>
              )}
            </div>
          </div>
        </li>
      )}
    </ol>
  </>
  )
}
