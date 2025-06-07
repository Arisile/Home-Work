import React from 'react'

const ServiceList = ({Num,Skills,About,list1,list2,list3,image}) => {
  return (
    
       <section className='flex'>
        <div>
        <p>{Num}</p>
        <h1>{Skills}</h1>
        <p>{About}</p>
        <p>{list1}</p>
        <p>{list2}</p>
        <p>{list3}</p>
        </div>
        <img src={image} alt="" />
        </section> 
    
  )
}

export default ServiceList