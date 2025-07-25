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
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled
          ? 'bg-white/10 dark:bg-gray-900/10 shadow-md'
          : 'bg-gray-100 dark:bg-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="tracking-widest font-bold text-2xl text-black dark:text-white">
          Nisa
        </h1>

        <nav className="hidden md:block">
          <ul className="flex gap-8 font-bold text-black dark:text-white">
            <li className="hover:font-extrabold">
              <Link href="#home">Home</Link>
            </li>
            <li className="hover:font-extrabold">
              <Link href="#about">About</Link>
            </li>
            <li className="hover:font-extrabold">
              <Link href="#projects">Projects</Link>
            </li>
            <li className="hover:font-extrabold">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black dark:text-white"
            >
              <HiMiniBars3BottomLeft size={28} />
            </button>
          </div>
          <DarkModeToggler />
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3 bg-white dark:bg-gray-800 shadow-md rounded-md p-4 text-black dark:text-white font-semibold">
            <li>
              <Link href="#home" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li>
              <Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;