import html from '../assets/html.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import redux from '../assets/redux.png'

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
      src:github,
      title:'Github',
      style:'shadow-gray-400'
    },
    {
      id:6,
      src:tailwind,
      title:'Tailwind Css',
      style:'shadow-sky-500'
    },
    {
      id:7,
      src:redux,
      title:'Redux',
      style:'shadow-violet-500'
    },
  ]

  return (
    <div name='Experience' className='bg-gradient-to-b pt-12 from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl  font-bold border-b-4 border-gray-500 p-2 sm:py-3 inline'>Experience</p>
          <p className='py-5'>These are the technologies i have worked with</p>
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
