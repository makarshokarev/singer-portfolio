'use client';

import { ReactNode, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface SlideInProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  from?: 'left' | 'right';
}

export function SlideIn({ 
  children, 
  className,
  threshold = 0.2,
  delay = 0,
  from = 'left'
}: SlideInProps) {
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
        from === 'left' 
          ? isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-16'
          : isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-16',
        className
      )}
    >
      {children}
    </div>
  );
} 