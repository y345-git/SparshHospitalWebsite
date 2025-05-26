import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Patient',
    content: 'Dr. Magdum provided exceptional care during my pregnancy. His expertise and compassionate approach made the entire journey comfortable and stress-free.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Anjali Patil',
    role: 'Patient',
    content: 'I had a complicated gynecological issue that other doctors couldn\'t diagnose properly. Dr. Magdum identified the problem immediately and provided effective treatment.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Meera Desai',
    role: 'Patient',
    content: 'The staff at Sparsh Hospital is incredibly supportive and professional. Dr. Magdum takes time to listen and explain everything clearly. Highly recommended!',
    rating: 5,
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

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Patient Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600">
            Read about the experiences of women who have received care at Sparsh Hospital under Dr. Anil Magdum's guidance.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className="testimonial-card bg-white rounded-xl p-6 border border-gray-100 shadow-sm relative"
              variants={item}
            >
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote size={40} />
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                ))}
              </div>
              <p className="text-gray-600 mb-6 relative z-10">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-medium">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;