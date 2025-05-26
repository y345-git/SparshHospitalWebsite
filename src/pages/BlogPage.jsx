import React from 'react';
import BlogHeroSection from '@/components/blogpage/BlogHeroSection';
import BlogList from '@/components/blogpage/BlogList';

const BlogPage = () => {
  return (
    <div className="pt-24">
      <BlogHeroSection />
      <BlogList />
    </div>
  );
};

export default BlogPage;