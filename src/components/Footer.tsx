
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-background/90 backdrop-blur-sm border-t border-primary/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:mahatienterprises09@gmail.com" className="flex items-center hover:text-primary transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              mahatienterprises09@gmail.com
            </a>
            <div className="hidden md:block h-4 w-px bg-border"></div>
            <a href="tel:+917975414686" className="flex items-center hover:text-primary transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              For Enquiries: +91 7975414686, +91 9380114195
            </a>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">2025@MahatiEnterprises</p>
          </div>

          <button 
            onClick={scrollToTop}
            className={cn(
              "rounded-full p-2 bg-primary/10 hover:bg-primary/20 transition-colors",
              "text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            )}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
