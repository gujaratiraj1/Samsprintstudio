import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: '⭐',
      title: 'Premium Print Quality',
      description: 'High-grade materials and professional printing technology for vibrant, durable prints.'
    },
    {
      icon: '💰',
      title: 'Affordable Pricing',
      description: 'Competitive rates without compromising on quality. Great value for money.'
    },
    {
      icon: '🚀',
      title: 'Same-Day Delivery',
      description: 'Selected products available with same-day delivery for urgent orders.'
    },
    {
      icon: '🎨',
      title: 'Free Design Assistance',
      description: 'Professional design support available for all first-time customers.'
    },
    {
      icon: '🤝',
      title: 'Trusted by Local Businesses',
      description: '200+ satisfied customers including startups, offices, and event organizers.'
    },
    {
      icon: '📞',
      title: 'Dedicated Support',
      description: 'Quick response times and personalized service on WhatsApp and call.'
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Why Choose Sam's Print Studio?</h2>
          <p className="section-subtitle">The perfect blend of quality, speed, and affordability</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="card p-8 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              <div className="mt-4 flex items-center text-green-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm font-semibold">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '200+', label: 'Happy Customers' },
            { number: '5000+', label: 'Orders Delivered' },
            { number: '4.9/5', label: 'Customer Rating' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-lg shadow">
              <p className="text-4xl font-bold text-green-600 mb-2">{stat.number}</p>
              <p className="text-gray-700 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
