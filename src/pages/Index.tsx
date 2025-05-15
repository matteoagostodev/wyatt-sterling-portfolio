
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Award, Database, Users, Rocket, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import SearchAnimation from '../components/SearchAnimation';
import RankingMetrics from '../components/RankingMetrics';
import KeywordCluster from '../components/KeywordCluster';
import SeoProcess from '../components/SeoProcess';

const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    position: 'Marketing Director',
    company: 'TechStart Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    quote: 'Working with this SEO specialist has transformed our digital presence. Our organic traffic has increased by 167% in just six months, and we\'re now ranking for keywords we never thought possible.'
  },
  {
    id: '2',
    name: 'Michael Chen',
    position: 'CEO',
    company: 'Innovative Solutions',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    quote: 'The strategic approach to SEO delivered real business results. We\'ve seen a 43% increase in qualified leads coming from organic search since implementing the recommended changes.'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    position: 'E-commerce Manager',
    company: 'StyleFusion',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    quote: 'Our e-commerce conversions from organic traffic have doubled since working together. The technical SEO audit uncovered critical issues we had no idea were affecting our performance.'
  }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 keyword-background opacity-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Elevate Your <span className="gradient-text">Digital Presence</span> Through Strategic SEO
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Data-driven SEO strategies that deliver measurable results. Transform your search visibility and drive sustainable organic growth for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="px-6 py-3 bg-seo-blue text-white rounded-lg font-medium hover:bg-seo-blue/90 transition-colors flex items-center justify-center"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Start Your SEO Journey
                </Link>
                <Link 
                  to="/projects" 
                  className="px-6 py-3 border border-seo-blue text-seo-blue rounded-lg font-medium hover:bg-seo-blue/10 transition-colors flex items-center justify-center"
                >
                  View Success Stories
                </Link>
              </div>
              
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">
                    200+
                  </div>
                  <p className="text-sm text-gray-500">Projects Completed</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">
                    94%
                  </div>
                  <p className="text-sm text-gray-500">Client Retention</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">
                    10+
                  </div>
                  <p className="text-sm text-gray-500">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">
                    127%
                  </div>
                  <p className="text-sm text-gray-500">Avg. Traffic Increase</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 transform transition-transform duration-700 hover:scale-105">
                <SearchAnimation />
              </div>
              
              {/* Floating elements around the search animation */}
              <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-blue-500/10 animate-float" style={{ animationDelay: '0s' }}></div>
              <div className="absolute top-1/4 -right-8 w-16 h-16 rounded-full bg-purple-500/10 animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/3 -left-12 w-24 h-24 rounded-full bg-green-500/10 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Comprehensive SEO Services</h2>
            <p className="text-gray-600">
              Strategic, data-driven approaches to improve your search engine visibility and drive qualified organic traffic to your website.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="h-2 bg-seo-blue"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  <Search className="h-7 w-7 text-seo-blue" />
                </div>
                <h3 className="text-xl font-bold mb-4">Technical SEO</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive audits and optimization to ensure search engines can effectively crawl, index, and rank your website.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-seo-green mr-2">•</span>
                    Site structure optimization
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-seo-green mr-2">•</span>
                    Page speed enhancement
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-seo-green mr-2">•</span>
                    Mobile-friendliness
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-seo-green mr-2">•</span>
                    Schema markup implementation
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="h-2 bg-seo-purple"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                  <Database className="h-7 w-7 text-seo-purple" />
                </div>
                <h3 className="text-xl font-bold mb-4">Content Strategy</h3>
                <p className="text-gray-600 mb-6">
                  Data-driven content creation and optimization to attract, engage, and convert your target audience.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-seo-green mr-2">•</span>
                    Keyword research & analysis
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-seo-green mr-2">•</span>
                    Content gap identification
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-seo-green mr-2">•</span>
                    SEO-optimized copywriting
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-seo-green mr-2">•</span>
                    Content performance tracking
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="h-2 bg-seo-green"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                  <TrendingUp className="h-7 w-7 text-seo-green" />
                </div>
                <h3 className="text-xl font-bold mb-4">Performance Analytics</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive tracking and analysis of SEO performance to measure ROI and inform strategy refinements.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-seo-green mr-2">•</span>
                    Custom SEO dashboards
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-seo-green mr-2">•</span>
                    Rank tracking & monitoring
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-seo-green mr-2">•</span>
                    Traffic analysis & insights
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-seo-green mr-2">•</span>
                    Conversion rate optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">My Proven SEO Process</h2>
            <p className="text-gray-600">
              A systematic approach to SEO that consistently delivers results through thorough research, strategic planning, and continuous optimization.
            </p>
          </div>
          
          <SeoProcess />
        </div>
      </section>
      
      {/* Results Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Proven Results</h2>
            <p className="text-gray-600">
              Data-driven insights that showcase the tangible impact of my SEO services across various key performance indicators.
            </p>
          </div>
          
          <RankingMetrics />
        </div>
      </section>
      
      {/* Keywords Cluster Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Strategic Keyword Targeting</h2>
              <p className="text-gray-600 mb-6">
                My approach to keyword research goes beyond basic tools to discover high-value opportunities that your competitors are missing.
              </p>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-7 h-7 rounded-full bg-seo-blue flex items-center justify-center text-white font-medium">
                      1
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">In-depth Research</h3>
                    <p className="text-gray-600">
                      Comprehensive keyword discovery using advanced tools and competitive analysis to identify valuable opportunities.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-7 h-7 rounded-full bg-seo-purple flex items-center justify-center text-white font-medium">
                      2
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">Strategic Clustering</h3>
                    <p className="text-gray-600">
                      Grouping semantically related keywords to create comprehensive content that ranks for multiple terms.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-7 h-7 rounded-full bg-seo-green flex items-center justify-center text-white font-medium">
                      3
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">Intent Mapping</h3>
                    <p className="text-gray-600">
                      Aligning keywords with user search intent to ensure your content delivers what searchers are looking for.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="transform transition-transform duration-700 hover:scale-105">
              <KeywordCluster />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-gray-600">
              Don't just take my word for it. Here's what clients have to say about the results they've achieved through our collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative p-6 flex-grow">
                  {/* Quote mark in the background */}
                  <div className="absolute top-4 right-4 text-gray-100 text-7xl font-serif select-none">
                    "
                  </div>
                  
                  <p className="text-gray-600 mb-6 relative z-10">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-seo-blue"
                    />
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
                
                <div className="h-2 w-full bg-gradient-to-r from-seo-blue via-seo-purple to-seo-green"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-seo-blue to-seo-purple py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Search Visibility?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to create an SEO strategy that drives sustainable growth for your business.
          </p>
          <Link 
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-seo-blue rounded-lg font-bold hover:bg-opacity-90 transition-colors"
          >
            Get Your Free SEO Consultation
          </Link>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
