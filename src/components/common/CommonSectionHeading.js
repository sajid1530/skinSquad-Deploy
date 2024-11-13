import React from 'react'

function CommonSectionHeading({h2 , h4}) {
  return (
    <>
     
      <div className='flex w-[80%] mx-auto justify-center flex-wrap '>
       <div className=''>
         <h4 className=' text-lg font-semibold text-center	text-[#1f8891]'>{h4}</h4>
         <h2 className='text-[20px] font-medium	 md:text-[40px]  md:font-bold text-center md:w-[650px]	md:leading-[55.2px] mt-1 text-[#252c4b]'>{h2}</h2>
       </div>
      </div>
     
    </>
  )
}

export default CommonSectionHeading
