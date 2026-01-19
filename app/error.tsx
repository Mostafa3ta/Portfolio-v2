'use client'

import Link from 'next/link'
import { FaArrowLeft, FaHome } from 'react-icons/fa'
import { MdRefresh } from 'react-icons/md'
import { motion } from 'framer-motion'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <motion.div 
        className="max-w-md w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-red-400/20 mb-4">Error</h1>
          <h2 className="text-3xl font-bold text-slate-200 mb-3">Something went wrong!</h2>
          <p className="text-slate-400 leading-relaxed">
            {error.message || "An unexpected error occurred. Please try again."}
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-lg bg-teal-400/10 px-6 py-3 leading-tight text-slate-200 hover:bg-teal-400/20 hover:text-teal-300 focus-visible:text-teal-300 font-semibold transition-all duration-300 border border-teal-400/20 hover:border-teal-400/40 group"
            aria-label="Try again"
          >
            <MdRefresh className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
            <span>Try Again</span>
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-800/50 px-6 py-3 leading-tight text-slate-200 hover:bg-slate-800 hover:text-teal-300 focus-visible:text-teal-300 font-semibold transition-all duration-300 border border-slate-700/50 hover:border-slate-600 group"
            aria-label="Go back to home page"
          >
            <FaHome className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </motion.div>
        
        <motion.div 
          className="mt-8 text-sm text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p>If the problem persists, please contact me.</p>
        </motion.div>
      </motion.div>
    </div>
  )
}
