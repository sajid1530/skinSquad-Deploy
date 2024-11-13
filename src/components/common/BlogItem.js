import React from 'react'
import blog1 from '../../app/../../public/images/blog-1-1.jpg'
import Image from 'next/image'
import CommonBtn from './CommonBtn'
import Link from 'next/link'

function BlogItem({image,li1,li2, link, id}) {
  return (
    
     

    
  <div key={id} className='w-[80%] md:w-[400px] mt-2 md:mt-14 text-center'>
    <div className='flex items-center justify-center'>
      <Image className='w-full md:w-[370px] h-[242px] ' src={image} alt="img" />
    </div>
    <div className='mt-2 md:pb-0 pb-6'>
      <div className='bg-[#ffffff]  hover:bg-gradient-to-r from-[#87B88F] to-[#1F8891] hover:text-[#fff] flex flex-col items-center border md:ml-4 h-[auto] md:h-[231px] md:w-[370px] transition-all duration-3000 md:pb-0 pb-8'>
       
        <ul className='py-3 text-[18px] md:text-[24px] font-semibold leading-[1.4] md:leading-10'>
          <li>{li1}</li>
          <li>{li2}</li>
        </ul>
         <CommonBtn link={link} btntext="Read More" />
      </div>
      
    </div>
  </div>


  )
}

export default BlogItem
