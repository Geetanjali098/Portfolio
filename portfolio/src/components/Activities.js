import React, { useState } from 'react'
import activitie1 from '../assets/activitie1.png'
import activitie2 from '../assets/activitie2.png'

const Activities = () => {
  const [activeActivity, setActiveActivity] = useState(null);

  const activities = [
    {
      id: 1,
      title: "Walmart USA Advanced Software Engineering Virtual Experience Program on Forage - March 2025",
      image: activitie1,
      description: "Completed the Advanced Software Engineering Job Simulation where I solved technical projects for a variety of teams at Walmart.",
      details: `Developed a novel version of a heap data structure in Java for Walmart's shipping department, showcasing strong problem-solving and algorithmic skills.
      Designed a UML class diagram for a data processor, considering different operating modes and database connections.
      Created an entity relationship diagram to design a new database accounting for all requirements provided by Walmart's pet department.
      Insert data into an SQLite database.
      Writing a Python script to read rows from spreadsheets, extract relevant data, format it for the database, and insert it into the database`,
      tags: ["Data Mining", "Data Structure", "Java", "Python", "Relational Database", "SQL", "Software Architecture"],
      link: "https://github.com/Geetanjali098/walmart-project.git",
    },
    {
      id: 2,
      title: "Certifications",
      image: activitie2,
      description: "I've completed Introduction to Front-End Development, an online course authorized by Meta and offered through Coursera.",
      details: `"Introduction to Front-End Development" is an online non-credit course by Meta, offered through Coursera.
      Covers essential web technologies like HTML, CSS, and JavaScript, helping learners build responsive and interactive web interfaces.
      Introduces front-end frameworks, version control with Git/GitHub, and best practices in UI/UX design.`,
      tags: ["Web Development Tool", "Git & GitHub", "HTML,CSS & JavaScript", "User Interface", "React(Framework)"],
      link: "https://coursera.org/verify/DM8RKRFJXNC9",
    },
  ];

  const handleViewDetails = (activityId, e) => {
    e.preventDefault();
    setActiveActivity(activities.find(a => a.id === activityId));
  };

  const closeModal = () => {
    setActiveActivity(null);
  };

  return (
    <section id="activities" className='bg-secondery text-white py-12 md:py-24 lg:py-32'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between mb-10 md:mb-16 gap-6'>
          <div className='flex-1'>
            <h2 className='text-3xl sm:text-4xl font-bold mb-4 border-b-[5px] w-[180px] border-indigo-500 pb-2'>   
              Activities
            </h2>
            <p className='text-gray-300 text-base sm:text-lg'>
              Here are some of my professional activities and certifications. Each represents my commitment to continuous learning and skill development in the tech industry.
            </p>
          </div>
        </div>

        {/* Activities Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
          {activities.map((activity) => (
            <div 
              key={activity.id} 
              className='relative group overflow-hidden rounded-lg lg:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-800 hover:bg-gray-700'
            >
              <div className='block h-full'>
                {/* Image Container */}
                <div className='w-full h-48 sm:h-56 md:h-52 lg:h-64 xl:h-72 overflow-hidden'>
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                    loading='lazy'
                  />
                </div>
                
                {/* Content Overlay */}
                <div className='p-4 sm:p-5 lg:p-6'>
                  <h3 className='text-lg sm:text-xl font-bold mb-2 line-clamp-2'>{activity.title}</h3>
                  <p className='text-gray-300 text-sm sm:text-base mb-3 line-clamp-2'>{activity.description}</p>
                  
                  {/* Tags */}
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {activity.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className='text-xs sm:text-sm bg-indigo-900/70 text-indigo-200 px-2 py-1 rounded'>
                        {tag}
                      </span>
                    ))}
                    {activity.tags.length > 3 && (
                      <span className='text-xs sm:text-sm bg-gray-700 text-gray-300 px-2 py-1 rounded'>
                        +{activity.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <button
                    onClick={(e) => handleViewDetails(activity.id, e)}
                    className='text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base flex items-center group'
                  >
                    View Details
                    <span className='ml-1 group-hover:translate-x-1 transition-transform'>
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for activity details */}
        {activeActivity && (
          <div 
            className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 sm:p-6'
            onClick={closeModal}
          >
            <div 
              className='bg-gray-800 rounded-lg lg:rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl'
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className='relative'>
                <div className='w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden'>
                  <img 
                    src={activeActivity.image} 
                    alt={activeActivity.title} 
                    className='w-full h-full object-cover'
                    loading='lazy'
                  />
                </div>
                <button 
                  onClick={closeModal}
                  className='absolute top-3 right-3 bg-gray-800/90 text-white p-2 rounded-full hover:bg-gray-700 transition'
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
              
              {/* Modal Content */}
              <div className='p-5 sm:p-6 lg:p-8'>
                <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-4'>{activeActivity.title}</h3>
                
                <div className='prose prose-invert max-w-none'>
                  <ul className='text-gray-300 mb-4 list-disc list-inside space-y-2 font-[Roboto]'>
                    {activeActivity.details.split('\n').filter(point => point.trim()).map((point, idx) => (
                      <li key={idx} className='text-gray-300 text-sm sm:text-base'>{point.trim()}</li>
                    ))}
                  </ul>
                </div>
                
                <div className='flex flex-wrap gap-2 mb-6'>
                  {activeActivity.tags.map((tag, i) => (
                    <span key={i} className='bg-indigo-900/70 text-indigo-200 px-3 py-1 rounded-full text-xs sm:text-sm'>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className='flex flex-col sm:flex-row gap-4'>
                  <a 
                    href={activeActivity.link} 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='inline-flex items-center justify-center px-5 py-2 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg transition-colors'
                  >
                    View Certificate/Project
                    <span className='ml-2'>↗</span>
                  </a>
                  <button
                    onClick={closeModal}
                    className='inline-flex items-center justify-center px-5 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors'
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );          
}

export default Activities;