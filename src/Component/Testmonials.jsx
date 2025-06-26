import React from 'react'
import TestmonialProps from './TestmonialProps'

const Testmonials = () => {
  return (
    <section>
      <h1 className='text-center pb-12 font-bold text-5xl'>See why they love my work</h1>
         <div className='grid grid-cols-2 gap-3 px-10 '>
         <TestmonialProps/> 
         <TestmonialProps/> 
         <TestmonialProps/> 
          <TestmonialProps/> 
    </div>
    </section>
   
  )
}

export default Testmonials