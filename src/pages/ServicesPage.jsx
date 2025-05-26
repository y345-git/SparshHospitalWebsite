import React from 'react';
import { motion } from 'framer-motion';
import { 
  Baby, 
  Stethoscope, 
  Microscope, 
  HeartPulse, 
  Scissors, 
  Pill,
  Clipboard,
  Zap,
  Thermometer,
  Droplet
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    title: 'Obstetric Care',
    description: 'Comprehensive pregnancy care from conception to delivery, ensuring the health of both mother and baby. Our services include regular check-ups, ultrasound monitoring, and delivery assistance.',
    icon: Baby,
    details: [
      'Prenatal check-ups and monitoring',
      'High-risk pregnancy management',
      'Labor and delivery care',
      'Postpartum care and support'
    ]
  },
  {
    id: 2,
    title: 'Gynecology Consultation',
    description: 'Expert diagnosis and treatment for various gynecological conditions and concerns. Dr. Magdum provides personalized care for women of all ages, addressing their unique health needs.',
    icon: Stethoscope,
    details: [
      'Routine gynecological examinations',
      'Diagnosis and treatment of infections',
      'Management of menstrual disorders',
      'Preventive healthcare and screenings'
    ]
  },
  {
    id: 3,
    title: 'Infertility Treatment',
    description: 'Advanced diagnostic and treatment options for couples struggling with fertility issues. We offer a comprehensive approach to identify and address the causes of infertility.',
    icon: Microscope,
    details: [
      'Fertility assessment and counseling',
      'Ovulation induction',
      'Intrauterine insemination (IUI)',
      'Referrals for advanced reproductive technologies'
    ]
  },
  {
    id: 4,
    title: 'Women\'s Health Checkup',
    description: 'Comprehensive health screenings and preventive care tailored for women at every stage of life. Regular check-ups help detect potential issues early and maintain optimal health.',
    icon: HeartPulse,
    details: [
      'Pap smears and cervical cancer screening',
      'Breast examinations',
      'Bone density testing',
      'Hormone level assessment'
    ]
  },
  {
    id: 5,
    title: 'Laparoscopic Surgery',
    description: 'Minimally invasive surgical procedures with faster recovery and reduced complications. Laparoscopy allows for effective treatment with smaller incisions and less post-operative pain.',
    icon: Scissors,
    details: [
      'Diagnostic laparoscopy',
      'Laparoscopic hysterectomy',
      'Ovarian cyst removal',
      'Treatment of endometriosis'
    ]
  },
  {
    id: 6,
    title: 'Menopause Management',
    description: 'Specialized care and treatment to manage symptoms and health concerns during menopause. We help women navigate this transition with comfort and confidence.',
    icon: Pill,
    details: [
      'Hormone replacement therapy',
      'Management of menopausal symptoms',
      'Osteoporosis prevention',
      'Lifestyle and nutritional guidance'
    ]
  },
  {
    id: 7,
    title: 'Prenatal Education',
    description: 'Educational sessions for expectant parents to prepare them for childbirth and early parenthood. Knowledge empowers parents to make informed decisions about their pregnancy and delivery.',
    icon: Clipboard,
    details: [
      'Childbirth preparation classes',
      'Breastfeeding guidance',
      'Newborn care education',
      'Nutritional counseling during pregnancy'
    ]
  },
  {
    id: 8,
    title: 'Gynecological Emergencies',
    description: 'Prompt and effective care for urgent gynecological conditions. Our team is equipped to handle emergencies with quick response and appropriate interventions.',
    icon: Zap,
    details: [
      'Severe abdominal pain',
      'Heavy or abnormal bleeding',
      'Complications during pregnancy',
      'Acute infections requiring immediate attention'
    ]
  },
  {
    id: 9,
    title: 'Adolescent Gynecology',
    description: 'Specialized care for adolescent girls addressing their unique gynecological needs. We provide a comfortable and supportive environment for young patients.',
    icon: Thermometer,
    details: [
      'First gynecological examination',
      'Menstrual disorders in adolescents',
      'Education on reproductive health',
      'Vaccination against HPV'
    ]
  },
  {
    id: 10,
    title: 'Urogynecology',
    description: 'Diagnosis and treatment of pelvic floor disorders and urinary issues in women. We address conditions that affect quality of life with effective medical and surgical interventions.',
    icon: Droplet,
    details: [
      'Urinary incontinence treatment',
      'Pelvic organ prolapse management',
      'Pelvic floor rehabilitation',
      'Bladder dysfunction treatment'
    ]
  }
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

const ServicesPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600">
              Comprehensive gynecological and obstetric care provided by Dr. Anil Magdum at Sparsh Hospital in Sangli.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
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
                <ul className="space-y-2 mb-4">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need Specialized Care?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule an appointment with Dr. Anil Magdum to discuss your health concerns and receive personalized care.
            </p>
            <Button size="lg">Book an Appointment</Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Exceptional Care at Every Step
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Sparsh Hospital, we are committed to providing the highest quality of care to our patients. Here's what sets us apart:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Experienced Specialist</h3>
                  <p className="text-gray-600">
                    Dr. Anil Magdum brings over 15 years of specialized experience in gynecology and obstetrics.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Approach</h3>
                  <p className="text-gray-600">
                    We understand that each patient is unique and tailor our care to individual needs and concerns.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Technology</h3>
                  <p className="text-gray-600">
                    Our hospital is equipped with modern technology for accurate diagnosis and effective treatment.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Compassionate Care</h3>
                  <p className="text-gray-600">
                    We provide care with empathy and understanding, ensuring patients feel comfortable and supported.
                  </p>
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
                  alt="Doctor consulting with a patient at Sparsh Hospital"
                 src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;