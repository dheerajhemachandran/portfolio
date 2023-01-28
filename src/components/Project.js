import React from 'react'

const Project = ({project}) => {
  return (
    <a class="max-w-sm rounded overflow-hidden shadow-lg mx-2 p-2 bg-textbase" href={project["link"]} target="__blank">
  <img src={project["image"]} alt="banner" class="w-full rounded"/>
  <div class="py-2">
    <div class="font-medium text-center text-navbar capitalize">{project["name"]}</div>
  </div>
  
</a>

  
  )
}

export default Project
