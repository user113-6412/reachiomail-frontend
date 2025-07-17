import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-black leading-tight mb-6">
              Simple, Transparent <span className="text-lime-400">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start free, scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free to Start</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black text-lime-400">$0</span>
                  <span className="text-gray-600">/month</span>
                </div>
                
                <ul className="text-left space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-lime-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    We are shaping the future of this together
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-lime-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    AI-powered email generation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-lime-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    CSV upload & processing
                  </li>

                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-lime-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Email preview & testing
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-lime-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    No add-ons required
                  </li>
                </ul>
                
                <button className="w-full bg-lime-400 hover:bg-lime-500 text-white font-bold py-3 px-6 rounded-full transition-colors duration-200">
                  Get Started Free
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div>
                <h3 className="text-lg font-semibold mb-2">Is it really free?</h3>
                <p className="text-gray-600">Yes! We're launching with a free tier to help you get started. We are a small team and are keen to get your feedback which will shape the future of this product.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Do you store my email data?</h3>
                <p className="text-gray-600">No, we don't store your email data permanently. CSV files are processed in memory and deleted immediately after use.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
