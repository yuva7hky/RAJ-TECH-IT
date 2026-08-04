import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Smartphone, Search, Cpu, Palette, LifeBuoy, Award } from 'lucide-react';
import { GlassCard } from '../UI/GlassCard';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      subtitle: 'Agile Rapid Deployment',
      desc: 'Optimized sprint workflows ensure rapid prototyping and project delivery without compromising code quality.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      subtitle: 'Flawless Across All Screen Sizes',
      desc: 'Mobile-first layout engineering tested on dozens of physical breakpoints for zero horizontal scroll and fluid typography.',
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      subtitle: 'Core Web Vitals 99+',
      desc: 'Search engine optimization baked directly into clean SSR markup, open graph metadata, and fast image delivery.',
    },
    {
      icon: Cpu,
      title: 'Scalable Architecture',
      subtitle: 'Microservices & Clean Code',
      desc: 'Decoupled frontend & backend architectures built to scale gracefully from 10 to 1,000,000 active users.',
    },
    {
      icon: Palette,
      title: 'Modern UI',
      subtitle: 'Awwwards Glassmorphism Aesthetics',
      desc: 'Bespoke dark mode aesthetics, vibrant gradient lighting, and 60 FPS motion graphics that captivate visitors.',
    },
    {
      icon: LifeBuoy,
      title: 'Ongoing Support',
      subtitle: 'Dedicated SLA & Maintenance',
      desc: 'Proactive 24/7 technical monitoring, security audits, dependency updates, and feature enhancements.',
    },
  ];

  return (
    <section id="why-us" className="relative py-28 bg-transparent overflow-hidden">
      {/* Background Volumetric Lights */}
      <div className="absolute top-1/3 left-1/4 w-[650px] h-[650px] bg-blue-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <Award className="w-3.5 h-3.5" />
            <span>The RAJ TECH Advantage</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Why Choose <span className="text-gradient-cyan">RAJ TECH SOLUTIONS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            We deliver handcrafted enterprise software engineered for scale, reliability, and business growth.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <GlassCard className="h-full p-8 border-slate-800/90 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(0,210,255,0.25)] group transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/80 group-hover:border-cyan-400 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,210,255,0.5)] transition-all duration-300 mb-6">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="font-display font-bold text-2xl text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Animated Statistics Banner */}
        <GlassCard className="p-8 sm:p-10 border-cyan-500/30 bg-slate-900/80 shadow-[0_0_50px_rgba(0,210,255,0.2)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="pt-4 md:pt-0 space-y-1">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-white">99.9%</div>
              <div className="text-xs text-slate-400 font-mono uppercase">Uptime & Reliability</div>
            </div>
            <div className="pt-4 md:pt-0 space-y-1">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-cyan-300">&lt; 2 Hours</div>
              <div className="text-xs text-slate-400 font-mono uppercase">Client Inquiry SLA</div>
            </div>
            <div className="pt-4 md:pt-0 space-y-1">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-white">100%</div>
              <div className="text-xs text-slate-400 font-mono uppercase">Handcrafted Code</div>
            </div>
            <div className="pt-4 md:pt-0 space-y-1">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-cyan-300">60 FPS</div>
              <div className="text-xs text-slate-400 font-mono uppercase">Smooth Motion</div>
            </div>
          </div>
        </GlassCard>

      </div>
    </section>
  );
};
