import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Resume",
}
export default function page() {
    return (
        <div className='flex justify-center items-center w-full min-h-screen'>
            <iframe src="https://drive.google.com/file/d/1RvYqe2pDJUvI7tqER5gREQaTmR2TUC0p/preview" width="640" height="480" allow="autoplay"></iframe>
        </div>)
}
