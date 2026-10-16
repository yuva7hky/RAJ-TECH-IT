import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Rocket, Sparkles, Layers, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { GlassCard } from '../UI/GlassCard';
import { Link } from '../../router/Router';

export const ScrollStory: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const storySteps = [
    {
      id: 'step-1',
      num: '01',
      title: 'Architectural Blueprint',
      subtitle: 'Code Compiles & Type Safety',
      desc: 'Raw client ideas translate into modular TypeScript and React component blueprints.',
      icon: Cpu,
      snippet: `const vision = new VisionEngine({
  founder: "YUVARAJ.M",
  company: "Raj Tech IT",
  scalability: "Infinite"
});`,
      badge: 'ARCHITECTURAL PHASE',
    },
    {
      id: 'step-2',
      num: '02',
      title: 'UI Engineering & Rendering',
      subtitle: 'Source Code to Dynamic UI',
      desc: 'Components hydrate, Framer Motion graphics layer, and claymorphic UI cards render at 60 FPS.',
      icon: Layers,
      snippet: `<ClayCard variant="elevated">
  <ResponsiveGrid items={services} />
  <FluidMicroAnimations fps={60} />
</ClayCard>`,
      badge: 'BUILD & RENDER PHASE',
    },
    {
      id: 'step-3',
      num: '03',
      title: 'Deployment & SLA Support',
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
    <section id="scroll-story" className="relative py-16 sm:py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0878F9] font-mono text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Engineering Pipeline</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#102A43]">
            How Ideas Transform Into{' '}
            <span className="text-gradient-blue">Digital Products</span>
          </h2>
          <p className="text-[#526477] text-sm sm:text-base">
            Follow the continuous engineering journey from initial architectural concept to production-grade software.
          </p>
        </div>

        {/* 3 Step Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {storySteps.map((step, idx) => {
            const IconComponent = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'clay-btn-primary'
                    : 'bg-white text-[#526477] border border-[#DCE7F1] hover:text-[#0878F9] hover:bg-[#F8FAFD]'
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
          <div className="lg:col-span-5 space-y-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <span className="inline-block text-[11px] font-mono font-bold text-[#0878F9] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                  {storySteps[activeStep].badge}
                </span>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#102A43]">
                  {storySteps[activeStep].title}
                </h3>

                <p className="text-[#526477] text-sm sm:text-base leading-relaxed">
                  {storySteps[activeStep].desc}
                </p>

                <div className="pt-2 space-y-2 font-mono text-xs text-[#102A43]">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0878F9] shrink-0" />
                    <span>Pixel-Perfect Component Architecture</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0878F9] shrink-0" />
                    <span>60 FPS Fluid Claymorphic Physics</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0878F9] shrink-0" />
                    <span>Enterprise Security & High-Yield UX</span>
                  </div>
                </div>

                <div className="pt-3">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0878F9] hover:underline"
                  >
                    <span>View Resulting Work in Showcase</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Live Visual Render Sandbox (7 Cols) */}
          <div className="lg:col-span-7">
            <GlassCard className="p-0 overflow-hidden border-[#DCE7F1]">
              
              {/* Window Bar */}
              <div className="px-4 py-3 bg-[#F8FAFD] border-b border-[#E2EBF4] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                </div>
                <span className="text-xs font-mono text-[#526477]">
                  rajtech-pipeline-stage-{storySteps[activeStep].num}.ts
                </span>
                <span className="text-[10px] font-mono text-[#0878F9] bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-bold">
                  VERIFIED PIPELINE
                </span>
              </div>

              {/* Window Content */}
              <div className="p-6 sm:p-8 bg-white min-h-[280px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    <pre className="p-4 rounded-xl bg-[#F8FAFD] font-mono text-xs sm:text-sm text-[#102A43] border border-[#DCE7F1] overflow-x-auto">
                      {storySteps[activeStep].snippet}
                    </pre>

                    {/* Stage Status Display Box */}
                    <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white border border-blue-200 flex items-center justify-center text-[#0878F9] shadow-xs">
                          <Monitor className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#102A43]">Pipeline Execution Status</div>
                          <div className="text-[11px] text-[#526477]">All modules hydrated and verified</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded">
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
