import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const frameModules = import.meta.glob<{ default: string }>(
  '/src/assets/laptop-frames/*.jpg',
  { eager: true }
);

const frameUrls = Object.keys(frameModules)
  .sort((first, second) => {
    const firstNumber = Number(first.match(/(\d+)(?=\.jpg$)/)?.[1] ?? 0);
    const secondNumber = Number(second.match(/(\d+)(?=\.jpg$)/)?.[1] ?? 0);
    return firstNumber - secondNumber;
  })
  .map((path) => frameModules[path].default);

const clamp = (value: number, minimum: number, maximum: number) =>
  Math.min(Math.max(value, minimum), maximum);

/**
 * A fixed canvas between the existing site background and content. Its playhead
 * is owned solely by the document ScrollTrigger, so scrolling upward reverses
 * the supplied frame sequence without a timer, loop, or video element.
 */
export function LaptopScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);

  useEffect(() => {
    let disposed = false;
    let animId: number | null = null;

    // Preload all 50 frames into memory
    const frames = frameUrls.map((source) => {
      const image = new Image();
      image.decoding = 'async';
      image.src = source;
      return image;
    });

    framesRef.current = frames;

    const renderFrame = () => {
      if (disposed) return;

      // Smooth lerp for liquid 60 FPS Apple scroll feel
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.0001) {
        currentProgressRef.current += diff * 0.15;
      } else {
        currentProgressRef.current = targetProgressRef.current;
      }

      const canvas = canvasRef.current;
      if (!canvas) {
        animId = requestAnimationFrame(renderFrame);
        return;
      }

      const context = canvas.getContext('2d', { alpha: true });
      if (!context) {
        animId = requestAnimationFrame(renderFrame);
        return;
      }

      const isMobile = window.innerWidth < 768;
      const pixelRatio = Math.min(
        window.devicePixelRatio || 1,
        isMobile ? 1 : 1.5
      );
      const width = Math.max(1, Math.round(window.innerWidth * pixelRatio));
      const height = Math.max(1, Math.round(window.innerHeight * pixelRatio));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      const availableFrames = framesRef.current;
      if (availableFrames.length > 0) {
        const rawProgress = clamp(currentProgressRef.current, 0, 1);
        const frameIndex = Math.round(rawProgress * (availableFrames.length - 1));

        let frame = availableFrames[frameIndex];

        // Fallback to nearest loaded frame if target frame is preloading
        if (!frame?.complete || frame.naturalWidth === 0) {
          let closestFrame: HTMLImageElement | null = null;
          let minDist = Infinity;
          for (let i = 0; i < availableFrames.length; i++) {
            const candidate = availableFrames[i];
            if (candidate.complete && candidate.naturalWidth > 0) {
              const dist = Math.abs(i - frameIndex);
              if (dist < minDist) {
                minDist = dist;
                closestFrame = candidate;
              }
            }
          }
          if (closestFrame) frame = closestFrame;
        }

        if (frame?.complete && frame.naturalWidth > 0) {
          context.clearRect(0, 0, width, height);
          context.imageSmoothingEnabled = true;
          context.imageSmoothingQuality = 'high';

          const scale = isMobile
            ? Math.max(width / frame.naturalWidth, (height * 0.85) / frame.naturalHeight)
            : Math.max(width / frame.naturalWidth, height / frame.naturalHeight);

          const drawWidth = frame.naturalWidth * scale;
          const drawHeight = frame.naturalHeight * scale;

          const floatOffset = Math.sin(currentProgressRef.current * Math.PI * 2) * (isMobile ? 6 : 12);

          context.drawImage(
            frame,
            (width - drawWidth) / 2,
            (height - drawHeight) / 2 + floatOffset,
            drawWidth,
            drawHeight
          );

          // Subtle contrast tint preserving 3D frame vibrancy and content readability
          context.fillStyle = 'rgba(3, 7, 18, 0.12)';
          context.fillRect(0, 0, width, height);
        }
      }

      animId = requestAnimationFrame(renderFrame);
    };

    // Calculate exact document scroll progress
    const calculateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      targetProgressRef.current = clamp(scrollTop / maxScroll, 0, 1);
    };

    calculateProgress();

    // GSAP ScrollTrigger integration
    const trigger = ScrollTrigger.create({
      trigger: document.documentElement,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        targetProgressRef.current = self.progress;
      },
    });

    const handleScroll = () => {
      calculateProgress();
    };

    const handleResize = () => {
      ScrollTrigger.refresh();
      calculateProgress();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Start 60 FPS RAF loop
    animId = requestAnimationFrame(renderFrame);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
      calculateProgress();
    }, 200);

    return () => {
      disposed = true;
      clearTimeout(refreshTimer);
      trigger.kill();
      if (animId !== null) cancelAnimationFrame(animId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="laptop-scroll-canvas fixed inset-0 z-[1] pointer-events-none overflow-hidden"
      style={{
        willChange: 'transform',
        transform: 'translate3d(0, 0, 0)',
      }}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="h-full w-full block"
        style={{
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
        }}
      />
    </div>
  );
}
