import React from 'react'
import CustomHero from '@/components/common/CustomHero'
import GreenImage from '../../../public/Images/blog/GreenEnergy.png'
import CustomGreen from '@/components/common/CustomGreen'
import CustomDes from '../../components/common/CustomDes'
function page() {
  return (
    <div className='pb-10'>
    <div>
      <CustomHero bg={GreenImage} title='GREEN ENERGY' sub ='.'/>
    </div>
    <div> 
       <CustomGreen/>
       <CustomDes/>
       
    </div>
    </div>
   

  )
}

export default page

