import { Social } from '@/constant'
import Link from 'next/link'
import React from 'react'

export default function Socials() {
    return (
        <ul className="ml-1 mt-8 flex items-center">
            {Social.map((item, index) =>
                <li key={index} className="mr-5 text-2xl shrink-0">
                    <Link className="block" href={item.link} target="_blank" rel="noreferrer noopener">
                        {item.icon}
                    </Link>
                </li>
            )}
        </ul>

    )
}

