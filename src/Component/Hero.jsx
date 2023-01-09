import React from 'react';
import  pic1  from "../assets/Images/pic1.jpg"
import  pic2  from "../assets/Images/pic2.png"
import  pic3  from "../assets/Images/pic3.png"
import  pic4  from "../assets/Images/pic4.jpg"

const Hero = () => {
  return (
    <>
    <div className='w-100 mx-auto'>
         <h2 className='border-1 text-[60px] font-semibold'> Photography is poetry <br/>& beautiful untold stories</h2>
    </div>
       <div className='w-100 mx-auto mt-10'>
         <p className='border-1  font-semibold'> through more than 10,000 vintage shots, old photograghs, historic <br/> images and captures seamlessly in one place. Register to get top access.</p>
       </div>
      <div className='flex gap-3 mt-[100px] overflow-auto whitespace-nowrap scrollbar-hide md:scrollbar-default'>
        <img className='h-[250px] w-50 my-auto' src = { pic3 } alt = "pics"/>
        <img className='h-[350px] w-25 my-auto' src = { pic2} alt = "pics"/>
        <img className='h-[350px] w-25 ' src = { pic1 } alt = "pics"/>
        <img className='h-[350px] w-25 my-2' src = { pic4 } alt = "pics"/>
        <img className='h-[450px] w-25 my-auto' src = { pic3 } alt = "pics"/>
        <img className='h-[350px] w-25my-auto' src = { pic4 } alt = "pics"/>
        <img className='h-[250px] w-25 my-auto' src = { pic3 } alt = "pics"/>
        <img className='h-[450px] w-25 my-auto' src = { pic4 } alt = "pics"/>
        
      </div>
     
      
    </>
  );
}

export default Hero;
