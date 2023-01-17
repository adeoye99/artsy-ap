import React from "react"
import product1 from "../assets/Images/product1.png"
import product2 from "../assets/Images/product2.png"
import product3 from "../assets/Images/product3.png"
import BackgroundImage from "../assets/Images/backgroundslider.png"
import Backward from "../assets/Images/backwardarrow.png"
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md"



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
            <div style = {{ backgroundImage : `url(${BackgroundImage})`}} className = "min-h-screen w-full bg-center bg-cover relative">
              <div className="w-[80%] mx-auto my-auto">
                 <div className="w-[80%] align-left">
                   <h1 className="text-white text-[25px] text-left border-b-1 border-yellow py-2 ">See Upcoming Aunction and Exhibition</h1>
                 </div>

                 <div style = {{ backgroundImage : `url(${product1})`}}  className = "grid grid-cols-2 h-[500px] w-[100%] mx-auto  bg-center bg-cover opacity-100 mt-2 relative">  
                   <div className="grid grid-cols-2 ">
                      <div className="items-center">
                          <h1 className="text-white">01</h1>
                       </div>
                       <div>
                       <h1 className="text-white ">MONALISA REDEFINED <br/> IN STYLE </h1>2
                       <p>Start on : 08:00 GTS . Monday </p>
                       <p>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.</p>
                       </div>
                      
                   </div>

                   <div className="absolute right-[40px] bottom-[30px] flex flex-row gap-6 items-center ">
                     <p className=" text-white border-b text-center justify-content-center px-[40px]"> 
                         See More
                      </p>
                    <button className="bg-transparent border text-white px-2 py-[20px] rounded-md hover:opacity-10">
                       Set a reminder
                    </button>
                          
                   </div>
                 </div>
              </div>
               <div className="absolute bottom-1 right-0 flex flex-row w-80 gap-2 h-10">
                  
                       <MdOutlineArrowBackIos
                         size = "35px"
                       /> 
                       <MdOutlineArrowForwardIos
                         size = "35px"
                       /> 
                    
                </div>
          </div>
        
        </>
        
    )


}

export default Slider 