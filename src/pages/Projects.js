import React from 'react'
import Project from '../components/Project'
import {projects} from '../data/ProjectData'

const Projects = () => {
  return (
    <div className='py-32'>
      <div className="text-2xl lg:text-5xl mb-10 text-red-500 text-center font-bold">My Projects</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        {projects.map((project)=>{
           return <Project project={project}/>
        })}
        </div>

    </div>
  )
}

export default Projects
