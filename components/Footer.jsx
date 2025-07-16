import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <p className="text-white text-2xl font-bold"> R </p>
              </div>
              <div className="flex flex-col">
                <Link href="/"><span className="text-xl font-bold text-gray-900">ReachioMail</span></Link>
                <span className="text-xs text-gray-900 font-bold -mt-1">Merge From Sheets</span>
              </div>
            </div>

            <p className="text-gray-600 mb-6 mt-4 max-w-md">
              You searched for Mail Merge with Google Sheets. ReachioMail lets you do exactly that, with AI and no add-ons. 
              Upload a CSV, let AI craft the perfect intro, and hit send straight from your Gmail. No integrations required.
            </p>

            {/* Social Links SVG placeholders */}
            <div className="flex space-x-4">


            </div>

          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">PRODUCT</h3>
            <ul className="space-y-3">
              <li>
                <a href="/how-to-use" className="text-gray-600 hover:text-gray-900 text-sm">
                  Technical guide
                </a>
              </li>
              <li>
                <a href="/how-to-prompt" className="text-gray-600 hover:text-gray-900 text-sm">
                  How to succeed
                </a>
              </li>
              <li>
                <a href="/pricing-info" className="text-gray-600 hover:text-gray-900 text-sm">
                  Pricing
                </a>
              </li>

            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">LEGAL</h3>
            <ul className="space-y-3">
              <li>
                <a href="/privacy-policy" className="text-gray-600 hover:text-gray-900 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-gray-600 hover:text-gray-900 text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            2025 ReachioMail Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 