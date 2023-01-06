import React from 'react'
import product1 from "../assets/Images/product1.png"
import { BsArrowRightCircle } from "react-icons/bs";

const Product = () => {
  return (
    <>
      <div className='grid grid-cols-2 mt-[100px] py-[100px] mx-[100px] border-t-2'>
        <div className=''>
            <img className='float-right' src = {product1}/>
        </div>
        <div className=' text-left ml-10 mr-[190px]'>
            <h1 className='font-semibold text-3xl' >The Boolean Egyptian</h1>
            <p className='mt-[50px] margin-top text-[20px]' >Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit ut aliquam, purus sit amet luctus venenatis,<br/> lectus magna fringilla urna, porttitor rhoncus dolor pur</p>
            <div>
              <div>

              </div>
              <div className='float-right'>
                  <BsArrowRightCircle
                  size = "80px"
                  />
              </div>
            </div>
        </div>

      </div>
      <div className='grid grid-cols-2 mt-[100px] py-[100px] mx-[80px] border-t-2'>
       
        <div className=' text-left mr-10 ml-[190px]'>
            <h1 className='font-semibold text-3xl' >The Boolean Egyptian</h1>
            <p className='mt-[50px] margin-top text-[20px]' >Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit ut aliquam, purus sit amet luctus venenatis,<br/> lectus magna fringilla urna, porttitor rhoncus dolor pur</p>
            <div>
              <div>

              </div>
              <div className='float-right'>
                  <BsArrowRightCircle
                  size = "80px"
                  />
              </div>
            </div>
        </div>
        <div className=''>
            <img className='float-left' src = {product1}/>
        </div>

      </div>
    </>
  )
}

export default Product