
import React from 'react';

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  logo: string;
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <div 
      className="group relative rounded-xl overflow-hidden"
      style={{ 
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Diagonal connector line */}
      {index > 0 && (
        <div className="absolute -top-12 -left-12 w-24 h-24 border-b-2 border-r-2 border-dashed border-gray-200 rounded-br-3xl z-0 hidden lg:block"></div>
      )}
      
      <div className="bg-white shadow-md rounded-xl overflow-hidden relative z-10 transition-all duration-300 group-hover:shadow-xl">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 mr-4 flex items-center justify-center">
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{experience.position}</h3>
                <p className="text-seo-blue">{experience.company}</p>
              </div>
            </div>
            <div className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
              {experience.period}
            </div>
          </div>
          
          <p className="text-gray-600 mb-4">{experience.description}</p>
          
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-gray-700">Key Achievements:</h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="flex items-baseline text-sm">
                  <span className="text-seo-green mr-2">•</span>
                  <span className="text-gray-600">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom gradient line */}
        <div className="h-1 w-full bg-gradient-to-r from-seo-blue to-seo-purple transform origin-left transition-transform duration-500 group-hover:scale-x-100 scale-x-0"></div>
      </div>
    </div>
  );
};

export default ExperienceCard;
