// components/Navbar.tsx
import Link from 'next/link';
import Typography from "@/components/UI/Typography";

export const Navbar = () => {
  return (
    <nav className="shadow-md p-4 flex items-center justify-between">
      <Typography variant="h3" weight="b" color="primary" className="ml-17">
  PEMPAK
</Typography>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-lg font-medium items-center">
        <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
        <Link href="/about" className="hover:text-amber-600 transition-colors">About</Link>
        <Link href="/products" className="hover:text-amber-600 transition-colors">Our Products</Link>
        <Link href="/services" className="hover:text-amber-600 transition-colors">Services</Link>
        <Link href="/ourteam" className="hover:text-amber-600 transition-colors">Our Team</Link>
        <Link href="/blogs" className="hover:text-amber-600 transition-colors">Blog</Link>
        <Link
          href="/contact"
          className="hover:text-white text-white bg-orange-600 px-6 py-2 rounded-xl transition-colors"
        >
          Contact us
        </Link>
      </div>
    </nav>
  );
};
