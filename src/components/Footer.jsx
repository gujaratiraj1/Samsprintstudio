import React from 'react';
import { MapPin, Phone, Clock, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919999999999?text=Hi%20Sam%27s%20Print%20Studio%2C%20I%20would%20like%20to%20know%20more', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-gray-100">
      {/* Main footer content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-green-500">Sam's</span> Print Studio
            </h3>
            <p className="text-gray-400 mb-4">
              Professional printing solutions for Bangalore. Fast, quality, affordable.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-green-500 transition">Visiting Cards</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-green-500 transition">Flyers & Brochures</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-green-500 transition">Stickers & Labels</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-green-500 transition">Banners & Flex</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-green-500 transition">ID Cards</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-green-500 transition">Stationery</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-green-500 transition">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-green-500 transition">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-green-500 transition">Services</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-green-500 transition">Pricing</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-green-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Bangalore, India</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">+91-XXXXXXXXXX</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">info@samprintstudio.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Mon-Sat: 9 AM - 7 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Order?</h3>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition inline-flex items-center space-x-2"
            >
              <span>📱</span>
              <span>Contact on WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h5 className="text-white font-semibold mb-2">Policies</h5>
              <ul className="space-y-1">
                <li><a href="#home" className="text-gray-400 hover:text-green-500 transition text-sm">Privacy Policy</a></li>
                <li><a href="#home" className="text-gray-400 hover:text-green-500 transition text-sm">Terms & Conditions</a></li>
                <li><a href="#home" className="text-gray-400 hover:text-green-500 transition text-sm">Refund Policy</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-2">Help</h5>
              <ul className="space-y-1">
                <li><a href="#how-to-order" className="text-gray-400 hover:text-green-500 transition text-sm">FAQ</a></li>
                <li><a href="#how-to-order" className="text-gray-400 hover:text-green-500 transition text-sm">Support</a></li>
                <li><a href="#how-to-order" className="text-gray-400 hover:text-green-500 transition text-sm">Track Order</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-2">Newsletter</h5>
              <p className="text-gray-400 text-sm mb-2">Subscribe for offers and updates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r transition font-semibold">
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-800">
            <p>&copy; {currentYear} Sam's Print Studio. All rights reserved. | Designed with ❤️ for quality printing</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
