import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
const Portfolio = () => {
  return (
    <div>
      <section className='h-screen  px-6   py-20 pl-14 lg:pr-20' 
     id='portfolio'>
        <h1 className='text-4xl font-bold  mb-8 '>Featured Work</h1>
       <div className='flex  ring-2 lg:flex pl-14px h-fit'>
          <div className='w-[60%]'>
            <img className='h-[400px] pt-6 pb-6 lg:w-full lg:h-[500px]' src="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/work-01.jpg" alt="" />
          </div>
          <div className='w-[40%] bg-[#181448] px-4'>
            <p className='text-lg pt-6 text-[20px] py-6'>Full-Stack</p>
            <h1 className='sm:text-[30px] lg:text-[40px] font-bold py-2'>Nientex Website Redesign</h1>
            <p>Revamp your online presence with a modern and user-friendly Nientex website redesign that showcases your hotel's luxury amenities and increases bookings.</p>
            <button className='py-8 font-bold flex'>Project Detail<GoArrowUpRight className='mt-1 text-lg' /></button>
          </div>
       </div>
      </section>


    </div>
  )
}

export default Portfolio