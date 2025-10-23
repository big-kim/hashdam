import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, children, variant = 'primary', size = 'md', icon, ...props }, ref) => {
    const baseClasses = 'badge inline-flex items-center gap-1 font-medium rounded-sm border';
    
    const variants = {
      primary: 'border-borders-secondary text-text-link bg-white',
      secondary: 'border-borders-primary text-primary-600 bg-white',
      success: 'border-semantic-success text-semantic-success bg-background-success',
      warning: 'border-semantic-warning text-semantic-warning bg-yellow-50',
      error: 'border-semantic-error text-semantic-error bg-red-50',
    };
    
    const sizes = {
      sm: 'px-1.5 py-0.5 text-body-xs',
      md: 'px-2 py-1 text-body-xs',
      lg: 'px-3 py-1.5 text-body-sm',
    };
    
    const iconSizes = {
      sm: 'w-3 h-3',
      md: 'w-4 h-4',
      lg: 'w-5 h-5',
    };

    return (
      <span
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {icon && (
          <span className={cn(iconSizes[size])}>{icon}</span>
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
