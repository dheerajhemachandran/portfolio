import React from 'react'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';

const About = ({setsection}) => {

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  if (inView) {
    setsection("about")
  }

  return (
    <div className='lg:h-screen flex justify-center items-center' id='about' ref={ref}>
        <section class="dark:text-slate-200 text-gray-700 py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-col gap-2 lg:gap-20 lg:flex-row items-center justify-between">
    <div class="mt-10 lg:mt-0 mb-4">
        <img src="https://via.placeholder.com/500x500" alt="Product" class="w-full md:w-auto lg:max-w-none"/>
      </div>
      <div class="text-center lg:text-left">
        <div className='text-lg md:text-xl lg:text-4xl text-purple-500 dark:text-red-500 font-extrabold mb-2'>About me</div>
        <p class="md:text-lg lg:text-xl mb-8">
        I'm a web developer with experience in creating dynamic and engaging websites. I have a passion for technology and love to stay up-to-date with the latest trends and techniques in the field.
        Currently, I am also learning data science to expand my skills and knowledge in the area. I am excited about the endless possibilities that data science offers and look forward to incorporating this new knowledge into my web development work.
        </p>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          class="bg-purple-500 dark:bg-red-500 text-white dark:text-slate-200 py-3 px-4 rounded-lg font-semibold uppercase tracking-wide hover:bg-purple-600 dark:hover:bg-red-600">
          My projects
        </Link>
      </div>
      
    </div>
  </div>
</section>

    </div>
  )
}

export default About