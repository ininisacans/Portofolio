'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DarkModeToggler from './DarkModeToggler';
import { HiMiniBars3BottomLeft } from 'react-icons/hi2';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full flex items-center justify-between top-0 z-50 p-4 transition-all duration-300 backdrop-blur-md ${
        isScrolled
          ? 'bg-white/10 dark:bg-gray-900/10 shadow-md'
          : 'bg-gray-100 dark:bg-gray-900'
      }`}
    >
      {/* Kiri - Logo */}
      <h1 className='ml-4 tracking-widest font-bold text-2xl text-black dark:text-white'>
        Nisa
      </h1>

      {/* Tengah - Navbar di Desktop */}
      <nav className="hidden md:block absolute left-1/2 -translate-x-1/2">
        <ul className='flex flex-row font-bold gap-7 text-black dark:text-white'>
          <li className='hover:font-extrabold'><Link href="#home">Home</Link></li>
          <li className='hover:font-extrabold'><Link href="#about">About</Link></li>
          <li className='hover:font-extrabold'><Link href="#projects">Projects</Link></li>
          <li className='hover:font-extrabold'><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Kanan - Mobile menu + Dark Mode */}
      <div className="md:hidden flex items-center gap-3">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black dark:text-white">
          <HiMiniBars3BottomLeft size={28} />
        </button>
        <DarkModeToggler />
      </div>

      {/* Desktop - Dark Mode */}
      <div className="hidden md:block">
        <DarkModeToggler />
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-4 mt-2 bg-white dark:bg-gray-800 shadow-md rounded-md p-4 md:hidden">
          <ul className="flex flex-col gap-3 text-black dark:text-white font-semibold">
            <li><Link href="#home" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="#about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
