import React from 'react';
import { Check } from 'lucide-react';

const HowToOrderSection = () => {
  const steps = [
    {
      number: '1️⃣',
      title: 'Choose Your Product',
      description: 'Browse through our services and select what you need. From visiting cards to custom prints, we have it all.'
    },
    {
      number: '2️⃣',
      title: 'Upload Design or Request Support',
      description: 'Share your design file or ask for our free design support. Our team will ensure it\'s print-ready.'
    },
    {
      number: '3️⃣',
      title: 'Get Confirmation & Price',
      description: 'Receive a detailed quote and timeline. We\'ll confirm everything before moving to production.'
    },
    {
      number: '4️⃣',
      title: 'Print & Delivery',
      description: 'We\'ll print your order with precision and deliver it to your doorstep on time.'
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">How to Order</h2>
          <p className="section-subtitle">Simple, hassle-free ordering process</p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card p-8 text-center card-hover animate-slide-up relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connection line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-green-400 to-transparent"></div>
              )}
              
              <div className="text-5xl mb-4">{step.number}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-12 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold mb-4">Order easily via WhatsApp</h3>
          <p className="text-lg mb-8 text-green-50">
            Skip the complicated process. Just message us your requirements and we'll handle the rest!
          </p>
          <button
            onClick={() => window.open('https://wa.me/919999999999?text=Hi%20Sam%27s%20Print%20Studio%2C%20I%20would%20like%20to%20place%20an%20order', '_blank')}
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition duration-300 inline-flex items-center space-x-2 shadow-lg"
          >
            <span>📱</span>
            <span>Start Order on WhatsApp</span>
          </button>
        </div>

        {/* Process Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Fast Response',
              description: 'Get replies within 30 minutes during business hours'
            },
            {
              title: 'Clear Communication',
              description: 'All details confirmed before printing begins'
            },
            {
              title: 'On-time Delivery',
              description: 'Track your order and receive on the promised date'
            }
          ].map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{benefit.title}</h4>
                <p className="mt-2 text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToOrderSection;
