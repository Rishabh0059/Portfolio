import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import SocialLinks from "./components/SocialLinks"
import Achievements from "./components/Achievements"

function App() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-black to-gray-800">
      <Navbar />
      <div className="flex flex-col pt-16">
        <Home />
        <About />
        <Experience />
        <Portfolio />
        <Achievements />
        <Contact />
      </div>
      <SocialLinks />
    </div>
  )
}

export default App
