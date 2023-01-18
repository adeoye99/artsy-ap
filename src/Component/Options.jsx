import React from 'react'

import { IoArrowForwardSharp } from "react-icons/io5";


const Options = ({ name }) => {
  return (
    <>
    <div className='grid grid-cols-2 border-t-2 border-b-2'>

        <div className='flex justify-center items-center'  >
            <h1 className='text-lg md:text-[30px]'>{name}</h1>
        </div>
        <div  className='flex justify-center items-center' >

            <IoArrowForwardSharp
               color =  "#4693ED"
               size = "80px"
            />



        </div>
        



    </div>
    


    </>
  )
}

export default Options