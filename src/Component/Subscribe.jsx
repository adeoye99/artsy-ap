import React from 'react'

const Subscribe = () => {
  return (
    <>
       <div className=' md:border-2 border-black w-[90%] mx-auto text-center mt-[10%] h-[50%] min-h-[50%] py-[2%]'>
           <h1 className='text-[35px] mt-4'>NEWSLETTER</h1>
           <p className=' text-2xl mt-4'>Subscribe to get daily updates on drops & exciting deals </p>
           <div className='mt-3'>
              <input
              className='h-[50px] w-[40%] border-2 pl-6'
                placeholder='ENTER YOUR EMAIL'
              />
              <button className='bg-black text-white h-[50px] ml-3 w-[10%]'>
                  SUBSCRIBE
              </button>
           </div>
       </div>
    </>
  )
}

export default Subscribe