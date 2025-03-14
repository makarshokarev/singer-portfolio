'use client';

import { ReactNode, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface ScaleInProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
}

export function ScaleIn({ 
  children, 
  className,
  threshold = 0.2,
  delay = 0
}: ScaleInProps) {
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
        isVisible 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-95',
        className
      )}
    >
      {children}
    </div>
  );
} 