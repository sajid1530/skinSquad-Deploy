import React from "react";
import Image from "next/image";
// import heroImg from '../../public/images/banner-moc-1-1.png'
import CommonBtn from "./common/CommonBtn";

// Images import 
import heroImg from '../../public/images/heroImg.svg'
import bgheroImg from '../../public/images/bgheroImg.png'


const Hero = () => {
  return (
  


 <section className="py-28 md:py-10 md:relative w-[100%] md:h-screen ">
      <Image className=" hidden md:block md:absolute md:top-0 md:w-[100%] md:h-[100%] " src={bgheroImg}  alt="bgheroImg"/>
      <div className="w-[90%] justify-center mx-auto flex-wrap bg-transparent md:flex ">
          <div className="w-full md:w-[50%] md:text-start text-center z-20 mt-10 md:mt-20">
            <h1 className="capitalize md:text-[70px] md:w-[620px] text-[32px] font-[600] leading-[45px] md:leading-[70px] md:text-[#fff]">
              Consult our dermatologists at the Skin Squad
             </h1>
            <p className="my-8 md:text-[#fff]">
              Skin Squad is Pakistan's first Skincare app. It has skin specialists to guide people with your skin issues. Moreover, it has a vast skincare marketplace.
             </p>
            <div className="mt-16 z-20">
             <CommonBtn btntext="Discover More" link="https://play.google.com/store/apps/details?id=com.skinsquad" /> 
            </div>
          </div>
          <div className="md:ml-16 md:w-[40%]  flex sm:items-end md:items-end lg:items-start md:mt-0 mt-16 w-full">
            <Image
              src={heroImg}
              className="animateSlide z-20 transition-transform duration-5000 h-[550px] md:h-[630px] "
              alt="heroImg"
            />
          </div>
        </div>
    </section>





  );
};

export default Hero;
