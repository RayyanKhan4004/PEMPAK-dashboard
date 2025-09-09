import Typography from '@/components/UI/Typography'
import React from 'react'
import Image from 'next/image'
import HeroImage from '../../../../public/Images/blog/bg_image.png'

const page = () => {
  return (
    <>
    <Typography className='text-[48px] mt-[50px]'>5 Essential Electrical Safety Tips for
Every Homeowner </Typography> 
<Typography className='flex mb-8 gap-[11px]'>
<Typography className='flex gap-2.5'> <img src="#" alt="" className='h-8 w-8 rounded-full' /></Typography>
<Typography variant='p' color='dark'>Shahid Ali Malik</Typography>
<span className="inline-block w-4 h-4 bg-[var(--color-gray)] rounded-full "></span>
<Typography color='secondary'>May 19, 2025</Typography>
</Typography>
<div> 
 <Image className='w-full mt-[50px]' src={HeroImage} alt='' />
</div>



    </>
  )
}

export default page
