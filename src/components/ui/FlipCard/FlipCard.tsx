import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FlipCardProps {
  children: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
  flipOnHover?: boolean;
  flipOnClick?: boolean;
  duration?: number;
}

const FlipCard: React.FC<FlipCardProps> = ({
  children,
  backContent,
  className,
  flipOnHover = false,
  flipOnClick = true,
  duration = 0.6
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = useCallback(() => {
    if (flipOnClick) {
      setIsFlipped(prev => !prev);
    }
  }, [flipOnClick]);

  const handleMouseEnter = useCallback(() => {
    if (flipOnHover) {
      setIsFlipped(true);
    }
  }, [flipOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (flipOnHover) {
      setIsFlipped(false);
    }
  }, [flipOnHover]);

  return (
    <div 
      data-flipped={isFlipped ? 'true' : 'false'}
      className={cn("relative w-full h-full perspective-1000 group", className)}
      onClick={handleFlip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-full h-full preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {children}
        </div>
        
        {/* Back Side */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
