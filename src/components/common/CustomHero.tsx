import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import Typography from '../UI/Typography'
type CustomHeroProps= {
    title : string,
    sub : ReactNode,
    bg : string | StaticImport
}
const CustomHero = ({title , sub , bg} :CustomHeroProps ) => {
  return (
    <div className='reletive h-[470px] w-full'>
      <Image className='absolute inset-0 -z-10 w-full' src={bg} alt='' />
      <Typography variant='h1' weight='b' color='white'>{title}</Typography>
      <Typography variant='p-l' weight='b' color='white'>{sub}</Typography>
    </div> 
  )
}

export default CustomHero

