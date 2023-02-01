import React from 'react';
import FooterLink from './FooterLink';
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const year = new Date().getFullYear()

const footerDetails = [

  {

   name: "Home"
  },
  {

    name: "Marketplace"
   },
   {

    name: "Auction"
   },
   {

    name: "Drops"
   },
]

const footerDetails2 = [

  {

   name: "Blogs"
  },
  {

    name: "Wallets"
   },
   {

    name: "Rates"
   },
   {

    name: "High bids"
   },
]
const Footer = () => {
  return (
    <>
    <div>
      <div className='md:grid grid-cols-4 min-h-[200px]' >
        <div className='my-auto md:flex md:justify-center md:items-center'>
          <p className='text-[48px] font-600 text-center my-auto'>ARTSY.</p>

        </div>
        <div className='md:flex items-center justify-center'>
          <ul className=' '>
            {
              footerDetails.map((item)=>{
                return(
                  <FooterLink
                      name = {item.name}
                  />
                )
               }
              )
            }
            

          </ul>

        </div>
        <div className='md:flex items-center justify-center'>
          <ul className=' md:text-left'>
          {
              footerDetails2.map((item)=>{
                return(
                  <FooterLink
                      name = {item.name}
                  />
                )
              })
            }
          
            
          </ul>

        </div>
        <div className='flex items-center justify-center'>
          <ul  className='text-left'>
            <li className='flex items-center gap-2'><AiOutlineMail size="40px"/>arstystudios@gmail.com</li>
            <li className='flex items-center mt-5 gap-2'> <GoLocation size="40px"/>Lagos , Nigeria</li>
            
          </ul>

        </div>

        

      </div>
       <footer className='text-gray-400 mt-4' >Artsystudios©{year} All Rights Reserved</footer>
      </div>
      
    </>
  );
}

export default Footer;
