import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { Product } from '../components/ProductCard';

interface HomePageProps {
  onAddToCart: (product: Product) => void;
  onInfoClick: (type: string) => void;
}

export default function HomePage({ onAddToCart, onInfoClick }: HomePageProps) {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProductsSection onAddToCart={onAddToCart} />
      <ContactSection />
      <Footer onInfoClick={onInfoClick} />
    </>
  );
}