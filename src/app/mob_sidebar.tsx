'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle menu open/closed
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !(menuRef.current as Node).contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Add event listener when menu is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div ref={menuRef} className="relative w-full">
      {/* Menu Toggle Icon */}
      <button 
        onClick={toggleMenu} 
        className=" w-full flex flex-row justify-end p-2 rounded-md focus:outline-none"
      >
        {isOpen ? 
        <Image
        src='/close.svg'
        height={10}
        width={10}
        alt="...."
        className="size-10"
        
        /> 
        
        : <Image
        src='/menu.svg'
        height={10}
        width={10}
        alt="...."
        className="size-10"
        />}
      </button>

      {/* Animated Menu */}
      <div 
        className={`
          fixed top-16 right-4 w-64 bg-white shadow-lg rounded-lg 
          transition-all duration-300 ease-in-out
          ${isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}
        `}
      >
        <nav className="p-4">
          <ul className="space-y-3">
            <li>
              <Link 
                href="/" 
                className="block py-2 px-3 hover:bg-gray-100 rounded-md transition"
              >
                ABOUT ME 
              </Link>
            </li>
            <li>
            <Link 
                href="/Resume" 
                className="block py-2 px-3 hover:bg-gray-100 rounded-md transition"
              >
                RESUME
              </Link>
            </li>
            <li>
            <Link 
                href="/Projects" 
                className="block py-2 px-3 hover:bg-gray-100 rounded-md transition"
              >
               PROJECTS
              </Link>
            </li>
            <li>
            <Link 
                href="/Certifications" 
                className="block py-2 px-3 hover:bg-gray-100 rounded-md transition"
              >
               CERTIFICATIONS
              </Link>
            </li>
            <li>
            <Link 
                href="/Contact" 
                className="block py-2 px-3 hover:bg-gray-100 rounded-md transition"
              >
               CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;