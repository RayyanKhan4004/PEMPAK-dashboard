'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Typography from '../UI/Typography';
import Image from "next/image";

const Card = () => {
    interface ItemProps {
        _id: string;
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
    const [ ceoData, setCeoData] = useState<{ name: string, image: string } | null>(null);
    const [displayedBlogs, setDisplayedBlogs] = useState<ItemProps[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 9;

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://pempak-api.vercel.app/api/blogs');
                console.log(response);
                const data = await response.json();
                setBlogs(data);
                // Set initial displayed blogs (first 6)
                setDisplayedBlogs(data.slice(0, blogsPerPage));
                // console.log(data);

                // throw new Error(`HTTP error! status: ${response.status}`);


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

        const fetchTeamData = async () => {
            try {
                const response = await fetch('https://pempak-api.vercel.app/api/teams');
                const teamData = await response.json();
                // Find the CEO from the team data
                const ceo = teamData.find((member: any) => member.role === 'Chief Executive Officer (CEO)');
                if (ceo) {
                    setCeoData({
                        name: ceo.name,
                        image: ceo.image || '/placeholder-avatar.jpg'
                    });
                }
            } catch (err) {
                console.error('Error fetching team data:', err);
            }
        };

        fetchBlogs();
        fetchTeamData();
    }, []);

    const handleViewMore = () => {
        const nextPage = currentPage + 1;
        const startIndex = 0;
        const endIndex = nextPage * blogsPerPage;
        const newBlogs = blogs.slice(startIndex, endIndex);
        setDisplayedBlogs(newBlogs);
        setCurrentPage(nextPage);
    };

    const hasMoreBlogs = displayedBlogs.length < blogs.length;
    if (loading) {
        return (
            <Typography className='gap-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-[50px]'>
                <Typography className='text-center col-span-full'>Loading blogs...</Typography>
            </Typography>
        );
    }

    if (error) {
        return (
            <Typography className='gap-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-[50px]'>
                <Typography className='text-center col-span-full text-red-500'>
                    Error: {error}
                </Typography>
            </Typography>
        );
    }

    return (
        <>

            <Typography className='gap-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-[50px]'>
                {displayedBlogs.map((item: ItemProps) => (
                    <Link href={`/blog/${item._id}`} key={item._id} className='border border-[#DFDFDF] p-6 rounded-lg w-full max-w-[384px] mx-auto block hover:shadow-md transition-shadow'>
                        <Image
                            src={item.image || '/placeholder-image.jpg'}
                            alt={item.title}
                            className='h-[236px] w-full rounded-[16px] object-cover'
                        />
                        <div className='py-4'><Typography color='primary'>{item.date.split('T')[0]}</Typography></div>
                        <div><Typography variant='h4'>{item.title}</Typography></div>
                        <div className='py-[20px]'><Typography>{item.description ? item.description.split("").slice(0, 100).join("") + "..." : "No description available"}</Typography></div>
                        <Typography>{item.des}</Typography>
                        <Typography className='flex gap-2.5'>
                            <Image
                                src={item.ownerImage || ceoData?.image || '/placeholder-avatar.jpg'}
                                alt={item.pf}
                                className='h-8 w-8 rounded-full object-cover'
                            />
                            <Typography>{item.name || ceoData?.name || 'Author'}</Typography>
                        </Typography>
                    </Link>
                ))}
            </Typography>
            {hasMoreBlogs && (
                <div className=" flex justify-center w-full items-center">
                    <button 
                        onClick={handleViewMore}
                        className="text-white rounded-[12px] bg-[#F16336] h-[50px] w-[146px] font-semibold text-size-[16px]  hover:bg-orange-600"
                    >
                        View More
                    </button>
                </div>
            )}
        </>
    )
}
export default Card
