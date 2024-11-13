import React from 'react'
import Image from 'next/image'
import contact1 from '../../public/images/contact-1-1.svg'
import CommonBtn from './common/CommonBtn'
import CommonSectionHeading from './common/CommonSectionHeading'


function Contact() {
  return (
   <>
  <section className='w-full py-20' id='contactus'>
  <CommonSectionHeading h2="For Any Queries" h4="Contact Us" />

  <div className=' flex flex-col md:flex-row w-[80%] max-w-6xl mx-auto mt-16'>
    <div className='w-[90%] md:w-1/2'>
      <input className='border w-full  h-[72px] p-6 bg-[#f6f6fb] mb-4 md:mr-4' type="text" placeholder='Name' />
      <input className='border w-full h-[72px] p-6 bg-[#f6f6fb] mb-4 md:mr-4' type="text" placeholder='Email Address' />
      <input className='border w-full  h-[72px] p-6 bg-[#f6f6fb] mb-4 md:mr-4' type="text" placeholder='Subject' />
      <textarea className='w-full h-[194px] p-6 bg-[#f6f6fb] mb-8 md:mb-3' placeholder='Write Message'></textarea>
      <div>
        <CommonBtn btntext="Send Message" link="/"  />
      </div>
    </div>
    <div className='w-full md:w-1/2'>
      <div className='flex justify-center'>
        <Image className="hidden md:block ml-32 h-[500px] rounded-lg" alt='contact1Img' src={contact1} />
      </div>
    </div>
  </div>
</section>
 </>
  )
}

export default Contact
