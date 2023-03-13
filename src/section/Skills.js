import React from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Skills = ({setsection}) => {

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  if (inView) {
    setsection("skills")
  }

  const popup={
    hidden:{x:0,y:0,scale:0,opacity:0}
  }
 

  return (
    <div className='h-screen flex flex-col gap-10 justify-center items-center relative mb-60' id='skills' ref={ref}>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} className='text-xl md:text-2xl lg:text-4xl font-bold text-purple-500 dark:text-red-500'>My skills</motion.div>
      
      
      <motion.div variants={popup} initial="hidden" whileInView={{x:0,y:-window.innerWidth/6,scale:1,opacity:1}} transition={{duration:0.7}} className='absolute text-white'>
      <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" title="React js" className='h-10 w-10 md:h-20 md:w-20 lg:w-26 lg:h-26' alt="reactjs"/>
      </motion.div>
      <motion.div variants={popup} initial="hidden" whileInView={{x:window.innerWidth/6,y:-window.innerWidth/6,scale:1,opacity:1}} transition={{duration:0.7}} className='absolute text-white'>
      <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png" title='Python' className='h-10 w-10 md:h-20 md:w-20 lg:w-26 lg:h-26' alt="python"/>
      </motion.div>
      <motion.div variants={popup} initial="hidden" whileInView={{x:window.innerWidth/6,y:0,scale:1,opacity:1}} transition={{duration:0.7}} className='absolute text-white'>
      <img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" title='Firebase' className='h-10 w-10 md:h-20 md:w-20 lg:w-26 lg:h-26' alt="firebase"/>
      </motion.div>
      <motion.div variants={popup} initial="hidden" whileInView={{x:window.innerWidth/6,y:window.innerWidth/6,scale:1,opacity:1}} transition={{duration:0.7}} className='absolute text-white'>
      <img src="https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-512.png" title='Node js' className='h-10 w-10 md:h-20 md:w-20 lg:w-26 lg:h-26' alt="nodejs"/>
      </motion.div>
      <motion.div variants={popup} initial="hidden" whileInView={{x:0,y:window.innerWidth/6,scale:1,opacity:1}} transition={{duration:0.7}} className='absolute text-white'>
      <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" title='Java' className='h-10 w-10 md:h-20 md:w-20 lg:w-26 lg:h-26' alt="java"/>
      </motion.div>
      <motion.div variants={popup} initial="hidden" whileInView={{x:-window.innerWidth/6,y:window.innerWidth/6,scale:1,opacity:1}} transition={{duration:0.7}} className='absolute text-white'>
      <img src="https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png" title='MySQL' className='h-10 w-10 md:h-20 md:w-20 lg:w-26 lg:h-26' alt="mysql"/>
      </motion.div>
      <motion.div variants={popup} initial="hidden" whileInView={{x:-window.innerWidth/6,y:0,scale:1,opacity:1}} transition={{duration:0.7}} className='absolute text-white'>
      <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png" title='Css' className='h-10 w-10 md:h-20 md:w-20 lg:w-26 lg:h-26' alt="css"/>
      </motion.div>
      <motion.div variants={popup} initial="hidden" whileInView={{x:-window.innerWidth/6,y:-window.innerWidth/6,scale:1,opacity:1}} transition={{duration:0.7}} className='absolute text-white'>
      <img src="https://cdn2.iconfinder.com/data/icons/icons-mega-pack-1-and-2/256/Blender.png" title='Blender' className='h-10 w-10 md:h-20 md:w-20 lg:w-26 lg:h-26' alt="blender"/>
      </motion.div>
      
    </div>
  )
}

export default Skills