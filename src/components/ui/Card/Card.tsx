import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  responsive?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = true, padding = 'md', responsive = true, ...props }, ref) => {
    const paddingClasses = {
      none: '',
      sm: 'p-3 sm:p-4',
      md: 'p-4 sm:p-5 lg:p-6',
      lg: 'p-6 sm:p-7 lg:p-8',
    };

    return (
      <div
        className={cn(
          'card',
          responsive && 'card-responsive',
          hover && 'hover:-translate-y-1 hover:shadow-md transition-all duration-300',
          paddingClasses[padding],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
