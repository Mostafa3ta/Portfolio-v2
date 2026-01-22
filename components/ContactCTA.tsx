'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function ContactCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-20 lg:scroll-mt-24 scroll-mt-16 mb-16"
    >
      <div className="relative rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 p-8 md:p-12 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10">
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-slate-200 mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's Work Together
          </motion.h3>
          <motion.p 
            className="text-slate-400 text-lg mb-6 max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            I'm currently available and open to discussing new opportunities. 
            Whether you have a project in mind or just want to connect, feel free to reach out.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="mailto:m2ostafa2000@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-400/10 hover:bg-teal-400/20 border border-teal-400/50 hover:border-teal-400 rounded-lg text-teal-300 font-semibold transition-all duration-300"
              >
                <MdEmail className="text-xl" />
                Get In Touch
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://www.linkedin.com/in/mostafa-mahmoud-33a1542b0"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-slate-500 rounded-lg text-slate-200 font-semibold transition-all duration-300"
              >
                <FaLinkedin className="text-xl" />
                LinkedIn
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://github.com/Mostafa3ta"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-slate-500 rounded-lg text-slate-200 font-semibold transition-all duration-300"
              >
                <FaGithub className="text-xl" />
                GitHub
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
