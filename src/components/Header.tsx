
import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-slate-900">
                Three<span className="text-blue-600">Chart</span> Finance
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Products</a>
            <a href="#indicators" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Indicators</a>
            <a href="#education" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Education</a>
            <a href="#signals" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Signals</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
              <span className="ml-2">Login</span>
            </Button>
            <Button variant="default" size="sm">
              <ShoppingCart className="h-4 w-4" />
              <span className="ml-2">Cart (0)</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2">Products</a>
              <a href="#indicators" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2">Indicators</a>
              <a href="#education" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2">Education</a>
              <a href="#signals" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2">Signals</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2">About</a>
              <div className="border-t border-gray-100 pt-3 mt-3">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button variant="default" size="sm" className="w-full justify-start mt-2">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart (0)
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
