
import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ProductCategories } from '../components/ProductCategories';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { TrustBadges } from '../components/TrustBadges';
import { Testimonials } from '../components/Testimonials';
import { AboutSection } from '../components/AboutSection';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TrustBadges />
      <ProductCategories />
      <FeaturedProducts />
      <Testimonials />
      <AboutSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
