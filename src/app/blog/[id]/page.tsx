import React, { Suspense } from "react";
import Link from "next/link";
import Typography from "../../../components/UI/Typography";
import { notFound } from "next/navigation";
import Image from "next/image";

type Blog = {
  _id: string;
  image: string;
  title: string;
  description: string;
  pf: string;
  date: string;
  images?: string[];
};

async function fetchBlog(id: string): Promise<Blog | null> {
  try {
    const res = await fetch(`https://pempak-api.vercel.app/api/blogs/${id}`, { cache: "no-store" });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error("Failed to fetch blog");
    return res.json();
  } catch {
    throw new Error("Failed to fetch blog");
  }
}

async function fetchLatestBlogs(limit = 10): Promise<Blog[]> {
  const res = await fetch(`https://pempak-api.vercel.app/api/blogs`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch blogs");
  const data: Blog[] = await res.json();
  return data.slice(0, limit);
}

async function BlogDetail({ id }: { id: string }) {
  const [blog, latest] = await Promise.all([fetchBlog(id), fetchLatestBlogs(10)]);
  if (!blog) notFound();
  return (
    <section className="px-[120px] mt-[50px] mb-[100px]">
      <Typography className="text-[48px] mt-[50px]">{blog.title}</Typography>
      <Typography className="flex mb-[32px] gap-[11px]">
        <Typography className="flex gap-2.5">
          <Image src={blog.image} alt={blog.title} className="h-8 w-8 rounded-full object-cover" />
        </Typography>
        <Typography variant="p" color="dark">{blog.pf}</Typography>
        <span className="inline-block w-4 h-4 bg-[var(--color-gray)] rounded-full "></span>
        <Typography color="secondary">{new Date(blog.date).toDateString()}</Typography>
      </Typography>
      <div>
        <Image className="w-full py-[50px] rounded-[16px] object-cover" src={blog.image} alt={blog.title} />
      </div>
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-gray-700 leading-relaxed">{blog.description}</p>
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-bold mb-4">Latest Blogs</h3>
              <ul className="space-y-4">
                {latest.map((b) => (
                  <li key={b._id} className="border-b pb-3">
                    <Link href={`/blog/${b._id}`} className="block font-medium hover:text-[var(--color-primary)]">
                      {b.title}
                    </Link>
                    <span className="text-sm text-gray-500">{new Date(b.date).toDateString()}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<div className="px-[120px] py-[60px]">Loading blog…</div>}>
      <BlogDetail id={params.id} />
    </Suspense>
  );
}
