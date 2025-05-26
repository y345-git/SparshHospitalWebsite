import React from 'react';
import { motion } from 'framer-motion';

const values = [
  { id: 1, title: 'Patient-Centered Care', description: 'We prioritize our patients\' needs, preferences, and values, ensuring they are at the center of all healthcare decisions.' },
  { id: 2, title: 'Excellence', description: 'We strive for excellence in all aspects of our service, from medical care to patient experience and facility management.' },
  { id: 3, title: 'Compassion', description: 'We approach every patient with empathy, understanding, and respect, recognizing the emotional aspects of healthcare.' },
  { id: 4, title: 'Integrity', description: 'We maintain the highest ethical standards in all our practices, ensuring transparency and honesty in our interactions.' },
  { id: 5, title: 'Innovation', description: 'We embrace advancements in medical technology and practices to provide the most effective and up-to-date care.' },
  { id: 6, title: 'Teamwork', description: 'We work collaboratively, combining our diverse skills and expertise to deliver comprehensive and coordinated care.' },
];

const OurValues = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Values
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Stand For
          </h2>
          <p className="text-lg text-gray-600">
            At Sparsh Hospital, our values guide everything we do. We are committed to providing exceptional care with integrity, compassion, and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">{`0${value.id}`}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;