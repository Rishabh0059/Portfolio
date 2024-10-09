
/* eslint-disable react/no-unescaped-entities */

import heroImage2 from "../assets/heroImage2.jpeg";

const Home = () => {
  return (
    <div name="Home" className="h-screen text-white w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="flex flex-col md:flex-row max-w-screen-lg mx-auto px-4 items-center h-full">
        <div className="flex flex-col justify-center h-full">
          <h2 className="sm:text-4xl md:text-7xl font-bold pt-13 text-white">I'm a Frontend Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">Hello everyone! My name is Rishabh Kumar and i am currently
            a 2nd year engineering student from Dayananda Sagar College of Engineering located in Bengaluru,Karnataka. I aspire to become a best frontend developer and create great websites ahead. </p>
          <div>
            
          </div>
        </div>
        <div>
          <img src={heroImage2} className="rounded-3xl md:mx-auto w-2/3 h-2/3  md:w-3/4 md:h-4/5 sm:py-12"></img>
        </div>
      </div>
    </div>
  )
}

export default Home
