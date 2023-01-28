import React from "react"
import { Outlet } from "react-router-dom"
import MarketNav from "../Component/MarketNav"
import { IoOptionsOutline } from "react-icons/io5";
import Category from "../Component/Category"; 

 

const CATEGORIES  = [
   {
      name : "Editorials"
   },
   {
      name : "Fashions"
   },
   {
       name : "Optics"
   },
   {
       name : "Art & Museum"
   },
   {
      name : "Nature"
   }

] 
const Marketplace = () =>{
    return (
       <>
         <div className="grid grid-cols-5 ">
            <div className="w-[80%] mx-auto text-left">
                <input
                   placeholder="Search"
                   className="rounded bg-gray-300 "
                />
                <div>
                   <h1 className ="flex items-center border-b-4 w-[80%] pb-2"> <IoOptionsOutline size = "30px"/> Filter</h1>
                   <div className="mt-2">
                        <select
                           className= "mt-4 w-[100%]"
                         >
                           <option value = "By Category">B Category</option>
                        </select> 
                        <div> 
                           {
                              CATEGORIES.map((item)=>{
                                 return(
                                   <Category
                                     name = {item.name}
                                   />

                                 )
                              })
                           }
                          


                        </div>
                        

                   </div>
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