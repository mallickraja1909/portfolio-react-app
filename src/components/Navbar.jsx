import React, { useState } from 'react';
import Logo from '../assets/logo.jpg';
import {FaBars,FaTimes,FaGithub,FaLinkedin,FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll/modules';
// import Contact from './Contact';
const Navbar = () => {
  const [nav,setNav]=useState(false)
  const handleClick = ()=> setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#061b3b]  text-yellow-300 '>
     <div>
     <img src={Logo} alt="Logo"  style={{width: '50px'}}/>
     
     </div>
    
{/* menu below using unorderd list  & list */}
     {/* <div className='hidden md:flex'> */}
         <ul className='hidden md:flex text-2xl text-bold  '>
     <li>
     <Link  to="home" smooth={true} duration={500}>
          Home
        </Link>
     </li>

     <li>
     <Link  to="about" smooth={true} duration={500}>
          About
        </Link>
     </li>
     <li>
     <Link  to="skills" smooth={true} duration={500}>
          Skills
        </Link>
     </li>
     <li>
     <Link  to="work" smooth={true} duration={500}>
          Work
        </Link>
     </li>
     <li>
     <Link  to="contact" smooth={true} duration={500}>
         Contact
        </Link>
     </li>

     </ul>
     {/* </div> */}

     {/*  */}
     <div onClick={handleClick} className='md:hidden z-10'>
       {!nav ? <FaBars/> : <FaTimes/>}
         
     </div>
{/* mobile menu */}
<ul className= {
  
   !nav ? 'hidden' : "absolute top-0 right-0 w-10px h-screen bg-[#032c69] flex-col justify-center items-center "
   }
    >
     <li className='py-6 text-4xl'>
     <Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link>
     </li>
     <li className='py-6 text-4xl'>
     <Link  onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link>
     </li>
     <li className='py-6 text-4xl'>
     <Link  onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills
        </Link>
     </li>
     <li className='py-6 text-4xl'>
     <Link  onClick={handleClick} to="work" smooth={true} duration={500}>
          Work
        </Link>
     </li>
     <li className='py-6 text-4xl'>
     <Link  onClick={handleClick} to="contact" smooth={true} duration={500}>
         Contact
        </Link>
     </li>

     </ul>
     
{/* sociial icon linbks */}
<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>

<ul>
  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] bg-blue-500'>
    <a className='flex justify-between items-center w-full text-gray-300' 
    href="https://www.facebook.com/profile.php?id=100007839015581">
Facebook<FaFacebook size={30}/>
    </a>
  </li>
{/*  */}
<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] bg-gray-700'>
    <a className='flex justify-between items-center w-full text-gray-300' 
    href="https://github.com/mallickraja1909">
Github<FaGithub size={30}/>
    </a>
  </li>
  {/*  */}
  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] bg-blue-700'>
    <a className='flex justify-between items-center w-full text-gray-300' 
    href="https://www.linkedin.com/in/raja-mallick-2b62a0131/">
Linkedin<FaLinkedin size={30}/>
    </a>
  </li>
  {/*  */}
  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] bg-[#6fc2b0]'>
    <a className='flex justify-between items-center w-full text-gray-300' 
    href='URL={../D:\j-rjs\portfolio-react-app\src\components\Contact.jsx}'>
Mail<HiOutlineMail size={30}/>
    </a>
  </li>
  {/*  */}
  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] bg-[#565f69]'>
    <a className='flex justify-between items-center w-full text-gray-300' 
    href="/">
Resume<BsFillPersonLinesFill size={30}/>
    </a>
  </li>
</ul>


      </div>
      
</div>
       

  );
};

export default Navbar;