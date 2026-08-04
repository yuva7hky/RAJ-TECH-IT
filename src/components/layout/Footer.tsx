import React from 'react';
import { Phone, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-transparent border-t border-slate-800/80 pt-16 pb-12 overflow-hidden text-slate-400 text-sm">
      {/* Background Subtle Radial Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-glow-sm">
                <span className="font-display font-black text-xl text-white">R</span>
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl text-white tracking-wide">
                  RAJ TECH SOLUTIONS
                </h3>
                <p className="text-xs text-cyan-400 font-mono">Transforming Ideas Into Digital Reality</p>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Handcrafted enterprise software company creating modern web applications, AI-driven platforms, luxury UI/UX design, and 60 FPS motion experiences.
            </p>
            <div className="text-xs font-mono text-slate-300">
              Founder: <strong className="text-white font-semibold">YUVARAJ.M</strong>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>All Production Engines Operational</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-white text-xs uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Agency</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services Engine</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Solutions</a></li>
              <li><a href="#process" className="hover:text-cyan-400 transition-colors">7-Step Process</a></li>
              <li><a href="#tech-stack" className="hover:text-cyan-400 transition-colors">Tech Stack</a></li>
              <li><a href="#founder" className="hover:text-cyan-400 transition-colors">Founder Section</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing (INR)</a></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-white text-xs uppercase tracking-wider font-mono">Services</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Web Applications</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">AI Solutions</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Automation</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">UI UX Design</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Maintenance & Support</a></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-white text-xs uppercase tracking-wider">Direct Contact</h4>
            <div className="space-y-2.5 text-xs font-mono">
              <a
                href="tel:+919442812481"
                className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-400 transition-colors p-2.5 rounded-xl bg-slate-950/80 border border-slate-800"
              >
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>+91 9442812481</span>
              </a>
              <a
                href="mailto:ajayarun177@gmail.com"
                className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-400 transition-colors p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 truncate"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="truncate">ajayarun177@gmail.com</span>
              </a>
            </div>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>SOC2 & Confidentiality Compliant</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} RAJ TECH SOLUTIONS. Founded by YUVARAJ.M. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Security SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
