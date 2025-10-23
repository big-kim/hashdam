import { useEffect, useState } from 'react';

interface UseCountAnimationOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
}

/**
 * 숫자 카운트 애니메이션 훅
 */
export const useCountAnimation = ({
  start = 0,
  end,
  duration = 2000,
  delay = 0
}: UseCountAnimationOptions) => {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = Date.now() + delay;
    const endTime = startTime + duration;

    const timer = setInterval(() => {
      const now = Date.now();
      
      if (now < startTime) return;
      
      if (now >= endTime) {
        setCount(end);
        clearInterval(timer);
        return;
      }

      const progress = (now - startTime) / duration;
      const easeOutQuad = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(start + (end - start) * easeOutQuad);
      
      setCount(currentCount);
    }, 16);

    return () => clearInterval(timer);
  }, [start, end, duration, delay, hasStarted]);

  return { count, startAnimation: () => setHasStarted(true) };
};



