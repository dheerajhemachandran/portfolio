import {React,useState} from 'react'
import { useInView } from 'react-intersection-observer';
import { getDatabase, push,ref,set } from 'firebase/database';
import {motion} from "framer-motion"
import { app } from '../firebase/Firbase.config';

const db=getDatabase()
const myRef = ref(db, 'questions/');
const newRef = push(myRef);

const Contact = ({setsection}) => {
  const [anonymous, setanonymous] = useState(true)
  const [content, setcontent] = useState("")
  const [name, setname] = useState("")

  
  const handlechange=(event)=>{
    setcontent(event.target.value)
  }

  const handlenamechange=(event)=>{
    setname(event.target.value)
  }

  const handlesubmit=()=>{
    set(newRef, {
      content:content,
      name:name
    });
    setname("")
    setcontent("")
  }

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  if (inView) {
    setsection("contact")
  }

  const popup={
    hidden:{
      scale:0,
      opacity:0
    },
    visible:{
      scale:1,
      opacity:1
    }
  }

  return (
    <div className='min-h-screen flex flex-col lg:flex-row gap-5 justify-evenly items-center py-10 md:px-20' id='contact' ref={ref}>
      
      <motion.div variants={popup} initial="hidden" whileInView="visible" transition={{delay:0.2}} className='flex flex-col items-center gap-5'>
      <h2 className='text-2xl lg:text-5xl text-purple-500 dark:text-red-500'>Ask me anything</h2>
      <textarea className='h-[20vh] w-full rounded p-2 text-xl border-4 border-purple-400  bg-slate-200 dark:border-red-400 outline-0' placeholder='type your message here' value={content} onChange={handlechange}/>
      <motion.div initial={{x:-500,opacity:0,scale:0}} animate={{x:anonymous? 0:-500,opacity:anonymous?1:0,scale:anonymous?1:0}}>
          <input className='h-12 rounded text-xl font-bold p-3 border-4 border-purple-400 bg-slate-200 dark:border-red-400 outline-0' placeholder='give your name' value={name} onChange={handlenamechange}/>
      </motion.div>
      <div className='flex flex-col md:flex-row justify-start items-center gap-5'>
        <button className='z-40 btn text-xl bg-purple-500 hover:bg-purple-700 dark:bg-red-500 dark:hover:bg-red-700 rounded p-2 text-slate-200 font-bold' onClick={()=>setanonymous(!anonymous)}>{anonymous?"Ask anonymously":"Give your name"}</button>
        <button className='z-40 btn text-xl bg-purple-500 hover:bg-purple-700 dark:bg-red-500 dark:hover:bg-red-700 rounded p-2 text-slate-200 font-bold' onClick={handlesubmit}>submit</button>
      </div>
      </motion.div>

      <div className='flex lg:flex-col gap-5'>
        <motion.a variants={popup} initial="hidden" whileInView="visible" transition={{delay:0.3}} className='bg-purple-500 dark:bg-red-500 hover:bg-purple-700 hover:dark:bg-red-700 p-2 rounded' href='https://github.com/dheerajhemachandran' target="_blank">
        <img className='h-10 w-10 md:h-12 md:w-12' src='https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-1/512/github-square-512.png'/>
        </motion.a>
        <motion.a variants={popup} initial="hidden" whileInView="visible" transition={{delay:0.5}} className='bg-purple-500 dark:bg-red-500 hover:bg-purple-700 hover:dark:bg-red-700 p-2 rounded' href='https://twitter.com/Dheeraj_chan' target="_blank">
        <img className='h-10 w-10 md:h-12 md:w-12' src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-512.png'/>
        </motion.a>
        <motion.a variants={popup} initial="hidden" whileInView="visible" transition={{delay:0.7}} className='bg-purple-500 dark:bg-red-500 hover:bg-purple-700 hover:dark:bg-red-700 p-2 rounded' href='https://www.linkedin.com/in/dheerajh/n' target="_blank">
        <img className='h-10 w-10 md:h-12 md:w-12' src='https://cdn3.iconfinder.com/data/icons/capsocial-round/500/linkedin-512.png'/>
        </motion.a>
        {/* <motion.a variants={popup} initial="hidden" whileInView="visible" transition={{delay:0.5}} className=' href='https://github.com/dheerajhemachandran' target="_blank">
        <img className='h-10 w-10 md:h-12 md:w-12' src='https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-1/512/github-square-512.png'/>
        </motion.a> */}
      </div>
    </div>
  )
}

export default Contact