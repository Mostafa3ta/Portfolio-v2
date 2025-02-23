import React from 'react'
import StickyTitle from './StickyTitle'

export default function About() {
  return (<>
    <StickyTitle title='About' />
    <div>
      <p className="mb-4">I have been captivated by the power of technology and its ability to shape the
        world around us. This led me to pursue a <span className='text-white'> Bachelor’s degree in Computer Science,
        </span> from <a href='https://www.helwan.edu.eg/' target="_blank" rel="noreferrer noopener" className='about_links'> Helwan University </a> where I gained a comprehensive understanding of computer science and web development
        principles. Throughout my academic journey, I joined <a href='https://www.facebook.com/Routelearning/' target="_blank" rel="noreferrer noopener" className='about_links'> Route Academy </a> for
        a <span className='text-white'>Frontend </span> Web Development course where I have honed my skills in web development technologies,
        and have successfully completed several projects that demonstrate my ability to create visually
        appealing and user-friendly websites.</p>
    </div>
    <div>
      <p className="mb-4">In my current role as a <span className='text-white'> Front-End Engineer</span> at <a href='https://www.linkedin.com/company/campcoding/' target="_blank" rel="noreferrer noopener" className='about_links'> Camp Coding </a> company , I
        work on a variety of projects with <span className='text-white'>React
        </span> and <span className='text-white'>Next.js</span> that allows me to further
        develop my skills and gain practical experience in a professional setting. I
        collaborate closely with designers and backend developers to bring their
        visions to life, ensuring seamless integration of design elements and optimal
        website performance. Additionally, I Maintain and update existing projects,
        and continuously seek opportunities to expand my knowledge
        and stay up to date with the latest industry trends.</p>
    </div>
  </>)
}
