import React from 'react'
import CustomHero from '@/components/common/CustomHero'
import PowerImage from '../../../public/Images/blog/powerdistribution.png'
import CustomPowergeneration from '@/components/common/CustomGreen'
function page() {
  return (
    <div className='pb-10'>
    <div>
      <CustomHero bg={PowerImage} title={
    <>
      POWER DISTRIBUTION <br /> TRANSFORMER
    </>
  } 

    sub ='.'/>
    </div>
    <div> 
       <CustomPowergeneration/>
       
    </div>
    </div>
   

  )
}

export default page

