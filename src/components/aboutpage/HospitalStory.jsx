import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const HospitalStory = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Committed to Excellence in Women's Healthcare
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Sparsh Hospital was established with a vision to provide specialized gynecological care to women in Sangli and surrounding areas. Founded by Dr. Anil Magdum, the hospital has grown to become a trusted name in women's healthcare.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our mission is to deliver compassionate, comprehensive, and high-quality healthcare services to women at every stage of their lives. We combine medical expertise with a patient-centered approach to ensure the best possible outcomes.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-600">Specialized care for women's health issues</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-600">State-of-the-art facilities and equipment</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-600">Experienced medical professionals</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-600">Patient-centered approach to healthcare</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute top-4 -right-4 w-full h-full bg-primary/5 rounded-2xl -z-10"></div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img  
                className="w-full h-auto" 
                alt="Sparsh Hospital building in Sangli"
               src="https://images.unsplash.com/photo-1669188716835-07b9fdfb1782" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HospitalStory;