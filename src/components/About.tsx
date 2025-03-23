import { CheckSquare } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

const About = () => {
  const qualities = [
    "Premium B2B clothing refinishing",
    "Experienced team of professionals",
    "Quality-focused approach",
    "End-to-end service capabilities",
    "Sustainable business practices",
    "Customer-centric solutions"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
                  alt="Team at Mahati Enterprises"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-md -z-10"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 border border-primary/20 rounded-md -z-10"></div>
            </div>
          </AnimatedSection>

          <div>
            <AnimatedSection animation="fade-in">
              <span className="text-sm font-medium uppercase tracking-wide text-primary/70">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mt-2 mb-6">
                Excellence in B2B Clothing Solutions Since 2015
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={100}>
              <p className="text-muted-foreground mb-6">
                Mahati Enterprises is a premier B2B clothing business dedicated to delivering exceptional quality and service. 
                With our roots in textile excellence, we've grown to provide comprehensive business solutions.
              </p>
              <p className="text-muted-foreground mb-8">
                Our mission is to empower businesses through reliable, high-quality services and products. 
                From garment refinishing to workforce solutions, we stand as your trusted partner in business growth.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {qualities.map((quality, index) => (
                  <div key={index} className="flex items-start">
                    <CheckSquare className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="ml-2 text-sm">{quality}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <a 
                href="#contact" 
                className={cn(
                  "inline-flex items-center justify-center rounded-md",
                  "bg-primary text-primary-foreground",
                  "px-6 py-3 font-medium",
                  "transition-all duration-200 ease-out-expo",
                  "hover:shadow-lg hover:shadow-primary/10",
                  "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                )}
              >
                Get in Touch
              </a>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
