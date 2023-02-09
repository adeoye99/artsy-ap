import React from 'react'
import product1 from "../assets/Images/product1.png"
import product2 from "../assets/Images/product2.png"
import product3 from "../assets/Images/product3.png"
// import product3 from "../assets"
import { BsArrowRightCircle } from "react-icons/bs";

const Product = ({title ,img , about}) => {
  return (
    <>
      <div className='mx-[0px] md:grid grid-cols-2 mt-[100px] py-[100px] w-[80%] md:mx-auto border-t-2'>
        <div data-aos="fade-left" className=''>
            <img className='float-right' src = {product1}/>
        </div>
          <div data-aos="fade-right" className=' text-left w-full md:text-left mr-[190px] md:px-[80px]'>
            <h1 className='text-[10px] w-full flex md:font-semibold text-3xl' >The Boolean Egyptian</h1>
            <p className='text-sm flex w-50 pl-4 md:mt-[50px] margin-top text-[20px]' >Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit ut aliquam, purus sit amet luctus venenatis,<br/> lectus magna fringilla urna, porttitor rhoncus dolor pur</p>
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
      <div className=' md:grid grid-cols-2 mt-[100px] py-[100px] w-[80%] md:mx-auto border-t-2'>
       
        <div className='text-left w-full md:px-[80px]'>
            <h1 className='pl-3 md:font-semibold text-3xl' >The Boolean Egyptian</h1>
            <p className=' pl-4 md:mt-[50px] margin-top text-[20px]' >Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit ut aliquam, purus sit amet luctus venenatis,<br/> lectus magna fringilla urna, porttitor rhoncus dolor pur</p>
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
            <img className='float-left' src = {product2}/>
        </div>

      </div>

      <div className='mx-[0px] md:mx-auto md:w-[80%] grid grid-cols-2 mt-[100px] py-[100px] border-t-2'>
        <div className=''>
            <img className='float-right' src = {product3}/>
        </div>
        <div className='w-full md:text-left mr-[190px] md:px-[80px]'>
            <h1 className='pl-3 text-[10px] w-full flex md:font-semibold text-3xl' >The Boolean Egyptian</h1>
            <p className='pl-3 text-sm flex w-50 md:mt-[50px] margin-top text-[20px]' >Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit ut aliquam, purus sit amet luctus venenatis,<br/> lectus magna fringilla urna, porttitor rhoncus dolor pur</p>
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
    </>
  )
}

export default Product