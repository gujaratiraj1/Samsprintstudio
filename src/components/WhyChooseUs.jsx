import React from 'react';
import {
  Award,
  Wallet,
  Zap,
  Palette,
  Building2,
  Headphones,
  CheckCircle2,
  Users,
  Printer,
  Star
} from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: 'Premium Print Quality',
      description: 'High-grade materials and professional 300DPI printing technology for vibrant, durable cards and flyers.',
      bg: 'bg-orange-50'
    },
    {
      icon: <Wallet className="w-8 h-8 text-green-500" />,
      title: 'Affordable Pricing',
      description: 'Competitive rates starting at just ₹1.50/unit. Bulk order discounts enabled effectively.',
      bg: 'bg-green-50'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Same-Day Delivery',
      description: 'Urgent order? Get visiting cards and standard flyers delivered within 24 hours in Bangalore.',
      bg: 'bg-yellow-50'
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-500" />,
      title: 'Free Design Support',
      description: 'Don\'t have a design? Our professional graphic designers help you create the perfect layout for free.',
      bg: 'bg-purple-50'
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-500" />,
      title: 'Trusted Partner',
      description: 'The go-to printing partner for 200+ local startups, corporate offices, and event organizers.',
      bg: 'bg-blue-50'
    },
    {
      icon: <Headphones className="w-8 h-8 text-red-500" />,
      title: 'Dedicated Support',
      description: 'Instant updates via WhatsApp. We are always just a message away for any query.',
      bg: 'bg-red-50'
    }
  ];

  return (
    <section className="bg-white py-20 overflow-hidden">
      {/* Main Features Grid */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Sam's Print Studio?</h2>
          <p className="text-lg text-gray-600">
            We don't just print paper; we help you build your brand identity. Experience the perfect blend of
            <span className="text-green-600 font-bold"> Speed</span>,
            <span className="text-blue-600 font-bold"> Quality</span>, and
            <span className="text-orange-600 font-bold"> Value</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl hover:border-transparent transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 ${reason.bg} opacity-0 group-hover:opacity-40 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>

              <div className={`w-16 h-16 ${reason.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                {reason.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6 relative z-10">{reason.description}</p>

              <div className="flex items-center text-gray-400 group-hover:text-green-600 transition-colors relative z-10">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Guaranteed</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Strip / Statistics with Parallax-like feel */}
      <div className="relative py-16 bg-gray-900">
        {/* Abstract Pattern Background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-500 blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-green-500 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-800">
            <div className="p-4">
              <div className="flex justify-center mb-4 text-green-400">
                <Users className="w-10 h-10" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Happy Clients</div>
            </div>
            <div className="p-4">
              <div className="flex justify-center mb-4 text-blue-400">
                <Printer className="w-10 h-10" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">5000+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Prints Delivered</div>
            </div>
            <div className="p-4">
              <div className="flex justify-center mb-4 text-yellow-400">
                <Star className="w-10 h-10" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Google Rating</div>
            </div>
            <div className="p-4">
              <div className="flex justify-center mb-4 text-purple-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
