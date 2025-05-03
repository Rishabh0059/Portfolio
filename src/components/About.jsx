import { FaGraduationCap, FaCode, FaUser, FaJava, FaTerminal } from "react-icons/fa";

const About = () => {
  return (
    <div name="About" className="w-full h-full text-white relative z-10 bg-gradient-to-b from-slate-700 to-slate-900">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Who Am I Section */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <FaUser className="text-4xl text-cyan-500" />
                <h3 className="text-2xl font-bold text-cyan-500">Who Am I</h3>
              </div>
              <div className="space-y-4">
                <ul className="list-disc list-inside space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Passionate Full Stack Developer with expertise in both MERN and PERN stacks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Strong problem-solving skills with 300+ DSA questions solved on LeetCode and GeeksForGeeks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Continuous learner with a passion for exploring new technologies and frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Strong believer in clean code, best practices, and efficient development workflows</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <FaGraduationCap className="text-4xl text-cyan-500" />
                <h3 className="text-2xl font-bold text-cyan-500">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xl font-semibold text-cyan-500">Dayananda Sagar College of Engineering</p>
                  <p className="text-gray-300 mt-2">B.Tech in Computer Science & Engineering</p>
                  <p className="text-gray-400">2021 - Present</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Programming Languages Section */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <FaCode className="text-4xl text-cyan-500" />
                <h3 className="text-2xl font-bold text-cyan-500">Programming Languages</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300">
                  <FaJava className="text-4xl text-cyan-500" />
                  <div>
                    <h4 className="text-xl font-semibold text-cyan-500">Java</h4>
                    <p className="text-gray-300">Advanced</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300">
                  <FaTerminal className="text-4xl text-cyan-500" />
                  <div>
                    <h4 className="text-xl font-semibold text-cyan-500">C</h4>
                    <p className="text-gray-300">Advanced</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <FaCode className="text-4xl text-cyan-500" />
                <h3 className="text-2xl font-bold text-cyan-500">Projects</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="text-xl font-semibold text-cyan-500">Real-Time Chat App</h4>
                  <p className="text-gray-300 mt-2">Built with MERN stack, featuring live messaging and JWT authentication</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="text-xl font-semibold text-cyan-500">Edusity</h4>
                  <p className="text-gray-300 mt-2">Modern university website using React and Tailwind CSS</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="text-xl font-semibold text-cyan-500">Email Phishing Awareness System</h4>
                  <p className="text-gray-300 mt-2">Interactive platform for cybersecurity training and awareness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
