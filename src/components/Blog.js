import React from 'react'
import blogimg1 from '../../public/images/blog-1-1.png'
import blogimg2 from '../../public/images/blog-1-2.png'
import blogimg3 from '../../public/images/blog-1-3.png'
import BlogItem from './common/BlogItem'
import CommonSectionHeading from './common/CommonSectionHeading'

function Blog() {
 
 let BlogListData = [
    {
     image: blogimg1 ,
     date: "20 Feb",
     comment: "2 Comments",
     li1: "Find out about the",
     li2: "types of skin",
     li3: "",
     link: '/blog'
    },
    {
      image: blogimg2 ,
     date: "20 Feb",
     comment: "2 Comments",
     li1: "Learn how to prevent ",
     li2: "cancer in skin?",
     link: '/blogs'

    },
    {
     image: blogimg3 ,
     date: "20 Feb",
     comment: "2 Comments",
     li1: "How to keep your ",
     li2: "skin clean?",
     link: '/blog1'

    }
 ]

  return (
    <>
    


    <section className='w-full bg-[#f6f6fb] py-10 md:py-20' id='news'>
  <div>
    <CommonSectionHeading h4="Latest News & Articles" h2="Checkout What's Going on in Our Blogs" />
  </div>
  <div className='md:w-[90%] mx-auto items-center flex flex-wrap justify-center'>
    {BlogListData.map((BlogData, index) => (
      <BlogItem key={index}  image={BlogData.image} date={BlogData.date} comment={BlogData.comment} li1={BlogData.li1} li2={BlogData.li2} link={BlogData.link}/>
    ))}
  </div>
</section>

    </>
  )
}

export default Blog