import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const PricingSection = () => {
  const [expandedItem, setExpandedItem] = useState(null);

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
      category: 'ID Cards & Custom Prints',
      items: [
        { quantity: 'Plastic ID Cards', price: 'From ₹8/pc', details: 'Minimum 50 pcs' },
        { quantity: 'School ID Cards', price: 'From ₹6/pc', details: 'With holograms' },
        { quantity: 'Custom prints', price: 'Custom quote', details: 'Any specification' }
      ]
    },
    {
      category: 'Letterheads & Envelopes',
      items: [
        { quantity: 'Letterheads (A4)', price: 'From ₹8/pc', details: 'Minimum 100 pcs' },
        { quantity: 'Envelopes', price: 'From ₹3/pc', details: 'Standard or premium paper' },
        { quantity: 'Complete stationery', price: 'Custom quote', details: 'Matching design sets' }
      ]
    }
  ];

  return (
    <section id="pricing" className="section bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Transparent Pricing</h2>
          <p className="section-subtitle">No hidden charges. Prices may vary based on paper & finish.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {pricingData.map((category, index) => (
            <div
              key={index}
              className="card overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
              </div>
              
              <div className="p-6">
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setExpandedItem(expandedItem === `${index}-${itemIndex}` ? null : `${index}-${itemIndex}`)}
                        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="text-left">
                          <p className="font-semibold text-gray-900">{item.quantity}</p>
                          <p className="text-sm text-gray-600">{item.details}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <p className="text-lg font-bold text-green-600 min-w-fit">{item.price}</p>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-400 transition-transform ${
                              expandedItem === `${index}-${itemIndex}` ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-xl p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">⚠️ Important Notes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 mb-3">
                <span className="font-semibold">Prices vary based on:</span>
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Paper quality and weight</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Finish type (matte, glossy, laminated)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Design complexity</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-gray-700 mb-3">
                <span className="font-semibold">Get exact quote:</span>
              </p>
              <p className="text-gray-600 mb-3">
                Contact us on WhatsApp with your requirements for a customized quote.
              </p>
              <button
                onClick={() => window.open('https://wa.me/919999999999?text=Hi%20Sam%27s%20Print%20Studio%2C%20I%20need%20a%20quote%20for', '_blank')}
                className="btn-primary text-sm"
              >
                Request Quote on WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Bulk Discounts */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { amount: '10%', order: 'Orders above ₹5,000' },
            { amount: '15%', order: 'Orders above ₹10,000' },
            { amount: '20%+', order: 'Bulk corporate orders' }
          ].map((discount, index) => (
            <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-green-600 mb-2">{discount.amount}</p>
              <p className="text-gray-700 font-semibold">{discount.order}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
