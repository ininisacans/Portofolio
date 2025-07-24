"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaFigma,
  FaGithub,
  FaCss3,
  FaHtml5,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiPostman,
  SiMysql,
  SiNextdotjs,
  SiLaravel,
  SiXampp,
  SiTrello,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const tools = [
  { icon: <FaFigma size={24} />, name: "Figma" },
  { icon: <SiMysql size={24} />, name: "MySQL" },
  { icon: <SiLaravel size={24} />, name: "Laravel" },
  { icon: <RiTailwindCssFill size={24} />, name: "Tailwind" },
  { icon: <FaGithub size={24} />, name: "GitHub" },
  { icon: <FaHtml5 size={24} />, name: "HTML5" },
  { icon: <FaCss3 size={24} />, name: "CSS3" },
  { icon: <SiPostman size={24} />, name: "Postman" },
  { icon: <SiNextdotjs size={24} />, name: "Next.js" },
  { icon: <SiXampp size={24} />, name: "XAMPP" },
  { icon: <VscVscode size={24} />, name: "VS Code" },
  { icon: <SiTrello size={24} />, name: "Trello" },
];

const Tools = () => {
  return (
    <section className="w-full bg-[#e2edfe] dark:bg-[#0f172a] text-gray-800 dark:text-gray-100 px-4 py-14 flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
        Some technologies I&apos;ve worked with:
      </h1>

      <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l border-gray-300/30 dark:border-white/10">
        {tools.map(({ icon, name }, index) => {
          const isLastRow =
            index >= tools.length - (tools.length % 4 || 4);

          return (
            <div
              key={index}
              className={`group relative flex flex-col items-center justify-center px-4 py-8
                border-r ${!isLastRow ? "border-b" : ""}
                border-gray-300/30 dark:border-white/10
                hover:bg-white/20 dark:hover:bg-white/5 transition duration-300

                after:absolute after:h-[16px] after:w-[1px]
                after:bg-white dark:after:bg-white
                after:top-1/2 after:right-0 after:-translate-y-1/2 after:translate-x-1/2`}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {icon}
              </motion.div>
              <p className="mt-2 text-sm text-center opacity-90 group-hover:opacity-100 transition">
                {name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tools;
