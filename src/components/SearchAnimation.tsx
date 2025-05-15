
import React, { useEffect, useState, useRef } from 'react';
import { Search } from 'lucide-react';

interface SearchResult {
  title: string;
  url: string;
  description: string;
  position: number;
}

const sampleResults: SearchResult[] = [
  { 
    title: "SEO Strategies for 2025: Complete Guide", 
    url: "https://example.com/seo-strategies", 
    description: "Comprehensive guide to SEO strategies that work in 2025. Learn the latest techniques to improve your search rankings.", 
    position: 1 
  },
  { 
    title: "How to Improve Your Website's Search Rankings", 
    url: "https://example.com/improve-rankings", 
    description: "Practical tips and techniques to boost your website's visibility in search engine results pages.", 
    position: 2 
  },
  { 
    title: "Technical SEO: The Ultimate Guide", 
    url: "https://example.com/technical-seo", 
    description: "Everything you need to know about technical SEO. From site structure to speed optimization.", 
    position: 3 
  },
  { 
    title: "Content Optimization for SEO Success", 
    url: "https://example.com/content-seo", 
    description: "Learn how to create and optimize content that ranks well in search engines and drives organic traffic.", 
    position: 4 
  },
  { 
    title: "Local SEO: Best Practices for Small Businesses", 
    url: "https://example.com/local-seo", 
    description: "The complete guide to local SEO for small businesses looking to attract customers in their area.", 
    position: 5 
  }
];

const SearchAnimation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      setResults(sampleResults);
      setIsSearching(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Auto-typing effect
  useEffect(() => {
    const phrases = [
      "SEO strategies",
      "improve search rankings",
      "keyword research",
      "content optimization",
      "technical SEO"
    ];
    
    let typingTimer: number;
    let erasingTimer: number;
    let pauseTimer: number;
    
    const typeText = () => {
      const phrase = phrases[currentIndex];
      let charIndex = 0;
      
      const type = () => {
        if (charIndex <= phrase.length) {
          setSearchQuery(phrase.substring(0, charIndex));
          charIndex++;
          typingTimer = window.setTimeout(type, 100);
        } else {
          pauseTimer = window.setTimeout(eraseText, 2000);
        }
      };
      
      type();
    };
    
    const eraseText = () => {
      const phrase = phrases[currentIndex];
      let charIndex = phrase.length;
      
      const erase = () => {
        if (charIndex >= 0) {
          setSearchQuery(phrase.substring(0, charIndex));
          charIndex--;
          erasingTimer = window.setTimeout(erase, 50);
        } else {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          typingTimer = window.setTimeout(typeText, 500);
        }
      };
      
      erase();
    };
    
    typeText();
    
    return () => {
      clearTimeout(typingTimer);
      clearTimeout(erasingTimer);
      clearTimeout(pauseTimer);
    };
  }, [currentIndex]);

  return (
    <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden bg-white shadow-xl">
      <div className="relative">
        <div className="flex items-center p-4 border-b border-gray-200">
          <Search className="h-5 w-5 text-gray-400 mr-3" />
          <input
            ref={searchInputRef}
            type="text"
            className="w-full outline-none text-lg"
            placeholder="Search for SEO strategies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            onClick={handleSearch}
            className="ml-3 bg-seo-blue text-white px-4 py-2 rounded-md font-medium hover:bg-seo-blue/90 transition-colors"
          >
            Search
          </button>
        </div>
        
        <div className="p-4 max-h-96 overflow-auto">
          {isSearching ? (
            <div className="flex justify-center items-center py-8">
              <div className="w-8 h-8 border-t-2 border-b-2 border-seo-blue rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              {results.length > 0 ? (
                <div className="space-y-6">
                  {results.map((result, index) => (
                    <div key={index} className="serp-result">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs text-seo-green font-medium border border-seo-green/30 bg-seo-green/10 rounded-full px-2 py-0.5">
                          #{result.position}
                        </span>
                        <a href="#" className="text-blue-600 hover:underline text-lg font-medium">
                          {result.title}
                        </a>
                      </div>
                      <div className="text-green-800 text-sm mt-1">
                        {result.url}
                      </div>
                      <p className="text-gray-600 mt-1">
                        {result.description}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <span className="keyword-tag bg-blue-50 text-blue-700">SEO</span>
                        <span className="keyword-tag bg-green-50 text-green-700">Optimization</span>
                        <span className="keyword-tag bg-purple-50 text-purple-700">Content</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  Enter a search term and press "Search" to see search results
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchAnimation;
