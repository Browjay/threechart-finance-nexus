
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Download, Users, TrendingUp } from 'lucide-react';

export const FeaturedProducts = () => {
  const featuredProducts = [
    {
      name: "ThreeChart Pro Scalper",
      category: "Expert Advisor",
      description: "Our flagship EA that delivers consistent profits with advanced risk management and market analysis.",
      features: ["Multi-timeframe analysis", "Dynamic lot sizing", "News filter protection", "24/7 automated trading"],
      rating: 4.9,
      reviews: 234,
      downloads: "2.1k",
      price: 299,
      originalPrice: 399,
      badge: "Best Seller",
      badgeColor: "bg-orange-500"
    },
    {
      name: "Momentum Master Indicator",
      category: "Technical Indicator",
      description: "Revolutionary momentum indicator that predicts trend reversals with 94% accuracy.",
      features: ["Real-time alerts", "Multi-pair compatibility", "Custom sound alerts", "Mobile notifications"],
      rating: 4.8,
      reviews: 189,
      downloads: "1.8k",
      price: 149,
      originalPrice: 199,
      badge: "Most Popular",
      badgeColor: "bg-blue-500"
    },
    {
      name: "Elite Signals Package",
      category: "Signal Service",
      description: "Premium signals from our team of professional traders with 10+ years experience.",
      features: ["5-10 signals daily", "Risk management", "Entry & exit levels", "Performance tracking"],
      rating: 4.9,
      reviews: 456,
      downloads: "3.2k",
      price: 97,
      originalPrice: 147,
      badge: "New",
      badgeColor: "bg-green-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600">
            Our most popular and highest-performing trading tools
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="absolute top-4 left-4 z-10">
                <Badge className={`${product.badgeColor} text-white`}>
                  {product.badge}
                </Badge>
              </div>
              
              <CardContent className="p-8">
                <div className="mb-6">
                  <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                    {product.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-semibold text-slate-900">{product.rating}</span>
                      <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Download className="h-4 w-4 mr-1" />
                      {product.downloads}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                    <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Save ${product.originalPrice - product.price}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                    Add to Cart - ${product.price}
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
