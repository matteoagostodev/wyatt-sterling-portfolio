
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Award, BookOpen, Briefcase, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ExperienceCard, { Experience } from '../components/ExperienceCard';
import CustomCursor from '../components/CustomCursor';
import { Progress } from '../components/ui/progress';
import { Card, CardContent } from '../components/ui/card';

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
      
      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-seo-blue to-seo-purple mx-auto mb-4"></div>
            <p className="text-gray-600">
              A decade of experience in SEO strategy, implementation, and optimization across diverse industries and business models.
            </p>
          </div>
          
          <div className="space-y-12 max-w-4xl mx-auto">
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
                />
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
            <div className="w-20 h-1 bg-gradient-to-r from-seo-blue to-seo-purple mx-auto mb-4"></div>
            <p className="text-gray-600">
              Continuous learning and professional development through industry-recognized certifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {certifications.map((certification) => (
              <Card 
                key={certification.id} 
                className="bg-white border-0 shadow-md hover:shadow-xl transition-all hover:translate-y-[-5px]"
              >
                <CardContent className="p-6">
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
