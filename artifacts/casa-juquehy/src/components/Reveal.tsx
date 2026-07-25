import React from 'react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'scale-up';
  delay?: number;
}

export function Reveal({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  className, 
  ...props 
}: RevealProps) {
  const { ref, isInView } = useInView();

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0';
      case 'fade-in':
        return isInView ? 'opacity-100' : 'opacity-0';
      case 'scale-up':
        return isInView ? 'scale-100 opacity-100' : 'scale-95 opacity-0';
      default:
        return isInView ? 'opacity-100' : 'opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-1000 ease-out',
        getAnimationClass(),
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}
