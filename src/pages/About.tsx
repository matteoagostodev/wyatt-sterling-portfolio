import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Award, BookOpen, Briefcase, User, FileText } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ExperienceCard, { Experience } from '../components/ExperienceCard';
import CustomCursor from '../components/CustomCursor';

const experiences: Experience[] = [
  {
    id: '1',
    company: 'Global Digital Agency',
    position: 'Senior SEO Strategist',
    period: '2021 - Present',
    description: 'Leading SEO strategy for enterprise clients across various industries, managing a team of SEO specialists and delivering high-impact campaigns.',
    achievements: [
      'Increased organic traffic by an average of 156% for enterprise clients',
      'Implemented advanced technical SEO frameworks resulting in significant ranking improvements',
      'Led a team of 5 SEO specialists and developed standardized processes',
      'Published industry research that was featured in major marketing publications'
    ],
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80'
  },
  {
    id: '2',
    company: 'Tech Innovators Inc.',
    position: 'SEO Manager',
    period: '2018 - 2021',
    description: 'Managed SEO strategy for a SaaS company, focusing on competitive B2B keyword rankings and lead generation through organic search.',
    achievements: [
      'Increased organic leads by 87% year-over-year through strategic content optimization',
      'Redesigned the site architecture resulting in a 43% improvement in crawlability',
      'Implemented structured data that led to enhanced SERP features',
      'Developed content strategy that captured 65% more featured snippets'
    ],
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80'
  },
  {
    id: '3',
    company: 'E-commerce Solutions',
    position: 'SEO Specialist',
    period: '2016 - 2018',
    description: 'Implemented technical and on-page SEO strategies for e-commerce clients, with a focus on product page optimization and conversion rate improvement.',
    achievements: [
      'Increased e-commerce conversion rates by 34% through targeted landing page optimization',
      'Improved average page load speed by 65% through technical enhancements',
      'Developed category page strategy that increased organic visibility by 112%',
      'Created internal linking structure that improved crawl efficiency by 47%'
    ],
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80'
  },
  {
    id: '4',
    company: 'Digital Marketing Institute',
    position: 'Marketing Associate',
    period: '2014 - 2016',
    description: 'Started career in digital marketing with focus on content creation, social media management, and basic SEO implementation.',
    achievements: [
      'Contributed to content strategy that increased blog traffic by 78%',
      'Managed social media campaigns with 45% engagement improvement',
      'Learned and implemented foundational SEO techniques',
      'Earned certifications in Google Analytics and Google Ads'
    ],
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80'
  }
];

const certifications = [
  {
    id: '1',
    title: 'Google Analytics Advanced Certification',
    issuer: 'Google',
    year: '2024',
    icon: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80'
  },
  {
    id: '2',
    title: 'SEMrush SEO Fundamentals Certification',
    issuer: 'SEMrush Academy',
    year: '2023',
    icon: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80'
  },
  {
    id: '3',
    title: 'HubSpot Content Marketing Certification',
    issuer: 'HubSpot Academy',
    year: '2022',
    icon: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80'
  },
  {
    id: '4',
    title: 'Technical SEO Certification',
    issuer: 'Moz Academy',
    year: '2021',
    icon: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80'
  }
];

const skills = [
  { name: 'Technical SEO', level: 95 },
  { name: 'Keyword Research', level: 90 },
  { name: 'Content Optimization', level: 92 },
  { name: 'Link Building', level: 85 },
  { name: 'Local SEO', level: 88 },
  { name: 'Analytics & Reporting', level: 94 },
  { name: 'Algorithm Updates', level: 87 },
  { name: 'Competitive Analysis', level: 89 },
  { name: 'E-commerce SEO', level: 86 },
  { name: 'International SEO', level: 82 }
];

const About = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <CustomCursor />
      <Navbar />
      
      {/* Hero Section - Shorter & More Compact */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl font-bold mb-4">About Me</h1>
              <p className="text-base text-gray-600 mb-6">
                I'm an experienced SEO specialist with over 10 years of expertise in driving organic growth for businesses of all sizes. My data-driven approach focuses on delivering measurable results that directly impact your bottom line.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Briefcase className="h-5 w-5 text-seo-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">10+ Years</h3>
                    <p className="text-xs text-gray-600">Experience</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <User className="h-5 w-5 text-seo-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">200+</h3>
                    <p className="text-xs text-gray-600">Clients</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-64 md:h-72">
              <div className="relative z-10 h-full rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="SEO Specialist" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 -right-5 w-20 h-20 bg-seo-blue opacity-10 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
              <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-seo-purple opacity-10 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
            <p className="text-gray-600">
              A decade of experience in SEO strategy, implementation, and optimization across diverse industries and business models.
            </p>
          </div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <p className="text-gray-600">
              Specialized expertise across various aspects of search engine optimization and digital marketing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full data-flow-gradient rounded-full origin-left"
                    style={{ width: `${skill.level}%`, transform: 'scaleX(0)', animation: 'animate-reveal 1s forwards' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Certifications</h2>
            <p className="text-gray-600">
              Continuous learning and professional development through industry-recognized certifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((certification, index) => (
              <div 
                key={certification.id} 
                className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={certification.icon} 
                    alt={certification.issuer} 
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <span className="text-sm text-gray-500">{certification.issuer}</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{certification.title}</h3>
                <p className="text-sm text-seo-blue">{certification.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Publications Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Publications & Contributions</h2>
            <p className="text-gray-600">
              Sharing knowledge and insights through industry publications and speaking engagements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-1 bg-seo-blue"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FileText className="h-5 w-5 text-seo-blue mr-2" />
                  <span className="text-sm text-gray-500">Article</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">The Future of SEO: AI and Machine Learning</h3>
                <p className="text-sm text-gray-600 mb-4">Published in Search Engine Journal, 2024</p>
                <a href="#" className="text-seo-blue hover:underline text-sm font-medium">Read Article →</a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-1 bg-seo-purple"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FileText className="h-5 w-5 text-seo-purple mr-2" />
                  <span className="text-sm text-gray-500">Study</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">E-commerce SEO: Conversion Rate Optimization</h3>
                <p className="text-sm text-gray-600 mb-4">Published in Moz Blog, 2023</p>
                <a href="#" className="text-seo-purple hover:underline text-sm font-medium">Read Study →</a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-1 bg-seo-green"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FileText className="h-5 w-5 text-seo-green mr-2" />
                  <span className="text-sm text-gray-500">Webinar</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Technical SEO for JavaScript Frameworks</h3>
                <p className="text-sm text-gray-600 mb-4">Hosted by SEMrush, 2023</p>
                <a href="#" className="text-seo-green hover:underline text-sm font-medium">Watch Recording →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-seo-blue to-seo-purple py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Working Together?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how my SEO expertise can help your business grow its online presence and drive more conversions.
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-seo-blue rounded-lg font-bold hover:bg-opacity-90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default About;
