import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { PRICING_PLANS, type PricingPlan } from '../../data/pricing';
import { GlassCard } from '../UI/GlassCard';
import { Button } from '../UI/Button';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="relative py-28 bg-transparent overflow-hidden">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <Zap className="w-3.5 h-3.5" />
            <span>Transparent Investment Tiers (INR)</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Simple, Transparent <span className="text-gradient-cyan">Pricing Plans</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Bespoke engineering plans built for startups, businesses, and enterprise platforms in Indian Rupees (INR).
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan: PricingPlan, idx: number) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex"
            >
              <GlassCard
                className={`w-full flex flex-col justify-between p-8 group border-slate-800 hover:border-cyan-400/60 hover:shadow-[0_0_50px_rgba(0,210,255,0.3)] transition-all duration-500 relative ${
                  plan.popular ? 'border-cyan-500/50 shadow-[0_0_35px_rgba(0,210,255,0.25)] bg-slate-900/90' : ''
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-mono text-[10px] uppercase font-bold tracking-widest shadow-glow-sm">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                      {plan.name}
                    </h3>
                    {plan.badge && !plan.popular && (
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* INR Price Range */}
                  <div className="mb-4">
                    <div className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                      {plan.priceRange}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">{plan.period}</div>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Features Checklist */}
                  <div className="space-y-2.5 border-t border-slate-800/80 pt-5 mb-8">
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a href="#contact" className="w-full">
                  <Button
                    variant={plan.popular ? 'primary' : 'secondary'}
                    size="md"
                    className="w-full justify-center"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    {plan.ctaText}
                  </Button>
                </a>

              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
