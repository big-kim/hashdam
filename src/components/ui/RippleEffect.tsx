'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RippleProps {
  children: React.ReactNode;
  className?: string;
  rippleColor?: string;
  duration?: number;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export const RippleEffect: React.FC<RippleProps> = ({
  children,
  className = '',
  rippleColor = 'rgba(255, 255, 255, 0.6)',
  duration = 600,
  disabled = false,
  onClick,
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = useCallback((event: React.MouseEvent) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const newRipple: Ripple = {
      id: Date.now(),
      x,
      y,
    };

    setRipples(prev => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, duration);

    // Call original onClick if provided
    if (onClick) {
      onClick(event);
    }
  }, [duration, onClick]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onClick={disabled ? onClick : createRipple}
      style={{ cursor: disabled ? 'default' : 'pointer' }}
    >
      {children}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              backgroundColor: rippleColor,
            }}
            initial={{
              width: 0,
              height: 0,
              opacity: 0.8,
            }}
            animate={{
              width: 200,
              height: 200,
              opacity: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: duration / 1000,
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default RippleEffect;