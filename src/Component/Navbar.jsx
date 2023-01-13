import React from 'react';
import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineBell } from "react-icons/hi";
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

const sidebarLink = ({link , name }) =>{
  return (

    <Link to = {link}>
          <p>
            {name}
          </p>
    </Link>


  )


}
const Navbar = () => {
  return (
    <>
    <div className='grid grid-cols-3 h-[80px]'>
        <div className=' m-auto w-2'>
            <p className='font-bold text-[23px]'>ARTSY</p>
        </div>
        <div className = "absolute right-4 top-6 md:hidden">
             <FaBars
               size = "25px" 
             />          
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
       <ul className = "h-full absolute bg-white  md:hidden">
        <li>
           <Link to = "/">
             Home
           </Link>
        </li>
        <li>
           <Link to = "marketplace">
              Marketplace
          </Link>
        </li>
        
        <Link to= "auction" >
             <li> Auction</li> 
        </Link>
        <Link to= "drop">
              <li> Drop </li>
        </Link>
           
            
        <li>

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
