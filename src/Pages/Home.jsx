import React from 'react';
import Hero from '../Component/Hero';
import Product from '../Component/Product';
import Slider from '../Component/Slider'
import Options from "../Component/Options";
import CreatorOfWeek from '../Component/CreatorOfWeek';
import Subscribe from '../Component/Subscribe';

const OptionDetails = [

  {
     name:  "Explore Marketplace"
    
  },
  {
     name : "See Aunction"


  }
]
const Home = () => {
  return (
    <>
        <Hero/>      
        <Product/>
        <Slider/>
        <div className='my-[100px]'>
          {
           OptionDetails.map((item) =>{
            return (
            <Options
              name =  {item.name}
            
            />
            )
           })

          }
          
        </div>
        <CreatorOfWeek/>
        <Subscribe/>
       

    </>
  );
}

export default Home;
