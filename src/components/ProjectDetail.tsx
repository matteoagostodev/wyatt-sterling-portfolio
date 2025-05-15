
import React from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Project } from './ProjectCard';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  // Mock data for the detailed view
  const caseStudyDetails = {
    description: `${project.description} This detailed SEO campaign was designed to address specific challenges faced by the client in the ${project.industry} sector, including low organic visibility, poor keyword rankings, and inadequate traffic conversion.`,
    solution: `Our comprehensive approach included:
    • Technical SEO audit and implementation of site-wide improvements
    • Content gap analysis and strategic content development
    • Keyword research and on-page optimization targeting high-value search terms
    • Link building campaign focused on industry-relevant domains
    • Implementation of schema markup for enhanced SERP features
    • Local SEO optimization for improved regional visibility`,
    results: `The campaign delivered substantial improvements across all key performance indicators:
    • Significant increase in organic traffic quality and quantity
    • Improved SERP visibility for target keywords
    • Enhanced user engagement metrics
    • Consistent growth in qualified lead generation
    • Measurable ROI from organic search channel`,
    kpis: {
      rankingIncrease: project.stats.rankingIncrease,
      trafficIncrease: project.stats.trafficIncrease,
      backlinks: project.stats.backlinks,
      conversionRate: Math.floor(Math.random() * 5) + 2, // 2-6% conversion rate
      bounceRateReduction: Math.floor(Math.random() * 15) + 10, // 10-25% reduction
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center overflow-y-auto p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
        <div className="relative">
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose} 
            className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 rounded-full"
          >
            <X />
            <span className="sr-only">Close</span>
          </Button>
          
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
            <div className="mb-2">
              <span className="inline-block text-xs font-semibold bg-seo-blue/90 text-white rounded-full px-2 py-1 mb-2">
                {project.type}
              </span>
            </div>
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="text-white/80">{project.industry}</p>
          </div>
        </div>
        
        <div className="p-6">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3">Challenge & Description</h3>
            <p className="text-gray-700">
              {caseStudyDetails.description}
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3">Our Solution</h3>
            <p className="text-gray-700 whitespace-pre-line">
              {caseStudyDetails.solution}
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3">Results</h3>
            <p className="text-gray-700 whitespace-pre-line">
              {caseStudyDetails.results}
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Key Performance Indicators</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-seo-green">+{caseStudyDetails.kpis.rankingIncrease}</div>
                <p className="text-sm text-gray-600">Keyword Rankings</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-seo-purple">+{caseStudyDetails.kpis.trafficIncrease}%</div>
                <p className="text-sm text-gray-600">Traffic Increase</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-seo-blue">{caseStudyDetails.kpis.backlinks}</div>
                <p className="text-sm text-gray-600">New Backlinks</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-seo-green">+{caseStudyDetails.kpis.conversionRate}%</div>
                <p className="text-sm text-gray-600">Conversion Rate</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-red-500">-{caseStudyDetails.kpis.bounceRateReduction}%</div>
                <p className="text-sm text-gray-600">Bounce Rate</p>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-6 flex justify-end">
            <Button 
              onClick={onClose}
              className="bg-seo-blue hover:bg-seo-blue/90 text-white"
            >
              Close Case Study
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
