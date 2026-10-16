import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { Link } from '../../router/Router';
import { Button } from '../UI/Button';
import { GlassCard } from '../UI/GlassCard';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Content Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Introductory Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#0878F9] animate-pulse" />
              <span className="text-xs font-mono text-[#0878F9] font-bold tracking-wide">
                Transforming Ideas Into Digital Reality
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-[#102A43]"
            >
              We Build{' '}
              <span className="text-gradient-blue">
                Handcrafted Software
              </span>{' '}
              That Defines Premium Brands.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#526477] text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
            >
              <strong className="text-[#102A43] font-bold">Raj Tech IT</strong> creates world-class web applications, AI infrastructure, and custom digital platforms engineered for luxury aesthetics, rock-solid security, and high conversion.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link to="/contact">
                <Button size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                  Start Your Project
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="secondary" size="lg" icon={<Layers className="w-4 h-4 text-[#0878F9]" />}>
                  Explore Our Projects
                </Button>
              </Link>
            </motion.div>

            {/* Reassurance Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#526477] font-mono"
            >
              <span className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#0878F9]" /> Founder: YUVARAJ.M
              </span>
              <span className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#0878F9]" /> 100% Handcrafted Code
              </span>
              <span className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#0878F9]" /> Netlify & Vercel Verified
              </span>
            </motion.div>

          </div>

          {/* Right Visual Architecture Card (5 Cols) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <GlassCard className="p-6 sm:p-7 border-[#DCE7F1] shadow-[0_15px_35px_-5px_rgba(8,120,249,0.1),0_8px_15px_-4px_rgba(16,42,67,0.05)] bg-white space-y-4">
                
                {/* Header Window Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-[#E2EBF4]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                  </div>
                  <span className="text-[11px] font-mono text-[#526477] bg-[#F4F8FC] px-2.5 py-0.5 rounded border border-[#DCE7F1]">
                    rajtech-core-engine.tsx
                  </span>
                  <Sparkles className="w-4 h-4 text-[#0878F9]" />
                </div>

                {/* Architecture Code Snippet */}
                <pre className="p-4 rounded-xl bg-[#F8FAFD] border border-[#DCE7F1] text-xs font-mono text-[#102A43] overflow-x-auto leading-relaxed">
{`const agency = new RajTechIT({
  founder: "YUVARAJ.M",
  standards: "Handcrafted Luxury",
  technology: ["React", "TypeScript", "AI"],
  performanceScore: 100,
  productionReady: true
});

await agency.launchEnterpriseProduct();`}
                </pre>

                {/* Architecture Highlight Pills */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center gap-2.5">
                    <Code2 className="w-4 h-4 text-[#0878F9] shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase font-mono text-[#526477]">Architecture</div>
                      <div className="text-xs font-bold text-[#102A43]">Custom Modular</div>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase font-mono text-emerald-800">Quality</div>
                      <div className="text-xs font-bold text-emerald-950">Enterprise Ready</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <Link
                    to="/contact"
                    className="text-xs font-bold text-[#0878F9] hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>Request Custom Architecture Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </GlassCard>
            </motion.div>
          </div>

        </div>

        {/* 4 Pillars Stats Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 sm:mt-16 clay-card p-6 sm:p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#E2EBF4]">
            <div className="pt-4 md:pt-0">
              <div className="font-display font-black text-3xl sm:text-4xl text-[#0878F9] mb-1 tracking-tight">
                10<span className="text-[#06B6D4]">+</span>
              </div>
              <div className="text-xs text-[#526477] uppercase tracking-wider font-semibold">
                Projects Completed
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="font-display font-black text-3xl sm:text-4xl text-[#0878F9] mb-1 tracking-tight">
                100<span className="text-[#06B6D4]">%</span>
              </div>
              <div className="text-xs text-[#526477] uppercase tracking-wider font-semibold">
                Client Satisfaction
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="font-display font-black text-3xl sm:text-4xl text-[#0878F9] mb-1 tracking-tight">
                60<span className="text-[#06B6D4]">FPS</span>
              </div>
              <div className="text-xs text-[#526477] uppercase tracking-wider font-semibold">
                Fluid Animations
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="font-display font-black text-3xl sm:text-4xl text-[#0878F9] mb-1 tracking-tight">
                24<span className="text-[#06B6D4]">/7</span>
              </div>
              <div className="text-xs text-[#526477] uppercase tracking-wider font-semibold">
                SLA Engineering Support
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
