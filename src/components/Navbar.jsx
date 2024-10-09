import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {

  const links=[
    {
      id:1,
      link:"Home"
    },
    {
      id:2,
      link:"About"
    },
    {
      id:3,
      link:"Portfolio"
    },
    {
      id:4,
      link:"Experience"
    },
    {
      id:5,
      link:"Contact"
    }
  ]

  const [nav,setNav]=useState(false);

  return (
    <div className="flex justify-between md:fixed items-center bg-black w-full h-20 px-4 text-white">
      <div>
      <h1 className="text-5xl ml-2 font-signature">Rishabh</h1>
      </div>

      <ul className=" hidden md:flex">
      {links.map(({id,link})=>(<li key={id} className="px-4 cursor-pointer font-medium capitalize text-gray-500 hover:scale-105 duration-200"><Link to = {link} smooth duration={500}>{link}</Link></li>))}
      </ul>
      <div className="px-4 z-10 text-gray-500 cursor-pointer md:hidden" onClick={()=>setNav(!nav)}>
        {nav ? <FaTimes size={30} /> : <RxHamburgerMenu size={30}/> }
      </div>

      {nav && (
        <ul className="flex flex-col justify-center w-full absolute top-0 bottom-0 h-screen bg-gradient-to-b from-black to-gray-800 ">
          {links.map(({id,link})=>(<li key={id} className="flex flex-col items-center py-6 text-4xl cursor-pointer capitalize
          "><Link to = {link} onClick={()=>setNav(!nav)} smooth duration={500}>{link}</Link></li>))}
        </ul>
      )}
    </div>
  )
}

export default Navbar
