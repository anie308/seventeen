import { ThemeProvider } from "../components/ThemeProvider"
import Features from "../components/Landing/Features"
import Footer from "../components/Landing/Footer"
import Hero from "../components/Landing/Hero"
import Navbar from "../components/Landing/Navbar"
import Ready from "../components/Landing/Ready"
import Simple from "../components/Landing/Simple"
import Trusted from "../components/Landing/Trusted"

function Landing() {
  return (
    <ThemeProvider>
      <div className="bg-surface-900 font-poppins min-h-screen">
        <Navbar/>
        <Hero/>
        <Trusted/>
        <Features/>
        <Simple/>
        <Ready/>
        <Footer/>
      </div>
    </ThemeProvider>
  )
}

export default Landing