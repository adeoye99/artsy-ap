import React from 'react';

const Navbar = () => {
  return (
    <>
    <div className='border-2 border-red-200 flex flex-row h-[80px]'>
        <div className='flex '>
            <p className='font-black'>ARTSY</p>
        </div>
       <div className='flex m-auto gap-[100px]'>
           <div className='border-red-500'>Home</div>
           <div className='border-red-500' >Marketplace</div>
           <div className='border-red-500'>Auction</div>
           <div className='border-red-500'>Drop</div>
          
       </div> 
    </div>
      
    </>
        
    
  );
}

export default Navbar;
