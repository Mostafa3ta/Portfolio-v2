'use client'

import Link from 'next/link'
import { FaHome } from 'react-icons/fa'
import { MdRefresh } from 'react-icons/md'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main id="content" className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <p aria-hidden className="text-9xl font-bold text-red-400/20 mb-4">Error</p>
          <h1 className="text-3xl font-bold text-slate-200 mb-3">Something went wrong!</h1>
          <p className="text-slate-400 leading-relaxed">
            {error.message || "An unexpected error occurred. Please try again."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-lg bg-teal-400/10 px-6 py-3 leading-tight text-slate-200 hover:bg-teal-400/20 hover:text-teal-300 focus-visible:text-teal-300 font-semibold transition-all duration-300 border border-teal-400/20 hover:border-teal-400/40 group"
          >
            <MdRefresh aria-hidden className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300 motion-reduce:transition-none" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-800/50 px-6 py-3 leading-tight text-slate-200 hover:bg-slate-800 hover:text-teal-300 focus-visible:text-teal-300 font-semibold transition-all duration-300 border border-slate-700/50 hover:border-slate-600 group"
          >
            <FaHome aria-hidden className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <p className="mt-8 text-sm text-slate-400">If the problem persists, please contact me.</p>
      </div>
    </main>
  )
}
