import React from 'react'

const Subscribe = () => {
  return (
    <>
       <div className=' md:border-2 border-black w-[90%] mx-auto text-center mt-[10%] h-[50%] min-h-[50%] py-[3%]'>
           <h1>NEWSLETTR</h1>
           <p>Subscribe to get daily updates on drops & exciting deals </p>
           <div className=''>
              <input
                placeholder='ENTER YOUR EMAIL'
              />
              <button className='bg-black text-white'>
                  SUBSCRIBE
              </button>
           </div>
       </div>
    </>
  )
}

export default Subscribe