import React, { useState, useEffect } from 'react';
import profie from '../Assets/umesh.jpg';

const Hero = () => {
  const [placeholder, setPlaceholder] = useState('Search Google or type a URL');
  
  // Placeholder options
  const placeholderOptions = [
    'About me...',
    'Experiences...',
    'Projects...',
    'Certificates...',
    'Contact me....'
  ];

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      // Cycle through the placeholder options
      currentIndex = (currentIndex + 1) % placeholderOptions.length;
      setPlaceholder(placeholderOptions[currentIndex]);
    }, 3000); // Change every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className='bg-main-bg w-full h-screen'>
      <div className='flex items-center flex-col gap-5 justify-center h-full'>
        <img
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 xl:w-64 xl:h-64 rounded-full object-cover -mt-32"
          src={profie}
          alt="Umesh Kumar"
        />
        <h1 className='text-4xl text-white font-semibold'>Umesh Kumar</h1>
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none focus:border-blue-400"
            placeholder={placeholder} // Dynamic placeholder
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32A7.5 7.5 0 1114.32 12.9l4.387 4.387a1.25 1.25 0 01-1.767 1.767L12.9 14.32zM2.5 9a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
