import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const AboutUsSection = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="animate-fade-in">
            <h2 className="section-title">About Sam's Print Studio</h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We are a Bangalore-based professional printing service focused on quality, speed, and customer satisfaction. With over 5 years of experience, we've served startups, established businesses, educational institutions, and individuals.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our mission is simple: to provide affordable, high-quality printing solutions without compromising on service. Whether you need 100 visiting cards or 10,000 brochures, we're equipped to handle your requirements with precision and care.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Location</h3>
                  <p className="text-gray-600">Bangalore, India - Convenient pickup and delivery available</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Operating Hours</h3>
                  <p className="text-gray-600">Monday to Saturday: 9 AM - 7 PM | Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Contact</h3>
                  <p className="text-gray-600">WhatsApp: +91-XXXXXXXXXX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@samprintstudio.com</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <div className="space-y-3">
              <p className="flex items-start text-gray-700">
                <span className="text-green-600 font-bold mr-3">✓</span>
                <span><strong>Quality First:</strong> We never compromise on print quality. Premium materials and professional standards are non-negotiable.</span>
              </p>
              <p className="flex items-start text-gray-700">
                <span className="text-green-600 font-bold mr-3">✓</span>
                <span><strong>Customer Centric:</strong> Your satisfaction is our priority. We listen, understand, and deliver beyond expectations.</span>
              </p>
              <p className="flex items-start text-gray-700">
                <span className="text-green-600 font-bold mr-3">✓</span>
                <span><strong>Speed & Reliability:</strong> Fast turnarounds without sacrificing quality. You can count on us to deliver on time.</span>
              </p>
              <p className="flex items-start text-gray-700">
                <span className="text-green-600 font-bold mr-3">✓</span>
                <span><strong>Affordability:</strong> Great quality at fair prices. No hidden charges, transparent pricing always.</span>
              </p>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 shadow-2xl border border-green-200">
                <div className="space-y-8">
                  <div className="text-center">
                    <p className="text-5xl font-bold text-green-600 mb-2">5+</p>
                    <p className="text-gray-700 font-semibold">Years of Experience</p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>

                  <div className="text-center">
                    <p className="text-5xl font-bold text-green-600 mb-2">200+</p>
                    <p className="text-gray-700 font-semibold">Satisfied Customers</p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>

                  <div className="text-center">
                    <p className="text-5xl font-bold text-green-600 mb-2">5000+</p>
                    <p className="text-gray-700 font-semibold">Orders Delivered</p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>

                  <div className="text-center">
                    <p className="text-5xl font-bold text-green-600 mb-2">4.9/5</p>
                    <p className="text-gray-700 font-semibold">Average Rating</p>
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

export default AboutUsSection;
