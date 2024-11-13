import Image from 'next/image'
import React from 'react'

import skintypeImage from '../../../public/images/blog-1-1.png'

const page = () => {
  return (
    <div className='full py-20'>
      <div className='w-[70%] mx-auto'>
        {/* <Image className='w-[60%] h-[400px]' src={skintypeImage} alt='' /> */}


        <h1 className='text-xl font-bold mb-10'>What are types of skin?</h1>
       <p className='mt-2'>It is true that maintaining a healthy skin barrier is crucial for people of all skin types. It is also necessary to keep in mind that everyone has different skin type. It follows that there is no universal solution for getting glowing, healthy skin.</p>
       <h2 className='mt-6 text-[#34476C] text-[20px] font-bold'>Dry Skin</h2>
       <p className='mt-2'>Low air humidity, and prolonged exposure to hot water is just a few of the extrinsic causes that may cause temporary dry skin. Some individuals, though, may experience this more often, and it may even be a chronic problem. The dry skin type isn't usually significant, it may lead to other skin problems like eczema and make you more susceptible to infections if it's not well handled since it can break and let germs in.</p>
       <h2 className='mt-6 text-[#34476C] text-[20px] font-bold'>Oily Skin</h2>
       <p className='mt-2'>Skin type that is oily appears shiny, greasy, and pore-filled. It is caused by the sebaceous glands producing too much oil, and its severity is mainly dictated by hereditary and/or hormonal factors. It is common in persons under the age of 30 and is often linked to the development of acne.</p>
       <h2 className='mt-6 text-[#34476C] text-[20px] font-bold'>Normal Skin</h2>
       <p className='mt-2'>Skin that falls into the "normal skin type" category is just the right amount of suppleness. It won't break out, dry skin, flake, or leave you feeling oily or congested. Pores are smaller, the skin is smoother, and there is less redness and sensitivity in those with normal skin. Even while normal skin doesn't have anything in particular to worry about, it still needs to be cared for in order to maintain its best appearance and health. The optimal regimen for normal skin aids in hydration maintenance by assisting the skin's protective barrier and locking in moisture.</p>
       <h2 className='mt-6 text-[#34476C] text-[20px] font-bold'>Combination Skin</h2>
       <p className='mt-2'>Dry cheeks and oily T-zone is normal for those who have combination skin. Changes in this skin type may occur at different times of the year and in response to external stimuli like stress or hormonal shifts. Proper care for skin that is oily or normal in some areas and dry in others requires a combination of effective cleaning and hydration.</p>
       <h2 className='mt-6 text-[#34476C] text-[20px] font-bold'>Sensitive Skin</h2>
       <p className='mt-2'>Anyone can have sensitive skin regardless to type they have. A person can have dry skin, oily skin or normal skin and any from these can be sensitive. Normally sensitive skin is itchy, look red, dry or feel like burning no matter what your skin type is. These signs and symptoms may be brought on by exposure to allergens or irritants, such as dyes or fragrances, or by having skin that is already more sensitive than average.</p>
       <h2 className='mt-6 text-[#34476C] text-[20px] font-bold'>How can I identify my skin type?</h2>
       <p className='mt-2'>A high or low level of sebum (oil) production defines your skin type. Factors like stress, heredity, hormones, humidity, and the aging process may all play a role in how oily your skin becomes over time. In most cases, identifying your skin type is as easy as keeping an eye out for the telltale signs outlined below. The blotting sheet technique and the "watch and wait" approach are two home tests that may help you determine your skin type in about 30 minutes.</p>
      </div>
    </div>
  )
}

export default page
