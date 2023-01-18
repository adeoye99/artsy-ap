import React from 'react'

import { IoArrowForwardSharp } from "react-icons/io5";


const Options = () => {
  return (
    <>
    <div className='grid grid-cols-2 border-t-2 '>

        <div className='flex justify-center items-center'  >
            <h1 className='text-[50px]'>ExploreMarket place</h1>
        </div>
        <div  className='flex justify-center items-center' >

            <IoArrowForwardSharp
               color =  "#4693ED"
               size = "100px"
            />



        </div>
        



    </div>
    


    </>
  )
}

export default Options