
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Search, Home } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 pt-20 pb-20">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-seo-blue/10 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="h-16 w-16 text-seo-blue" />
            </div>
          </div>
          
          <h1 className="text-7xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-2xl font-medium text-gray-700 mb-6">Page Not Found</p>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/"
              className="px-6 py-3 bg-seo-blue text-white rounded-lg font-medium hover:bg-seo-blue/90 transition-colors flex items-center justify-center w-full sm:w-auto"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            <Link 
              to="/contact"
              className="px-6 py-3 border border-seo-blue text-seo-blue rounded-lg font-medium hover:bg-seo-blue/10 transition-colors w-full sm:w-auto"
            >
              Contact Support
            </Link>
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-semibold text-lg mb-4">Looking for SEO help?</h3>
            <p className="text-gray-600 mb-4">
              While this page doesn't exist, I can help improve your website's visibility in search results.
            </p>
            <Link 
              to="/contact"
              className="text-seo-blue hover:underline"
            >
              Get a free SEO consultation →
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default NotFound;
