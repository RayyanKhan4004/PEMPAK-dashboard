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
 <Image className='w-full py-[50px]' src={HeroImage} alt='' />
</div>
<Typography> Electricity powers almost everything in our daily lives – from the lights in our living rooms to the appliances in our kitchens. While it makes life easier, it can also be dangerous if not handled properly. Practicing electrical safety is essential to protect your family, property, and valuable equipment. Here are five simple but powerful electrical safety tips every homeowner should follow:
  <Typography>1. Don’t Overload Your Outlets </Typography>
</Typography>


    </>
  )
}

export default page
