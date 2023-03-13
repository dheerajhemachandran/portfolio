import { set } from 'firebase/database';
import {React,useState} from 'react'
import { useInView } from 'react-intersection-observer';

const Snake = ({setsection}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  if (inView) {
    setsection("snake")
  }

  return (
    <div className="flex justify-center flex-col md:flex-row items-center h-screen">
    <div className="flex flex-col ">
      <div className="flex justify-center items-center text-4xl font-bold mb-4">Game Board</div>
      <div className="grid grid-cols-10 grid-rows-6">
        {Array.from({length: 100}).map((_, i) => (
          <div
            key={i}
            className="h-6 w-6 md:h-10 md:w-10 bg-gray-300 flex justify-center items-center text-2xl font-bold"
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
    <div className="ml-4">
      <div className="text-2xl font-bold mb-2">Score</div>
      <div className="bg-gray-300 h-64 w-64 flex justify-center items-center text-4xl font-bold">0</div>
    </div>
  </div>
  )
}


export default Snake