import React from 'react'
import CustomHero from '@/components/common/CustomHero'
import PowerImage from '../../../public/Images/blog/powerdistribution.png'
import Typography from '@/components/UI/Typography'
import Image from 'next/image'

function page() {
  // Product categories data for Power Distribution Transformers
  const productCategories = [
    {
      id: '1',
      title: 'Distribution Transformers',
      subtitle: 'Up to 5000 kVA, 11kV/0.4kV',
      description: 'High-efficiency distribution transformers for reliable power distribution in industrial and commercial applications.',
      image: '/Images/blog/product1.jpg'
    },
    {
      id: '2',
      title: 'Pad-Mounted Transformers',
      subtitle: 'Underground distribution up to 2500 kVA',
      description: 'Compact pad-mounted transformers designed for urban areas with space constraints and aesthetic requirements.',
      image: '/Images/blog/product2.jpg'
    },
    {
      id: '3',
      title: 'Pole-Mounted Transformers',
      subtitle: 'Single and three-phase up to 500 kVA',
      description: 'Lightweight pole-mounted transformers for rural and suburban power distribution networks.',
      image: '/Images/blog/product3.jpg'
    },
    {
      id: '4',
      title: 'Dry-Type Transformers',
      subtitle: 'Cast resin and air-cooled up to 2500 kVA',
      description: 'Environmentally friendly dry-type transformers with no oil, suitable for indoor installations.',
      image: '/Images/blog/product1.jpg'
    },
    {
      id: '5',
      title: 'Oil-Filled Transformers',
      subtitle: 'Mineral oil and synthetic ester up to 10 MVA',
      description: 'High-efficiency oil-filled transformers for heavy-duty industrial and utility applications.',
      image: '/Images/blog/product2.jpg'
    },
    {
      id: '6',
      title: 'Step-Up Transformers',
      subtitle: 'For power generation up to 50 MVA',
      description: 'Step-up transformers for power generation applications, connecting generators to transmission systems.',
      image: '/Images/blog/product3.jpg'
    },
    {
      id: '7',
      title: 'Step-Down Transformers',
      subtitle: 'Transmission to distribution voltage levels',
      description: 'Step-down transformers for reducing transmission voltages to distribution levels for end users.',
      image: '/Images/blog/product1.jpg'
    },
    {
      id: '8',
      title: 'Isolation Transformers',
      subtitle: 'Galvanic isolation and voltage regulation',
      description: 'Isolation transformers providing electrical safety and voltage regulation for sensitive equipment.',
      image: '/Images/blog/product2.jpg'
    },
    {
      id: '9',
      title: 'Auto Transformers',
      subtitle: 'Variable voltage ratio up to 10 MVA',
      description: 'Auto transformers for voltage regulation and power transfer with reduced copper requirements.',
      image: '/Images/blog/product3.jpg'
    },
    {
      id: '10',
      title: 'Furnace Transformers',
      subtitle: 'Arc furnace and induction heating applications',
      description: 'Specialized transformers for electric arc furnaces and induction heating systems in industrial processes.',
      image: '/Images/blog/product1.jpg'
    },
    {
      id: '11',
      title: 'Rectifier Transformers',
      subtitle: 'For DC power supply systems',
      description: 'Rectifier transformers designed for converting AC power to DC for industrial and traction applications.',
      image: '/Images/blog/product2.jpg'
    },
    {
      id: '12',
      title: 'Testing & Commissioning Services',
      subtitle: 'Factory and site testing services',
      description: 'Comprehensive testing and commissioning services for all types of power distribution transformers.',
      image: '/Images/blog/product3.jpg'
    }
  ]

  const thumbnailImages = [
    '/Images/blog/product1.jpg',
    '/Images/blog/product2.jpg',
    '/Images/blog/product3.jpg',
    '/Images/blog/product1.jpg'
  ]

  return (
    <div className='pb-10'>
      {/* Hero Section */}
      <div>
        <CustomHero 
          bg={PowerImage}
          title={
            <>
              POWER DISTRIBUTION <br /> TRANSFORMER
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
              src="/Images/blog/powerdistribution.png"
              alt="Power Distribution Transformer"
              width={565}
              height={466}
              className="rounded-xl shadow-md w-full h-auto"
            />
            <div className="flex flex-wrap gap-3 mt-4">
              {thumbnailImages.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-lg shadow object-cover"
                />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Typography variant="h2" color="dark" className="mb-6">
              Description
            </Typography>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <Typography variant="p-l" color="tertiary">
                Power distribution transformers are essential components in electrical power systems, responsible for stepping down high transmission voltages to lower distribution voltages suitable for end users.
              </Typography>
              <Typography variant="p-l" color="tertiary">
                Our transformers are designed and manufactured to meet international standards including IEC, IEEE, and ANSI specifications, ensuring reliable performance in various environmental conditions.
              </Typography>
              <Typography variant="p-l" color="tertiary">
                We offer a complete range of distribution transformers from 25 kVA to 10 MVA, covering all voltage levels from 11kV down to 0.4kV for industrial, commercial, and utility applications.
              </Typography>
              <Typography variant="p-l" color="tertiary">
                All transformers undergo rigorous testing including routine tests, type tests, and special tests to ensure compliance with performance specifications and safety requirements.
              </Typography>
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

