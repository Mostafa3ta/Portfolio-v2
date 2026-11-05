import { HowIWork as Content } from '@/constant'
import React from 'react'
import Reveal from './Reveal'
import StickyTitle from './StickyTitle'

export default function HowIWork() {
  return (<>
    <StickyTitle title='How I work' id='how-i-work-heading' />
    <Reveal>
      <p className="max-w-xl leading-normal text-slate-300">{Content.intro}</p>
      <ol className="mt-8 space-y-6">
        {Content.steps.map((step, index) => (
          <li key={step.title} className="flex gap-4">
            <span aria-hidden className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-teal-400/30 bg-teal-400/10 text-sm font-semibold text-teal-300">
              {index + 1}
            </span>
            <div>
              <h3 className="font-semibold leading-8 text-slate-200">{step.title}</h3>
              <p className="text-sm leading-normal text-slate-400">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 rounded-xl border border-slate-700/50 bg-slate-800/30 p-5 sm:p-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-200">What review caught on Elevent</h3>
        <ul className="mt-4 space-y-3">
          {Content.catches.map((catchItem) => (
            <li key={catchItem} className="flex items-start gap-2 text-sm leading-normal text-slate-400">
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400/70"></span>
              <span>{catchItem}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  </>)
}
