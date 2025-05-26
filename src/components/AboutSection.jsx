import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { id: 1, value: '15+', label: 'Years Experience', icon: Clock },
    { id: 2, value: '5000+', label: 'Happy Patients', icon: Users },
    { id: 3, value: '10+', label: 'Expert Staff', icon: Award },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute top-4 -left-4 w-full h-full bg-primary/5 rounded-2xl -z-10"></div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img  
                className="w-full h-auto" 
                alt="Dr. Anil Magdum, Gynecologist at Sparsh Hospital"
               src="https://images.unsplash.com/photo-1666305033456-2939c1f42bce" />
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-4">
              {stats.map((stat) => (
                <div key={stat.id} className="bg-white p-4 rounded-lg shadow-md text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="text-primary" size={20} />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              About Dr. Anil Magdum
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experienced Gynecologist Dedicated to Women's Health
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Dr. Anil Magdum is a highly qualified gynecologist with over 15 years of experience in providing exceptional care to women of all ages. He founded Sparsh Hospital in Sangli with a vision to offer specialized and compassionate gynecological services.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-600">Board-certified with specialization in Obstetrics and Gynecology</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-600">Advanced training in laparoscopic and minimally invasive surgeries</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-600">Committed to providing personalized care with empathy and understanding</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-600">Regularly updates knowledge with the latest medical advancements</p>
              </div>
            </div>

            <Button size="lg">Learn More About Us</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;