'use client'
import React from 'react'
import Typography from '../UI/Typography';

const Card = () => {
        interface Item {
      name: string;
      title: string;
      des: string;
      date: string;
      ownerImage?: string;
      img: string;
    }
    const card:  Item[]= [
     

        {
            name: 'Shahid Ali Malik',
           img: '',
            title: 'New Solar Division Launch',
            des:'Expanding our services to include comprehensive solar installation and maintenance',
            date: 'August 15, 2025',
            ownerImage:''

        },
        {
            name: 'Shahid Ali Malik',
          img: '',
            title: 'New Solar Division Launch',
            des:'Expanding our services to include comprehensive solar installation and maintenance',
            date: 'August 15, 2025',
            ownerImage:''

        },
        {
            name: 'Shahid Ali Malik',
            img: '',
            title: 'New Solar Division Launch',
            des:'Expanding our services to include comprehensive solar installation and maintenance',
            date: 'August 15, 2025',
            ownerImage:''

        },
        {
            name: 'Shahid Ali Malik',
           img: '',
            title: 'New Solar Division Launch',
            des:'Expanding our services to include comprehensive solar installation and maintenance',
            date: 'August 15, 2025',
            ownerImage:''

        },
        {
            name: 'Shahid Ali Malik',
            img: '',
            title: 'New Solar Division Launch',
            des:'Expanding our services to include comprehensive solar installation and maintenance',
            date: 'August 15, 2025',
            ownerImage:''

        },
        {
            name: 'Shahid Ali Malik',
          img: '',
            title: 'New Solar Division Launch',
            des:'Expanding our services to include comprehensive solar installation and maintenance',
            date: 'August 15, 2025',
            ownerImage:''

        },
        {
            name: 'Shahid Ali',
           img: '',
            title: 'New Solar Division Launch',
            des:'Expanding our services to include comprehensive solar installation and maintenance',
            date: 'August 15, 2025',
            ownerImage:''

        },
        {
            name: 'Shahid Ali Malik',
           img: '',
            title: 'New Solar Division Launch',
            des:'Expanding our services to include comprehensive solar installation and maintenance',
            date: 'August 15, 2025',
            ownerImage:''

        },
        {
            name: 'Shahid Ali Malik',
           img: '',
            title: 'New Solar Division Launch',
            des:'Expanding our services to include comprehensive solar installation and maintenance',
            date: 'August 15, 2025',
            ownerImage:''

        },
        {
            name: 'Shahid Ali Malik',
          img: '',
            title: 'New Solar Division Launch',
            des:'Expanding our services to include comprehensive solar installation and maintenance',
            date: 'August 15, 2025',
            ownerImage:''

        },
        {
            name: 'Shahid Ali Malik',
           img: '',
            title: 'New Solar Division Launch',
            des:'Expanding our services to include comprehensive solar installation and maintenance',
            date: 'August 15, 2025',
            ownerImage:''

        },
        {
            name: 'Shahid Ali Malik',
            img: '',
            title: 'New Solar Division Launch',
            des:'Expanding our services to include comprehensive solar installation and maintenance',
            date: 'August 15, 2025',
            ownerImage:''

        },

    ] 
  return (
    <Typography className=' gap-6  grid grid-cols-3 py-[50px] '>
        {card.map((Item, index) => (

        <Typography className='border border-[#DFDFDF] p-6 rounded-lg w-[384px]  h-[463px] hover:bg-orange-500'key ={index}>{Item.img}
            <img src="" alt="" className='h-[236px] w-[336px] rounded-[16px]' />
            <Typography   color='primary'>{Item.date}</Typography>
            <Typography variant='h4'>{Item.title}</Typography>
            <Typography>{Item.des}</Typography>
            <Typography className='flex gap-2.5'>
            <img src="#" alt="" className='h-8 w-8 rounded-full' />
            <Typography>{Item.name}</Typography>
         </Typography>

        </Typography>))}
    </Typography>
  )
}
export default Card
