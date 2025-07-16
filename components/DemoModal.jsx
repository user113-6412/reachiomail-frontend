'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

function DemoModal({ isOpen, onClose }) {
  const [csvFile, setCsvFile] = useState(null);
  const [selectedPersona, setSelectedPersona] = useState('freelancer');
  const [prompt, setPrompt] = useState('');
  const [preview, setPreview] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [email, setEmail] = useState('');

  // Persona configurations
  const personas = {
    freelancer: {
      name: 'Freelancer Agency',
      description: 'Pitch service to prospects',
      prompt: 'My name is Anabel. Write a friendly intro email to {{Name}}, a {{Role}} at {{Company}}. Say I recently helped a similar client grow their inbound leads by 40% in 2 months. Mention I specialize in marketing growth and would love to explore if we could collaborate.',
      csvContent: 'Name,Email,Company,Role\nGrace Miller,grace@midnightventures.com,Midnight Ventures,Partner\nTom Jacobs,tom@foundryanalytics.io,Foundry Analytics,CTO\nSarah Chen,sarah@techstartup.co,TechStartup,Marketing Director'
    },
    careerconquerer: {
      name: 'Career Conquerer',
      description: 'Reach hiring managers',
      prompt: 'My name is Anabel. Write a confident cold email to {{Name}}, a {{Role}} at {{Company}}. Mention I recently led a product launch that hit 50K users in 3 months, and I’m now exploring new opportunities. Say I admire their work and would love to connect.',
      csvContent: 'Name,Email,Company,Role\nAlex Johnson,alex@innovatecorp.com,InnovateCorp,Senior Developer\nMaria Rodriguez,maria@techgiant.io,TechGiant,Product Manager\nDavid Kim,david@startupx.com,StartupX,UX Designer'
    },
    founder: {
      name: 'SaaS Founder',
      description: 'Talk to early customers',
      prompt: 'My name is Anabel.Write a short intro email to {{Name}}, a {{Role}} at {{Company}}. Say I’m the founder of a scheduling tool that cut coordination time by 60% for early users. Ask if they’d be open to a quick chat to see if this could help their team too.',
      csvContent: 'Name,Email,Company,Role\nEmma Wilson,emma@growthco.com,GrowthCo,Operations Manager\nJames Lee,james@scaleup.io,ScaleUp,CEO\nLisa Park,lisa@startupz.com,StartupZ,COO'
    }
  };

  // Update prompt when persona changes
  const handlePersonaChange = (newPersona) => {
    setSelectedPersona(newPersona);
    setPrompt(personas[newPersona].prompt);
  };

  // Initialize prompt on component mount
  useEffect(() => {
    setPrompt(personas[selectedPersona].prompt);
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file && file.type === 'text/csv') {
      setCsvFile(file);
      // Track analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'demo_upload_csv', {
          event_category: 'demo',
          event_label: 'csv_upload'
        });
      }
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv']
    },
    multiple: false
  });

  async function fnGeneratePreview() {
    if (!csvFile || !prompt) return;

    setIsGenerating(true);
    try {
      const formData = new FormData();
      formData.append('csv', csvFile);
      formData.append('prompt', prompt);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mailmerge/preview`, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        setPreview(data);
        
        // Track analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'demo_ai_done', {
            event_category: 'demo',
            event_label: 'ai_generation_complete'
          });
        }
      } else {
        console.error('Failed to generate preview');
      }
    } catch (error) {
      console.error('Error generating preview:', error);
    } finally {
      setIsGenerating(false);
    }
  }

  async function fnSendTestEmail() {
    if (!preview || !email) return;

    setIsSending(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mailmerge/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          previewId: preview.id,
          email: email
        })
      });

      if (response.ok) {
        // Track analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'demo_send_email', {
            event_category: 'demo',
            event_label: 'email_sent'
          });
        }
        alert('Test email sent successfully!');
      } else {
        console.error('Failed to send test email');
      }
    } catch (error) {
      console.error('Error sending test email:', error);
    } finally {
      setIsSending(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[98vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Try <span className="text-lime-400">ReachioMail</span> Demo</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Input */}
            <div className="space-y-6">
              {/* Persona Selector */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Choose Your Use Case</h3>
                <select
                  value={selectedPersona}
                  onChange={(e) => handlePersonaChange(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                >
                  {Object.entries(personas).map(([key, persona]) => (
                    <option key={key} value={key}>
                      {persona.name} - {persona.description}
                    </option>
                  ))}
                </select>
                <p className="text-sm text-gray-500 mt-2">
                  We'll customize the sample data and prompt for your use case
                </p>
              </div>

              {/* CSV Upload */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Upload CSV</h3>
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                    isDragActive ? 'border-lime-400 bg-lime-50' : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <input {...getInputProps()} />
                  {csvFile ? (
                    <div>
                      <p className="text-green-600 font-medium">✓ {csvFile.name}</p>
                      <p className="text-sm text-gray-500 mt-1">Click to change file</p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-gray-600">Drop your CSV file here, or click to select</p>
                      <p className="text-sm text-gray-500 mt-1">Supports .csv files only</p>
                    </div>
                  )}
                </div>
                <div className="mt-3">
                  <a
                    href="#"
                    className="text-lime-600 hover:text-lime-700 text-sm underline"
                    onClick={(e) => {
                      e.preventDefault();
                      // Download sample CSV based on selected persona
                      const csvContent = personas[selectedPersona].csvContent;
                      const blob = new Blob([csvContent], { type: 'text/csv' });
                      const url = window.URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `sample-${selectedPersona}.csv`;
                      a.click();
                    }}
                  >
                    Download sample CSV for {personas[selectedPersona].name}
                  </a>
                </div>
              </div>

              {/* AI Prompt */}
              <div>
                <h3 className="text-lg font-semibold mb-3">AI Prompt. Replace Anabel with your name.</h3>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full h-40 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  placeholder="Write a friendly intro about {{Company}}"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Use {'{{ColumnName}}'} to reference CSV columns. The AI will personalize each email for each recipient.
                </p>
              </div>

              {/* Generate Button */}
              <button
                onClick={fnGeneratePreview}
                disabled={!csvFile || !prompt || isGenerating}
                className="w-full bg-lime-400 hover:bg-lime-500 disabled:bg-gray-300 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                {isGenerating ? 'Generating...' : 'Generate Preview'}
              </button>
            </div>

            {/* Right Column - Preview */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Preview</h3>
              <div className="border border-gray-300 rounded-lg p-4 h-64 overflow-y-auto bg-gray-50">
                {preview ? (
                  <div>
                    <div className="mb-4">
                      <strong>Subject:</strong> {preview.subject}
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: preview.html }} />
                  </div>
                ) : (
                  <div className="text-gray-500 text-center py-8">
                    Upload a CSV and generate a preview to see your personalized email
                  </div>
                )}
              </div>

              {/* Send Test Email */}
              {preview && (
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Send to your email:
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                    />
                  </div>

                  <button
                    onClick={fnSendTestEmail}
                    disabled={!email || isSending}
                    className="mt-2 w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    {isSending ? 'Sending...' : 'Send to my email'}
                  </button>
                  
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoModal; 