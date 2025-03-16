
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'slide-in-right' | 'slide-in-left' | 'scale-in' | 'blur-in';
  once?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className,
  delay = 0,
  animation = 'fade-in',
  once = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay before triggering the animation
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          // Once the animation is triggered, we don't need to observe anymore - if once is true
          if (sectionRef.current && once) {
            observer.unobserve(sectionRef.current);
          }
        } else if (!once) {
          // If once is false, hide element when out of view
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when at least 15% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay, once]);

  // Define animation classes based on the selected animation
  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animation) {
      case 'fade-in':
        return 'animate-fade-in';
      case 'slide-in-right':
        return 'animate-slide-in-right';
      case 'slide-in-left':
        return 'animate-slide-in-left';
      case 'scale-in':
        return 'animate-scale-in';
      case 'blur-in':
        return 'animate-blur-in';
      default:
        return 'animate-fade-in';
    }
  };

  return (
    <div
      ref={sectionRef}
      className={cn(
        getAnimationClass(),
        'will-change-transform',
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
