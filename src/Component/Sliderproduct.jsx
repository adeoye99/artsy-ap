import React from 'react'
import Slide1 from "../assets/Images/slide1.png"


const Sliderproduct = () => {
    return (
        <>
           <div className='h-[300px] w-[80%] bg-center bg-cover ml-2 rounded-2xl text-center' style = {{ backgroundImage : `url(${Slide1})`}}  >
              <button className='w-[70%] md:bottom-3 text-white text-xl mx-auto mt-[35%] border border-white md:w-[50%] h-[20%] rounded-sm bg-white bg-opacity-25 hover:bg-transparent'>6hrs : 40mins : 5secs </button>
           </div>
        </>
    )
}

export default Sliderproduct
