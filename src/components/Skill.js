import React from 'react'

const Skill = ({name,link}) => {
  return (
    <div className='py-4'>
          <div className='h-100'>
            <img className='w-20 m-auto' src={link} alt="" />
          </div>
          <h2 className="text-center text-textbase text-lg">{name}</h2>
    </div>
  )
}

export default Skill
