import React from "react"
import product1 from "../assets/Images/product1.png"
import product2 from "../assets/Images/product2.png"
import product3 from "../assets/Images/product3.png"
import BackgroundImage from "../assets/Images/backgroundslider.png"
import Backward from "../assets/Images/backwardarrow.png"
import { MdOutlineArrowForwardIos } from "react-icons/md";


const ImageSlider = [
    {
      url : product1
    },
    {
       url : product2

    },
    {
        url : product3
    },
]
const Slider = () =>{
    return (
        <>
            <div style = {{ backgroundImage : `url(${BackgroundImage})`}} className = "min-h-screen w-full bg-center bg-cover">
              <div className="w-[80%] mx-auto my-auto">
                 <div className="w-[80%] align-left">
                   <h1 className="text-white text-[25px] text-left border-b-1 border-yellow py-2">See Upcoming Aunction and Exhibition</h1>
                 </div>

                 <div style = {{ backgroundImage : `url(${product1})`}}  className = "h-[500px] w-[100%] mx-auto  bg-center bg-cover opacity-100 mt-2">  
                  
                 </div>
              </div>
              <div className="absolute bottom-3 right-3 grid grid-cols-2 z-auto">
                     cnvdkcvjfcfvb
                    <div style={{backgroundImage :`url(${Backward})`}}>
                       <MdOutlineArrowForwardIos/> 
                    </div>
                    <div style={{backgroundImage :`url(${Backward})`}}>
                       <MdOutlineArrowForwardIos/> 
                    </div>


                 </div>
                
          </div>
        
        </>
        
    )


}

export default Slider 