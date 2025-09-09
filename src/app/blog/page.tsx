import React from 'react'
import CustomHero from '@/components/common/CustomHero'
import heroImage from  '../../../public/Images/blog/blog_image.png'
import Cards from '@/components/blogs/Cards'
function page() {
  return (
    <div className='pb-10'>
    <div  >
      <CustomHero bg={heroImage} title='Blogs' sub ='Stay updated with the latest trends, ideas, and expert advice in our blogs.'/>
    </div>
    <div> 
        <Cards/>
       
    </div>
    </div>
   

  )
}

export default page
