import React from 'react'
import Background2 from "../assets/Images/background2.png"
import creatoroftheweek from "../assets/Images/creatorOfWeek.png"
import nine from "../assets/Images/1985.png" 

const CreatorOfWeek = () => {

  
  return (
    <>
        <div className='min-h-screen w-full bg-center bg-cover relative' style = {{ backgroundImage : `url(${Background2})`}} > 
           <h1 className = "text-lg text-left md:text-[55px] ml-6 md:mt-8 leading-10">TOP CREATORS OF <br/> THE WEEK</h1> 
           <p  data-aos="fade-right" className='text-left ml-3 w-[100%] text-sm mt-10 md:text-[23px] md:ml-[60px]  md:w-[50%] text-gray-100 md:mt-[200px] leading-10	'>
              “Everything always looked better in black and white. Everything always as if it were the first time; there’s always more people in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden
           </p>
           <img data-aos= "fade-left" className=' w-[55%] h-[50%] left-0 md:z-100 absolute md:top-[100px] md:left-[30%] md:w-[45%] md:h-[100%]' src = { creatoroftheweek }/>
           <img data-aos="fade-left" className='w-[10%] md:z-20 mt-[10%] ml-[50%]' src = {nine}/> 
           <ul className='absolute right-[100px] top-4 list-none text-[35px] text-left'>
               <li className=''>Editorial</li>
               <li>Fashion</li>
               <li>Lifestyle</li>
               <li>Blueprint</li>
            </ul>       

        </div>
    </>
  )
}

export default CreatorOfWeek