import React from "react"
import { Outlet } from "react-router-dom"
import MarketNav from "../Component/MarketNav"
import { IoOptionsOutline } from "react-icons/io5";
import Category from "../Component/Category"; 
import ProductSample from "../Component/ProductSample";

 

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
const ProductSampleData = [
   {
   

   },
   {


   },
   {


   },
   {
      
   }

]
const Marketplace = () =>{
    return (
       <>
         <div className="grid grid-cols-5 ">
            <div className="w-[80%] mx-auto text-left">
                <input
                   placeholder="Search"
                   className="rounded bg-gray-300 p-3"
                />
                <div>
                   <h1 className ="flex items-center border-b-4 w-[80%] pb-2 mt-10"> <IoOptionsOutline size = "30px"/> Filter</h1>
                   <div className="mt-2">
                        <select
                           className= "mt-4 w-[100%]"
                         >
                           <option value = "By Category">By Category</option>
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
                   <div>
                   <select
                           className= "mt-4 w-[100%]"
                         >
                           <option value = "By Category">By Price</option>
                        </select> 

                  <p>$100.00 - $150.00</p>


                   </div>
                   <div>
                         <select
                           className= "mt-4 w-[100%]"
                         >
                           <option value = "By Category">By artist</option>
                        </select> 
                        <ul className="mt-5">
                           <li>All</li>
                           <li>Below $100.00</li>
                           <li>$150.00 - $200.00</li>
                           <li>Above $200.00</li>
                        </ul>
                   </div>

                   <select
                           className= "mt-10 w-[100%]"
                         >
                           <option value = "By Category">Collection year</option>
                        </select>
                </div>
            </div>
            <div className="col-span-4 mx-auto">
                <input
                   placeholder="See 1-6 of 15 results"
                   className="rounded w-[80%] bg-gray-100 p-3"
                
                />
                <div>
                  <ProductSample
                  
                  />
                  <ProductSample
                  
                  />
                   <ProductSample
                  
                  />
                  <ProductSample
                  
                  />
                  <ProductSample
                  
                  />
                </div>


            </div>
              
            {/* <MarketNav/>
            <Outlet/> */}
         </div>
       </>

    )
}

export default Marketplace