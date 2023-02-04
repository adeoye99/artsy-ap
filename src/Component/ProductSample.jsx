import React from 'react'
import ProductS1 from "../assets/Images/ProductS1.png"


const ProductSample = ({image ,  name ,price}) => {
  return (
    <>
    <div className='bg-white  h-[370px] text-left float-left ml-[8%] mt-[5%] p-3 rounded-md mb-[5%]'>
       <img 
         className=' '
          src = {image}
        />
        <p>{name}</p>
        <p className='text-[20px] text-bold font-bold mt-5 '>{price}</p>


    </div>

    </>
  )
}

export default ProductSample