import { CONTACT, Hero as HeroContent, SITE } from '@/constant'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { MdCheckCircle, MdLocationOn, MdOutlineArrowOutward } from 'react-icons/md'

export default function Hero() {
    return (
        <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-400/25 bg-teal-400/[0.07] px-3 py-1 text-xs font-medium text-teal-200">
                <span aria-hidden className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60 motion-reduce:hidden"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400"></span>
                </span>
                {HeroContent.availability}
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="bg-gradient-to-r from-slate-200 via-teal-200 to-slate-200 bg-clip-text text-transparent">
                    {SITE.name}
                </span>
            </h1>
            <p className="mt-3 text-lg font-semibold tracking-tight text-slate-200 sm:text-xl">
                {HeroContent.headline}
            </p>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-400">
                <MdLocationOn aria-hidden className="h-4 w-4 shrink-0 text-slate-500" />
                {HeroContent.location}
            </p>
            <p className="mt-4 max-w-sm leading-normal text-slate-300">{HeroContent.pitch}</p>

            <ul className="mt-5 max-w-sm space-y-2" aria-label="Highlights">
                {HeroContent.proofs.map((proof) => (
                    <li key={proof} className="flex items-start gap-2.5 text-sm leading-snug text-slate-300">
                        <MdCheckCircle aria-hidden className="mt-px h-4 w-4 shrink-0 text-teal-400" />
                        <span className="[text-wrap:balance]">{proof}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-3">
                <Link
                    href="/work/elevent"
                    className="group/cta inline-flex items-center gap-2 rounded-lg border border-teal-400/40 bg-teal-400/10 px-4 py-2.5 font-semibold leading-tight text-teal-200 transition-colors duration-300 hover:border-teal-300 hover:bg-teal-400/20 hover:text-teal-100 focus-visible:text-teal-100"
                >
                    Elevent case study
                    <FaArrowRightLong aria-hidden className="h-4 w-4 transition-transform group-hover/cta:translate-x-1 motion-reduce:transition-none" />
                </Link>
                <a
                    href="#contact"
                    className="inline-flex items-center rounded-lg border border-slate-600 bg-slate-800 px-4 py-2.5 font-semibold leading-tight text-slate-200 transition-colors duration-300 hover:border-slate-500 hover:bg-slate-700"
                >
                    Contact
                </a>
                <a
                    href={CONTACT.cv}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group/link inline-flex items-baseline text-sm font-semibold text-slate-300 sm:ml-1 transition-colors duration-300 hover:text-teal-300 focus-visible:text-teal-300"
                >
                    View CV
                    <MdOutlineArrowOutward aria-hidden className="icon_style" />
                    <span className="sr-only"> (opens in new tab)</span>
                </a>
            </div>
        </div>
    )
}
