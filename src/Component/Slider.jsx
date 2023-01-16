import React from "react"
import product1 from "../assets/Images/product1.png"
import product2 from "../assets/Images/product2.png"
import product3 from "../assets/Images/product3.png"
import BackgroundImage from "../assets/Images/backgroundslider.png"

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
            <div style = {{ backgroundImage : `url(${product1})`}} className="hw-full bg-center">
            <h1>
                THE SLIDER
            </h1>
            <div style = {{ backgroundImage : `url(${ImageSlider[0].url})`}}  className = "h-[80%] w-[80%] m-auto bg-center bg-cover">  
                  
            </div>     
          </div>
        
        </>
        
    )


}

export default Slider 