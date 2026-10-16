import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Atom, Zap, Server, FileCode, Smartphone, Flame, Database, Box, Sparkles, Activity, Layers, BoxSelect, Cpu } from 'lucide-react';
import { TECH_STACK_DATA, type TechItem } from '../../data/techStack';
import { GlassCard } from '../UI/GlassCard';

const iconMap: Record<string, React.ElementType> = {
  Atom,
  Zap,
  Server,
  FileCode,
  Smartphone,
  Flame,
  Database,
  Box,
  Sparkles,
  Activity,
  Layers,
  BoxSelect,
};

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Frontend', 'Backend & AI', 'Database & Cloud', 'Animation & Mobile'];

  const filteredTech = activeCategory === 'All'
    ? TECH_STACK_DATA
    : TECH_STACK_DATA.filter((t) => t.category === activeCategory);

  return (
    <section id="tech-stack" className="relative py-16 sm:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0878F9] font-mono text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Modern Stack Architecture</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#102A43]">
            Cutting-Edge <span className="text-gradient-blue">Tech Stack</span>
          </h2>
          <p className="text-[#526477] text-sm sm:text-base leading-relaxed">
            Engineered using industry-leading frameworks, languages, and graphics engines for maximum speed and security.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'clay-btn-primary'
                  : 'bg-white text-[#526477] border border-[#DCE7F1] hover:text-[#0878F9] hover:bg-[#F8FAFD]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {filteredTech.map((tech: TechItem, idx: number) => {
            const IconComponent = iconMap[tech.iconName] || Cpu;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.04,
                }}
              >
                <GlassCard className="p-5 flex flex-col items-center justify-center text-center group cursor-pointer border-[#DCE7F1] h-full hover:border-[#BFDBFE]">
                  
                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 group-hover:scale-105 flex items-center justify-center text-[#0878F9] group-hover:bg-[#0878F9] group-hover:text-white transition-all duration-200 mb-3 shadow-xs">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="font-display font-bold text-sm text-[#102A43] mb-1 group-hover:text-[#0878F9] transition-colors">
                    {tech.name}
                  </h3>

                  <span className="text-[10px] font-mono text-[#0878F9] bg-blue-50 px-2 py-0.5 rounded border border-blue-200 mb-2 font-semibold">
                    {tech.badge}
                  </span>

                  <p className="text-[11px] text-[#526477] leading-snug line-clamp-2">
                    {tech.description}
                  </p>

                </GlassCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
