
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  console.log("Header component is rendering, isMenuOpen:", isMenuOpen, "user:", user);

  const handleMenuToggle = () => {
    console.log("Menu toggle clicked, current state:", isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (href: string) => {
    console.log("Link clicked:", href);
  };

  const handleAuthClick = () => {
    if (isAuthenticated) {
      signOut();
    } else {
      navigate('/auth');
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-slate-900 cursor-pointer" onClick={() => navigate('/')}>
                Three<span className="text-blue-600">Chart</span> Finance
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#products" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              onClick={() => handleLinkClick("#products")}
            >
              Products
            </a>
            <a 
              href="#indicators" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              onClick={() => handleLinkClick("#indicators")}
            >
              Indicators
            </a>
            <a 
              href="#education" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              onClick={() => handleLinkClick("#education")}
            >
              Education
            </a>
            <a 
              href="#signals" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              onClick={() => handleLinkClick("#signals")}
            >
              Signals
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              onClick={() => handleLinkClick("#about")}
            >
              About
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => console.log("Search clicked")}
            >
              <Search className="h-4 w-4" />
            </Button>
            
            {isAuthenticated ? (
              <>
                <span className="text-sm text-gray-600">
                  Welcome, {user?.email?.split('@')[0]}
                </span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleAuthClick}
                >
                  <LogOut className="h-4 w-4" />
                  <span className="ml-2">Logout</span>
                </Button>
              </>
            ) : (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleAuthClick}
              >
                <User className="h-4 w-4" />
                <span className="ml-2">Login</span>
              </Button>
            )}
            
            <Button 
              variant="default" 
              size="sm"
              onClick={() => console.log("Cart clicked")}
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="ml-2">Cart (0)</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleMenuToggle}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <a 
                href="#products" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2 cursor-pointer"
                onClick={() => handleLinkClick("#products")}
              >
                Products
              </a>
              <a 
                href="#indicators" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2 cursor-pointer"
                onClick={() => handleLinkClick("#indicators")}
              >
                Indicators
              </a>
              <a 
                href="#education" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2 cursor-pointer"
                onClick={() => handleLinkClick("#education")}
              >
                Education
              </a>
              <a 
                href="#signals" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2 cursor-pointer"
                onClick={() => handleLinkClick("#signals")}
              >
                Signals
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2 cursor-pointer"
                onClick={() => handleLinkClick("#about")}
              >
                About
              </a>
              <div className="border-t border-gray-100 pt-3 mt-3">
                {isAuthenticated ? (
                  <>
                    <div className="px-3 py-2 text-sm text-gray-600">
                      Welcome, {user?.email?.split('@')[0]}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full justify-start"
                      onClick={handleAuthClick}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-start"
                    onClick={handleAuthClick}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                )}
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full justify-start mt-2"
                  onClick={() => console.log("Mobile Cart clicked")}
                >
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
