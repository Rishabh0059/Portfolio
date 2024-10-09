

const About = () => {
  return (
    <div name="About" className="w-full h-screen pt-25 md:pt-0 md:px-0 bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline-border-b-4 border-gray-500">About</p>
        </div>
        <p className="md:text-xl sm:text-lg font-about mt-15">My name is Rishabh Kumar . I am a Frontend Developer currently pursing Computer Science & Engineering degree from Dayananda Sagar College of Engineering,Bengaluru.
          With a strong 8.9 SGPA, I am proficient in languages like Java,C and Javascript.I also have a good hold on the frameworks like ReactJs and TailwindCss.I have worked on a large number of projects which are mentioned in Portfolio section of the website.
        </p>
        <br></br>

        <p className="md:text-xl sm:text-lg font-about md:pb-0 pb-12">My passion lies in web development,as demonstrated by my projects.I have developed a University website called Edusity using ReactJs and TailwindCss.
          I also developed a website to enchance the experience of exploring the culture and heritage of India.Our Heritage & Tourism was shortlisted in the internal round of Smart India Hackathon 2024.I am currently working on Backend Development and want to become a Full Stack Developer.
        </p>
      </div>
    </div>
  )
}

export default About
