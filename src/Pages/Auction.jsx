import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Sliderproduct from '../Component/Sliderproduct';
import PopularCreators from '../Component/PopularCreators';
import Creator1 from "../assets/Images/Creator1.png"


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Auction = () => {
  return (
  <>
    <div className='pl-[5%] w-full'>
        <p className='text-left text-xl mt-[5%] mb-[5%] font-semibold'>Here’s an overview of products actively on auction, explore!</p>
       <div className='mx-auto w-[100%]'>
        <Carousel
        arrows = {false}
           additionalTransfrom={0}
          //  responsive = {}
          autoPlaySpeed={3000}
          // centerMode={true}
          className="w-[100%] "
            containerClass="container"
        
            dotListClass=""
            showDots={true}
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
             pauseOnHover
            renderArrowsWhenDisabled={false}
           renderButtonGroupOutside={false}
           renderDotsOutside={false}
           responsive={{
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 2,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
           }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          swipeable={true}

           sliderClass=""
           slidesToSlide={1}
            
      >
             <Sliderproduct/>
             <Sliderproduct/>
             <Sliderproduct/>
             <Sliderproduct/>
             <Sliderproduct/>
          </Carousel>
          </div> 
        </div>
 <div className='w-[90%] mx-auto'>
    <p className='md:text-left mt-[5%] text-2xl pl-[5%] font-semibold'>Top bids from popular Creator</p>
    <div className='md:grid grid-cols-2 mt-[3%] '>
       <div >
       <PopularCreators
        img = {Creator1}
        theme = "Out of the box"
        date = "12/08/22"
        creator = "Dan Murray"
        highest = "0.57 ETH" 
        currentbid="0.987 ETH"
       />
    
    
       </div>
        <div>
         <PopularCreators
         img = {Creator1}
        theme = "Falling apart"
        date = "12/08/22"
        creator = "Jacob Banks"
        highest = "0.34 ETH"
        currentbid="0.99 ETH"
       
         />
       
        </div>
    </div>
</div>

    </>
  );
}

export default Auction;
