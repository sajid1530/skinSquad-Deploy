import React from 'react'
import Featurelistitem from './common/Featurelistitem'
import CommonSectionHeading from './common/CommonSectionHeading'
import Featuresimg1 from '../../public/images/dermatologist.png'
import Featuresimg2 from '../../public/images/marketplace.png'
import Featuresimg3 from '../../public/images/NewsFeed.png'

function FeatureList() {

  
  let FeatureListData = [
    {
      img : Featuresimg1,
      title: "Consult Dermatologists",
      para: "Consult a qualified dermatologist in a dedicated chatroom."
    },
    {
      img : Featuresimg2,
      title: "Skincare Marketplace",
      para: "Easily purchase high end skincare products"
    },
    {
      img : Featuresimg3,
      title: "News Feed",
      para: "Get skincare knowledge through our news feed."
    },
    {
      title: "Free Trial",
      para: "Lorem ipsum is are many variations of pass majy."
    }
  ]


  return (
    <>
     <section  className='w-[100%] bg-[#f6f6fb]  py-20 ' id='features'>
      
        <CommonSectionHeading h4="Features" h2=" Skin Squad Presents The Best Features"/>
      
      <div className='flex w-[80%] mx-auto  gap-12 justify-center mt-8 flex-wrap'>
      
        
     
       <Featurelistitem img={ FeatureListData[0].img } title={ FeatureListData[0].title } para={ FeatureListData[0].para } />
     
      
       <Featurelistitem img={ FeatureListData[1].img } title={FeatureListData[1].title} para={ FeatureListData[1].para} />
      
    
      <Featurelistitem img={ FeatureListData[2].img } title={FeatureListData[2].title} para={ FeatureListData[2].para} />
  
     
      {/* <Featurelistitem title={FeatureListData[3].title} para={ FeatureListData[3].para} /> */}

    
      

     </div>
     </section>
    </>
  )
}

export default FeatureList
