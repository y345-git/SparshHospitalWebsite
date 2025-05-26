import React from 'react';
import { motion } from 'framer-motion';
import { 
  Baby, 
  Stethoscope, 
  Microscope, 
  HeartPulse, 
  Scissors, 
  Pill 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    title: 'Obstetric Care',
    description: 'Comprehensive pregnancy care from conception to delivery, ensuring the health of both mother and baby.',
    icon: Baby,
  },
  {
    id: 2,
    title: 'Gynecology Consultation',
    description: 'Expert diagnosis and treatment for various gynecological conditions and concerns.',
    icon: Stethoscope,
  },
  {
    id: 3,
    title: 'Infertility Treatment',
    description: 'Advanced diagnostic and treatment options for couples struggling with fertility issues.',
    icon: Microscope,
  },
  {
    id: 4,
    title: 'Women\'s Health Checkup',
    description: 'Comprehensive health screenings and preventive care tailored for women at every stage of life.',
    icon: HeartPulse,
  },
  {
    id: 5,
    title: 'Laparoscopic Surgery',
    description: 'Minimally invasive surgical procedures with faster recovery and reduced complications.',
    icon: Scissors,
  },
  {
    id: 6,
    title: 'Menopause Management',
    description: 'Specialized care and treatment to manage symptoms and health concerns during menopause.',
    icon: Pill,
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

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Specialties
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Women's Healthcare Services
          </h2>
          <p className="text-lg text-gray-600">
            At Sparsh Hospital, we offer a wide range of specialized gynecological and obstetric services to address all aspects of women's health.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className="service-card bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
              variants={item}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button className="mx-auto" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;