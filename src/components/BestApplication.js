import React from 'react'
import skincareimg from '../../public/images/skincare.png'
import Image from 'next/image'
import CommonBtn from './common/CommonBtn'

function BestApplication() {
  return (
    <section className='w-[100%] py-10 bg-[#ffffff]'>
  <div className='w-[90%] md:flex  md:flex-wrap items-center mx-auto'>
    <div className='w-full md:w-[50%]'>
      <Image src={skincareimg} alt="img" />
    </div>  
    <div className='md:w-[50%] mt-10 md:mt-0'>
      <h4 className='text-lg font-semibold text-[#1f8891]'>Skin Care Application</h4>
      <h1 className='text-[28px] md:text-[46px] font-bold leading-[36px] md:leading-[55.2px] mt-2 text-[#252c4b]'>Explore Our Skincare Marketplace</h1>
      <p className='text-lg md:text-2xl font-medium leading-[28px] md:leading-10 mt-6 md:mt-10 text-[#737789]'>Ready to embark on a journey to radiant, healthy skin? Explore our collection today and take the first step towards unlocking your skin's full potential.</p>
      <ul className='mt-[20px] md:mt-[37px] text-lg md:text-xl font-medium leading-[28px] md:leading-9 text-[#737789]'>
        <li>High end skincare products</li>
        <li>Fair discounted deals</li>
        <li>Easy order processing</li>
      </ul>
      <div className='mt-16'>
        <CommonBtn link="https://play.google.com/store/apps/details?id=com.skinsquad" btntext="Discover More" />
      </div>
    </div>
  </div>
</section>

  )
}

export default BestApplication
