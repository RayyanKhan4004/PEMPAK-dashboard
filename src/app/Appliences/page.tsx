import React from 'react'
import CustomHero from '@/components/common/CustomHero'
import AppliencesImage from '../../../public/Images/blog/Appliences.png'
import CustomApplience from '@/components/common/CustomGreen'
function page() {
  return (
    <div className='pb-10'>
    <div>
      <CustomHero bg={AppliencesImage} title='APPLIANCES' sub ='.'/>
    </div>
    <div> 
       <CustomApplience/>
       
    </div>
    </div>
   

  )
}

export default page


