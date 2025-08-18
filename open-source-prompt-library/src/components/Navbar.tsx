'use client';

import { Menu, X, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: 'All', href: '/' },
    { name: 'Coding', href: '/?category=coding' },
    { name: 'Study', href: '/?category=study' },
    { name: 'Career', href: '/?category=career' },
    { name: 'Creativity', href: '/?category=creativity' },
    { name: 'Health', href: '/?category=health' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' 
          : 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link 
                href="/" 
                className={`flex items-center gap-2 group ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                } transition-all duration-500`}
              >
                <Sparkles className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="text-xl font-semibold bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 text-transparent bg-clip-text bg-size-200 animate-gradient">
                  Prompt Library
                </span>
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-1">
              {categories.map((category, index) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className={`px-3 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-md transition-all duration-300
                    hover:bg-slate-800/50 hover:shadow-inner
                    ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
                  `}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {category.name}
                </Link>
              ))}
              <Link
                href="/about"
                className={`ml-2 px-4 py-2 text-sm font-medium text-white
                  bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600
                  rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20
                  ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
                `}
                style={{ transitionDelay: `${categories.length * 100}ms` }}
              >
                About
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-300 hover:text-white p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`fixed top-0 right-0 h-full w-72 bg-slate-900/95 backdrop-blur-md transform transition-all duration-300 ease-out z-50
            ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
          `}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-slate-800">
              <span className="text-lg font-semibold text-white">Navigation</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4 px-2">
              {categories.map((category, index) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className={`block px-4 py-3 text-base font-medium text-slate-300 hover:text-white 
                    rounded-md transition-all duration-300 hover:bg-slate-800/50 hover:shadow-inner
                    ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
                  `}
                  style={{ transitionDelay: `${150 + index * 50}ms` }}
                  onClick={() => setIsOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              <Link
                href="/about"
                className={`mt-4 mx-2 block px-4 py-3 text-base font-medium text-white text-center
                  bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600
                  rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20
                  ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
                `}
                style={{ transitionDelay: `${150 + categories.length * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Animated backdrop for mobile menu */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 md:hidden
          ${isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};

export default Navbar;