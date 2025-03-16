
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 flex items-center relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Content */}
          <div className="order-2 lg:order-1">
            <AnimatedSection animation="fade-in">
              <div className="inline-block mb-4 bg-secondary px-3 py-1 rounded-full">
                <span className="text-xs font-medium uppercase tracking-wide text-primary/80">
                  B2B Clothing Solutions
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-left" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight md:leading-tight lg:leading-tight mb-6">
                Crafting Excellence in <span className="text-primary relative">B2B Apparel</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={200}>
              <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8">
                Elevating businesses through premium apparel solutions, manpower services, and exceptional contractor support.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#services"
                  className={cn(
                    "inline-flex items-center justify-center rounded-md",
                    "bg-primary text-primary-foreground",
                    "px-6 py-3 font-medium",
                    "transition-all duration-200 ease-out-expo",
                    "hover:shadow-lg hover:shadow-primary/10",
                    "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                  )}
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className={cn(
                    "inline-flex items-center justify-center rounded-md",
                    "border border-primary/10 bg-background",
                    "px-6 py-3 font-medium text-primary",
                    "hover:bg-primary/5 transition-colors",
                    "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                  )}
                >
                  Contact Us
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative">
            <AnimatedSection animation="scale-in" delay={400}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/5">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Premium clothing materials and manufacturing"
                  className="w-full h-auto object-cover transform transition-transform duration-7000 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
