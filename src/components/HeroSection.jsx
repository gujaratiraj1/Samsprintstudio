import React from 'react';
import { MapPin, Zap, Palette, Phone } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919999999999?text=Hi%20Sam%27s%20Print%20Studio%2C%20I%20would%20like%20to%20place%20an%20order', '_blank');
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

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Fast, Quality, Affordable Printing in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Bangalore</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-light">
              Same-day printing with <span className="font-semibold text-gray-900">free basic design support</span>.
            </p>

            {/* Highlights Row (Simplified) */}
            <div className="flex flex-wrap gap-6 mb-10 text-sm font-medium text-gray-600">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500 fill-current" />
                <span>Same-Day Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-purple-500" />
                <span>Free Design Support</span>
              </div>
            </div>

            {/* CTA Buttons - Dominant Primary */}
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <button
                onClick={handleWhatsAppClick}
                className="btn-primary inline-flex items-center justify-center space-x-3 px-8 py-4 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
              >
                <div className="p-1 bg-white rounded-full">
                  <Phone className="w-5 h-5 text-green-600 fill-current" />
                </div>
                <span className="font-bold">WhatsApp Order Now</span>
              </button>

              <p className="text-sm text-gray-500 mt-2 sm:mt-0 sm:ml-4 sm:self-center">
                <span className="mb-1 block sm:inline sm:mb-0">📞</span> +91-XXXXXXXXXX
              </p>
            </div>
            {/* Removed Trust Badge from here (Moved to TrustStrip) */}
          </div>

          {/* Right side - Visual */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 group">
              <img
                src={`${process.env.PUBLIC_URL}/images/hero-printing-studio.png`}
                alt="Sam's Print Studio Workshop"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-green-100 flex gap-4 items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-8 h-8" />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-gray-900 text-lg">4.9</span>
                    <div className="flex text-yellow-400">★★★★★</div>
                  </div>
                  <p className="text-xs text-gray-600 font-medium whitespace-nowrap">See Google Reviews</p>
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
