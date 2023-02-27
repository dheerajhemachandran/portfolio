import React from 'react'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';

const Home = ({setsection}) => {

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  if (inView) {
    setsection("home")
  }
  return (
    <div className='h-screen flex justify-center items-center' id='home' ref={ref}>
      <div className="text-center dark:text-slate-200 text-gray-700">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight px-4">
          Hola!! My name is <span className='text-purple-500 dark:text-red-500'>Dheeraj</span>
        </h1>
        <p className="text-3xl md:text-4xl lg:text-5xl mb-8">
          Web developer
        </p>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer bg-purple-500 dark:bg-red-500 dark:text-slate-900 text-slate-200 py-3 px-4 rounded-lg font-semibold uppercase tracking-wide hover:bg-purple-600 dark:hover:bg-red-600 mr-4">
          About
        </Link>
        <a href="#" className="border-2 border-purple-600 dark:border-red-600 text-purple-500 dark:text-red-600 hover:text-slate-200 hover:dark:text-slate-900 py-3 px-4 rounded-lg font-semibold uppercase tracking-wide hover:bg-purple-600 dark:hover:bg-red-600">
          Resume
        </a>
      </div>


    </div>
  )
}

export default Home