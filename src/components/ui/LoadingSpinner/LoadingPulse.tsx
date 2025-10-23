'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LoadingPulseProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'white' | 'gray';
  className?: string;
}

const LoadingPulse: React.FC<LoadingPulseProps> = ({ 
  size = 'md', 
  color = 'primary',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const colorClasses = {
    primary: 'bg-primary-600',
    white: 'bg-white',
    gray: 'bg-gray-600'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <motion.div
        className={`absolute inset-0 ${colorClasses[color]} rounded-full opacity-75`}
        animate={{
          scale: [1, 2, 2, 1, 1],
          opacity: [1, 0, 0, 1, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className={`absolute inset-0 ${colorClasses[color]} rounded-full opacity-75`}
        animate={{
          scale: [1, 1, 2, 2, 1],
          opacity: [1, 1, 0, 0, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
};

export default LoadingPulse;