import React from 'react';
import AboutPageHero from '@/components/aboutpage/AboutPageHero';
import HospitalStory from '@/components/aboutpage/HospitalStory';
import DoctorProfile from '@/components/aboutpage/DoctorProfile';
import OurValues from '@/components/aboutpage/OurValues';
import VideoGallery from '@/components/aboutpage/VideoGallery';

const AboutPage = () => {
  return (
    <div className="pt-24">
      <AboutPageHero />
      <HospitalStory />
      <DoctorProfile />
      <VideoGallery />
      <OurValues />
    </div>
  );
};

export default AboutPage;