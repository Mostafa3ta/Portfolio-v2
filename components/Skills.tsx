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
            {group.skills.map(({ name, icon: Icon, color }) => (
              <li
                key={name}
                // A borderless card that lifts on hover: lighter surface, soft shadow, a faint top highlight,
                // and the icon in its technology's own colour. Movement is dropped for reduced motion.
                className="group relative flex h-full flex-col items-center justify-center gap-2 rounded-xl bg-slate-800/40 p-4 text-center transition-[transform,background-color,box-shadow] duration-300 ease-out hover:z-10 hover:-translate-y-1 hover:scale-105 hover:bg-slate-700/60 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.12),0_12px_24px_-8px_rgba(0,0,0,0.55)] motion-reduce:transition-colors motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100"
              >
                <Icon
                  aria-hidden
                  className={`text-3xl text-slate-400 transition-[color,transform] duration-300 ease-out group-hover:scale-110 motion-reduce:group-hover:scale-100 ${color}`}
                />
                <span className="text-xs text-slate-300 transition-colors duration-300 group-hover:text-white">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Reveal>
  </>)
}
