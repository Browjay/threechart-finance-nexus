
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Bot, BookOpen, Signal, Settings, Trophy } from 'lucide-react';

export const ProductCategories = () => {
  const categories = [
    {
      icon: TrendingUp,
      title: "Premium Indicators",
      description: "Advanced technical analysis tools with real-time market data and precision signals",
      products: "25+ Indicators",
      price: "From $29",
      color: "blue"
    },
    {
      icon: Bot,
      title: "Expert Advisors (EAs)",
      description: "Automated trading robots that execute trades 24/7 based on proven strategies",
      products: "15+ EAs",
      price: "From $99",
      color: "green"
    },
    {
      icon: Settings,
      title: "Trading Bots",
      description: "Sophisticated algorithmic trading systems for multiple currency pairs",
      products: "10+ Bots",
      price: "From $199",
      color: "purple"
    },
    {
      icon: Trophy,
      title: "Strategy Packs",
      description: "Complete trading methodologies with detailed guides and templates",
      products: "8+ Strategies",
      price: "From $49",
      color: "orange"
    },
    {
      icon: Signal,
      title: "Live Signals",
      description: "Real-time trading signals from professional traders with 90%+ accuracy",
      products: "Premium Access",
      price: "$97/month",
      color: "red"
    },
    {
      icon: BookOpen,
      title: "Education Hub",
      description: "Comprehensive courses, webinars, and tutorials for all skill levels",
      products: "50+ Resources",
      price: "From $19",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-600",
      green: "bg-green-50 border-green-200 text-green-600",
      purple: "bg-purple-50 border-purple-200 text-purple-600",
      orange: "bg-orange-50 border-orange-200 text-orange-600",
      red: "bg-red-50 border-red-200 text-red-600",
      indigo: "bg-indigo-50 border-indigo-200 text-indigo-600"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Premium Trading Arsenal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to dominate the forex markets. From beginner-friendly tools to advanced algorithmic systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:scale-105">
              <CardContent className="p-8">
                <div className={`rounded-full p-4 w-16 h-16 mb-6 ${getColorClasses(category.color)}`}>
                  <category.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-medium text-gray-500">{category.products}</span>
                  <span className="text-lg font-bold text-slate-900">{category.price}</span>
                </div>
                
                <Button className="w-full group-hover:bg-blue-600 transition-colors">
                  Explore {category.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
