import React from "react"
import { NavLink } from "react-router-dom"


const MenuLink = ({link , name}) =>{
    return (
  
      <NavLink to = {link}  className={({isActive }) => ` border-black m-auto pb-1 ${isActive ? "border-b-2" : null} `}>
        
              {name}
            
          </NavLink>
  
  
    )
  
  
  }
  
export default MenuLink