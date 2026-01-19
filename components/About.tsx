import React from 'react'
import StickyTitle from './StickyTitle'

export default function About() {
  return (<>
    <StickyTitle title='About' />
    <div>
      <p className="mb-4 lg:mb-10">As a passionate <span className='text-white font-semibold'>Front-End Engineer</span> with a <span className='text-white font-semibold'>Bachelor's degree in Computer Science</span> from <a href='https://www.helwan.edu.eg/' target="_blank" rel="noreferrer noopener" className='about_links'> Helwan University</a>, I specialize in building high-performance, scalable web applications that deliver exceptional user experiences.</p>
    </div>
    <div>
      <p className="mb-4">Currently, I work with cutting-edge technologies like <span className='text-white font-semibold'>React</span>, <span className='text-white font-semibold'>Next.js</span>, and <span className='text-white font-semibold'>TypeScript</span> to create production-ready applications. My experience ranges from developing complex healthcare platforms to building e-commerce solutions, always focusing on clean code, performance optimization, and seamless user interactions.</p>
    </div>
    <div>
      <p className="mb-4">I thrive in collaborative environments, working closely with designers and backend engineers to transform ideas into polished, functional products. My approach combines technical expertise with a keen eye for detail, ensuring every project meets the highest standards of quality and performance.</p>
    </div>
  </>)
}
