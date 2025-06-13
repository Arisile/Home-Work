import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='h-fit'>
        <div className='text-white flex px-10 h-full items-center w-full justify-between'>
            <div>
              <div>
                <h1>
                 Let’s connect and create something awesome together!{" "}
                </h1>
                </div>
           <div>
            <h1>
          <a href="#">hi@johnsmith.dev</a>
            </h1>
           </div>
            </div>
            
             
 <div className='flex gap-5 text-2xl' >
              <FaTwitter />  <MdOutlineFacebook /> <FaDiscord /> <FaYoutube />
         </div>
        </div>
        <div className='text-center py-10'>
        &copy;2025 web devloper
            
     </div>
    </footer>
  )
}

export default Footer