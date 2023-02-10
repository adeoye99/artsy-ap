import React from 'react'

function FooterLink({name}) {
  return (
    <div className='text-left pl-6 md:text-left mt-4 md:pl-0 hover:underline cursor-pointer'>{name}</div>
  )
}

export default FooterLink