"use client";

import React from "react";
// import Slider from "./common/Slider";
import { ImQuotesRight } from "react-icons/im"; 

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import CommonSectionHeading from "./common/CommonSectionHeading";

const Testemonial = () => {
  return (
    <section className="py-20 border">
      <CommonSectionHeading h4="Testimonials" h2="What Our clients Says" />
       <Swiper style={{
         "--swiper-pagination-color": "#1f8891",
          "--swiper-navigation-color": "#1f8891",
       }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        navigation={true}
        pagination={{ clickable: true,
          
         }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="md:w-[80%] w-[100%] mt-10 md:mt-16s mx-auto h-[400px] "
      >
        <SwiperSlide>
           <div className="w-[60%] px-4 border rounded-2xl border-[#1f8891] mx-auto flex flex-col items-center h-[100%] ">
            <div className="mt-8 md:mt-14 text-center">
            <span><ImQuotesRight className="md:ml-16 ml-9 text-[#1F8891] text-[40px] md:text-[4rem]" /></span>
             <h1 className="mt-1 md:mt-5 text-[20px] md:text-[24px] font-bold">Dania Ahmad</h1>
            </div>
            <div className="mt-3 md:mt-5 text-center">
             <p>Best app that provides a variety of services in a single platform. Specifically, that allows you to consult with a dermatologist and place orders for skincare products from a selection of over <br></br> 30 different brands that are customized for your skin type.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[60%] px-4 border rounded-2xl border-[#1f8891] mx-auto flex flex-col items-center h-[100%] ">
            <div className="mt-16 md:mt-20">
            <span><ImQuotesRight className="mt-3 md:ml-12 ml-10 text-[#1F8891] text-[44px] md:text-[4rem]" /></span>
             <h1  className="mt-2 md:mt-2 text-[24px] font-bold">Roms World</h1>
            </div>
            <div className="mt-5 md:mt-8 text-center">
             <p>This app is awesome dermatologist are available all the time I have asked about my skin issue <br></br> and I also order 1 product from this app 100% recommend</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[60%] px-4 border rounded-2xl border-[#1f8891] mx-auto flex flex-col items-center h-[100%] ">
            <div className="mt-20">
            <span><ImQuotesRight className="md:ml-16 ml-10 text-[#1F8891] text-[4rem]" /></span>
           <h1  className="mt-5 text-[24px] font-bold">Naveen Sohail</h1>
            </div>
            <div className="mt-7 text-center">
             <p>Very useful app 100% recommend.</p>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="w-[60%] px-4 border rounded-2xl border-[#1f8891] mx-auto flex flex-col items-center h-[100%] ">
            <div className="mt-20">
            <span><ImQuotesRight className="md:ml-16 ml-12 text-[#1F8891] text-[42px] md:text-[4rem]" /></span>
             <h1 className="mt-2 md:mt-5 text-[24px] font-bold">Ahmar Ahmar</h1>
            </div>
            <div className="mt-4 md:mt-10 text-center">
             <p>I just installed the app and things are going on pretty good...overall it's a very good app i will recommanded this app to everyone...</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testemonial;