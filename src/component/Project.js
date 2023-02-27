import React from 'react'
import { motion } from 'framer-motion'

const Project = ({details}) => {
    const containerVariants = {
        visible: {
          opacity: 0.80,
          y: 0,
          transition: {
            duration: 0.3,
          },
        },
        hidden: {
          opacity: 0,
          y: -10,
        },
      };

  return (
    <div class="relative m-4 border-4 hover:border-purple-500 dark:hover:border-red-500 border-white rounded-lg">      
        <img src={details.image} alt="placeholder" class="w-full rounded-lg" />
        <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileHover="visible"
              duration={300}
              className='absolute top-0 right-0  w-full h-full flex text-purple-500 dark:text-red-500 bg-black z-30 rounded-lg justify-center items-center gap-20'>
            <a href={details.github} target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
            </svg>
            </a>
            <a href={details.demo} target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
            </svg>
            </a>
        </motion.div>
    </div>
  )
}

export default Project