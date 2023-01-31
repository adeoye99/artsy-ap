import React from 'react'
import ProductS1 from "../assets/Images/ProductS1.png"

const ProductSample = () => {
  return (
    <>
    <div className='bg-white w-50 text-left float-left ml-[10%] mt-[5%]'>
       <img 
          src = {ProductS1}
        />
        <p>PHILOMENA '22</p>
        <strong>$3.90</strong>


    </div>

    </>
  )
}

export default ProductSample