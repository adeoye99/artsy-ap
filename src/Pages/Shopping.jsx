import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route , Routes  } from 'react-router-dom';
import ShoppingCart from '../Component/ShoppingCart';
import ShoppingDetails from '../Component/ShoppingDetails';
import PaymentDetails from '../Component/PaymentDetails';
import Shoppingnavbar from '../Component/Shoppingnavbar';

function Shopping() {
  return (
    <>
      <div>
    
        <Shoppingnavbar/>
      </div>
   </>
  )
}

export default Shopping