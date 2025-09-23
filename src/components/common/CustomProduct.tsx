'use client'
import React, { useState, useEffect, useMemo } from "react";
import Typography from "../UI/Typography";
import { useSearchParams, useRouter } from "next/navigation";

const CustomProduct = () => {
  const router = useRouter()

  // API types
  interface Category {
    _id: string;
    name: string;
    description?: string;
    bannerImage?: string;
    additionalImages?: string[];
  }

  interface SubCategory {
    _id: string;
    name: string;
    description?: string;
    bannerimg?: string;
    images?: string[];
    parentCategory: string;
  }

  // set stats
  const [categories, setCategories] = useState<Category[]>([])
  const [subcategories, setSubcategories] = useState<SubCategory[]>([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const selectedCate = searchParams.get("cate") || "";

  useEffect(() => {
    // const apiBase = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:5050';
    const apiBase = process.env.NEXT_PUBLIC_API_BASE ?? 'https://pempak-api.vercel.app/';

    const fetchCategories = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${apiBase}/api/categories`)
        const json = await response.json();
        const data = Array.isArray(json) ? json : json?.data ?? [];
        setCategories(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch categories');
      } finally {
        setLoading(false);
      }
    }

    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${apiBase}/api/products?limit=50`)
        const json = await response.json();
        const data = Array.isArray(json) ? json : json?.data ?? [];
        setSubcategories(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch subcategories');
      } finally {
        setLoading(false);
      }
    }

    fetchCategories()
    fetchProducts()
  }, [])

  const activeCategory = useMemo(() => {
    if (!selectedCate) return undefined;
    return categories.find(c => c.name.toLowerCase() === selectedCate.toLowerCase());
  }, [categories, selectedCate]);

  const visibleSubcategories = useMemo(() => {
    const parent = selectedCate || activeCategory?.name || '';
    if (!parent) return [] as SubCategory[];
    return subcategories.filter(s => s.parentCategory.toLowerCase() === parent.toLowerCase());
  }, [subcategories, selectedCate, activeCategory]);

  if (loading) {
    return (
      <Typography className='gap-6 w-[70%] grid grid-cols-3 py-[50px]'>
        <Typography className='text-center col-span-3'>Loading Categories...</Typography>
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

  const activeName = activeCategory?.name || selectedCate;

  return (
    <Typography className=" px-4 sm:px-8 md:px-12 lg:px-20 py-12 ">
      <div className="flex flex-row mt-[100px] justify-center items-center px-[120px] w-full flex-wrap gap-10">
        <Typography className="flex-1 ">
          {(activeCategory?.bannerImage) ? (
            <img
              src={activeCategory.bannerImage}
              alt={activeCategory.name}
              className="  rounded-xl shadow-md w-[565px] h-[466px]  "
            />
          ) : (
            <img
              src="/images/main.jpg"
              alt="Main"
              className="  rounded-xl shadow-md w-[565px] h-[466px]  "
            />
          )}
          {activeCategory?.additionalImages && (
            <Typography className="flex flex-wrap gap-3 mt-4  ">
              {activeCategory.additionalImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className="w-20 h-20 rounded-lg shadow "
                />
              ))}
            </Typography>
          )}
        </Typography>
        <Typography variant="h2" className="flex-1" color="dark">
          <h2 className=" font-bold mb-6">{activeName || 'Products'}</h2>
          {activeCategory?.description && (
            <Typography
              variant="p-l"
              color="tertiary"
              className="space-y-4 text-gray-700 leading-relaxed"
            >
              <p>{activeCategory.description}</p>
            </Typography>
          )}
        </Typography>
      </div>

      <Typography variant="h2" color="dark" className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12 ">Subcategories</h2>
        {visibleSubcategories.length === 0 ? (
          <Typography className="text-center text-gray-600">No subcategories found.</Typography>
        ) : (
          <Typography className="flex flex-row-2 gap-6 justify-center w-full flex-wrap">
            {visibleSubcategories.map((sub) => (
              <Typography
                key={sub._id}
                onClick={() => router.push(`/power-distribution/${sub._id}`)}
                className="bg-white border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-row hover:bg-[var(--color-primary)] hover:scale-105 cursor-pointer w-[588px] p-[24px] text-black hover:text-white"
              >
                <img
                  src={sub.bannerimg || "/images/product2.jpg"}
                  className=" object-cover w-[223px] h-[223px] rounded-2xl"
                />
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-semibold text-xl mb-2 ">{sub.name}</h3>
                  {sub.description && (
                    <p className="text-gray-600 text-sm flex-grow">
                      {sub.description}
                    </p>
                  )}
                  <div className="flex items-center text-orange-500 font-medium group mt-2">
                    <span className="mr-2 group-hover:mr-3 transition-all">Learn More</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Typography>
            ))}
          </Typography>
        )}
      </Typography>
    </Typography>
  );
};

export default CustomProduct;
