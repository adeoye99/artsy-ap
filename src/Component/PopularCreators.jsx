import React from 'react'
import Creator1 from "../assets/Images/Creator1.png"
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';

const PopularCreators = () => {
    return (
        <>
        <div className='border-2 w-[50%] relative mx-auto'>
          <div className=''>
          <div className='w-12 h-12 border rounded-full flex justify-center items-center text-center p-5 shadow-xl ml-[80%]'>
              <Checkbox 
               icon={<FavoriteBorder />} 
               checkedIcon={<Favorite />} 
               sx = {{
                color: red[800],
                '&.Mui-checked': {
                  color: red[600],
                },
              }}
               />
          
          </div>
             
             <img src = {Creator1}/>
             <p className='text-left'>Out of the box</p>
          </div>
        </div>    
        </>
    )
}

export default PopularCreators
