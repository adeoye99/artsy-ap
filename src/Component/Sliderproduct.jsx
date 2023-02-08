import React from 'react'
import Slide1 from "../assets/Images/slide1.png"


const Sliderproduct = () => {
    return (
        <>
           <div className='h-[300px] w-[80%] bg-center bg-cover ml-2 rounded-2xl text-center' style = {{ backgroundImage : `url(${Slide1})`}}  >
              <button className='bg-transparent bottom-3 text-white mx-auto mt-[55%] border border-white w-[45%] h-[15%] rounded-sm '>6hrs : 40mins : 5secs </button>
           </div>
            
        </>
    )
}

export default Sliderproduct
