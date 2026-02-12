import { useState, useEffect, useRef } from 'react';

export const useCountUp = (end: number, duration: number = 1000) => {
  const [count, setCount] = useState(0);
  const startRef = useRef(0);
  const requestRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    // Determine start value (current displayed value)
    const startValue = startRef.current;
    startTimeRef.current = 0;
    
    // If values are identical, no need to animate
    if (startValue === end) {
        return;
    }

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) startTimeRef.current = currentTime;
      const progress = currentTime - startTimeRef.current;
      
      // Ease out quartic function
      const easeOutQuart = (x: number): number => {
        return 1 - Math.pow(1 - x, 4);
      };

      const percentage = Math.min(progress / duration, 1);
      const ease = easeOutQuart(percentage);
      
      const currentCount = startValue + (end - startValue) * ease;
      
      setCount(currentCount);
      startRef.current = currentCount; // Update ref to keep track of current animation state

      if (progress < duration) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure exact end value
        startRef.current = end;
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [end, duration]);

  return count;
};