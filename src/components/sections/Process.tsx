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
    <section id="process" className="relative py-16 sm:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0878F9] font-mono text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Agile Engineering Pipeline</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#102A43]">
            Our 7-Step <span className="text-gradient-blue">Development Process</span>
          </h2>
          <p className="text-[#526477] text-sm sm:text-base leading-relaxed">
            From initial discovery to continuous SLA support, every project follows a structured, transparent engineering workflow.
          </p>
        </div>

        {/* 7 Step Timeline */}
        <div className="relative">
          
          {/* Vertical Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-0.5 bg-[#DCE7F1]" />

          <div className="space-y-10">
            {PROCESS_STEPS.map((step: ProcessStep, idx: number) => {
              const IconComponent = iconMap[step.iconName] || Compass;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.stepNumber}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Card Content Column */}
                  <div className="w-full lg:w-1/2">
                    <GlassCard className="p-8 border-[#DCE7F1] group">
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold text-[#0878F9] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                          STEP {step.stepNumber} — {step.duration}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0878F9] group-hover:bg-[#0878F9] group-hover:text-white transition-all shadow-xs">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="font-display font-bold text-2xl text-[#102A43] mb-1 group-hover:text-[#0878F9] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#06B6D4] font-mono font-semibold mb-3">
                        {step.subtitle}
                      </p>

                      <p className="text-[#526477] text-xs sm:text-sm leading-relaxed mb-5">
                        {step.description}
                      </p>

                      {/* Key Deliverables */}
                      <div className="space-y-2 border-t border-[#E2EBF4] pt-4">
                        <div className="text-[11px] font-mono text-[#526477] uppercase tracking-wider font-semibold mb-1">
                          Key Deliverables
                        </div>
                        {step.deliverables.map((deliv) => (
                          <div key={deliv} className="flex items-center gap-2 text-xs text-[#526477]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0878F9] shrink-0" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>

                    </GlassCard>
                  </div>

                  {/* Central Node Circle (Desktop) */}
                  <div className="hidden lg:flex shrink-0 w-12 h-12 rounded-full bg-white border-2 border-[#0878F9] text-[#0878F9] font-mono font-bold text-sm items-center justify-center shadow-md z-20">
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
