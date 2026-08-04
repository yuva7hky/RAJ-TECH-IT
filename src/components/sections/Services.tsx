import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layout, Sparkles, Zap, Palette, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { SERVICES_DATA, type ServiceItem } from '../../data/services';
import { GlassCard } from '../UI/GlassCard';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Layout,
  Sparkles,
  Zap,
  Palette,
  ShieldCheck,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-28 bg-transparent overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Enterprise Engineering Capabilities</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Enterprise Services <span className="text-gradient-cyan">Engine</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            End-to-end software engineering tailored for enterprise performance, luxury aesthetics, and high conversion.
          </p>
        </div>

        {/* 6 Enterprise Glass Cards with Scroll Animation & Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service: ServiceItem, idx: number) => {
            const IconComponent = iconMap[service.iconName] || Globe;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 70, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.12,
                  ease: [0.175, 0.885, 0.32, 1.275], // Soft bounce spring ease
                }}
              >
                <GlassCard className="h-full flex flex-col justify-between p-8 group border-slate-800 hover:border-cyan-400/60 hover:shadow-[0_0_50px_rgba(0,210,255,0.3)] transition-all duration-500 relative overflow-hidden">
                  
                  {/* Glass Reflection Light Overlay on Hover */}
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                  <div>
                    {/* Top Icon & Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/80 group-hover:border-cyan-400 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,210,255,0.5)] transition-all duration-300">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
                        {service.badgeText}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">
                      {service.category}
                    </div>

                    <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2.5 border-t border-slate-800/80 pt-4 mb-6">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2.5 text-xs text-slate-400">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 group-hover:text-white transition-colors pt-2"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </a>

                </GlassCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
