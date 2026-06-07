import { useState, useEffect } from 'react';

export const useScreenWidth = (delay: number = 150): number => {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let inThrottle = false;

    const handleResize = () => {
      if (!inThrottle) {
        setWindowWidth(window.innerWidth);
        inThrottle = true;
        
        setTimeout(() => {
          setWindowWidth(window.innerWidth);
          inThrottle = false;
        }, delay);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [delay]);

  return windowWidth;
};