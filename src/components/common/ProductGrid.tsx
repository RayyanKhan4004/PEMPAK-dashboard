'use client'
import React from 'react'
import Typography from '../UI/Typography'
import Image from 'next/image'

interface Product {
  id: string
  name: string
  image: string
  description?: string
  price?: string
  category?: string
}

interface ProductGridProps {
  products: Product[]
  title?: string
  subtitle?: string
}

const ProductGrid = ({ products, title, subtitle }: ProductGridProps) => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-12">
      {title && (
        <div className="text-center mb-12">
          <Typography variant="h1" color="dark" className="mb-4">
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="p-l" color="tertiary" className="max-w-2xl mx-auto">
              {subtitle}
            </Typography>
          )}
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200"
          >
            <div className="aspect-square bg-gray-100 flex items-center justify-center relative">
              <Image 
                src={product.image} 
                alt={product.name}
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='14' fill='%236b7280' text-anchor='middle' dy='.3em'%3EProduct Image%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            <div className="p-4">
              <Typography variant="h3" color="dark" className="mb-2 line-clamp-2">
                {product.name}
              </Typography>
              {product.description && (
                <Typography variant="ps" color="tertiary" className="mb-3 line-clamp-2">
                  {product.description}
                </Typography>
              )}
              <div className="flex justify-between items-center mb-3">
                {product.price && (
                  <Typography variant="p-l" color="primary" className="font-bold">
                    {product.price}
                  </Typography>
                )}
                {product.category && (
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                )}
              </div>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid
