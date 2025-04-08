
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "@/components/ui/drawer";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  // Close menu when clicking a navigation link
  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  const navItems = [
    { title: 'Home', href: '#home' },
    { title: 'Services', href: '#services' },
    { title: 'About', href: '#about' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-10 transition-all duration-300',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home"
          className="font-display text-2xl font-semibold"
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

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors z-50 relative"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          {isOpen && (
            <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} style={{top: 0, left: 0, right: 0, bottom: 0, position: 'fixed'}} />
          )}
          
          <div 
            className={cn(
              "fixed top-0 right-0 h-full w-[75%] max-w-[280px] bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out",
              isOpen ? "translate-x-0" : "translate-x-full"
            )}
            style={{top: 0, bottom: 0, right: 0, position: 'fixed'}}
          >
            <div className="flex flex-col h-full p-6 pt-20">
              <nav className="flex-1">
                <ul className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <li key={item.title} className="border-b border-primary/10 pb-4">
                      <a
                        href={item.href}
                        className="flex items-center text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                        onClick={handleMenuItemClick}
                      >
                        <span className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        </span>
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              
              <div className="mt-auto pt-6 border-t border-primary/10">
                <div className="text-sm text-muted-foreground">
                  <div className="font-medium text-primary/80 mb-2">© 2025 Mahati Enterprises</div>
                  <div className="text-xs opacity-70">Professional B2B Services</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
