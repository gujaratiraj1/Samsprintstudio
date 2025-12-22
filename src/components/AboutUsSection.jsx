import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const AboutUsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Name: ${formData.name}%0APhone: ${formData.phone}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
  };

  return (
    <section className="section bg-white py-24" id="about">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Content */}
          <div className="animate-fade-in">
            <h2 className="section-title text-left">Visit Sam's Print Studio</h2>
            <p className="section-subtitle text-left mb-8">Your local printing partner in Bangalore</p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We are proud to serve the Kada Agrahara and greater Bangalore community with premium printing services. From urgent business presentations to large-scale event branding, we are just around the corner.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Serving all of Bangalore</h3>
                  <p className="text-gray-600 leading-relaxed">Pickup and delivery available in Kada Agrahara, Sarjapur Road, and nearby areas.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Operating Hours</h3>
                  <p className="text-gray-600">Mon - Sat: 9:00 AM - 8:00 PM<br />Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Call or WhatsApp</h3>
                  <p className="text-gray-600 text-lg font-medium">+91-9999999999</p>
                  <p className="text-sm text-gray-500">Fast response guaranteed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                  <select
                    name="service"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition bg-white"
                    onChange={handleChange}
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Visiting Cards">Visiting Cards</option>
                    <option value="Flyers">Flyers/Brochures</option>
                    <option value="Banners">Banners & Flex</option>
                    <option value="Stickers">Stickers/Labels</option>
                    <option value="ID Cards">ID Cards</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message or Requirements</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="I need 500 visiting cards with matte finish..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition resize-none"
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold py-4 rounded-lg hover:bg-green-700 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Inquiry via WhatsApp
              </button>
              <p className="text-xs text-center text-gray-500 mt-4">
                Your details are safe. We will reply to your WhatsApp number.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
