
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Wyatt<span className="text-seo-blue">Sterling</span></h2>
            <p className="text-gray-400 mb-6">
              Elevating your online presence through data-driven SEO strategies and proven results.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-seo-blue transition-colors">Home</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-seo-blue transition-colors">Projects</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-seo-blue transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-seo-blue transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Wyatt Sterling. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-seo-blue text-sm mr-6 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-seo-blue text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
