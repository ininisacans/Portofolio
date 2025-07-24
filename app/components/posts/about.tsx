"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="about"
      className="scroll-mt-14 w-full min-h-screen flex items-start justify-center bg-[#f9f9f9] dark:bg-gray-800 px-4 md:px-10 pt-10 pb-4 transition-colors duration-500"
    >
      <div className="max-w-3xl w-full text-gray-800 dark:text-gray-200">
        <h1 className="text-3xl font-bold text-left mb-6">About Me</h1>
      <motion.div
        className="h-0.5 w-24 bg-gray-800 dark:bg-white rounded mb-8"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ originX: 0 }}
      />
        <div
          className={`relative transition-all duration-500 backdrop-blur-md rounded-lg p-4 md:p-2 ${
            isExpanded ? "max-h-[2000px]" : "max-h-[300px] overflow-hidden"
          }`}
        >
          <div className={`${!isExpanded ? "mask-fade" : ""}`}>
          <p className="mt-4 text-justify first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:font-semibold first-letter:text-gray-900 dark:first-letter:text-gray-100">
            Hello! I&apos;m Nisa, a 7th-semester student majoring in Software Engineering at Politeknik Negeri Banyuwangi. 
            Throughout my academic journey, I&apos;ve been actively involved in various software development projects that focus 
            on collaboration and real-world application.
          </p>

          <p className="mt-4 text-justify text-gray-700 dark:text-gray-300">
            Thanks to the Project-Based Learning approach in my program, I&apos;ve gained hands-on experience working in teams 
            to build tangible software products. These projects have shaped my technical abilities and also strengthened 
            my communication, teamwork, and problem-solving skills.
          </p>

          <p className="mt-4 text-justify text-gray-700 dark:text-gray-300">
            I&apos;ve worked with programming languages such as PHP, JavaScript, and Java, and I have a solid foundation in 
            database management using MySQL and MariaDB. For web development, I frequently use the Laravel framework 
            because of its structure and scalability.
          </p>

          <p className="mt-4 text-justify text-gray-700 dark:text-gray-300">
            In the 6th semester, I joined the Studi Independen Bersertifikat (SIB) program by Dicoding, supported by the DBS 
            Foundation as part of Kampus Merdeka. I chose the Full Stack Developer path, where I learned about web 
            fundamentals, RESTful APIs, clean code practices, and deployment—all through real-world project experience. 
            It was a valuable journey that enhanced my self-discipline and technical depth.
          </p>

          <p className="mt-4 text-justify text-gray-700 dark:text-gray-300">
            Currently, I&apos;m doing an Industrial Internship at PT Taksu Teknologi Indonesia, where I&apos;m gaining direct exposure 
            to real tech industry practices. This experience has helped me apply what I&apos;ve learned in a professional setting, 
            while also preparing me to grow as a future web developer.
          </p>
        </div>


          {!isExpanded && (
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#f9f9f9] dark:from-gray-900 to-transparent pointer-events-none" />
          )}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-6 py-2 text-sm font-semibold border border-amber-300 text-amber-300 rounded-full hover:bg-amber-400 hover:text-white transition-all duration-300"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
