'use client';

import { useEffect, useRef } from 'react';
import { useLenis } from './useLenis';

type ScrollAnimationProps = {
  threshold?: number;
  onScroll?: (progress: number) => void;
  onInView?: () => void;
};

export function useScrollAnimation<T extends HTMLElement>({ threshold = 0.2, onScroll, onInView }: ScrollAnimationProps = {}) {
  const elementRef = useRef<T>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (!elementRef.current || !lenis) return;

    const element = elementRef.current;
    let wasInView = false;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the element is visible
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const elementHeight = rect.height;
      const progress = Math.max(0, Math.min(1, visibleHeight / elementHeight));
      
      // Element is considered in view when it's above the threshold
      const isInView = progress > threshold;

      // Call onScroll with the progress
      if (onScroll) {
        onScroll(progress);
      }

      // Call onInView only once when element first comes into view
      if (isInView && !wasInView && onInView) {
        onInView();
        wasInView = true;
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    lenis.on('scroll', handleScroll);

    return () => {
      lenis.off('scroll', handleScroll);
    };
  }, [lenis, threshold, onScroll, onInView]);

  return elementRef;
} 