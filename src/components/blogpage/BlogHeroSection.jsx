import React from 'react';
import { motion } from 'framer-motion';

const BlogHeroSection = () => {
  return (
    <section className="py-16 md:py-20 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sparsh Hospital Blog</h1>
          <p className="text-xl text-gray-600">
            Insights, tips, and updates on women's health from Dr. Anil Magdum and the Sparsh Hospital team.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHeroSection;