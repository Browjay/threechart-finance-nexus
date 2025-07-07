
import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Award, Shield } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              About ThreeChart Finance
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Founded by a team of professional traders with over 50 combined years of market experience, 
              ThreeChart Finance emerged from a simple mission: democratize access to institutional-grade trading tools.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We've spent years perfecting our algorithms, backtesting strategies across multiple market conditions, 
              and building tools that deliver consistent results. Our commitment to transparency, education, and 
              continuous innovation has made us the trusted choice for traders in 85+ countries.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Award className="h-6 w-6 text-blue-400 mr-3" />
                <span className="text-lg">5+ years of proven market performance</span>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 text-blue-400 mr-3" />
                <span className="text-lg">10,000+ active traders in our community</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-6 w-6 text-blue-400 mr-3" />
                <span className="text-lg">$50M+ in combined trader profits</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-blue-400 mr-3" />
                <span className="text-lg">95%+ customer satisfaction rate</span>
              </div>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Meet Our Team
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-sm text-gray-300">Strategy Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Customer Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">85+</div>
              <div className="text-sm text-gray-300">Countries Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-sm text-gray-300">Years Combined Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
