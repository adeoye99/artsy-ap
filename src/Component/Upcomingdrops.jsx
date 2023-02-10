import React from 'react'
import upcoming1 from "../assets/Images/upcomingdropimg1.png"

const Upcomingdrops = ({img}) => {
  return (
    <>    
     <div className='md:grid grid-cols-2 w-[80%] mx-auto mt-[10%]' >
        <div className='bg-center bg-cover h-80 ' style = {{ backgroundImage : `url(${img})`}}>
            <div className=' md:grid grid-cols-2 bg-white bg-opacity-25 mx-auto md:mt-[25%] w-[80%] p-4 rounded-sm hover:bg-opacity-50'>
               <div className='flex flex-col text-white text-left pt-[3%] '>
                  <p className='text-sm'>Time renmaining</p>
                  <p className='text-2xl mt-[3%]'>06 hrs : 45 mins : 22s</p>

               </div>
               <div>
                
                  <button className='bg-[#4693ED] text-white mt-[20%] mx-auto w-[40%] rounded-[15px]'>Join</button>

               </div>
            </div>
        
        </div>
        <div className='text-left'>
           <div className='mt-[20px] md:ml-[50px] md:mt-0'> 
              <button className = "border bg-[#4693ED] px-4 py-2 rounded-lg text-white hover:bg-opacity-25">Upcoming</button>
              <p>November 21 at 11 am WAT</p>
              <p className='text-4xl font-bold my-3'>  Eyo : Eko For Show</p>
              <p className='py-4 text-[#616161]'>Lorem ipsum dolor sit amet consectetur. Amet<br/> odio a aenean quis vitae tempus. Sed nunc <br/> tempus aliquet lectus ut vulputate.</p>
              <p className='flex'>
               <p className='p'> Creator </p>  <p>:</p> 
                
                <p className='text-[#006CA2] ml-2'> Aliya Minat </p>
              </p>
              
              <p className='pt-2 text-[#4693ED] hover:underline'>Get notified</p>
              
           </div>
          
        
        </div>
     </div>

    </>

  )
}

export default Upcomingdrops