'use client'
import React, { useState, useEffect } from 'react'
import Typography from '../UI/Typography';

const Card = () => {
    interface ItemProps {
        name: string;
        pf: string;
        title: string;
        des: string;
        date: string;
        ownerImage?: string;
        image: string;
        description?: string;
    }

    const [blogs, setBlogs] = useState<ItemProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://pempak-api.vercel.app/api/blogs');
                console.log(response);
                const data = await response.json();
                setBlogs(data);
                console.log(data);

                //  &&  throw new Error(`HTTP error! status: ${response.status}`);


                // if (!response.ok) {
                //     throw new Error(`HTTP error! status: ${response.status}`);
                // }


            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch blogs');
                console.error('Error fetching blogs:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);
    if (loading) {
        return (
            <Typography className='gap-6 w-[70%] grid grid-cols-3 py-[50px]'>
                <Typography className='text-center col-span-3'>Loading blogs...</Typography>
            </Typography>
        );
    }

        if (error) {
        return (
            <Typography className='gap-6 w-[70%] grid grid-cols-3 py-[50px]'>
                <Typography className='text-center col-span-3 text-red-500'>
                    Error: {error}
                </Typography>
            </Typography>
        );
    }

return (
            <>

        <Typography className='gap-6 w-[70%] grid grid-cols-3 py-[50px]'>
            {blogs.map((item  : ItemProps, index : number) => (
                <Typography className='border border-[#DFDFDF] p-6 rounded-lg w-[384px]' key={index}>
                    <img
                        src={item.image || '/placeholder-image.jpg'}
                        alt={item.title}
                        className='h-[236px] w-[336px] rounded-[16px] object-cover'
                    />
                    <Typography color='primary'>{item.date.split('T')[0]}</Typography>
                    <Typography variant='h4'>{item.title}</Typography>
                        <Typography>{item.description}</Typography>
                    <Typography>{item.des}</Typography>
                    <Typography className='flex gap-2.5'>
                        <img
                            src={item.ownerImage || '/placeholder-avatar.jpg'}
                            alt={item.pf}
                            className='h-8 w-8 rounded-full object-cover'
                        />
                        <Typography>{item.name}</Typography>
                    </Typography>
                </Typography>
            ))}
        </Typography>
         <div className=" flex justify-center w-full items-center">
        <button className="text-white rounded-[12px] bg-[#F16336] h-[50px] w-[146px] font-semibold text-size-[16px]  hover:bg-orange-600">
          View More
        </button>
      </div>
    </>
    )
}
export default Card
