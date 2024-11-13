import React from 'react'
import team1 from '../../../public/images/team-1-1.jpg'
import Image from 'next/image'
function TeamItems({name,job,image}) {
  return (
    <>
   
      <div className='w-[270px] mt-8 bg-[#ffffff] border border-[#1f8891] rounded-xl py-10 text-center shadow-xl hover:shadow-2xl'>
        <h2 className='text-xl font-bold pt-14 text-[#252c4b]'>{name}</h2>
        <h6 className='text-sm font-medium mt-1 text-[#737789]'>{job}</h6>
        <div className='w-[131px] h-[131px] ml-16   mt-9 flex items-center justify-center '>
        <Image className=' w-[100%] h-[100%] rounded-full ' src={image} alt='image' />
        
        </div>

      </div>
    
    </>
  )
}

export default TeamItems
