import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';
import { TESTIMONIALS_DATA, type TestimonialItem } from '../../data/testimonials';
import { GlassCard } from '../UI/GlassCard';

export const Testimonials: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0878F9] font-mono text-xs font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#102A43]">
            Trusted by Ambitious Leaders
          </h2>
          <p className="text-[#526477] text-sm sm:text-base leading-relaxed">
            Read what CTOs, founders, and product directors say about engineering partnerships with Raj Tech IT.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item: TestimonialItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col justify-between p-8 border-[#DCE7F1]">
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-[#102A43] text-xs sm:text-sm leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-[#E2EBF4] mt-6">
                  <img
                    src={item.avatar}
                    alt={item.clientName}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#0878F9]/40 shadow-xs"
                  />
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#102A43]">{item.clientName}</h4>
                    <p className="text-xs text-[#0878F9] font-mono font-semibold">{item.role}</p>
                    <p className="text-[11px] text-[#526477]">{item.company}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
