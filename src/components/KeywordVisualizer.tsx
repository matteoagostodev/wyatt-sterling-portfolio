
import React, { useState } from 'react';
import { Search, ChartBar, ChartLine } from 'lucide-react';

interface KeywordCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  keywords: Array<{
    text: string;
    volume: number;
    difficulty: number;
    opportunity: number;
  }>;
}

const keywordCategories: KeywordCategory[] = [
  {
    title: "High-Value Opportunities",
    icon: <ChartLine className="h-5 w-5" />,
    color: "#2563eb",
    keywords: [
      { text: "SEO Strategy", volume: 85, difficulty: 40, opportunity: 90 },
      { text: "Content Marketing", volume: 78, difficulty: 55, opportunity: 80 },
      { text: "Technical SEO", volume: 65, difficulty: 70, opportunity: 85 },
      { text: "Local SEO", volume: 70, difficulty: 35, opportunity: 75 },
      { text: "E-commerce SEO", volume: 80, difficulty: 60, opportunity: 85 },
    ]
  },
  {
    title: "Long-Tail Keywords",
    icon: <Search className="h-5 w-5" />,
    color: "#8b5cf6",
    keywords: [
      { text: "How to improve website ranking", volume: 55, difficulty: 25, opportunity: 80 },
      { text: "Best SEO tools for small business", volume: 60, difficulty: 30, opportunity: 75 },
      { text: "Website audit checklist", volume: 45, difficulty: 20, opportunity: 70 },
      { text: "Google algorithm updates 2025", volume: 50, difficulty: 35, opportunity: 65 },
      { text: "Voice search optimization tips", volume: 40, difficulty: 40, opportunity: 85 },
    ]
  },
  {
    title: "Competitive Analysis",
    icon: <ChartBar className="h-5 w-5" />,
    color: "#10b981",
    keywords: [
      { text: "Competitor backlink analysis", volume: 60, difficulty: 50, opportunity: 75 },
      { text: "SERP feature analysis", volume: 55, difficulty: 60, opportunity: 70 },
      { text: "Content gap analysis", volume: 70, difficulty: 45, opportunity: 80 },
      { text: "Keyword cannibalization", volume: 40, difficulty: 65, opportunity: 60 },
      { text: "Conversion rate optimization", volume: 75, difficulty: 55, opportunity: 85 },
    ]
  }
];

const KeywordVisualizer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [hoveredKeyword, setHoveredKeyword] = useState<number | null>(null);
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex border-b border-gray-100">
        {keywordCategories.map((category, index) => (
          <button
            key={category.title}
            className={`flex-1 py-4 px-2 transition-all text-sm md:text-base font-medium ${
              activeCategory === index 
                ? `text-white bg-gradient-to-r from-${category.color.replace('#', '')} to-${category.color.replace('#', '')}/80` 
                : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
            }`}
            style={{
              backgroundColor: activeCategory === index ? category.color : undefined,
              borderBottom: activeCategory === index ? `3px solid ${category.color}` : '3px solid transparent'
            }}
            onClick={() => setActiveCategory(index)}
          >
            <div className="flex items-center justify-center space-x-2">
              {category.icon}
              <span className="hidden md:inline">{category.title}</span>
            </div>
          </button>
        ))}
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2" style={{ color: keywordCategories[activeCategory].color }}>
            {keywordCategories[activeCategory].title}
          </h3>
          <p className="text-gray-600 text-sm">
            Hover over keywords to see detailed metrics and analytics
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {keywordCategories[activeCategory].keywords.map((keyword, idx) => (
            <div
              key={keyword.text}
              className="relative transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setHoveredKeyword(idx)}
              onMouseLeave={() => setHoveredKeyword(null)}
            >
              <div 
                className="rounded-lg p-4 border border-gray-100 cursor-pointer transition-all duration-300 h-full"
                style={{
                  background: `linear-gradient(135deg, white 0%, ${keywordCategories[activeCategory].color}10 100%)`,
                  boxShadow: hoveredKeyword === idx ? `0 10px 25px -5px ${keywordCategories[activeCategory].color}20` : 'none',
                  borderColor: hoveredKeyword === idx ? keywordCategories[activeCategory].color : undefined
                }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-800">{keyword.text}</h4>
                    <div className="mt-3 space-y-2">
                      {hoveredKeyword === idx && (
                        <div className="animate-fade-in">
                          <div className="grid grid-cols-3 gap-1 text-xs text-gray-500">
                            <div>
                              <div className="font-medium">Volume</div>
                              <div className="text-sm font-bold" style={{ color: keywordCategories[activeCategory].color }}>
                                {keyword.volume}
                              </div>
                            </div>
                            <div>
                              <div className="font-medium">Difficulty</div>
                              <div className="text-sm font-bold" style={{ color: keyword.difficulty > 60 ? '#ef4444' : '#10b981' }}>
                                {keyword.difficulty}
                              </div>
                            </div>
                            <div>
                              <div className="font-medium">Opportunity</div>
                              <div className="text-sm font-bold text-green-600">
                                {keyword.opportunity}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ 
                      background: `linear-gradient(135deg, ${keywordCategories[activeCategory].color} 0%, ${keywordCategories[activeCategory].color}80 100%)` 
                    }}
                  >
                    {keyword.volume}
                  </div>
                </div>
                
                {!hoveredKeyword && hoveredKeyword !== idx && (
                  <div className="mt-3 space-y-1">
                    <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                      <div 
                        className="h-full rounded-full" 
                        style={{ 
                          width: `${keyword.volume}%`, 
                          backgroundColor: keywordCategories[activeCategory].color 
                        }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="px-6 pb-6 pt-2">
        <div className="text-sm text-gray-500 flex items-center">
          <div className="mr-4 flex items-center">
            <span className="inline-block w-3 h-3 rounded-full mr-1" style={{ backgroundColor: keywordCategories[activeCategory].color }}></span>
            <span>Volume</span>
          </div>
          <div className="mr-4 flex items-center">
            <span className="inline-block w-3 h-3 rounded-full mr-1 bg-red-500"></span>
            <span>Difficulty</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 rounded-full mr-1 bg-green-500"></span>
            <span>Opportunity</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordVisualizer;
