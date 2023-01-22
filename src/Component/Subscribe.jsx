import React from 'react'

const Subscribe = () => {
  return (
    <>
       <div className='border-2 border-black w-[80%] mx-auto text-center'>
           <h1>NEWSLETTER</h1>
           <p>Subscribe to get daily updates on drops & exciting deals </p>
           <div className=''>
              <input
                placeholder='ENTER YOUR EMAIL'
              />
              <button className='bg-black '>
                  SUBSCRIBE
              </button>
           </div>
       </div>
    </>
  )
}

export default Subscribe