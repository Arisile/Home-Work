import React from 'react'
import ServiceList from './ServiceList'

const Service = () => {
  return (
    <section
    className='h-full flex px-8  bg-[#0b043a] text-white   ' 
     id='service'>
        <div>
           <h1 className='text-4xl font-bold  mb-8 '>Services</h1>
           <div className='space-y-10'>
            <div>
               <ServiceList Num="01" Skills="Front End" About="Our web developer is proficient in designing beautiful and intuitive interfaces that enhance user experience, making our hotel’s website a pleasure to navigate." list1="Donec aenean duis vel id mattis nunc" list2="Suscipit integer amet adipiscing adipiscing" list3="Velit habitasse cursus velit" image="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/service-01.jpg"/>
               <hr className='mt-14' />
            </div>
           <div>
             <ServiceList Num="02" Skills="Back End" About="Our web developer can handle complex server-side processes including database management, ensuring seamless functionality of the website." list1="Donec aenean duis vel id mattis nunc" list2="Suscipit integer amet adipiscing adipiscing" list3="Velit habitasse cursus velit" image="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/service-02.jpg"/>
           <hr className='mt-10' />
           </div>
            <div>
               <ServiceList Num="03" Skills="Full Stack" About="Our full-stack web developer is a one-stop-shop for all web development needs – from creating visually stunning front-ends to handling complex back-end processes, making our hotel website run smoothly and efficiently." list1="Donec aenean duis vel id mattis nunc" list2="Suscipit integer amet adipiscing adipiscing" list3="Velit habitasse cursus velit" image="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/service-03.jpg"/>
               <hr className='mt-10' />
            </div>
           
        </div>
        </div>

    </section>



  )
}

export default Service