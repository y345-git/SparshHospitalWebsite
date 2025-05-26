import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Bed, Microscope, Stethoscope, Thermometer, Activity } from 'lucide-react';

const facilities = [
  {
    id: 1,
    title: 'Modern Infrastructure',
    description: 'State-of-the-art facilities designed for patient comfort and advanced medical care.',
    icon: Building2,
  },
  {
    id: 2,
    title: 'Private Patient Rooms',
    description: 'Comfortable and private rooms ensuring rest and recovery in a peaceful environment.',
    icon: Bed,
  },
  {
    id: 3,
    title: 'Advanced Diagnostic Lab',
    description: 'Equipped with the latest technology for accurate and timely diagnostic results.',
    icon: Microscope,
  },
  {
    id: 4,
    title: 'Specialized Equipment',
    description: 'Modern gynecological equipment for precise diagnosis and effective treatments.',
    icon: Stethoscope,
  },
  {
    id: 5,
    title: 'Neonatal Care',
    description: 'Specialized care for newborns with trained staff and necessary equipment.',
    icon: Thermometer,
  },
  {
    id: 6,
    title: 'Emergency Services',
    description: '24/7 emergency care for obstetric and gynecological emergencies.',
    icon: Activity,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FacilitiesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Facilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            State-of-the-Art Medical Facilities
          </h2>
          <p className="text-lg text-gray-600">
            Sparsh Hospital is equipped with modern facilities and advanced technology to provide the highest standard of gynecological care.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {facilities.map((facility) => (
            <motion.div 
              key={facility.id}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              variants={item}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <facility.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img  
              className="w-full h-auto object-cover" 
              alt="Modern medical facility at Sparsh Hospital"
             src="https://images.unsplash.com/photo-1593824261342-fd6ee146f73d" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img  
              className="w-full h-auto object-cover" 
              alt="Advanced medical equipment at Sparsh Hospital"
             src="https://images.unsplash.com/photo-1556107136-7fdcc475b472" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;