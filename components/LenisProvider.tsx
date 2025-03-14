'use client';

import { ReactNode } from 'react';
import { useLenis } from '@/hooks/useLenis';

interface LenisProviderProps {
  children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  useLenis();
  
  return <>{children}</>;
} 