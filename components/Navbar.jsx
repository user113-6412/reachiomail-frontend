'use client';
import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between bg-white/80 backdrop-blur-md rounded-full my-4 shadow-sm border border-white/20">
          {/* Logo */}
          <div className="flex items-center px-4 sm:px-6">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <p className="text-white text-lg sm:text-2xl font-bold"> R </p>
                </div>
                <div className="flex flex-col">
                  <Link href="/"><span className="text-lg sm:text-xl font-bold text-gray-900">ReachioMail</span></Link>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/pricing-info" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Pricing
              </Link>
              <Link href="/how-to-prompt" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
               How to succeed
              </Link>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-2 sm:space-x-4 px-4 sm:px-6">
            {/* Globe icon */}
            <Link href="/terms-of-service">
            <div className="text-gray-700 hover:text-gray-900">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            </Link>
            
            {/* CTA Button */}
            <Link href="/how-to-use">
              <button className="bg-lime-400 hover:bg-lime-500 text-white font-medium py-2 px-3 sm:px-6 rounded-full transition-colors duration-200 text-xs sm:text-sm">
                <span className="hidden sm:inline">Technical guide</span>
                <span className="sm:hidden">Guide</span>
              </button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/pricing-info" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md">
                Pricing
              </Link>
              <Link href="/how-to-prompt" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md">
                How to succeed
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar; 