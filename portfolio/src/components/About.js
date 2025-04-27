import React from 'react'
import AboutImg from '../assets/about-img.png'
import { FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaJs, FaReact } from 'react-icons/fa'
import { SiFirebase } from 'react-icons/si'

const About = () => {
  return (
    <section id='about' className='bg-secondery text-white py-20 md:py-32'>
      <div className='container mx-auto grid md:grid-cols-2 items-center md:justify-between px-4'>
        <div className='about-me-info'>
          <p className='pb-5'>
            <h1 className='text-3xl sm:text-4xl text-center font-[Roboto] mb-5 border-b-[5px] w-[250px] sm:w-[300px] md:w-[400px] lg:w-[700px] mx-auto border-indigo-500 pb-2'>   
              About Me
            </h1>
          </p>

          <p className='pb-5 text-base sm:text-lg md:text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent lobortis sollicitudin dui a gravida.
          </p>

          <p className='pb-5 text-sm sm:text-base md:text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent lobortis sollicitudin dui a gravida.
            Sed mollis sem quis tempus ullamcorper.
            Curabitur accumsan, metus at pellentesque lobortis, lectus dolor vulputate lectus, vitae tempor nisl tellus et nisi.
            Donec scelerisque magna urna, vulputate tempor massa volutpat ut..
          </p>
        
          <div className='skills-section'>
            <p className='pb-5'>
              <h2 className='text-xl sm:text-2xl text-center font-bold border-b-[5px] w-[200px] sm:w-[250px] md:w-[300px] lg:w-[700px] mx-auto border-indigo-500 mb-4 pb-2 lg:mb-6'>Skills</h2>
              <ul className='list-disc list-inside grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pl-4'>
      <li className='flex items-center gap-2'>
        <FaHtml5 className='text-orange-500 text-xl' />. HTML
      </li>
      <li className='flex items-center gap-2'>
        <FaCss3Alt className='text-blue-500 text-xl' />. CSS
      </li>
      <li className='flex items-center gap-2'>
        <FaGitAlt className='text-red-500 text-xl' />. Git
      </li>
      <li className='flex items-center gap-2'>
        <FaGithub className='text-gray-100 text-xl' />. Github
      </li>
      <li className='flex items-center gap-2'>
        <FaJs className='text-yellow-400 text-xl' />. JavaScript
      </li>
      <li className='flex items-center gap-2'>
        <FaReact className='text-blue-400 text-xl' />. React.js
      </li>
      <li className='flex items-center gap-3'>
        <span className='text-xl'>🔌</span>. API Integration
      </li>
      <li className='flex items-center gap-2'>
        <SiFirebase className='text-yellow-500 text-xl' />. Firebase
      </li>
    </ul>
            </p>
          </div>
        </div>

        <div className='about-img'>
          <img 
            src={AboutImg} 
            alt="coding illustration" 
            className='lgw-[80%] ml-auto' 
          />
        </div>
      </div>
    </section>
  );
}

export default About