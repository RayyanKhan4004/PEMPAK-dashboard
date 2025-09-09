import React from 'react'
import Typography from '../UI/Typography'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full flex items-center flex-col mt-[100px]'>
      <Typography variant='h2' weight='b' color='dark' className='pt-[100px]'> Updates & Announcements</Typography>
      <Typography variant='p-l'> Stay informed with our latest news, updates, and announcements.</Typography>
      <Card/>
    </div>
  )
}

export default Cards
