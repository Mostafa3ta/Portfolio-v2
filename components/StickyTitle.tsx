'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function StickyTitle({ title }: any) {
    return (
        <motion.div 
            className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
        >
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 flex items-center gap-1 lg:hidden">{title}</h2>
        </motion.div>
    )
}
