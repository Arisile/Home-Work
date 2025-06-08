import React from 'react'

const Portfolio = () => {
  return (
    <div>
      <section className='h-screen flex px-6  bg-[#0b043a] text-white  py-20 pl-14' 
     id='portfolio'>
       <div className='flex sm:h-[400px] sm:w-[800px] ring-2 lg:w-screen lg:h-[500px] lg:flex pl-14px'>
          <div className='w-[60%]'>
            <img className='h-[400px] pt-6 pb-6' src="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/work-01.jpg" alt="" />
          </div>
          <div className='w-[40%] bg-[#181448]'>
            <p>Full-Stack</p>
            <h1>Nientex Website Redesign</h1>
            <p>Revamp your online presence with a modern and user-friendly Nientex website redesign that showcases your hotel's luxury amenities and increases bookings.</p>
            <button>Project Detail</button>
          </div>
       </div>
      </section>


    </div>
  )
}

export default Portfolio