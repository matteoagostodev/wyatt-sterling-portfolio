import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Award, BookOpen, Briefcase, User, Circle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import { Progress } from '../components/ui/progress';
import { Card, CardContent } from '../components/ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

const experiences = [
  {
    id: '1',
    company: 'Vertex Digital Solutions',
    position: 'Senior SEO Strategist',
    period: '2021 - Present',
    description: 'Leading SEO strategy for enterprise clients across various industries, managing a team of SEO specialists and delivering high-impact campaigns.',
    achievements: [
      'Increased organic traffic by an average of 156% for enterprise clients',
      'Implemented advanced technical SEO frameworks resulting in significant ranking improvements',
      'Led a team of 5 SEO specialists and developed standardized processes',
      'Published industry research that was featured in major marketing publications'
    ]
  },
  {
    id: '2',
    company: 'Horizon Tech Partners',
    position: 'SEO Manager',
    period: '2018 - 2021',
    description: 'Managed SEO strategy for a SaaS company, focusing on competitive B2B keyword rankings and lead generation through organic search.',
    achievements: [
      'Increased organic leads by 87% year-over-year through strategic content optimization',
      'Redesigned the site architecture resulting in a 43% improvement in crawlability',
      'Implemented structured data that led to enhanced SERP features',
      'Developed content strategy that captured 65% more featured snippets'
    ]
  },
  {
    id: '3',
    company: 'NexGen eCommerce',
    position: 'SEO Specialist',
    period: '2016 - 2018',
    description: 'Implemented technical and on-page SEO strategies for e-commerce clients, with a focus on product page optimization and conversion rate improvement.',
    achievements: [
      'Increased e-commerce conversion rates by 34% through targeted landing page optimization',
      'Improved average page load speed by 65% through technical enhancements',
      'Developed category page strategy that increased organic visibility by 112%',
      'Created internal linking structure that improved crawl efficiency by 47%'
    ]
  },
  {
    id: '4',
    company: 'Pinnacle Marketing Group',
    position: 'Marketing Associate',
    period: '2014 - 2016',
    description: 'Started career in digital marketing with focus on content creation, social media management, and basic SEO implementation.',
    achievements: [
      'Contributed to content strategy that increased blog traffic by 78%',
      'Managed social media campaigns with 45% engagement improvement',
      'Learned and implemented foundational SEO techniques',
      'Earned certifications in Google Analytics and Google Ads'
    ]
  }
];

const certifications = [
  {
    id: '1',
    title: 'Google Analytics 4 Certification',
    issuer: 'Google',
    year: '2024',
    description: 'Advanced analytics implementation and data-driven marketing strategies'
  },
  {
    id: '2',
    title: 'Advanced SEO Certification',
    issuer: 'SEMrush Academy',
    year: '2023',
    description: 'Comprehensive training on technical SEO, content optimization, and search algorithms'
  },
  {
    id: '3',
    title: 'Content Marketing Certification',
    issuer: 'HubSpot Academy',
    year: '2023',
    description: 'Strategic content creation, distribution, and measurement for digital marketing'
  },
  {
    id: '4',
    title: 'Technical SEO Professional',
    issuer: 'Moz Academy',
    year: '2022',
    description: 'Site architecture, crawlability optimization, and performance enhancement'
  },
  {
    id: '5',
    title: 'Schema Markup Specialist',
    issuer: 'Schema App',
    year: '2022',
    description: 'Implementation of structured data for enhanced SERP visibility'
  },
  {
    id: '6',
    title: 'Advanced Google Ads Certification',
    issuer: 'Google',
    year: '2021',
    description: 'Search, display, and video advertising optimization for maximum ROI'
  },
  {
    id: '7',
    title: 'Digital Marketing Analytics',
    issuer: 'MIT Sloan School of Management',
    year: '2021',
    description: 'Data analysis for marketing decision-making and strategy development'
  },
  {
    id: '8',
    title: 'Mobile Marketing Certification',
    issuer: 'Facebook Blueprint',
    year: '2020',
    description: 'Mobile-first marketing strategies and platform-specific optimization'
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
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-seo-blue to-seo-purple bg-clip-text text-transparent">About Me</h1>
            <p className="text-xl text-gray-600 mb-10">
              I'm an experienced SEO specialist with over 10 years of expertise in driving organic growth for businesses of all sizes. 
              My data-driven approach focuses on delivering measurable results that directly impact your bottom line.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Briefcase className="h-7 w-7 text-seo-blue" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">10+</h3>
                    <p className="text-sm text-gray-500">Years Experience</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <User className="h-7 w-7 text-seo-purple" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">200+</h3>
                    <p className="text-sm text-gray-500">Clients</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Award className="h-7 w-7 text-seo-green" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">15+</h3>
                    <p className="text-sm text-gray-500">Awards</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                    <BookOpen className="h-7 w-7 text-seo-orange" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">25+</h3>
                    <p className="text-sm text-gray-500">Certifications</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section - Roadmap Layout */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-seo-blue to-seo-purple bg-clip-text text-transparent">Professional Journey</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-seo-blue to-seo-purple mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              A decade of experience helping businesses achieve remarkable growth through strategic SEO implementation.
            </p>
          </div>
          
          {/* Roadmap Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-seo-blue to-seo-purple"></div>
            
            {experiences.map((experience, index) => (
              <div 
                key={experience.id} 
                className={`relative z-10 mb-12 ${
                  index % 2 === 0 ? 'md:ml-auto md:mr-[50%]' : 'md:mr-auto md:ml-[50%]'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-6 h-6 rounded-full bg-white border-4 border-seo-purple z-20"></div>
                
                {/* Content Card */}
                <div className={`
                  relative bg-white shadow-lg rounded-xl overflow-hidden p-6 md:w-[90%] mx-auto
                  transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                  ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}
                `}>
                  {/* Header */}
                  <div className="flex flex-col space-y-1 mb-4">
                    <h3 className="font-bold text-xl text-seo-blue">{experience.position}</h3>
                    <p className="text-gray-800 font-medium text-lg">{experience.company}</p>
                    <div className="inline-block bg-gray-100 text-gray-600 px-3 py-1 text-sm font-medium rounded-full">
                      {experience.period}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-700">{experience.description}</p>
                  </div>
                  
                  {/* Achievements */}
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <button className="text-sm font-semibold text-seo-blue hover:text-seo-purple transition-colors">
                        View Key Achievements
                      </button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-700">Key Achievements</h4>
                        {experience.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start p-2 bg-gray-50 rounded-lg">
                            <span className="text-seo-green mr-2 font-bold">•</span>
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-seo-blue to-seo-purple mx-auto mb-4"></div>
            <p className="text-gray-600">
              Specialized expertise across various aspects of search engine optimization and digital marketing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
                <Progress 
                  value={skill.level} 
                  className="h-2 bg-gray-200"
                  indicatorClassName="bg-gradient-to-r from-seo-blue to-seo-purple"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certifications Section - Redesigned */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-seo-blue to-seo-purple bg-clip-text text-transparent">Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-seo-blue to-seo-purple mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Continuous professional development through industry-recognized certifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert) => (
              <Card 
                key={cert.id} 
                className="bg-white border-l-4 border-l-seo-purple hover:border-l-seo-blue transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <CardContent className="p-5">
                  <div className="mb-2 flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-800">{cert.title}</h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500">{cert.issuer}</span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{cert.year}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{cert.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
