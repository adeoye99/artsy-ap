import React from "react"
import product1 from "../assets/Images/product1.png"
import product2 from "../assets/Images/product2.png"
import product3 from "../assets/Images/product3.png"
import BackgroundImage from "../assets/Images/backgroundslider.png"
import SliderImg1 from "../assets/Images/sliderimage1.png"
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
            <div style = {{ backgroundImage : `url(${BackgroundImage})`}} className = "min-h-screen w-full bg-center bg-cover relative flex justify-center items-center">
              <div className="w-[80%] mx-auto my-auto">
                 <div className="w-[80%] align-left">
                   <h1 className="text-white text-[25px] text-left border-b-1 border-yellow py-2 ">See Upcoming Aunction and Exhibition</h1>
                 </div>

                 <div style = {{ backgroundImage : `url(${SliderImg1})`}}  className = " md:grid grid-cols-2 h-[500px] w-[100%] mx-auto bg-center bg-cover opacity-100 mt-2 relative">  
                   <div className=" w-[100%] md:grid grid-cols-5 h-[50%] md:w-[70%] md:absolute bottom-1 left-0 ">
                      <div className="flex items-center justify-center" > 
                          <h1 className="text-white text-[60px]">01</h1>
                       </div>
                       <div className="md:pl-2 md:col-span-4 text-white text-left items-end text-lg md:mt-[60px] ">
                           <h1 className="text-white text-bellefair">MONALISA REDEFINED <br/> IN STYLE </h1>
                           <p>Start on : 08:00 GTS . Monday </p>
                           <p>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.</p>
                       </div>
                   </div>

                   <div className="pl-2 mt-[100px] md:absolute right-[40px] bottom-[30px] flex flex-row gap-6 items-center ">
                     <p className=" text-white border-b text-center justify-content-center px-auto text-[20px]"> 
                         See More
                      </p>
                      <button className="bg-transparent border text-white text-[20px] px-2 py-[20px] rounded-md hover:opacity-10">
                         Set a reminder
                      </button>
                   </div>
                 </div>
              </div>
               <div className=" absolute bottom-1 right-0 flex flex-row w-80 gap-2 h-30">
                  
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