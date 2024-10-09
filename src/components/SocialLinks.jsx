import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";

const SocialLinks = () => {
  const Links=[
    {
      id:1,
      child:(
        <>LinkedIn <FaLinkedin size={30}/></>
      ),
      href:"https://www.linkedin.com/in/rishabh-kumar-472563272/",
      style:'rounded-tr-md',
    },
    {
      id:2,
      child:(
        <>Github <FaGithub size={30}/></>
      ),
      href:"https://github.com/Rishabh0059",
    },
    {
      id:3,
      child:(
        <>Mail <IoMdMailOpen size={30}/></>
      ),
      href:"mailto:rishabh1259@gmail.com",
    },
    
  ]
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
       {Links.map(({id,child,href,style})=>(
       <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px]  hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + "" + style}>
        <a href={href} className="flex justify-between items-center w-full text-white"
        
        >{child}</a>
                </li>
       ))}
       
      </ul>
    </div>
  )
}

export default SocialLinks
