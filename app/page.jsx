'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  function fnHandleCtaClick() {
    setIsModalOpen(true);
    // Track CTA click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'user_clicked_try_demo_btn', {
        event_category: 'cta_click',
        event_label: 'demo_modal_open'
      });
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-4 py-8 sm:py-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-center mb-6 sm:mb-8 px-2">
            Mail Merge from Google Sheets 
          </h1> 
          
          <p className="text-2xl sm:text-3xl md:text-4xl text-center font-black leading-tight mb-8 sm:mb-12 max-w-5xl mx-auto px-2">
            <span className="text-lime-400">Reach </span> 
            your first 50 users, newsletter partners, or clients without your emails sounding robotic.
          </p>

          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-lime-400 font-bold mb-8 sm:mb-12 max-w-3xl mx-auto px-2">
            Powered by AI - Get started with no add-ons or signups.
          </p>
          
          <p className="text-lg sm:text-xl text-center mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
            Upload a CSV, let AI craft the perfect intro, and hit send
          </p>
          
          <button
            id="cta-demo"
            onClick={fnHandleCtaClick}
            className="bg-lime-400 hover:bg-lime-500 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Try it free with sample CSV →
          </button>

          <p className="text-sm mt-6 sm:mt-8 text-center text-gray-500 px-4">
          ❌ No spam blasts. ✅ Built for early-stage founders, freelancers & teams reaching real people, not robots.
          </p>

          
        </div>

      </main>
      
      <Footer />
      
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
