import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Target, Eye, Code, Terminal, Heart } from 'lucide-react';
import { GlassCard } from '../UI/GlassCard';

export const Founder: React.FC = () => {
  return (
    <section id="founder" className="relative py-28 bg-transparent overflow-hidden border-t border-slate-800/80">
      {/* Background Volumetric Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-purple-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <Award className="w-3.5 h-3.5" />
            <span>Leadership & Vision</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Meet the <span className="text-gradient-cyan">Founder</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            The engineering philosophy and passion behind RAJ TECH SOLUTIONS.
          </p>
        </div>

        {/* Founder Glass Card Showcase */}
        <GlassCard className="p-8 sm:p-12 border-cyan-500/30 shadow-[0_0_60px_rgba(0,210,255,0.15)] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Founder Visual / Avatar Badge Column (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              
              {/* Luxury Avatar Ring Frame */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-1.5 bg-gradient-to-tr from-cyan-400 via-blue-600 to-indigo-500 shadow-[0_0_40px_rgba(0,210,255,0.4)] mb-6"
              >
                <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center border-2 border-slate-900 relative overflow-hidden group">
                  
                  {/* Subtle animated background gradient inside avatar */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-slate-950 to-cyan-950/40" />

                  {/* Founder Initial Badge / Visual Representation */}
                  <div className="relative z-10 flex flex-col items-center space-y-2">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-glow-sm">
                      <span className="font-display font-black text-3xl text-white">YM</span>
                    </div>
                    <span className="text-xs font-mono text-cyan-300 font-semibold tracking-wider">
                      FOUNDER & LEAD ARCHITECT
                    </span>
                  </div>

                  {/* Hover Ping Circle */}
                  <span className="absolute inset-0 rounded-full border border-cyan-400/40 animate-ping pointer-events-none" />
                </div>
              </motion.div>

              <h3 className="font-display font-black text-3xl text-white mb-1">
                YUVARAJ.M
              </h3>
              <p className="text-xs font-mono text-cyan-400 tracking-wide uppercase font-semibold mb-4">
                Founder & Chief Software Architect
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Transforming Ideas Into Digital Reality</span>
              </div>
            </div>

            {/* Right Mission, Vision, and Philosophy Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              {/* Introduction Bio */}
              <div>
                <h4 className="font-display font-bold text-xl text-white mb-3 flex items-center gap-2">
                  <Code className="w-5 h-5 text-cyan-400" />
                  Why RAJ TECH SOLUTIONS Exists
                </h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  "Most websites today feel like cookie-cutter templates that lack soul and performance. I founded <strong className="text-white">RAJ TECH SOLUTIONS</strong> to redefine digital software engineering—building custom, handcrafted web applications and AI platforms that combine luxury design with ultra-fast 60 FPS performance."
                </p>
              </div>

              {/* Mission & Vision Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                
                {/* Mission Card */}
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Target className="w-4 h-4" />
                    </div>
                    <h5 className="font-display font-bold text-base text-white">Our Mission</h5>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    To empower ambitious businesses with handcrafted, enterprise-grade software that turns abstract concepts into high-yielding digital assets.
                  </p>
                </div>

                {/* Vision Card */}
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Eye className="w-4 h-4" />
                    </div>
                    <h5 className="font-display font-bold text-base text-white">Our Vision</h5>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    To become the global gold standard for boutique software engineering, AI systems integration, and Awwwards-level interactive web experiences.
                  </p>
                </div>

              </div>

              {/* Leadership Guarantees */}
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Direct Engineer Communication
                </span>
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-cyan-400" /> 100% Quality Commitment
                </span>
              </div>

            </div>

          </div>

        </GlassCard>

      </div>
    </section>
  );
};
