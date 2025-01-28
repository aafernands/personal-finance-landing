"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'; // Import Image from next/image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black p-4 z-50 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl md:flex-1">
        <Image 
            src="/logo.png" 
            alt="FinanceApp Logo" 
            width={120}  // Set the width of the logo
            height={40}  // Set the height of the logo
          />        </div>

        {/* Menu button for mobile */}
        <button
          onClick={toggleMenu}
          className="text-white md:hidden"
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>

      {/* Menu links */}
      <ul
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex space-x-4 mt-4 md:mt-0`}
      >
        <li>
          <a href="#home" className="text-white hover:text-gray-300">Home</a>
        </li>
        <li>
          <a href="#features" className="text-white hover:text-gray-300">Features</a>
        </li>
        <li>
          <a href="#pricing" className="text-white hover:text-gray-300">Pricing</a>
        </li>
        <li>
          <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
