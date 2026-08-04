import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';
import { TESTIMONIALS_DATA, type TestimonialItem } from '../../data/testimonials';
import { GlassCard } from '../UI/GlassCard';

export const Testimonials: React.FC = () => {
  return (
    <section className="relative py-28 bg-transparent overflow-hidden">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Trusted by Ambitious Leaders
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Read what CTOs, founders, and product directors say about engineering partnerships with RAJ TECH SOLUTIONS.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item: TestimonialItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <GlassCard className="h-full flex flex-col justify-between p-8 border-slate-800/90 hover:border-cyan-500/40 hover:shadow-[0_0_35px_rgba(0,210,255,0.2)]">
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-800/80 mt-6">
                  <img
                    src={item.avatar}
                    alt={item.clientName}
                    className="w-11 h-11 rounded-full object-cover border-2 border-cyan-400/50 shadow-glow-sm"
                  />
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">{item.clientName}</h4>
                    <p className="text-xs text-cyan-300 font-mono">{item.role}</p>
                    <p className="text-[11px] text-slate-400">{item.company}</p>
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
