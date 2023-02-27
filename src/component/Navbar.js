import {React,useState} from 'react'
import { motion ,AnimatePresence} from "framer-motion";
import { HamburgerIcon, CloseIcon, DarkIcon, LightIcon } from "./Icons";
import { Link } from 'react-scroll';

const Navbar = ({section,dark,setdark}) => {
  const [show, setshow] = useState(false)
  return (
    <>

      
      <button className='fixed bottom-0 left-0 flex items-center m-5 p-2 z-20 bg-gray-900 dark:bg-slate-200 w-[60px] rounded-2xl' onClick={()=>setdark(!dark)}>
      <motion.div  animate={{ x: dark ? 20: 0 }}>{dark===false? <DarkIcon dark={dark} /> : <LightIcon dark={dark}/>}</motion.div>
      </button>


      <div className='fixed right-0 md:hidden flex flex-col items-end gap-5 p-5 z-20'>  
      <button onClick={()=>setshow(!show)}>
      <motion.div initial={{scale:0}} animate={{ scale: show ? 1.7 : 1.5 }}>{show? <CloseIcon dark={dark} /> : <HamburgerIcon dark={dark}/>}</motion.div>
      </button>
      </div>




      <div className='fixed right-0 justify-center h-screen md:flex flex-col gap-4 pr-10 hidden'>     
      {section==="home"?
      <button class="border-2 border-purple-800 bg-purple-800 dark:border-red-800 dark:bg-red-800 text-white font-bold p-2 rounded-full">
          <circle cx="10" cy="10" r="9" />
      </button>:
      <Link 
      to="home"
      smooth={true}
      duration={500}
      class="cursor-pointer border-2 border-purple-500 hover:bg-purple-500 dark:border-red-500 dark:hover:bg-red-500 text-white font-bold p-2 rounded-full">
        <circle cx="10" cy="10" r="9" />
      </Link>}

    {section==="about"?
      <button class="border-2 border-purple-800 bg-purple-800 dark:border-red-800 dark:bg-red-800 text-white font-bold p-2 rounded-full">
          <circle cx="10" cy="10" r="9" />
      </button>:
      <Link 
      to="about"
      smooth={true}
      duration={500}
      class="cursor-pointer border-2 border-purple-500 hover:bg-purple-500 dark:border-red-500 dark:hover:bg-red-500 text-white font-bold p-2 rounded-full">
        <circle cx="10" cy="10" r="9" />
    </Link>}

    {section==="skills"?
      <button class="border-2 border-purple-800 bg-purple-800 dark:border-red-800 dark:bg-red-800 text-white font-bold p-2 rounded-full">
          <circle cx="10" cy="10" r="9" />
      </button>:
      <Link 
      to="skills"
      smooth={true}
      duration={500}
      class="cursor-pointer border-2 border-purple-500 hover:bg-purple-500 dark:border-red-500 dark:hover:bg-red-500 text-white font-bold p-2 rounded-full">
        <circle cx="10" cy="10" r="9" />
    </Link>}

    {section==="projects"?
      <button class="border-2 border-purple-800 bg-purple-800 dark:border-red-800 dark:bg-red-800 text-white font-bold p-2 rounded-full">
          <circle cx="10" cy="10" r="9" />
      </button>:
      <Link 
      to="projects"
      smooth={true}
      duration={500}
      class="cursor-pointer border-2 border-purple-500 hover:bg-purple-500 dark:border-red-500 dark:hover:bg-red-500 text-white font-bold p-2 rounded-full">
        <circle cx="10" cy="10" r="9" />
    </Link>}

    {section==="contact"?
      <button class="border-2 border-purple-800 bg-purple-800 dark:border-red-800 dark:bg-red-800 text-white font-bold p-2 rounded-full">
          <circle cx="10" cy="10" r="9" />
      </button>:
      <Link 
      to="contact"
      smooth={true}
      duration={500}
      class="cursor-pointer border-2 border-purple-500 hover:bg-purple-500 dark:border-red-500 dark:hover:bg-red-500 text-white font-bold p-2 rounded-full">
        <circle cx="10" cy="10" r="9" />
    </Link>}
      </div>




      <AnimatePresence>    
      {show?
        <motion.div
        key="myDiv"
        initial={{ opacity: 0, x: "100%", y: "-100%" }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: "200%", y: 0 }}
        transition={{ duration: 0.2 }}  
        className='flex flex-col justify-center items-center h-screen w-screen fixed gap-4 text-2xl bg-purple-600 dark:bg-red-600'>
      
        <Link 
          to="home"
          smooth={true}
          duration={500}
          onClick={()=>setshow(!show)}
          className='cursor-pointer rounded text-left text-slate-100 hover:text-slate-400 dark:text-slate-900 dark:hover:text-slate-400 font-bold capitalize'>home</Link>       
        <Link 
          to="about"
          smooth={true}
          duration={500}
          onClick={()=>setshow(!show)}
          className='cursor-pointer rounded text-left text-slate-100 hover:text-slate-400 dark:text-slate-900 dark:hover:text-slate-400 font-bold capitalize'>about</Link>
        <Link 
          to="skills"
          smooth={true}
          duration={500}
          onClick={()=>setshow(!show)}
          className='cursor-pointer rounded text-left text-slate-100 hover:text-slate-400 dark:text-slate-900 dark:hover:text-slate-400 font-bold capitalize'>skills</Link>
        <Link 
          to="projects"
          smooth={true}
          duration={500}
          onClick={()=>setshow(!show)}
          className='cursor-pointer rounded text-left text-slate-100 hover:text-slate-400 dark:text-slate-900 dark:hover:text-slate-400 font-bold capitalize'>projects</Link>
        <Link 
          to="contact"
          smooth={true}
          duration={500}
          onClick={()=>setshow(!show)}
          className='cursor-pointer rounded text-left text-slate-100 hover:text-slate-400 dark:text-slate-900 dark:hover:text-slate-400 font-bold capitalize'>contact</Link>
        </motion.div>:
        <></>}
        </AnimatePresence>
    </>
  )
}

export default Navbar