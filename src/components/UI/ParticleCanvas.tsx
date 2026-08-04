import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseSize: number;
  alpha: number;
  color: string;
  pulseSpeed: number;
}

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  twinkleSpeed: number;
}

interface FloatingSymbol {
  x: number;
  y: number;
  vy: number;
  symbol: string;
  alpha: number;
  size: number;
}

interface Streak {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
}

export const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 1. Initialize Particles
    const particleCount = Math.min(Math.floor(width / 18), 70);
    const particles: Particle[] = [];
    const colors = ['#00d2ff', '#3b82f6', '#6366f1', '#38bdf8', '#818cf8'];

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 2.5 + 1;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size,
        baseSize: size,
        alpha: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    // 2. Initialize Tiny Stars
    const starCount = 60;
    const stars: Star[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.8 + 0.1,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
      });
    }

    // 3. Floating Code Symbols
    const codeSymbols = ['{ }', '</>', '=>', 'const', 'import', 'fn()', 'async', '01'];
    const floatingSymbols: FloatingSymbol[] = [];
    for (let i = 0; i < 14; i++) {
      floatingSymbols.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vy: -(Math.random() * 0.3 + 0.1),
        symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
        alpha: Math.random() * 0.25 + 0.08,
        size: Math.random() * 4 + 10,
      });
    }

    // 4. Moving Light Streaks
    const streaks: Streak[] = [];
    for (let i = 0; i < 3; i++) {
      streaks.push({
        x: Math.random() * width,
        y: Math.random() * (height / 2),
        length: Math.random() * 120 + 80,
        speed: Math.random() * 1.5 + 0.8,
        angle: Math.PI / 6,
        alpha: Math.random() * 0.3 + 0.1,
      });
    }

    let time = 0;

    // Render loop
    const render = () => {
      time += 0.01;

      // Smooth mouse movement
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // A. Render Animated Gradient Mesh & Aurora Glow in Background
      const auroraGradient = ctx.createRadialGradient(
        width * 0.5 + Math.sin(time * 0.5) * 100,
        height * 0.3 + Math.cos(time * 0.3) * 80,
        50,
        width * 0.5,
        height * 0.3,
        width * 0.6
      );
      auroraGradient.addColorStop(0, 'rgba(0, 210, 255, 0.06)');
      auroraGradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.03)');
      auroraGradient.addColorStop(1, 'rgba(3, 7, 18, 0)');
      ctx.fillStyle = auroraGradient;
      ctx.fillRect(0, 0, width, height);

      // B. Mouse Reactive Glow
      if (mouseRef.current.x > 0) {
        const mouseGlow = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          350
        );
        mouseGlow.addColorStop(0, 'rgba(0, 210, 255, 0.09)');
        mouseGlow.addColorStop(0.5, 'rgba(99, 102, 241, 0.03)');
        mouseGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = mouseGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // C. Render Stars (Twinkling)
      stars.forEach((star) => {
        star.alpha += Math.sin(time * 3 + star.x) * star.twinkleSpeed;
        const clampedAlpha = Math.max(0.1, Math.min(0.9, star.alpha));
        ctx.fillStyle = `rgba(255, 255, 255, ${clampedAlpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // D. Render Floating Code Symbols
      ctx.font = '11px monospace';
      floatingSymbols.forEach((sym) => {
        sym.y += sym.vy;
        if (sym.y < -20) {
          sym.y = height + 20;
          sym.x = Math.random() * width;
        }
        ctx.fillStyle = `rgba(0, 210, 255, ${sym.alpha})`;
        ctx.fillText(sym.symbol, sym.x, sym.y);
      });

      // E. Render Moving Light Streaks
      streaks.forEach((streak) => {
        streak.x += Math.cos(streak.angle) * streak.speed;
        streak.y += Math.sin(streak.angle) * streak.speed;

        if (streak.x > width + 100 || streak.y > height + 100) {
          streak.x = -100;
          streak.y = Math.random() * (height / 2);
        }

        const streakGrad = ctx.createLinearGradient(
          streak.x,
          streak.y,
          streak.x - Math.cos(streak.angle) * streak.length,
          streak.y - Math.sin(streak.angle) * streak.length
        );
        streakGrad.addColorStop(0, `rgba(0, 210, 255, ${streak.alpha})`);
        streakGrad.addColorStop(1, 'transparent');

        ctx.strokeStyle = streakGrad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(streak.x, streak.y);
        ctx.lineTo(
          streak.x - Math.cos(streak.angle) * streak.length,
          streak.y - Math.sin(streak.angle) * streak.length
        );
        ctx.stroke();
      });

      // F. Render Particles and Constellation Lines
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse displacement effect
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          const force = (140 - dist) / 140;
          p.x -= (dx / dist) * force * 1.2;
          p.y -= (dy / dist) * force * 1.2;
        }

        // Draw particle
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;

        // Draw glowing lines to nearby particles
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pdx = p.x - p2.x;
          const pdy = p.y - p2.y;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

          if (pdist < 130) {
            const lineAlpha = (1 - pdist / 130) * 0.18;
            ctx.strokeStyle = `rgba(0, 210, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 bg-[#030712]"
      style={{ opacity: 0.95 }}
    />
  );
};
