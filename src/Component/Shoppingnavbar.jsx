import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuLink from "./MenuLink"
const Shoppingnavbar = () => {
  return (
    <>
        <div className='w-[60%] mx-auto border-b-2 flex gap-[32%] mt-[5%]'>
        <MenuLink
           name = "ShoppingCart"
           link = ""
        
         />
         <MenuLink
           name = "ShoppingDetails"
              
         />
         <MenuLink
            name = "PaymentDetails"

          />
              
        </div>
    
    </>
  )
}

export default Shoppingnavbar