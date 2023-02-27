import React from 'react'
import { useInView } from 'react-intersection-observer';

const Skills = ({setsection}) => {

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  if (inView) {
    setsection("skills")
  }

  return (
    <div className='lg:h-screen my-20 lg:my-2 flex flex-col gap-10 justify-center items-center' id='skills' ref={ref}>
      <div className='font-bold text-lg md:text-2xl lg:text-4xl text-purple-500 dark:text-red-500'>My Skills</div>
      <div class="container mx-auto py-8">
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
    <div class="dark:text-slate-200 text-gray-900 text-center">
      <i class="fab fa-react text-5xl mb-4"></i>
      <h2 class="text-lg font-semibold mb-2">ReactJS</h2>
    </div>
    <div class="dark:text-slate-200 text-gray-900 text-center">
      <i class="fab fa-node-js text-5xl mb-4"></i>
      <h2 class="text-lg font-semibold mb-2">NodeJS</h2>
    </div>
    <div class="dark:text-slate-200 text-gray-900 text-center">
      <i class="fab fa-css3-alt text-5xl mb-4"></i>
      <h2 class="text-lg font-semibold mb-2">TailwindCSS</h2>
    </div>
    <div class="dark:text-slate-200 text-gray-900 text-center">
      <i class="fas fa-database text-5xl mb-4"></i>
      <h2 class="text-lg font-semibold mb-2">Firebase</h2>
    </div>
    <div class="dark:text-slate-200 text-gray-900 text-center">
      <i class="fas fa-database text-5xl mb-4"></i>
      <h2 class="text-lg font-semibold mb-2">MongoDB</h2>
    </div>
    <div class="dark:text-slate-200 text-gray-900 text-center">
      <i class="fas fa-database text-5xl mb-4"></i>
      <h2 class="text-lg font-semibold mb-2">MySQL</h2>
    </div>
    <div class="dark:text-slate-200 text-gray-900 text-center">
      <i class="fab fa-python text-5xl mb-4"></i>
      <h2 class="text-lg font-semibold mb-2">Python</h2>
    </div>
    <div class="dark:text-slate-200 text-gray-900 text-center">
      <i class="fab fa-java text-5xl mb-4"></i>
      <h2 class="text-lg font-semibold mb-2">Java</h2>
    </div>
  </div>
</div>

    </div>
  )
}

export default Skills