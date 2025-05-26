import React, { useState, useEffect } from 'react';
import BlogPostCard from '@/components/blogpage/BlogPostCard';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const initialPosts = [
  {
    id: 1,
    title: 'Understanding PCOD/PCOS: Causes, Symptoms, and Management',
    summary: 'Dr. Anil Magdum discusses Polycystic Ovary Syndrome (PCOS), a common hormonal disorder among women of reproductive age. Learn about its causes, symptoms like irregular periods and acne, and various treatment approaches including lifestyle changes and medical interventions.',
    imageUrl: 'https://images.unsplash.com/photo-1580281657647-2747b5885081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGd5bmVjb2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    date: 'May 10, 2025',
    author: 'Dr. Anil Magdum',
    videoUrl: 'https://youtu.be/nGwgnIeRZI8'
  },
  {
    id: 2,
    title: 'A Patient\'s Journey: Overcoming Challenges with Expert Care',
    summary: 'Hear directly from a patient about their experience at Sparsh Hospital. This testimonial highlights the compassionate care and successful treatment received under Dr. Anil Magdum, showcasing the positive impact on their life.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yJTIwcGF0aWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    date: 'May 5, 2025',
    author: 'Sparsh Hospital Team',
    videoUrl: 'https://www.facebook.com/share/v/1AgXBYQnwQ/'
  },
  {
    id: 3,
    title: 'Prioritizing Women\'s Health: Insights from Dr. Magdum',
    summary: 'Dr. Anil Magdum shares valuable insights into common women\'s health concerns and emphasizes the importance of regular check-ups and proactive healthcare. Learn about preventive measures and when to seek medical advice.',
    imageUrl: 'https://images.unsplash.com/photo-1530026405186-ed1f13b50120?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBoZWFsdGh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    date: 'April 28, 2025',
    author: 'Dr. Anil Magdum',
    videoUrl: 'https://www.facebook.com/share/v/1AhFhaop9y/'
  },
  {
    id: 4,
    title: 'Our Commitment to Your Health: A Message from Dr. Anil Magdum',
    summary: 'Dr. Anil Magdum shares his philosophy on patient care and Sparsh Hospital\'s commitment to providing comprehensive and compassionate gynecological services to women in Sangli.',
    imageUrl: 'https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvciUyMHNtaWxpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    date: 'April 20, 2025',
    author: 'Dr. Anil Magdum',
    videoUrl: 'https://www.facebook.com/share/p/1Bykim62oi/'
  }
];

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts'));
    if (storedPosts && storedPosts.length > 0) {
      setPosts(storedPosts);
    } else {
      setPosts(initialPosts);
      localStorage.setItem('blogPosts', JSON.stringify(initialPosts));
    }

    const adminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    setIsAdmin(adminLoggedIn);
  }, []);

  // This effect listens for changes in localStorage to update posts if they are changed from another tab/component
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'blogPosts') {
        const newStoredPosts = JSON.parse(event.newValue);
        if (newStoredPosts) {
          setPosts(newStoredPosts);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);


  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {isAdmin && (
          <div className="mb-8 text-right">
            <Button asChild>
              <Link to="/admin/dashboard" className="flex items-center gap-2">
                Manage Posts
              </Link>
            </Button>
          </div>
        )}
        {posts.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No blog posts yet. Stay tuned!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;