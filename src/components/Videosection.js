import React from 'react'
// import </video>ideo from "next-video"
// import videomp4 from '../../public/videos/skinsquadtuts.mp4'
import CommonSectionHeading from './common/CommonSectionHeading'

function Videosection() {
  return (
    <>
     {/* <section>
      <div>
         <video controls>
        <source src='../../public/videos/skinsquadtuts.mp4' />
        Your browser does not support the video tag.
      </video>
      </div>
     </section> */}

     <section className="w-full md:py-20 py-10 mt-12 md:mt-0">
     <div>
    <CommonSectionHeading h4="Video Tutorial" h2="Watch Now Our Video Tutorial" />
   </div>
  <div className=" w-full  mt-8">
    {/* 16:9 aspect ratio for responsive video */}
    <video className=" w-full h-full md:h-[600px]" poster='images/Querries.png' controls>
      {/* Adjust the path to the video file */}
      <source src="/videos/skinsquadtuts.mp4" type="video/mp4"  />
      Your browser does not support the video tag.
    </video>
  </div>
</section>

    </>
  )
}

export default Videosection