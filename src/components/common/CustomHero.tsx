import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import Typography from '../UI/Typography'
type CustomHeroProps= {
    title :  React.ReactNode;
    sub : ReactNode,
    bg : string | StaticImport
    gradient ? : boolean
}
const CustomHero = ({title , sub , bg , gradient} :CustomHeroProps ) => {
  return (
    // <div className='relative h-[470px] w-full'>
       <div className='relative h-[470px] flex-col flex justify-center items-left pl-[120px] gap-[14px]'>
      <Image className={`absolute inset-0 -z-10 object-cover`} src={bg} alt='' fill priority sizes="100vw" />
      <div className={`absolute inset-0 z-0 object-cover ${gradient ? 'bg-gradient-to-r from-[#F16336] to-[#00000000]' : ''}`}></div>
      <Typography className='z-[1]' variant='h1' weight='b' color='white'>{title}</Typography>
      {/* <Typography variant='p-l' weight='b' color='white'>{sub}</Typography> */}
      <Typography  className='w-[401px]' variant='p-l' weight='b' color='white'>{sub}</Typography>
    </div> 
  )
}

export default CustomHero

