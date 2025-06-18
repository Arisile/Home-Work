import React from 'react'
import CountUp from 'react-countup'

const Stat = () => {
  return (
    <section className=' py-60  '>
        <div className='lg:flex justify-center gap-2 px-10 sm:grid grid-cols-2'>
            <div className='flex items-center gap-2 lg:border-r-[1px] border-gray-400 px-16'>
                <h1 className='text-6xl'>
                    <CountUp delay={2} end={10} duration={2.75}/>
                    </h1>
                    < p className='text-xl'>Years of <br /> experience</p>
            </div>
             <div  className="flex items-center gap-2 lg:border-r-[1px] border-gray-400 px-16 ">
                <h1 className='text-6xl'>
                    <CountUp delay={2} end={120} duration={2.75}/>
                    </h1>
                    <p className='text-xl'>Successful <br /> projects</p>
            </div>
             <div   className="flex items-center gap-2 lg:border-r-[1px] border-gray-400 px-16">
                <h1  className='text-6xl'>
                    <CountUp delay={2} end={48} duration={2.75}/>
                    </h1>
                    <p className='text-xl'>Happy clients</p>
            </div>
             <div  className="flex items-center gap-2  px-16">
                <h1  className='text-6xl'>
                     <CountUp delay={2} end={7} duration={2.75}/>
                    </h1>
                    <p className='text-xl'>individual award</p>
            </div> 
        </div>
    </section>
  )
}

export default Stat