import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Zap, Globe, Award, Terminal } from 'lucide-react';
import { GlassCard } from '../UI/GlassCard';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: 'Enterprise Architecture',
      desc: 'Clean, microservice-driven code bases built to scale effortlessly from early users to millions.',
    },
    {
      icon: Zap,
      title: '60 FPS Performance',
      desc: 'Hyper-optimized bundle sizes, instant client-side transitions, and zero layout shifts.',
    },
    {
      icon: ShieldCheck,
      title: 'Bank-Grade Security',
      desc: 'SOC2 & HIPAA compliant security practices, RBAC encryption, and vulnerability testing.',
    },
    {
      icon: Award,
      title: 'Awwwards Quality',
      desc: 'Pixel-perfect typography, fluid micro-interactions, dark mode elegance, and bespoke design.',
    },
  ];

  return (
    <section id="about" className="relative py-28 bg-transparent overflow-hidden">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <Terminal className="w-3.5 h-3.5" />
            <span>About RAJ TECH SOLUTIONS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Engineering the Next Generation of{' '}
            <span className="text-gradient-cyan">Digital Products</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We are not a generic freelancer studio. We are a modern software engineering agency that builds enterprise-grade web applications, AI infrastructure, and custom software for ambitious businesses worldwide.
          </p>
        </div>

        {/* 4 Capability Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="h-full space-y-4 p-6 border-slate-800/80 hover:border-cyan-500/40">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Deep Dive Enterprise Capability Banner */}
        <GlassCard className="p-8 sm:p-12 border-cyan-500/30 bg-slate-900/70 shadow-glow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                Our Engineering Philosophy
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Built for High Growth, Zero Tech Debt, and High Conversion
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                From initial architectural planning to cloud release and ongoing support, RAJ TECH SOLUTIONS applies strict engineering standards. We pair modern React architecture with backend APIs and custom AI models to give your product a distinct competitive edge.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <a
                href="mailto:ajayarun177@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-xs font-semibold text-white shadow-glow-md hover:scale-105 transition-all"
              >
                <span>Consult Our Senior Engineers</span>
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </GlassCard>

      </div>
    </section>
  );
};
