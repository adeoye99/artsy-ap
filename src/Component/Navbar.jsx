import React , { useState } from 'react';
import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineBell } from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
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
     



const MenuLink = ({link , name}) =>{
  return (

    <NavLink to = {link}  className={({isActive }) => ` border-black m-auto pb-1 ${isActive ? "border-b-2" : null} `}>
      
            {name}
          
        </NavLink>


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
    <div className='grid grid-cols-3 h-[80px] bg-white w-full z-10000'>
        <div className='m-auto w-2'>
            <p className='z-1000 mx-[70px] w-20 md:font-bold text-[23px] z-200'>ARTSY</p>
        </div>
        <div onClick = {()=>{setOpen(!open)}} className = "absolute z-50 left-4 top-6 md:hidden">
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

              <MenuLink
                name = {item.name}
                link = {item.link}
              />
            )
          })
        }
       </div> 
          {/* mobile navbar */}
       <ul className = {`h-full w-[100%] fixed absolute bg-white duration-500 z-[100%] md:hidden ${ open ? "left-0" : "left-[-100%]" } `}>
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
       <div className = "flex absolute right-4 top-6 md:grid grid-cols-3 items-center mx-auto gap-7" >
        <div className='hidden md:visible'>
           <FiSearch 
             style = {searchStyle}
             size = "25px"
        
            />
        </div>
        <Link to = "shopping">
        <div>
          
              <AiOutlineShoppingCart
                 size = "25px"
               />
         
        </div>
        </Link>
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
