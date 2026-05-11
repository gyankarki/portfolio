import React from "react";
import Link from "next/link";
import { GraduationCap, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const navItems = [
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/education", label: "Education" },
    { href: "/contact", label: "Contact" },
    { href: "/gallery", label: "Gallery" },
  ];

 

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid lg:grid-cols-4 gap-8'>
          <div className='lg:col-span-2'>
            <Link href='/' className='flex items-center space-x-3 mb-6'>
              <div className='w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
                <GraduationCap className='w-6 h-6 text-white' />
              </div>
              <div>
                <h3 className='text-xl font-bold'>Mr. Gyan Bahadur Karki</h3>
                <p className='text-gray-400'> Educator </p>
              </div>
            </Link>
            <p className='text-gray-300 mb-6 max-w-md'>
              Supporting students and professionals with over two decades of teaching, mentoring, and research experience.
            </p>
        
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-6'>Quick Links</h4>
            <div className='space-y-3'>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className='block text-gray-300 hover:text-white transition-colors'>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          
        </div>

        <div className='border-t border-gray-800 mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-gray-400 text-sm'>© {new Date().getFullYear()}  All rights reserved.</p>
            <p className='text-gray-400 text-sm'>Certified to be true by Mr. Gyan Bahadur Karki </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
