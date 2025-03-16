
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'slide-in-right' | 'slide-in-left' | 'scale-in' | 'blur-in';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className,
  delay = 0,
  animation = 'fade-in'
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
          
          // Once the animation is triggered, we don't need to observe anymore
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when at least 10% of the element is visible
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
  }, [delay]);

  const animationClass = isVisible ? `animate-${animation}` : 'opacity-0';

  return (
    <div
      ref={sectionRef}
      className={cn(
        animationClass,
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
