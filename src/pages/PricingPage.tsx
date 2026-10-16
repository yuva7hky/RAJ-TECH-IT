import React from 'react';
import { Pricing } from '../components/sections/Pricing';
import { FAQ } from '../components/sections/FAQ';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from '../router/Router';
import { Button } from '../components/UI/Button';

export const PricingPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. Transparent Pricing Plans (INR) */}
      <Pricing />

      {/* 2. Frequently Asked Questions */}
      <FAQ />

      {/* 3. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card p-8 sm:p-12 bg-white border border-[#DCE7F1] text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0878F9] font-mono text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Clear SOW & Transparent Deliverables</span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#102A43]">
            Need a Custom Architecture or Enterprise Quotation?
          </h2>

          <p className="text-[#526477] text-sm sm:text-base max-w-xl mx-auto">
            We will provide a line-item breakdown of your project scope with no hidden charges.
          </p>

          <div className="pt-2">
            <Link to="/contact">
              <Button size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Request Custom Quote via WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
