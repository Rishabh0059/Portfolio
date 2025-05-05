/* eslint-disable react/no-unescaped-entities */
import { FaArrowRight } from "react-icons/fa6";
import heroImage2 from "../assets/heroImage2.jpeg";
import { useState, useEffect } from "react";

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["I'm a FullStack Developer & DSA Enthusiast"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div name="Home" className="min-h-screen text-white w-full bg-gradient-to-b from-black to-slate-700">
      <div className="flex flex-col md:flex-row max-w-screen-lg mx-auto px-4 items-center h-full">
        <div className="flex flex-col justify-center h-full md:w-1/2">
          <h2 className="sm:text-4xl md:text-7xl font-bold text-white mb-8">
            <span className="border-r-2 border-white pr-2">{text}</span>
          </h2>
          <p className="text-gray-500 py-4 font-medium max-w-md">Hi, I'm Rishabh Kumar, a passionate full-stack developer currently pursuing Computer Science & Engineering at Dayananda Sagar College of Engineering, Bengaluru.</p>
          
          <div className="space-y-3 mb-8">
            <p className="text-gray-300 font-medium">🚀 <span className="text-cyan-500">Expertise:</span> MERN & PERN Stack Development | DSA </p>
            <p className="text-gray-300 font-medium">💻 <span className="text-cyan-500">Projects:</span> Real-time Chat App, Edusity, Email Phishing Awareness System</p>
            <p className="text-gray-300 font-medium">🎯 <span className="text-cyan-500">Passion:</span> Building scalable web applications & solving DSA problems</p>
          </div>
          
          <div>
            <button className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              <a href="https://drive.google.com/file/d/1d-E_0iC7nyWdm53PBmCsApqSfrC_bCA-/view?usp=sharing" target="_blank" rel="noopner noreferrer">Resume</a>
              <span className="group-hover:rotate-90 duration-300 px-2" ><FaArrowRight /></span>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img 
            src={heroImage2} 
            alt="Profile" 
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-gray-500 shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
