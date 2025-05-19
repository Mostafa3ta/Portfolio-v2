import React from 'react'
import StickyTitle from './StickyTitle'

export default function About() {
  return (<>
    <StickyTitle title='About' />
    <div>
      <p className="mb-4 lg:mb-10">Driven by a passion for technology, I earned a <span className='text-white'> Bachelor’s degree </span> in <span className='text-white'>Computer Science</span> from <a href='https://www.helwan.edu.eg/' target="_blank" rel="noreferrer noopener" className='about_links'> Helwan University </a> developing a strong foundation in Computer Science and Software Development. Throughout my academic journey, I joined <a href='https://www.facebook.com/Routelearning/' target="_blank" rel="noreferrer noopener" className='about_links'> Route Academy </a> for
        a <span className='text-white'>Frontend Development</span> internship where I have honed my skills in web development technologies,
        and have successfully completed several projects that demonstrate my ability to create visually
        appealing and user-friendly websites.</p>
    </div>
    <div>
      <p className="mb-4">Now as a <span className='text-white'> Front-End Engineer</span>,
        I leverage <span className='text-white'>React
        </span> and <span className='text-white'>Next.js</span> on diverse projects to enhance my skills and gain practical experience. I collaborate with designers and backend developers to deliver their visions, ensuring seamless design integration and optimal website performance. I also maintain existing projects and continuously seek to expand my knowledge of the latest industry trends.</p>
    </div>
  </>)
}
