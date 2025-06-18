import { list } from 'postcss'
import React from 'react'

const PortfoliosProps = ({image,desp1,desp2}) => {
  return (
    <section className='border-2 space-x-2'>
        <div>
        <div className='w-50%'>
           <img className='  pb-4 lg:w-full lg:h-[500px]' src={image} alt="" /> 
        </div>
        <div className='pt-4 pl-8'>
            <p  className='text-lg pt-2 text-[20px] py-2'>{desp1}</p>
            <p className='sm:text-[30px] lg:text-[40px] font-bold py-2'>{desp2}</p>
            
        </div>
        </div>
        
    </section>


  )
}

export default PortfoliosProps