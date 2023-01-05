import React from 'react'
import product1 from "../assets/Images/product1.png"

const Product = () => {
  return (
    <>
      <div className='grid grid-cols-2 pt-10'>
        <div className='align-right'>
            <img className='mx-auto' src = {product1}/>
        </div>
        <div className='h-100'>
            <h1 className='text-left'>The Boolean Egyptian</h1>
            <p className='mt-[100px] w-100' >Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur</p>

        </div>

      </div>
      <div className='grid grid-cols-2 pt-10'>
        <div className=''>
            <img className='mx-auto' src = {product1}/>
        </div>
        <div className='my-auto'>
            <h1 className='text-left'>The Boolean Egyptian</h1>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur</p>

        </div>

      </div>
    </>
  )
}

export default Product