import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website: string;
  budget: string;
  service: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  website: "",
  budget: "",
  service: "Technical SEO"
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateStep = (step: number) => {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.subject) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive"
        });
        return false;
      }
      // Basic email validation
      if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        toast({
          title: "Invalid Email",
          description: "Please enter a valid email address.",
          variant: "destructive"
        });
        return false;
      }
    } else if (step === 2) {
      if (!formData.website || !formData.service || !formData.budget) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive"
        });
        return false;
      }
    }
    return true;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData(initialFormData);
      setCurrentStep(1);
    }, 1500);
  };

  return (
    <>
      <CustomCursor />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Let's Connect</h1>
            <p className="text-lg text-gray-600 mb-6">
              Have a project in mind or questions about how SEO can help your business? I'm here to help you navigate the complexities of search optimization.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section - Centered */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Updated grid to center the form */}
          <div className="flex justify-center">
            {/* Contact Form - Now centered */}
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                
                <form onSubmit={handleSubmit}>
                  {/* Progress Indicator */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <div 
                        className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          currentStep >= 1 ? 'bg-seo-blue text-white' : 'bg-gray-200 text-gray-500'
                        }`}
                      >
                        1
                      </div>
                      <div className={`h-1 flex-grow mx-2 ${currentStep >= 2 ? 'bg-seo-blue' : 'bg-gray-200'}`}></div>
                      <div 
                        className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          currentStep >= 2 ? 'bg-seo-blue text-white' : 'bg-gray-200 text-gray-500'
                        }`}
                      >
                        2
                      </div>
                      <div className={`h-1 flex-grow mx-2 ${currentStep >= 3 ? 'bg-seo-blue' : 'bg-gray-200'}`}></div>
                      <div 
                        className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          currentStep >= 3 ? 'bg-seo-blue text-white' : 'bg-gray-200 text-gray-500'
                        }`}
                      >
                        3
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Personal Info</span>
                      <span>Project Details</span>
                      <span>Message</span>
                    </div>
                  </div>
                  
                  {/* Step 1: Basic Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="contact-field"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="contact-field"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="contact-field"
                          placeholder="Your phone number (optional)"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="contact-field"
                          placeholder="What is your message about?"
                          required
                        />
                      </div>
                      
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="px-6 py-3 bg-seo-blue text-white rounded-lg font-medium hover:bg-seo-blue/90 transition-colors"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 2: Project Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                          Website URL <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          className="contact-field"
                          placeholder="https://example.com"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                          Service of Interest <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="contact-field"
                          required
                        >
                          <option value="Technical SEO">Technical SEO</option>
                          <option value="Content Strategy">Content Strategy</option>
                          <option value="Link Building">Link Building</option>
                          <option value="Local SEO">Local SEO</option>
                          <option value="E-commerce SEO">E-commerce SEO</option>
                          <option value="Comprehensive SEO">Comprehensive SEO</option>
                          <option value="SEO Consulting">SEO Consulting</option>
                          <option value="SEO Audit">SEO Audit</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                          Estimated Budget <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="contact-field"
                          required
                        >
                          <option value="">Select a budget range</option>
                          <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                          <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                          <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                          <option value="$10,000+">$10,000+</option>
                        </select>
                      </div>
                      
                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="px-6 py-3 bg-seo-blue text-white rounded-lg font-medium hover:bg-seo-blue/90 transition-colors"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 3: Message */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="contact-field min-h-[150px]"
                          placeholder="Tell me about your project, goals, and timeline..."
                          required
                        ></textarea>
                      </div>
                      
                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-6 py-3 bg-seo-blue text-white rounded-lg font-medium hover:bg-seo-blue/90 transition-colors flex items-center"
                        >
                          {isSubmitting ? (
                            <>
                              <span className="mr-2">Sending...</span>
                              <div className="h-5 w-5 border-t-2 border-r-2 border-white rounded-full animate-spin"></div>
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Send Message
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Get answers to common questions about SEO services, processes, and outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-3">How long does it take to see SEO results?</h3>
              <p className="text-gray-600">
                SEO is a long-term strategy. Initial improvements can be seen within 2-3 months, but significant results typically take 4-6 months, depending on your industry, competition, and starting point.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-3">Do you guarantee first-page rankings?</h3>
              <p className="text-gray-600">
                No ethical SEO professional can guarantee specific rankings as search algorithms are complex and constantly changing. I focus on sustainable strategies that deliver long-term results rather than quick, temporary fixes.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-3">What makes your SEO services different?</h3>
              <p className="text-gray-600">
                My approach combines technical expertise with creative content strategies and transparent reporting. I focus on business outcomes, not just rankings, and tailor strategies to your specific goals and industry.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-3">Do you offer one-time audits or ongoing services?</h3>
              <p className="text-gray-600">
                I offer both comprehensive SEO audits as one-time projects and ongoing SEO management services. The best option depends on your specific needs and goals, which we can discuss during a consultation.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-3">How do you report on SEO progress?</h3>
              <p className="text-gray-600">
                I provide detailed monthly reports with key metrics like rankings, traffic, conversions, and backlinks. Each report includes analysis and recommendations, and I schedule regular calls to discuss progress and strategy.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-3">What industries do you specialize in?</h3>
              <p className="text-gray-600">
                I have extensive experience across various industries including e-commerce, SaaS, professional services, healthcare, real estate, and financial services. This diverse background helps me understand different business models and needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Contact;
