import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

export const Card: React.FC<CardProps> = ({ className, glass = false, children, ...props }) => {
  return (
    <div
      className={cn(
        'rounded-3xl p-6 transition-all',
        glass 
          ? 'bg-white/40 backdrop-blur-xl border border-white/20 shadow-lg' 
          : 'bg-white shadow-sm border border-slate-100',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
