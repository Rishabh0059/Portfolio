import html from '../assets/html.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import redux from '../assets/redux.png'
import jquery from '../assets/jjquery.png'
import node from '../assets/node.png'
import bootstrap from '../assets/Bootstrap.png'
import express from "../assets/express.png"
import mongo from "../assets/mongodb.png"
import postgres from "../assets/postgres.png"
import postman from "../assets/postman.png"

const Experience = () => {
  const frontendSkills = [
    { id: 1, src: html, title: 'HTML', style: 'shadow-orange-500' },
    { id: 2, src: css, title: 'CSS', style: 'shadow-blue-500' },
    { id: 3, src: javascript, title: 'JavaScript', style: 'shadow-yellow-500' },
    { id: 4, src: reactImage, title: 'React', style: 'shadow-blue-500' },
    { id: 5, src: tailwind, title: 'Tailwind CSS', style: 'shadow-sky-500' },
    { id: 6, src: redux, title: 'Redux', style: 'shadow-violet-500' },
    { id: 7, src: bootstrap, title: 'Bootstrap', style: 'shadow-violet-500' },
    { id: 8, src: jquery, title: 'jQuery', style: 'shadow-blue-500' }
  ];

  const backendSkills = [
    { id: 1, src: node, title: 'Node.js', style: 'shadow-green-600' },
    { id: 2, src: express, title: 'Express.js', style: 'shadow-gray-600' }
  ];

  const databaseSkills = [
    { id: 1, src: mongo, title: 'MongoDB', style: 'shadow-gray-600' },
    { id: 2, src: postgres, title: 'PostgreSQL', style: 'shadow-gray-600' }
  ];

  const toolsSkills = [
    { id: 1, src: github, title: 'GitHub', style: 'shadow-gray-400' },
    { id: 2, src: postman, title: 'Postman', style: 'shadow-gray-600' }
  ];

  return (
    <div name='Skills' className='bg-gradient-to-b from-slate-900 to-slate-800 w-full min-h-screen'>
      <div className='max-w-screen-lg mx-auto p-8 flex flex-col justify-center w-full h-full text-white'>
        <div className='mb-12'>
          <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Technical Skills</p>
          <p className='py-4 font-head text-xl font-semibold'>These are the technologies I have worked with</p>
        </div>

        <div className='space-y-12'>
          {/* Frontend Skills */}
          <div>
            <h3 className='text-2xl font-bold text-cyan-500 mb-6'>Frontend Technologies</h3>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center'>
              {frontendSkills.map(({ id, src, title, style }) => (
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-6 rounded-lg ${style} bg-gray-800`}>
                  <img src={src} alt={title} className='w-24 h-24 mx-auto object-contain' />
                  <p className='mt-4 text-lg font-medium'>{title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <h3 className='text-2xl font-bold text-cyan-500 mb-6'>Backend Technologies</h3>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center'>
              {backendSkills.map(({ id, src, title, style }) => (
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-6 rounded-lg ${style} bg-gray-800`}>
                  <img src={src} alt={title} className='w-24 h-24 mx-auto object-contain' />
                  <p className='mt-4 text-lg font-medium'>{title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Database Skills */}
          <div>
            <h3 className='text-2xl font-bold text-cyan-500 mb-6'>Database Technologies</h3>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center'>
              {databaseSkills.map(({ id, src, title, style }) => (
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-6 rounded-lg ${style} bg-gray-800`}>
                  <img src={src} alt={title} className='w-24 h-24 mx-auto object-contain' />
                  <p className='mt-4 text-lg font-medium'>{title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className='text-2xl font-bold text-cyan-500 mb-6'>Development Tools</h3>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center'>
              {toolsSkills.map(({ id, src, title, style }) => (
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-6 rounded-lg ${style} bg-gray-800`}>
                  <img src={src} alt={title} className='w-24 h-24 mx-auto object-contain' />
                  <p className='mt-4 text-lg font-medium'>{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
