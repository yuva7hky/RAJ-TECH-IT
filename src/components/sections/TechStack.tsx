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
    <section id="tech-stack" className="relative py-28 bg-transparent overflow-hidden">
      {/* Volumetric background lights */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <Cpu className="w-3.5 h-3.5" />
            <span>Modern Stack Architecture</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Cutting-Edge <span className="text-gradient-cyan">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Engineered using industry-leading frameworks, languages, and graphics engines for maximum speed and security.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-[0_0_20px_rgba(0,210,255,0.4)] border border-cyan-300/40'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Animated Floating Glass Circles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredTech.map((tech: TechItem, idx: number) => {
            const IconComponent = iconMap[tech.iconName] || Cpu;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: idx * 0.06 },
                  scale: { duration: 0.5, delay: idx * 0.06 },
                  y: {
                    duration: 4 + (idx % 3),
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: idx * 0.2,
                  },
                }}
              >
                <GlassCard className={`p-6 flex flex-col items-center justify-center text-center group cursor-pointer border-slate-800/90 ${tech.glowColor} transition-all duration-300 h-full`}>
                  
                  {/* Animated Floating Glass Circle */}
                  <div className="w-16 h-16 rounded-full bg-slate-900/90 border border-slate-700/80 group-hover:border-cyan-400 group-hover:scale-110 flex items-center justify-center text-cyan-400 group-hover:text-white shadow-[0_0_20px_rgba(0,210,255,0.2)] transition-all duration-300 mb-4 relative">
                    <IconComponent className="w-8 h-8" />
                    <span className="absolute inset-0 rounded-full bg-cyan-400/10 animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="font-display font-bold text-base text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </h3>

                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 mb-2">
                    {tech.badge}
                  </span>

                  <p className="text-[11px] text-slate-400 leading-snug line-clamp-2">
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
