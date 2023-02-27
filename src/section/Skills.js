import React from 'react'
import { useInView } from 'react-intersection-observer';

const Skills = ({setsection}) => {

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  if (inView) {
    setsection("skills")
  }

  return (
    <div className='h-screen flex flex-col gap-10 justify-center items-center' id='skills' ref={ref}>
      <div className='font-bold text-lg md:text-2xl lg:text-4xl text-purple-500 dark:text-red-500'>My Skills</div>
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-20'>
        <img className='w-10 h-10 md:w-20 md:h-20 lg:w-30 lg:h-30' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png" alt='reactjs'/>
        <img className='w-10 h-10 md:w-20 md:h-20 lg:w-30 lg:h-30' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/900px-Tailwind_CSS_Logo.svg.png?20211001194333' alt='tailwindcss'/>
        <img className='w-10 h-10 md:w-20 md:h-20 lg:w-30 lg:h-30' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png?20170401104355' alt='nodejs'/>
        <img className='w-10 h-10 md:w-20 md:h-20 lg:w-30 lg:h-30' src='https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/100px-MySQL_logo.svg.png' alt='mysql'/>
        <img className='w-10 h-10 md:w-20 md:h-20 lg:w-30 lg:h-30' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/250px-MongoDB_Logo.svg.png' alt='mongodb'/>
        <img className='w-10 h-10 md:w-20 md:h-20 lg:w-30 lg:h-30' src='https://img.icons8.com/color/512/google-firebase-console.png' alt='firebase'/>
        <img className='w-10 h-10 md:w-20 md:h-20 lg:w-30 lg:h-30' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/121px-Python-logo-notext.svg.png' alt='python'/>
        <img className='w-10 h-10 md:w-20 md:h-20 lg:w-30 lg:h-30' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/115px-Tensorflow_logo.svg.png?20170429160244' alt='tensorflow'/>
        <img className='w-10 h-10 md:w-20 md:h-20 lg:w-30 lg:h-30' src='https://seeklogo.com/images/B/blender-logo-91B66CA31F-seeklogo.com.png' alt='blender'/>
      </div>
    </div>
  )
}

export default Skills