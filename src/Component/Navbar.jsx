import React from 'react';
import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineBell } from "react-icons/hi";
import { FaBars } from "react-icons/fa";



const searchStyle = {
  fontSize : "18px"
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
        <Link to = "/">
          <p  >
            Home
          </p>
        </Link>
        <Link to = "marketplace">
             <p >Marketplace</p>
        </Link>
        <Link to= "auction" >
             <p> Auction </p>
        </Link>
        <Link to= "drop">
              <p > Drop </p>
        </Link>
           
            
       </div> 
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
