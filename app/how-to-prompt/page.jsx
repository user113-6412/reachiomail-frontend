import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function HowToPrompt() {
  const promptExamples = {
    freelancer: {
      title: "Freelancer Agency",
      description: "Pitch services to prospects",
      prompt: "Write a friendly intro email to {{Name}}, a {{Role}} at {{Company}}. Say I recently helped a similar client grow their inbound leads by 40% in 2 months. Mention I specialize in marketing growth and would love to explore if we could collaborate."
    },
    jobseeker: {
      title: "Career Conqueror", 
      description: "Reach hiring managers",
      prompt: "Write a confident cold email to {{Name}}, a {{Role}} at {{Company}}. Mention I recently led a product launch that hit 50K users in 3 months, and I'm now exploring new opportunities. Say I admire their work and would love to connect."
    },
    founder: {
      title: "SaaS Founder",
      description: "Talk to early customers", 
      prompt: "Write a short intro email to {{Name}}, a {{Role}} at {{Company}}. Say I'm the founder of a scheduling tool that cut coordination time by 60% for early users. Ask if they'd be open to a quick chat to see if this could help their team too."
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black leading-tight mb-4">
              The <span className="text-lime-400">Automated Success</span> Formula
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This is about YOU and numbers as much as the quality of emails. Scale your credibility with AI that sells you in 3 lines.
            </p>
          </div>

          {/* Core Concept */}
          <div className="bg-gradient-to-r from-lime-50 to-orange-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-center">The Psychology of Automated Outreach</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-700 mb-4">
                Cold emails work when you lead with <strong>one impressive win</strong>, connect it to their world, and ask for something simple. 
                That's it. No resume dumps, no life stories.
              </p>
              <p className="text-gray-600 text-sm">
                Think: "I'm great at X. You should know that. Here's why I'm worth your attention—quickly."
              </p>
            </div>
          </div>

          {/* The Formula */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">The 3-Line Formula</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(promptExamples).map(([key, category]) => (
                <div key={key} className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <pre className="text-gray-800 font-mono text-xs leading-relaxed whitespace-pre-wrap">{category.prompt}</pre>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <span className="bg-lime-100 text-lime-800 text-xs font-medium px-2 py-1 rounded-full">
                      {key === 'freelancer' ? '🚀' : key === 'jobseeker' ? '💼' : '🧑‍💻'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insight */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-center mb-4">Remember: This is About Numbers</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-700 mb-4">
                You’re not writing a flawless email just to have it buried under Monday’s spam. You're scaling credibility across hundreds of prospects. 
                Keep it simple, keep it braggy, keep it moving.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>1 win + 1 connection + 1 ask = Automated email campaign that converts</strong>
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Credibility?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Put this formula to work. Generate hundreds of personalized emails that actually get responses.
            </p>
            <Link href="/">
                <button className="bg-lime-400 hover:bg-lime-500 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                Try ReachioMail Demo
                </button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
