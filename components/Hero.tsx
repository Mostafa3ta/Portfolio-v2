import { Hero as HeroContent, SITE } from '@/constant'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function Hero() {
    return (
        <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="bg-gradient-to-r from-slate-200 via-teal-200 to-slate-200 bg-clip-text text-transparent">
                    {SITE.name}
                </span>
            </h1>
            <p className="mt-3 text-lg font-semibold tracking-tight text-slate-200 sm:text-xl">
                {HeroContent.headline}
                <span className="mt-1 block text-base font-medium text-teal-300 sm:text-lg">{HeroContent.stack}</span>
            </p>
            <p className="mt-2 text-sm text-slate-400">{HeroContent.location}</p>
            <p className="mt-4 max-w-sm leading-normal text-slate-300">{HeroContent.pitch}</p>

            <ul className="mt-5 flex max-w-sm flex-wrap gap-2" aria-label="Highlights">
                {HeroContent.proofs.map((proof) => (
                    <li key={proof} className="rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-200">
                        {proof}
                    </li>
                ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-3">
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
            </div>
        </div>
    )
}
