import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQ_DATA, type FAQItem } from '../../data/faq';
import { GlassCard } from '../UI/GlassCard';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative py-28 bg-transparent overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 font-mono text-xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Everything you need to know about partnering with RAJ TECH SOLUTIONS.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item: FAQItem) => {
            const isOpen = openId === item.id;
            return (
              <GlassCard
                key={item.id}
                interactive={false}
                className={`p-0 overflow-hidden border-slate-800/90 transition-colors duration-300 ${
                  isOpen ? 'border-cyan-500/50 bg-slate-900/80 shadow-glow-sm' : ''
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded shrink-0">
                      {item.category}
                    </span>
                    <span className="font-display font-bold text-base sm:text-lg text-white">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-0 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/80 mt-1"
                    >
                      <div className="pt-4">{item.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
