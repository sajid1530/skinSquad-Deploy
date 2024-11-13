
'use client'


import AppScreensSlider from "@/components/AppScreenSlider";
import BestApplication from "@/components/BestApplication";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import CounterUp from "@/components/CounterUp";
import Downloadapp from "@/components/Downloadapp";
import Faqs from "@/components/Faqs";
import FeatureList from "@/components/FeatureList";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
// import Navigation from "@/components/Navigation";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testemonial from "@/components/Testemonial";
import TeamItems from "@/components/common/TeamItems";
import Video from "@/components/Videosection";
import Image from "next/image";
import Videosection from "@/components/Videosection";






export default function Home() {
  return (
    <div className="bg-[#ffffff] h-full border-5 border-red-500">

            <Hero />  
           <FeatureList />   
           <BestApplication /> 
          <Features />
          <CounterUp />
          <Pricing /> 
          <Testemonial />
          <AppScreensSlider />
         <Team /> 
         <Videosection />
         <Faqs />  
       <Blog />      
       <Contact />  
      <Downloadapp />  

    </div>
  );
}
