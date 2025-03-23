
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <a 
              href="#home"
              className="font-display text-2xl font-semibold"
            >
              Mahati Enterprises<span className="font-bold text-secondary/90">.</span>
            </a>
            <p className="mt-4 text-primary-foreground/80 max-w-md">
              Mahati Enterprises delivers premium B2B clothing refinishing solutions and professional services tailored to elevate your business operations.
            </p>
            
            {/* Contact Information */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 opacity-70" />
                <a href="mailto:mahatienterprises09@gmail.com" className="text-primary-foreground/90 hover:text-primary-foreground">
                  mahatienterprises09@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 opacity-70" />
                <span className="text-primary-foreground/90">
                  +91 7975414686, +91 9380114195
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover-underline text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Garment Refinishing', 
                'Manpower Supply', 
                'Gardening', 
                'House Keeping',
                'Loading Services', 
                'Security'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover-underline text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 py-6 flex flex-wrap items-center justify-between gap-y-4">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Mahati Enterprises. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className={cn(
              "inline-flex items-center justify-center",
              "p-3 rounded-full bg-primary-foreground/10",
              "text-primary-foreground hover:bg-primary-foreground/20",
              "transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-primary-foreground/20"
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
