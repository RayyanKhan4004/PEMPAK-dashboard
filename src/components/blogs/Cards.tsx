import React from 'react'
import Typography from '../UI/Typography'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full flex items-center flex-col  py-[100px] px-[120px]'>
      <Typography variant='h2' weight='b' color='dark'> Updates & Announcements</Typography>
      <Typography variant='p-l'> Stay informed with our latest news, updates, and announcements.</Typography>
      <Card/>
    </div>
  )
}

export default Cards
