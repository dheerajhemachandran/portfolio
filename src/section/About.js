import React from 'react'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
const About = ({setsection}) => {

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  if (inView) {
    setsection("about")
  }

  return (
    <div className='lg:h-screen flex justify-center items-center' id='about' ref={ref}>
        <section class="dark:text-slate-200 text-gray-700 py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-col gap-2 lg:gap-20 lg:flex-row items-center justify-between">
    <motion.div initial={{scale:0,opacity:0}} whileInView={{scale:1,opacity:1}} transition={{duration:0.75}} class="mt-10 lg:mt-0 mb-4 z-40">
        <img src="https://via.placeholder.com/500x500" alt="Product" class="w-full md:w-auto lg:max-w-none"/>
      </motion.div>
      <div class="text-center lg:text-left relative">
        <div className='sm:hidden md:block relative h-[50px] w-[200px] bg-slate-200 dark:bg-[#121212] top-[50px] right-[200px] z-20'></div>
        <motion.div initial={{x:-200}} whileInView={{x:0}} transition={{delay:0.2,duration:0.5}} className='hidden md:block text-xl lg:text-4xl text-purple-500 dark:text-red-500 font-extrabold mb-2'>About me</motion.div>
        <motion.div initial={{y:-20,scale:0,opacity:0}} whileInView={{y:0,opacity:1,scale:1}} transition={{delay:0.2,duration:0.5}} className='md:hidden text-xl text-purple-500 dark:text-red-500 font-extrabold mb-2'>About me</motion.div>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.7,duration:0.5}} class="md:text-lg lg:text-xl mb-12">
        <br/>I'm a web developer with experience in creating dynamic and engaging websites. 
        <br/>I have a passion for technology and love to stay up-to-date with the latest trends and techniques in the field.
        <br/>I am also learning data science to expand my skills and knowledge in the area. I am excited about the endless possibilities that data science offers and look forward to incorporating this new knowledge into my web development work.
        </motion.p>
        <motion.div initial={{y:-20,scale:0,opacity:0}} whileInView={{y:0,opacity:1,scale:1}} transition={{delay:0.2,duration:0.5}}>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          class="bg-purple-500 dark:bg-red-500 cursor-pointer text-white dark:text-slate-200 py-3 px-4 rounded-lg font-semibold uppercase tracking-wide hover:bg-purple-600 dark:hover:bg-red-600">
          My Skills
        </Link>
        </motion.div>
      </div>
      
    </div>
  </div>
</section>

    </div>
  )
}

export default About