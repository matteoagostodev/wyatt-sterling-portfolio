
import React from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Project } from './ProjectCard';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  // Mock data for the detailed view
  const caseStudyDetails = {
    description: `${project.description} This detailed SEO campaign was designed to address specific challenges faced by ${project.businessName} in the ${project.industry} sector, including low organic visibility, poor keyword rankings, and inadequate traffic conversion.`,
    solution: `Our comprehensive approach for ${project.businessName} included:
    • Technical SEO audit and implementation of site-wide improvements
    • Content gap analysis and strategic content development
    • Keyword research and on-page optimization targeting high-value search terms
    • Link building campaign focused on industry-relevant domains
    • Implementation of schema markup for enhanced SERP features
    • Local SEO optimization for improved regional visibility`,
    results: `The campaign delivered substantial improvements across all key performance indicators for ${project.businessName}:
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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center overflow-y-auto p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
        <div className="relative p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="inline-block text-xs font-semibold bg-seo-blue/90 text-white rounded-full px-3 py-1 mb-2">
                {project.type}
              </span>
              <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
              <p className="text-seo-gray">{project.industry} - {project.businessName}</p>
            </div>
            
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onClose} 
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full"
            >
              <X />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="border-l-4 border-l-seo-blue">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-seo-blue">Challenge & Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  {caseStudyDetails.description}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-seo-green">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-seo-green">Our Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 whitespace-pre-line">
                  {caseStudyDetails.solution}
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="border-l-4 border-l-seo-purple mb-8">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-seo-purple">Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 whitespace-pre-line">
                {caseStudyDetails.results}
              </p>
            </CardContent>
          </Card>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Key Performance Indicators</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg text-center shadow-sm border border-blue-100">
                <div className="text-3xl font-bold text-seo-green">+{caseStudyDetails.kpis.rankingIncrease}</div>
                <p className="text-sm text-gray-600">Keyword Rankings</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-4 rounded-lg text-center shadow-sm border border-purple-100">
                <div className="text-3xl font-bold text-seo-purple">+{caseStudyDetails.kpis.trafficIncrease}%</div>
                <p className="text-sm text-gray-600">Traffic Increase</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg text-center shadow-sm border border-blue-100">
                <div className="text-3xl font-bold text-seo-blue">{caseStudyDetails.kpis.backlinks}</div>
                <p className="text-sm text-gray-600">New Backlinks</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white p-4 rounded-lg text-center shadow-sm border border-green-100">
                <div className="text-3xl font-bold text-seo-green">+{caseStudyDetails.kpis.conversionRate}%</div>
                <p className="text-sm text-gray-600">Conversion Rate</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-white p-4 rounded-lg text-center shadow-sm border border-red-100">
                <div className="text-3xl font-bold text-red-500">-{caseStudyDetails.kpis.bounceRateReduction}%</div>
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
