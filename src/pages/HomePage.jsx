import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import CTASection from '@/components/CTASection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default HomePage;