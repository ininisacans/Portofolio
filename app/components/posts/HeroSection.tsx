"use client";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <main id="#home" className="w-full min-h-screen h-screen dark:bg-gray-900 flex flex-col md:flex-row items-center justify-center bg-gray-100 px-6 py-95 md:px-20 md:py-36 transition-colors duration-300">
      <div className="flex-1 flex flex-col dark:text-white items-center md:items-start justify-center gap-4 p-18 text-[#383838] text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold">WELCOME TO MY PAGE PROFILE</h1>
        <p className="text-xl font-medium">I&apos;m Femilia Zahrotun Nisa</p>
        <TypeAnimation
          sequence={[
            "A Student",
            1000,
            "Web Developer",
            1000,
            "Full Stack Developer",
            1000,
            "UI/UX Designer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-2xl font-extrabold text-amber-300"
        />
        <div className="flex gap-4 mb-5 mt-4">
          <Link href="/#contact" className="inline-block border-2 rounded-3xl sm:w-fit bg-gradient-to-br from-primary-500 font-bold border-amber-300 bg-amber-300 hover:text-amber-300 px-5 py-2 to-secondary-500 hover:bg-gray-100  dark:hover:bg-gray-900 text-white hover:border-amber-300 mt-3 transition-colors">
            Hire Me
          </Link>
          <Link href="/CV - Femilia Zahrotun Nisa.pdf" download className="inline-block border-2 rounded-3xl sm:w-fit bg-gradient-to-br from-primary-500 font-bold border-amber-300 hover:border-amber-300 hover:text-white px-5 py-2 to-secondary-500 hover:bg-amber-300 text-amber-300 mt-3">
              Download CV
          </Link>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center md:mt-0">
        <div className="overflow-hidden rounded-xl">
          <Image
            className="shadow-lg transition-transform duration-300 hover:scale-105"
            src="/formal-pic.jpeg"
            alt="profile picture"
            width={300}
            height={350}
            priority
          />
        </div>
      </div>
    </main>
  );
}