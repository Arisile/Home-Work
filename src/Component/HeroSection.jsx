import React from 'react'
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-scroll';

const HeroSection = () => {
  const[mobile,setMobile]=useState(true)
  const Menu=()=>{
     setMobile(mobile)
  }
  return (
    <>
    
    <section className='relative h-screen bg-[url("assets/background.jpg")] text-white'>
    <div className=" z-0 absolute inset-0 bg-black bg-opacity-70"></div> 
    
    <nav className='absolute top-0 z-20 lg:flex w-full justify-between items-center px-10 py-8 hidden'>
        <div className=' flex'>
          <img className='h-[60px] w-[100px] bg-gray-800' src="https://img.freepik.com/premium-vector/ar-logo-design-abstract-initial-icon_733947-5145.jpg" />
            <h1 className='text-[30px] font-bold mt-2 '>
                ARISILE
            </h1>
        </div>
         <div>
      <ul className='flex text-lg font-semibold gap-9 transition-all duration-200 cursor-pointer '>
        
         <Link to='about' smooth={true} duration={500}><li className='  hover:text-blue-500  text-gray-400'>About</li></Link> 
          
         <li className='  hover:text-blue-500  text-gray-400'>Portfolio</li>
          <li className='  hover:text-blue-500  text-gray-400'>Service</li>
           <li className='  hover:text-blue-500  text-gray-400'>Testimonials</li>
     </ul>
         </div>
        
          <div>
            <button className='ring-1 ring-white px-8 py-3 font-semibold hover:bg-white hover:text-blue-700 transition-all duration-200 text-white'>Let`s Connect</button>
          </div>
    
    </nav>
    <nav className='flex justify-between lg:hidden'>
       <div className=' flex'>
          <img className='h-[40px] w-[100px] bg-gray-800' src="https://img.freepik.com/premium-vector/ar-logo-design-abstract-initial-icon_733947-5145.jpg" alt='Logo' />
             <h1 className='text-[30px] font-bold text-white'>
                ARISILE
            </h1> 
        </div>
      {mobile&& <div className='p-3 border-2 border-blue-800 rounded-md text-xl text-blue-800 lg:hidden flex'>
       <GiHamburgerMenu onClick={Menu} />
         </div>}
    </nav>
    <section className='relative z-10 text-white flex flex-col items-center justify-center h-full'>
        <div className='text-center w-[60%]'>
            <h1 className='font-bold text-6xl leading-snug  text-gray-400'>
       Freelance web developer based in Lagos  
    </h1>
    <p className='font-semibold text-lg  text-gray-400'>
        Expert development services by NYC-based freelancer for your website needs.
    </p>  
              
              
  </div>
   <div className='mt-10 space-x-3'>
    <button className='px-10 py-4 ring-1  text-gray-400 bg-gray-500 hover:text-blue-400 hover:bg-white font-semibold'>
      Let`s connect</button>
     <button className='px-10 py-4 ring-1  text-gray-400  hover:text-blue-400 hover:bg-white font-semibold'>Check my work</button>
  </div>

  <p className='text-gray-400 text-center mt-8 font-semibold text-xl bg-blue-500 ml-20 mr-20 sm:justify-center '>
    Proudly collaborated with some of the biggest brands
    </p>
        
    <section className='sm:flex sm:space-y-4 gap-9 justify-center mt-9 '>
      <img src="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/client-logo-01.svg" alt="" />
      <img src="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/client-logo-01.svg" alt="" />
      <img src="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/client-logo-03.svg" alt="" />
      <img src="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/client-logo-04.svg" alt="" />
      <img src="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/client-logo-05.svg" alt="" />
      <img src="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/client-logo-06.svg" alt="" />
    </section>
    </section>
      
    {mobile&&<ul className='flex text-lg font-semibold gap-9 transition-all duration-200 cursor-pointer '>
        
         <Link to='about' smooth={true} duration={500}><li className='  hover:text-blue-500  text-gray-400'>About</li></Link> 
          
         <li className='  hover:text-blue-500  text-gray-400'>Portfolio</li>
          <li className='  hover:text-blue-500  text-gray-400'>Service</li>
           <li className='  hover:text-blue-500  text-gray-400'>Testimonials</li>
     </ul>}
    
    
   
    </section>
    
    </>
  )
}

export default HeroSection