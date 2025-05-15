
import React, { useState } from 'react';
import { Search, TrendingUp, Database, Globe, Layers } from 'lucide-react';

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const steps: ProcessStep[] = [
  {
    icon: <Search size={24} />,
    title: "Research & Analysis",
    description: "Comprehensive keyword research, competitor analysis, and technical SEO audit to establish a baseline.",
    color: "bg-seo-blue"
  },
  {
    icon: <Database size={24} />,
    title: "Strategy Development",
    description: "Creating a customized SEO roadmap based on research insights, business goals, and industry benchmarks.",
    color: "bg-seo-purple"
  },
  {
    icon: <Layers size={24} />,
    title: "Implementation",
    description: "On-page optimization, content creation, technical fixes, and off-page link building activities.",
    color: "bg-seo-green"
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Monitoring & Optimization",
    description: "Tracking rankings, traffic, and conversions with continuous refinement of strategies for maximum ROI.",
    color: "bg-seo-orange"
  },
  {
    icon: <Globe size={24} />,
    title: "Reporting & Analysis",
    description: "Transparent reporting on key performance indicators, insights, and recommendations for ongoing improvement.",
    color: "bg-seo-blue"
  }
];

const SeoProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  return (
    <div className="relative">
      {/* Timeline connector */}
      <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-gray-200 hidden md:block"></div>
      
      <div className="space-y-12 relative">
        {steps.map((step, index) => (
          <div 
            key={index}
            className={`relative ${
              activeStep === index ? 'scale-105 z-10' : 'scale-100 z-0'
            } transition-all duration-300`}
            onMouseEnter={() => setActiveStep(index)}
            onMouseLeave={() => setActiveStep(null)}
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 group">
              {/* Icon */}
              <div className={`flex-shrink-0 w-8 h-8 rounded-full ${step.color} text-white flex items-center justify-center relative z-10`}>
                {step.icon}
                <div className={`absolute -inset-4 rounded-full ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </div>
              
              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{index + 1}. {step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {/* Expandable details that appear on hover */}
                <div className={`mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-hidden transition-all duration-300 ${
                  activeStep === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <h4 className="font-medium text-gray-900 mb-2">Deliverables</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {index === 0 && (
                        <>
                          <li>• Comprehensive keyword research report</li>
                          <li>• Competitor analysis</li>
                          <li>• Technical SEO audit document</li>
                          <li>• Baseline performance metrics</li>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <li>• Customized SEO strategy document</li>
                          <li>• Content calendar</li>
                          <li>• Technical optimization plan</li>
                          <li>• KPI targets and timelines</li>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <li>• Optimized web pages</li>
                          <li>• Quality content creation</li>
                          <li>• Technical SEO improvements</li>
                          <li>• High-quality backlink acquisition</li>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <li>• Ranking monitoring dashboard</li>
                          <li>• Traffic analysis</li>
                          <li>• Conversion tracking</li>
                          <li>• Algorithm update responses</li>
                        </>
                      )}
                      {index === 4 && (
                        <>
                          <li>• Monthly performance reports</li>
                          <li>• Actionable insights</li>
                          <li>• Strategic recommendations</li>
                          <li>• ROI analysis</li>
                        </>
                      )}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <h4 className="font-medium text-gray-900 mb-2">Timeline</h4>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
                      <div 
                        className={`h-full ${step.color} rounded-full w-full transform-gpu transition-transform duration-1000`}
                        style={{ 
                          transform: activeStep === index ? 'translateX(0)' : 'translateX(-100%)',
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Start</span>
                      <span>
                        {index === 0 && "Week 1-2"}
                        {index === 1 && "Week 2-3"}
                        {index === 2 && "Week 3-8"}
                        {index === 3 && "Ongoing"}
                        {index === 4 && "Monthly"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeoProcess;
