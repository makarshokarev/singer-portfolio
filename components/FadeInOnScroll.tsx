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
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useScrollAnimation<HTMLDivElement>({
    threshold,
    onInView: () => {
      setTimeout(() => setIsVisible(true), delay);
    }
  });

  return (
    <div
      ref={elementRef}
      className={cn(
        'transition-all duration-1000',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
    >
      {children}
    </div>
  );
} 