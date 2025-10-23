import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    children, 
    icon,
    iconPosition = 'left',
    ...props 
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-primary-600 text-white hover:bg-primary-500 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0',
      secondary: 'border-2 border-primary-500 text-primary-500 bg-white hover:bg-primary-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0',
      outline: 'border border-borders-light text-text-secondary hover:border-primary-500 hover:text-primary-500',
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-body-sm',
      md: 'px-6 py-4 text-body-md',
      lg: 'px-8 py-4 text-body-lg',
    };
    
    const iconSizes = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
    };

    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {icon && iconPosition === 'left' && (
          <span className={cn(iconSizes[size], 'mr-2')}>{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className={cn(iconSizes[size], 'ml-2')}>{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
