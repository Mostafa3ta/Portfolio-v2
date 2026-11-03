'use client'

import { MotionConfig, motion } from 'framer-motion'
import type { ReactNode } from 'react'

// Fades content in once it scrolls into view. With "reduce motion" on, only the fade runs (no movement).
export default function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45, delay }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  )
}
