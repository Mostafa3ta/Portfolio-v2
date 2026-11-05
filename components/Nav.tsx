'use client'

import { NavItems } from '@/constant'
import React, { useEffect, useState } from 'react'

export default function Nav() {
    const [activeSection, setActiveSection] = useState(NavItems[0].id)

    // Highlight the section that crosses the middle of the viewport.
    useEffect(() => {
        const sections = NavItems
            .map((item) => document.getElementById(item.id))
            .filter((el): el is HTMLElement => el !== null)

        const observer = new IntersectionObserver(
            (entries) => entries.forEach((entry) => {
                if (entry.isIntersecting) setActiveSection(entry.target.id)
            }),
            { rootMargin: '-40% 0px -55% 0px' },
        )
        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [])

    return (
        <nav className="nav hidden lg:block" aria-label="Page sections">
            <ul className="mt-10 w-max">
                {NavItems.map((item) => {
                    const isActive = activeSection === item.id
                    return (
                        <li key={item.id}>
                            <a className="group flex items-center py-2.5" href={`#${item.id}`} aria-current={isActive ? 'location' : undefined}>
                                <span className={`${isActive ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'} mr-4 h-px transition-all duration-300 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}></span>
                                <span className={`${isActive ? 'text-slate-200' : 'text-slate-400'} text-xs font-bold uppercase tracking-widest transition-colors duration-300 group-hover:text-slate-200 group-focus-visible:text-slate-200`}>{item.label}</span>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
