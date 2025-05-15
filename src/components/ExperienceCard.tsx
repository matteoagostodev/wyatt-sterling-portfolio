
import React from 'react';
import { Badge } from "@/components/ui/badge";

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  logo?: string; // Made optional since we won't be using it
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <div 
      className="group bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-xl border-l-4 border-seo-blue hover:border-seo-purple"
      style={{ 
        animationDelay: `${index * 150}ms`,
      }}
    >
      <div className="p-6">
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:justify-between sm:items-start mb-4">
          <div>
            <h3 className="font-bold text-xl text-seo-blue">{experience.position}</h3>
            <p className="text-gray-800 font-medium text-lg">{experience.company}</p>
          </div>
          <Badge variant="outline" className="bg-gray-100 text-gray-600 px-3 py-1 text-sm font-medium">
            {experience.period}
          </Badge>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="text-gray-700">{experience.description}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-700 mb-3">Key Achievements</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {experience.achievements.map((achievement, i) => (
              <div key={i} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-seo-green mr-2 font-bold">•</span>
                <span className="text-gray-700 text-sm">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-seo-blue to-seo-purple"></div>
    </div>
  );
};

export default ExperienceCard;
