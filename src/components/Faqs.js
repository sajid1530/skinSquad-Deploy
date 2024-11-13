import React from 'react'
import Accordion from './common/Accordion'
    import { faqsData } from '@/utils/content'
import CommonSectionHeading from './common/CommonSectionHeading'

const Faqs = () => {
  return (
    <section className="py-16">

      <div className="container md:w-[90%] px-4 mx-auto">
      <CommonSectionHeading h4="FAQ's" h2="Frequently Asked Questions for Skin Squad App" />
        <div className="md:flex justify-center gap-5 w-full mt-10">
          <div className="md:w-8/12 self-center mt-10 md:mt-0">
            <div className="accordion">
              {faqsData.map(({ title, content}, index) => { 
                return(
                  <React.Fragment key={index}>
                <Accordion key={index} title={title} content={content} />
                  </React.Fragment>
              )})}
            </div>
          </div>
        </div>
      </div>
    </section>  
  )
}

export default Faqs
