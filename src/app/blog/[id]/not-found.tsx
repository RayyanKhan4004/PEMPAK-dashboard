import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="px-[120px] py-[60px]">
      <h2 className="text-2xl font-semibold mb-4">Blog not found</h2>
      <p className="mb-6">The blog you’re looking for doesn’t exist or was removed.</p>
      <Link href="/blog" className="text-[#F16336] underline">Back to blogs</Link>
    </div>
  );
}


