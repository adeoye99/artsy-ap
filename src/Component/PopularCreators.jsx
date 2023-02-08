import React from 'react'
import Creator1 from "../assets/Images/Creator1.png"
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';

const PopularCreators = () => {
    return (
        <>
        <div className='w-[80%] mx-auto'>
          <div className='border-2 w-[50%] relative mx-auto rounded-lg'>
          
             <div className='w-12 h-12 border rounded-full flex justify-center items-center text-center p-5 shadow-xl ml-[80%] mt-[3%] mb-[3%]'>
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
             <p className='text-left p-5'>Out of the box</p>
             
          
          </div> 
          <div className='w-[50%] mx-auto text-left'>
            <div>
              <p>Creator : Dan Murray </p>
              <p>Date : 12/08/22</p>
              <p>Highest : 0.57 ETH </p> 
            </div>   
            <div className='grid grid-cols-2'>
              <div>
                <p>Current Bid</p>
                <p>0.987 ETH</p>
              </div>
             <div>
                <button>Place Bid</button>
             </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default PopularCreators
