import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name='home'   className='w-full h-screen bg-[#0a192f]'>

{/* container */}
<div  className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
<p className='text-pink-600 text-2xl font-bold ' >Hi, my name is</p>
<h1 className='text-4xl sm:text-7xl font-blod text-[#ccd6f6] '>Raja Mallick</h1>
<h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front-end developer</h2>
<p className='text-[#8892b0] py-4 max-w-[799px]'>I'm a Front-end developer specilizing in building web front-end . 
  Currently, I'm focused on learning Mern-stack developement. 
</p>
<div>
  <button className='text-white group border-2 px-6 py-3  my-2 flex items-center hover:bg-pink-600 hober:border-pink-600'>
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