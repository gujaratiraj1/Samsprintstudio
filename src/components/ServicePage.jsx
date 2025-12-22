import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';
import DesignPreview from './DesignPreview';

export default function ServicePage({ serviceName }) {
  const navigate = useNavigate();

  const designs = {
    'visiting-cards': [
      { id: 1, title: 'Modern Minimalist', description: 'Clean design with name and contact', color: 'bg-blue-50' },
      { id: 2, title: 'Professional Gold', description: 'Elegant with gold accents', color: 'bg-yellow-50' },
      { id: 3, title: 'Creative Bold', description: 'Eye-catching gradient design', color: 'bg-purple-50' },
      { id: 4, title: 'Tech Modern', description: 'Contemporary tech-inspired', color: 'bg-gray-50' },
      { id: 5, title: 'Colorful Vibrant', description: 'Bright and energetic', color: 'bg-pink-50' },
      { id: 6, title: 'Classic Elegant', description: 'Timeless black and white', color: 'bg-slate-50' },
    ],
    'flyers': [
      { id: 1, title: 'Sale Promotion', description: 'Bold promotional design', color: 'bg-red-50' },
      { id: 2, title: 'Event Flyer', description: 'Professional event announcement', color: 'bg-blue-50' },
      { id: 3, title: 'Restaurant Menu', description: 'Food business flyer', color: 'bg-orange-50' },
      { id: 4, title: 'Real Estate', description: 'Property listing flyer', color: 'bg-green-50' },
      { id: 5, title: 'Workshop', description: 'Educational event flyer', color: 'bg-indigo-50' },
      { id: 6, title: 'Minimalist', description: 'Clean and simple design', color: 'bg-gray-50' },
    ],
    'banners': [
      { id: 1, title: 'Store Banner', description: 'Shop front banner', color: 'bg-yellow-50' },
      { id: 2, title: 'Event Banner', description: 'Large event announcement', color: 'bg-pink-50' },
      { id: 3, title: 'Sale Banner', description: 'Promotional banner', color: 'bg-red-50' },
      { id: 4, title: 'Corporate Banner', description: 'Professional business banner', color: 'bg-blue-50' },
      { id: 5, title: 'Grand Opening', description: 'Opening celebration banner', color: 'bg-green-50' },
      { id: 6, title: 'Festival Banner', description: 'Festive design', color: 'bg-purple-50' },
    ],
    'document-printing': [
      { id: 1, title: 'B&W Standard', description: 'Standard mono laser print', color: 'bg-gray-50' },
      { id: 2, title: 'Color Premium', description: 'High-quality color laser', color: 'bg-blue-50' },
      { id: 3, title: 'Resume/CV', description: 'Professional resume print', color: 'bg-slate-50' },
      { id: 4, title: 'Project Report', description: 'Academic project printing', color: 'bg-indigo-50' },
      { id: 5, title: 'Bulk Documents', description: 'Cost-effective bulk print', color: 'bg-zinc-50' },
      { id: 6, title: 'Laminated Document', description: 'Print with lamination', color: 'bg-cyan-50' },
    ],
    'photo-printing': [
      { id: 1, title: 'Passport Photo', description: 'Standard passport size set', color: 'bg-white' },
      { id: 2, title: '4x6 Glossy', description: 'Classic photo album size', color: 'bg-rose-50' },
      { id: 3, title: 'A4 Photo Print', description: 'Large portrait print', color: 'bg-pink-50' },
      { id: 4, title: 'Matte Finish', description: 'Modern non-reflective finish', color: 'bg-stone-50' },
      { id: 5, title: 'Square Print', description: 'Instagram-style square print', color: 'bg-orange-50' },
      { id: 6, title: 'Canvas Style', description: 'Artistic photo print', color: 'bg-amber-50' },
    ],
  };

  const serviceInfo = {
    'visiting-cards': {
      title: 'Visiting Cards',
      size: '3.5" x 2"',
      price: '₹299 for 500 cards',
      image: 'visiting-cards.png'
    },
    'flyers': {
      title: 'Flyers & Brochures',
      size: 'A5 (5.8" x 8.3")',
      price: '₹599 for 500 flyers',
      image: 'flyers.png'
    },
    'banners': {
      title: 'Banners',
      size: 'Custom sizes available',
      price: 'Starting from ₹799',
      image: 'banners.png'
    },
    'document-printing': {
      title: 'Document Printing',
      size: 'A4 / A3 / Legal',
      price: 'Starting from ₹2',
      image: 'document-print.png'
    },
    'photo-printing': {
      title: 'Photo Printing',
      size: '4x6 / A4 / Custom',
      price: 'Starting from ₹15',
      image: 'photo-print.png'
    },
  };

  const currentService = serviceInfo[serviceName] || { title: 'Service', size: 'Custom', price: 'Contact for pricing' };
  usePageTitle(currentService.title);

  const currentDesigns = designs[serviceName] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{currentService.title}</h1>
        </div>
      </div>

      {/* Hero Image Section */}
      {currentService.image && (
        <div className="relative h-64 md:h-80 w-full overflow-hidden">
          <img
            src={`${process.env.PUBLIC_URL}/images/${currentService.image}`}
            alt={currentService.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">{currentService.title}</h2>
          </div>
        </div>
      )}

      {/* Info Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-gray-600 text-sm uppercase tracking-wide">Product Size</p>
              <p className="text-xl font-semibold text-gray-900">{currentService.size}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm uppercase tracking-wide">Starting Price</p>
              <p className="text-xl font-semibold text-green-600">{currentService.price}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm uppercase tracking-wide">Turnaround Time</p>
              <p className="text-xl font-semibold text-gray-900">2-3 Business Days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Designs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose a Design</h2>
        <p className="text-gray-600 mb-12">Select a design template below and customize it to your needs</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentDesigns.map((design) => (
            <div
              key={design.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer group"
            >
              {/* Design Preview */}
              <div className={`${design.color} h-56 flex items-center justify-center relative overflow-hidden bg-opacity-30 p-4`}>
                <DesignPreview type={serviceName} style={design.color} title={design.title} />
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
      <div className="bg-green-50 border-t border-green-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Order?</h2>
          <p className="text-gray-700 mb-6">Select a design above and contact us to customize it</p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition font-semibold"
          >
            Contact via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
