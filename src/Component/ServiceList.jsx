import React from 'react'
import { TiMediaPlay } from "react-icons/ti";

const ServiceList = ({Num,Skills,About,list1,list2,list3,image}) => {
  return (
    
       <section className='flex py-20 pl-20 pr-20'>
        <div>
        <p className='text-purple-500'>{Num}</p>
        <h1 className='font-bold text-[30px]'>{Skills}</h1>
        <p className='lg:text-lg mt-6'>{About}</p>
        <div className='text-base mt-8 space-y-4'>
        <p className='flex gap-2'><TiMediaPlay className='text-xl' />{list1}</p>
        <p className='flex gap-2'><TiMediaPlay className='text-xl' />{list2}</p>
        <p className='flex gap-2'><TiMediaPlay className='text-xl' />{list3}</p>
        </div>
        
        </div>
        <img className='sm:w-[300px] sm:h-[250px] lg:w-[600px] lg:h-[400px]' src={image} alt="" />
        </section> 
    
  )
}

export default ServiceList