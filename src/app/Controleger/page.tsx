import React from 'react'
import CustomHero from '@/components/common/CustomHero'
import ProductImage from '../../../public/Images/blog/customproduct.png'
import CustomProduct from '@/components/common/CustomProduct'
function page() {
  return (
    <div className='pb-10'>
    <div>
      <CustomHero bg={ProductImage}title={
    <>
      SWITCHGEAR<br />/ CONTROLGEAR
    </>
  }  sub ='.'/>
    </div>
    <div> 
       <CustomProduct/>
    </div>
    </div>
   

  )
}

export default page
