import React from 'react'

const Stat = () => {
  return (
    <section className='text-white bg-[#0b043a] py-60 pr-5'>
        <div className='flex justify-center gap-4 px-10'>
            <div className='flex items-center gap-2 border-r-[1px] border-white px-6'>
                <h1 className='text-6xl'>
                    10
                    </h1>
                    < p className='text-xl'>Years of experience</p>
            </div>
             <div className='flex items-center gap-2 border-gray-300 px-10 pr-4'>
                <h1 className='text-6xl'>
                    120
                    </h1>
                    <p className='text-xl'>Successful projects</p>
            </div>
             <div  className='flex items-center gap-2  border-gray-300 px-10 pr-4'>
                <h1  className='text-6xl'>
                    48
                    </h1>
                    <p className='text-xl'>Happy clients</p>
            </div>
             <div className='flex items-center gap-2  border-gray-300 px-10 pr-4'>
                <h1  className='text-6xl'>
                    7
                    </h1>
                    <p className='text-xl'>individual award</p>
            </div> 
        </div>
    </section>
  )
}

export default Stat