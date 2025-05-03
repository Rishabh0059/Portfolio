import { FaCode, FaTrophy, FaMedal } from "react-icons/fa";

const Achievements = () => {
  const achievements = [
    {
      icon: <FaCode className="text-4xl text-cyan-500" />,
      title: "DSA Mastery",
      description: "Solved 300+ questions on LeetCode and GeeksForGeeks combined",
      category: "Coding",
      year: "2023-2024"
    },
    {
      icon: <FaTrophy className="text-4xl text-cyan-500" />,
      title: "LeetCode Contest",
      description: "Achieved Max Rating: 1539",
      category: "Competitive Programming",
      year: "2023-2024"
    },
    {
      icon: <FaMedal className="text-4xl text-cyan-500" />,
      title: "Tech Innovator",
      description: "Developed multiple full-stack applications with modern tech stack",
      category: "Development",
      year: "2023-2024"
    }
  ];

  return (
    <div name="Achievements" className="w-full h-full text-white bg-gradient-to-b from-slate-900 to-gray-800">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gray-700 p-3 rounded-full">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-cyan-500">{achievement.title}</h3>
                    <span className="text-sm text-gray-400">{achievement.year}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{achievement.description}</p>
                  <div className="mt-4">
                    <span className="inline-block bg-cyan-500/20 text-cyan-500 px-3 py-1 rounded-full text-sm">
                      {achievement.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements; 