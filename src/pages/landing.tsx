// import React from 'react'

import Features from "../components/Landing/Features"
import Footer from "../components/Landing/Footer"
import Hero from "../components/Landing/Hero"
import Navbar from "../components/Landing/Navbar"
import Ready from "../components/Landing/Ready"
import Simple from "../components/Landing/Simple"
import Trusted from "../components/Landing/Trusted"

function Landing() {
  return (
    <div className="bg-[#181818] font-poppins">
      <Navbar/>
      <Hero/>
      <Trusted/>
      <Features/>
      <Simple/>
      <Ready/>
      <Footer/>
    </div>
  )
}

export default Landing