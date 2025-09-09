// components/Navbar.tsx
import Link from 'next/link';
import Typography from "@/components/UI/Typography";
import Homepage from '@/app/home/page';

export const Navbar = () => {
  return (
<<<<<<< HEAD
    <nav className="shadow-md p-4 container mx-auto flex items-center justify-between">
  
      <Typography variant="h1" weight="b" color="primary" className="text-4xl">
=======
    <nav className="shadow-md p-4 flex items-center justify-between">
      <Typography variant="h3" weight="b" color="primary" className="ml-17">
>>>>>>> 1f9eef40f942c60c46671d86a255eea21012b858
  PEMPAK
</Typography>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-lg font-medium items-center">
<<<<<<< HEAD
        <Link href="/home" className="hover:text-blue-600 transition-colors">Home</Link>
        <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
        <Link href="/products" className="hover:text-blue-600 transition-colors">Our Products</Link>
        <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
        <Link href="/our-team" className="hover:text-blue-600 transition-colors">Our Team</Link>
        <Link href="/blogs" className="hover:text-blue-600 transition-colors">Blog</Link>
=======
        <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
        <Link href="/about" className="hover:text-amber-600 transition-colors">About</Link>
        <Link href="/products" className="hover:text-amber-600 transition-colors">Our Products</Link>
        <Link href="/services" className="hover:text-amber-600 transition-colors">Services</Link>
        <Link href="/ourteam" className="hover:text-amber-600 transition-colors">Our Team</Link>
        <Link href="/blogs" className="hover:text-amber-600 transition-colors">Blog</Link>
>>>>>>> 1f9eef40f942c60c46671d86a255eea21012b858
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
