'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTypescript,
  SiRedux, SiTailwindcss, SiBootstrap, SiJquery, SiGit, SiGraphql
} from 'react-icons/si'
import { FaCode } from 'react-icons/fa'
import StickyTitle from './StickyTitle'

const skills = [
  { name: 'HTML5', icon: <SiHtml5 className="text-3xl" />, color: 'group-hover:text-orange-500' },
  { name: 'CSS3', icon: <SiCss3 className="text-3xl" />, color: 'group-hover:text-blue-500' },
  { name: 'JavaScript', icon: <SiJavascript className="text-3xl" />, color: 'group-hover:text-yellow-400' },
  { name: 'TypeScript', icon: <SiTypescript className="text-3xl" />, color: 'group-hover:text-blue-600' },
  { name: 'React', icon: <SiReact className="text-3xl" />, color: 'group-hover:text-cyan-400' },
  { name: 'Next.js', icon: <SiNextdotjs className="text-3xl" />, color: 'group-hover:text-slate-200' },
  { name: 'Redux', icon: <SiRedux className="text-3xl" />, color: 'group-hover:text-purple-500' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-3xl" />, color: 'group-hover:text-cyan-400' },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-3xl" />, color: 'group-hover:text-purple-600' },
  { name: 'jQuery', icon: <SiJquery className="text-3xl" />, color: 'group-hover:text-blue-400' },
  { name: 'Git', icon: <SiGit className="text-3xl" />, color: 'group-hover:text-orange-600' },
  { name: 'REST/GraphQL', icon: <SiGraphql className="text-3xl" />, color: 'group-hover:text-pink-500' },
]

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-16 md:mb-20 lg:mb-36 xl:mb-52"
    >
      <h3 className="text-sm hidden lg:flex font-bold uppercase tracking-widest text-slate-200 mb-6 items-center gap-2">
        <FaCode className="text-teal-400" />
        Technical Skills
      </h3>
          <StickyTitle title='Technical Skills' />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.3, delay: index * 0.05 } }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.12, ease: 'easeOut' } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.06 } }}
            className="group"
          >
            <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-teal-400/50 hover:bg-slate-800/50 transition-all duration-300">
              <div className={`text-slate-400 transition-colors duration-300 ${skill.color} mb-2`}>
                {skill.icon}
              </div>
              <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors duration-300 text-center">
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
