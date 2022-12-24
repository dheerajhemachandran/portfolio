import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const path=useLocation().pathname
  const [hidden, sethidden] = useState(true)
  return (
    <nav className="absolute bg-navbar w-100 py-3 lg:px-36 lg:flex lg:justify-between z-10">
      <div className='flex justify-between items-center mx-3'>
        <div className="me-5 pe-5 text-textbase">Dh.</div>
        <button className='lg:hidden' onClick={()=>sethidden(!hidden)}>
          {hidden?
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        }
        </button>
      </div>

      <div className='lg:flex gap-4 hidden'>
        <Link to="/" className={path==='/'?'text-red-900 hover:text-red-800':'text-red-500 hover:text-red-700'}>home</Link>
        <Link to="/about" className={path==='/about'?'text-red-900 hover:text-red-800':'text-red-500 hover:text-red-700'}>about</Link>
        <Link to="/project" className={path==='/project'?'text-red-900 hover:text-red-800':'text-red-500 hover:text-red-700'}>project</Link>
        <Link to="/contact" className={path==='/contact'?'text-red-900 hover:text-red-800':'text-red-500 hover:text-red-700'}>contact</Link>
      </div>

      {hidden?
      <></>
        : 
      <div className='lg:hidden flex flex-col py-3 gap-3'>
        <Link to="/" className={path==='/'?'text-red-900 hover:text-red-800':'text-red-500 hover:text-red-700'}>home</Link>
        <Link to="/about" className={path==='/about'?'text-red-900 hover:text-red-800':'text-red-500 hover:text-red-700'}>about</Link>
        <Link to="/project" className={path==='/project'?'text-red-900 hover:text-red-800':'text-red-500 hover:text-red-700'}>project</Link>
        <Link to="/contact" className={path==='/contact'?'text-red-900 hover:text-red-800':'text-red-500 hover:text-red-700'}>contact</Link>
    </div>
        }
     
    </nav>
  


  )
}

export default Navbar
