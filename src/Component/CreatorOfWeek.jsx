import React from 'react'
import Background2 from "../assets/Images/background2.png"
import creatoroftheweek from "../assets/Images/creatorOfWeek.png"
import nine from "../assets/Images/1985.png" 

const CreatorOfWeek = () => {
  return (
    <>
        <div className='min-h-screen w-full bg-center bg-cover relative' style = {{ backgroundImage : `url(${Background2})`}} > 
           <h1 className = "text-[55px] text-left md:">TOP CREATORS OF THE WEEK</h1> 
           <p className='text-left te text-sm mt-10 md:text-[20px] w-[50%] text-gray-100'>
              “Everything always looked better in black and white. Everything always as if it were the first time; there’s always more people in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden
           </p>
           <img className='z-100 absolute top-[100px] left-[200px]' src = { creatoroftheweek }/>
           <img className='' src = {nine}/> 
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