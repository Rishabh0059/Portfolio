import html from '../assets/html.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import redux from '../assets/redux.png'
import wordpress from '../assets/wordpress.png'
// import jquery from '../assets/jjquery.png'
import node from '../assets/node.png'
import bootstrap from '../assets/Bootstrap.png'

const Experience = () => {

  const techs=[
    {
      id:1,
      src:html,
      title:'HTML',
      style:'shadow-orange-500'
    },
    {
      id:2,
      src:css,
      title:'CSS',
      style:'shadow-blue-500'
    },
    {
      id:3,
      src:javascript,
      title:'JavaScript',
      style:'shadow-yellow-500'
    },
    {
      id:4,
      src:reactImage,
      title:'React',
      style:'shadow-blue-500'
    },
    {
      id:5,
      src:tailwind,
      title:'Tailwind Css',
      style:'shadow-sky-500'
    },
    {
      id:6,
      src:redux,
      title:'Redux',
      style:'shadow-violet-500'
    },
    {
      id:7,
      src:bootstrap,
      title:'Bootstrap',
      style:'shadow-violet-500'
    },
    // {
    //   id:8,
    //   src:jquery,
    //   title:'jQuery',
    //   size:'40px',
    //   style:'shadow-blue-500'
    // },
   
    {
      id:9,
      src:wordpress,
      title:'Wordpress',
      style:'shadow-blue-400'
    },
    {
      id:10,
      src:github,
      title:'Github',
      style:'shadow-gray-400'
    },
    {
      id:11,
      src:node,
      title:'NodeJs',
      style:'shadow-green-600'
    },
  ]

  return (
    <div name='Experience' className='bg-gradient-to-b pt-16 from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto md:p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='pl-5 '>
          <p className='text-4xl font-bold border-b-4 sm:border-b-2 border-gray-500 md:p-2 sm:py-3 inline'>Experience</p>
          <p className='md:py-5 sm:py-3 font-head md:text-xl font-semibold'>These are the technologies i have worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:gap-8 gap-5 text-center md:py-8 py-4 md:px-12 px-10 sm:px-0'>
         {techs.map(({id,src,title,style})=>(
             <div key={id} className={`shadow-md hover:scale-105 duration-500 md:py-1 py-0 rounded-lg ${style}`}>
             <img src={src} className='w-20 mx-auto'></img>
             <p className='mt-4 px-4'>{title}</p>
           </div>
         ))}

        </div>
      </div>
    </div>
  )
}

export default Experience
