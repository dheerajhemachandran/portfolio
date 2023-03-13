import React from 'react'
import { motion } from 'framer-motion'

const Project = ({details}) => {
    
const source="<"+details.name+"/>"
  return (
    <div className='flex flex-col gap-6 items-center'>
      <a href={details.demo} target="_blank" className='hover:opacity-60'>
        <img className='rounded-lg border-4 border-purple-500 dark:border-red-500' src={details.image} alt=''/>
      </a>
      <a href={details.github} target="_blank" className='text-purple-400 dark:text-red-400 hover:text-purple-600 hover:dark:text-red-600 md:text-lg lg:text-xl'>
        {source}
      </a>
    </div>
  )
}

export default Project