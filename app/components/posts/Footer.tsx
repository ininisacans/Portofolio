import React from 'react';

const Footer = () => {
  return (
    <footer className="w-fullz bg-[#0e1525] dark:bg-gray-900 dark:text-white text-white text-center p-8 shadow-inner">
      <div className="flex flex-row justify-between pb-15">
        <div className="flex flex-col mb-1 text-left gap-2">
          <h3 className="font-semibold">Femilia Zahrotun Nisa</h3>
          <p className="font-normal">Software Engineering Student</p>
        </div>

        <div className="footer-links">
          <ul className="flex flex-row font-semibold gap-5 mt-1 mb-10">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom border-t border-white/20 pt-8 footer-bottom">
        <p >&copy; 2025 Nisa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;