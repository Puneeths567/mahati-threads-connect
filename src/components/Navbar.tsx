
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
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

        {/* Mobile Navigation - Using Sheet component */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors z-50 relative"
                aria-label="Toggle Menu"
              >
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[75%] max-w-[280px] pt-12">
              <nav className="flex-1">
                <ul className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <li key={item.title} className="border-b border-primary/10 pb-4">
                      <a
                        href={item.href}
                        className="flex items-center text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
