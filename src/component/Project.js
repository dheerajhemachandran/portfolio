import React from 'react'

const Project = ({details}) => {
  return (
    <div class="p-4">
      <img src={details.image} alt="placeholder" class="w-full" />
    </div>
  )
}

export default Project