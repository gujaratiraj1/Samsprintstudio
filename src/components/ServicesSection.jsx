import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, BookOpen, Tag, Flag, Mail, Fingerprint } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Layers className="w-12 h-12 text-green-600" />,
      title: 'Visiting Cards',
      description: 'Premium matte, glossy, textured & laminated cards with custom designs.',
      link: '/service/visiting-cards'
    },
    {
      icon: <BookOpen className="w-12 h-12 text-blue-600" />,
      title: 'Flyers & Brochures',
      description: 'High-impact marketing prints for promotions, events, and campaigns.',
      link: '/service/flyers'
    },
    {
      icon: <Tag className="w-12 h-12 text-orange-600" />,
      title: 'Stickers & Labels',
      description: 'Product labels, branding stickers, custom sizes for your brand needs.'
    },
    {
      icon: <Flag className="w-12 h-12 text-red-600" />,
      title: 'Banners & Flex',
      description: 'Indoor & outdoor banners with fast delivery. Flexible design options.',
      link: '/service/banners'
    },
    {
      icon: <Mail className="w-12 h-12 text-purple-600" />,
      title: 'Letterheads & Envelopes',
      description: 'Professional stationery for offices and businesses with premium finish.'
    },
    {
      icon: <Fingerprint className="w-12 h-12 text-teal-600" />,
      title: 'ID Cards & Custom Prints',
      description: 'Corporate, school, and event ID cards. Bulk orders welcome.'
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Complete printing solutions for every need</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card p-8 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              {service.link ? (
                <Link to={service.link} className="mt-6 text-green-600 font-semibold hover:text-green-700 flex items-center group">
                  View Designs
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              ) : (
                <button className="mt-6 text-green-600 font-semibold hover:text-green-700 flex items-center group">
                  Learn more
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-20 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border border-green-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">✨ Special Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✔</span>
                  <span className="text-gray-700">Custom design and branding support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✔</span>
                  <span className="text-gray-700">Multiple material and finish options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✔</span>
                  <span className="text-gray-700">Bulk order discounts available</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Why We're Different</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✔</span>
                  <span className="text-gray-700">Print-ready file support and verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✔</span>
                  <span className="text-gray-700">Same-day delivery for selected items</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✔</span>
                  <span className="text-gray-700">Quality guaranteed with free reprints if needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
