import React, { useState } from 'react';

const Navbar = () => {
  // Mobile menu ko open/close karne ke liye state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo / Name */}
          <div className="flex-shrink-0">
            <span className="font-bold text-2xl text-blue-600 cursor-pointer">
              J.A.M
            </span>
          </div>
          
         {/* Desktop Menu Links (Badi screen ke liye) */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium transition">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium transition">About</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium transition">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium transition">Contact</a>
          </div>
          
          {/* Hire Me Button (Badi screen ke liye) */}
          <div className="hidden md:flex">
            <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition shadow-sm">
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button (Choti screen ke liye) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown (Jab button click ho) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md font-medium">Home</a>
            <a href="#about" className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md font-medium">About</a>
            <a href="#projects" className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md font-medium">Projects</a>
            <a href="#contact" className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;