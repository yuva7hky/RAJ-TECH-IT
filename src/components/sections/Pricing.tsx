import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { PRICING_PLANS, type PricingPlan } from '../../data/pricing';
import { GlassCard } from '../UI/GlassCard';
import { Button } from '../UI/Button';
import { Link } from '../../router/Router';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="relative py-16 sm:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0878F9] font-mono text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>Transparent Investment Tiers (INR)</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#102A43]">
            Simple, Transparent <span className="text-gradient-blue">Pricing Plans</span>
          </h2>
          <p className="text-[#526477] text-sm sm:text-base leading-relaxed">
            Bespoke engineering plans built for startups, businesses, and enterprise platforms in Indian Rupees (INR).
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan: PricingPlan, idx: number) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex"
            >
              <GlassCard
                className={`w-full flex flex-col justify-between p-7 group border-[#DCE7F1] relative ${
                  plan.popular
                    ? 'border-[#0878F9] shadow-[0_15px_35px_-5px_rgba(8,120,249,0.18)] bg-white ring-2 ring-[#0878F9]/20'
                    : ''
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full clay-btn-primary font-mono text-[10px] uppercase font-bold tracking-widest">
                    {plan.badge || 'MOST POPULAR'}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-bold text-xl text-[#102A43] group-hover:text-[#0878F9] transition-colors">
                      {plan.name}
                    </h3>
                    {plan.badge && !plan.popular && (
                      <span className="text-[10px] font-mono text-[#0878F9] bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full font-bold">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* INR Price Range */}
                  <div className="mb-3">
                    <div className="font-display font-black text-2xl sm:text-3xl text-[#0878F9] tracking-tight">
                      {plan.priceRange}
                    </div>
                    <div className="text-[11px] font-mono text-[#526477] font-medium">{plan.period}</div>
                  </div>

                  <p className="text-[#526477] text-xs leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Features Checklist */}
                  <div className="space-y-2.5 border-t border-[#E2EBF4] pt-5 mb-8">
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-[#102A43]">
                        <Check className="w-4 h-4 text-[#0878F9] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link to="/contact" className="w-full block">
                  <Button
                    variant={plan.popular ? 'primary' : 'secondary'}
                    size="md"
                    className="w-full justify-center"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    {plan.ctaText}
                  </Button>
                </Link>

              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
