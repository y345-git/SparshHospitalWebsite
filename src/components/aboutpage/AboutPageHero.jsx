import React from 'react';
import { motion } from 'framer-motion';

const AboutPageHero = () => {
  return (
    <section className="py-16 md:py-20 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Sparsh Hospital</h1>
          <p className="text-xl text-gray-600">
            A leading gynecology hospital in Sangli providing specialized care under the expert guidance of Dr. Anil Magdum.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPageHero;