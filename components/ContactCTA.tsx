import { CONTACT } from '@/constant'
import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdDescription, MdEmail } from 'react-icons/md'
import Reveal from './Reveal'
import StickyTitle from './StickyTitle'

const secondary = "inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-800 px-5 py-3 font-semibold text-slate-200 transition-colors duration-300 hover:border-slate-500 hover:bg-slate-700"

export default function ContactCTA() {
  return (<>
    <StickyTitle title='Contact' id='contact-heading' />
    <Reveal className="mb-16">
      <div className="relative overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 sm:p-8 md:p-12">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-400/5 to-transparent"></div>
        <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl"></div>

        <div className="relative z-10">
          <h3 className="mb-3 text-3xl font-bold text-slate-200 md:text-4xl">Let’s talk</h3>
          <p className="mb-6 max-w-2xl text-lg text-slate-300">
            I’m looking for frontend roles: remote, or on-site and hybrid in Egypt. I’m also open to relocating, including to the GCC or Europe.
          </p>
          <p className="mb-6 text-sm text-slate-400">
            Email me at{' '}
            <a href={`mailto:${CONTACT.email}`} className="font-medium text-teal-300 underline decoration-teal-300/40 underline-offset-2 hover:text-teal-200">
              {CONTACT.email}
            </a>
          </p>

          <ul className="flex flex-wrap gap-3" aria-label="Contact links">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 rounded-lg border border-teal-400/50 bg-teal-400/10 px-5 py-3 font-semibold text-teal-300 transition-colors duration-300 hover:border-teal-400 hover:bg-teal-400/20">
                <MdEmail aria-hidden className="text-xl" />
                Email
              </a>
            </li>
            <li>
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer noopener" className={secondary}>
                <FaWhatsapp aria-hidden className="text-xl" />
                WhatsApp<span className="sr-only"> (opens in new tab)</span>
              </a>
            </li>
            <li>
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer noopener" className={secondary}>
                <FaLinkedin aria-hidden className="text-xl" />
                LinkedIn<span className="sr-only"> (opens in new tab)</span>
              </a>
            </li>
            <li>
              <a href={CONTACT.github} target="_blank" rel="noreferrer noopener" className={secondary}>
                <FaGithub aria-hidden className="text-xl" />
                GitHub<span className="sr-only"> (opens in new tab)</span>
              </a>
            </li>
            <li>
              <a href={CONTACT.cv} target="_blank" rel="noreferrer noopener" className={secondary}>
                <MdDescription aria-hidden className="text-xl" />
                CV<span className="sr-only"> (opens in new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Reveal>
  </>)
}
