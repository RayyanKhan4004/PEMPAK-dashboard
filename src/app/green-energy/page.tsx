'use client'
import React, { useEffect, useState } from 'react'
import CustomHero from '@/components/common/CustomHero'
import GreenImage from '../../../public/Images/blog/GreenEnergy.png'
import Typography from '@/components/UI/Typography'
import Image from 'next/image'
import banner from './assets/banner.png'
import Thumbnail_one from './assets/thumbnail_one.png'
import Thumbnail_two from './assets/thumbnail_two.png'
import Thumbnail_three from './assets/thumbnail_three.png'
import Thumbnail_four from './assets/thumbnail_four.png'

function page() {

    // * interface for main categories
  interface Category {
    _id: string
    name: string;
    description?: string;
    bannerImage?: string;
    additionalImages?: string[]
  }

  // * interface for  subcategories
  interface SubCategory {
    _id: string
    name: string
    description?: string
    bannerimg: string
    additionalimages: string[]
    parentCategory: string
  }

    const [categories, setCategories] = useState<Category[]>([])
    const [subCategories, setSubCategories] = useState<SubCategory[]>([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentCategory, setCurrentCategory] = useState<Category | null>(null);

      useEffect(() => {
        const baseApi = process.env.NEXT_PUBLIC_API_BASE ?? 'https://pempak-api.vercel.app/api'
        // const baseApi = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:5050/api'
    
        const fetchCategories = async () => {
          try {
            setLoading(true)
            const res = await fetch(`${baseApi}/categories`)
            const json = await res.json()
            const data = Array.isArray(json) ? json : json.data ?? []
            setCategories(data)
    
            const greenCategory = data.find((cat: Category) =>
              cat.name.toLowerCase().includes('power') ||
              cat.name.toLowerCase().includes('distribution') ||
              cat.name.toLowerCase().includes('transformer') ||
              cat.name.toLowerCase().includes('power distribution')
            )
            if (greenCategory) {
              setCurrentCategory(greenCategory)
              console.log('Found Transformer category:', greenCategory)
              console.log('Category description:', greenCategory.description)
              console.log('Category banner image:', greenCategory.bannerImage)
              console.log('Category additional images:', greenCategory.additionalImages)
            } else {
              console.log('Transformer category not found in:', data)
              console.log('Available categories:', data.map((cat: Category) => cat.name))
            }
          } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch categories');
          } finally {
            setLoading(false);
          }
        }
    
        const fetchSubCategories = async () => {
          try {
            setLoading(true)
            const response = await fetch(`${baseApi}/subcategories?limit=50`)
            const json = await response.json();
            const data = Array.isArray(json) ? json : json?.data ?? [];
            setSubCategories(data)
          } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch subcategories');
          } finally {
            setLoading(false);
          }
        }
    
        fetchCategories()
        fetchSubCategories()
    
      }, [])

  // Product categories data for Green Energy
  const productCategories = [
    {
      id: '1',
      title: 'Solar Panel Systems',
      subtitle: 'Monocrystalline and Polycrystalline up to 500W',
      description: 'High-efficiency solar panels for residential, commercial, and industrial applications with advanced cell technology.',
      image: '/Images/blog/product1.jpg'
    },
    {
      id: '2',
      title: 'Wind Energy Systems',
      subtitle: 'Small-scale turbines 1kW to 50kW capacity',
      description: 'Vertical and horizontal axis wind turbines for off-grid and grid-tie applications in various wind conditions.',
      image: '/Images/blog/product2.jpg'
    },
    {
      id: '3',
      title: 'Battery Storage Solutions',
      subtitle: 'Lithium-ion and Lead-acid systems up to 100kWh',
      description: 'Advanced battery storage systems for energy backup, peak shaving, and grid independence applications.',
      image: '/Images/blog/product3.jpg'
    },
    {
      id: '4',
      title: 'Solar Inverters',
      subtitle: 'String, Central, and Micro inverters up to 1MW',
      description: 'Grid-tie and off-grid solar inverters with MPPT technology for optimal energy conversion efficiency.',
      image: '/Images/blog/product1.jpg'
    },
    {
      id: '5',
      title: 'Charge Controllers',
      subtitle: 'MPPT and PWM controllers up to 100A',
      description: 'Smart charge controllers for battery protection and optimal solar panel performance in all weather conditions.',
      image: '/Images/blog/product2.jpg'
    },
    {
      id: '6',
      title: 'LED Lighting Systems',
      subtitle: 'Commercial and industrial LED solutions',
      description: 'Energy-efficient LED lighting systems for indoor and outdoor applications with smart controls and dimming.',
      image: '/Images/blog/product3.jpg'
    },
    {
      id: '7',
      title: 'Heat Pump Systems',
      subtitle: 'Air-source and ground-source up to 50kW',
      description: 'High-efficiency heat pumps for space heating and cooling with renewable energy integration capabilities.',
      image: '/Images/blog/product1.jpg'
    },
    {
      id: '8',
      title: 'Smart Energy Management',
      subtitle: 'IoT-based monitoring and control systems',
      description: 'Smart energy management systems for real-time monitoring, optimization, and control of renewable energy assets.',
      image: '/Images/blog/product2.jpg'
    },
    {
      id: '9',
      title: 'EV Charging Infrastructure',
      subtitle: 'Level 1, 2, and DC fast charging stations',
      description: 'Electric vehicle charging stations for residential, commercial, and public applications with smart grid integration.',
      image: '/Images/blog/product3.jpg'
    },
    {
      id: '10',
      title: 'Micro Inverters',
      subtitle: 'Panel-level optimization up to 1.5kW',
      description: 'Micro inverters for maximum solar panel efficiency and individual panel monitoring and control.',
      image: '/Images/blog/product1.jpg'
    },
    {
      id: '11',
      title: 'Energy Storage Management',
      subtitle: 'Battery management and grid integration',
      description: 'Advanced energy storage management systems for optimal battery performance and grid services integration.',
      image: '/Images/blog/product2.jpg'
    },
    {
      id: '12',
      title: 'Green Energy Consulting',
      subtitle: 'System design and feasibility studies',
      description: 'Comprehensive consulting services for green energy system design, installation, and maintenance planning.',
      image: '/Images/blog/product3.jpg'
    }
  ]

  const thumbnailImages = [
    Thumbnail_one,
    Thumbnail_two,
    Thumbnail_three,
    Thumbnail_four
  ]


  return (
    <div className='pb-10'>
      {/* Hero Section */}
            <div>
        <CustomHero
          bg={currentCategory?.bannerImage || GreenImage}
          title={
            <>
              {currentCategory?.name?.toUpperCase() || 'Green Energy'}
            </>
          }
          sub=""
        />
      </div>

      {/* Description Section */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-12">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          <div className="flex-1">
            <Image
              src={currentCategory?.bannerImage || banner}
              alt="Switchgear Control Room"
              width={565}
              height={466}
              className="rounded-xl shadow-md w-full h-auto"
            />
            <div className="flex flex-wrap gap-[23px] mt-4">
              {currentCategory?.additionalImages && currentCategory.additionalImages.length > 0 ? (
                currentCategory.additionalImages.slice(0, 4).map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-[123px] h-[95px] rounded-lg shadow object-cover"
                  />
                ))
              ) : (
                thumbnailImages.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-[123px] h-[95px] rounded-lg shadow object-cover"
                  />
                ))
              )}
            </div>
          </div>
          <div className="flex-1">
            <Typography variant="h2" color="dark" className="mb-[16px] text-semibold">
              Description
            </Typography>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {loading ? (
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                </div>
              ) : currentCategory?.description ? (
                <Typography variant="p-l" color="tertiary">
                  {currentCategory.description}
                </Typography>
              ) : (
                <Typography variant="p-l" color="tertiary">
                  Secondary power systems i.e. generators are used in industries or commercial buildings and hospitals as emergency, prime or continuous power supply when utility power is lost. <br /> <br />
                  Some industries only require generator power for emergency lighting and other emergency systems but in Pakistan as the power failure issues or load shedding is common, the secondary power supply is mandatory. Facilities that have critical or life support systems utilize a more advanced distribution system. <br /> <br />
                  Some industries only require generator power for emergency lighting and other emergency systems but in Pakistan as the power failure issues or load shedding is common, the secondary power supply is mandatory. Facilities that have critical or life support systems utilize a more advanced distribution system. <br /> <br />
                  Some industries only require generator power for emergency lighting and other emergency systems but in Pakistan as the power failure issues or load shedding is common, the secondary power
                </Typography>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Product Categories Section */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-12 bg-gray-50">
        <Typography variant="h2" color="dark" className="text-center mb-12">
          Product Categories
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {productCategories.map((category, index) => (
            <div 
              key={category.id} 
              className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ${
                index === 0 ? 'border-2 border-orange-500' : 'border border-gray-200'
              }`}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={120}
                    height={120}
                    className="w-30 h-30 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <Typography variant="h4" color="dark" className="mb-2 font-bold">
                    {category.title}
                  </Typography>
                  {category.subtitle && (
                    <Typography variant="ps" color="primary" className="mb-2 font-semibold">
                      {category.subtitle}
                    </Typography>
                  )}
                  <Typography variant="ps" color="tertiary" className="mb-4 line-clamp-3">
                    {category.description}
                  </Typography>
                  <div className="flex items-center text-orange-500 font-medium">
                    <span className="mr-2">Learn More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page

