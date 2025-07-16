import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-black leading-tight mb-6">
              Terms of <span className="text-lime-400">Service</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple terms for using ReachioMail. Please read them carefully.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">1. Service Use</h2>
              <p className="text-gray-600 mb-4">
                By using ReachioMail, you agree to these terms. We're a simple AI-powered mail merge tool that helps you send personalized emails from CSV files.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">2. What You Can Do</h2>
              <p className="text-gray-600 mb-4">
                You can use ReachioMail to:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Upload CSV files with contact information</li>
                <li>Generate personalized email content with AI</li>
                <li>Preview and test your emails before sending</li>
                <li>Send emails to your contacts</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">3. Be Respectful</h2>
              <p className="text-gray-600 mb-4">
                Please use ReachioMail responsibly:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Don't send spam or unsolicited emails</li>
                <li>Respect your recipients' privacy</li>
                <li>Don't upload malicious files</li>
                <li>Follow email marketing best practices</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">4. Your Data</h2>
              <p className="text-gray-600 mb-4">
                We take your privacy seriously:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>We don't permanently store your CSV files</li>
                <li>Your contact lists are processed in memory and deleted</li>
                <li>We only use your data to provide the service</li>
                <li>You own your content and data</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">5. Service Limits</h2>
              <p className="text-gray-600 mb-4">
                Currently, ReachioMail is free with some limitations:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Free tier available for testing</li>
                <li>Service may have occasional downtime</li>
                <li>AI content should be reviewed before sending</li>
                <li>We're not responsible for email delivery issues</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">6. Our Responsibility</h2>
              <p className="text-gray-600 mb-4">
                We'll do our best to provide a reliable service, but:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>We can't guarantee 100% uptime</li>
                <li>AI-generated content may need editing</li>
                <li>We're not liable for damages from using the service</li>
                <li>Use the service at your own risk</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">7. Changes</h2>
              <p className="text-gray-600 mb-4">
                We may update these terms or the service from time to time. We'll let you know about significant changes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">8. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                Questions about these terms? Just reach out:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600">
                  <strong>Email:</strong> <a href="mailto:hello@reachiomail.com" className="text-lime-600 hover:text-lime-700 underline">hello@reachiomail.com</a><br/>
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
