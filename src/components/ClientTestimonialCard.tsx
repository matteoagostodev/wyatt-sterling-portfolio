
import React from 'react';

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
}

interface ClientTestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const ClientTestimonialCard: React.FC<ClientTestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <div 
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
  );
};

export default ClientTestimonialCard;
