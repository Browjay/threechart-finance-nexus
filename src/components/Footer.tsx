
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Three<span className="text-blue-400">Chart</span> Finance
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering traders worldwide with premium forex tools, expert advisors, and proven strategies since 2019.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
              <li><a href="#indicators" className="text-gray-300 hover:text-white transition-colors">Indicators</a></li>
              <li><a href="#education" className="text-gray-300 hover:text-white transition-colors">Education</a></li>
              <li><a href="#signals" className="text-gray-300 hover:text-white transition-colors">Live Signals</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#help" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#installation" className="text-gray-300 hover:text-white transition-colors">Installation Guides</a></li>
              <li><a href="#tutorials" className="text-gray-300 hover:text-white transition-colors">Video Tutorials</a></li>
              <li><a href="#community" className="text-gray-300 hover:text-white transition-colors">Community Forum</a></li>
              <li><a href="#refund" className="text-gray-300 hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">support@threechart.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">Global Support 24/7</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Payment Methods</h5>
              <div className="flex space-x-2 text-sm text-gray-400">
                <span>Visa</span>
                <span>•</span>
                <span>Mastercard</span>
                <span>•</span>
                <span>PayPal</span>
                <span>•</span>
                <span>Crypto</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ThreeChart Finance. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors">Risk Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
