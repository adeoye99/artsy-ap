import React from 'react'

const Subscribe = () => {
  return (
    <>
       <div className=' md:border-2 border-black w-[90%] mx-auto text-center mt-[10%] h-[50%] min-h-[50%] py-[2%]'>
           <h1 className='text-[35px] mt-4'>NEWSLETTER</h1>
           <p className='text-2xl mt-4'>Subscribe to get daily updates on drops & exciting deals </p>
           <div className='flex md:w-[60%] mx-auto mt-3'>
              <input
              className='w-[80%] md:h-[50px] md:w-[80%] border-2 pl-6'
                placeholder='ENTER YOUR EMAIL'
                type = "email"
              />
              <button className='w-[40%] bg-black md:bg-black text-white h-[50px] md:ml-3 md:w-[20%]'>
                  SUBSCRIBE
              </button>
           </div>
       </div>
    </>
  )
}

export default Subscribe