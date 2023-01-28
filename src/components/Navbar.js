import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const path=useLocation().pathname
  const [hidden, sethidden] = useState(true)
  return (
    <motion.nav initial={{y:-100}} animate={{y:0}} transition={{type:"spring"}} className="w-fit p-3 z-10">
      <div className='bg-navbar flex py-3 px-2 rounded-lg flex-col lg:flex-row '>
      <div className='flex justify-between mx-3'>
        <div className="me-5 pe-5 text-xl text-textbase">Dh.</div>
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

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{ease:"easeIn",duration:1}} className='lg:flex gap-4 hidden items-center'>
        <Link to="/" className={path==='/'?'text-red-900 hover:text-red-800':'text-red-500 hover:text-red-700'}>home</Link>
        <Link to="/about" className={path==='/about'?'text-red-900 hover:text-red-800':'text-red-500 hover:text-red-700'}>about</Link>
        <Link to="/project" className={path==='/project'?'text-red-900 hover:text-red-800':'text-red-500 hover:text-red-700'}>project</Link>
        <Link to="/contact" className={path==='/contact'?'bg-red-900 hover:bg-red-800 text-black px-2 py-1 rounded':'bg-red-500 hover:bg-red-700 text-black px-2 py-1 rounded'}>chat</Link>
      </motion.div>

      {hidden?
      <></>
        : 
      <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{ease:"easeIn",duration:.2}} className='lg:hidden flex flex-col p-3 gap-3'>
        <Link to="/" className={path==='/'?'text-red-900 hover:text-red-800':'text-red-500 hover:text-red-700'}>home</Link>
        <Link to="/about" className={path==='/about'?'text-red-900 hover:text-red-800':'text-red-500 hover:text-red-700'}>about</Link>
        <Link to="/project" className={path==='/project'?'text-red-900 hover:text-red-800':'text-red-500 hover:text-red-700'}>project</Link>
        <Link to="/contact" className={path==='/contact'?'bg-red-900 hover:bg-red-800 text-black px-2 py-1 rounded w-fit':'bg-red-500 hover:bg-red-700 text-black px-2 py-1 rounded w-fit'}>chat</Link>
    </motion.div>
        }
     </div>
    </motion.nav>
  


  )
}

export default Navbar
