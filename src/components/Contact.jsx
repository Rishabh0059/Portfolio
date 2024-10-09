/* eslint-disable react/no-unescaped-entities */



const Contact = () => {
  return (
    <div name="Contact" className="w-full h-full bg-gradient-to-b from-black pt-12 pl-8 to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg md:mx-auto mt-12 pl-8 h-full">
        <div className="md:pb-8 pb-4 mt-5">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <div className="pt-5">
          
          <p className="font-head font-semibold">Email : rishabh1259@gmail.com</p>
          <p className="font-head font-semibold">Phone : 9661590417 </p>
          <p className="font-head font-semibold">Adress : Kumaraswamy Layout,Bengaluru,Karnataka , 560078</p>
          <p className="md:py-6 py-3 text-xl font-semibold underline">Submit the form below to get in touch with me</p>
          </div>
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
