
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard, { Project } from '../components/ProjectCard';
import ProjectDetail from '../components/ProjectDetail';
import CustomCursor from '../components/CustomCursor';

const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Revenue Growth',
    type: 'E-commerce SEO',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    industry: 'Fashion Retail',
    description: 'Complete SEO overhaul for a fashion e-commerce brand, resulting in significant organic traffic growth and increased conversions.',
    stats: {
      rankingIncrease: 145,
      trafficIncrease: 187,
      backlinks: 340
    }
  },
  {
    id: '2',
    title: 'Local Business Visibility',
    type: 'Local SEO',
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    industry: 'Professional Services',
    description: 'Comprehensive local SEO campaign for a law firm, dramatically improving their visibility in local search results and generating more qualified leads.',
    stats: {
      rankingIncrease: 28,
      trafficIncrease: 124,
      backlinks: 156
    }
  },
  {
    id: '3',
    title: 'SaaS Lead Generation',
    type: 'B2B SEO',
    image: 'https://images.unsplash.com/photo-1535551951406-a19828b0a76b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    industry: 'Software',
    description: 'Strategic content and technical SEO campaign for a SaaS platform, resulting in a substantial increase in qualified leads and demo requests.',
    stats: {
      rankingIncrease: 87,
      trafficIncrease: 143,
      backlinks: 219
    }
  },
  {
    id: '4',
    title: 'Healthcare Provider Visibility',
    type: 'Healthcare SEO',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    industry: 'Healthcare',
    description: 'Comprehensive SEO strategy for a healthcare provider, improving their online visibility and patient acquisition through organic search.',
    stats: {
      rankingIncrease: 54,
      trafficIncrease: 98,
      backlinks: 187
    }
  },
  {
    id: '5',
    title: 'Real Estate Market Dominance',
    type: 'Real Estate SEO',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    industry: 'Real Estate',
    description: 'Strategic SEO campaign for a real estate agency, establishing them as the dominant force in their local market for property-related searches.',
    stats: {
      rankingIncrease: 67,
      trafficIncrease: 112,
      backlinks: 243
    }
  },
  {
    id: '6',
    title: 'Travel Blog Traffic Explosion',
    type: 'Content SEO',
    image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    industry: 'Travel',
    description: 'Content strategy and SEO implementation for a travel blog, resulting in exponential organic traffic growth and affiliate revenue.',
    stats: {
      rankingIncrease: 215,
      trafficIncrease: 294,
      backlinks: 512
    }
  }
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.industry.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType ? project.type === filterType : true;
    
    return matchesSearch && matchesType;
  });

  const projectTypes = Array.from(new Set(projects.map(project => project.type)));

  const handleViewCaseStudy = (project: Project) => {
    setSelectedProject(project);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
    // Re-enable body scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <CustomCursor />
      <Navbar />
      
      {/* Hero Section - Now with fading effect */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">SEO Success Stories</h1>
            <p className="text-lg text-gray-600 mb-10">
              Explore my portfolio of successful SEO projects across various industries. Each case study demonstrates measurable results and the strategic approach used to achieve them.
            </p>
            
            <div className="relative max-w-md mx-auto mb-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-seo-blue focus:border-transparent"
                placeholder="Search projects by keyword, industry, etc."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filterType === null ? 'bg-seo-blue text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setFilterType(null)}
              >
                All Projects
              </button>
              
              {projectTypes.map(type => (
                <button
                  key={type}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filterType === type ? 'bg-seo-blue text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setFilterType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index} 
                  onViewCaseStudy={handleViewCaseStudy}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={handleCloseDetail} 
        />
      )}
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-seo-blue to-seo-purple py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want Results Like These?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how my SEO expertise can help your business achieve similar success.
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-seo-blue rounded-lg font-bold hover:bg-opacity-90 transition-colors"
          >
            Get Your Free SEO Consultation
          </a>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Projects;
