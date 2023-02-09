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
        <p className='text-left text-lg mt-[5%] mb-[5%] '>Here’s an overview of products actively on auction, explore!</p>

        <Carousel
           additionalTransfrom={0}
           arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
            containerClass="container"
           // customLeftArrow={<CustomLeftArrow />}
           // customRightArrow={<CustomRightArrow />}
            dotListClass=""
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
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
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
           showDots={false}
           sliderClass=""
           slidesToSlide={1}
            swipeable
      >
            <Sliderproduct/>
             <Sliderproduct/>
            <Sliderproduct/>
             <Sliderproduct/>
             <Sliderproduct/>
          </Carousel>
        </div>
 <div className='w-[90%] mx-auto'>
    <p className='md:text-left mt-[5%] text-2xl pl-[14%] font-semibold'>Top bids from popular Creator</p>
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
