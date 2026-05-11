"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Mail, Award, Users, GraduationCap, Image } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/about", label: "About", icon: <Users className='w-4 h-4' /> },
    { href: "/experience", label: "Experience", icon: <Award className='w-4 h-4' /> },
    { href: "/education", label: "Education", icon: <GraduationCap className='w-4 h-4' /> },
    { href: "/gallery", label: "Gallery", icon: <Image className='w-4 h-4' /> },
    { href: "/contact", label: "Contact", icon: <Mail className='w-4 h-4' /> },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    return pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg  border-gray-100" : "bg-transparent"
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/' className='flex items-center space-x-3 hover:opacity-80 transition-opacity'>
              <div className='w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
                <GraduationCap className='w-6 h-6 text-white' />
              </div>
              <div className='sm:block'>
                <h2 className='text-xl font-bold text-gray-900'>Mr. Gyan Bahadur Karki</h2>
                <p className='text-xs text-gray-600'>Head Teacher & Lecturer</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:block'>
            <div className='ml-10 flex items-center space-x-1'>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 cursor-pointer rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                    isActive(item.href)
                      ? "bg-blue-600 text-white shadow-lg transform scale-105"
                      : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='lg:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='p-2 rounded-md cursor-pointer text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors'
            >
              {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='lg:hidden bg-white border-t border-gray-100 shadow-lg'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center space-x-3 ${
                    isActive(item.href) ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
