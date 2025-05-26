import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Facebook, Video } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'A Message from Dr. Anil Magdum',
    description: 'Dr. Anil Magdum shares his philosophy on patient care and Sparsh Hospital\'s commitment to providing comprehensive and compassionate gynecological services.',
    type: 'facebook',
    url: 'https://www.facebook.com/share/p/1Bykim62oi/',
    thumbnail: 'https://images.unsplash.com/photo-1579165466949-4f1057963594?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yJTIwdGFsa2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    title: 'Understanding PCOD/PCOS',
    description: 'Dr. Anil Magdum discusses Polycystic Ovary Syndrome (PCOS), its causes, symptoms, and management strategies.',
    type: 'youtube',
    embedId: 'nGwgnIeRZI8',
    url: 'https://youtu.be/nGwgnIeRZI8',
    thumbnail: 'https://images.unsplash.com/photo-1605106702734-205df2244aa7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNhbCUyMGlubmVyJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    title: 'Patient Success Story',
    description: 'Hear directly from a patient about their positive experience and successful treatment at Sparsh Hospital.',
    type: 'facebook',
    url: 'https://www.facebook.com/share/v/1AgXBYQnwQ/',
    thumbnail: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFwcHklMjBwYXRpZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  },
];

const VideoGallery = () => {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Watch & Learn
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Informative Videos from Dr. Magdum
          </h2>
          <p className="text-lg text-gray-600">
            Gain insights into various women's health topics and learn more about our approach to care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col"
            >
              {video.type === 'youtube' ? (
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="border-0"
                  ></iframe>
                </div>
              ) : (
                <div className="aspect-video relative bg-gray-200">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                   src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Video size={48} className="text-white" />
                  </div>
                </div>
              )}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{video.description}</p>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mt-auto"
                >
                  {video.type === 'youtube' ? <Youtube size={18} className="mr-2" /> : <Facebook size={18} className="mr-2" />}
                  Watch on {video.type === 'youtube' ? 'YouTube' : 'Facebook'}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;