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
      desc: 'Search engine optimization baked directly into clean markup, semantic tags, and optimized asset delivery.',
    },
    {
      icon: Cpu,
      title: 'Scalable Architecture',
      subtitle: 'Modular Clean Code',
      desc: 'Decoupled frontend & backend architectures built to scale gracefully from 10 to 1,000,000 active users.',
    },
    {
      icon: Palette,
      title: 'Modern UI & Claymorphism',
      subtitle: 'State of the Art Design',
      desc: 'Soft dual-shadow claymorphic panels, curated brand palettes, and fluid 60 FPS motion micro-interactions.',
    },
    {
      icon: LifeBuoy,
      title: 'Ongoing Support',
      subtitle: 'Dedicated SLA & Maintenance',
      desc: 'Proactive 24/7 technical monitoring, security audits, dependency updates, and feature enhancements.',
    },
  ];

  return (
    <section id="why-us" className="relative py-16 sm:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0878F9] font-mono text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>The Raj Tech IT Advantage</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#102A43]">
            Why Choose <span className="text-gradient-blue">Raj Tech IT</span>
          </h2>
          <p className="text-[#526477] text-sm sm:text-base leading-relaxed">
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
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <GlassCard className="h-full p-8 border-[#DCE7F1] group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0878F9] group-hover:bg-[#0878F9] group-hover:text-white transition-all duration-300 mb-6 shadow-xs">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="font-display font-bold text-2xl text-[#102A43] mb-1 group-hover:text-[#0878F9] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-[#0878F9] font-semibold mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-[#526477] text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Statistics Banner */}
        <GlassCard className="p-8 sm:p-10 border-[#DCE7F1] bg-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#E2EBF4]">
            <div className="pt-4 md:pt-0 space-y-1">
              <div className="font-display font-black text-3xl sm:text-4xl text-[#0878F9]">99.9%</div>
              <div className="text-xs text-[#526477] font-mono uppercase font-semibold">Uptime & Reliability</div>
            </div>
            <div className="pt-4 md:pt-0 space-y-1">
              <div className="font-display font-black text-3xl sm:text-4xl text-[#0878F9]">&lt; 2 Hours</div>
              <div className="text-xs text-[#526477] font-mono uppercase font-semibold">Client Inquiry SLA</div>
            </div>
            <div className="pt-4 md:pt-0 space-y-1">
              <div className="font-display font-black text-3xl sm:text-4xl text-[#0878F9]">100%</div>
              <div className="text-xs text-[#526477] font-mono uppercase font-semibold">Handcrafted Code</div>
            </div>
            <div className="pt-4 md:pt-0 space-y-1">
              <div className="font-display font-black text-3xl sm:text-4xl text-[#0878F9]">60 FPS</div>
              <div className="text-xs text-[#526477] font-mono uppercase font-semibold">Smooth Motion</div>
            </div>
          </div>
        </GlassCard>

      </div>
    </section>
  );
};
