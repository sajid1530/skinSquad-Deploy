import React from 'react'
import CommonSectionHeading from './CommonSectionHeading'
import Image from 'next/image'

function  Featurelistitem({img,title,para}) {


  
  return (
    <>
      {/* <CommonSectionHeading /> */}

  <div className="  bg-[#ffffff] w-[320px] h-[460px] border border-[#1f8891]  md:h-[460px] shadow py-6 px-3 rounded-full   flex flex-col justify-center items-center transition-all hover:bg-gradient-to-r from-[#87B88F] to-[#1F8891] hover:text-[#ffffff] duration-1000 ease-in-out">
         <div className=''>
          <Image src={img} alt='img' className=' w-[100px]'/>
         </div>
         <h5 className=' font-semibold text-center text-[20px] leading-6 mt-6 my-4'>{title}</h5>
         <p className='  text-center text-[18px] leading-9 '>{para}</p>
  </div>  
    </>
  )
}

export default Featurelistitem
 