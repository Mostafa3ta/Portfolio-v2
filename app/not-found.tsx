import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

export default function NotFound() {
    return (
        <main id='content' className='min-h-screen bg-slate-900 text-slate-400 flex items-center justify-center px-6'>
            <div className='max-w-md w-full text-center'>
                <div className='mb-8'>
                    <p aria-hidden className="text-9xl font-bold text-teal-400/20 mb-4">404</p>
                    <h1 className='text-3xl font-bold text-slate-200 mb-3'>Page Not Found</h1>
                    <p className="text-slate-400 leading-relaxed">
                        The page you’re looking for doesn’t exist or has been moved.
                    </p>
                </div>

                <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                    <Link
                        href='/'
                        className="inline-flex items-center gap-2 rounded-lg bg-teal-400/10 px-6 py-3 leading-tight text-slate-200 hover:bg-teal-400/20 hover:text-teal-300 focus-visible:text-teal-300 font-semibold transition-all duration-300 border border-teal-400/20 hover:border-teal-400/40 group"
                    >
                        <FaArrowLeft aria-hidden className='h-4 w-4 transition-transform group-hover:-translate-x-2 duration-200 motion-reduce:transition-none' />
                        <span>Back to Home</span>
                    </Link>
                </div>

                <p className='mt-8 text-sm text-slate-400'>Lost? Let me help you find your way.</p>
            </div>
        </main>
    )
}
