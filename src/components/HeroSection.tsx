
import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, Shield, Zap, Award } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <TrendingUp className="h-8 w-8 text-blue-400" />
            <span className="text-blue-400 font-semibold text-lg">Professional Trading Tools</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Master the Markets with 
            <span className="text-blue-400"> Data-Driven</span> Precision
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Transform your forex trading with premium indicators, expert advisors, and proven strategies 
            trusted by <span className="text-blue-400 font-semibold">10,000+ traders worldwide</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
              Explore Premium Tools
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold">
              Watch Demo
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-blue-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Battle-Tested Reliability</h3>
              <p className="text-gray-300">Proven strategies with 95%+ success rate in live market conditions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Instant Execution</h3>
              <p className="text-gray-300">Lightning-fast signals and automated trading with zero delays</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-300">24/7 support from professional traders with 10+ years experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
