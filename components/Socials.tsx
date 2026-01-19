import { Social } from '@/constant'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export default function Socials() {
    return (
        <motion.ul 
            className="ml-1 mt-8 flex items-center" 
            aria-label="Social media links"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            {Social.map((item, index) =>
                <motion.li 
                    key={index} 
                    className="mr-5 text-2xl shrink-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 0.3, delay: 0.5 + index * 0.1 } }}
                    whileHover={{ scale: 1.1, y: -4, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                    transition={{ duration: 0.2 }}
                >
                    <Link className="block" href={item.link} target="_blank" rel="noreferrer noopener" aria-label={`Visit my ${item.name} profile (opens in new tab)`}>
                        {item.icon}
                    </Link>
                </motion.li>
            )}
        </motion.ul>

    )
}

