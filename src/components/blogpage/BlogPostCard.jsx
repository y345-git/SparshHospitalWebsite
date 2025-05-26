import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';

const BlogPostCard = ({ post }) => {
  return (
    <motion.div
      id={`post-${post.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col"
    >
      <div className="aspect-video bg-gray-200">
        <img 
          src={post.imageUrl || "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"}
          alt={post.title}
          className="w-full h-full object-cover"
         src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{post.author}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{post.summary}</p>
        {/* The "Read More" button can be linked to a full blog post page if implemented later */}
        {/* For now, it doesn't do anything */}
        <Button variant="outline" className="mt-auto self-start" disabled>
          Read More <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </motion.div>
  );
};

export default BlogPostCard;