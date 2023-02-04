import React from 'react'

const Category = ({name}) => {
  return (
    <>
      <div className="flex items-center gap-4 mt-2">
            <input
                type = "checkbox"
               />
            <label>{name}</label>
       </div>
    
    </>
  )
}

export default Category