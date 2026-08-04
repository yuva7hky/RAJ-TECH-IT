import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      setIsScrolled(currentScroll > 40);

      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollProgress, isScrolled };
}
