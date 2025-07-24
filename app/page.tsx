import React from 'react'
import HeroSection from './components/posts/HeroSection'
import ContactPage from './components/posts/contact'
import AboutPage from './components/posts/about'
import ProjectPage from './components/posts/projects'
import Navbar from './components/posts/Navbar'
import Footer from './components/posts/Footer'
import Tools from './components/posts/tools'

const page = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutPage />
      <Tools />
      <ProjectPage />
      <ContactPage />
      <Footer />
    </>
  )
}

export default page