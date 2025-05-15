
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold gradient-text">
            SEO<span className="text-seo-gray">Expert</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className={`text-sm font-medium relative overflow-hidden group ${isActive('/') ? 'text-seo-blue' : 'text-seo-gray hover:text-seo-blue'}`}>
              Home
              <span className={`absolute bottom-0 left-0 h-0.5 bg-seo-blue transition-all duration-300 ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link to="/projects" className={`text-sm font-medium relative overflow-hidden group ${isActive('/projects') ? 'text-seo-blue' : 'text-seo-gray hover:text-seo-blue'}`}>
              Projects
              <span className={`absolute bottom-0 left-0 h-0.5 bg-seo-blue transition-all duration-300 ${isActive('/projects') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link to="/about" className={`text-sm font-medium relative overflow-hidden group ${isActive('/about') ? 'text-seo-blue' : 'text-seo-gray hover:text-seo-blue'}`}>
              About
              <span className={`absolute bottom-0 left-0 h-0.5 bg-seo-blue transition-all duration-300 ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link to="/contact" className={`text-sm font-medium relative overflow-hidden group ${isActive('/contact') ? 'text-seo-blue' : 'text-seo-gray hover:text-seo-blue'}`}>
              Contact
              <span className={`absolute bottom-0 left-0 h-0.5 bg-seo-blue transition-all duration-300 ${isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <div className="search-field">
              <Search className="search-icon" size={18} />
              <input 
                className="search-input" 
                type="text" 
                placeholder="Search for SEO tips..." 
              />
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-seo-gray" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Add gradient overlay that fades out for non-homepage pages */}
      {!isHomepage && (
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-50 to-transparent -z-10"></div>
      )}

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
        style={{ top: '60px' }}
      >
        <div className="container mx-auto px-4 py-8">
          <nav className="flex flex-col space-y-6">
            <Link 
              to="/" 
              className={`text-lg font-medium ${isActive('/') ? 'text-seo-blue' : 'text-seo-gray'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className={`text-lg font-medium ${isActive('/projects') ? 'text-seo-blue' : 'text-seo-gray'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/about" 
              className={`text-lg font-medium ${isActive('/about') ? 'text-seo-blue' : 'text-seo-gray'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-lg font-medium ${isActive('/contact') ? 'text-seo-blue' : 'text-seo-gray'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="search-field mt-4">
              <Search className="search-icon" size={18} />
              <input 
                className="search-input" 
                type="text" 
                placeholder="Search for SEO tips..." 
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
