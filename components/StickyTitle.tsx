import React from 'react'

// Section heading: a sticky bar on small screens, visually hidden on desktop (the side nav labels the sections there).
export default function StickyTitle({ title, id }: { title: string; id: string }) {
    return (
        <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
            <h2 id={id} className="text-sm font-bold uppercase tracking-widest text-slate-200">{title}</h2>
        </div>
    )
}
