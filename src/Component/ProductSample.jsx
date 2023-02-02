import React from 'react'
import ProductS1 from "../assets/Images/ProductS1.png"


const ProductSample = ({image ,  name ,price}) => {
  return (
    <>
    <div className='bg-white w-50 h-[300px] text-left float-left ml-[5%] mt-[5%] p-3 rounded-md mb-[5%]'>
       <img 
         className=' h-[200px]'
          src = {image}
        />
        <p>{name}</p>
        <p className='text-[20px] text-bold mt-5 '>{price}</p>


    </div>

    </>
  )
}

export default ProductSample