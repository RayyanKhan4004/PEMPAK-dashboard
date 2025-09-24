'use client'
import React, { useEffect, useState } from 'react'
import CustomHero from '@/components/common/CustomHero'
import PowerImage from '../../../public/Images/blog/powerdistribution.png'
import Typography from '@/components/UI/Typography'
import Image from 'next/image'
import Link from 'next/link'
import banner from './assets/banner.png'
import Thumbnail_one from './assets/thumbnail_one.png'
import Thumbnail_two from './assets/thumbnail_two.png'
import Thumbnail_three from './assets/thumbnail_three.png'
import Thumbnail_four from './assets/thumbnail_four.png'

function Page() {


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
    bannerimg?: string
    images: string[]
    parentCategory: string
  }

  
  // * set states
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

        const transformerCategory = data.find((cat: Category) =>
          cat.name.toLowerCase().includes('power') ||
          cat.name.toLowerCase().includes('distribution') ||
          cat.name.toLowerCase().includes('transformer') ||
          cat.name.toLowerCase().includes('power distribution')
        )
        if (transformerCategory) {
          setCurrentCategory(transformerCategory)
          console.log('Found Transformer category:', transformerCategory)
          console.log('Category description:', transformerCategory.description)
          console.log('Category banner image:', transformerCategory.bannerImage)
          console.log('Category additional images:', transformerCategory.additionalImages)
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
        const parentName = 'Power Distribution Transformer'

        // Try fetching with a server-side filter first (if API supports it)
        const filteredUrl = `${baseApi}/subcategories?parentCategory=${encodeURIComponent(parentName)}&limit=50`
        let response = await fetch(filteredUrl)
        let json = await response.json()
        let data = Array.isArray(json) ? json : json?.data ?? []

        // Fallback: if API didn't filter, fetch all and filter client-side
        if (!Array.isArray(data) || (Array.isArray(data) && data.length > 0 && !data.every((sc: any) => sc.parentCategory?.toLowerCase() === parentName.toLowerCase()))) {
          response = await fetch(`${baseApi}/subcategories?limit=50`)
          json = await response.json()
          const all = Array.isArray(json) ? json : json?.data ?? []
          data = all.filter((sc: any) => sc.parentCategory?.toLowerCase() === parentName.toLowerCase())
        }

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

  // Filter subcategories for the current parent category
  const filteredSubCategories: SubCategory[] = subCategories.filter(
    (sc) => sc.parentCategory?.toLowerCase() === 'power distribution transformer'
  )

  // Product categories data for Power Distribution Transformers
  // const productCategories = [
  //   {
  //     id: '1',
  //     title: 'Distribution Transformers',
  //     subtitle: 'Up to 5000 kVA, 11kV/0.4kV',
  //     description: 'High-efficiency distribution transformers for reliable power distribution in industrial and commercial applications.',
  //     image: '/Images/blog/product1.jpg'
  //   },
  //   {
  //     id: '2',
  //     title: 'Pad-Mounted Transformers',
  //     subtitle: 'Underground distribution up to 2500 kVA',
  //     description: 'Compact pad-mounted transformers designed for urban areas with space constraints and aesthetic requirements.',
  //     image: '/Images/blog/product2.jpg'
  //   },
  //   {
  //     id: '3',
  //     title: 'Pole-Mounted Transformers',
  //     subtitle: 'Single and three-phase up to 500 kVA',
  //     description: 'Lightweight pole-mounted transformers for rural and suburban power distribution networks.',
  //     image: '/Images/blog/product3.jpg'
  //   },
  //   {
  //     id: '4',
  //     title: 'Dry-Type Transformers',
  //     subtitle: 'Cast resin and air-cooled up to 2500 kVA',
  //     description: 'Environmentally friendly dry-type transformers with no oil, suitable for indoor installations.',
  //     image: '/Images/blog/product1.jpg'
  //   },
  //   {
  //     id: '5',
  //     title: 'Oil-Filled Transformers',
  //     subtitle: 'Mineral oil and synthetic ester up to 10 MVA',
  //     description: 'High-efficiency oil-filled transformers for heavy-duty industrial and utility applications.',
  //     image: '/Images/blog/product2.jpg'
  //   },
  //   {
  //     id: '6',
  //     title: 'Step-Up Transformers',
  //     subtitle: 'For power generation up to 50 MVA',
  //     description: 'Step-up transformers for power generation applications, connecting generators to transmission systems.',
  //     image: '/Images/blog/product3.jpg'
  //   },
  //   {
  //     id: '7',
  //     title: 'Step-Down Transformers',
  //     subtitle: 'Transmission to distribution voltage levels',
  //     description: 'Step-down transformers for reducing transmission voltages to distribution levels for end users.',
  //     image: '/Images/blog/product1.jpg'
  //   },
  //   {
  //     id: '8',
  //     title: 'Isolation Transformers',
  //     subtitle: 'Galvanic isolation and voltage regulation',
  //     description: 'Isolation transformers providing electrical safety and voltage regulation for sensitive equipment.',
  //     image: '/Images/blog/product2.jpg'
  //   },
  //   {
  //     id: '9',
  //     title: 'Auto Transformers',
  //     subtitle: 'Variable voltage ratio up to 10 MVA',
  //     description: 'Auto transformers for voltage regulation and power transfer with reduced copper requirements.',
  //     image: '/Images/blog/product3.jpg'
  //   },
  //   {
  //     id: '10',
  //     title: 'Furnace Transformers',
  //     subtitle: 'Arc furnace and induction heating applications',
  //     description: 'Specialized transformers for electric arc furnaces and induction heating systems in industrial processes.',
  //     image: '/Images/blog/product1.jpg'
  //   },
  //   {
  //     id: '11',
  //     title: 'Rectifier Transformers',
  //     subtitle: 'For DC power supply systems',
  //     description: 'Rectifier transformers designed for converting AC power to DC for industrial and traction applications.',
  //     image: '/Images/blog/product2.jpg'
  //   },
  //   {
  //     id: '12',
  //     title: 'Testing & Commissioning Services',
  //     subtitle: 'Factory and site testing services',
  //     description: 'Comprehensive testing and commissioning services for all types of power distribution transformers.',
  //     image: '/Images/blog/product3.jpg'
  //   }
  // ]

  const thumbnailImages = [
    Thumbnail_one,
    Thumbnail_two,
    Thumbnail_three,
    Thumbnail_four
  ]

  if (loading) {
    return (
      <div className='pb-10'>
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <Typography variant="p-l" color="tertiary">Loading category data...</Typography>
          </div>
        </div>
      </div>
    )
  }


  return (
    <div className='pb-10'>
      {/* Hero Section */}
      <div>
        <CustomHero
          gradient={true}
          bg={currentCategory?.bannerImage || PowerImage}
          title={
            <>
              {
                /* {currentCategory?.name?.toUpperCase() ||  */
                (
                  <>
                    POWER DISTRIBUTION <br /> TRANSFORMER
                  </>
                )}
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
            <div className="space-y-4 text-[var(--color-light-black)] leading-relaxed">
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
          {filteredSubCategories.map((subcategory, index) => (
            <Link
              key={subcategory._id}
              href={`/subcategory/${subcategory._id}`}
              className={`relative rounded-lg shadow-md p-6 transition-shadow duration-300 block overflow-hidden group  bg-white`}>
              {/* Foreground content */}
              <div className="relative z-10 flex gap-4 transition-colors duration-500 group-hover:text-white">
                <div className="flex-shrink-0">
                  <Image
                    src={subcategory.bannerimg || subcategory.images?.[0] || '/Images/blog/product1.jpg'}
                    alt={subcategory.name}
                    width={120} height={120} 
                    className="w-30 h-30 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <Typography variant="h4" color="dark" className="mb-2 font-bold group-hover:text-white">
                    {subcategory.name}
                  </Typography>
                  {subcategory.description && (
                    <Typography variant="ps" color="tertiary" className="mb-4 line-clamp-3 group-hover:text-gray-100">
                      {subcategory.description}
                    </Typography>
                  )}
                  <div className="flex items-center text-orange-500 font-medium group-hover:text-white">
                    <span className="mr-2">Learn More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hover background (fill from bottom to top) */}
              <div className="absolute inset-0 h-full w-full bg-[var(--color-primary)] transition-all duration-500 ease-in-out -translate-x-full group-hover:translate-x-0"></div>

              {/* Bottom strip (7px when idle) */}
              <div className="absolute left-0 bottom-0 w-[7PX] h-full bg-[var(--color-primary)]"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page

