import React from 'react';
import Hero from '../Component/Hero';
import Product from '../Component/Product';
import Slider from '../Component/Slider'
import Options from "../Component/Options";


const optionDetails = [

  {
     name:  "Explore Marketplace"

  },
  {
     name : "See aunction"


  }
]
const Home = () => {
  return (
    <>
        <Hero/>      
        <Product/>
        <Slider/>
        <div className='mt-[30px]'>
           <Options/>
        </div>
       

    </>
  );
}

export default Home;
