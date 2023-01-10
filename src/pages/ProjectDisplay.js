import React from 'react'
import { Link } from 'react-router-dom'
const ProjectDisplay = ({project}) => {
  return (
    <div className='py-32 px-5 xl:px-40'>
      <Link to="/project" className='text-red-500 hover:text-red-600'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
      </svg>
      </Link>
    <div className="flex flex-col lg:flex-row gap-20 mt-5 xl:gap-20">
        <img src={project.banner} alt="" className='h-[500px] rounded mx-auto lg:w-1/2 md:1/3 w-11/12'/>
        <div className='my-auto'>
            <div className="text-3xl lg:text-5xl font-bold text-red-500 mb-4 capitalize">{project.title}</div>
            <div className="text-textbase xl:pr-60">{project.details}</div>
            <a href={project.projectlink} target="_blank" rel="noreferrer" className="btn mt-4 bg-red-500 hover:bg-red-600 text-white">view</a>  
    
        </div>
        
    </div>
    
    <div className="mt-20 flex flex-col text-center">
    <div className="text-3xl lg:text-5xl font-bold text-red-500 mb-4 capitalize">tech stack:</div>
    <ul className='text-textbase text-left mx-auto list-disc '>
        {project.tags.map((tech)=>{
            return <li>{tech}</li>
        })}
    </ul>
    </div>
    </div>
  )
}

export default ProjectDisplay
