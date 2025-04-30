import React from 'react'
import Heroimg from '../assets/hero-img.png'

const Hero = () => {
  return (
    <section className='bg-primary text-white py-32'>
        <div className='container mx-auto grid md:grid-cols-2 items-center md: justify-between'>
        
        <div className='hero-info'>
            <h1 className=' text-2xl lg:text-6xl'>   
              Hi<br/> I am <span className='text-accent'>Geetanjali </span>Nishad<br/>
              Frontend Developer
            </h1>
         
    <p className='py-6 text-sm tracking-wider'> I am a detail-oriented frontend developer skilled in Javascript, React.js,API and Firebase, 
    creating responsive web application.</p>
    <button
     onClick={() => {
      const link = document.createElement('a');
      link.href = 'https://drive.google.com/file/d/1M98tjk4kmEo6jmNg1VzDaaW9Dp-nZ_dc/view?usp=sharing'; // Replace with the actual path to your resume file
      link.target = '_blank'; // Open in a new tab
      link.rel = 'noopener noreferrer'; // Security measure      
      link.download = 'Geetanjali_Nishad_Resume.pdf'; // Name of the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }}
     className='btn bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent'>
      Resume
      </button>
    </div>

        <div className='hero-img'>
            <img src={Heroimg} alt="coding illustration" className='lgw-[80%] ml-auto' />
        </div>
    </div>
    </section>
  );
}

export default Hero