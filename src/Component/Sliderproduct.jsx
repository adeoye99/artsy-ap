import React from 'react'
import Slide1 from "../assets/Images/slide1.png"


const Sliderproduct = () => {
    return (
        <>
           <div className='h-[300px] w-[80%] bg-center bg-cover ml-2 rounded-2xl text-center' style = {{ backgroundImage : `url(${Slide1})`}}  >
              <button className='bottom-3 text-white text-lg mx-auto mt-[55%] border border-white w-[50%] h-[15%] rounded-sm bg-white bg-opacity-25 hover:bg-transparent'>6hrs : 40mins : 5secs </button>
           </div>
            
        </>
    )
}

export default Sliderproduct
