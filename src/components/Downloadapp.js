import React from 'react'
import CommonBtn from './common/CommonBtn'

function Downloadapp() {
  return (
   <>
    <section className='w-full py-20 bg-gradient-to-r from-[#87B88F] to-[#1F8891] '>
     <div className='w-[70%] mx-auto flex flex-col text-white justify-center items-center	'>
      <h2 className='text-[41px] text-center pb-9 items-center'>Download our App Today & <br></br>
          Experience Endless Possibilities</h2>
          <CommonBtn link="https://play.google.com/store/apps/details?id=com.skinsquad" btntext="Download App" />
     </div>
    </section>
   </>
  )
}

export default Downloadapp