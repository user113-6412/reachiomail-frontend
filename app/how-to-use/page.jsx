import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function HowToUse() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-black leading-tight mb-6">
              How to Use <span className="text-lime-400">ReachioMail</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in minutes. No technical skills required.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Prepare Your CSV File. Or download our sample</h3>
                <p className="text-gray-600 mb-4">
                  Create a CSV file with your contact list. Include columns like Name, Email, Company, etc. 
                  The first row should contain your column headers.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-mono text-sm">
                    Name,Email,Company,Role<br/>
                    John Doe,john@puppyfy.com,Puppyfy Collars,Sales Manager<br/>
                    Jane Smith,jane@turmericandglow.com,Turmeric & Glow,Chief Marketing Officer
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Upload & Write Your Prompt</h3>
                <p className="text-gray-600 mb-4">
                  Upload your CSV file and write a prompt describing the email you want to send. 
                  Use {'{{ColumnName}}'} to reference your CSV columns.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Example Prompt:</strong><br/>
                    "Write a friendly intro email to {'{{Name}}'}, a {'{{Role}}'} at {'{{Company}}'}. Say I recently helped a similar client grow their inbound leads by 40% in 2 months. Mention I specialize in marketing growth and would love to explore if we could collaborate."
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Generate & Preview</h3>
                <p className="text-gray-600 mb-4">
                  Click "Generate Preview" and watch AI create personalized emails for each contact. 
                  Review the generated content and subject lines before sending.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>AI will generate:</strong><br/>
                    • Personalized email content for each contact<br/>
                    • Professional subject lines<br/>
                    • HTML-formatted emails ready to send
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Send to Gmail</h3>
                <p className="text-gray-600 mb-4">
                  Enter your email address to receive a test email. Once you're satisfied with the results, 
                  you can send the personalized emails directly from your Gmail account.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>What happens next:</strong><br/>
                    • Receive a test email in your inbox<br/>
                    • Copy the generated content to Gmail<br/>
                    • Send personalized emails to your contacts
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="mt-16 bg-lime-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Pro Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">📝 Write Clear Prompts</h3>
                <p className="text-gray-600">Be specific about the tone, purpose, and key points you want in your emails.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">🎯 Use Column References</h3>
                <p className="text-gray-600">Reference your CSV columns with {'{{ColumnName}}'} for personalization.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">📧 Test First</h3>
                <p className="text-gray-600">Always send a test email to yourself before sending to your contact list.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">🔒 Keep It Professional</h3>
                <p className="text-gray-600">Review AI-generated content to ensure it matches your brand voice.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8">Try ReachioMail today and see how easy personalized email campaigns can be.</p>
            <Link href="/">
              <button className="bg-lime-400 hover:bg-lime-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Start Your First Campaign →
              </button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
