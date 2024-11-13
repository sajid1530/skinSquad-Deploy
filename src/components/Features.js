import Image from 'next/image'
import React from 'react'
import featuresImg1 from '../../public/images/cta-2-moc-1.png'
import featuresImg2 from '../../public/images/cta-2-moc-2.png'
import featuresImg3 from '../../public/images/cta-2-moc-3.png'
import CommonBtn from './common/CommonBtn'
import packageimg from '../../public/images/packageimg.png'

// images
import skinCareIcon from '../../public/images/skincareIcon.png'
import bridalIcon from '../../public/images/brodalIcon.png'


function Features() {
  

  return (
    <>
     <section   className='py-20 w-[100%] bg-[#F6F6FB]'  id='features'>
      <div className='md:flex  w-[85%] mx-auto justify-center  md:gap-16'>
       <div className='md:w-[560px] '>
       <h4 className='text-lg font-semibold	text-[#1f8891]'>Packages List</h4>
       <h1 className='text-[30px] md:text-[46px] font-bold	leading-[55.2px] mt-2 text-[#252c4b]' >Skin Squad Provides You Best Skincare Packages</h1>

       <div className=' md:flex mt-12 '>
        <div className='flex '>
         <div className=' w-[100px] flex items-center justify-center rounded-full h-[100px]'>
          <Image className='w-[60%] ' src={skinCareIcon} alt='skinCareIcon' />
        </div>
         <h3 className='text-md ml-5	font-bold leading-[30px] mt-8 md:mt-6 h-[60px] md:ml-3'>Skincare Routine Package</h3>
         </div>
        <div className='flex mt-10 md:mt-0'>
          <div className='ml-3 w-[100px] flex items-center  rounded-full h-[100px]  text-[#252C4B]'>
            <Image className='w-[60%]' src={bridalIcon} alt='bridalIcon'/>
          </div>
         <h3 className='text-md ml-5	font-bold leading-[30px] mt-8 md:mt-6 h-[60px] md:ml-3'>Bridal Skincare Package</h3>
       </div>
        </div>
       
       
       <p className='mt-[37px] text-lg font-medium	leading-9 text-[#737789]'>We offer two skincare packages at the Skin Squad. The first package is for one month for a minimal amount of 500 rupees. A more advance level package is for three months for special skincare for brides specifically.</p>
       <div className='mt-16'>
        <CommonBtn link="https://play.google.com/store/apps/details?id=com.skinsquad" btntext="Discover More" />
       </div>
       </div>
       
       <div className='w-[100%] md:w-[610px] md:mt-0 mt-10' >
        <Image className='rounded-lg' src={packageimg} alt='packageimg'/>
        {/* <Image className='mt-10 w-[100%]  md:w-[510px] md:h-[174px]' src={featuresImg1} />
        <Image className='mt-7 border w-[100%] md:w-[510px] md:h-[174px]' src={featuresImg2}  />
        <Image className='border mt-7 w-[100%] md:w-[510px] md:h-[174px]' src={featuresImg3}  /> */}
       </div>
      </div>
     </section>
    </>
  )
}

export default Features
