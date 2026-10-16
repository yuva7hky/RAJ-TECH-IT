import React from 'react';
import { TechStack } from '../components/sections/TechStack';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Cpu } from 'lucide-react';
import { Link } from '../router/Router';
import { Button } from '../components/UI/Button';
import { GlassCard } from '../components/UI/GlassCard';

export const TechStackPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. Tech Stack Radar & Filters */}
      <TechStack />

      {/* 2. Architectural Standards Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6 border-[#DCE7F1]">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0878F9] mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#102A43] mb-1">
              60 FPS Interaction Physics
            </h3>
            <p className="text-[#526477] text-xs sm:text-sm leading-relaxed">
              Every interface uses optimized CSS and Framer Motion pipelines to prevent layout thrashing and maintain 60 frames per second on mobile devices.
            </p>
          </GlassCard>

          <GlassCard className="p-6 border-[#DCE7F1]">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0878F9] mb-4">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#102A43] mb-1">
              Strict TypeScript Type Safety
            </h3>
            <p className="text-[#526477] text-xs sm:text-sm leading-relaxed">
              Zero `any` types. Full compile-time verification across frontend, backend schemas, and API contracts for bulletproof stability.
            </p>
          </GlassCard>

          <GlassCard className="p-6 border-[#DCE7F1]">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0878F9] mb-4">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#102A43] mb-1">
              Secure Cloud Deployment
            </h3>
            <p className="text-[#526477] text-xs sm:text-sm leading-relaxed">
              Continuous deployment via Netlify, Vercel, and modern edge CDN networks with HTTPS, automated TLS, and automated branch previews.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card p-8 sm:p-12 bg-white border border-[#DCE7F1] text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0878F9] font-mono text-xs font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Tailored Architecture Specifications</span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#102A43]">
            Need a Specific Framework or API Integration?
          </h2>

          <p className="text-[#526477] text-sm sm:text-base max-w-xl mx-auto">
            We adapt our tech stack to your business constraints and existing infrastructure.
          </p>

          <div className="pt-2">
            <Link to="/contact">
              <Button size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Discuss Your Technical Stack
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
