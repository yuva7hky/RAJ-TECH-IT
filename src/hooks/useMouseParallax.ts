import { useState, useEffect } from 'react';

export interface MousePosition {
  x: number; // -1 to 1
  y: number; // -1 to 1
  pixelX: number;
  pixelY: number;
}

export function useMouseParallax(): MousePosition {
  const [mousePos, setMousePos] = useState<MousePosition>({
    x: 0,
    y: 0,
    pixelX: 0,
    pixelY: 0,
  });

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normalizedX = (e.clientX / innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / innerHeight) * 2 - 1;

      animationFrameId = requestAnimationFrame(() => {
        setMousePos({
          x: Math.max(-1, Math.min(1, normalizedX)),
          y: Math.max(-1, Math.min(1, normalizedY)),
          pixelX: e.clientX,
          pixelY: e.clientY,
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return mousePos;
}
