import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layout, Sparkles, Zap, Palette, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { SERVICES_DATA, type ServiceItem } from '../../data/services';
import { GlassCard } from '../UI/GlassCard';
import { Link } from '../../router/Router';

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
    <section id="services" className="relative py-16 sm:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0878F9] font-mono text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Enterprise Engineering Capabilities</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#102A43]">
            Enterprise Services <span className="text-gradient-blue">Engine</span>
          </h2>
          <p className="text-[#526477] text-sm sm:text-base leading-relaxed">
            End-to-end software engineering tailored for enterprise performance, luxury aesthetics, and high conversion.
          </p>
        </div>

        {/* 6 Enterprise Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service: ServiceItem, idx: number) => {
            const IconComponent = iconMap[service.iconName] || Globe;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                }}
              >
                <GlassCard className="h-full flex flex-col justify-between p-8 group border-[#DCE7F1] relative overflow-hidden">
                  
                  <div>
                    {/* Top Icon & Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0878F9] group-hover:scale-105 group-hover:bg-[#0878F9] group-hover:text-white transition-all duration-300 shadow-sm">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#0878F9] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full uppercase tracking-wider">
                        {service.badgeText}
                      </span>
                    </div>

                    <div className="text-xs font-mono font-bold text-[#526477] uppercase tracking-widest mb-1">
                      {service.category}
                    </div>

                    <h3 className="font-display font-bold text-2xl text-[#102A43] mb-3 group-hover:text-[#0878F9] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-[#526477] text-xs sm:text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2.5 border-t border-[#E2EBF4] pt-4 mb-6">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2.5 text-xs text-[#526477]">
                          <Check className="w-3.5 h-3.5 text-[#0878F9] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#0878F9] hover:text-[#005bb5] transition-colors"
                    >
                      <span>Request Proposal</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </GlassCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
