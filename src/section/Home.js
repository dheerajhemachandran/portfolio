import React from 'react'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Home = ({setsection}) => {

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  if (inView) {
    setsection("home")
  }
  return (
    <div className='h-screen flex justify-center items-center px-5' id='home' ref={ref}>
      <div className="text-center dark:text-slate-200 text-gray-700">
        <motion.h1 initial={{opacity:0,scale:0}} whileInView={{scale:1,opacity:1}} transition={{dela:0.1,duration:0.4}} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight px-4">
          Hola!! My name is <span className='text-purple-500 dark:text-red-600'>Dheeraj</span>
        </motion.h1>
        <motion.p initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} transition={{delay:0.2,duration:0.3}} className="dark:text-slate-400 md:text-2xl lg:text-3xl mb-8">
        "Crafting digital experiences with clean code and creativity"
        </motion.p>
        <div className='flex justify-center items-center'>
        <motion.div initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{delay:0.3,duration:0.3}}>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer bg-purple-500 dark:bg-red-500 dark:text-slate-900 text-slate-200 py-3 px-4 rounded-lg font-semibold uppercase tracking-wide hover:bg-purple-600 dark:hover:bg-red-600 mr-4">
            About
          </Link>
        </motion.div>
        <motion.div initial={{opacity:0,x:50}} whileInView={{opacity:1,x:0}} transition={{delay:0.3,duration:0.3}}>
        <a href="#" className="border-2 border-purple-600 dark:border-red-600 text-purple-500 dark:text-red-600 hover:text-slate-200 hover:dark:text-slate-900 py-3 px-4 rounded-lg font-semibold uppercase tracking-wide hover:bg-purple-600 dark:hover:bg-red-600">
          Resume
        </a>
        </motion.div>
        </div>
      </div>


    </div>
  )
}

export default Home