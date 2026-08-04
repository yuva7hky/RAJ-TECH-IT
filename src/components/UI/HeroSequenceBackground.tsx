import React, { useEffect, useRef } from 'react';
import { useMouseParallax } from '../../hooks/useMouseParallax';

const frameModules = import.meta.glob<{ default: string }>('/src/assets/hero-sequence/*.jpg', { eager: true });

const sortedFrameUrls = Object.keys(frameModules)
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)?.[0] || '0', 10);
    const numB = parseInt(b.match(/\d+/)?.[0] || '0', 10);
    return numA - numB;
  })
  .map((key) => frameModules[key].default);

interface HeroSequenceBackgroundProps {
  scrollProgress: number; // 0.0 to 1.0 driven by GSAP ScrollTrigger
}

export const HeroSequenceBackground: React.FC<HeroSequenceBackgroundProps> = ({ scrollProgress }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useMouseParallax();
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const isLoadedRef = useRef(false);

  // Preload frames
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    sortedFrameUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount++;
        if (loadedCount >= 3) {
          isLoadedRef.current = true;
        }
      };
      images.push(img);
    });

    imagesRef.current = images;
  }, []);

  // Draw frame on canvas whenever scrollProgress or mouse updates
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const render = () => {
      const width = (canvas.width = window.innerWidth);
      const height = (canvas.height = window.innerHeight);

      ctx.clearRect(0, 0, width, height);

      const images = imagesRef.current;
      const totalFrames = images.length;

      if (totalFrames > 0) {
        // Map 0..1 scrollProgress to 0..(totalFrames - 1)
        const framePos = Math.max(0, Math.min(totalFrames - 1, scrollProgress * (totalFrames - 1)));
        const indexA = Math.floor(framePos);
        const indexB = Math.min(totalFrames - 1, Math.ceil(framePos));
        const alpha = framePos - indexA;

        const imgA = images[indexA];
        const imgB = images[indexB];

        // Parallax offset
        const parallaxX = mouse.x * 20;
        const parallaxY = mouse.y * 15;

        // Subtle scale pulse mapped to scroll
        const scaleFactor = 1.0 + scrollProgress * 0.06;

        // Helper function for aspect ratio cover positioning
        const drawFrame = (img: HTMLImageElement | undefined, opacity: number) => {
          if (!img || !img.complete || img.naturalWidth === 0) return;

          const imgW = img.naturalWidth;
          const imgH = img.naturalHeight;
          const scale = Math.max(width / imgW, height / imgH) * scaleFactor;

          const drawW = imgW * scale;
          const drawH = imgH * scale;

          const drawX = (width - drawW) / 2 + parallaxX;
          const drawY = (height - drawH) / 2 + parallaxY;

          ctx.save();
          ctx.globalAlpha = opacity;
          ctx.drawImage(img, drawX, drawY, drawW, drawH);
          ctx.restore();
        };

        // Frame A
        drawFrame(imgA, 1 - alpha);

        // Frame B blend
        if (indexA !== indexB) {
          drawFrame(imgB, alpha);
        }
      }

      // Vignette Overlay for readability & dark luxury feel
      const vignette = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        width * 0.2,
        width * 0.5,
        height * 0.5,
        width * 0.8
      );
      vignette.addColorStop(0, 'rgba(3, 7, 18, 0.45)');
      vignette.addColorStop(0.65, 'rgba(3, 7, 18, 0.82)');
      vignette.addColorStop(1, 'rgba(3, 7, 18, 0.96)');

      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      // Cyan / Blue Atmospheric Backlight Beam
      const cyanBeam = ctx.createLinearGradient(0, 0, 0, height);
      cyanBeam.addColorStop(0, 'rgba(0, 210, 255, 0.06)');
      cyanBeam.addColorStop(0.5, 'transparent');
      cyanBeam.addColorStop(1, 'rgba(3, 7, 18, 0.98)');

      ctx.fillStyle = cyanBeam;
      ctx.fillRect(0, 0, width, height);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [scrollProgress, mouse.x, mouse.y]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
