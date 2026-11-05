import { CONTACT } from '@/constant/site'
import React from 'react'

export default function Footer() {
    return (<>
        <footer className="mt-16 max-w-lg text-sm text-slate-400 sm:pb-0">
            <p className="leading-relaxed">
                Designed and built by me with <a href="https://nextjs.org/" className="footer_links" target="_blank" rel="noreferrer noopener" aria-label="Next.js (opens in new tab)">Next.js</a> and <a href="https://tailwindcss.com/" className="footer_links" target="_blank" rel="noreferrer noopener" aria-label="Tailwind CSS (opens in new tab)">Tailwind CSS</a>, deployed on <a href="https://pages.cloudflare.com/" className="footer_links" target="_blank" rel="noreferrer noopener" aria-label="Cloudflare Pages (opens in new tab)">Cloudflare Pages</a>. The <a href={CONTACT.source} className="footer_links" target="_blank" rel="noreferrer noopener" aria-label="Source code of this site on GitHub (opens in new tab)">source code</a> is on GitHub.
            </p>
        </footer>
    </>)
}
