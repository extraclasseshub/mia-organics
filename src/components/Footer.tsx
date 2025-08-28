import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

interface FooterProps {
  onInfoClick: (type: string) => void;
}

export default function Footer({ onInfoClick }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Mia's Organics Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 max-w-md">
              Premium organic sea moss products for your health and wellness journey. 
              Sustainably sourced, carefully processed, and delivered with love.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-sky-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-sky-400 transition-colors">About</a></li>
              <li><a href="#products" className="hover:text-sky-400 transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => onInfoClick('shipping')} 
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Shipping Info
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onInfoClick('faq')} 
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onInfoClick('health')} 
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Health Benefits
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm flex flex-col sm:flex-row justify-between items-center">
          <p>© 2025 Mia's Organics. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Crafted by{' '}
            <a 
              href="https://xannietechs.co.za" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sky-400 hover:text-sky-300 font-medium"
            >
              Xannie Techs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
