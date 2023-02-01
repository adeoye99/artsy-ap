import React from 'react'
import { NavLink } from 'react-router-dom'



const SubNav = [
    {
    name : "Shopping Cart",
    link : "shoppingcart"
},
{
   name :  "Shipping Details",
   link : "shoppingdetails"

},{
    name : "Payment Details",
    link : "paymentdetails"
}

]
const MenuLink = ({link , name}) =>{
    return (
  
      <NavLink to = {link}  className={({isActive }) => ` border-black m-auto pb-1 ${isActive ? "border-b-2" : null} `}>
        
              {name}
            
          </NavLink>
  
  
    )
  
  
  }
function MarketNav() {
  return (
    <>
       <nav className='md:grid grid-cols-3 border-b border-b-3 w-[60%] mx-auto'>
              {
                SubNav.map((item) =>{
                    return(
                    <MenuLink
                      name = {item.name}
                      link = {item.link}
                    />
                    )

                })
              }
        </nav>
    </>
  )
}

export default MarketNav