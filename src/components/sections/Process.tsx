import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Search, Palette, Code2, ShieldCheck, Rocket, LifeBuoy, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS, type ProcessStep } from '../../data/process';
import { GlassCard } from '../UI/GlassCard';

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Search,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  LifeBuoy,
};

export const Process: React.FC = () => {
  return (
    <section id="process" className="relative py-28 bg-transparent overflow-hidden">
      {/* Background Volumetric Beam */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Agile Timeline Pipeline</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Our 7-Step <span className="text-gradient-cyan">Development Process</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From initial discovery to continuous SLA support, every project follows a structured engineering workflow.
          </p>
        </div>

        {/* 7 Step Animated Timeline */}
        <div className="relative">
          
          {/* Vertical Connecting Energy Line (Desktop) */}
          <div className="hidden lg:block absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-400 to-indigo-600 opacity-30 pointer-events-none" />

          <div className="space-y-12">
            {PROCESS_STEPS.map((step: ProcessStep, idx: number) => {
              const IconComponent = iconMap[step.iconName] || Compass;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.stepNumber}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Card Content Column */}
                  <div className="w-full lg:w-1/2">
                    <GlassCard className="p-8 border-slate-800/90 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(0,210,255,0.2)] group transition-all duration-300">
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
                          STEP {step.stepNumber} — {step.duration}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 group-hover:border-cyan-400 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="font-display font-bold text-2xl text-white mb-1 group-hover:text-cyan-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs text-cyan-400 font-mono mb-4">
                        {step.subtitle}
                      </p>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Key Deliverables */}
                      <div className="space-y-2 border-t border-slate-800/80 pt-4">
                        <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2">Key Deliverables</div>
                        {step.deliverables.map((deliv) => (
                          <div key={deliv} className="flex items-center gap-2 text-xs text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>

                    </GlassCard>
                  </div>

                  {/* Central Node Circle (Desktop) */}
                  <div className="hidden lg:flex shrink-0 w-14 h-14 rounded-full bg-slate-950 border-2 border-cyan-400 text-cyan-400 font-mono font-bold text-sm items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.5)] z-20">
                    {step.stepNumber}
                  </div>

                  {/* Empty Spacer Column for Alignment */}
                  <div className="hidden lg:block w-1/2" />

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
