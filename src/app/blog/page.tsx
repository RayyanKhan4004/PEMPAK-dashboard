import React from 'react'
import CustomHero from '@/components/common/CustomHero'
import heroImage from  '../../../public/Images/blog/blog_image.png'

function page() {
  return (
    <div className='w-full'>
      <CustomHero bg={heroImage} title='Blogs' sub ='Stay updated with the latest trends, ideas, and expert advice in our blogs.'/>
    </div>
  )
}

export default page
