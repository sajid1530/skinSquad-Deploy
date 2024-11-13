"use client";


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";




import CommonSectionHeading from "./common/CommonSectionHeading";
import  img1  from '../../public/images/appscreen1.svg'
import  img2  from '../../public/images/appscreen2.svg'
import img3  from '../../public/images/appscreen3.svg'
import  img4  from '../../public/images/appscreen4.svg'
import Image from "next/image";
import {  useEffect } from 'react';


import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  // loop,
} from "swiper/modules";

export default function App() {
   const [slidesPerView, setSlidesPerView] = useState(3);

   
  


useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize(); // Call on initial render

    window.addEventListener('resize', handleResize);

       return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    
    <>

   <section className='py-16 w-[80%] mx-auto' id='screens'>
      <CommonSectionHeading h4="Application ScreenShots" h2="Checkout Our Application ScreenShoots." />
      <Swiper
        style={{
         "--swiper-pagination-color": "#1f8891",
          "--swiper-navigation-color": "#1f8891",
          "--swiper-pagination-top" : "582px",
       }}
       

        slidesPerView={slidesPerView}
        centeredSlides={true}
        autoplay={true}
        // spaceBetween={20}
        grabCursor={true}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay,]}
        className="mySwiper md:mt-16 mt-9"
      >
        <SwiperSlide>
          <Image  
            className='md:h-[600px] h-[600px]'
            src={img1}
            alt='img'
          />
        </SwiperSlide>
        <SwiperSlide >
          <Image 
            className="md:h-[600px] h-[600px]"
            src={img2}
            alt='img'
          />
        </SwiperSlide>
        <SwiperSlide >
          <Image 
            className="md:h-[600px] h-[600px]"
            src={img3}
            alt='img'
          />
        </SwiperSlide>
        <SwiperSlide >
          <Image 
            className="md:h-[600px] h-[600px]"
            src={img4}
            alt='img'
          />
        </SwiperSlide>
      </Swiper>
    </section>
    </>
  );
}





