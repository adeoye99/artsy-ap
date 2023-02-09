import React from "react"
import Upcomingdrops from "../Component/Upcomingdrops"
import upcoming1 from "../assets/Images/upcomingdropimg1.png"
import upcoming2 from "../assets/Images/upcomingdropimg2.png"
import upcoming3 from "../assets/Images/upcomingdropimg3.png"


const Upcomingdrop = [

    {
      img : upcoming1

    },
    {
      img : upcoming2

    },
    {
      img: upcoming3

    }
]

const Drop = () =>{
    return (
        <div>
              <div className="h-[300px]">
                <div className="mx-auto mt-[100px]">
                  <h1 className="text-5xl font-semibold">Upcoming Drop</h1>
                  <p className="mt-[2%] text-xl text-gray-500">Turn on notifications so that no drops will miss you.</p>
                  <button className="w-[50%] border border-black md:border md:border-black rounded-sm md:w-[18%] h-[45px] mt-[1%] hover:bg-opacity-25" >Notify me</button>
                 </div>
              </div>
              <div>
                {
                    Upcomingdrop.map((item)=>{
                        return(
                            <Upcomingdrops
                              img = {item.img}
                   
                             />
                        )

                    })


                } 
                  
                 
             
                
              </div>
        </div>


    )


}

export default Drop