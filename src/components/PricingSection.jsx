
import React, { useState } from 'react';
import { ExternalLink, Star } from 'lucide-react';

const PricingSection = () => {


  const featuredPackages = [
    {
      title: 'Startup Visiting Card Pack',
      price: '₹499',
      unit: '1000 cards',
      description: 'Standard matte finish, single sided. Perfect for bulk distribution.',
      popular: true,
      color: 'green'
    },
    {
      title: 'Business Starter Kit',
      price: '₹999',
      unit: 'Complete Set',
      description: '500 Visiting Cards + 100 Letterheads + 50 Envelopes.',
      popular: false,
      color: 'blue'
    },
    {
      title: 'Promo Flyers Pack',
      price: '₹1499',
      unit: '1000 Flyers (A5)',
      description: 'Glossy finish paper, single side print. Great for fast marketing.',
      popular: false,
      color: 'orange'
    }
  ];

  const pricingData = [
    {
      category: 'Visiting Cards',
      items: [
        { quantity: '500 cards', price: '₹299', details: 'Premium quality, standard finish' },
        { quantity: '1000 cards', price: '₹499', details: 'Best value, includes lamination option' },
        { quantity: '2000+ cards', price: 'Custom', details: 'Bulk discounts available' }
      ]
    },
    {
      category: 'Flyers & Brochures',
      items: [
        { quantity: 'A5 Flyer', price: 'From ₹2.5/pc', details: 'Minimum 100 pcs' },
        { quantity: 'A4 Flyer', price: 'From ₹4/pc', details: 'Minimum 100 pcs' },
        { quantity: 'Tri-fold Brochure', price: 'From ₹5/pc', details: 'Premium finish available' }
      ]
    },
    {
      category: 'Stickers & Labels',
      items: [
        { quantity: '2x2 inch stickers', price: 'From ₹2/pc', details: 'Vinyl, paper, or holographic' },
        { quantity: 'Custom size stickers', price: 'Custom quote', details: 'Any shape or finish' },
        { quantity: 'Product labels', price: 'From ₹1.5/pc', details: 'Roll or sheet format' }
      ]
    },
    {
      category: 'Banners & Flex',
      items: [
        { quantity: '2x4 ft banner', price: 'From ₹399', details: 'Flex or vinyl material' },
        { quantity: '4x6 ft banner', price: 'From ₹799', details: 'Indoor or outdoor use' },
        { quantity: 'Custom size', price: 'Custom quote', details: 'Any size, fast delivery' }
      ]
    },
    {
      category: 'ID Cards',
      items: [
        { quantity: 'Plastic ID Cards', price: 'From ₹8/pc', details: 'Minimum 50 pcs' },
        { quantity: 'School ID Cards', price: 'From ₹6/pc', details: 'With holograms' },
        { quantity: 'Custom prints', price: 'Custom quote', details: 'Any specification' }
      ]
    },
    {
      category: 'Letterheads',
      items: [
        { quantity: 'Letterheads (A4)', price: 'From ₹8/pc', details: 'Minimum 100 pcs' },
        { quantity: 'Envelopes', price: 'From ₹3/pc', details: 'Standard or premium paper' },
        { quantity: 'Complete stationery', price: 'Custom quote', details: 'Matching design sets' }
      ]
    }
  ];

  const handleWhatsAppQuote = (item, price) => {
    const text = `Hi Sam's Print Studio, I am interested in ${item} for ${price}. Can I get a quote?`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="pricing" className="section bg-white py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Transparent Pricing</h2>
          <p className="section-subtitle">No hidden charges. Great value packages for businesses.</p>
        </div>

        {/* Featured Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {featuredPackages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 hover:-translate-y-2 transition-transform duration-300 ${pkg.popular ? 'border-green-500 ring-4 ring-green-50' : 'border-gray-100 hover:border-gray-200'}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" /> Most Popular
                </div>
              )}
              <h3 className="text-gray-500 font-bold uppercase tracking-wider text-sm mb-2">{pkg.unit}</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">{pkg.price}</div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">{pkg.title}</h4>
              <p className="text-gray-600 mb-8 leading-relaxed">{pkg.description}</p>

              <button
                onClick={() => handleWhatsAppQuote(pkg.title, pkg.price)}
                className={`w-full py-3 rounded-xl font-bold transition-colors ${pkg.popular ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
              >
                Order Now
              </button>
            </div>
          ))}
        </div>

        {/* All Pricing Categories */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Detailed Price List</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pricingData.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden"
              >
                <div className="bg-gray-100 p-4 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-900">{category.category}</h3>
                </div>

                <div className="divide-y divide-gray-200">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="p-4 flex items-center justify-between hover:bg-white transition-colors group">
                      <div>
                        <p className="font-semibold text-gray-800">{item.quantity}</p>
                        <p className="text-xs text-gray-500">{item.details}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 justify-end">
                          <span className="text-xs text-gray-400 font-medium">Starting at</span>
                          <span className="text-lg font-bold text-green-600">{item.price}</span>
                        </div>
                        <button
                          onClick={() => handleWhatsAppQuote(`${category.category} - ${item.quantity}`, item.price)}
                          className="text-xs text-green-600 font-bold hover:underline opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-end ml-auto gap-1 mt-1"
                        >
                          Get Custom Quote <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
