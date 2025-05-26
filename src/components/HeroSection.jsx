import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/a44bdbc9-921f-4617-8319-41c5828146ec/a1191e0c3b744bbeca46b4df2fa6b833.jpg";
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 hero-gradient overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Specialized Gynecology Care
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Expert Women's Healthcare at <span className="text-primary">Sparsh Hospital</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Providing compassionate and comprehensive gynecological care under the expert guidance of Dr. Anil Magdum in Sangli.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" className="flex items-center gap-2" size="lg">
                <Link to="/services">
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img  
                className="w-full h-auto object-cover" 
                alt="Dr. Anil Magdum with medical staff at Sparsh Hospital"
               src="https://images.unsplash.com/photo-1590611936760-eeb9bc598548" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;