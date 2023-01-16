import React , { useState } from 'react';
import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineBell } from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";

import { FaBars } from "react-icons/fa";



const searchStyle = {
  fontSize : "18px"
}
const NavLinkdetails = [
  {
    name : "Home",
    link : "/"

  },
  { 
    name : "Marketplace",
    link : "marketplace"

  },
  {
    name: "Auction",
    link: "auction"
    
  },
  {
    name : "Drop",
    link: "drop"
  }


]
     



const NavLink = ({link , name}) =>{
  return (

    <Link to = {link}>
          <p >
            {name}
          </p>
        </Link>


  )


}

const SidebarLink = ({link , name }) =>{
  return (

    <Link to = {link}>
          <h1  className='mt-[100px] text-left pl-[50px] text-lg font-200'>
            {name}
          </h1>
    </Link>


  )


}
const Navbar = () => {

  const [open , setOpen ] = useState(false)
  return (
    <>
    <div className='grid grid-cols-3 h-[80px] '>
        <div className=' m-auto w-2'>
            <p className='z-50 md:font-bold text-[23px]'>ARTSY</p>
        </div>
        <div onClick = {()=>{setOpen(!open)}} className = "absolute z-50 right-4 top-6 md:hidden">
          {
            open ?
            <HiOutlineXMark
              size = "25px"
             />
             :
             
             <FaBars
               size = "25px" 
             />
          }
                       
        </div>
       <div className='hidden md:grid grid-cols-4 items-center'>
        {
          NavLinkdetails.map((item)=>{
            return(

              <NavLink
                name = {item.name}
                link = {item.link}
              />
            )
          })
        }
       </div> 
          {/* mobile navbar */}
       <ul className = {`h-full w-50 absolute bg-white w-[50%] duration-500 md:hidden ${ open ? "left-0" : "left-[-100%]" } `}>
         <li onClick = {() => {setOpen(!open)}} className=' hover:bg-gray-100'>
          {
           NavLinkdetails.map((item)=>{
            return(
              <SidebarLink
               name = {item.name} 
               link = {item.link}
               />
            )
             })
         }
         </li>
       </ul>
       <div className = "hidden md:grid grid-cols-3 items-center mx-auto gap-7" >
        <div >
           <FiSearch 
            style = {searchStyle}
             size = "25px"
        
            />
        </div>
        <div>
            <AiOutlineShoppingCart
              size = "25px"
           />
        </div>
        <div>
           <HiOutlineBell
             size = "25px"
          />
        </div>
       </div>
    </div>
      
    </>
        
    
  );
}

export default Navbar;
