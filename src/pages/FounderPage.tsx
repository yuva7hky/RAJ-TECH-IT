import React from 'react';
import { Founder } from '../components/sections/Founder';
import { Phone, Mail, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from '../router/Router';
import { Button } from '../components/UI/Button';
import { GlassCard } from '../components/UI/GlassCard';

export const FounderPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. Founder Section Component */}
      <Founder />

      {/* 2. Direct Channels to Founder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard className="p-8 sm:p-10 border-[#DCE7F1]">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h3 className="font-display font-extrabold text-2xl text-[#102A43]">
              Direct Founder Communication Channels
            </h3>
            <p className="text-xs sm:text-sm text-[#526477]">
              Every client communicates directly with senior leadership. No account manager layers or junior handoffs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <a
              href="https://wa.me/919442812481"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 hover:border-emerald-300 transition-all text-center flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="text-sm font-bold text-emerald-950">WhatsApp Founder</div>
              <div className="text-xs font-mono text-emerald-800">+91 9442812481</div>
            </a>

            <a
              href="tel:+919442812481"
              className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#DCE7F1] hover:border-[#BFDBFE] transition-all text-center flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0878F9] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-sm font-bold text-[#102A43]">Direct Phone Line</div>
              <div className="text-xs font-mono text-[#0878F9]">+91 9442812481</div>
            </a>

            <a
              href="mailto:ajayarun177@gmail.com"
              className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#DCE7F1] hover:border-[#BFDBFE] transition-all text-center flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0878F9] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-sm font-bold text-[#102A43]">Official Email</div>
              <div className="text-xs font-mono text-[#0878F9] truncate max-w-full">ajayarun177@gmail.com</div>
            </a>
          </div>

          <div className="pt-8 text-center">
            <Link to="/contact">
              <Button size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Submit Project Request Form
              </Button>
            </Link>
          </div>
        </GlassCard>
      </section>

    </div>
  );
};
