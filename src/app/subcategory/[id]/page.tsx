import React, { Suspense } from "react";
import Typography from "@/components/UI/Typography";
import CustomHero from "@/components/common/CustomHero";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

type SubCategory = {
  _id: string;
  name: string;
  description?: string;
  bannerimg?: string;
  images?: string[];
  parentCategory?: string;
};

async function fetchSubCategory(id: string): Promise<SubCategory | null> {
  const baseApi =
    process.env.NEXT_PUBLIC_API_BASE ?? "https://pempak-api.vercel.app/api";
  const res = await fetch(`${baseApi}/subcategories/${id}`, {
    cache: "no-store",
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to fetch subcategory");
  const data = await res.json();
  return Array.isArray(data) ? data[0] ?? null : data?.data ?? data;
}

async function fetchSiblings(parentName?: string): Promise<SubCategory[]> {
  if (!parentName) return [];
  const baseApi =
    process.env.NEXT_PUBLIC_API_BASE ?? "https://pempak-api.vercel.app/api";
  const url = `${baseApi}/subcategories?parentCategory=${encodeURIComponent(
    parentName
  )}&limit=50`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return [];
  const json = await res.json();
  const data = Array.isArray(json) ? json : json?.data ?? [];
  return data;
}

async function SubCategoryDetail({ id }: { id: string }) {
  const sub = await fetchSubCategory(id);
  if (!sub) notFound();

  const heroImage =
    sub.bannerimg || sub.images?.[0] || "/Images/blog/product1.jpg";
  const siblings = (await fetchSiblings(sub.parentCategory)).filter(
    (s) => s._id !== sub._id
  );

  return (
    <div className="pb-10">
      {/* Hero Section to mirror category pages */}
      <div>
        <CustomHero
          gradient={true}
          bg={heroImage}
          title={<>{sub.name?.toUpperCase()}</>}
          sub=""
        />
      </div>

      {/* Description + Images Section */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-12">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          <div className="flex-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="rounded-xl shadow-md relative w-[500px] h-[456px] !object-cover !overflow-hidden">
              <Image
                src={heroImage}
                alt={sub.name}
                fill
                className="rounded-xl shadow-md max-w-[500px] h-[456px] block"
              />
            </div>
            {sub.images && sub.images.length > 1 && (
              <div className="flex flex-wrap gap-[23px] mt-4">
                {sub.images.slice(1, 5).map((img, index) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <Image
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    width={123}
                    height={95}
                    className="w-[123px] h-[95px] rounded-lg shadow object-cover"
                  />
                ))}
              </div>
            )}
          </div>
          <div className="flex-1">
            <Typography
              variant="h2"
              color="dark"
              className="mb-[16px] text-semibold"
            >
              Description
            </Typography>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <Typography variant="p-l" color="tertiary">
                {sub.description || "Details will be available soon."}
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Sibling Subcategories Section */}
      {siblings.length > 0 && (
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-12 bg-gray-50">
          <Typography variant="h2" color="dark" className="text-center mb-12">
            Explore More Categories
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siblings.slice(0, 15).map((sibling, index) => (
              <Link
                key={sibling._id}
                href={`/subcategory/${sibling._id}`}
                className={`relative overflow-hidden rounded-lg shadow-md p-6 transition-shadow duration-300 block group 
            `}
              >
                {/* Foreground content */}
                <div className="relative z-10 flex gap-4 transition-colors duration-500 group-hover:text-white">
                  <div className="flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image
                      src={
                        sibling.bannerimg ||
                        sibling.images?.[0] ||
                        "/Images/blog/product1.jpg"
                      }
                      alt={sibling.name}
                      width={120}
                      height={120}
                      className="w-30 h-30 rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <Typography
                      variant="h4"
                      color="dark"
                      className="mb-2 font-bold group-hover:text-white"
                    >
                      {sibling.name}
                    </Typography>
                    {sibling.description && (
                      <Typography
                        variant="ps"
                        color="tertiary"
                        className="mb-4 line-clamp-3 group-hover:text-gray-100"
                      >
                        {sibling.description}
                      </Typography>
                    )}
                    <div className="flex items-center text-orange-500 font-medium group-hover:text-white">
                      <span className="mr-2">Learn More</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover background (left → right expand) */}
                <div className="absolute inset-0 h-full w-full bg-[var(--color-primary)] transition-all duration-500 ease-in-out -translate-x-full group-hover:translate-x-0"></div>

                {/* Left strip (always visible, 7px wide) */}
                <div className="absolute top-0 left-0 h-full w-[7px] bg-[var(--color-primary)]"></div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <Suspense
      fallback={
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-12">
          Loading subcategory…
        </div>
      }
    >
      <SubCategoryDetail id={params.id} />
    </Suspense>
  );
}
