import React from 'react';
import { FaLinkedin, FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className='bg-primary py-32' id="contact">
      <div className='text-center md:w-[60%] mx-auto bg-primary text-white'>
        <h2 className='text-3xl md:text-4xl text-center font-bold mb-5 border-b-[5px] w-[180px] md:w-[200px] mx-auto border-indigo-600 pb-4'>   
          Contact Me
        </h2>
       
        <p className='mb-8 text-gray-300 text-base sm:text-lg'>
  Feel free to reach out if you have any questions, opportunities, or just want to connect!  
  I'm always excited to collaborate, learn, and take on new challenges.  
  Let's build something amazing together.
</p>

<form 
  action="https://getform.io/f/bxowqega" 
  method="POST"
  className="flex flex-col gap-4 max-w-lg mx-auto mt-8"
>
  <input 
    type="text" 
    name="name" 
    placeholder="Your Name" 
    required
    className="p-3 rounded bg-gray-800 text-white focus:outline-none"
  />
  <input 
    type="email" 
    name="email" 
    placeholder="Your Email" 
    required
    className="p-3 rounded bg-gray-800 text-white focus:outline-none"
  />
  <textarea 
    name="message" 
    placeholder="Your Message" 
    required
    className="p-3 rounded bg-gray-800 text-white focus:outline-none h-40"
  ></textarea>
  <button 
    type="submit" 
    className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded"
  >
    Send Message
  </button>
</form>
<br/> OR
<br/><br/>
        <div className='text-center mb-5'>
          <h3 className='text-2xl font-bold mb-2'>Connect with me on:</h3>
          </div>

        <div className='flex justify-center space-x-20'>
          <a 
            href="https://www.linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className='text-4xl hover:text-indigo-300 transition-colors flex justify-start-items-center'
            aria-label="LinkedIn"
          >LinkedIn
          <br/>
            <FaLinkedin />
          </a>
          <a 
            href="https://wa.me/7354075234" 
            target="_blank" 
            rel="noopener noreferrer"
            className='text-4xl hover:text-indigo-300 transition-colors  flex justify-start-items-center'
            aria-label="WhatsApp"
          >WhatsApp
            <FaWhatsapp />
          </a>
      
          <a 
            href="https://github.com/Geetanjali098" 
            target="_blank" 
            rel="noopener noreferrer"
            className='text-4xl hover:text-indigo-300 transition-colors  flex justify-start-items-center'
            aria-label="GitHub"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://github.com/Geetanjali098', '_blank');
            }}
          >GitHub
            <FaGithub />
          </a>

          <a 
      href="mailto:geetanjalinishad0109@gmail.com ?subject=Let's Connect&body=Hi Geetanjali, I would like to discuss..."
      className='text-4xl hover:text-indigo-300 transition-colors flex items-center justify-center gap-2'
      aria-label="Send Email"
    >
      <FaEnvelope />
      <span className="text-3xl">Email Me</span>
    </a>      
        </div>
        <br/><br/>
        <div className='text-center mb-5'>
          <p className='text-xl font-[Roboto] mb-2 justify-center hover:text-indigo-300 transition-colors flex items-center'> 
          "I am always open to new opportunities that align with my expertise in web development, problem-solving, and technical innovation.
           If you have a project or collaboration in mind, feel free to connect with me!"
          </p>
          </div>
      </div>
    </section>
  );
}

export default Contact;