import React from 'react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FAQ = () => {
  console.log("FAQ component is rendering");
  
  const faqs = [
    {
      question: "How do I get started with ThreeChart Finance products?",
      answer: "Getting started is simple! After purchase, you'll receive instant access to download links and detailed installation guides. Our products work with MetaTrader 4 and MetaTrader 5 platforms. We also provide video tutorials and 24/7 support to help you set up everything correctly."
    },
    {
      question: "What's the difference between Expert Advisors and Indicators?",
      answer: "Expert Advisors (EAs) are automated trading robots that can execute trades on your behalf based on programmed strategies. Indicators are analysis tools that provide signals and market insights to help you make informed trading decisions manually. EAs trade automatically, while indicators require manual execution."
    },
    {
      question: "Do you offer money-back guarantees?",
      answer: "Yes! We offer a 30-day money-back guarantee on all our products. If you're not satisfied with the performance or quality, simply contact our support team within 30 days of purchase for a full refund. We're confident in our products and want you to trade with confidence."
    },
    {
      question: "Can I use these tools with any broker?",
      answer: "Our products are compatible with most reputable forex brokers that support MetaTrader 4 or MetaTrader 5 platforms. We recommend using ECN brokers with tight spreads for optimal performance. If you're unsure about compatibility, our support team can help verify your broker."
    },
    {
      question: "How accurate are your trading signals?",
      answer: "Our live signals maintain a 90-95% accuracy rate based on historical performance. However, forex trading involves risk, and past performance doesn't guarantee future results. We provide detailed risk management guidelines and recommend never risking more than 2-5% of your account per trade."
    },
    {
      question: "Do you provide customer support and updates?",
      answer: "Absolutely! We provide 24/7 customer support via live chat, email, and our member portal. All products receive regular updates and improvements at no additional cost. We also offer exclusive webinars, market analysis, and one-on-one consultation sessions for premium customers."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and cryptocurrency payments (Bitcoin, Ethereum, USDT). All transactions are secured with 256-bit SSL encryption. After payment, you'll receive instant access to your products."
    },
    {
      question: "Are there any ongoing fees or subscriptions?",
      answer: "Most of our products are one-time purchases with lifetime access and free updates. Only our Live Signals service operates on a monthly subscription model ($97/month). There are no hidden fees, and you can cancel subscriptions anytime from your member dashboard."
    }
  ];

  const handleSupportClick = () => {
    console.log("Support button clicked");
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our products and services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg border border-gray-200 px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-blue-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleSupportClick}
          >
            Contact Our Support Team
          </Button>
        </div>
      </div>
    </section>
  );
};
