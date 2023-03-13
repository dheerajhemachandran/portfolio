import React from 'react'
import { useInView } from 'react-intersection-observer';
import { doc, getDoc } from "firebase/firestore";
import { useEffect,useState } from 'react';
import { db } from '../firebase/Firbase.config';
import Project from '../component/Project';

const Projects = ({setsection}) => {
  const [data, setdata] = useState([])
  
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  if (inView) {
    setsection("projects")
  }

  const getdata= async()=>{
    const docRef = doc(db, "projects", "3CvCnIAMuJ8CN7QHxgWH");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      setdata(docSnap.data().data);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  useEffect(() => {
    getdata()
  }, [])
  

  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-20 my-40' ref={ref} id="projects">
      <div className='text-center font-bold text-lg md:text-2xl lg:text-4xl text-purple-500 dark:text-red-500'>My projects</div>
    <div class="flex justify-center items-center">
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20">
        {data.map((details,index)=>{
          return(<Project key={index} details={details}/>)
        })}
      </div>
    </div>
    </div>
  )
}

export default Projects