import CommonSectionHeading from "./common/CommonSectionHeading"


function Pricing() {
    
  return (
    <>
     <section className="bg-[#ffffff] w-[100%] py-20" id='pricing'>
     
     <div>
      <CommonSectionHeading h4="Pricing Tables" h2="Choose Subscription Plans Which Suits Your Needs" />
     </div>
     
      <div className="  w-[80%] gap-5 md:gap-8 mt-14 flex flex-wrap mx-auto justify-center">
        <div className=" w-[95%] py-10 md:w-[390px] border text-center rounded-lg border border-[#1f8891]  hover:bg-gradient-to-r from-[#87B88F] to-[#1F8891] hover:text-[white] shadow-md hover:shadow-xl">
        <h4 className="text-lg font-semibold">Basic Skincare</h4>
        <h4 className="text-lg font-semibold">Package</h4>
        <h1 className=" font-semibold text-6xl">500</h1>
        <h3>Rupees</h3>
        <hr className="mt-14" />
         <div className="leading-9	mt-16">
         <ul>
          <li className="text-[16px] font-semibold ">No Discount On Products</li>
          <li className="text-[16px] font-semibold">Free Support</li>
          <li className="text-[16px] font-semibold">Durration One Month</li>
          <li className="text-[16px] font-semibold">Full Access</li>
         </ul>
         </div>
        <button className='bg-[#fff] text-[#000] p-5 rounded mt-7 border border-[#1F8891]'>
        <span className="">Choose</span> <span className="">Plan</span>
       </button>
       {/* <h5 className="text-sm font-semibold mt-5">No hidden charges!</h5> */}
        </div>

         <div className="w-[95%] py-10 md:w-[390px] hover:text-[#ffffff] border border-[#1f8891] rounded-lg hover:bg-gradient-to-r from-[#87B88F] to-[#1F8891] text-center shadow-md hover:shadow-xl ">
        <h4 className="text-lg font-semibold">Bridal Skincare</h4>
        <h4>Package</h4>
        <h1 className="font-semibold text-6xl	">5000</h1>
        <h3>Rupees</h3>
        <hr className="mt-14" />
         <div className="leading-9	mt-16">
         <ul>
          <li className="text-[16px] font-semibold">Discount On Products</li>
          <li className="text-[16px] font-semibold">Lifetime Free Support</li>
          <li className="text-[16px] font-semibold capitalize">Durration three months</li>
          <li className="text-[16px] font-semibold capitalize">Full access</li>
         </ul>
         </div>
        <button className=' bg-[#fff] p-5 rounded mt-7 tex border border-[#1F8891]'>
         <span className="text-[black]  ">Choose Plan</span>
       </button>
       {/* <h5 className="text-sm font-semibold mt-5">No hidden charges!</h5> */}
        </div>

         
      </div>

      
     </section>
    </>
  )
}

export default Pricing
