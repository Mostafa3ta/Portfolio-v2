import { Social } from '@/constant'
import React from 'react'

export default function Socials() {
    return (
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media links">
            {Social.map((item) =>
                <li key={item.name} className="mr-5 shrink-0 text-2xl">
                    <a
                        className="block text-slate-400 transition hover:-translate-y-1 hover:text-slate-200 focus-visible:text-slate-200 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                        href={item.link}
                        target={item.link.startsWith('mailto:') ? undefined : '_blank'}
                        rel="noreferrer noopener"
                        aria-label={item.link.startsWith('mailto:') ? 'Email me' : `${item.name} (opens in new tab)`}
                    >
                        {item.icon}
                    </a>
                </li>
            )}
        </ul>
    )
}
