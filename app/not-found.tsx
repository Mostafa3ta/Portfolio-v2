import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { RxDividerVertical } from 'react-icons/rx'

export default function NotFound() {
    return (
        <div className='h-screen text-center flex gap-14 flex-col items-center justify-center'>
            <div className='flex justify-center gap-8 items-center'>
                <h1 className="text-2xl pe-1 font-semibold align-top">404</h1>
                <span className='border-l-2 opacity-30 h-16 w-2' />
                <h2 className='text-2xl font-normal'>This page could not be found.</h2>
            </div>
            <Link className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300" href='/'>
                <FaArrowLeft className='mr-2 h-4 w-4 transition-transform group-hover:-translate-x-2' />
                Return to Home Page
            </Link>
        </div>
    )
}