import React, { useState, useEffect } from 'react';
import Project from '../components/Project'
import { database } from '../data/firebase.configure';
import { ref, onValue} from "firebase/database";

const Projects = () => {
  const [data, setData] = useState(null);

  useEffect(()=>{
    const starCountRef = ref(database, 'projects/');
    onValue(starCountRef, (snapshot) => {
      setData((snapshot.val()))
      console.log(data)
    });
  },[])

  if(data)
  {
   console.log(data[1]["link"])
  }
  
  return (
    <div className='py-10'>
      <div className="text-2xl lg:text-5xl mb-10 text-red-500 text-center font-bold">My Projects</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 px-2">
        {data?
        <>
        {data.map((item)=>{
           return <Project project={item}/>
        })}</>
        :<div className='mx-auto text-textbase'>
        {"loading projects from firebase realtime database..."}
        </div>}
        </div>

    </div>
  )
}

export default Projects
