import React from "react"
import { Outlet } from "react-router-dom"
import MarketNav from "../Component/MarketNav"
import { IoOptionsOutline } from "react-icons/io5";



const Marketplace = () =>{
    return (
       <>
         <div className="grid grid-cols-5 ">
            <div className="">
                <input
                   placeholder="Search"
                   className="rounded bg-gray-300 "
                />
                <div >
                   <h1 className="flex items-center justify-center border-b-4 w-[80%] mx-auto pb-2"> <IoOptionsOutline size = "30px"/> Filter</h1>
                   
                </div>
            </div>
            <div className="col-span-4">


                <input
                   placeholder="Search"
                   className="rounded w-[80%] bg-gray-100"
                
                />


            </div>
              
            {/* <MarketNav/>
            <Outlet/> */}
         </div>
       </>

    )
}

export default Marketplace