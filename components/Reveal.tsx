'use client'

import clsx from 'clsx'
import { useEffect, useRef, useState, type ReactNode } from 'react'

// Fades content in once it scrolls into view, using CSS only (see .reveal in globals.css).
// With "reduce motion" on, it only fades; without JavaScript, the content is simply shown.
export default function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShown(true)
        observer.disconnect()
      }
    }, { rootMargin: '0px 0px -80px 0px' })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={clsx('reveal', shown && 'reveal-shown', className)} style={delay ? { transitionDelay: `${delay}s` } : undefined}>
      {children}
    </div>
  )
}
