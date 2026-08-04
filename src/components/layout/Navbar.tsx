import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Phone, Mail } from 'lucide-react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export const Navbar: React.FC = () => {
  const { isScrolled } = useScrollProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Founder', href: '#founder' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#030712]/90 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.4)] group-hover:scale-105 transition-transform duration-300">
              <span className="font-display font-black text-xl text-white tracking-tighter">R</span>
              <div className="absolute inset-0 rounded-xl bg-cyan-400/20 animate-ping opacity-25 pointer-events-none" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-base sm:text-lg text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                  RAJ TECH SOLUTIONS
                </span>
                <span className="hidden sm:inline-block text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono">
                  v2.4
                </span>
              </div>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium hidden md:block">
                Transforming Ideas Into Digital Reality
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Contact & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919442812481"
              className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors bg-slate-900/60 px-3 py-2 rounded-lg border border-slate-800"
              title="Call RAJ TECH SOLUTIONS"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>+91 9442812481</span>
            </a>
            <a
              href="#contact"
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-xs font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(0,210,255,0.6)] hover:scale-[1.03] transition-all duration-300"
            >
              <span>Start Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-cyan-400 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#030712]/95 border-b border-cyan-500/20 backdrop-blur-2xl px-4 pt-4 pb-6 mt-2 max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-cyan-400 border border-transparent hover:border-cyan-500/20 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
                <a
                  href="tel:+919442812481"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900 text-sm font-mono text-slate-300 border border-slate-800"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+91 9442812481</span>
                </a>
                <a
                  href="mailto:ajayarun177@gmail.com"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900 text-sm font-mono text-slate-300 border border-slate-800 truncate"
                >
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate">ajayarun177@gmail.com</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-sm font-semibold text-white shadow-glow-md"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
