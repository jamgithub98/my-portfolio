import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-xl font-bold">
          J.A.M<span className="text-blue-500">.</span>
        </div>
        <div className="text-gray-400 text-sm">
          &copy; {currentYear} Joynal Abedin Mollah. All rights reserved.
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white transition">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;