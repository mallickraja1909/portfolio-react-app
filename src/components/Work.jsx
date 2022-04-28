import React from 'react'
import Working from '../assets/work.png'
import '../index.css'
const Work = () => {
  return (
    <div className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
    <div name='work' className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>

  <div className='pb-8'>
  <p className='text-4xl font-bold  inline border-b-4 border-yellow-300 '>Work</p>
 <div>
  <p  className='py-6  inline'>Check out  my recent work:-</p>
  
  <a href='/'>
                  <button className='text-center rounded-lg px-2 py-0 m-2 bg-yellow-300 text-black font-bold text-lg'>
                    Code
                  </button>
                </a>
                </div>
  {/* <h2 className='text-4xl text-bold text-white'>Work</h2> */}

  
<img src={Working} alt="Work" class="responsive" />;
<div>  </div>

</div>
    </div>
    </div>
  )
}

export default Work