import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Target, Eye, Code, Terminal, Heart, ArrowRight } from 'lucide-react';
import { GlassCard } from '../UI/GlassCard';
import { Link } from '../../router/Router';
import founderImg from '../../assets/Founder.png';

export const Founder: React.FC = () => {
  return (
    <section id="founder" className="relative py-16 sm:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0878F9] font-mono text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Leadership & Architectural Vision</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#102A43]">
            Meet the <span className="text-gradient-blue">Founder</span>
          </h2>
          <p className="text-[#526477] text-sm sm:text-base leading-relaxed">
            The engineering philosophy and passion behind Raj Tech IT.
          </p>
        </div>

        {/* Founder Card Showcase */}
        <GlassCard className="p-8 sm:p-12 border-[#DCE7F1] relative overflow-hidden bg-white">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Founder Visual / Avatar Badge Column (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              
              {/* Avatar Frame */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full p-2 bg-gradient-to-tr from-[#0878F9] via-[#06B6D4] to-blue-300 shadow-[0_12px_32px_rgba(8,120,249,0.25)] mb-5"
              >
                <div className="w-full h-full rounded-full bg-white border-4 border-white shadow-inner relative overflow-hidden">
                  <img
                    src={founderImg}
                    alt="YUVARAJ.M — Founder & Chief Software Architect of Raj Tech IT"
                    className="w-full h-full object-cover object-[center_16%]"
                    loading="eager"
                  />
                </div>
              </motion.div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#102A43] mb-1">
                YUVARAJ.M
              </h3>
              <p className="text-xs font-mono text-[#0878F9] tracking-wide uppercase font-bold mb-4">
                Founder & Chief Software Architect
              </p>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F8FC] border border-[#DCE7F1] text-[#102A43] text-xs font-mono font-medium">
                <Terminal className="w-3.5 h-3.5 text-[#0878F9]" />
                <span>Transforming Ideas Into Digital Reality</span>
              </div>
            </div>

            {/* Right Mission, Vision, and Philosophy Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Introduction Bio */}
              <div>
                <h4 className="font-display font-bold text-xl text-[#102A43] mb-2.5 flex items-center gap-2">
                  <Code className="w-5 h-5 text-[#0878F9]" />
                  Why Raj Tech IT Exists
                </h4>
                <p className="text-[#526477] text-sm sm:text-base leading-relaxed">
                  "Most websites today feel like cookie-cutter templates that lack soul, speed, and real business performance. I founded <strong className="text-[#102A43]">Raj Tech IT</strong> to redefine digital software engineering—building custom, handcrafted web applications and AI platforms that combine luxury design with ultra-fast 60 FPS performance."
                </p>
              </div>

              {/* Mission & Vision Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                
                {/* Mission Card */}
                <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#DCE7F1] hover:border-[#BFDBFE] transition-colors">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-[#0878F9]">
                      <Target className="w-4 h-4" />
                    </div>
                    <h5 className="font-display font-bold text-base text-[#102A43]">Our Mission</h5>
                  </div>
                  <p className="text-[#526477] text-xs leading-relaxed">
                    To empower ambitious businesses with handcrafted, enterprise-grade software that turns abstract concepts into high-yielding digital assets.
                  </p>
                </div>

                {/* Vision Card */}
                <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#DCE7F1] hover:border-[#BFDBFE] transition-colors">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center text-[#06B6D4]">
                      <Eye className="w-4 h-4" />
                    </div>
                    <h5 className="font-display font-bold text-base text-[#102A43]">Our Vision</h5>
                  </div>
                  <p className="text-[#526477] text-xs leading-relaxed">
                    To become the global gold standard for boutique software engineering, AI systems integration, and Awwwards-level interactive web experiences.
                  </p>
                </div>

              </div>

              {/* Leadership Guarantees */}
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-[#102A43]">
                <span className="flex items-center gap-2 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Direct Engineer Communication
                </span>
                <span className="flex items-center gap-2 font-medium">
                  <Heart className="w-4 h-4 text-[#0878F9]" /> 100% Quality Commitment
                </span>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="clay-btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold"
                >
                  <span>Connect With YUVARAJ.M</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>

        </GlassCard>

      </div>
    </section>
  );
};
