/**
 * 애니메이션 유틸리티 함수
 * Framer Motion과 CSS 애니메이션을 위한 설정
 */

import { Variants } from 'framer-motion'

// Framer Motion 변형 설정
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

export const slideInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

export const slideInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

// Staggered children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.3,
    ease: "easeInOut" as const
  }
};

export const hoverLift = {
  y: -8,
  transition: {
    duration: 0.3,
    ease: "easeOut" as const
  }
};

export const hoverGlow = {
  boxShadow: "0 20px 40px -10px rgba(59, 76, 202, 0.3)",
  transition: {
    duration: 0.3,
    ease: "easeOut" as const
  }
};

// Menu item hover animations
export const menuItemHover = {
  scale: 1.05,
  backgroundColor: "rgba(59, 130, 246, 0.05)",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  transition: {
    duration: 0.2,
    ease: "easeOut" as const
  }
};

export const menuItemTap = {
  scale: 0.98,
  transition: {
    duration: 0.1,
    ease: "easeInOut" as const
  }
};

// Number counter animation
export const counterAnimation = (target: number, duration: number = 2) => {
  return {
    from: 0,
    to: target,
    duration: duration,
    ease: "easeOut" as const
  };
};

// Floating animation for hero section
export const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

// Rotate animation for icons
export const rotateAnimation = {
  rotate: [0, 360],
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: "linear" as const
  }
};

// Pulse animation for CTA buttons
export const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

// Enhanced pulse animation with glow effect
export const enhancedPulseAnimation = {
  scale: [1, 1.08, 1],
  boxShadow: [
    "0 4px 15px rgba(0, 170, 255, 0.2)",
    "0 8px 25px rgba(0, 170, 255, 0.4)",
    "0 4px 15px rgba(0, 170, 255, 0.2)"
  ],
  transition: {
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

// Card flip animation
export const flipCard = {
  rotateY: 180,
  transition: {
    duration: 0.6,
    ease: "easeInOut" as const
  }
};

// Intersection Observer 옵션
export const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
};

// Scroll reveal 옵션
export const scrollRevealOptions = {
  distance: "60px",
  origin: "bottom",
  duration: 800,
  delay: 200,
  easing: "cubic-bezier(0.25, 0.4, 0.25, 1)",
  opacity: 0,
  scale: 1,
  mobile: true,
  reset: false
};

// Mobile preview scroll animations
export const mobileScrollContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

export const mobileScrollItem = {
  hidden: { 
    y: 30, 
    opacity: 0,
    scale: 0.95
  },
  visible: { 
    y: 0, 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

export const mobileContentFloat = {
  y: [0, -8, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

export const mobileContentPulse = {
  scale: [1, 1.02, 1],
  transition: {
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};