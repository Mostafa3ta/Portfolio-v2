import { MyProjects } from '@/constant'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft, FaGithub } from 'react-icons/fa'
import { MdOutlineArrowOutward } from 'react-icons/md'


export const metadata : Metadata = {
    title: "Projects | Mostafa Mahmoud",
}

export default function Page() {
    return (
        <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
            <div className="group/spotlight relative">
                <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" ></div>
                <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
                    <div className="lg:py-24">
                        <Link className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300" href='/'>
                            <FaArrowLeft className='mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2' /> Mostafa Mahmoud
                        </Link>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">All Projects</h1>
                        <table id="content" className="mt-12 w-full border-collapse text-left">
                            <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
                                <tr>
                                    <th className="th_style">Date</th>
                                    <th className="th_style">Project</th>
                                    <th className="hidden th_style lg:table-cell">Built with</th>
                                    <th className="hidden th_style sm:table-cell">Link</th>
                                    <th className="hidden th_style sm:table-cell">GitHub</th>
                                </tr>
                            </thead>
                            <tbody>
                                {MyProjects.map((project, index) =>
                                    <tr className="border-b border-slate-300/10 last:border-none">
                                        <td className="td_style text-sm">
                                            <div className="translate-y-px">{project.date}</div>
                                        </td>
                                        <td className="td_style font-semibold leading-snug text-slate-200">
                                            <div>
                                                <div className="block sm:hidden">
                                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-slate-200 focus-visible:text-teal-300 sm:hidden group/link text-base" href="https://www.emersoncollective.com/" target="_blank" rel="noreferrer noopener">
                                                        <span className="inline-block">{project.name}
                                                            <MdOutlineArrowOutward className="icon_style" />
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="hidden sm:block">{project.name}</div>
                                            </div>
                                        </td>
                                        <td className="hidden td_style lg:table-cell">
                                            <ul className="flex -translate-y-1.5 flex-wrap">
                                                {project.techs.map((tech, index) =>
                                                    <li key={index} className="my-1 mr-1.5">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{tech}</div>
                                                    </li>
                                                )}
                                            </ul>
                                        </td>
                                        <td className="hidden td_style sm:table-cell">
                                            <ul className="translate-y-1">
                                                <li className="mb-1 flex items-center">
                                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm" href={project.link} target="_blank" rel="noreferrer noopener" aria-label="emersoncollective.com (opens in a new tab)">
                                                        <span>
                                                            <span className="inline-block">{project.link.substring(8).slice(0, -5)}
                                                                <MdOutlineArrowOutward className="icon_style" />
                                                            </span>
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                        <td className="hidden td_style sm:table-cell">
                                            <Link href={project.git} target='_blank' className='z-20'>
                                                <FaGithub className='icon_link' />
                                            </Link>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
