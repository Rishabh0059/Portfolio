import edusity from "../assets/portfolio/edusity.png"
import heritage from '../assets/portfolio/heritage.jpeg'
import chat from "../assets/portfolio/chat-app.png"
import blog from "../assets/portfolio/blog-app.png"
import quiz from "../assets/portfolio/quiz.png"
import green from "../assets/portfolio/green.png"

const Portfolio = () => {
  const links=[
    {
      id:1,
      src:chat,
      title:'Real-Time Chat Application (MERN)',
      demo:"https://fullstack-chat-app-qqx0.onrender.com/",
      code:"https://github.com/Rishabh0059/fullstack-chat-app",
    },
    {
      id:2,
      title:'GreenStack (MERN)',
      src:green,
      demo:"https://green-stack-wheat.vercel.app/",
      code:"https://github.com/Rishabh0059/greenStack",
    },
    // {
    //   id:3,
    //   title:'Social Media Website',
    //   src:socialmedia,
    //   demo:"https://rishabh0059.github.io/SocialMedia/",
    //   code:"https://github.com/Rishabh0059/SocialMedia",
    // },
    // {
    //   id:4,
    //   src:todo,
    //   title:'Email Phishing Awareness System (MERN)',
    //   code:"https://github.com/Rishabh0059/ToDo-App",
    // },
    {
      id:5,
      src:edusity,
      title:'Edustiy-University Website',
      demo:"https://rishabh0059.github.io/Edusity/",
      code:"https://github.com/Rishabh0059/Edusity"
    },
    {
      id:6,
      src:heritage,
      title:'Tourism Explorer',
      demo:"https://rishabh0059.github.io/tourism-new/",
      code:"https://github.com/Rishabh0059/tourism-new",
    },
    {
      id:7,
      src:quiz,
      title:'Quiz Application',
      demo:"https://rishabh0059.github.io/QuizApp/",
      code:"https://github.com/Rishabh0059/QuizApp",
    },
    {
      id:8,
      src:blog,
      title:'Blog Application (PERN Stack)',
      code:"https://github.com/Rishabh0059/blog",
    },
    
    
   
  ]
  return (
    <div name="Projects" className='bg-gradient-to-b from-slate-800 to-slate-900 w-full text-white  md:h-full pb-12 '>
      <div className='md:max-w-screen-lg p-2 md:pt-2 sm:pt-1  md:mx-auto mx-0 sm:mt-0 flex flex-col justify-center w-full h-full'>
        <div className='md:pb-4 pl-9'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>My Works</p>
          <p className='py-6 font-head md:text-xl font-semibold'>Check out some of my works here:</p>
        </div>

        <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 mb-10  px-5 pb-4 md:px-10 sm:px-0'>
       {links.map(({id,src,title,demo,code})=>(
 
 <div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
   <img src={src}
   className='rounded-md duration-200 hover:scale-105 '></img>
   <h3 className="font-semibold md:pt-3 sm:pt-1.5 pl-3">{title}</h3>
   <div className='flex items-center justify-center'>
     <button className='w-1/3 md:h-auto sm:h-1/3 md:w-1/2 md:px-3 md:py-3 md:m-4 duration-200 hover:scale-105' >
     <a href={demo}>Demo</a></button>
     <button className='w-1/2 md:px-3 py-3 md:m-4 duration-200 hover:scale-105'><a href={code}>Code</a></button>
   </div>
 </div>

       ))}

       
</div>
      </div>
    </div>
  )
}

export default Portfolio
