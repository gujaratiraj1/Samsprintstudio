import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import DesignPreview from './DesignPreview';

const LetterheadsPage = () => {
  usePageTitle("Letterheads & Envelopes");

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919999999999?text=Hi%20Sam%27s%20Print%20Studio%2C%20I%20need%20professional%20letterheads%20and%20envelopes', '_blank');
  };

  const designs = [
    { id: 1, title: 'Corporate Professional', description: 'Clean corporate design', color: 'bg-blue-50' },
    { id: 2, title: 'Modern Minimalist', description: 'Sleek and contemporary', color: 'bg-slate-50' },
    { id: 3, title: 'Executive Elite', description: 'Premium elegant design', color: 'bg-amber-50' },
    { id: 4, title: 'Tech Startup', description: 'Modern tech-inspired layout', color: 'bg-cyan-50' },
    { id: 5, title: 'Creative Agency', description: 'Bold creative design', color: 'bg-purple-50' },
    { id: 6, title: 'Classic Timeless', description: 'Traditional professional style', color: 'bg-gray-50' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Letterheads & Envelopes</h1>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <img
          src={`${process.env.PUBLIC_URL}/images/letterheads.png`}
          alt="Professional Letterheads"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center px-4">Letterheads & Envelopes</h2>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-gray-600 text-sm uppercase tracking-wide">Paper Quality</p>
              <p className="text-xl font-semibold text-gray-900">100-300 GSM</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm uppercase tracking-wide">Starting Price</p>
              <p className="text-xl font-semibold text-green-600">₹1.50 per piece</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm uppercase tracking-wide">Turnaround Time</p>
              <p className="text-xl font-semibold text-gray-900">3-5 Business Days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Letterheads & Envelopes?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">✨ Features</h3>
            <ul className="space-y-3">
              {[
                'Premium quality paper options',
                'Full-color digital & offset printing',
                'Custom design with brand elements',
                'Multiple envelope sizes available',
                'Personalization options',
                'Professional embossing available'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">📋 Customization</h3>
            <ul className="space-y-3">
              {[
                'Logo placement & sizing',
                'Contact information layout',
                'Brand color matching',
                'Special finishes (matte/glossy)',
                'Embossing & foil stamping',
                'Multiple envelope styles'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Designs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose a Design Template</h2>
        <p className="text-gray-600 mb-12">Select a design template below and customize it to your needs</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design) => (
            <div
              key={design.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer group"
            >
              {/* Design Preview */}
              <div className={`${design.color} h-56 flex items-center justify-center relative overflow-hidden bg-opacity-30 p-4`}>
                <DesignPreview type="letterheads" style={design.color} title={design.title} />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{design.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{design.description}</p>

                <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition font-semibold flex items-center justify-center gap-2 group-hover:gap-3">
                  <Check className="w-4 h-4" />
                  Select Design
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-50 border-t border-purple-200 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Elevate Your Business Stationery</h2>
          <p className="text-gray-700 mb-6 text-lg">Professional letterheads and envelopes that reflect your brand's quality</p>
          <button
            onClick={handleWhatsAppClick}
            className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition font-semibold flex items-center justify-center gap-2 mx-auto"
          >
            <span>📱</span>
            <span>Order via WhatsApp</span>
          </button>
          <p className="text-gray-600 mt-4 text-sm">Free design consultation • Premium quality • Fast delivery</p>
        </div>
      </div>
    </div>
  );
};

export default LetterheadsPage;
