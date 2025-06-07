import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const About = () => {
  return (
    <>
    <section
     className='h-screen flex px-6  bg-[#0b043a] text-white  py-20 pl-14' 
     id='about'>
        
    <div className='flex w-[40%] '>
        <div className='relative w-[70%] bg-[#181448] ring-1 mt-10'>
            
           <img className='absolute right-[-40%]  top-[-60px] mt-8'
            src=" https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/about.jpg " alt="" />
             <div className=' absolute bottom-5 w-full text-3xl flex gap-6 justify-center py-5 pr-11'>
              <FaTwitter />  <MdOutlineFacebook /> <FaDiscord /> <FaYoutube />
         </div>
        </div>
        
     </div>
    <div className='flex w-[60%] flex-col gap-4 justify-center items-center'>
    <p className='text-3xl font-semibold'>
        I’m John Smith. I’m passionate about crafting exceptional websites. With a blend of design skills and coding expertise, I create unique online experiences that captivate users.
    </p>
    <p className='text-xl '>
        Looking for a top-notch web developer to revamp your hotel’s website? Look no further than John Smith. With years of experience and a keen eye for design, John can take your site to the next level, helping you attract more visitors and boost your bookings.
    </p>
    </div>
    
    </section>
    <hr />
  
    </>
  )
}

export default About