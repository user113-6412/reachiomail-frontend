'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Track pageview
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'pageview_lp_mm_ai', {
        event_category: 'pageview',
        event_label: 'landing_page_mailmerge_ai'
      });
    }
  }, []);

  function fnHandleCtaClick() {
    setIsModalOpen(true);
    // Track CTA click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_lp_mmai_demo', {
        event_category: 'cta_click',
        event_label: 'demo_modal_open'
      });
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-4 py-15">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-7xl font-black leading-tight text-center mb-8">
            Mail Merge from Google Sheets 
          </h1> 
          
          <p className="text-4xl text-center font-black leading-tight mb-12 max-w-5xl mx-auto">
            <span className="text-lime-400">Reach  </span> 
            your first 50 users, newsletter partners, or clients without your emails sounding robotic.
          </p>

          <p className="text-4xl text-center text-lime-400 font-bold mb-12 max-w-3xl mx-auto">
             Powered by AI, No Add-ons Needed 
          </p>
          
          <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
            Upload a CSV, let AI craft the perfect intro, and hit send
          </p>
          
          <button
            id="cta-demo"
            onClick={fnHandleCtaClick}
            className="bg-lime-400 hover:bg-lime-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Upload CSV Contact List →
          </button>

          <p className="text-sm mt-8 text-center text-gray-500">
            ❌ Not for spammers. ✅ Built for founders and consultants doing real outreach, not mass-blasts.
          </p>

          
        </div>

      </main>
      
      <Footer />
      
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
