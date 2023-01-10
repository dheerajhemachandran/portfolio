import React from 'react'

const Project = ({project}) => {
  return (
    <a href={project.link} class="bg-base rounded shadow-lg p-6 hover:bg-textbase text-textbase hover:text-black w-80 mx-auto">
    <img src={project.banner} alt="Card" class="w-full h-[200px] rounded-t"/>
    <h3 class="text-xl font-bold mb-4 mt-4 capitalize">{project.title}</h3>
    <p class="mb-4 text-truncate">{project.details}</p>
    </a>
  
  )
}

export default Project
