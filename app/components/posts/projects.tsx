'use client';

import Image from 'next/image';
import { BiLinkExternal, BiFile } from 'react-icons/bi';
import { listProyek } from './data';

const techColors: Record<string, string> = {
  Laravel: 'bg-orange-100 text-[#AC4826]',
  PHP: 'bg-blue-100 text-[#3D69C7]',
  Bootstrap: 'bg-purple-100 text-[#AE50AF]',
  MySQL: 'bg-green-100 text-[#407D6D]',
  JavaScript: 'bg-yellow-100 text-[#B28F58]',
  Figma: 'bg-purple-100 text-[#7A3DB6]',
  Proto: 'bg-pink-100 text-[#A93060]',
  HTML: 'bg-pink-100 text-pink-700',
  CSS: 'bg-blue-50 text-blue-700',
  AOS: 'bg-gray-200 text-gray-800',
  Swiper: 'bg-indigo-100 text-indigo-800',
  'Lightbox Gallery': 'bg-rose-100 text-rose-800',
  React: 'bg-cyan-100 text-cyan-700',
  TailwindCSS: 'bg-sky-100 text-sky-700',
  Vite: 'bg-violet-100 text-violet-700',
};

const ProjectPage = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-14 w-full min-h-screen flex flex-col items-center justify-center bg-[#e2edfe] dark:bg-gray-600 p-10 pb-24"
    >
      <div className="max-w-2xl text-center mb-10">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">My Projects</h1>
        <p className="text-gray-600 dark:text-white">
          Here are some of the projects I have worked on during my academic journey
        </p>
      </div>

      <div className="w-full max-w-6xl px-4 mx-auto flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {listProyek.map((proyek) => (
          <div key={proyek.id} className="group rounded-lg shadow hover:shadow-2xl bg-white transition-transform transform hover:-translate-y-2 active:translate-y-1 overflow-hidden w-[400px] md:w-[450px]">
            <div className="overflow-hidden">
              <Image
                src={proyek.gambar}
                alt={proyek.nama}
                width={600}
                height={350}
                className="w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>


              <div className="p-6">
                <h2 className="text-xl text-gray-800 font-semibold mb-2">{proyek.nama}</h2>
                <p className="text-[#666] text-justify">{proyek.desk}</p>

                <div className="mt-4 text-left">
                  <p className="text-sm text-[#959595] font-bold mb-2">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          techColors[tool] || 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex gap-3 flex-wrap">
                  {proyek.demo && (
                    <a
                      href={proyek.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm rounded-lg flex items-center"
                    >
                      <BiLinkExternal className="mr-2" />
                      Live Demo
                    </a>
                  )}

                  {proyek.doc && (
                    <a
                      href={proyek.doc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-400 text-gray-800 px-4 py-2 text-sm rounded-lg flex items-center"
                    >
                      <BiFile className="mr-2" />
                      Documentation
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;