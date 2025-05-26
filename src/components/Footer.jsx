import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/a44bdbc9-921f-4617-8319-41c5828146ec/a1191e0c3b744bbeca46b4df2fa6b833.jpg";
  
  return (
    <footer className="bg-gray-50 pt-16 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={logoUrl} alt="Sparsh Hospital Logo" className="h-12" />
            </Link>
            <p className="text-gray-600 mb-4">
              Providing specialized gynecological care with compassion and expertise under the guidance of Dr. Anil Magdum.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/sparshclinic1" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-4">Quick Links</p>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-4">Our Services</p>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">Gynecology Consultation</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">Obstetric Care</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">Infertility Treatment</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">Laparoscopic Surgery</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">Prenatal Care</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-4">Contact Information</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary mr-2 mt-0.5" />
                <span className="text-gray-600">Sparsh Hospital, Sangli, Maharashtra, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary mr-2" />
                <a href="tel:+919696469191" className="text-gray-600 hover:text-primary transition-colors">+91 96964 69191</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary mr-2" />
                <a href="mailto:info@sparshhospital.com" className="text-gray-600 hover:text-primary transition-colors">info@sparshhospital.com</a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-primary mr-2 mt-0.5" />
                <span className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: Emergency Only</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6 text-center text-gray-600 text-sm">
          <p>© {currentYear} Sparsh Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;