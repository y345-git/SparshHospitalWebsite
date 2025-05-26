import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users } from 'lucide-react';

const DoctorProfile = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img  
                className="w-full h-auto" 
                alt="Dr. Anil Magdum, Gynecologist"
               src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Meet Our Doctor
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dr. Anil Magdum
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Dr. Anil Magdum is a highly qualified gynecologist with extensive experience in treating various gynecological conditions. He completed his medical education from a prestigious institution and has specialized training in advanced gynecological procedures.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience, Dr. Magdum has helped thousands of women overcome health challenges and lead healthier lives. His approach combines medical expertise with empathy and understanding of women's unique healthcare needs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start p-3 bg-white rounded-lg shadow-sm">
                <Award className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Qualifications</p>
                  <p className="text-gray-600 text-sm">MBBS, MD (Gynecology)</p>
                </div>
              </div>
              <div className="flex items-start p-3 bg-white rounded-lg shadow-sm">
                <BookOpen className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Specialization</p>
                  <p className="text-gray-600 text-sm">Obstetrics & Gynecology</p>
                </div>
              </div>
              <div className="flex items-start p-3 bg-white rounded-lg shadow-sm col-span-1 sm:col-span-2">
                <Users className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Experience</p>
                  <p className="text-gray-600 text-sm">15+ Years</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;