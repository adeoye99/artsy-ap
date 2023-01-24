import React from 'react';
import FooterLink from './FooterLink';
import { AiOutlineMail } from "react-icons/ai";


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
const Footer = () => {
  return (
    <>
      <div className='grid grid-cols-4 min-h-[200px]' >
        <div className='flex justify-center items-center'>
          <p className='text-[48px] font-600 text-center my-auto'>ARTSY.</p>

        </div>
        <div>
          <ul className='text-left'>
            {
              footerDetails.map((item)=>{
                return(
                  <FooterLink
                      name = {item.name}
                  />
                )
              })
            }
            

          </ul>

        </div>
        <div>
          <ul className='text-left'>
            <li>Blogs</li>
            <li>Wallets</li>
            <li>Rates</li>
            <li>High bids</li>
            
          </ul>

        </div>
        <div>
          <ul  className='text-left'>
            <li className='flex items-center gap-4'> <AiOutlineMail size="35px"/> arstystudios@gmail.com</li>
            <li>Lagos , Nigeria</li>
            
          </ul>

        </div>

        

      </div>
      
    </>
  );
}

export default Footer;
