import { NavItems } from '@/constant'
import Link from 'next/link'
import React from 'react'

export default function Nav({ activeSection }: any) {
    return (
        <nav className="nav hidden lg:block">
            <ul className="mt-8 w-max">
                {NavItems.map((item, index) =>
                    <li key={index}>
                        <Link className="group flex items-center py-3 " href={item.link}>
                            <span className={`${activeSection === item.name ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'} mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}></span>
                            <span className={`${activeSection === item.name ? 'text-slate-200' : 'text-slate-500'} text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200`}>{item.name}</span>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>)
}
