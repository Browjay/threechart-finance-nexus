
import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';

export const TrustBadges = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-slate-900 mb-1">10,000+</div>
            <div className="text-gray-600">Active Traders</div>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-slate-900 mb-1">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-slate-900 mb-1">5 Years</div>
            <div className="text-gray-600">Proven Track Record</div>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-slate-900 mb-1">24/7</div>
            <div className="text-gray-600">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};
