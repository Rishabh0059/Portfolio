
/* eslint-disable react/no-unescaped-entities */
import { FaArrowRight } from "react-icons/fa6";
import heroImage2 from "../assets/heroImage2.jpeg";

const Home = () => {
  return (
    <div name="Home" className="h-screen text-white w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="flex flex-col md:flex-row max-w-screen-lg mx-auto px-4 items-center h-full">
        <div className="flex flex-col justify-center h-full">
          <h2 className="sm:text-4xl md:text-7xl font-bold pt-13 text-white">I'm a Frontend Developer</h2>
          <p className="text-gray-500 py-4 font-medium max-w-md">Hello everyone! My name is Rishabh Kumar and I am currently
            a 3rd year engineering student pursuing Computer Science & Engineering Degree from Dayananda Sagar College of Engineering located in Bengaluru,Karnataka. </p>
          
          <p className="text-gray-500 font-medium">Recently our team cleared the internal round of Smart India Hackathon(SIH) 2024.</p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"><a href="https://drive.google.com/file/d/1YiWogy2Lgoc8XRg6eNRcZHE9tGG_s6cK/view?usp=sharing" target="_blank" rel="noopner noreferrer">Resume</a>
              <span className="group-hover:rotate-90 duration-300 px-2" ><FaArrowRight /></span>
            </button>
          </div>

          
        </div>
        <div>
          <img src={heroImage2} className="md:mx-auto w-2/3 h-2/3 md:w-3/4 md:h-4/5  sm:py-12"></img>
        </div>
      </div>
    </div>
  )
}

export default Home
