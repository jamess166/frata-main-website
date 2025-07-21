
"use client"

import { useEffect, useState, useRef } from 'react';

export function useCountUp(end: number, duration = 2000, startAnimation: boolean): number {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!startAnimation) {
      return;
    }

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);
      
      // Ease out function
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedPercentage = easeOut(percentage);

      const currentCount = Math.floor(easedPercentage * end);
      
      setCount(currentCount);

      if (progress < duration) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure it ends exactly at the target
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      startTimeRef.current = null;
    };
  }, [end, duration, startAnimation]);

  return count;
}
