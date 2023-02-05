import React , { useState } from "react"
import { Outlet } from "react-router-dom"
import MarketNav from "../Component/MarketNav"
import { IoOptionsOutline } from "react-icons/io5";
import Category from "../Component/Category"; 
// import {ProductS1 , ProductS2} from "../assests/Images"
import ProductSample from "../Component/ProductSample";
import ProductS1 from "../assets/Images/ProductS1.png"
import ProductS2 from "../assets/Images/ProductS2.png"
import ProductS3 from "../assets/Images/ProductS3.png"
import ProductS4 from "../assets/Images/ProductS4.png"
import ProductS5 from "../assets/Images/ProductS5.png"
import ProductS6 from "../assets/Images/ProductS6.png"
import ProductS7 from "../assets/Images/ProductS7.png"
import ProductS8 from "../assets/Images/ProductS8.png"
import ProductS9 from "../assets/Images/ProductS9.png"

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
 

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
      img: ProductS1,
      name_of_product : "PHILOMENA ‘22",
      price : "$3.90"
   },
   {
      img: ProductS2,
      name_of_product : "BOOLEAN EGYPTIAN",
      price : "$3.90"


   },
   {
      img: ProductS3,
      name_of_product : "BLANC",
      price : "$3.90"


   },
   {
      img: ProductS4,
      name_of_product : "ELLIPSIA",
      price : "$3.90"
      
   },
   {
      img: ProductS5,
      name_of_product : "THE LAWMAKERS",
      price : "$3.90"
      
   },
   
      {
         img: ProductS6,
         name_of_product : "VEIL",
         price : "$3.90"
         
      },
      {
         img: ProductS7,
         name_of_product : "ALTERNATING",
         price : "$3.90"
         
      },
      {
         img: ProductS8,
         name_of_product : "ROSEMARY ",
         price : "$3.90"
         
      },
      {
         img: ProductS9,
         name_of_product : "BEVERLY",
         price : "$3.90"
         
      }
   

]
const Marketplace = () =>{

   function valuetext(value) {
      return `${value}°C`;
    }
    
   
      const [value, setValue] = useState([20, 37]);
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
       <>
         <div className="grid grid-cols-5 w-[100%] h-screen flex">
            <div className="hidden md:w-[80%] mx-auto text-left md:block md:mt-4 pt-4 pl-[20%] ">
                <input
                   placeholder="Search"
                   className="rounded bg-gray-300 p-3 w-40"
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
                           className= "mt-4 w-[100%] pl-0"
                         >
                           <option value = "By Category">By Price</option>
                        </select> 

                        <p className="mt-4">$100.00 - $150.00</p>
                        <Box sx={{ width: 100 ,marginTop : 5 }}>
                        <Slider
                          getAriaLabel={() => 'Temperature range'}
                          value={value}
                          onChange={handleChange}
                          valueLabelDisplay="auto"
                          getAriaValueText={valuetext}
                          sx= {{ color : "black"}}
                        />
                      </Box>


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
            <div className="w-[100%] col-span-6 md:col-span-4 mx-auto mt-4 pt-4 bg-gray-100 flex-1 overflow-hidden overflow-y-scroll">
               
                <input
                   
                   placeholder="See 1-6 of 15 results"

                   className="rounded w-[80%] bg-white p-3"
                
                />
                <div className="flex flex-col">
                  <div>
                  {

                        ProductSampleData.map(
                           (item)=>{
                              return(
                                 <ProductSample
                                   name ={item.name_of_product}
                                   price = {item.price}
                                   image ={item.img}
                                 />


                              )
                           }
                        )
                  }
                  </div>
                 
                  <button className="border-2 py-3 w-40 mx-auto rounded-lg mb-4 bg-white">See More</button>
                
               </div>
            </div>
         </div>
       </>

    )
}

export default Marketplace