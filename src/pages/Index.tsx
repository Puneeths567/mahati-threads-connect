
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add a custom cursor effect
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    
    document.addEventListener('mousemove', moveCursor);
    
    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .interactive');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-grow');
      });
      
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-grow');
      });
    });
    
    // Implement reveal-on-scroll animation with smoother transitions
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-on-scroll');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('is-revealed');
        }
      }
      
      // Parallax scrolling effect for sections
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const scrollY = window.scrollY;
        const sectionTop = section.offsetTop;
        if (scrollY > sectionTop - window.innerHeight && scrollY < sectionTop + section.offsetHeight) {
          const speed = index % 2 === 0 ? 0.05 : -0.05;
          const yPos = (scrollY - sectionTop) * speed;
          section.style.backgroundPositionY = `${yPos}px`;
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.pageYOffset - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Create animated background shapes
    const createShapes = () => {
      const shapeContainer = document.createElement('div');
      shapeContainer.classList.add('background-shapes');
      document.body.appendChild(shapeContainer);
      
      for (let i = 0; i < 10; i++) {
        const shape = document.createElement('div');
        shape.classList.add('floating-shape');
        shape.style.left = `${Math.random() * 100}vw`;
        shape.style.top = `${Math.random() * 100}vh`;
        shape.style.animationDelay = `${Math.random() * 5}s`;
        shape.style.animationDuration = `${10 + Math.random() * 20}s`;
        shape.style.opacity = `${0.03 + Math.random() * 0.06}`;
        shape.style.width = shape.style.height = `${30 + Math.random() * 60}px`;
        
        // Add some variety to shapes
        const shapeType = Math.floor(Math.random() * 3);
        if (shapeType === 0) {
          shape.style.borderRadius = '50%'; // Circle
        } else if (shapeType === 1) {
          shape.style.borderRadius = '10%'; // Rounded square
        } else {
          shape.style.borderRadius = '50% 10% 50% 10%'; // Organic shape
        }
        
        shapeContainer.appendChild(shape);
      }
    };
    
    createShapes();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
      const shapeContainer = document.querySelector('.background-shapes');
      if (shapeContainer) {
        document.body.removeChild(shapeContainer);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
