import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Rocket, Sparkles, Layers, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { GlassCard } from '../UI/GlassCard';

export const ScrollStory: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const storySteps = [
    {
      id: 'step-1',
      num: '01',
      title: 'Hero Architectural Blueprint',
      subtitle: 'Laptop Rotates & Code Compiles',
      desc: 'Raw architectural ideas translate into modular TypeScript and React component blueprints.',
      icon: Cpu,
      snippet: `const vision = new VisionEngine({
  founder: "YUVARAJ.M",
  company: "RAJ TECH SOLUTIONS",
  scalability: "Infinite"
});`,
      badge: 'ARCHITECTURAL PHASE',
    },
    {
      id: 'step-2',
      num: '02',
      title: 'Browser Opens & Building Starts',
      subtitle: 'Source Code to Dynamic UI',
      desc: 'Components hydrate, Framer Motion graphics layer, and glassmorphic UI cards render at 60 FPS.',
      icon: Layers,
      snippet: `<GlassCard glow="cyan-500">
  <ResponsiveGrid items={services} />
  <GSAPAnimationTrigger scrollTarget="#projects" />
</GlassCard>`,
      badge: 'BUILD & RENDER PHASE',
    },
    {
      id: 'step-3',
      num: '03',
      title: 'Dashboard & Platform Deployment',
      subtitle: 'Real-Time Telemetry & SLA',
      desc: 'Live analytics dashboard mounts with cloud microservices, vector DB search, and automated CI/CD.',
      icon: Rocket,
      snippet: `const deploy = await Cloud.launch({
  status: 'LIVE_PRODUCTION',
  lighthouseScore: 99,
  uptimeSLA: '99.99%'
});`,
      badge: 'PRODUCTION RELEASE',
    },
  ];

  return (
    <section id="scroll-story" className="relative py-28 bg-transparent overflow-hidden border-y border-slate-800/80">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-600/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connected Scroll Storytelling</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            How Ideas Transform Into{' '}
            <span className="text-gradient-cyan">Digital Products</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Follow the continuous engineering journey from initial rotating 3D laptop concepts to production-grade software.
          </p>
        </div>

        {/* 3 Step Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {storySteps.map((step, idx) => {
            const IconComponent = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_30px_rgba(0,210,255,0.4)] border border-cyan-300/40 scale-105'
                    : 'bg-slate-900/90 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{step.num}. {step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Story Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Explanation Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 25 }}
                transition={{ duration: 0.4 }}
                className="space-y-5"
              >
                <span className="inline-block text-[11px] font-mono font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
                  {storySteps[activeStep].badge}
                </span>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {storySteps[activeStep].title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {storySteps[activeStep].desc}
                </p>

                <div className="pt-2 space-y-2 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Pixel-Perfect Component Architecture</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>60 FPS Fluid GSAP & Framer Physics</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Enterprise Security & High-Yield UX</span>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-white transition-colors"
                  >
                    <span>View Resulting Work in Showcase</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Live Visual Render Sandbox (7 Cols) */}
          <div className="lg:col-span-7">
            <GlassCard className="p-0 overflow-hidden border-cyan-500/30 shadow-[0_0_36px_rgba(0,210,255,0.12)]">
              
              {/* Window Bar */}
              <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                </div>
                <span className="text-xs font-mono text-slate-400">
                  rajtech-pipeline-stage-{storySteps[activeStep].num}.app
                </span>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                  LIVE COMPILATION
                </span>
              </div>

              {/* Window Content */}
              <div className="p-6 sm:p-8 bg-slate-950/95 min-h-[300px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-6"
                  >
                    <pre className="p-5 rounded-xl bg-slate-900/90 font-mono text-xs sm:text-sm text-cyan-300 border border-slate-800 overflow-x-auto shadow-inner">
                      {storySteps[activeStep].snippet}
                    </pre>

                    {/* Stage Status Display Box */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/50 via-cyan-950/40 to-slate-950 border border-cyan-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 border border-cyan-500/40">
                          <Monitor className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Pipeline Execution Status</div>
                          <div className="text-[11px] text-slate-400">All tests passed & modules hydrated</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded">
                        100% READY
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};
