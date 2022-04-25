import React from 'react'
import Working from '../assets/work.png'


const Work = () => {
  return (
    <div name='work' className='md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p  className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>Check out my recent work</p>
        </div>

        {/* container */}

       <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* <div style={{backgroundImage: 'url(${Working})'}} 
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
               <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify corner items-center mx-auto content-div '> */}
         
          {/* Grid item 1 */}
         <div
            style={{ backgroundImage: `url(${Working})` }}
            className='shadow-lg shadow-[#c1d3e9] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
{/* hover effects */}
<div className='opacity-0 group-hover:opacity-100'>

    
        <span className='text-2xl font-bold text-[#ecfccb] tracking-wider'>
React JS Application
        </span>
        <div className='pt-8 text-center'>
            <a href="/">
                <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-blue-600 font-bold text-lg hover:scale-110 duration-500'>Demo</button>
            </a>
            {/*  */}
            <a href="/">
                <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-600 font-bold text-lg hover:scale-110 duration-500 '>Code</button>
            </a>
        
    </div>
         </div>
            </div>
            {/*  */}

    
            
                  
                  {/*  */}
            </div>
        </div>
    </div>


  )
}

export default Work