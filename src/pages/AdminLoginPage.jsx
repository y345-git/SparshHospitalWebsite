import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const ADMIN_PASSWORD = "admin1234"; // This should be an environment variable in a real app

const AdminLoginPage = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('isAdminLoggedIn', 'true');
      toast({
        title: "Login Successful!",
        description: "Redirecting to admin dashboard...",
      });
      navigate('/admin/dashboard');
    } else {
      toast({
        title: "Login Failed",
        description: "Incorrect password. Please try again.",
        variant: "destructive",
      });
      setPassword('');
    }
  };

  return (
    <div className="pt-32 pb-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-secondary/30">
      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-gray-100">
          <div className="flex flex-col items-center mb-8">
            <div className="p-3 bg-primary/10 rounded-full mb-4">
              <Shield size={40} className="text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 text-center">Admin Login</h1>
            <p className="text-gray-600 text-center mt-2">Enter password to manage blog posts.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="password" className="text-lg font-medium text-gray-700">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-base"
                placeholder="Enter admin password"
              />
            </div>
            <Button type="submit" className="w-full py-3 text-lg font-semibold" size="lg">
              Login
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLoginPage;