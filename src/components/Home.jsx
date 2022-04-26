import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name='home'   className='w-full h-screen bg-[#0a192f]'>

{/* container */}
<div  className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
  
<p className='text-yellow-300 text-2xl font-bold  hover:scale-110 duration-500 ' >Hello, my name is</p>
<h1 className='text-4xl sm:text-7xl font-blod text-[#ccd6f6] hover:scale-110 duration-500'>Raja Mallick</h1>
<h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] hover:scale-110 duration-500'>I'm a Front-end developer</h2>
<p className='text-[#8892b0] py-4 max-w-[799px]'>I'm a Front-end developer specilizing in building web front-end . 
   <p className='text-[#8892b0] py-4 max-w-[799px]'>Currently, I am in the procedure of finding the right job.

I would like to be a part of a reputed firm, where I can utilize my Front-end developement skills and knowledge . This would be the right opportunity and I strongly believe that if given a chance I will prove myself.</p> 
</p>
<div>
  <button className='text-white text-1xl text- group border-2 px-6 py-3  my-2 flex items-center hover:bg-yellow-500 hover:border-green-600 '>
    View Work
  <span className='group-hover:rotate-90 duration-300'>
  <HiArrowNarrowRight className='ml-3 hover:'/>
  </span> 
  </button>
  
</div>
</div>

    </div>
  )
}

export default Home