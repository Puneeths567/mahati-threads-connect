
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Add effect to prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { title: 'Home', href: '#home' },
    { title: 'Services', href: '#services' },
    { title: 'About', href: '#about' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home"
          className="font-display text-2xl font-semibold relative z-[60]"
        >
          Mahati
          <span className="text-primary font-bold">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="text-sm font-medium hover-underline text-primary/80 hover:text-primary"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Toggle - Increased z-index */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[60] p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        <div 
          className={cn(
            "fixed inset-0 bg-black/50 backdrop-blur-sm z-[50] transition-opacity duration-300 md:hidden",
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsOpen(false)}
        ></div>
        
        <div
          className={cn(
            'fixed inset-y-0 right-0 w-[80%] max-w-[300px] bg-white z-[55] transform transition-transform duration-300 ease-out-expo md:hidden',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex flex-col h-full pt-20 pb-8 px-6">
            <nav className="flex-1">
              <ul className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className="text-xl font-medium text-primary hover:text-primary/80 transition-colors block py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="mt-auto pt-6 border-t border-gray-100">
              <div className="text-sm text-muted-foreground">
                <div className="font-medium text-primary">For Enquiries:</div>
                <a href="tel:+917975414686" className="block mt-1 hover:text-primary transition-colors">
                  +91 7975414686
                </a>
                <a href="tel:+919380114195" className="block mt-1 hover:text-primary transition-colors">
                  +91 9380114195
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
