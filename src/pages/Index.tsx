
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Enhanced custom cursor effect
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    
    document.addEventListener('mousemove', moveCursor);
    
    // Add hover effect to interactive elements with subtle delay
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .interactive');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        setTimeout(() => cursor.classList.add('cursor-grow'), 5);
      });
      
      el.addEventListener('mouseleave', () => {
        setTimeout(() => cursor.classList.remove('cursor-grow'), 5);
      });
    });
    
    // Enhanced reveal-on-scroll animation with smoother transitions
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
      
      // Enhanced parallax scrolling effect for sections
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
    
    // Smooth scrolling with easing function
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          let startTime: number | null = null;
          
          function animation(currentTime: number) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const duration = 800; // ms
            
            // Easing function: easeOutQuart
            const run = (t: number) => 1 - Math.pow(1 - t, 4);
            
            const runAnimation = run(Math.min(timeElapsed / duration, 1));
            
            window.scrollTo(0, startPosition + distance * runAnimation);
            
            if (timeElapsed < duration) {
              requestAnimationFrame(animation);
            }
          }
          
          requestAnimationFrame(animation);
        }
      });
    });
    
    // Create enhanced animated background shapes with varying sizes and opacities
    const createShapes = () => {
      const shapeContainer = document.createElement('div');
      shapeContainer.classList.add('background-shapes');
      document.body.appendChild(shapeContainer);
      
      for (let i = 0; i < 15; i++) {
        const shape = document.createElement('div');
        shape.classList.add('floating-shape');
        shape.style.left = `${Math.random() * 100}vw`;
        shape.style.top = `${Math.random() * 100}vh`;
        shape.style.animationDelay = `${Math.random() * 10}s`;
        shape.style.animationDuration = `${20 + Math.random() * 30}s`;
        shape.style.opacity = `${0.03 + Math.random() * 0.08}`;
        
        // Varied sizes for more organic feel
        const size = 30 + Math.random() * 100;
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        
        // Add variety to shapes
        const shapeType = Math.floor(Math.random() * 5);
        switch(shapeType) {
          case 0:
            shape.style.borderRadius = '50%'; // Circle
            break;
          case 1:
            shape.style.borderRadius = '10%'; // Rounded square
            break;
          case 2:
            shape.style.borderRadius = '50% 10% 50% 10%'; // Organic shape
            break;
          case 3:
            shape.style.borderRadius = '30% 70% 70% 30% / 30% 30% 70% 70%'; // Blob
            break;
          case 4:
            shape.style.borderRadius = '60% 40% 30% 70% / 60% 30% 70% 40%'; // Complex blob
            break;
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
