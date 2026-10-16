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
    <section className="relative py-16 sm:py-24 bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0878F9] font-mono text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#102A43]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#526477] text-sm sm:text-base leading-relaxed">
            Everything you need to know about partnering with Raj Tech IT.
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
                className={`p-0 overflow-hidden border-[#DCE7F1] transition-all duration-200 ${
                  isOpen ? 'border-[#0878F9] shadow-md ring-1 ring-[#0878F9]/20' : ''
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#0878F9] bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded font-bold shrink-0">
                      {item.category}
                    </span>
                    <span className="font-display font-bold text-base sm:text-lg text-[#102A43]">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0878F9] shrink-0 transition-transform duration-300 ${
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
                      transition={{ duration: 0.25 }}
                      className="px-5 sm:px-6 pb-6 pt-0 text-[#526477] text-xs sm:text-sm leading-relaxed border-t border-[#E2EBF4]"
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
