import React from 'react'
import AboutImg from '../assets/about-img.png'
import { FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaJs, FaReact } from 'react-icons/fa'
import { SiFirebase } from 'react-icons/si'

const About = () => {
  return (
    <section id='about' className='bg-secondery text-white py-20 md:py-32'>
      <div className='container mx-auto grid md:grid-cols-2 items-center md:justify-between px-4'>
        <div className='about-me-info'>
          <h1 className='text-3xl sm:text-4xl text-center font-[Roboto] mb-5 border-b-[5px] w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] mx-auto border-indigo-500 pb-2'>About Me</h1>

          <p className='pb-5 text-base sm:text-lg md:text-base'>
            Hi, I'm <strong>Geetanjali Nishad</strong> — a passionate Frontend Developer specializing in building responsive, user-friendly web applications.
            I enjoy turning complex problems into simple, beautiful, and intuitive designs using modern frontend technologies like <strong>React.js, JavaScript, HTML5, CSS3, and Firebase</strong>.
            <br /><br/>
            After pursuing studies in Information Technology, I shifted my focus to full-time practical learning, completing real-world simulations with Walmart USA and certified courses from Meta.
            I love continuous learning, teamwork, and bringing new ideas to life through code.I'm currently looking for new opportunities to contribute and innovate.
          </p>

          {/* Skills Section */}
          <div className='skills-section'>
            <h2 className='text-xl sm:text-2xl text-center font-bold border-b-[5px] w-[200px] sm:w-[250px] md:w-[300px] lg:w-[500px] mx-auto border-indigo-500 mb-4 pb-2 lg:mb-6'>Tech Stack</h2>
            <ul className='list-disc list-inside grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pl-4'>
              <li className='flex items-center gap-2'><FaHtml5 className='text-orange-500 text-xl' /> HTML5</li>
              <li className='flex items-center gap-2'><FaCss3Alt className='text-blue-500 text-xl' /> CSS3</li>
              <li className='flex items-center gap-2'><FaGitAlt className='text-red-500 text-xl' /> Git</li>
              <li className='flex items-center gap-2'><FaGithub className='text-gray-100 text-xl' /> GitHub</li>
              <li className='flex items-center gap-2'><FaJs className='text-yellow-400 text-xl' /> JavaScript</li>
              <li className='flex items-center gap-2'><FaReact className='text-blue-400 text-xl' /> React.js</li>
              <li className='flex items-center gap-3'><span className='text-xl'>🔌</span> API Integration</li>
              <li className='flex items-center gap-2'><SiFirebase className='text-yellow-500 text-xl' /> Firebase</li>
            </ul>
          </div>

          {/* Education Section */}
          <div className='education-section mt-10'>
            <h2 className='text-xl sm:text-2xl text-center font-bold border-b-[5px] w-[200px] sm:w-[250px] md:w-[300px] lg:w-[500px] mx-auto border-indigo-500 mb-4 pb-2 lg:mb-6'>Education</h2>
            <div className='text-center'>
              <p className='text-gray-300 text-base sm:text-lg mb-2'><strong>B.Tech — Information Technology(2024)</strong></p>
              <p className='text-gray-400 text-sm sm:text-base'>Pursued academic studies before transitioning to full-time frontend development.</p>
            </div>
          </div>

          {/* Experience Section */}
          <div className='experience-section mt-10'>
            <h2 className='text-xl sm:text-2xl text-center font-bold border-b-[5px] w-[200px] sm:w-[250px] md:w-[300px] lg:w-[500px] mx-auto border-indigo-500 mb-4 pb-2 lg:mb-6'>Experience</h2>
            <div className='text-center'>
              <p className='text-gray-300 text-base sm:text-lg mb-2'><strong>Frontend Developer — Personal Projects</strong></p>
              <p className='text-gray-400 text-sm sm:text-base'>
                Built responsive web applications like Netflix Clone, AI Chatbot, and Mars Rover Simulation using React.js, JavaScript, and APIs.
              </p>

              <p className='text-gray-300 text-base sm:text-lg mt-6 mb-2'><strong>Software Engineering Virtual Internship — Walmart USA (Forage)</strong></p>
              <p className='text-gray-400 text-sm sm:text-base'>
                Completed projects in data structures, database design, and software architecture as part of an industry-based simulation program.
              </p>
            </div>
          </div>
        </div>

        <div className='about-img'>
          <img src={AboutImg} alt="coding illustration" className='lgw-[80%] ml-auto' />
        </div>
      </div>
    </section>
  );
}

export default About
