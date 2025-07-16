import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-black leading-tight mb-6">
              Privacy <span className="text-lime-400">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we protect your data.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Introduction</h2>
              <p className="text-gray-600 mb-4">
                ReachioMail ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mail merge service.
              </p>
              <p className="text-gray-600">
                By using ReachioMail, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Email addresses you provide for testing purposes</li>
                <li>Contact information you include in your CSV files</li>
                <li>Usage data and analytics information</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">CSV Data Processing</h3>
              <p className="text-gray-600 mb-4">
                When you upload CSV files to ReachioMail:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Files are processed in memory and not permanently stored</li>
                <li>Data is automatically deleted after processing</li>
                <li>We do not access, read, or store your contact lists</li>
                <li>Your CSV data never leaves our secure processing environment</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-600">
                <li>To provide and maintain our mail merge service</li>
                <li>To generate personalized email content using AI</li>
                <li>To send test emails to your specified address</li>
                <li>To improve our service and user experience</li>
                <li>To communicate with you about service updates</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>All data transmission is encrypted using HTTPS</li>
                <li>CSV files are processed in secure, isolated environments</li>
                <li>No personal data is stored on our servers</li>
                <li>Regular security audits and updates</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Third-Party Services</h2>
              <p className="text-gray-600 mb-4">
                We use the following third-party services:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li><strong>OpenAI:</strong> For AI-powered email generation</li>
                <li><strong>Brevo:</strong> For email delivery services</li>
                <li><strong>Google Analytics:</strong> For website analytics</li>
                <li><strong>Plausible:</strong> For privacy-focused analytics</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Each service has its own privacy policy and data handling practices.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Access any personal data we may have about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Lodge a complaint with data protection authorities</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Cookies and Tracking</h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Improve website functionality and user experience</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Remember your preferences and settings</li>
              </ul>
              <p className="text-gray-600 mt-4">
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Children's Privacy</h2>
              <p className="text-gray-600">
                ReachioMail is not intended for use by children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600">
                  <strong>Email:</strong> privacy@mailmergegooglesheets.com<br/>
                  <strong>Address:</strong> ReachioMail Inc., [Your Address]<br/>
                  <strong>Response Time:</strong> We aim to respond within 48 hours
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
