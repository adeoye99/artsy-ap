import React from 'react';
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineBell } from "react-icons/hi";



const searchStyle = {
  fontSize : "18px"
}

const Navbar = () => {
  return (
    <>
    <div className='grid grid-cols-3  border-2 h-[80px]'>
        <div className=' m-auto w-2'>
            <p className='font-bold text-[23px]'>ARTSY</p>
        </div>
       <div className='grid grid-cols-4 items-center'>
           <p to="/" className=' '>Home</p>
           <p to= "marketplace" className='border-red-500' >Marketplace</p>
           <p to= "auction" className='border-red-500'>Auction</p>
           <p to= "drop" className='border-red-500'>Drop</p> 
       </div> 
       <div className = "grid grid-cols-3 items-center mx-auto gap-7" >
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
