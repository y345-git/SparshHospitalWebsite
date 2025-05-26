import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const AddBlogPage = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [author, setAuthor] = useState('Dr. Anil Magdum');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      summary,
      imageUrl,
      author,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    };

    const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    localStorage.setItem('blogPosts', JSON.stringify([newPost, ...existingPosts]));
    
    toast({
      title: "Blog Post Added!",
      description: "Your new blog post has been successfully added.",
      variant: "default",
    });
    navigate('/admin/dashboard');
  };

  return (
    <div className="pt-32 pb-16 min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/20">
      <motion.div 
        className="container mx-auto px-4 md:px-6 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button variant="outline" onClick={() => navigate('/admin/dashboard')} className="mb-6 flex items-center gap-2">
          <ArrowLeft size={16} />
          Back to Dashboard
        </Button>
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Add New Blog Post</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="title" className="text-lg font-medium text-gray-700">Title</Label>
              <Input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-base"
                placeholder="Enter blog post title"
              />
            </div>
            <div>
              <Label htmlFor="summary" className="text-lg font-medium text-gray-700">Summary</Label>
              <Textarea
                id="summary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                required
                rows={5}
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-base"
                placeholder="Write a short summary of the blog post"
              />
            </div>
            <div>
              <Label htmlFor="imageUrl" className="text-lg font-medium text-gray-700">Image URL</Label>
              <Input
                id="imageUrl"
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-base"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div>
              <Label htmlFor="author" className="text-lg font-medium text-gray-700">Author</Label>
              <Input
                id="author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-base"
                placeholder="Author's name"
              />
            </div>
            <Button type="submit" className="w-full py-3 text-lg font-semibold" size="lg">
              Add Post
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AddBlogPage;