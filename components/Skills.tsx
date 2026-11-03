import { SkillGroups } from '@/constant'
import React from 'react'
import Reveal from './Reveal'
import StickyTitle from './StickyTitle'

export default function Skills() {
  return (<>
    <StickyTitle title='Skills' id='skills-heading' />
    <Reveal className="space-y-8">
      {SkillGroups.map((group) => (
        <div key={group.label}>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
            {group.label}
          </h3>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {group.skills.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className="flex h-full flex-col items-center justify-center gap-2 rounded-lg border border-slate-700/50 bg-slate-800/30 p-4 text-center transition-colors duration-300 hover:border-teal-400/50 hover:bg-slate-800/50"
              >
                <Icon aria-hidden className="text-3xl text-slate-400" />
                <span className="text-xs text-slate-300">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Reveal>
  </>)
}
