import React from 'react';
import { MapPin, Zap, Palette } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919999999999?text=Hi%20Sam%27s%20Print%20Studio%2C%20I%20would%20like%20to%20place%20an%20order', '_blank');
  };

  const handleQuoteClick = () => {
    const quoteSectionElement = document.getElementById('pricing');
    if (quoteSectionElement) {
      quoteSectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden flex items-center pt-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full opacity-20 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100 rounded-full opacity-20 -ml-40 -mb-40"></div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in">
            <div className="mb-6 inline-block">
              <span className="text-sm font-bold uppercase tracking-widest text-green-600 bg-green-100 px-4 py-2 rounded-full">
                Welcome to Sam's Print Studio
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Fast. Smart. Professional Printing in <span className="gradient-text">Bangalore</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              High-quality printing solutions for businesses, startups, builders, and individuals. From visiting cards to banners—we print it all with speed, precision, and care.
            </p>

            {/* Highlights Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-gray-800 font-semibold">Bangalore</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-gray-800 font-semibold">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Palette className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-gray-800 font-semibold">Free Design</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="btn-primary inline-flex items-center justify-center space-x-2"
              >
                <span>📱</span>
                <span>WhatsApp Order Now</span>
              </button>
              <button
                onClick={handleQuoteClick}
                className="btn-outline inline-flex items-center justify-center"
              >
                Get Instant Quote
              </button>
            </div>

            {/* Trust badge */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-3">Trusted by local businesses across Bangalore</p>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-sm text-gray-700 ml-2">200+ Happy Customers</span>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src={`${process.env.PUBLIC_URL}/images/hero-printing-studio.png`}
                alt="Sam's Print Studio Workshop"
                className="w-full h-auto object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-green-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    4.9
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Google Rating</p>
                    <p className="text-xs text-gray-600">Based on 200+ Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
