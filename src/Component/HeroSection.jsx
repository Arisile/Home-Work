import React from 'react'

const HeroSection = () => {
  return (
    <>
    
    <section className='relative h-screen bg-[url("assets/background.")] bg-cover bg-black'>
    {/* <div className='absolute inset-0 bg-black opacity-60'></div> */}
    
    <nav className='absolute top-0 z-20 flex w-full justify-between items-center px-10 py-8'>
        <div className='bg-gray-800'>
          <img className='h-[40px] w-[100px] bg-gray-800' src="https://img.freepik.com/premium-vector/ar-logo-design-abstract-initial-icon_733947-5145.jpg" />
            {/* <h1 className='text-[20px] font-bold text-gray-400'>
                LOGO
            </h1> */}
        </div>
         <div>
      <ul className='flex text-lg font-semibold gap-9 transition-all duration-200 cursor-pointer '>
        <li className='  hover:text-blue-500  text-gray-400'>About</li>
         <li className='  hover:text-blue-500  text-gray-400'>Portfolio</li>
          <li className='  hover:text-blue-500  text-gray-400'>Service</li>
           <li className='  hover:text-blue-500  text-gray-400'>Testimonials</li>
     </ul>
         </div>
          <div>
            <button className='ring-1 ring-white px-8 py-3 font-semibold hover:bg-white hover:text-blue-700 transition-all duration-200 text-white'>Let`s Connect</button>
          </div>
    
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

  <p className='text-gray-400 text-center mt-8 font-semibold text-xl bg-blue-500 ml-20 mr-20'>
    Proudly collaborated with some of the biggest brands
    </p>
        
    <section className='flex gap-9 justify-center mt-9'>
      <img src="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/client-logo-01.svg" alt="" />
      <img src="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/client-logo-01.svg" alt="" />
      <img src="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/client-logo-03.svg" alt="" />
      <img src="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/client-logo-04.svg" alt="" />
      <img src="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/client-logo-05.svg" alt="" />
      <img src="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/client-logo-06.svg" alt="" />
    </section>
    </section>
   
    
    
   
    </section>
    
    </>
  )
}

export default HeroSection