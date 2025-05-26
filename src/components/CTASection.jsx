import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-primary/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/10 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Take the first step towards better health. Book an appointment with Dr. Anil Magdum at Sparsh Hospital today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="flex items-center gap-2" size="lg">
              <Calendar size={18} />
              Book an Appointment
            </Button>
            <Button variant="outline" className="flex items-center gap-2" size="lg">
              Contact Us
              <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;