import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { Button } from '../UI/Button';

export const Hero: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={wrapperRef} className="relative w-full h-[280vh]">
      <section
        ref={heroRef}
        id="hero"
        className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden bg-transparent z-10"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[550px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none" />

        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(0, 210, 255, 0.4) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto pt-24 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-start mb-6"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/40 backdrop-blur-md shadow-[0_0_20px_rgba(0,210,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-mono text-cyan-300 font-medium tracking-wide">
                Transforming Ideas Into Digital Reality
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-6 space-y-6 text-left relative">
              <div className="absolute -inset-4 bg-slate-950/40 backdrop-blur-[2px] rounded-3xl border border-slate-800/30 -z-10 pointer-events-none" />

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white"
              >
                We Build{' '}
                <span className="text-gradient-cyan drop-shadow-[0_0_35px_rgba(0,210,255,0.5)]">
                  Handcrafted Software
                </span>{' '}
                That Defines Premium Brands.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal"
              >
                <strong className="text-white font-semibold">RAJ TECH SOLUTIONS</strong> creates world-class web applications, AI integration, and custom digital platforms engineered for luxury aesthetics and 60 FPS performance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <a href="#contact">
                  <Button size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                    Start Your Project
                  </Button>
                </a>
                <a href="#projects">
                  <Button variant="secondary" size="lg" icon={<Play className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />}>
                    Explore Showcase Work
                  </Button>
                </a>
              </motion.div>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Founder: YUVARAJ.M
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 100% Custom Architecture
                </span>
              </div>
            </div>

            {/* Preserves the approved hero grid while leaving the canvas laptop unobstructed. */}
            <div className="lg:col-span-6 min-h-[440px] sm:min-h-[480px]" aria-hidden="true" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 sm:mt-16 glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
              <div className="pt-4 md:pt-0">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-1 tracking-tight">10<span className="text-cyan-400">+</span></div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Projects Completed</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-1 tracking-tight">100<span className="text-cyan-400">%</span></div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Client Satisfaction</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-1 tracking-tight">60<span className="text-cyan-400">FPS</span></div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Fluid Animations</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-1 tracking-tight">24<span className="text-cyan-400">/7</span></div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">SLA Engineering Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
