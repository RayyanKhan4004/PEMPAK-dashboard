import React from 'react'
import CustomHero from '@/components/common/CustomHero'
import PowerImage from '../../../public/Images/blog/powerdistribution.png'
import CustomPowergeneration from '@/components/common/CustomGreen'
import CustomDes from '../../components/common/CustomDes'
function page() {
  return (
    <div className='pb-10'>
    <div>
      <CustomHero bg={PowerImage} title={
    <>
      POWER DISTRIBUTION <br /> TRANSFORMER
    </>
  } 

    />
    </div>
    <div> 
       <CustomPowergeneration/> 
       <CustomDes/>
        
    </div>
    
    </div>
   

  )
}

export default page

