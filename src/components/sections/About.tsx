import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Zap, Award, Terminal, ArrowRight } from 'lucide-react';
import { GlassCard } from '../UI/GlassCard';
import { Link } from '../../router/Router';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: 'Enterprise Architecture',
      desc: 'Clean, modular TypeScript & React codebases built to scale effortlessly from early users to millions.',
    },
    {
      icon: Zap,
      title: '60 FPS Performance',
      desc: 'Hyper-optimized bundle sizes, instant client-side transitions, and zero layout shifts for lightning-fast speeds.',
    },
    {
      icon: ShieldCheck,
      title: 'Bank-Grade Security',
      desc: 'Enterprise security practices, RBAC encryption, clean API endpoints, and vulnerability testing.',
    },
    {
      icon: Award,
      title: 'Awwwards Quality',
      desc: 'Pixel-perfect typography, fluid micro-interactions, clean claymorphic elegance, and bespoke UI engineering.',
    },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0878F9] font-mono text-xs font-semibold">
            <Terminal className="w-3.5 h-3.5" />
            <span>About Raj Tech IT</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#102A43]">
            Engineering the Next Generation of{' '}
            <span className="text-gradient-blue">Digital Products</span>
          </h2>
          <p className="text-[#526477] text-sm sm:text-base leading-relaxed">
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
                <GlassCard className="h-full space-y-4 p-6 border-[#DCE7F1]">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0878F9]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#102A43]">
                    {item.title}
                  </h3>
                  <p className="text-[#526477] text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Deep Dive Enterprise Capability Banner */}
        <GlassCard className="p-8 sm:p-12 border-[#DCE7F1] bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono font-bold text-[#0878F9] uppercase tracking-widest">
                Our Engineering Philosophy
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#102A43]">
                Built for High Growth, Zero Tech Debt, and Maximum Conversion
              </h3>
              <p className="text-[#526477] text-sm leading-relaxed">
                From initial architectural planning to cloud release and ongoing support, Raj Tech IT applies strict engineering standards. We pair modern React architecture with backend APIs and custom AI models to give your product a distinct competitive edge.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <Link
                to="/contact"
                className="clay-btn-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold transition-all"
              >
                <span>Consult Our Senior Engineers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </GlassCard>

      </div>
    </section>
  );
};
