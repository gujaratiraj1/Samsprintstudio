import React from 'react';
import { Sparkles } from 'lucide-react';

const DesignSupportSection = () => {
  return (
    <section className="section bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="animate-fade-in">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center space-x-2 text-green-600 bg-green-100 px-4 py-2 rounded-full text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Free Design Support</span>
              </span>
            </div>
            
            <h2 className="section-title">Design Support</h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Don't have a design? No worries—we've got you covered. Our professional design team is here to help bring your ideas to life with creative, print-ready designs.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Free Basic Design</h3>
                  <p className="text-gray-600">Simple, professional designs for all your printing needs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Logo Correction & Enhancement</h3>
                  <p className="text-gray-600">We'll fix and enhance your existing logos for perfect print quality.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Print-Ready File Support</h3>
                  <p className="text-gray-600">Complete guidance on file formats, resolution, and color profiles.</p>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <p className="text-sm text-blue-900">
                <span className="font-bold">📌 Note:</span> Design support is available for all first-time customers. Additional design revisions available at nominal charges for complex projects.
              </p>
            </div>
          </div>

          {/* Right side - Visual representation */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl card-hover">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
                    <div className="text-4xl mb-3">🎨</div>
                    <p className="font-bold text-gray-900">Creative Design</p>
                    <p className="text-sm text-gray-600 mt-2">Tailored to your brand identity</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200">
                    <div className="text-4xl mb-3">✨</div>
                    <p className="font-bold text-gray-900">Professional Touch</p>
                    <p className="text-sm text-gray-600 mt-2">High-quality visual elements</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-200">
                    <div className="text-4xl mb-3">📐</div>
                    <p className="font-bold text-gray-900">Print-Ready Files</p>
                    <p className="text-sm text-gray-600 mt-2">Perfect formatting for printing</p>
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

export default DesignSupportSection;
