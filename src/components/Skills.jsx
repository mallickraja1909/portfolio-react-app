import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
// import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-white'>
{/* container.... */}
<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div>

        <p className='text-4xl font-bold inline border-b-4 border-yellow-300 '>Skills</p>
      <br></br>
      <br></br>
       <p className='text-1xl font-bold text-white'>I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, React JS, building small and medium web apps.

</p>
       
        <p className='text-2xl font-bold'>These are the technologies I've worked with :-</p>
    </div>
    <div className='w-full grid grid-col-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-md shadow-[#ffab84] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
            <p className='my-4'>HTML</p>
        </div>
        {/*  */}
        <div className='shadow-md shadow-[#9fc6f7] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="CSS icon"/>
            <p className='my-4'>CSS</p>
        </div>
        {/*  */}
        <div className='shadow-md shadow-[#8ef5cd] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon"/>
            <p className='my-4'>Tailwind</p>
        </div>
        {/*  */}
        <div className='shadow-md shadow-[#e8f080] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="Javascript icon"/>
            <p className='my-4'>JavaScript</p>
        </div>
        {/*  */}
        <div className='shadow-md shadow-[#72b1ec] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="React Js icon"/>
            <p className='my-4'>React Js</p>
        </div>
{/*  */}
<div className='shadow-md shadow-[#aaff83] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt="Node Js icon"/>
            <p className='my-4'>Node Js</p>
        </div>
        {/*  */}
        <div className='shadow-md shadow-[#9caec5] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitHub} alt="Node Js icon"/>
            <p className='my-4'>GITHUB</p>
        </div>
        {/*  */}
        <div className='shadow-md shadow-[#ffffff] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={AWS} alt="Node Js icon"/>
            <p className='my-4'>AWS</p>
        </div>
{/*  */}
{/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt="Node Js icon"/>
            <p className='my-4'>Node Js</p>
        </div> */}
        {/*  */}
        <div className='shadow-md shadow-[#5ca14b] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Mongo} alt="Node Js icon"/>
            <p className='my-4'>MONGO DB</p>
        </div>

    </div>
</div>

    </div>

  )
}

export default Skills