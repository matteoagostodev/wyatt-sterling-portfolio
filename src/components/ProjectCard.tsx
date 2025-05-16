
import React from 'react';
import { TrendingUp, Link as LinkIcon, Search } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  type: string;
  image: string;
  industry: string;
  businessName: string;
  description: string;
  stats: {
    rankingIncrease: number;
    trafficIncrease: number;
    backlinks: number;
  };
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewCaseStudy: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onViewCaseStudy }) => {
  return (
    <div 
      className="portfolio-item rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative">
        {/* Google search background */}
        <div className="w-full h-48 bg-white relative">
          {/* Google logo */}
          <div className="absolute top-4 left-0 right-0 flex justify-center">
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-blue-500">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-500">g</span>
              <span className="text-green-500">l</span>
              <span className="text-red-500">e</span>
            </div>
          </div>
          
          {/* Google Search Bar Style Overlay */}
          <div className="absolute top-1/2 left-0 right-0 flex items-center justify-center">
            <div className="bg-white w-5/6 mx-auto rounded-full shadow-md p-3 flex items-center border border-gray-200 hover:shadow-lg transition-shadow">
              <Search className="h-5 w-5 text-seo-blue ml-2 mr-3" />
              <div className="text-gray-800 font-medium truncate">
                {project.businessName}
              </div>
            </div>
          </div>
          
          {/* Bottom section with search buttons */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            <div className="bg-gray-100 px-3 py-1 rounded-md text-xs text-gray-600">Google Search</div>
            <div className="bg-gray-100 px-3 py-1 rounded-md text-xs text-gray-600">I'm Feeling Lucky</div>
          </div>
        </div>
        
        <div className="absolute top-3 right-3 bg-transparent backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-seo-gray border border-white/20">
          Law Firm
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block text-xs font-semibold text-seo-blue bg-blue-50 rounded-full px-2 py-1">
            {project.type}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        
        <p className="text-gray-600 text-sm mb-6 line-clamp-2">
          {project.description}
        </p>
        
        <div className="border-t border-gray-100 pt-4 grid grid-cols-3 gap-2 mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center text-seo-green mb-1">
              <Search size={16} className="mr-1" />
              <span className="font-bold text-lg">+{project.stats.rankingIncrease}</span>
            </div>
            <p className="text-xs text-gray-500">Rankings</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center text-seo-purple mb-1">
              <TrendingUp size={16} className="mr-1" />
              <span className="font-bold text-lg">+{project.stats.trafficIncrease}%</span>
            </div>
            <p className="text-xs text-gray-500">Traffic</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center text-seo-blue mb-1">
              <LinkIcon size={16} className="mr-1" />
              <span className="font-bold text-lg">{project.stats.backlinks}</span>
            </div>
            <p className="text-xs text-gray-500">Backlinks</p>
          </div>
        </div>
        
        <button 
          onClick={() => onViewCaseStudy(project)}
          className="block w-full py-2 px-4 bg-white border border-seo-blue text-seo-blue rounded-lg text-center font-medium hover:bg-seo-blue hover:text-white transition-colors duration-300"
        >
          View Case Study
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
