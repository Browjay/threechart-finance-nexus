
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcus Johnson",
      role: "Professional Trader",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "ThreeChart Finance transformed my trading completely. The Pro Scalper EA has been running for 8 months and generated over 300% returns. The support team is incredibly knowledgeable and responsive.",
      profit: "+$47,250",
      timeframe: "8 months"
    },
    {
      name: "Sarah Chen",
      role: "Forex Enthusiast",
      location: "Singapore",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b3c5?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "As a beginner, I was skeptical about automated trading. But the education materials and step-by-step guides made everything clear. Now I'm consistently profitable and have more time for other activities.",
      profit: "+$12,850",
      timeframe: "4 months"
    },
    {
      name: "David Rodriguez",
      role: "Investment Manager",
      location: "New York, USA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "I manage multiple accounts and needed reliable tools. ThreeChart's indicators and EAs are incredibly accurate. The risk management features alone have saved me from major losses during volatile periods.",
      profit: "+$89,400",
      timeframe: "12 months"
    },
    {
      name: "Emily Watson",
      role: "Part-time Trader",
      location: "Toronto, Canada",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The live signals service is phenomenal. I follow the signals while at my day job and the results speak for themselves. The accuracy rate is exactly as advertised - sometimes even better!",
      profit: "+$18,670",
      timeframe: "6 months"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Trusted by Traders Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful traders who have transformed their trading with our premium tools and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="absolute top-4 right-4 text-blue-600 opacity-20">
                  <Quote className="h-8 w-8" />
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{testimonial.profit}</div>
                    <div className="text-sm text-gray-500">in {testimonial.timeframe}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
