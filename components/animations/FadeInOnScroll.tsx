'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
}

export function FadeInOnScroll({ 
  children, 
  className,
  threshold = 0.2,
  delay = 0 
}: FadeInOnScrollProps) {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const elementRef = useScrollAnimation<HTMLDivElement>({
    threshold,
    onInView: () => {
      if (mounted) {
        setTimeout(() => setIsVisible(true), delay);
      }
    }
  });

  return (
    <div
      ref={elementRef}
      className={cn(
        'transition-all duration-1000',
        mounted && (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'),
        !mounted && 'opacity-0',
        className
      )}
    >
      {children}
    </div>
  );
} 