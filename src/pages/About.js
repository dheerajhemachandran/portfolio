import React from 'react'
import {useEffect, useState} from 'react';
import Skill from '../components/Skill';
import { Link } from 'react-router-dom';

const About = () => {

  const [quote, setquote] = useState("")
  const [author, setauthor] = useState("")
  const [refresh, setrefresh] = useState(0)

  const skills=[
  {name:"Reactjs",link:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/180px-React-icon.svg.png"},
  {name:"Nodejs",link:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png?20170401104355"},
  {name:"Tailwind css",link:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/900px-Tailwind_CSS_Logo.svg.png?20211001194333"},
  {name:"Firebase",link:"https://img.icons8.com/color/512/google-firebase-console.png"},
  {name:"Python",link:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/172px-Python-logo-notext.svg.png?20220821155029"},
  {name:"Tensorflow",link:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/115px-Tensorflow_logo.svg.png?20170429160244"},
  {name:"Git",link:"https://seeklogo.com/images/G/git-logo-CD8D6F1C09-seeklogo.com.png"},
  {name:"Blender",link:"https://seeklogo.com/images/B/blender-logo-91B66CA31F-seeklogo.com.png"}]

  useEffect(() => {
    setquote("loading....")
    setauthor("")
    fetch('https://api.quotable.io/random').then(res => res.json())
      .then(quote => {
        setauthor("~ "+quote.author)
        setquote(quote.content)
      })

  }, [refresh])

  return (
    <div id="about" className='py-32 px-3'>

      <div className="bg-base flex justify-center flex-col gap-3 px-4 sm:mx-3 lg:mx-40 lg: pt-4 rounded">
      <button className='btn text-textbase mx-auto' onClick={()=>setrefresh(refresh+1)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
        </button>
      <h1 className="text-center text-textbase">"{quote}"</h1>
        <p className="text-center text-red-500">{author}</p> 
        <p className='text-right text-sm'>made with quotable api</p>
     </div>

     <div className='flex flex-col lg:flex-row lg:items-center my-20 lg:my-40 sm:px-3 lg:px-40 gap-2 lg:gap-4'>
      <div className="lg:-rotate-90 lg:text-7xl text-3xl font-bold text-center text-red-500 mb-4 lg:mb-0">About</div>
      <div className='text-textbase w-full'>
      Hi there! My name is <span className="text-red-500">Dheeraj</span> and I'm a <span className="text-red-500">web developer</span> and <span className="text-red-500">AI</span> enthusiast. I have experience with <span className="text-red-500">ReactJS</span> and am currently learning <span className="text-red-500">TensorFlow</span>. In addition to my interest in technology, I also enjoy learning 3D design and creating digital art.
      I've always been fascinated by the potential of AI and the web to change the world, and I love exploring new technologies and ways to apply them to real-world problems. In my free time, I enjoy <span className="text-red-500">gaming</span>.
      I have worked on several projects in the past. I am always looking for new opportunities to work on interesting and challenging projects.
      <br />
      <Link to="/project" className="btn mt-5 bg-red-500 hover:bg-red-600 text-white" >Projects</Link>
      </div>
      </div>

     <div className="my-20 lg:my-40 px-5">
      <div className="text-center text-2xl lg:text-5xl text-red-500 mb-5 font-bold">Skills</div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:gird-cols-5 gap-5">
        {skills.map((skill)=>
         <Skill link={skill.link} name={skill.name}/>
        )}
        
      </div>
     </div>

    </div>
  )
}

export default About
