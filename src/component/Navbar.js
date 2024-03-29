import {React,useState} from 'react'
import { motion ,AnimatePresence} from "framer-motion";
import { HamburgerIcon, CloseIcon, DarkIcon, LightIcon } from "./Icons";
import { Link } from 'react-scroll';

const Navbar = ({section,dark,setdark}) => {
  const [show, setshow] = useState(false)
  return (
    <>

      
      <motion.button initial={{x:-200}} animate={{x:0}} transition={{delay:0.5}} className='fixed bottom-0 left-0 flex items-center m-5 p-2 z-40 bg-gray-900 dark:bg-slate-200 w-[60px] rounded-3xl' onClick={()=>setdark(!dark)}>
      <motion.div  animate={{ x: dark ? 20: 0 }}>{dark===false? <DarkIcon dark={dark} /> : <LightIcon dark={dark}/>}</motion.div>
      </motion.button>


      <motion.div initial={{x:200}} animate={{x:0}} transition={{delay:0.5}} className='fixed right-0 md:hidden flex flex-col items-end gap-5 p-7 z-40'>  
      <button onClick={()=>setshow(!show)}>
      <motion.div initial={{scale:0}} animate={{ scale: show ? 1.7 : 1.5 }}>{show? <CloseIcon dark={dark} /> : <HamburgerIcon dark={dark}/>}</motion.div>
      </button>
      </motion.div>




      <motion.div initial={{x:200}} animate={{x:0}} transition={{delay:0.5}} className='fixed right-0 justify-center h-screen md:flex flex-col gap-4 pr-20 hidden z-40'>     
      {section==="home"?
      <Link 
      to="home"
      smooth={true}
      duration={500}
      class="border-2 cursor-pointer border-purple-800 bg-purple-800 dark:border-red-800 dark:bg-red-800 text-white font-bold p-2 rounded-full">
          <circle cx="10" cy="10" r="9" />
      </Link>:
      <Link 
      to="home"
      smooth={true}
      duration={500}
      class="cursor-pointer border-2 border-purple-500 hover:bg-purple-500 dark:border-red-500 dark:hover:bg-red-500 text-white font-bold p-2 rounded-full">
        <circle cx="10" cy="10" r="9" />
      </Link>}

    {section==="about"?
       <Link 
       to="about"
       smooth={true}
       duration={500}
       class="border-2 border-purple-800 cursor-pointer bg-purple-800 dark:border-red-800 dark:bg-red-800 text-white font-bold p-2 rounded-full">
          <circle cx="10" cy="10" r="9" />
      </Link>:
      <Link 
      to="about"
      smooth={true}
      duration={500}
      class="cursor-pointer border-2 border-purple-500 hover:bg-purple-500 dark:border-red-500 dark:hover:bg-red-500 text-white font-bold p-2 rounded-full">
        <circle cx="10" cy="10" r="9" />
    </Link>}

    {section==="snake"?
       <Link 
       to="snake"
       smooth={true}
       duration={500}
       class="border-2 border-purple-800 cursor-pointer bg-purple-800 dark:border-red-800 dark:bg-red-800 text-white font-bold p-2 rounded-full">
          <circle cx="10" cy="10" r="9" />
      </Link>:
      <Link 
      to="snake"
      smooth={true}
      duration={500}
      class="cursor-pointer border-2 border-purple-500 hover:bg-purple-500 dark:border-red-500 dark:hover:bg-red-500 text-white font-bold p-2 rounded-full">
        <circle cx="10" cy="10" r="9" />
    </Link>}

    {section==="skills"?
      <Link 
      to="skills"
      smooth={true}
      duration={500}
       class="border-2 cursor-pointer border-purple-800 bg-purple-800 dark:border-red-800 dark:bg-red-800 text-white font-bold p-2 rounded-full">
          <circle cx="10" cy="10" r="9" />
      </Link>:
      <Link 
      to="skills"
      smooth={true}
      duration={500}
      class="cursor-pointer border-2 border-purple-500 hover:bg-purple-500 dark:border-red-500 dark:hover:bg-red-500 text-white font-bold p-2 rounded-full">
        <circle cx="10" cy="10" r="9" />
    </Link>}

    {section==="projects"?
     <Link 
     to="projects"
     smooth={true}
     duration={500}
     class="cursor-pointer border-2 border-purple-800 bg-purple-800 dark:border-red-800 dark:bg-red-800 text-white font-bold p-2 rounded-full">
          <circle cx="10" cy="10" r="9" />
      </Link>:
      <Link 
      to="projects"
      smooth={true}
      duration={500}
      class="cursor-pointer border-2 border-purple-500 hover:bg-purple-500 dark:border-red-500 dark:hover:bg-red-500 text-white font-bold p-2 rounded-full">
        <circle cx="10" cy="10" r="9" />
    </Link>}

    {section==="contact"?
      <Link 
      to="contact"
      smooth={true}
      duration={500}
       class="cursor-pointer border-2 border-purple-800 bg-purple-800 dark:border-red-800 dark:bg-red-800 text-white font-bold p-2 rounded-full">
          <circle cx="10" cy="10" r="9" />
      </Link>:
      <Link 
      to="contact"
      smooth={true}
      duration={500}
      class="cursor-pointer border-2 border-purple-500 hover:bg-purple-500 dark:border-red-500 dark:hover:bg-red-500 text-white font-bold p-2 rounded-full">
        <circle cx="10" cy="10" r="9" />
    </Link>}
      </motion.div>




      <AnimatePresence>    
      {show?
        <motion.div
        key="myDiv"
        initial={{ opacity: 0, x: "100%", y: "-100%" }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: "200%", y: 0 }}
        transition={{ duration: 0.2 }}  
        className='flex flex-col justify-center items-center h-screen w-screen fixed gap-4 text-2xl bg-purple-600 dark:bg-red-600 z-20'>
      
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
          to="snake"
          smooth={true}
          duration={500}
          onClick={()=>setshow(!show)}
          className='cursor-pointer rounded text-left text-slate-100 hover:text-slate-400 dark:text-slate-900 dark:hover:text-slate-400 font-bold capitalize'>snake</Link>
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