'use client'
import React, { useEffect, useState } from 'react'
import CustomHero from '@/components/common/CustomHero'
import ProductImage from '../../../public/Images/blog/customproduct.png'
import Typography from '@/components/UI/Typography'
import Image from 'next/image'
import banner from './assets/banner.png'
import Thumbnail_one from './assets/second.png'
import Thumbnail_two from './assets/thired.png'
import Thumbnail_three from './assets/fourth.png'
import Thumbnail_four from './assets/last.png'

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

        // Find the SWITCHGEAR / CONTROLGEAR category
        const switchgearCategory = data.find((cat: Category) => 
          cat.name.toLowerCase().includes('switchgear') || 
          cat.name.toLowerCase().includes('controlgear') ||
          cat.name.toLowerCase().includes('switchgear / controlgear')
        )
        
        if (switchgearCategory) {
          setCurrentCategory(switchgearCategory)
          console.log('Found Switchgear category:', switchgearCategory)
          console.log('Found Name:', switchgearCategory.name)
          console.log('Category description:', switchgearCategory.description)
          console.log('Category banner image:', switchgearCategory.bannerImage)
          console.log('Category additional images:', switchgearCategory.additionalImages)
        } else {
          console.log('Switchgear category not found in:', data)  
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
        const parentName = 'Switchgear / Controlgear'

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

  // Filter subcategories to only those with parent category 'Switchgear / Controlgear'
  const filteredSubCategories: SubCategory[] = subCategories.filter(
    (sc) => sc.parentCategory?.toLowerCase() === 'switchgear / controlgear'
  )

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
          bg={currentCategory?.bannerImage || ProductImage}
          title={currentCategory?.name?.toUpperCase()
            // <>
            //   {currentCategory?.name?.toUpperCase() || (
            //     <>
            //       POWER DISTRIBUTION <br /> TRANSFORMER
            //     </>
            //   )}
            // </>
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
              className="rounded-xl shadow-md object-cover"
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
          {filteredSubCategories.map((subcategory, index) => (
            <div
              key={subcategory._id}
              className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ${index === 0 ? 'border-2 border-orange-500' : 'border border-gray-200'}`}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src={subcategory.bannerimg || subcategory.images?.[0] || '/Images/blog/product1.jpg'}
                    alt={subcategory.name}
                    width={120}
                    height={120}
                    className="w-30 h-30 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <Typography variant="h4" color="dark" className="mb-2 font-bold">
                    {subcategory.name}
                  </Typography>
                  {subcategory.description && (
                    <Typography variant="ps" color="tertiary" className="mb-4 line-clamp-3">
                      {subcategory.description}
                    </Typography>
                  )}
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

export default Page
