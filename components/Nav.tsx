'use client'

import { NavItems } from '@/constant'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export default function Nav({ activeSection }: any) {
    return (
        <motion.nav 
            className="nav hidden lg:block"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <ul className="mt-8 w-max">
                {NavItems.map((item, index) =>
                    <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    >
                        <Link className="group flex items-center py-3 " href={item.link}>
                            <span className={`${activeSection === item.name ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'} mr-4 h-px transition-all duration-300 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}></span>
                            <span className={`${activeSection === item.name ? 'text-slate-200' : 'text-slate-500'} text-xs font-bold uppercase tracking-widest transition-colors duration-300 group-hover:text-slate-200 group-focus-visible:text-slate-200`}>{item.name}</span>
                        </Link>
                    </motion.li>
                )}
            </ul>
        </motion.nav>)
}
