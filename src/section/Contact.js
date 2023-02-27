import React from 'react'
import { useInView } from 'react-intersection-observer';

const Contact = ({setsection}) => {
  
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  if (inView) {
    setsection("contact")
  }

  return (
    <div className='h-screen flex justify-center items-center' id='contact' ref={ref}>Contact</div>
  )
}

export default Contact