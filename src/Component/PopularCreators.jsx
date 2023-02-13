import React from 'react'
import Creator1 from "../assets/Images/Creator1.png"
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';

const PopularCreators = ({img , theme , creator , date, highest, currentbid }) => {
    return (
        <>
        <div className='w-[100%] md:w-[100%] mx-auto'>
          <div className='w-[100%] md:border-2 md:w-[80%] relative mx-auto rounded-lg'>
          
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
             
             <img src = {img} className = "w-[100%]"/>
             <p className='text-left text-2xl p-5 font-bold'>{theme}</p>
             
          
          </div> 
          <div className='w-[100%] md:w-[80%] mx-auto text-left'>
            <div>
              <p className='mt-4 flex items-center'> <p className='text-gray-500 text-lg'> Creator </p> <p className='ml-[4px]'>:</p> <p className='ml-[15px] font-bold'> {creator} </p></p>
              <p className='mt-4 flex' > <p className='text-gray-500 text-lg'> Date </p><p className='ml-[4px]'>:</p> <p className='ml-[15px] font-bold'>{date}</p> </p>
              <p className='mt-4 flex' > <p className='text-gray-500 text-lg'> Highest</p> <p className='ml-[4px]'>:</p> <p className='ml-[15px] font-bold'>{highest}</p> </p> 
            </div>   
            <div className='grid grid-cols-2 mt-4 bg-gray-100 p-4 rounded-lg'>
              <div className='mx-auto'>
                <p>Current Bid</p>
                <p className='font-bold '>{currentbid}</p>
              </div>
             <div className='flex justify-center align-center'>
                <button className=' md:border text-white bg-[#00008B] px-5 py-2 mx-auto md:w-[80%] rounded-lg hover:bg-opacity-25'>Place Bid</button>
             </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default PopularCreators
