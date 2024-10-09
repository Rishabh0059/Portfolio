/* eslint-disable react/no-unescaped-entities */


const Contact = () => {
  return (
    <div name="Contact" className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg md:mx-auto mt-12 h-full">
        <div className="md:pb-8 pb-4 mt-5">
          <p className="text-3xl md:text-4xl  font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="md:py-6 py-3">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/amdpggpb" method="POST" className="flex flex-col w-full md:w-1/2">
            <input type="text" name="name" placeholder="Enter your Name"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">
            </input>

            <input type="text" name="email" placeholder="Enter your email"
            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">
            </input>

            <textarea type="message" placeholder="Enter your message" rows={10}
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">
            </textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-700 px-6 py-3 
            my-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's Talk</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
