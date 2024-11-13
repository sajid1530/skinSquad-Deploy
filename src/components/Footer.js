
"use client"


import React from 'react'
import Image from 'next/image'
import img1 from '../../public/images/logoheader.png'
import Link from 'next/link'
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa6";


// image import 
import faceImg from '../../public/images/face.png'
import instaImg from '../../public/images/insta.png'
import linkdImg from '../../public/images/linkedin.png'
import { usePathname } from 'next/navigation';

function Footer() {

  const pathname = usePathname();

  const scrollHandler = (id) => {
    const element = document?.getElementById(id);
    if (element) {
      element?.scrollIntoView({ behavior: "smooth" });
    }

  }


  return (


    <section className='w-full bg-[#ffffff]'>
    <div className='flex gap-5 md:justify-center md:gap-12 w-[80%] mx-auto md:flex-nowrap flex-wrap'>
      <div className='w-[100%] grow md:w-[350px] mt-8 md:mt-16'>
        <Image className='w-[129px]' src={img1} alt='footerimg1' />
        <p className='text-[16px] font-medium  mt-0'>
          Skin Squad is a skincare app. It provides online consultancy from skin specialists and skincare marketplace.
        </p>
      </div>

      <div className=' w-[100%]  grow md:w-[170px] mt-6 md:mt-28'>
        <h3 className='text-[18px] font-bold'>Company</h3>
        <ul className='leading-9 mt-6'>
          {/* <li className='text-[16px] font-medium hover:text-[#1F8891]'><a href="">About</a></li> */}
          <li className='text-[16px] font-medium hover:text-[#1F8891] cursor-pointer'>  {pathname === "/" ? <p onClick={()=> scrollHandler("features")}>Features</p> :  <Link href="/">Features</Link>} </li>
          <li className='text-[16px] font-medium hover:text-[#1F8891] cursor-pointer'>{pathname === "/" ? <p onClick={()=> scrollHandler("team")}>Our Team</p> :  <Link href="/">Our Team</Link>}<Link href="#team"></Link></li>
          <li className='text-[16px] font-medium hover:text-[#1F8891] cursor-pointer'>{pathname === "/" ? <p onClick={()=> scrollHandler("news")}> News</p> :  <Link href="/">News</Link>}<Link href="#news"></Link></li>

          {/* <li className='text-[16px] font-medium hover:text-[#1F8891]'><a href="#service">Services</a></li> */}
        </ul>
      </div>

      

      <div className=' w-[100%]  grow  md:ml-0 md:w-[170px] mt-6 md:mt-28'>
        <h3 className='text-[18px] font-bold'>Links</h3>
        <ul className='leading-9 mt-6'>
          <li className='text-[16px] font-medium hover:text-[#1F8891]'><Link href="/terms">Terms and Conditions</Link></li>

          <li className='text-[16px] font-medium hover:text-[#1F8891]'><Link href="/privacy">Privacy Policy</Link></li>
          <li className='text-[16px] font-medium hover:text-[#1F8891]'><Link href="/contactus">Contact</Link></li>

          
        </ul>
      </div>
      <div className=' w-[100%] self-center flex gap-4  grow md:w-[280px] mt-6 '>
        
        <div className='w-[70px] h-[70px] rounded-full border border-[#1F8891] hover:text-white hover:bg-gradient-to-r from-[#87B88F] to-[#1F8891] flex justify-center items-center'>
           <Link href="https://www.facebook.com/skinsquadofficial" target='_blank' className='text-[22px] md:text-[30px]'><BsFacebook /></Link>
        </div>
        
         <div className='w-[70px] h-[70px] rounded-full border border-[#1F8891] hover:text-white hover:bg-gradient-to-r from-[#87B88F] to-[#1F8891] flex justify-center items-center'>
         <Link href="https://www.instagram.com/skinsquadofficial/" target='_blank' className='text-[22px] md:text-[30px]'><GrInstagram /></Link>
         </div>
        
         <div className='w-[70px] h-[70px] rounded-full border border-[#1F8891] hover:bg-gradient-to-r from-[#87B88F] to-[#1F8891]  flex justify-center items-center hover:text-[#fff]'>
          <Link href="https://www.linkedin.com/company/skin-squad-pvt-ltd/" target='_blank' className='text-[22px] md:text-[30px]  hover:text-[#fff]'><FaLinkedin /></Link>
         </div>
       
      </div>
    </div>

  <hr className='mt-12' />
  
  <div className='h-[95px] bg-[#ffffff] flex justify-center items-center font-semibold'>
    <h3 className='text-center md:px-0 px-8'>© Copyright disclaimer design and development by Rough copies Pvt Ltd.</h3>
  </div>
</section>

 






  )
}

export default Footer






