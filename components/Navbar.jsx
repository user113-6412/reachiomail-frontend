import Link from 'next/link';

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between bg-white/80 backdrop-blur-md rounded-full my-4 shadow-sm border border-white/20">
          {/* Logo */}
          <div className="flex items-center px-6">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <p className="text-white text-2xl font-bold"> R </p>
                </div>
                <div className="flex flex-col">
                  <Link href="/"><span className="text-xl font-bold text-gray-900">ReachioMail</span></Link>
                  <span className="text-xs text-gray-900 font-bold -mt-1">Merge From Sheets</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
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
          <div className="flex items-center space-x-4 px-6">
            {/* Globe icon */}
            <Link href="/terms-of-service">
            <div className="text-gray-700 hover:text-gray-900">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            </Link>
            
            {/* CTA Button */}
            <Link href="/how-to-use">
              <button className="bg-lime-400 hover:bg-lime-500 text-white font-medium py-2 px-6 rounded-full transition-colors duration-200">
                Technical guide
              </button>
            </Link>

            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 