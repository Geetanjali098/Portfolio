import React, { useState ,useRef } from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Projects = () => {
  // State for modal (if using modal approach)
  const [activeProject, setActiveProject] = useState(null);
  const [zoomedImage,setZoomedImage] = useState(null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  // Project data array for cleaner code
  const projects = [
    {
      id: 1,
      title: "Netflix Clone",
      image: project1,
      description: "A Netflix clone built with React and TMDB API for browsing trending movies & different genres shows trailers.",
      details:`Users can explore an extensive library of movies and TV shows, watch trailers, and engage with the intuitive interface.
        The app utilizes the TMDB API to fetch real-time data, ensuring users have access to the latest content. 
      The application uses Firebase to provide secure user authentication, allowing users to sign up, log in, and manage personalized profiles.
         It also ensures a smooth experience across different devices with its responsive design.`,
       tags: ["React", "Firebase", "TMDB API"],
      link: ["https://github.com/Geetanjali098/Netflix-clone.git"]
    },
    {
      id: 2,
      title: "Google Gemini Chatbot",
      image: project2,
      description: "A chat interface with Gemini AI API, supporting text, files, and themes.",
      details:`This chat interface lets users interact with the Gemini AI model by sending messages, uploading files, and viewing responses with a typing effect.
       The interface is designed to be user-friendly, with a responsive layout that adapts to different screen sizes.
       Users can easily switch between light and dark themes, enhancing the overall user experience.
       The chat history is stored in local storage, allowing users to revisit previous conversations.`,
      tags: ["Gemini API", "Javascript", "HTML/CSS"],
      link: ["https://github.com/Geetanjali098/Gemini-chatbot.git"],
    },
    {
      id: 3,
      title: "Mars Rover",
      image: project3,
      description: "The simulation guides rovers to navigate safely by enforcing grid limits, avoiding obstacles, and preventing collisions while executing movement commands from a remote source.",
      details: `Handle rover navigation (turning/moving).
      Detect collisions with obstacles and other rovers.
      Track each rover's travel history.
      Execute user-defined command sequences.`,
      tags: ["JavaScript", "Simulation"],
      link: ["https://github.com/Geetanjali098/Mars-Rover.git"],
    }
  ];
// Function to handle project detail view
  // This function is called when the user clicks on "View Details" button or image
  const handleViewDetails = (projectId, e) => {
    e.preventDefault();
    
    // Calculate click position relative to image
    if (e.target.tagName === 'IMG') {
      const rect = e.target.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setImagePosition({ x, y });
    } else {
      setImagePosition({ x: 50, y: 50 });
    }
    //open modal with project details
    setActiveProject(projects.find(p => p.id === projectId));
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  
  const handleImageClick = (image) => {
    setZoomedImage(image);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };
 

  return (
    <section id="projects" className='bg-primary text-white py-20 md:py-32'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-2 items-center md:justify-between mb-12'>
          <div className='about-info mb-5'>
            <h2 className='text-3xl md:text-4xl font-bold mb-5 border-b-[5px] w-[150px] md:w-[180px] border-indigo-500 pb-2'>   
              Projects
            </h2>
            <p className='pb-5 text-gray-300'>
              Here are some of my featured projects. Click "View Details" to learn more about each implementation.
            </p>
          </div>
          <div className='projects-img'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className='relative group overflow-hidden rounded-xl shadow-lg
               hover:shadow-2xl transition-all duration-300 bg-gray-900'
            >
              <div className='block h-full'>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className='w-full h-48 md:h-64 object-cover rounded-t-xl transition-transform 
                  duration-500 group-hover:scale-110 cursor-zoom-in'
                  onClick={() => handleImageClick(project.image)}                  
                />
                
                <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4'>
                  <div className='transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300'>
                    <h3 className='text-xl font-bold mb-1'>{project.title}</h3>
                    <p className='text-gray-300 text-sm mb-3'>{project.description}</p>
                    
             
                    <div className='flex flex-wrap gap-2 mb-3'>
                      {project.tags.map((tag, i) => (
                        <span key={i} className='text-xs bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded'>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={(e) => handleViewDetails(project.id, e)}
                      className='text-indigo-400 hover:text-indigo-300 font-semibold text-sm flex items-center group'                   
                    >
                      View Details
                      <span className='ml-1 group-hover:translate-x-1 transition-transform'>
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for project details */}
        {activeProject && (
          <div className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4'>
            <div 
              className='bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'
              onClick={(e) => e.stopPropagation()}
            >
              <div className='relative overflow-hidden rounded-t-xl'>
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  className='w-full h-48 md:h-64 object-cover rounded-t-xl transition-transform duration-500'

                  style={{
                    transformOrigin: `${imagePosition.x}% ${imagePosition.y}%`,
                    transform: 'scale(1.05)',
                  }}
                  onLoad={() => {
                    // Reset transform after initial zoom
                    setTimeout(() => {
                      if (imageRef.current) {
                        imageRef.current.style.transform = 'scale(1)';
                      }
                    }, 50);
                  }}
                />
                <button 
                  onClick={closeModal}
                  className='absolute top-4 right-4 bg-gray-900/80
                   text-white p-2 rounded-full hover:bg-gray-800 transition'
                >
                  ✕
                </button>
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-bold mb-3'>{activeProject.title}</h3>
                <ul className='text-gray-300 mb-4 list-disc list-inside space-y-2 font-[Roboto]'>
  {activeProject.details.split('\n').map((point, idx) => (
    <li key={idx}>{point.trim()}</li>
  ))}
</ul>

                <div className='flex flex-wrap gap-2 mb-4'>
                  {activeProject.tags.map((tag, i) => (
                    <span key={i} className='bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full text-sm'>
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={activeProject.link} 
                  className='inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold'
                >
                  Visit Project
                  <span className='ml-1 group-hover:translate-x-1 transition-transform'>
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        )}
  
          {/* Overlay to close modal when clicking outside */}
        {/* Zoomed image modal */}
        {zoomedImage && (
        <div className="image-zoom-modal" onClick={closeZoom}>
          <div className="zoom-modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={zoomedImage} 
              alt="Zoomed content" 
              className="zoomed-image"
            />
            <button 
              className="zoom-close-btn"
              onClick={closeZoom}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      </div>
    </section>
  );          
}

export default Projects;