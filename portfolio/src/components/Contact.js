import React from 'react';
import { FaLinkedin, FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className='bg-primary py-32' id="contact">
      <div className='text-center md:w-[60%] mx-auto bg-primary text-white'>
        <h2 className='text-3xl md:text-4xl text-center font-bold mb-5 border-b-[5px] w-[180px] md:w-[200px] mx-auto border-indigo-600 pb-4'>   
          Contact Me
        </h2>
        <p className='mb-8'> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent lobortis sollicitudin dui a gravida.
          Sed mollis sem quis tempus ullamcorper.
        </p>

        <div className='py-2 mb-8'>
          <div className='flex items-center justify-center mb-4'>
            <FaEnvelope className='text-2xl mr-2' />
            <span className='text-2xl font-bold mr-2'>Email:</span>
            <a href="mailto:geetanjalinishad0109@gmail.com" className='hover:text-indigo-300 transition-colors'>
              geetanjalinishad0109@gmail.com
            </a>
          </div>
        </div>

        <div className='flex justify-center space-x-6'>
          <a 
            href="https://www.linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className='text-4xl hover:text-indigo-300 transition-colors'
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://wa.me/7354075234" 
            target="_blank" 
            rel="noopener noreferrer"
            className='text-4xl hover:text-indigo-300 transition-colors'
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
      
          <a 
            href="https://github.com/Geetanjali098" 
            target="_blank" 
            rel="noopener noreferrer"
            className='text-4xl hover:text-indigo-300 transition-colors'
            aria-label="GitHub"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://github.com/Geetanjali098', '_blank');
            }}
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;