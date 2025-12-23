import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, BookOpen, Tag, Flag, Mail, Fingerprint, FileText, Camera, Shirt } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      image: '/images/visiting-cards.png',
      icon: <Layers className="w-6 h-6 text-green-600" />,
      title: 'Visiting Cards',
      description: 'Premium matte, glossy, textured & laminated cards with custom designs.',
      link: '/service/visiting-cards'
    },
    {
      image: '/images/flyers.png',
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      title: 'Flyers & Brochures',
      description: 'High-impact marketing prints for promotions, events, and campaigns.',
      link: '/service/flyers'
    },
    {
      image: '/images/stickers.png',
      icon: <Tag className="w-6 h-6 text-orange-600" />,
      title: 'Stickers & Labels',
      description: 'Product labels, branding stickers, custom sizes for your brand needs.',
      link: '/service/stickers-labels'
    },
    {
      image: '/images/banners.png',
      icon: <Flag className="w-6 h-6 text-red-600" />,
      title: 'Banners & Flex',
      description: 'Indoor & outdoor banners with fast delivery. Flexible design options.',
      link: '/service/banners'
    },
    {
      image: '/images/document-print.png',
      icon: <FileText className="w-6 h-6 text-indigo-600" />,
      title: 'Document Printing',
      description: 'High-quality laser printing for documents, reports, and presentations.',
      link: '/service/document-printing'
    },
    {
      image: '/images/photo-print.png',
      icon: <Camera className="w-6 h-6 text-pink-600" />,
      title: 'Photo Printing',
      description: 'Vibrant photo prints on premium glossy or matte paper in various sizes.',
      link: '/service/photo-printing'
    },
    {
      image: '/images/letterheads.png',
      icon: <Mail className="w-6 h-6 text-purple-600" />,
      title: 'Letterheads & Envelopes',
      description: 'Professional stationery for offices and businesses with premium finish.',
      link: '/service/letterheads'
    },
    {
      image: '/images/fabric-print.png',
      icon: <Shirt className="w-6 h-6 text-orange-500" />,
      title: 'Fabric Prints',
      description: 'Customized T-shirts, tote bags, pillows and more with your brand or designs.',
      link: '/service/fabric-prints'
    },
    {
      image: '/images/hero-printing-studio.png',
      icon: <Fingerprint className="w-6 h-6 text-teal-600" />,
      title: 'ID Cards & Custom Prints',
      description: 'Corporate, school, and event ID cards. Bulk orders welcome.',
      link: '/service/id-cards'
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
              className="card group hover:shadow-2xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                <img
                  src={`${process.env.PUBLIC_URL}${service.image}`}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                  {service.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                {service.link ? (
                  <Link to={service.link} className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition">
                    View Designs
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                ) : (
                  <button className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition">
                    Learn more
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                )}
              </div>
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
