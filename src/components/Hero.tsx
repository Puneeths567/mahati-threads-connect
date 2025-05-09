
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/80 -z-10"></div>
      
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03] pattern-grid pattern-size-4 pattern-square -z-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-in-left">
            <div className="max-w-2xl">
              <span className="text-sm md:text-base font-medium uppercase tracking-wider text-primary/80 mb-6 block">
                Professional B2B Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
                Mahati Enterprises
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Your premier solution for professional manpower supply services across various industries, including skilled workers, pickers, loaders, and garment refinishing specialists.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="flex items-center text-sm px-4 py-2 bg-primary/10 text-primary rounded-full">
                  <span className="mr-2 bg-primary/20 w-1.5 h-1.5 rounded-full"></span>
                  Manpower Supply
                </span>
                <span className="flex items-center text-sm px-4 py-2 bg-primary/10 text-primary rounded-full">
                  <span className="mr-2 bg-primary/20 w-1.5 h-1.5 rounded-full"></span>
                  Clothing Refinishing
                </span>
                <span className="flex items-center text-sm px-4 py-2 bg-primary/10 text-primary rounded-full">
                  <span className="mr-2 bg-primary/20 w-1.5 h-1.5 rounded-full"></span>
                  Business Solutions
                </span>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a href="#services" className={cn("inline-flex items-center justify-center rounded-md", "bg-primary text-primary-foreground", "px-6 py-3 font-medium", "transition-all duration-300 ease-out-expo", "hover:shadow-xl hover:shadow-primary/20 hover:translate-y-[-2px]", "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2")}>
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-in-right" className="hidden lg:block">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-secondary/10 p-1">
                <img 
                  src="/lovable-uploads/98f1e3e8-eb5a-4565-ac4c-594efd8224fc.png" 
                  alt="Warehouse worker operating equipment in a logistics facility" 
                  className="rounded-xl w-full h-auto object-cover aspect-[4/3]" 
                  onError={e => {
                    // Fallback to stock image if custom upload fails
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite loop
                    target.src = "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8"; // Warehouse/logistics fallback
                  }} 
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/4 -right-6 w-24 h-24 bg-primary/30 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
              <div className="absolute bottom-1/3 -left-6 w-32 h-32 bg-secondary/30 rounded-full filter blur-3xl opacity-50 animate-pulse delay-1000"></div>
              
              {/* Accent border */}
              <div className="absolute -bottom-3 -left-3 right-12 top-12 border border-primary/20 rounded-xl -z-10"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};

export default Hero;
