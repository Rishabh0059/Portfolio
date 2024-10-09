import edusity from "../assets/portfolio/edusity.png"
// import quiz from "../assets/portfolio/quiz.png"
import socialmedia from "../assets/portfolio/socialmedia.png"
import todo from '../assets/portfolio/todo.png'
import currency from '../assets/portfolio/currency.png'
import mortage from '../assets/portfolio/mortage.png'
import heritage from '../assets/portfolio/heritage.jpeg'


const Portfolio = () => {
  const links=[
    {
      id:1,
      src:heritage,
      title:'Indian Tourism & Heritage',
      demo:"https://rishabh0059.github.io/tourism-new/",
      code:"https://github.com/Rishabh0059/tourism-new",
    },
    {
      id:2,
      title:'University Website',
      src:edusity,
      demo:"https://rishabh0059.github.io/Edusity/",
      code:"https://github.com/Rishabh0059/Edusity",
    },
    // {
    //   id:4,
    //   title:'Quiz App',
    //   src:quiz,
    //   demo:"https://rishabh0059.github.io/QuizApp/",
    //   code:"https://github.com/Rishabh0059/QuizApp",
    // },
    {
      id:3,
      title:'Social Media Website',
      src:socialmedia,
      demo:"https://rishabh0059.github.io/SocialMedia/",
      code:"https://github.com/Rishabh0059/SocialMedia",
    },
    {
      id:4,
      src:todo,
      title:'To Do App',
      demo:"https://rishabh0059.github.io/ToDo-App/",
      code:"https://github.com/Rishabh0059/ToDo-App",
    },
    {
      id:5,
      src:currency,
      title:'Currency Converter',
      demo:"https://rishabh0059.github.io/Currency-Converter/",
      code:"https://github.com/Rishabh0059/Currency-Converter",
    },
    {
      id:6,
      src:mortage,
      title:'Animated Login Form',
      demo:"https://rishabh0059.github.io/login-animation/",
      code:"https://github.com/Rishabh0059/login-animation"
    },
    
   
  ]
  return (
    <div name="Portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white  md:h-full pb-12 '>
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
