import React from 'react'
import ProductS1 from "../assets/Images/ProductS1.png"


const ProductSample = ({image ,  name ,price}) => {
  return (
    <>
    <div className=' w-[80%] md:w-[20%]  md:bg-white md:h-[370px] text-left float-left ml-[8%] mt-[5%] p-3 rounded-md mb-[5%]'>
       <img 
         className='w-[100%] '
          src = {image}
        />
        <p>{name}</p>
        <p className='text-[20px] text-bold font-bold mt-5 '>{price}</p>


    </div>

    </>
  )
}

export default ProductSample